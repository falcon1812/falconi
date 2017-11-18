import React, { Component } from 'react';
import { LINKS } from 'config';

export default class About extends Component {

  onClickFindOutMoreButton = () =>
    analytics.track("Link Find Out More Requested", { platform: "www"});

  render () {
    return (
      <section id={this.props.id} className="gc-section gc-g-service aligner">

        <div className="container">

          <h2 className="gc-section-title text-center">falconi IS A G SERVICE.</h2>

          <div className="col-md-10 col-md-offset-1 flex-container">
            <div className="flex gc-growth-container">
              <div className="gc-g-logo text-center aligner">
                <img alt="Github" src="/static/logos/logo-g-transparent.png" />
              </div>
              <span className="title">Where growth happens.</span>
              <p>We support open source project and we want to see the them growth as much as possible.</p>

              <a href={LINKS.GITHUB} onClick={this.onClickFindOutMoreButton} target="_blank" rel="noopener">
                <button className="gc-button">Find out more</button>
              </a>
            </div>

            <div className="flex gc-image-container">
              <img className="img-responsive full-width" alt="Front end cool guy" src="/static/images/front-end-conftocat.png" />
            </div>
          </div>

        </div>

      </section>
    )
  }
}
