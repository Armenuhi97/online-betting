import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'user-settigs-view',
    templateUrl: 'user-settigs.view.html',
    styleUrls: ['user-settigs.view.scss']
})
export class UserSettingsView {
    public settingsGroup: FormGroup;
    private _image;
    public userImage;
    constructor(private _fb: FormBuilder) { }
    ngOnInit() {
        this._validate()
    }
    private _validate(): void {
        this.settingsGroup = this._fb.group({
            name: [null]
          
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
    
    ngOnDestroy(){}
}