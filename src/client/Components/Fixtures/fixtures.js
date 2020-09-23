import React from "react";
import NavBar from '../Nav/nav.js';
import FixtureCard from "./matchDay";
import Carousel from "react-bootstrap/Carousel";
class Fixtures extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // rounds: []
      rounds: [
        "Regular_Season_-_1",
        "Regular_Season_-_2",
        "Regular_Season_-_3"
        // "Regular_Season_-_4",
        // "Regular_Season_-_5",
        // "Regular_Season_-_6",
        // "Regular_Season_-_7",
        // "Regular_Season_-_8",
        // "Regular_Season_-_9",
        // "Regular_Season_-_10",
        // "Regular_Season_-_11",
        // "Regular_Season_-_12",
        // "Regular_Season_-_13",
        // "Regular_Season_-_14",
        // "Regular_Season_-_15",
        // "Regular_Season_-_16",
        // "Regular_Season_-_17",
        // "Regular_Season_-_18",
        // "Regular_Season_-_19",
        // "Regular_Season_-_20",
        // "Regular_Season_-_21",
        // "Regular_Season_-_22",
        // "Regular_Season_-_23",
        // "Regular_Season_-_24",
        // "Regular_Season_-_25",
        // "Regular_Season_-_26",
        // "Regular_Season_-_27",
        // "Regular_Season_-_28",
        // "Regular_Season_-_29",
        // "Regular_Season_-_30",
        // "Regular_Season_-_31",
        // "Regular_Season_-_32",
        // "Regular_Season_-_33",
        // "Regular_Season_-_34",
        // "Regular_Season_-_35",
        // "Regular_Season_-_36",
        // "Regular_Season_-_37",
        // "Regular_Season_-_38"
      ]
    };
  }

  // async componentDidMount() {
  //   const allRounds = await getAllRounds();
  //   console.log(allRounds);
  //   this.setState({
  //     rounds: allRounds
  //   })
  // }

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
      textAlign: "center"
    };
    return this.state.rounds.map((round, index) => (
      <Carousel.Item key={index}>
        <FixtureCard key={index} matchDay={round}></FixtureCard>
      </Carousel.Item>
    ));
  }
  render() {
    var settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2
    };

    return (
      <div style={{}}>
        <NavBar />

        <Carousel
          defaultActiveIndex={0}
          interval={null}
          prevIcon={
            <span
              aria-hidden="false"
              className="carousel-control-prev-icon"
              style={{ outlineColor: "black" }}
            />
          }
          nextIcon={
            <span
              aria-hidden="false"
              className="carousel-control-next-icon"
              style={{ outlineColor: "black" }}
            />
          }
        >
          {this.renderItems()}
        </Carousel>
      </div>
    );
  }
}

export default Fixtures;
