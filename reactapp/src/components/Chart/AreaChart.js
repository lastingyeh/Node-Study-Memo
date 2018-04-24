import React from 'react';
import { AreaChart, Area } from 'recharts';

const LineChartCom = ({ data, children }) => {
	return (
		<AreaChart
			width={600}
			height={400}
			data={data}
			margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
		>
			{children}
			<Area
				type="monotone"
				dataKey="uv"
				stackId="1"
				stroke="#8884d8"
				fill="#8884d8"
			/>
			<Area
				type="monotone"
				dataKey="pv"
				stackId="1"
				stroke="#82ca9d"
				fill="#82ca9d"
			/>
			<Area
				type="monotone"
				dataKey="amt"
				stackId="1"
				stroke="#ffc658"
				fill="#ffc658"
			/>
		</AreaChart>
	);
};

export default LineChartCom;
