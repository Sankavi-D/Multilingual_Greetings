import './index.css'

const GreetingPageDetails = props => {
  const {languageGreetingsItems, changeButton, isActive} = props
  const {id, buttonText} = languageGreetingsItems
  const greetColor = isActive === true ? 'greetBackgroundBtn' : 'greetNormalBtn'

  const greetBtn = () => {
    changeButton(id)
  }

  return (
    <div className="greet-card">
      <li className="button-container">
        <button type="button" className={greetColor} onClick={greetBtn}>
          {buttonText}
        </button>
      </li>
    </div>
  )
}

export default GreetingPageDetails
