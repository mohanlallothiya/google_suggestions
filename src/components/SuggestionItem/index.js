import './index.css'

const SuggestionItem = props => {
  const {suggestionDetail, selectSuggestion} = props
  const handleClick = () => {
    selectSuggestion(suggestionDetail.suggestion)
  }
  return (
    <li className="suggestionItemCon">
      <p>{suggestionDetail.suggestion}</p>
      <img
        onClick={handleClick}
        className="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}
export default SuggestionItem
