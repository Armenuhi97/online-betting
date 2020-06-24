import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSettingsService } from './user-settings.service';
import { takeUntil, finalize } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LoadingService } from '../../../../services';

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
    public countries=[]
    constructor(private _fb: FormBuilder, private _loadingService:LoadingService,
        private _userSettingsService:UserSettingsService
        ) { }
    ngOnInit() {
        this._validate();
        this._getCountries()
    }
    public a(item){
        console.log(item);
        
    }
    private _getCountries(){
        this._loadingService.showLoading()
        this._userSettingsService.getContries().pipe(takeUntil(this._unsubscribe$),
       ).subscribe((data:any) => {
            console.log(data);
            this.countries = data;
            for (let codes of this.countries) {
              codes["flag"] = 'assets/png100px/' + codes.code.toLocaleLowerCase() + '.png';
            //   codes['isActive'] = false
            }
            this._loadingService.hideLoading()
            // this.allCountryCodes=this.countryCodes
          })
    }
   
    private _validate(): void {
        this.settingsGroup = this._fb.group({
            name: [null],
            country:[null]
          
            // email: [null, [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/)]],
            // password:[null]
        })
    }
        public changeImage(event): void {
        if (event) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.userImage ='url('+ e.target.result +')'
            };
            this._image=event
            if (event.target.files[0]) {
                reader.readAsDataURL(event.target.files[0]);
            }
        }
    }
    private _setFormDataForImage(image) {
        if (image && image.target) {
            const formData = new FormData();
            let fileList: FileList = image.target.files;
            if (fileList.length > 0) {
                let file: File = fileList[0];
                formData.append('image', file, file.name);
                // this._adminService.uploadFile(formData).pipe(takeUntil(this.unsubscribe$)).subscribe((data: FileType) => {
                //     if (data && data.path)
                //         block.data.attributes.image = data.path;
                // })
            }
        }
    }
    public save(){}
    
    ngOnDestroy() {
        this._unsubscribe$.next()
        this._unsubscribe$.complete()
    }
}