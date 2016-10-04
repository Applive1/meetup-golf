import { Component } from "@angular/core";
import { AuthComponent } from "./auth.component";

import { AuthService } from "./auth.service";
import { ApiService } from "./api.service";
import { Router } from "@angular/router";
import { routing } from "./app.routing";

import { Profile } from "./profile";


@Component({
    selector: "dashboard",
    templateUrl: "app/html/dashboard.component.html",
    styleUrls: ["app/css/dashboard.component.css"]
})

export class DashboardComponent {

    constructor(
        private authService: AuthService,
        private router: Router
        ) { }

    user = this.user;

    logout(evt) {
         this.authService.deauthenticate().subscribe(function(res) {
            this.user = null;
            this.router.navigate(["auth"]);
        });
    }

    submitted = false;

   // profile = new Profile();

    onSubmit() {
        this.submitted = true;
        // Implement API call here to server and DB
    }
}