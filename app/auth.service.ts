import { Injectable } from "@angular/core";
import { Routes, RouterModule, CanActivate, Router } from "@angular/router";

import { ApiService } from "./api.service";
import "rxjs/add/operator/toPromise";

@Injectable()
export class AuthService implements CanActivate {
        public authenticated: boolean = false;
        public user: Object;

        constructor(
            private router: Router,
            private apiService: ApiService
        ) {}

        authenticate(path: String, creds: Object) {
            return this.apiService.post("/" + path, JSON.stringify(creds))
            .do(function(response){
                if (response.status === "success") {
                    this.authenticated = true;
                    this.user = response.userInfo;
                }
            }.bind(this));
        }

        canActivate(): boolean {
        if (!this.authenticated) {
            this.router.navigate(["auth"]);
        }
        return this.authenticated;
    }
}