import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';

class App extends Component {
  state = { language: 'english' };


  onLanguageChange = language => {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a langauge
          <i className="flag uk" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>

        <LanguageContext.Provider value={this.state.language}>
          <ColourContext.Provider value={'orange'}>
            <UserCreate />
          </ColourContext.Provider>
        </LanguageContext.Provider>
      </div>
    )
  }
}

export default App;