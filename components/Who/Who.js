import React, { Component } from 'react';
import { LINKS } from 'config';

export default class Who extends Component {

  onClickJoinUs = (e) => analytics.track("Link Join Us Free Today Requested", { platform: "www"});

  render () {
    return (
      <section className="gc-section text-center aligner">
        <div className="container">
          <div className="aligner-center col-md-10 col-md-offset-1 p-a-0">
            <h2 className="gc-section-title">Making your business better</h2>
            <p className="gc-section-content m-b-0">
              falconi is about making time to grow. We believe running your company should be fulfilling and rewarding – yet we know that UK small business owners spend more than a third of their working week on business admin.
              If you’re an entrepreneur or innovator, we assume you’d rather be doing what you love and focusing on growth.
              <a href={LINKS.SIGNUP} onClick={this.onClickJoinUs} className="gc-anchor pink" target="_blank" rel="noopener"> Join us</a> or Contact us today to find out how we can help you.
            </p>
          </div>
        </div>
      </section>
    )
  }
}
