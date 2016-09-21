import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";

@Component({
  selector: "my-app",
  template: `
    <h1>Welcome to Meetup Golf!</h1>
    <nav>
    <a routerLink="/auth" routerLinkActive="active">Join Up!</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {

     constructor(
         private authService: AuthService,
         private router: Router
     ) { }

     gotoAuth(): void {
        this.router.navigate(["/auth"]);
  }
}
