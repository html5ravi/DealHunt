import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../_services/api.service';

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

interface storeLocator {
	lat: number;
	lng: number;
	locationName: string;
	draggable: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public banners: any;
  public trendingOffers: any;
  public nearBy: any;
  zoom: number = 8;
  public tempArrs:any = [];

  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  public map: boolean = false;
  public markers:marker[] = [];
  constructor(public http:HttpClient, public api: ApiService) {
    this.api.getAll("advertisements?orderby_dsc=score&").subscribe(
      res=>{
        this.banners = res.data;       
        console.log("Banners",res)
      }
    )

    this.api.getAll("deals?orderby_dsc=enddate&isactive=true&startdate=$lte:2018-08-16T00:00:00.000Z&enddate=$gte:2018-08-16T00:00:00.000Z").subscribe(
      res=>{
        
        let arr =[];
        this.nearBy = res.data;
        this.nearBy.forEach(function (value) {         
          console.log("nearBy", value)
          value.limitlocations.forEach(function (value) {
            console.log("storelocations", value.storelocation)
            arr.push({
              lat:parseInt(value.storelocation.x),
              lng:parseInt(value.storelocation.y),
              label:'',
              draggable: false
            })
          });
        });
        
        // this.tempArrs = arr;
        this.markers=arr;

        this.map = true;
        console.log("Location", this.markers)
      }


    )
    
  }

  ngOnInit() {
    // this.markers = [
    //   {
    //     lat: 12.9667227,
    //     lng: 77.61173889999998,
    //     label: 'A',
    //     draggable: true
    //   }
    // ]
  }

  goToStore(){}
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  

  mapClicked($event: MouseEvent) {
    // this.markers.push({
    //   lat: $event.coords.lat,
    //   lng: $event.coords.lng,
    //   draggable: true
    // });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
 
  
  
  
  

}
