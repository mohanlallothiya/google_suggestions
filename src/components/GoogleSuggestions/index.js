import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    inputValue: '',
  }

  onInputChange = event => {
    this.setState({inputValue: event.target.value})
  }

  selectSuggestion = value => {
    this.setState({inputValue: value})
  }

  render() {
    const {inputValue} = this.state
    const {suggestionsList} = this.props

    const filteredList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(inputValue.toLowerCase()),
    )

    return (
      <div className="mainContainer">
        <div className="subContainer">
          <img
            className="googleLogo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="inputContainer">
            <div className="inputSearchCon">
              <img
                className="searchLogo"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                value={inputValue}
                onChange={this.onInputChange}
                className="inputEl"
                type="search"
                placeholder="Search Google"
              />
            </div>
            <ul className="listCon">
              {filteredList.map(eachItem => (
                <SuggestionItem
                  suggestionDetail={eachItem}
                  key={eachItem.id}
                  selectSuggestion={this.selectSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
