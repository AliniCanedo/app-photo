import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { VMessageModule } from "src/app/shared/components/vmessage/vmessage.module";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";

import { SigninComponent } from "./signin/signin.component";
import { SignUpService } from "./singup/signup.service";
import { SignUpComponent } from "./singup/singup.component";

@NgModule({
    declarations: [SigninComponent, SignUpComponent, HomeComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        VMessageModule,
        RouterModule,
        FormsModule,
        HomeRoutingModule
    ],
    providers: [ SignUpService ]
    
})
export class HomeModule {

}