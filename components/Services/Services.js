import React, { Component } from 'react';
import SERVICES from './services.data';

class Service extends Component {

  render() {
    const { title, iconURL, isIncluded, features } = this.props;

    return (
      <div className="col-xs-12 col-md-4 gc-service">
        <div className="gc-service-image-container">
          <img alt={`${title} icon`} className="gc-service-img" src={iconURL} />
          {isIncluded && <img alt="Service included" className="gc-service-free" src="/static/icons/icon-free.png" />}
        </div>
        <h4 className="gc-service-title">{title}</h4>
        <ul className="gc-service-list">
          {features.map((feature, index) => <li key={index} dangerouslySetInnerHTML={{__html: feature}}></li>)}
        </ul>
      </div>
    );
  }
}

export default class Services extends Component {

  render() {
    let rows = [];
    let services = [...SERVICES];
    // split services in batch of 3 in order to wrap with a row (see below)
    while (services.length) {
      rows.push(services.splice(0, 3));
    }

    return (
      <section className="gc-section bg-white text-center aligner">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 aligner-center">
              <h2 className="gc-section-title">Our services</h2>
              <p className="gc-section-content">Support for all areas of your business.</p>
            </div>
          </div>
          {rows.map((row, index) => (
            <div className="row" key={index}>
              {row.map((service, i) => {
                const { title, iconURL, isIncluded, features } = service;
                return (<Service key={i} title={title} iconURL={iconURL} isIncluded={isIncluded} features={features} />);
              })}
            </div>
          ))}
        </div>
      </section>
    )
  }
}
