import {Component} from 'react'

import GreetingPageDetails from '../GreetingPageDetails'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class GreetingPage extends Component {
  state = {
    greet: languageGreetingsList[0].id,
  }

  changeButton = id => {
    this.setState({
      greet: id,
    })
  }

  getGreet = () => {
    const {greet} = this.state
    const greetLanguage = languageGreetingsList.find(list => list.id === greet)
    return greetLanguage
  }

  render() {
    const {greet} = this.state
    const {imageUrl, imageAltText} = this.getGreet()

    return (
      <div className="bg-container">
        <h1 className="Greeting-Heading">Multilingual Greetings</h1>
        <ul className="button-container">
          {languageGreetingsList.map(eachList => (
            <GreetingPageDetails
              languageGreetingsItems={eachList}
              key={eachList.id}
              isActive={greet === eachList.id}
              changeButton={this.changeButton}
            />
          ))}
        </ul>

        <img src={imageUrl} alt={`${imageAltText}`} className="img" />
      </div>
    )
  }
}

export default GreetingPage
