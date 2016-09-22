import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "main-container",
    template: `
        <div>
            <h1>{{title}}</h1>
        </div>
        <router-outlet></router-outlet>
    `
    })

export class MainContainer {

    title = "Welcome to Meetup Golf!";

constructor( private router: Router ) { }
}