import React, { Component } from 'react';
import ReactPixel from 'react-facebook-pixel';
import Header from 'components/Header/Header';
import Intro from 'components/Intro/Intro';
import Who from 'components/Who/Who';
import What from 'components/What/What';
import How from 'components/How/How';
import Services from 'components/Services/Services';
import Packages from 'components/Packages/Packages';
import CustomerTypes from 'components/CustomerTypes/CustomerTypes';
import Testimonials from 'components/Testimonials/Testimonials';
import Team from 'components/Team/Team';
import About from 'components/About/About';
import Footer from 'components/Footer/Footer';
import Calendar from 'components/Calendar/Calendar';

const nav = {
  home      : { id: 'home',      label: 'Home' },
  how       : { id: 'how',       label: 'How we help you' },
  packages  : { id: 'packages',  label: 'Packages' },
  customers : { id: 'customers', label: 'Customers' },
  calendar  : { id: 'calendar',  label: 'Calendar' },
  team      : { id: 'our-team',  label: 'Our team' },
  about     : { id: 'about',     label: 'About G' },
};

export default class App extends Component {

  componentDidMount() {
    ReactPixel.init('1883580588574747');
    ReactPixel.pageView();

    if (typeof window.google_trackConversion === 'function') {
      window.google_trackConversion({
        google_conversion_id: 923014461,
        google_remarketing_only: true
      });
    }
  }

  render () {
    // TODO make a reusable <Section> component to avoid repeat the section tag
    // and also enforce passing a TITLE + ID (required)
    return (
      <main role="main" id={nav.home.id}>
        <Header nav={nav} />
        <Intro/>
        <Who/>
        <What/>
        <How id={nav.how.id} />
        <Services/>
        <Packages id={nav.packages.id} />
        <CustomerTypes id={nav.customers.id} />
        <Testimonials />
        <Calendar id={nav.calendar.id} />
        <Team id={nav.team.id} />
        <About id={nav.about.id} />
        <Footer nav={nav} />
      </main>
    )
  }
}
