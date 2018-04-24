import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import BarChart from './BarChart';
import LineChart from './LineChart';
import AreaChart from './AreaChart';
import { chartTypes } from '../../utils/config';
import './chart.css';

const ChartTemp = props => {
	const { data, type } = props;

	let chartComponent;

	const renderChart = ChartCom => {
		return (
			<ChartCom data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
			</ChartCom>
		);
	};

	switch (type) {
		case chartTypes.line:
			chartComponent = LineChart;
			break;
		case chartTypes.area:
			chartComponent = AreaChart;
			break;
		case chartTypes.bar:
		default:
			chartComponent = BarChart;
			break;
	}

	return renderChart(chartComponent);
};

export default ChartTemp;
