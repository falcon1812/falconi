import React, { Component } from 'react';

export default class Team extends Component {

  render () {
    return (
      <section id={this.props.id} className="gc-section p-b-0 text-center aligner bg-white">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 aligner-center m-b-80 p-a-0">
            <h2 className="gc-section-title">Your team</h2>
            <p className="gc-section-content m-b-0">
              Our UK-based specialists become an extension of your team, bringing to your business their expert knowledge of accounting, legal, HR, payroll and company secretarial requirements.
              As your business grows, their support can grow with it – without you having to worry about recruiting, and at a pace you’re comfortable with.
            </p>
          </div>
        </div>
        <img alt="Our team" className="img-responsive full-width" src="/static/images/team.jpg" />
      </section>
    )
  }
}
