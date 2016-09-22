import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthComponent } from "./auth.component";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard.component";

import { AuthService } from "./auth.service";

const appRoutes: Routes = [
    {
        path: "",
        component: AppComponent
    },
    {
        path: "auth",
        component: AuthComponent,
    },
    {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthService] // Only show this component to auth'd users
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);