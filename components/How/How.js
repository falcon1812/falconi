import React, { Component } from 'react';
import { LINKS } from 'config';

export default class How extends Component {

  onClickExploreForFreeLink = (e) =>
    analytics.track("Link Explore For Free Now Requested", { platform: "www"});

  render () {
    return (
      <section id={this.props.id} className="gc-section p-b-0 text-center aligner">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 p-a-0">
            <h2 className="gc-section-title">How we do it</h2>
            <p className="gc-section-content">
              We put all the support and information you need in one cloud resource. So you benefit from the experience and knowledge of a variety of specialists, without having to waste time searching through different systems.
              Give it a <a href={LINKS.SIGNUP} onClick={this.onClickExploreForFreeLink} className="gc-anchor pink" target="_blank" rel="noopener">try for free now</a>, and see how we can help to save you time and make your life simpler.
            </p>
          </div>
        </div>
        <img alt="falconi platform preview image" className="img-responsive full-width" src="/static/images/how-we-do-it.jpeg" />
      </section>
    )
  }
}
