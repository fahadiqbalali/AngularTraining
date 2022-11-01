import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginComponent } from './components/login/login.component';
import { AlertComponent } from './directives/alert/alert.component';
import { AuthGuard } from './guards/auth.guard';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { fakeBackendProvider } from './helpers/fake-backend';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieService } from './services/movie.service';
import { UtilsModule } from './utils/utils.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing,
        UtilsModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        MovieSearchComponent,
        MovieDetailComponent,
        MovieCardComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        MovieService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
