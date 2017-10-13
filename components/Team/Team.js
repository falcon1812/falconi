import React, { Component } from 'react';

export default class Team extends Component {

  render () {
    return (
      <section id={this.props.id} className="gc-section p-b-0 text-center aligner bg-white">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 aligner-center m-b-80 p-a-0">
            <h2 className="gc-section-title">Your team</h2>
            <p className="gc-section-content m-b-0">
              Our specialists become an extension of your team, bringing to your problems any kind of way to solved. They have years of experience on IT, multiple companies and solutions.
            </p>
          </div>
        </div>
        <img alt="Our team" className="img-responsive full-width" src="/static/images/team.jpeg" />
      </section>
    )
  }
}
