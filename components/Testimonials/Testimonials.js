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
                falconi takes the stress out of all of our corporate secretarial requirements. With in-house experts and a very user-friendly interface we can manage everything quickly and with ease, confident that everything has been done properly.”
              </div>
              <div className="col-xs-11 col-md-12 job-title">
                Andy Meikle, CEO of Sportlobster
              </div>
            </div>
          </div>
          <div className="col-md-6 p-a-0 text-center">
            <div className="image p-r-0">
              <img className="full-width" alt="Andy Meikle, CEO of Sportlobster" src="/static/images/testimonials.jpg" />
            </div>
          </div>
        </div>

        <div className="container small-testimonials">
          <div className="gc-testimonial-small col-md-6">
            <img src="/static/images/customer-2.jpg" alt="Mark Murray, director of Lingo" />
            <div>
              <p>"falconi is effectively a one-stop shop for every aspiring entrepreneur and creative new business.
              I would advise any future start-up company to contact falconi and test drive their unrivalled professional service"</p>
              <b className="gc-job-title">Mark Murray, director of Lingo</b>
            </div>
          </div>
          <div className="gc-testimonial-small col-md-6">
            <img src="/static/images/customer-1.jpg" alt="Tom Davenport, co-founder of Talentpool" />
            <div>
              <p>"It’s a brilliant service, by far our most valued supplier. A huge de-stresser."</p>
              <b className="gc-job-title">Tom Davenport, co-founder of Talentpool</b>
            </div>
          </div>
        </div>

      </section>
    )
  }
}
