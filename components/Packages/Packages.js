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
                <p className="gc-small"></p>
                <p className="gc-price">{pack.price}</p>
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
              <h2 className="gc-section-title">--</h2>
              <p className="gc-section-content">
                blablablablablablablablablablablabla.
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
