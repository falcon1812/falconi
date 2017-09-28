import React, { Component } from 'react';
import { LINKS } from 'config';

export default class Calendar extends Component {

  render () {
      return (
        <div id={this.props.id} className="calendar">
          <div className="calendly-inline-widget gc-section p-a-0" data-url={LINKS.CALENDLY} />
        </div>
      );
  }
}
