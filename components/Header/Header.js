import React, { PureComponent } from 'react';
import Scroll from 'react-scroll';
import Scrollspy from 'react-scrollspy';
import cookie from 'react-cookies';
import { LINKS } from 'config';

class CookiesNotice extends PureComponent {
  render() {
    return (
      <div className="gc-cookie-notice" id="gc-cookie-notice">
        <span>
          We use cookies to monitor the performance of this website and improve user experience. By using our services, you agree to the use of cookies as described in our <a href={LINKS.PRIVACY} target="_blank" rel="noopener">privacy policy.</a>
        </span>
        <img className="gc-cookie-close-button" src="/static/icons/icon-x-white.png" alt="Close Notice" onClick={this.props.onClose}/>
      </div>
    );
  }
}

export default class Header extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      showMobileMenu: false,
      links: {},
      headerHeight: 0,
      canShowCookieBanner: false,
    };

    // save a previosly bound function into the state:
    // this is in order to avoid creating a new function each time inside the render() method
    Object.keys(props.nav).map((key, i) => {
      const id = props.nav[key].id;
      this.state.links[id] = () => this.goToAnchor(id);
    })
  }

  updateDimensions() {
    const headerHeight = document.getElementById('gc-header').clientHeight;
    if (headerHeight !== this.state.headerHeight) {
      this.setState((prevState, props) => {
        return {
          headerHeight: document.getElementById('gc-header').clientHeight,
        };
      });
    }
  }

  componentDidMount() {
    this.setState({ canShowCookieBanner: !cookie.load('cookie_policy') });
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  onClickMenuButton = () => {
    if (this.state.showMobileMenu) {
      document.body.style.overflow = "initial";
    } else {
      document.body.style.overflow = "hidden";
    }
    this.setState((prevState, props) => {
      return {
        showMobileMenu: (prevState.showMobileMenu) ? false : true,
      };
    });
  }

  onClickTryItForFreeButton = (e) => analytics.track("Try For Free Requested", { platform: "www"});

  onClickSignInButton = (e) => analytics.track("Signin Requested", { platform: "www"});

  goToAnchor(id) {
    Scroll.animateScroll.scrollTo(document.getElementById(id).offsetTop - this.state.headerHeight);
    this.setState({showMobileMenu: false});
    document.body.style.overflow = "initial";
  }

  getMobileMenu(nav, links) {
    return (
      <nav className="gc-menu">
        <ul className="gc-menu-list">
          {Object.keys(nav).filter(item => item !== 'home').map((key, i) => {
            const { id, label } = nav[key];
            const onClick = this.state.links[id];
            return <li key={id}><a href={`#${id}`} onClick={onClick}>{label}</a></li>;
          })}
        </ul>
        <ul className="gc-menu-list">
          <li><a onClick={this.onClickTryItForFreeButton} href={LINKS.SIGNUP} className="gc-try-for-free" target="_blank" rel="noopener">Try it for free</a></li>
          <li><a onClick={this.onClickSignInButton} href={LINKS.LOGIN} className="gc-sign-up" target="_blank" rel="noopener">Sign in</a></li>
        </ul>
      </nav>
    );
  }

  onCloseCookiesNotice = () => {
    cookie.save('cookie_policy', true, { path: '/' });
    this.setState((prevState, props) => {
      return {
        canShowCookieBanner: false,
        headerHeight: document.getElementById('gc-header-nav').clientHeight,
      };
    });
  }

  canSeeCookieBanner = () => {
    return !cookie.load('cookie_policy');
  }

  render () {
    const { isTransparent, showMobileMenu, links } = this.state;
    const { nav } = this.props;
    const navigationItems = Object.keys(nav)
                                  .map((key) => nav[key].id)
                                  .filter((value) => value !== nav.home.id);

    let cookieBanner = null;
    if (this.state.canShowCookieBanner) {
      cookieBanner = (<CookiesNotice onClose={this.onCloseCookiesNotice}></CookiesNotice>);
    }

    return (
      <header className="gc-header" id="gc-header">

        { cookieBanner }

        <nav className={`gc-header-nav ${(showMobileMenu) ? 'is-opened' : ''}`} id="gc-header-nav" >
          <div>
            <a href={`#${nav.home.id}`} onClick={links.home}>
              <img alt={nav.home.label} src='/static/logos/logo-g-purple.svg'/>
            </a>
          </div>

          <Scrollspy items={ navigationItems } className="gc-header-sections hidden-xs hidden-sm" currentClassName="active" offset={-this.state.headerHeight -1}>
            {Object.keys(nav).filter(item => item !== 'home').map((key, i) => {
              const { id, label } = nav[key];
              const onClick = this.state.links[id];
              return (
                <a key={id} href={`#${id}`} onClick={onClick}>
                  <div className="gc-header-section">
                    {label}
                  </div>
                </a>
              );
            })}
          </Scrollspy>

          <div className="gc-header-links hidden-xs hidden-sm">
            <a href={LINKS.SIGNUP} onClick={this.onClickTryItForFreeButton} target="_blank" rel="noopener">
              <button className="gc-button try-for-free gc-button-sm">Try it for Free</button>
            </a>
            <a href={LINKS.LOGIN} onClick={this.onClickSignInButton} target="_blank" rel="noopener">
              <button className="gc-button sign-in gc-button-sm">Sign in</button>
            </a>
          </div>

          <div className={`gc-menu-button hidden-md hidden-lg`}>
            <button className="gc-hamburger-button" onClick={this.onClickMenuButton}>
              <img alt="Menu icon" src="/static/icons/icon-menu-white.svg" />
            </button>
          </div>

        </nav>

        {showMobileMenu && this.getMobileMenu(nav, links)}

      </header>
    )
  }
}
