import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { VMessageModule } from "src/app/shared/components/vmessage/vmessage.module";

import { SigninComponent } from "./signin.component";

@NgModule({
    declarations: [SigninComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        VMessageModule,
        RouterModule
    ]
    
})
export class HomeModule {

}