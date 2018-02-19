import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { environment } from './../environments/environment';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SoftwareListComponent } from './software-list/software-list.component';


export const firebase= {
  apiKey: "AIzaSyCMG2zAWMUIYnTq2-0JkVpmkqNmHRljKUg",
  authDomain: "clio-629e1.firebaseapp.com",
  databaseURL: "https://clio-629e1.firebaseio.com",
  projectId: "clio-629e1",
  storageBucket: "clio-629e1.appspot.com",
  messagingSenderId: "370723293634"
}

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    SoftwareListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
