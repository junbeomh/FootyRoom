import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";

const navStyle = {
    padding: "0.25em",
    display: "inline-block",
    color: "white",
    margin: "0.5em"
};

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const styles = {
            item: {
                padding: "0.10em",
                display: "inline-block",
                color: "white",
                margin: "0.30em"
            },
            navbar: {
                backgroundColor: "rgb(56, 0, 60)"
            }
        };

        return (
            <div>
                <Navbar
                    collapseOnSelect
                    expand="sm"
                    style={styles.navbar}
                    variant="dark"
                >
                    <Navbar.Brand href="#home">
                        <SportsSoccerIcon
                            style={{
                                display: "inline-block",
                                verticalAlign: "top",
                                color: "rgba(215,33, 116)"
                            }}
                        >
                            {" "}
                        </SportsSoccerIcon>
                        <span style={{ fontSize: "1.25em" }}> footyRoom </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer
                                to="/"
                                exact
                                activeClassName="active"
                                style={styles.item}
                                activeStyle={{ borderBottom: "1px solid rgb(215,33, 116)" }}
                            >
                                <NavItem>
                                    {" "}
                                    <span style={{ fontSize: "0.9em" }}> FIXTURES </span>{" "}
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer
                                to="/standings"
                                style={styles.item}
                                activeStyle={{ borderBottom: "1px solid rgb(215,33, 116)" }}
                            >
                                <NavItem>
                                    {" "}
                                    <span style={{ fontSize: "0.9em" }}> STANDINGS </span>{" "}
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer
                                to="/stats"
                                style={styles.item}
                                activeStyle={{ borderBottom: "1px solid rgb(215,33, 116)" }}
                            >
                                <NavItem>
                                    {" "}
                                    <span style={{ fontSize: "0.9em" }}> STATS </span>{" "}
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer
                                to="/teams"
                                style={styles.item}
                                activeStyle={{ borderBottom: "1px solid rgb(215,33, 116)" }}
                            >
                                <NavItem>
                                    {" "}
                                    <span style={{ fontSize: "0.9em" }}> TEAMS </span>{" "}
                                </NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
