import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  rooms: FirebaseListObservable<any>;
  roomValue: string = '';
  descriptionValue: string = '';
  timestamp;
  

  constructor(af: AngularFire) {
    this.rooms = af.database.list('/rooms');
  }
  
  addRoom(roomName: string, description: string) {
    /*Get current timestamp*/
    this.timestamp =  new Date().getTime();
    if(roomName != ''){
      this.rooms.push({description: description || 'About something',
                       name: roomName,
                       timestamp: this.timestamp
                      });
    }
   
    /*Set input to an empty string*/
    this.roomValue = ''; 
    this.descriptionValue = '';
  }


  ngOnInit() {
  }

}



