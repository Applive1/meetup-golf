import { Component } from "@angular/core";
import "./rxjs-extensions";
import "rxjs/add/operator/toPromise";

@Component({
  selector: "my-app",
  template: `
    <h1>Welcome to Meetup Golf!</h1>
    <div class="wrapper">
       <button routerLink="/auth" routerLinkActive="active">Join Up!</button>
    </div>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {

  }
