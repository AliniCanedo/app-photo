import { Component, OnInit } from "@angular/core";
import { User } from "ionic";
import { Observable } from "rxjs";
import { UserService } from "../user/user.service";

@Component({
    selector: 'ap-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit{

    user$: Observable<User>;

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.user$ = this.userService.getUser();
    }

}