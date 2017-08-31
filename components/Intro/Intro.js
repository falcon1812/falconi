import React, { Component } from 'react';

export default class Intro extends Component {

  render () {
    return (
      <section className="gc-section-bg-image intro aligner">
        <div className="container">
          <div className="col-xs-10 col-md-5 col-md-offset-1 p-a-0">
            <img className="gc-falconi-logo" alt=" " src="/static/logos/logo-falconi-white.png" />
            <h1>Your online business service</h1>
            <h4>Accounting, expenses, team management, legal, HR, payroll, company secretarial and more... all in one smart place.</h4>
          </div>
        </div>
      </section>
    )
  }
}
