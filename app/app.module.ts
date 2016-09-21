import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import "./rxjs-extensions";

import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth.component";
import { routing, appRoutingProviders } from "./app.routing";

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
    AppComponent,
    AuthComponent
     ],
  providers: [
    ApiService,
    AuthService,
    appRoutingProviders
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
