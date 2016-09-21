import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth.component";
import { AuthService } from "./auth.service";

const appRoutes: Routes = [
    {
        path: "auth",
        component: AuthComponent
    },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);