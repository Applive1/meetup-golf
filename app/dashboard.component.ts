import { Component } from "@angular/core";
import { AuthComponent } from "./auth.component";

import { AuthService } from "./auth.service";
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

   // model = this.user.profile;   A user needs to have a profile, in the schema and defined on the front end. Maybe here, maybe in the service I use. 

    onSubmit() {
        this.submitted = true;
        // Implement API call here to server and DB
    }
}