import { Component, OnInit } from '@angular/core';
import { Loc8rDataService } from '../loc8r-data.service';

export class Locations {

  _id:String;
  name:String;
  address:String;
  rating:number;
  facilities:String[];

}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor(private dataservice: Loc8rDataService) { }
  // locations : Locations []= [{
  //   _id:'590d8dc7a7cb5b8e3f1bfc48',
  //   name:'The Costy',
  //   address:'125 High Street, Reading',
  //   rating:4,
  //   facilities:['Food', 'Wifi', 'Gym', 'Library', 'Pool Room']

  // }, {
  //   _id:'590d8dc7a7df6b8e3f1bfc48',
  //   name:'Starcups',
  //   address:'3rd St Malibu, Milwakee',
  //   rating:3,
  //   facilities:['Food', 'Hot Drinks', 'Wifi', 'Gym', 'Library']
  // }];

  public locations:Locations[];
  private getLocations(): void {
    this
      .dataservice
      .getLocations()
      .then(foundLocations => this.locations = foundLocations )
  }

  ngOnInit() {
    this.getLocations();
  }

}
