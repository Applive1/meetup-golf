import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    selector: "auth",
    templateUrl: "app/html/auth.component.html",
    styleUrls: ["app/css/auth.component.css"]
})

export class AuthComponent {
    mode: string = "login";
    buttonText: string = "Login";
    switchText: string = "Need to create an account?";

    loginInfo = {
        username: "",
        password: "",
    };

    constructor(
        private authService: AuthService,
        private router: Router
        ) { }

        switchMode(evt) {
            evt.preventDefault();
            if (this.mode === "login") {
                this.mode = "signup";
                this.buttonText = "Sign Up";
                this.switchText = "Already have an account?";
            } else {
                this.mode = "login";
                this.buttonText = "Login";
                this.switchText = "Need to create an account?";
            }
        }

    authenticate() {
        if (!this.loginInfo.username || !this.loginInfo.password) {
            return;
        }
        this.authService
        .authenticate(this.mode, this.loginInfo)
        .subscribe(function(res) {
            if (res.status === "success") {
                this.router.navigate([""]);
            }
        }.bind(this));
    }
}