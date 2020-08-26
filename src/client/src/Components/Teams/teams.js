import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import Geocode from "react-geocode";
import { Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'
import { Redirect, } from 'react-router'
import { Link, } from 'react-router-dom'

import "../../styles/index.css"


const mapStyles = {
  width: '100%',
  height: '52em',
  position: 'relative'
};

export class Teams extends Component {
  constructor(props) {
    super(props);
    Geocode.setApiKey('AIzaSyDXheDem-GboON3aYeHurIu_Yhcm_pU5uY')
    Geocode.setLanguage("en");
    Geocode.setRegion("uk");
    this.state = {
      redirect: false,
      zomm: 7,
      showingInfoWindow: false,   //Hides or the shows the infoWindow
      activeMarker: {},           //Shows the active marker upon click
      selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
      data: [
        {
          team_id: 40,
          name: "Liverpool",
          lat: 53.4084,
          lng: -2.9916,
          logo: "https://media.api-sports.io/football/teams/40.png",
          venue_name: "Anfield",
          venue_addres: "Anfield Road",
          venue_capacity: 55212
        },
        {
          team_id: 71,
          name: "Norwich",
          lat: 52.6199,
          lng: 1.3052,
          logo: "https://media.api-sports.io/football/teams/71.png",
          venue_name: "Carrow Road",
          venue_addres: "Carrow Road",
          venue_capacity: 27244
        },
        {
          team_id: 48,
          name: "West Ham",
          lat: 51.5380,
          lng: 0.0125,
          logo: "https://media.api-sports.io/football/teams/48.png",
          venue_name: "London Stadium",
          venue_addres: "Marshgate Lane, Stratford",
          venue_capacity: 60000
        },
        {
          team_id: 50,
          name: "Manchester City",
          lat: 53.482989,
          lng: -2.200292,
          logo: "https://media.api-sports.io/football/teams/50.png",
          venue_name: "Etihad Stadium",
          venue_addres: "Rowsley Street",
          venue_capacity: 55097
        },
        {
          team_id: 35,
          name: "Bournemouth",
          lat: 50.7192,
          lng: -1.8808,
          logo: "https://media.api-sports.io/football/teams/35.png",
          venue_name: "Vitality Stadium",
          venue_addres: "Dean Court, Kings Park",
          venue_capacity: 12000
        },
        {
          team_id: 62,
          name: "Sheffield Utd",
          lat: 53.3830,
          lng: -1.4659,
          logo: "https://media.api-sports.io/football/teams/62.png",
          venue_name: "Bramall Lane",
          venue_addres: "Bramall Lane",
          venue_capacity: 32702
        },
        {
          team_id: 44,
          name: "Burnley",
          lat: 53.7893,
          lng: -2.2405,
          logo: "https://media.api-sports.io/football/teams/44.png",
          venue_name: "Turf Moord",
          venue_addres: "Harry Potts Way",
          venue_capacity: 22546
        },
        {
          team_id: 41,
          name: "Southampton",
          lat: 50.9097,
          lng: -1.4044,
          logo: "https://media.api-sports.io/football/teams/41.png",
          venue_name: "Mary's Stadium",
          venue_addres: "Britannia Road",
          venue_capacity: 32689
        },
        {
          team_id: 52,
          name: "Crystal Palace",
          lat: 51.4222,
          lng: -0.0758,
          logo: "https://media.api-sports.io/football/teams/52.png",
          venue_name: "Selhurst Park",
          venue_addres: "Holmesdale Road",
          venue_capacity: 26309
        },
        {
          team_id: 45,
          name: "Everton",
          lat: 53.4257,
          lng: -2.9664,
          logo: "https://media.api-sports.io/football/teams/45.png",
          venue_name: "Goodison Park",
          venue_addres: "Goodison Road",
          venue_capacity: 40569
        },
        {
          team_id: 46,
          name: "Leicester",
          lat: 52.6369,
          lng: -1.1398,
          logo: "https://media.api-sports.io/football/teams/46.png",
          venue_name: "King Power Stadium",
          venue_addres: "Filbert Way",
          venue_capacity: 32262
        },
        {
          team_id: 39,
          name: "Wolves",
          lat: 52.5870,
          lng: -2.1288,
          logo: "https://media.api-sports.io/football/teams/39.png",
          venue_name: "Molineux Stadium",
          venue_addres: "Waterloo Road",
          venue_capacity: 32050
        },
        {
          team_id: 38,
          name: "Watford",
          lat: 51.6565,
          lng: -0.3903,
          logo: "https://media.api-sports.io/football/teams/38.png",
          venue_name: "Vicarage Road",
          venue_addres: "Vicarage Road",
          venue_capacity: 22200
        },
        {
          team_id: 51,
          name: "Brighton",
          lat: 50.8225,
          lng: -0.1372,
          logo: "https://media.api-sports.io/football/teams/51.png",
          venue_name: "The American Express Community Stadium",
          venue_addres: "Village Way",
          venue_capacity: 30750

        },
        {
          team_id: 47,
          name: "Tottenham",
          lat: 51.6056,
          lng: -0.0682,
          logo: "https://media.api-sports.io/football/teams/47.png",
          venue_name: "Tottenham Hotspur Stadium",
          venue_addres: "Bill Nicholson Way, 748 High Road",
          venue_capacity: 62062
        },
        {
          team_id: 66,
          name: "Aston Villa",
          lat: 52.4960,
          lng: -1.8853,
          logo: "https://media.api-sports.io/football/teams/66.png",
          venue_name: "Villa Park",
          venue_addres: "Trinity Road",
          venue_capacity: 42788
        },
        {
          team_id: 34,
          name: "Newcastle",
          lat: 54.9783,
          lng: -1.6178,
          logo: "https://media.api-sports.io/football/teams/34.png",
          venue_name: "St. James' Park",
          venue_addres: "St. James&apos; Street",
          venue_capacity: 52389
        },
        {
          team_id: 42,
          name: "Arsenal",
          lat: 51.5547,
          lng: -0.1017,
          logo: "https://media.api-sports.io/football/teams/42.png",
          venue_name: "Emirates Stadium",
          venue_addres: "Queensland Road",
          venue_capacity: 60383
        },
        {
          team_id: 33,
          name: "Manchester United",
          lat: 53.463056,
          lng: -2.291389,
          logo: "https://media.api-sports.io/football/teams/33.png",
          venue_name: "Old Trafford",
          venue_addres: "Sir Matt Busby Way",
          venue_capacity: 76212
        },
        {
          team_id: 49,
          name: "Chelsea",
          lat: 51.4817,
          lng: -0.1910,
          logo: "https://media.api-sports.io/football/teams/49.png",
          venue_name: "Stamford Bridge",
          venue_addres: "Fulham Road",
          venue_capacity: 41841
        }
      ],
    }
  }

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

  handleClick = (fixture) => {
    return (event) => {
      console.log('hi');
      this.props.history.push('/');

    }
}

  // TODO: use this during api service and add it to the data object for client 
  getLatLng = (venue, address) => {
    Geocode.fromAddress(venue + " " + address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        return { lat, lng }
      },
      error => {
        console.error(error);
      }
    );
  }

  render() {
    // Geocode.fromAddress("Stamford Bridge Fulham Road").then(
    //   response => {
    //     const { lat, lng } = response.results[0].geometry.location;
    //     console.log(lat, lng);
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // );
    // this.getLatLng("Stamford Bridge", "Fulham Road")

    if (!this.props.loaded) return <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />;



    return (
      <div className="map-container" style={{paddingTop: '3em'}}>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 52.4862,
            lng: -1.8904,
          }}
          onClick={this.onMapClicked}
          zoom={this.state.zomm}
        >

          {this.state.data.map((data, index) => (
            <Marker
              key={index}
              name={data.name}
              id={data.team_id}
              venue_name={data.venue_name}
              venue_addres={data.venue_addres}
              venue_capacity={data.venue_capacity}
              position={{ lat: data.lat, lng: data.lng }}
              icon={{
                url: data.logo,
                anchor: new window.google.maps.Point(10, 10),
                scaledSize: new window.google.maps.Size(50, 50)
              }}
              onClick={this.onMarkerClick} />))}

          <InfoWindow
            marker={this.state.activeMarker}
            onClose={this.onInfoWindowClose}
            visible={this.state.showingInfoWindow}
          >
            <div className="infoWindow">
              <h5> {this.state.selectedPlace.name}</h5>
              <h7> {this.state.selectedPlace.venue_name + ","}</h7>
              <br></br>
              <h7> {this.state.selectedPlace.venue_addres}</h7>
              <br></br>
              <br></br>
              <Button variant="dark" size="sm" block> view club </Button> 
            </div>
          </InfoWindow>

        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCta017f-CP9HRYOfVALBq7K75qHjYvhMU'
})(Teams);   