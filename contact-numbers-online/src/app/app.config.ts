import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'contacts', component: ContactListComponent},
  {path: 'contacts/new', component: ContactFormComponent},
  {path: 'contacts/edit/:id', component: ContactFormComponent},
];


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi())
  ]
};
