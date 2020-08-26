import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import { DropdownButton, MenuItem } from 'react-bootstrap'
import FixtureCard from "./matchday"
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-bootstrap/Carousel'
class Fixtures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixtures: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    }
  }

  async componentWillMount() {
    //https://api-football-v1.p.rapidapi.com/v2/fixtures/rounds/524 GET ALL AVAILABLE ROUNDS
  }

  renderItems() {
    // for (var i = 0; i < this.state.fixtures.length; i++) {
    //   this.state.fixtures.push(<div><FixtureCard key={i}> </FixtureCard></div>);
    // }
    const styles = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center",
      backgroundColor: "#fff",
      color: "#000",
      overflowY: "scroll",
      paddingTop: "2em",
      paddingLeft: "2em",
      textAlign: "center"
    };
    return (
      this.state.fixtures.map(index =>
        <Carousel.Item>
          <FixtureCard matchDay={index} key={index}>
          </FixtureCard>
        </Carousel.Item>)
    );
  }
  render() {
    var settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,

    };

    return (
      <div style={{
        marginTop: '.75em',
        marginBottom: '.75em',
      }}>
        <Carousel
          defaultActiveIndex={1}
          interval={null}
          prevIcon={<span aria-hidden="false" className="carousel-control-prev-icon" style={{ outlineColor: "black"}} />}
          nextIcon={<span aria-hidden="false" className="carousel-control-next-icon" style={{ outlineColor: "black" }} />}>
          {this.renderItems()}
        </Carousel>
      </div>
    );
  }
}

export default Fixtures

