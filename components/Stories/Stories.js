import React, { Component } from 'react';
import stylesheet from './Stories.styl';

export default class Stories extends Component {

  render() {
    const {story, className } = this.props;

    return (story.length) ? (
      <div className="gc-stories-container">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 gc-story">
              {story.map((s, i) => (<p key={`s-${i}`}>{s}</p>))}
            </div>
          </div>
        </div>
      </div>
    ) : null;
  }
}
