import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSettingsService } from './user-settings.service';
import { takeUntil, finalize } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LoadingService, AppService } from '../../../../services';

@Component({
    selector: 'user-settigs-view',
    templateUrl: 'user-settigs.view.html',
    styleUrls: ['user-settigs.view.scss']
})
export class UserSettingsView {
    private _unsubscribe$ = new Subject<void>()
    public selectedCountry;
    public settingsGroup: FormGroup;
    private _image;
    public userImage;
    public countries = []
    constructor(private _fb: FormBuilder, private _loadingService: LoadingService,
        private _userSettingsService: UserSettingsService,
        private _appService: AppService
    ) { }
    ngOnInit() {
        this._validate();

    }
 
    private _getCountries() {
        this._loadingService.showLoading()
        this._userSettingsService.getContries().pipe(takeUntil(this._unsubscribe$),
        ).subscribe((data: any) => {
            console.log(data);
            this.countries = data;
            for (let codes of this.countries) {
                codes["flag"] = 'assets/png100px/' + codes.code.toLocaleLowerCase() + '.png';
                //   codes['isActive'] = false
            }
            this.selectedCountry=this.countries[0]
            this._loadingService.hideLoading()
            // this.allCountryCodes=this.countryCodes
        })
    }

    private _validate(): void {
        this.settingsGroup = this._fb.group({
            name: [null],
            country: [null]

            // email: [null, [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/)]],
            // password:[null]
        })
        this._getCountries()

    }
    public changeImage(event): void {
        if (event) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.userImage = 'url(' + e.target.result + ')'
            };
            this._image = event
            if (event.target.files[0]) {
                reader.readAsDataURL(event.target.files[0]);
            }
        }
    }
    private _setFormData() {
        if (this._image && this._image.target) {
            const formData = new FormData();
            let fileList: FileList = this._image.target.files;
            if (fileList.length > 0) {
                let file: File = fileList[0];
                formData.append('image', file, file.name);           
            }
            if (this.settingsGroup.get('name').value)
                formData.append('user.first_name', this.settingsGroup.get('name').value);
            let country = this._appService.checkPropertyValue(this.settingsGroup.get('country').value, 'name');
            if (country) {
                formData.append('country', country);
            }

        }
    }
    public save() { }

    ngOnDestroy() {
        this._unsubscribe$.next()
        this._unsubscribe$.complete()
    }
}