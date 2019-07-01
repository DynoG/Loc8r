import { Component, OnInit, Input } from '@angular/core';
import { Locations } from '../home-list/home-list.component';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  @Input() location: Locations;

  constructor() { }

  ngOnInit() {
  }

}
