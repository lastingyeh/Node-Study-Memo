import React, { Component } from 'react';
import './lifecycle.css';

class LifeCycleApp extends Component {
	constructor() {
		super();
		this.state = { name: 1234 };
	}

	componentWillMount() {
		console.log('willmount');
	}

	componentDidMount() {
		console.log('didmount');
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log('shouldupdate');
		return true;
	}

	componentWillUpdate() {
		console.log('willupdate');
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('didupdate');
	}

	render() {
		console.log('render');
		return (
			<div className="App">
				<button
					type="button"
					className="btn btn-outline-primary"
					onClick={() => this.setState({ name: 2345 })}
				>
					Life Cycle Demo
				</button>
			</div>
		);
	}
}

export default LifeCycleApp;
