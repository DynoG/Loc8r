import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// import { AppComponent } from './app.component';
import { HomeListComponent } from './home-list/home-list.component';
import { FrameworkComponent } from './framework/framework.component';
import { AboutComponent } from './about/about.component';
import { HompageComponent } from './hompage/hompage.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { DetailsPageComponent } from './details-page/details-page.component';

@NgModule({
  declarations: [
    // AppComponent,
    HomeListComponent,
    FrameworkComponent,
    AboutComponent,
    HompageComponent,
    PageHeaderComponent,
    SidebarComponent,
    LocationDetailsComponent,
    DetailsPageComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Defined Routes ...
    RouterModule.forRoot([
      {
        path:'',
        component:HompageComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path: 'location/:locationId',
        component: DetailsPageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
