import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SetCalculatorComponent } from './set-calculator/set-calculator.component';

//secure these variables properly and have dev and prod configs, need to run the init command
const environment = {
  "projectId":"rampupsets","appId":"1:160574180499:web:2df30648aa4bc710c71166","storageBucket":"rampupsets.firebasestorage.app","apiKey":"AIzaSyDt9wR-QgRItnYcKuHA3JtSokJyZuBDGR4","authDomain":"rampupsets.firebaseapp.com","messagingSenderId":"160574180499","measurementId":"G-XY2YCECTQP"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SetCalculatorComponent
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(environment)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
