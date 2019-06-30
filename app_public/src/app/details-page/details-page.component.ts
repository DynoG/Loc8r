import { Component, OnInit } from '@angular/core';
import { Loc8rDataService } from '../loc8r-data.service';
import { Locations } from '../home-list/home-list.component';
import { ActivatedRoute } from '@angular/router';
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

  ngOnInit() : void {
    this.route.paramMap
    .pipe(

    )
  }

  public pageContent = {
    header:{
      title:'',
      strapline:''
    },
    sidetext:''
  };

}
