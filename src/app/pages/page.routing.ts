import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home';

const appRoutes: Routes = [
    {   path: '', 
        component:HomeComponent,        
    }   
   
];


export const pageRouting = RouterModule.forRoot(appRoutes);