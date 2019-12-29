import React, { Component } from 'react'

export default class IntroImage extends Component {
    render() {
      return (
        <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home" style={{height: '916px'}}>
            <div className="flexslider" style={{height: '916px'}}>
                <ul className="slides">
                    <li className data-thumb-alt style={{backgroundImage: 'url("images/favor-headshot.jpg")', backgroundSize: 'contain'}}>
                        <div className="overlay" />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text" style={{height: '916px'}}>
                                    <div className="slider-text-inner js-fullheight" style={{height: '916px'}}>
                                        <div className="desc">
                                            <h1>Howdy! <br />I'm Kim</h1>
                                            <p><a className="btn btn-primary btn-learn" href="https://www.linkedin.com/in/kimberly-klask-8a66a140/" target="_blank" rel="noopener noreferrer">View Linkedin Profile  <i className="icon-linkedin2" /></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li data-thumb-alt style={{backgroundImage: 'url("images/kim-sewing.jpg")', width: '50%', height: '100%', backgroundSize: 'contain', backgroundPosition: '50%'}}>
                        <div className="overlay" />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text animated fadeInUp" style={{height: '916px'}}>
                                    <div className="slider-text-inner">
                                        <div className="desc">
                                            <h1>I'm pretty into <br />sewing</h1>
                                            <p><a className="btn btn-primary btn-learn" href="https://github.com/Dhruv34788" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li data-thumb-alt style={{backgroundImage: 'url("images/kimskating.jpg")', backgroundSize: 'contain', backgroundPosition: '50%'}}>
                        <div className="overlay" />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text" style={{height: '916px'}}>
                                    <div className="slider-text-inner">
                                        <div className="desc" style={{position: 'right'}}>
                                            <h1>I spend a lot of time <br />skating</h1>
                                            <p><a className="btn btn-primary btn-learn" href="https://www.txrd.com/" target="_blank" rel="noopener noreferrer">Check out my roller derby league here <i className="icon-book" /></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li data-thumb-alt style={{backgroundImage: 'url("images/logos.jpg")', backgroundPosition: 'bottom right', backgroundSize: '70%'}}>
                        <div className="overlay" />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text" style={{height: '916px'}}>
                                    <div className="slider-text-inner">
                                        <div className="desc" style={{position: 'right'}}>
                                            <h1>But most of all, I'm pretty good at <br />TESTING</h1>
                                            <p><a className="btn btn-primary btn-learn" href="https://github.com/kimbo-slice" target="_blank" rel="noopener noreferrer">Here's my Github repo <i className="icon-social-github" /></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </li>
                </ul>
                <ol className="flex-control-nav flex-control-paging">
                    <li><a href="#" className>1</a></li>
                    <li><a href="#" className="flex-active">2</a></li>
                    <li><a href="#">3</a></li>
                </ol>
                <ul className="flex-direction-nav">
                    <li className="flex-nav-prev"><a className="flex-prev" href="#">Previous</a></li>
                    <li className="flex-nav-next"><a className="flex-next" href="#">Next</a></li>
                </ul>
            </div>
        </section>
    </div>
      )
    }
}