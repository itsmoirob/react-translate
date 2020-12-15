import React, { Component } from 'react';
import ColourContext from '../contexts/ColourContext';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
  renderButton(colour) {
    return (
      <button className={`ui button ${colour}`}>
        <LanguageContext.Consumer>
          {(language) => language === 'english' ? ' Submit' : 'Voorleggen'}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    return (
      <ColourContext.Consumer>
        {(colour) => this.renderButton(colour)}
      </ColourContext.Consumer>
    )
  }
}

export default Button; (
  <div>
    Button
  </div>
)