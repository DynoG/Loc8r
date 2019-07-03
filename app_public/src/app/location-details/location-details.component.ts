import { Component, OnInit, Input } from '@angular/core';
import { Locations } from '../home-list/home-list.component';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  @Input() location: Locations;
  public loc = new Locations;
  constructor() { }

  ngOnInit() {
  }
  public formVisible: boolean = false;
  public pageContent = {

    header :{
      title:'Loc8r',
      strapline:'New Location'
    }, 
    sidetext: 'Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you\'re looking for. Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you\'re looking for. Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you\'re looking for. '
  }



}
