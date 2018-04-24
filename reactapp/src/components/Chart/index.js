import React, { Component } from 'react';
import { fetchData } from '../../utils/apis';
import { chartTypes } from '../../utils/config';
import ChartTemp from './ChartTemp';

class ChartApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			type: 'line',
			data: [],
		};
	}

	async componentWillMount() {
		try {
			const data = await fetchData();
			this.setState({ data });
		} catch (error) {
			console.log(error);
		}
	}

	onChangeType = (event, type) => {
		event.preventDefault();
		this.setState({ type });
	};

	render() {
		const { data, type } = this.state;
		
		return (
			<div>
				<div className="btn-group">
					<button
						type="button"
						className="btn btn-danger dropdown-toggle btn-sm"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Chart Type
					</button>
					<div className="dropdown-menu">
						{Object.values(chartTypes).map((type, key) => (
							<a
								key={key}
								className="dropdown-item"
								onClick={event => this.onChangeType(event, type)}
							>
								{type.toUpperCase()}
							</a>
						))}
					</div>
				</div>
				<ChartTemp data={data} type={type} />
			</div>
		);
	}
}

export default ChartApp;
