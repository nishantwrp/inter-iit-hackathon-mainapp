import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-map-landing',
  templateUrl: './map-landing.component.html',
  styleUrls: ['./map-landing.component.css']
})
export class MapLandingComponent implements AfterViewInit {
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;

  lat = 40.730610;
  lng = -73.935242;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 16,
    disableDefaultUI: true,
    gestureHandling: 'greedy',
    styles: [
      {
        elementType: 'geometry',
        stylers: [
          {
            color: '#ebe3cd'
          }
        ]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#523735'
          }
        ]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#f5f1e6'
          }
        ]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#c9b2a6'
          }
        ]
      },
      {
        featureType: 'administrative.land_parcel',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#dcd2be'
          }
        ]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#ae9e90'
          }
        ]
      },
      {
        featureType: 'administrative.neighborhood',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [
          {
            color: '#dfd2ae'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: '#dfd2ae'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#93817c'
          }
        ]
      },
      {
        featureType: 'poi.business',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#a5b076'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#447530'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          {
            color: '#f5f1e6'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          {
            color: '#fdfcf8'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          {
            color: '#f8c967'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#e9bc62'
          }
        ]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry',
        stylers: [
          {
            color: '#e98d58'
          }
        ]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#db8555'
          }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#806b63'
          }
        ]
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [
          {
            color: '#dfd2ae'
          }
        ]
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#8f7d77'
          }
        ]
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#ebe3cd'
          }
        ]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [
          {
            color: '#dfd2ae'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#b9d3c2'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#92998d'
          }
        ]
      }
    ]
  };

  iconBase = 'assets/images/icons/';

  icons = {
    diamond: {
      icon: this.iconBase + 'diamondee.png',
      points: 150,
      purpose: 'Visit a construction site and click photos of the site to redeem this!'
    },
    ruby: {
      icon: this.iconBase + '2176077.png',
      points: 200,
      purpose: 'Visit a maintenance site and click photos of the site to redeem this!'
    }
  };

  features = [
    {
      position: new google.maps.LatLng(29.872047, 77.896644),
      type: 'diamond'
    }, {
      position: new google.maps.LatLng(29.868177, 77.894421),
      type: 'diamond'
    }, {
      position: new google.maps.LatLng(29.868624, 77.892329),
      type: 'diamond'
    }, {
      position: new google.maps.LatLng(29.867554, 77.894003),
      type: 'ruby'
    }, {
      position: new google.maps.LatLng(29.865526, 77.896664),
      type: 'ruby'
    }, {
      position: new google.maps.LatLng(29.866298, 77.894843),
      type: 'diamond'
    }
  ];

  getContentString(gem, gempoint, gempur) {
    return '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">You found a ' + gem + '!!</h1>' +
    '<div id="bodyContent">' +
    '<p>Collect a ' + gem + ' to get <b>' + gempoint + ' points</b>! ' +
    gempur +
    '<button type="button" class="btn btn-outline-danger btn-sm" style="top:0.7pc;">Upload photos</button>' +
    '</div>' +
    '</div>';
  }

  mapInitializer() {
    this.map = new google.maps.Map(document.getElementById('map'),
      this.mapOptions);
    // tslint:disable-next-line: prefer-for-of
    let marker = new Array<google.maps.Marker>(this.features.length);
    let infowindow = new Array<google.maps.InfoWindow>(this.features.length);
    for (let i = 0; i < this.features.length; i++) {
      infowindow[i] = new google.maps.InfoWindow({
        content: this.getContentString(
          this.features[i].type,
          this.icons[this.features[i].type].points,
          this.icons[this.features[i].type].purpose)
      });
      // tslint:disable-next-line: prefer-const no-var-keyword
      marker[i] = new google.maps.Marker({
        position: this.features[i].position,
        icon: this.icons[this.features[i].type].icon,
        map: this.map,
      });
      marker[i].addListener('click', () => {
        infowindow[i].open(this.map, marker[i]);
      });
      marker[i].setMap(this.map);
    }

    if (navigator.geolocation) {
      var initialLocation;
      navigator.geolocation.getCurrentPosition((position) => {
          initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          this.map.setCenter(initialLocation);
          const marker1 = new google.maps.Marker({
            position: initialLocation,
            icon: this.iconBase + 'output-onlinepngtools.png',
            map: this.map,
          });
          marker1.setMap(this.map);
      });
    }
  }

  ngAfterViewInit() {
   this.mapInitializer();
  }
}
