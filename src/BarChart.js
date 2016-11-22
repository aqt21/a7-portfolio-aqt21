import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

// BarCharts component
var BarCharts = React.createClass({
	
	// Render BarChart
	render() {
		let currData = [];
		this.props.data.forEach(function(curr){
			currData.push({skills: curr.skills,
						Proficiency: parseInt(curr.percent, 10)})
		});
		// Return BarChart
		return (
				<BarChart width={600} height={300} data={currData}>
				  <XAxis dataKey="skills" />
				  <YAxis label="Proficiency"/>
				  <CartesianGrid strokeDasharray="3 3"/>
				  <Tooltip/>
				  <Bar type="number" dataKey="Proficiency" barSize={30} fill="#ff9e80"/>
				</BarChart>
		);
	}
});

export default BarCharts;