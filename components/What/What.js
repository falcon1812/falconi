import React, { Component } from 'react';
import { LINKS } from 'config';

export default class What extends Component {

  onClickJoinUs = (e) =>
    analytics.track("Link Join Us Free Today", { platform: "www"});

  render () {
    return (
      <section className="gc-section gc-section-bg-color what aligner">
        <div className="container">
          <div className="what-we-do col-md-10 col-md-offset-1 p-a-0">
            <div className="flex">
              <h2 className="gc-section-title">What we do</h2>
              <p className="gc-section-content">
                  Once we understand your problem, we would tell you everything we know of how to solved and why it could be a good idea plus any benefits you could get from it. We want you too know that even if we do not have a solution we would try to find one.
              </p>
              <a href={LINKS.BOOK} onClick={this.onClickJoinUs} target="_blank" rel="noopener">
                <button className="gc-button try-for-free gc-button-sm">talk with us free today</button>
              </a>
            </div>
            <div className="image">
              <img alt="falconi image" className="img-responsive" src="/static/images/what-we-do.svg" />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
