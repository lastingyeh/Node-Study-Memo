import React from 'react';
import { LineChart, Line } from 'recharts';

const LineChartCom = ({ data, children }) => {
	return (
		<LineChart
			width={600}
			height={300}
			data={data}
			margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
		>
			{children}
			<Line
				type="monotone"
				dataKey="pv"
				stroke="#8884d8"
				activeDot={{ r: 8 }}
			/>
			<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
		</LineChart>
	);
};

export default LineChartCom;
