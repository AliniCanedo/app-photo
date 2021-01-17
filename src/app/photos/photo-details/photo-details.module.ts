import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { PhotoDetailsComponent } from "./photo-details.component";
import { PhotoModule } from "../photo/photo.module";

import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { VMessageModule } from "src/app/shared/components/vmessage/vmessage.module";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";
import { PhotoOwnerOnlyDirective } from "./photo-owner-only/photo-owner-only.directive";
@NgModule({
    declarations: [
                   PhotoDetailsComponent,
                   PhotoCommentsComponent,
                   PhotoOwnerOnlyDirective
                 ],
    exports: [
              PhotoDetailsComponent, 
              PhotoCommentsComponent
            ],

    imports: [  
                CommonModule, 
                PhotoModule, 
                RouterModule, 
                ReactiveFormsModule, 
                VMessageModule
            ]
})
export class PhotoDetailsModule { }