import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

export default (props) => {

	return (
			<Nav bsStyle="tabs" justified activeKey="1">
	        	<NavItem eventKey="1">Toys</NavItem>
	        	<NavItem eventKey="2">Food</NavItem>
	        	<NavItem eventKey="3">Medicines</NavItem>
	        </Nav>
	);
}
