import { Component, OnInit } from '@angular/core';
import { AngularFire,FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: FirebaseListObservable<any>;
  constructor(af: AngularFire) {
    this.rooms = af.database.list('/rooms');
  }

  ngOnInit() {
  }

}
