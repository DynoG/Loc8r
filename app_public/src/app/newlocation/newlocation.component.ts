import { Component, OnInit, Input } from '@angular/core';
import { Locations } from '../home-list/home-list.component';
import { Loc8rDataService } from '../loc8r-data.service';

@Component({
  selector: 'app-newlocation',
  templateUrl: './newlocation.component.html',
  styleUrls: ['./newlocation.component.css']
})
export class NewlocationComponent implements OnInit {

  @Input() locations:Locations;

  @Input() ngValue: any;
  constructor(private loc8rDataService: Loc8rDataService) { }

  ngOnInit() {
  }

  public formVisible: boolean = false;
  public formError: string;

  public pageContent = {

    header :{
      title:'Loc8r',
      strapline:'New Location'
    }, 
    sidetext: 'Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you\'re looking for. Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you\'re looking for. Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you\'re looking for. '
  }

  public newlocation = {
    name: '',
    address:'',
    rating: {"1":1, "2":2, "3":3, "4":4, "5":5},
    facilities: ''
    };
  
    private formIsValid(): boolean {
      if (this.newlocation.name && this.newlocation.address && this.newlocation.facilities &&this.newlocation.rating) {
        return true;
      } else {
      return false;
      }

    }

    public onSubmit(): void {
      this.formError = '';
      if (this.formIsValid()) {
        console.log(this.newlocation);
        this
          .loc8rDataService.AddLocation(this.newlocation)
          .then(location => {
            console.log('Location Saved', location);
          });

      } else {
        this.formError = 'All fields required, please try again';
      }
    }
}

