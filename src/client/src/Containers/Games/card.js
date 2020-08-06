import React from "react";
import PropTypes from "prop-types";

const styles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  alignSelf: "center",
  width: "292px",
  height: "71px",
  marginTop: "15px",
  backgroundColor: "#141414",
  fontFamily: "LucidaGrande",
  color: "white"
};


const Card = ({game, hTeam, vTeam, key}) => {
    return hTeam && vTeam ? (
      <div style={styles} key={key}>
        <img
          alt="Home"
          src={hTeam.logo}
          style={{ height: "50px", width: "50px" }}
        />
        <p className="">{game.goalsHome}</p>
        <p className="">FT</p>
        <p className="">{game.goalsAway}</p>
        <img
          alt="Away"
          src={vTeam.logo}
          style={{ height: "50px", width: "50px" }}
        />
      </div>
    ) : null;
  };

// Card.propTypes = {
//   hTeam: PropTypes.shape({
//     losses: PropTypes.string,
//     wins: PropTypes.string,
//     score: PropTypes.string,
//     teamId: PropTypes.string,
//     triCode: PropTypes.string
//   }),
//   vTeam: PropTypes.shape({
//     losses: PropTypes.string,
//     wins: PropTypes.string,
//     score: PropTypes.string,
//     teamId: PropTypes.string,
//     triCode: PropTypes.string
//   })
// };

export default Card;