import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthComponent } from "./auth.component";

import { AuthService } from "./auth.service";

const appRoutes: Routes = [
    {
        path: "auth",
        component: AuthComponent,
        // canActivate: [AuthService] // Only show this component to auth'd users
    },
    {
        path: "",
        redirectTo: "/",
        pathMatch: "full"
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);