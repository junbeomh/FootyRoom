import React, { Component } from 'react';
import { Navbar, Nav, NavDropdow, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';


const navStyle = {
    padding: '0.25em',
    display: 'inline-block',
    color: 'white',
    margin: '0.5em',
}

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const navbar = { backgroundColor: 'rgb(56, 0, 60)' };

        return (
            <div>
                <Navbar collapseOnSelect expand="sm" style={navbar} variant="dark" >
                    <Navbar.Brand href="#home">
                        <SportsSoccerIcon style={{ display: "inline-block", verticalAlign: "top", color: "rgba(215,33, 116)" }}> </SportsSoccerIcon>
                        <span style={{ fontSize: "1.35em" }}> footyRoom </span>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto" >
                            <LinkContainer to="/" exact activeClassName="active" style={navStyle} activeStyle={{ borderBottom: "1px solid rgb(215,33, 116)", }} >
                                <NavItem > <span style={{ fontSize: "1em" }}> FIXTURES </span> </NavItem>
                            </LinkContainer>
                            <LinkContainer to="/standings" style={navStyle} activeStyle={{ borderBottom: "1px solid rgb(215,33, 116)" }}>
                                <NavItem > <span style={{ fontSize: "1em" }}> STANDINGS </span>  </NavItem>
                            </LinkContainer>
                            <LinkContainer to="/stats" style={navStyle} activeStyle={{ borderBottom: "1px solid rgb(215,33, 116)" }} >
                                <NavItem > <span style={{ fontSize: "1em" }}> STATS </span>  </NavItem>
                            </LinkContainer>
                            <LinkContainer to="/teams" style={navStyle} activeStyle={{ borderBottom: "1px solid rgb(215,33, 116)" }}>
                                <NavItem > <span style={{ fontSize: "1em" }}> TEAMS </span>  </NavItem>
                            </LinkContainer>

                            {/* <NavItem componentclass="span" > <Link to="/fixtures" style={navStyle}> fixtures</Link></NavItem>
                            <NavItem componentclass="span"> <Link to="/standings" style={navStyle}> standings</Link></NavItem>
                            <NavItem componentclass="span"> <Link to="/stats" style={navStyle}> stats</Link></NavItem>
                            <NavItem componentclass="span"> <Link to="/teams" style={navStyle}> teams</Link></NavItem> */}

                            {/* <Link to="/fixtures"> <Nav.Link href="#fixtures"> Fixtures </Nav.Link> </Link>
                            <Link to="/standings"> <Nav.Link href="#standings"> Standings</Nav.Link> </Link>
                            <Link to="/stats"> <Nav.Link href="#stats"> Stats </Nav.Link> </Link>
                            <Link to="/teams"> <Nav.Link eventKey={2} href="#teams"> Teams </Nav.Link> </Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
