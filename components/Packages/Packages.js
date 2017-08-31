import React, { Component } from 'react';
import PACKAGES from './packages.data';

export default class Packages extends Component {

  render () {

    const packages = PACKAGES.map((item, index) => {
      return (
        <div className="col-xs-12 col-md-4 equal-height flex" key={index}>
          <div className="col-xs-12 gc-package">
            <div className="gc-package-title">{item.title}</div>
            { item.freePackages.map((freePackage, index) => (
              <div className="gc-package-free" key={index}>
                <div className="aligner">
                  <img alt="Service included" className="gc-service-free" src="/static/icons/icon-free.png" />
                  <span className="gc-package-free-name">{freePackage.name}</span>
                </div>
                <div className="gc-package-free-desc">
                  {freePackage.description}
                </div>
              </div>
            )) }
            { item.packages.map((pack, index) => (
              <div key={index} className="col-md-12 gc-feature">
                <p className="gc-feature-name">{pack.name}</p>
                <p className="gc-small">From</p>
                <p className="gc-price">£{pack.price}</p>
                <p className="gc-small">per month + VAT</p>
                <ul className="text-left">
                  { pack.features.map((feature, index) => (<li key={index}>{feature}</li>)) }
                </ul>
              </div>
            )) }
          </div>
        </div>
      );
    });

    return (
      <section id={this.props.id} className="gc-section text-center aligner">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 aligner-center">
              <h2 className="gc-section-title">Build your own package now</h2>
              <p className="gc-section-content">
                You can put together your own package of services, to match your business needs.
                Some of our services are free, and some you pay for.
                And your package is flexible – you can add or remove services as your business grows.
                The example packages below show a range of options.
                To find out more about how we can tailor our services to suit your business, call 0141 223 0700.
              </p>
            </div>
          </div>
          <div className="row text-center equal-height">
            { packages }
          </div>
        </div>
      </section>
    )
  }
}
