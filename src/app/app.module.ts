import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MainComponent } from './main/main.component';;
import { Registration2Component } from './registration2/registration2.component';
import { Registration3Component } from './registration3/registration3.component';
import { SignupComponent } from './signup/signup.component';
import { Preferences1Component } from './preferences1/preferences1.component';
import { Preferences2Component } from './preferences2/preferences2.component';
import { PagesModule } from './pages/pages.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
// import { CategoriesComponent } from './pages/categories.component';
@NgModule({
    imports: [
        BrowserModule,
        MatCheckboxModule,
        MatInputModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        BrowserAnimationsModule ,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        PagesModule
        ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AppNavComponent,
        MainComponent,
        SignupComponent,
        Registration3Component,
        Registration2Component,
        Preferences1Component ,
        Preferences2Component
        // CategoriesComponent
        ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }