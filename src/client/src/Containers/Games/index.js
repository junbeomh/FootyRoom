import React from "react";
import PropTypes from "prop-types";
import Card from "./card";

const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff",
    color: "#fff",
    overflowY: "scroll",
    paddingTop: "125px",
    textAlign: "center"
};

const Games = ({ games }) =>
    games ? (
        <div style={styles}>
            {games.map(game => (
                <Card
                    game={game}
                    hTeam={game.homeTeam}
                    vTeam={game.awayTeam}
                    key={game.id}
                />
            ))}
        </div>
    ) : null;


Games.propTypes = {
    games: PropTypes.array
};

export default Games;