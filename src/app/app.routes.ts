import { Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

export const routes: Routes = [
    {
        path: "",
        component: FrontpageComponent,
    },
    {
        path: "signup",
        component: SignupPageComponent,
    }
];
