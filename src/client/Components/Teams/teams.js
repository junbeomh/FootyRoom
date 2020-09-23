import React, { Component } from 'react';
import NavBar from '../Nav/nav.js';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import Geocode from 'react-geocode';
import { Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { getTeams, } from "../../../api";
import "../../styles/index.css";

const mapStyles = {
  width: '100%',
  height: '75%',
  position: 'relative',
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
      data: [],
      isLoading: false
    }
  }

  reverseGeocode(data) {
    data.forEach(item =>
      Geocode.fromAddress(item.venue_name + " " + item.venue_address).then(
        response => {
          const lat = response.results[0].geometry.location.lat;
          const lng = response.results[0].geometry.location.lng;
          item['lat'] = lat;
          item['lng'] = lng;
        },
        error => {
          console.error(error);
        }
      )
    );
    this.setState({
      data: data,
      isLoading: false
    })
    console.log(this.state.data);
  }

  async componentDidMount() {
    this.setState({
      isLoading: true
    })
    const teams = await getTeams();
    this.reverseGeocode(teams);
  }

  componentDidUpdate() {
    this.setState();
  }

  // TODO: use this during api service and add it to the data object for client 

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

  render() {
    const { isLoading, data } = this.state
    if (!isLoading && data.length > 1) {
      console.log(data.length);
      return (
        <div className="map-container">
          <NavBar> </NavBar>
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
            {this.state.data.map((data, index) => {
              console.log(data.name);
              console.log(data['lat'] + ", " + data.lng);
              return <Marker
                key={index}
                name={data.name}
                id={data.team_id}
                position={{ lat: data['lat'], lng: data['lng'] }}
                venue_name={data.venue_name}
                venue_address={data.venue_address}
                venue_capacity={data.venue_capacity}
                icon={{
                  url: data.logo,
                  anchor: new window.google.maps.Point(10, 10),
                  scaledSize: new window.google.maps.Size(50, 50)
                }}
                onClick={this.onMarkerClick} />
            }
            )}

            <InfoWindow
              marker={this.state.activeMarker}
              onClose={this.onInfoWindowClose}
              visible={this.state.showingInfoWindow}
            >
              <div className="infoWindow">
                <h5> {this.state.selectedPlace.name}</h5>
                <h7> {this.state.selectedPlace.venue_name + ","}</h7>
                <br></br>
                <h7> {this.state.selectedPlace.venue_address}</h7>
                <br></br>
                <br></br>
                <Button variant="dark" size="sm" block> view club </Button>
              </div>
            </InfoWindow>

          </Map>
        </div>
      )
    }
    else
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "16em" }}>
          <Spinner
            as="span"
            animation="border"
            size="xlg"
            role="status"
            aria-hidden="true"
          />
        </div>
      );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCta017f-CP9HRYOfVALBq7K75qHjYvhMU'
})(Teams);   