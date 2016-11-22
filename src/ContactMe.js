// Page of quotes to show
import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.css'

// PageOne Component
var ContactMe = React.createClass({
	// Render a <Quote> element for each element in the state
	render() {
		return (
			<div>
				<div className="s12 deep-orange accent-1">
					<h3 className="black-text center-align">Contact Me</h3>
				</div>
				<div className="row">
					<div className="container">
						<div className="col s12 l9 left">
							<div className="card deep-orange accent-1">
								<div className="card-content center-align">
									<h4 className="card-title">Open to All Inquiries!</h4>
									<hr/>
									<p className="flow-text">Please feel free to contact me if you have any questions. I'll be sure to respond as soon as possible.</p>

								</div>
							</div>
							
							<div className="card deep-orange accent-1">
								<div className="card-content center-align">
									<h4 className="card-title">Social Media</h4>
									<hr/>
									<a href="https://www.facebook.com/AndQuocDrew"><i className="fa fa-3x fa-facebook blue-text" aria-hidden="true"></i></a>
								</div>
							</div>
						</div>
						
						<div className="col s12 m12 l3 right">
							<div className="card deep-orange accent-1">
								<div className="card-content center-align">
									<h4 className="card-title">Contact Information</h4>
									<hr/>
									<div>
										<i className="fa fa-3x fa-map-marker" aria-hidden="true"></i>
										<p>Renton, WA</p>
									</div>
									<div>
										<i className="fa fa-3x fa-phone" aria-hidden="true"></i>
										<p>425-457-0590</p>
									</div>
									<div>
										<i className="fa fa-3x fa-envelope" aria-hidden="true"></i>
										<p>andrewtran97@gmail.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

export default ContactMe;