// Page of quotes to show
import React from 'react';
import $ from 'jquery';
import Baby from 'babyparse';
import './css/myprojects.css';

// PageOne Component
var MyProjects = React.createClass({
	getInitialState:function() {
		return {projectData:[]}
	},

	componentDidMount(){
		$.get("./data/projects.csv").then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({projectData:parsed.data})
		}.bind(this));
	},
	
	render() {
		return (
			<div>
				<div className="s12 deep-orange accent-1">
					<h3 className="center-align">My Projects</h3>
				</div>
				<div className="row">
					<div className="container">
					{this.state.projectData.map(function(curr,i){
						return (
						<div className="col s12 projects" key={"project" + i}>
							<div className="card horizontal">
							  <div className="card-image hide-on-small-only">
								<img alt={curr.image} src={"./imgs/" + curr.image} />
							  </div>
							  <div className="card-stacked">
								<div className="card-content">
									<h4>{curr.name}</h4>
									<p>{curr.description}</p>
								</div>
								<div className="card-action">
								  <a href={curr.url}>Link to project</a>
								</div>
							  </div>
							</div>
						</div>
						)
						})
					}
					</div>
				</div>
			</div>
		);
	}
});

export default MyProjects;