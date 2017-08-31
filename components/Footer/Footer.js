import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { LINKS } from 'config';

class SiteNav extends Component {

  goToAnchor(anchor) {
    const headerHeight = document.getElementById('gc-header').clientHeight;
    Scroll.animateScroll.scrollTo(document.getElementById(anchor).offsetTop - headerHeight);
  }

  render () {
    const { nav } = this.props;
    return (
      <section className="gc-mapsite-container">
        <div className="container">
            <div className="col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1 p-a-0">
              <div className="col-md-2 col-xs-6 p-a-0">
                <span>Quick Links</span>
                <ul>
                  {Object.keys(nav).map((key, i) => {
                    const { id, label } = nav[key];
                    return <li key={id}><a href={`#${id}`} onClick={() => this.goToAnchor(id)}>{label}</a></li>;
                  })}
                </ul>
              </div>
              <div className="col-md-2 col-xs-6 p-a-0">
                <span>Legal</span>
                <ul>
                  <li><a href={LINKS.TERMS_AND_CONDITIONS} target="_blank" rel="noopener">T&C’s</a></li>
                  <li><a href={LINKS.TERMS_OF_SERVICE} target="_blank" rel="noopener">falconi T&C’s</a></li>
                  <li><a href={LINKS.PRIVACY} target="_blank" rel="noopener">Privacy Policy</a></li>
                </ul>
              </div>
              <div className="col-md-2 col-xs-6 p-a-0">
                <span>Social</span>
                <ul>
                  <li><a href={LINKS.TWITTER} target="_blank" rel="noopener">Twitter</a></li>
                  <li><a href={LINKS.LINKEDIN} target="_blank" rel="noopener">Linkedin</a></li>
                </ul>
              </div>
              <address className="col-md-2 col-xs-6 p-a-0">
                <span>Contact Info</span>
                <ul>
                  <p>falconi UK Limited,</p>
                  <p>110 Queen Street,</p>
                  <p>Glasgow,</p>
                  <p>G1 3BX</p>
                  <p>0141 223 0700</p>
                  <p><a href="mailto:info@falconi.com?Subject=Information request" className="gc-anchor pink">info@falconi.com</a></p>
                </ul>
              </address>

              <div className="col-md-3 col-xs-12 col-md-offset-1 gc-copyright">
                <a href={LINKS.GRANT_THORNTON} target="_blank" rel="noopener">
                  <img alt=" " src="/static/logos/logo-gt.png" />
                </a>
                <p>Copyright @ 2017   UK LLP. All rights reserved.</p>
              </div>
            </div>
        </div>
      </section>
    )
  }
}

export default class Footer extends Component {

  render () {
    const today = new Date();
    const year = today.getFullYear();
    return (
      <footer>
        <SiteNav nav={this.props.nav} />
      </footer>
    )
  }
}
