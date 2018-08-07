import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { MainComponent } from './main/main.component';
import { Registration2Component } from './registration2/registration2.component';
import { Registration3Component } from './registration3/registration3.component';
import { SignupComponent } from './signup/signup.component';
import { Preferences1Component } from './preferences1/preferences1.component';
import { Preferences2Component } from './preferences2/preferences2.component';
const appRoutes: Routes = [
    {   path: '', 
        canActivate: [AuthGuard], 
        component:MainComponent,
        children:[
            {
                path:'',
                component:HomeComponent
            }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'register2', component: Registration2Component },
    { path: 'register3', component: Registration3Component },
    { path: 'signup', component: SignupComponent },
    { path: 'preferences1', component: Preferences1Component },
    { path: 'preferences2', component: Preferences2Component },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


// export const appRoutes: Routes = [
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full',
//   },  
//   { path: 'login',component: LoginComponent},
//   { path: 'register',component: RegisterComponent},
//   { path: '**', redirectTo: '' },
//   {
//     path: 'home',
//     component: MainComponent,  
//     canActivate: [AuthGuard],  
//     children: [
//       {
//         path: 'home',
//         component:HomeComponent
//       }]
//   }
// ];


export const routing = RouterModule.forRoot(appRoutes);