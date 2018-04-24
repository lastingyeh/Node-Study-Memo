import React from 'react';
import { BarChart, Bar } from 'recharts';

const BarChartCom = ({ data, children }) => {
	return (
		<BarChart
			width={600}
			height={300}
			data={data}
			margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
		>
			{children}
			<Bar dataKey="pv" fill="#8884d8" />
			<Bar dataKey="uv" fill="#82ca9d" />
		</BarChart>
	);
};

export default BarChartCom;
