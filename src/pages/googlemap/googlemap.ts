import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, PositionError, Geoposition } from '@ionic-native/geolocation';
import { ShopdetailPage } from '../../pages/shopdetail/shopdetail';

/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// baidu map
// declare var BMap;

// gaode map
// declare var AMap;

//google map
declare var google;

@IonicPage()
@Component({
  selector: 'page-googlemap',
  templateUrl: 'googlemap.html',
})
export class GoogleMapPage {
  //googlemap

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  x: number = 0;
  y: number = 0;
  currWindow: any;

  // constructor(public navCtrl: NavController, private geolocation: Geolocation) {}
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {

    // var marker, i;
    this.loadMap();
    // this.showMyLocation();
    this.addMarker(22.373, 114.109, {name: "shop1", detail: "car washing store", image: "./assets/imgs/shop1.jpg" });
    this.addMarker(22.374, 114.108, {name: "shop2", detail: "car beauty store", image: "./assets/imgs/shop2.jpg" });
    this.addMarker(22.370, 114.112, {name: "shop3", detail: "car washing store", image: "./assets/imgs/shop3.jpg" });

  }

  loadMap() {

    let myLatLng = new google.maps.LatLng( 22.373751, 114.109886);

    let mapOptions = {
      center: myLatLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let myMarker = new google.maps.Marker ({
      map: this.map,
      position: myLatLng,
      title:"Here I am"      
    })

  }

  addMarker(lat: number, lng: number, place: any) {

    let latLng = new google.maps.LatLng(lat, lng);

    let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: latLng,
        title: place.name,
        snippet: place.detail,
        icon: {
          url: './assets/imgs/car-wash-favicon.ico',
          // This marker is 20 pixels wide by 32 pixels high.
          size: new google.maps.Size(32, 32),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(0, 12)
        }
    });

    let content = '<div id="myid"><h3 id="firstHeading" >' + marker.title + '</h3><img id="markerImg" src='+place.image+'></br><h6>'+marker.snippet+'</h6></div>';    
    console.log(content);
    this.addInfoWindow(marker, content);
  }


  addInfoWindow(marker, content){
    
    // this.currWindow =false;

    let infoWindow = new google.maps.InfoWindow({
       content: content
    });

    // marker.addListener('click', () => {
    //   infoWindow.open(this.map, marker);
    // });            

    google.maps.event.addListener(marker, 'click', () =>{
        if( this.currWindow ) {
           this.currWindow.close();
           // Remove all click listeners from marker instance
           google.maps.event.clearListeners(infoWindow, 'click');  
        }
        this.currWindow = infoWindow;        
        infoWindow.open(this.map, marker);

        google.maps.event.addListener(infoWindow, 'domready', () => {
          //now my elements are ready for dom manipulation
          var clickableItem = document.getElementById('firstHeading');
          clickableItem.addEventListener('click', () => {
          this.navCtrl.push(ShopdetailPage);
          
          });
        });        

    });


  
    // var marker, i;

    // for (i = 0; i < locations.length; i++) {  
    //   marker = new google.maps.Marker({
    //     position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    //     map: map
    //   });

    //   google.maps.event.addListener(marker, 'click', (function(marker, i) {
    //     return function() {
    //       infowindow.setContent(locations[i][0]);
    //       infowindow.open(map, marker);
    //     }
    //   })(marker, i));
    // }

  } 

// showMyLocation() {

//     this.geolocation.watchPosition().subscribe((position) => {
//       this.x = position.coords.longitude;
//       this.y = position.coords.latitude;
      
//       let latLng = new google.maps.LatLng(this.x, this.y);

//       let marker = new google.maps.Marker({
//         map: this.map,
//         icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
//           new google.maps.Size(22, 22),
//           new google.maps.Point(0, 18),
//           new google.maps.Point(11, 11)),
//         position: latLng
//       });

//       let content = "<h4>You are here</h4>";
//       this.addInfoWindow(marker, content);

//     }, (err) => {
//       console.log(err);
//     });
//   }

}
