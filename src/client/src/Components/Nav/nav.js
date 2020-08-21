import React, { Component } from 'react';
import { Navbar, Nav, NavDropdow, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


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
        return (
            <div>
                <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="../../logo512.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
      FootyRoom
      </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto" >
                            <LinkContainer to="/" exact activeClassName="active" style={navStyle} activeStyle={{ borderBottom: "1px solid #fff" }} >
                                <NavItem > FIXTURES </NavItem>
                            </LinkContainer>
                            <LinkContainer to="/standings" style={navStyle} activeStyle={{ borderBottom: "1px solid #fff" }}>
                                <NavItem > STANDINGS </NavItem>
                            </LinkContainer>
                            <LinkContainer to="/stats" style={navStyle} activeStyle={{ borderBottom: "1px solid #fff" }} >
                                <NavItem > STATS </NavItem>
                            </LinkContainer>
                            <LinkContainer to="/teams" style={navStyle} activeStyle={{ borderBottom: "1px solid #fff" }}>
                                <NavItem > TEAMS </NavItem>
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
