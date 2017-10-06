import React, { Component } from 'react';

export default class Testimonials extends Component {

  render () {
    return (
      <section className="gc-section gc-section-bg-color testimonials text-left aligner p-a-0">

        <div className="large-testimonial aligner">
          <div className="col-md-6 p-a-15">
            <div className="col-xs-1 col-md-1 col-md-offset-2 p-a-0">
              <img className="quote-image" alt="Quote" src="/static/icons/icon-quote.png" />
            </div>
            <div className="col-xs-11 col-md-7 p-a-0 quote">
              <div className="col-xs-12">
                blabla”
              </div>
              <div className="col-xs-11 col-md-12 job-title">
                blabla
              </div>
            </div>
          </div>
          <div className="col-md-6 p-a-0 text-center">
            <div className="image p-r-0">
              <img className="full-width" alt="blabla" src="/static/images/testimonials.jpg" />
            </div>
          </div>
        </div>

        <div className="container small-testimonials">
          <div className="gc-testimonial-small col-md-6">
            <img src="/static/images/customer-2.jpg" alt="blabla" />
            <div>
              <p>"bla bla"</p>
              <b className="gc-job-title">blabla</b>
            </div>
          </div>
          <div className="gc-testimonial-small col-md-6">
            <img src="/static/images/customer-1.jpg" alt="blabla" />
            <div>
              <p>"blabla"</p>
              <b className="gc-job-title">blabla</b>
            </div>
          </div>
        </div>

      </section>
    )
  }
}
