import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSettingsService } from './user-settings.service';
import { takeUntil, finalize, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LoadingService, AppService } from '../../../../services';
import { UserModel } from '../../../../models/user';
import { MainService } from '../../main.service';

@Component({
    selector: 'user-settigs-view',
    templateUrl: 'user-settigs.view.html',
    styleUrls: ['user-settigs.view.scss']
})
export class UserSettingsView {
    private _unsubscribe$ = new Subject<void>()
    public settingsGroup: FormGroup;
    private _image;
    public userImage;
    private _user: UserModel
    public countries = []
    constructor(private _fb: FormBuilder, private _loadingService: LoadingService,
        private _userSettingsService: UserSettingsService,
        private _appService: AppService,
        private _mainService: MainService
    ) { }
    ngOnInit() {
        this._validate();

    }

    private _getCountries() {
        this._loadingService.showLoading()
        this._userSettingsService.getContries().pipe(takeUntil(this._unsubscribe$),
            finalize(() => this._loadingService.hideLoading())
        ).subscribe((data: any) => {
            console.log(data);
            this.countries = data;
            for (let codes of this.countries) {
                codes["flag"] = 'assets/png100px/' + codes.code.toLocaleLowerCase() + '.png';
            }
            this._getUserInfo()
        })
    }
    private _getUserInfo() {
        this._user = JSON.parse(localStorage.getItem('bet-user'));
        if (this._user) {
            this.settingsGroup.patchValue({
                firstName: this._user.user.first_name,
                lastName: this._user.user.last_name,
                country: this._appService.checkPropertyValue(this._appService.checkPropertyValue(this._appService.filterArray(this.countries, 'name', this._user.country), 0),'name')
            })
            console.log(this._user);
            console.log(this.settingsGroup.value);
            
            this.userImage = 'url(' + this._user.image + ')'
        }
    }
    private _validate(): void {
        this.settingsGroup = this._fb.group({
            firstName: [null],
            lastName: [null],
            country: [null]
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
        const formData = new FormData();
        if (this._image && this._image.target) {
            let fileList: FileList = this._image.target.files;            
            if (fileList.length > 0) {
                let file: File = fileList[0];
                console.log(file);
                
                formData.append('image', file, file.name);
            }
        }
        formData.append('url', this._user.url);
        if (this.settingsGroup.get('firstName').value)
            formData.append('user.first_name', this.settingsGroup.get('firstName').value);
        if (this.settingsGroup.get('lastName').value)
            formData.append('user.last_name', this.settingsGroup.get('lastName').value);
        let country = this.settingsGroup.get('country').value;
        if (country) {
            formData.append('country', country);
        }        
        this._loadingService.showLoading()
        this._userSettingsService.updateClient(formData, this._user.id).pipe(takeUntil(this._unsubscribe$),
            finalize(() => this._loadingService.hideLoading()),
            switchMap(() => { return this._mainService.getMe() })).subscribe()
    }
    
    public save() {
        this._setFormData()
    }

    ngOnDestroy() {
        this._unsubscribe$.next()
        this._unsubscribe$.complete()
    }
}