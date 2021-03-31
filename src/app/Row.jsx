import React, { Component } from 'react';

/**
 * TODO: install better comments
 * * better comments higlight
 * ! Deprecated
 * ? Preguntame algo
 * @param
 */

// comment normal
class Row extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.change.when}</td>
				<td>{this.props.change.who}</td>
				<td>{this.props.change.description}</td>
			</tr>
		);
	}
}

export default Row;
