import React, { Component } from 'react';
import { LINKS } from 'config';

export default class Who extends Component {

  onClickJoinUs = (e) => analytics.track("talk with us link", { platform: "www"});

  render () {
    return (
      <section className="gc-section text-center aligner">
        <div className="container">
          <div className="aligner-center col-md-10 col-md-offset-1 p-a-0">
            <h2 className="gc-section-title">Making your business better</h2>
            <p className="gc-section-content m-b-0">
              Falconi is about solving any problem, idea, opportunity or question you have about technology, we believe on making companies and persons better on they daily work.
              That is why we do not charge for our services.
              Just come and <a href={LINKS.BOOK} onClick={this.onClickJoinUs} target="_blank" rel="noopener">talk</a> with us.
            </p>
          </div>
        </div>
      </section>
    )
  }
}
