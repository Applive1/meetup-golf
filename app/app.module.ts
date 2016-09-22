import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import "./rxjs-extensions";

import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth.component";
import { MainContainer } from "./main-container.component";
import { DashboardComponent } from "./dashboard.component";
import { routing } from "./app.routing";

import { ApiService } from "./api.service";
import { AuthService } from "./auth.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
   ],
  declarations: [
    MainContainer,
    AppComponent,
    AuthComponent,
    DashboardComponent
     ],
  providers: [
    ApiService,
    AuthService,
  ],
  bootstrap:    [ MainContainer ]
})

export class AppModule { }
