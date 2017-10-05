import React, { Component } from 'react';
import { LINKS } from 'config';

export default class What extends Component {

  onClickJoinUs = (e) =>
    analytics.track("Link Join Us Free Today Requested", { platform: "www"});

  render () {
    return (
      <section className="gc-section gc-section-bg-color what aligner">
        <div className="container">
          <div className="what-we-do col-md-10 col-md-offset-1 p-a-0">
            <div className="flex">
              <h2 className="gc-section-title">What we do</h2>
              <p className="gc-section-content">
                Put simply, we give you time back, by setting you free from admin chores. Our services include accounting, expenses, team management, legal, HR, payroll and company secretarial – and we’re adding new services all the time. Our technology brings these services together in one place. We do the work, but you stay in control, with access any time, wherever you are.
              </p>
              <p className="gc-section-content">
                Many small businesses are already experiencing the advantages of falconi. You can join them, and benefit from some of our services for free. It’s also <a href={LINKS.SIGNUP} onClick={this.onClickJoinUs} target="_blank" rel="noopener">free to sign up</a> so start experiencing falconi today.
              </p>
              <a href={LINKS.BOOK} onClick={this.onClickJoinUs} target="_blank" rel="noopener">
                <button className="gc-button try-for-free gc-button-sm">talk with us free today</button>
              </a>
            </div>
            <div className="image">
              <img alt="falconi platform preview" className="img-responsive" src="/static/images/what-we-do.svg" />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
