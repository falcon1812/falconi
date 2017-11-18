import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CUSTOMER_TYPES from './customer-types.data';

class CustomerDescription extends PureComponent {
  render() {
    const { content, customerType } = this.props;

    return (content.length) ? (
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="customer-type-title">
              {customerType}...
            </div>
            <ul className="text-left">
              {content.map((s, i) => (<li key={`s-${i}`}>{s}</li>))}
            </ul>
          </div>
        </div>
    ) : null;
  }
}

export default class CustomerTypes extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      selectedCustomer: -1,
      selectedText: '',
    };
  }

  onCustomerClick(id, title) {
    this.setState((prevState, props) => {
      return {
        selectedText: title,
        selectedCustomer: (prevState.selectedCustomer !== id) ? id : -1,
      };
    });
  }

  isCustomerSelected = (index) => this.state.selectedCustomer === index;

  render() {
    const isCustomerNotSelected = (this.state.selectedCustomer !== -1);

    return (
      <div>
        <section id={this.props.id}  className="gc-section gc-section-bg-color customer-types text-center p-b-0 aligner">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 aligner-center">
                <h2 className="gc-section-title">Bespoke packages tailored for individual needs</h2>
                <p className="gc-section-content">Click the buttons below to see three different types of business. Whether you’re most like the consultant, small business or growing business, these case studies will make it easier for you to decide which falconi package will save you the most time, and support you most effectively.</p>
              </div>
            </div>
            <div className="row">
            {CUSTOMER_TYPES.map((customerType, index) => (
              <div className={`gc-customer-type col-md-4 ${(this.isCustomerSelected(index)) ? 'selected' : ''}`} key={index}>
                <img alt={customerType.title} src={`/static/${customerType.image}`} />
                <h3 className="gc-customer-title">{customerType.title}</h3>
                <p className="gc-customer-desc">{customerType.shortDesc}</p>

                <div className={`col-xs-12 m-b-30 gc-customer-long-desc ${(this.isCustomerSelected(index)) ? 'visible-sm visible-xs' : 'hidden'}`}>
                  <CustomerDescription key={`story-${index}`} content={(this.isCustomerSelected(index)) ? customerType.longDesc : []} customerType={this.state.selectedText} />
                </div>
              </div>
            ))}
            </div>
          </div>
          <div className={`gc-customer-long-desc ${isCustomerNotSelected ? 'visible-md visible-lg visible-xl' : 'hidden'}`}>
            {CUSTOMER_TYPES.map((customerType, index) => (
              <CustomerDescription key={`story-${index}`} content={(this.isCustomerSelected(index)) ? customerType.longDesc : []}  customerType={this.state.selectedText}/>
            ))}
          </div>
        </section>

      </div>
    )
  }
}
