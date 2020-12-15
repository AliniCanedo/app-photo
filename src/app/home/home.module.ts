import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { VMessageModule } from "src/app/shared/components/vmessage/vmessage.module";

import { SigninComponent } from "./signin/signin.component";
import { SignUpComponent } from "./singup/singup.component";

@NgModule({
    declarations: [SigninComponent, SignUpComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        VMessageModule,
        RouterModule,
        FormsModule
    ]
    
})
export class HomeModule {

}