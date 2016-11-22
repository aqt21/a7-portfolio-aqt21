// Landing page -- what users see on arrival
import React from 'react';
import './css/Landing.css'
import $ from 'jquery';
import Baby from 'babyparse';
import BarCharts from './BarChart';

var LandingPage = React.createClass({
	getInitialState:function() {
		return {skillData:[]}
	},

	componentDidMount(){
		$.get("./data/skills.csv").then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({skillData:parsed.data})
		}.bind(this));
	},
	
    render() {
        return(
            <div>
				<div className="deep-orange accent-1">
					<h3 className="center-align">Welcome to My Portfolio</h3>
				</div>
				<div className="row">
					<div className="container">
						<div className="col s12">
							<div className="card horizontal medium">
							  <div className="card-image">
								<img className="hide-on-med-and-down" alt="about me" src="./imgs/aboutme.jpg" />
							  </div>
							  <div className="card-stacked">
								<div className="card-content">
									<h3 className="header">About Me</h3>
									<hr />
									<p>Hey there! My name is Andrew Quoc Tran. I was born and raised in the Seattle area my whole life. What I can offer you is someone who is passionate about designing and developing interfaces that appeals to both you and your users. Aside from my technical hobbies, I also enjoy going indoor Bouldering and competing in Super Smash Bros for the Wii U. I like to keep a positive and fun working environment and love to work with others!</p>
								</div>
								<div className="card-action">
								  <a href="#/my-projects">View my recent works</a>
								</div>
							  </div>
							</div>
						</div>
						
						<div className="col s12">
							<div className="card">
								<div className="card-content center-align">
									<h3 className="card-title flex-text">My Skills</h3>
									<hr />
									<BarCharts data={this.state.skillData} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        )
    }
});

export default LandingPage;