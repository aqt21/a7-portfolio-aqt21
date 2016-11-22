// Application
import React from 'react';
import './css/App.css';
import $ from 'jquery';
require("jquery-ui");
import { Link } from 'react-router';
import '../node_modules/font-awesome/css/font-awesome.css'

var App = React.createClass({
	componentDidMount(){
		$(".headerHider").animate({ width: '100%' }, 5000, function(){
			$('.headerPic').fadeTo('slow', 0.3, function(){
				$(this).css('background-image', 'url("../imgs/skyline.jpg"');
			}).fadeTo('slow', 1, function(){
				$(".headerContent").fadeIn(5000);
			});
		});
	},
	
	render() {
		// Return links and show anything inside the <App> component (children)
		return (
				<div className="App">
					<nav>
						<div className="nav-wrapper deep-orange accent-1">
							<div className="container">
								<ul id="nav-mobile" className="left">
									<li><Link className="link black-text" activeClassName='active' to="/">Home</Link></li>
									<li><Link className="link black-text" activeClassName='active' to="/my-projects">My Projects</Link></li>
									<li><Link className="link black-text" activeClassName='active' to="/contact-me">Contact Me</Link></li>
								</ul>
							</div>
						</div>
					</nav>
					<div className="headerBackground">
						<header className="valign-wrapper headerHider">
								<div className="headerPic">
									<div className="headerContent">
										<div className="container valign center-align white-text">
											<img src="./imgs/profile.jpg" alt="" className="circle responsive-img" />
											<h2>Andrew Quoc Tran</h2>
										</div>
									</div>
								</div>
						</header>
					</div>
					<div className="children">
						{this.props.children}
					</div>
					<footer className="page-footer deep-orange accent-1">
					  <div className="container">
						<div className="row">
						  <div className="col l6 s12">
							<h5>AQT's Resume</h5>
						  </div>
						  <div className="col l4 offset-l2 s12">
							<h5>Links</h5>
							<ul>
							  <li><a className="black-text text-lighten-3" href="#">Home</a></li>
							  <li><a className="black-text text-lighten-3" href="#/my-projects">My Projects</a></li>
							  <li><a className="black-text text-lighten-3" href="#/contact-me">Contact Me</a></li>
							</ul>
						  </div>
						</div>
					  </div>
					  <div className="footer-copyright">
						<div className="container black-text ">
						© 2016 Andrew Quoc Tran
						</div>
					  </div>
					</footer>
				</div>
		);
	}
});

export default App;