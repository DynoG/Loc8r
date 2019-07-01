import { Component, OnInit } from '@angular/core';
import { Loc8rDataService } from '../loc8r-data.service';
import { Locations } from '../home-list/home-list.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor(
    private loc8rDataService: Loc8rDataService,
    private route: ActivatedRoute) { }

  newLocation: Locations;

  ngOnInit() : void {
    this.route.paramMap
    .pipe(
      switchMap((params:ParamMap) => {
        let id = params.get('locationId');
        return this.loc8rDataService.getLocationById(id);  
      })
    )
    .subscribe((newLocation: Locations) => {
      this.newLocation = newLocation;
      this.pageContent.header.title = newLocation.name; 
      this.pageContent.sidetext = `${newLocation.name} is on Loc8r
        because it has accessible wifi and space to sit down with
        your laptop and get some work done.\n\nIf you\'ve been and
        you like it - or if you don\'t - please leave a review to
        help other people just like you.`; 
    });
  }

  public pageContent = {
    header:{
      title:'',
      strapline:''
    },
    sidetext:''
  };

}
