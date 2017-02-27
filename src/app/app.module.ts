import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AddRoomComponent } from './add-room/add-room.component';

//Bootstrap Modules
import { ModalModule } from 'ng2-bootstrap/modal';



export const firebaseConfig = {
  apiKey: "AIzaSyA1FzFOmT02viCKlZplIEH2te7ajXiF1Ic",
  authDomain: "chatty-5450d.firebaseapp.com",
  databaseURL: "https://chatty-5450d.firebaseio.com",
  storageBucket: "chatty-5450d.appspot.com",
  messagingSenderId: "851650241917"
};

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    AddRoomComponent
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
