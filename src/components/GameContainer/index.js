import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {
  GameDiv,
  Header,
  FlexConatainerColumn,
  ScoreCard,
  HeadingContent,
  CrossBtn,
  Heading3,
  SelectBtn,
  ResultImgDiv,
  RuleImg,
  FlexConatainerRow,
  SelectImgDiv,
  ResultContainer,
  Description,
  RuleButton,
  PlayButton,
  SelectImg,
  Score,
} from './styledComponent'

class GameContainer extends Component {
  state = {
    userSelectedImgUrl: '',
    machineSelectedUrl: '',
    showResult: false,
    score: 0,
    result: '',
  }

  onSelectImg = value => {
    const {choicesList} = this.props
    const randomNum = Math.floor(Math.random() * 3) // 0 to 2
    const userImgId = value.id
    const machineImgId = choicesList[randomNum].id

    let resultText = ''
    let scoreChange = 0

    if (userImgId === machineImgId) {
      resultText = 'IT IS DRAW'
    } else if (
      (userImgId === 'ROCK' && machineImgId === 'SCISSORS') ||
      (userImgId === 'PAPER' && machineImgId === 'ROCK') ||
      (userImgId === 'SCISSORS' && machineImgId === 'PAPER')
    ) {
      resultText = 'YOU WON'
      scoreChange = 1
    } else {
      resultText = 'YOU LOSE'
      scoreChange = -1
    }

    this.setState(prevState => ({
      userSelectedImgUrl: value.imageUrl,
      machineSelectedUrl: choicesList[randomNum].imageUrl,
      showResult: true,
      result: resultText,
      score: prevState.score + scoreChange,
    }))
  }

  onPlayAgain = () => {
    this.setState({showResult: false})
  }

  playingView = () => {
    const {choicesList} = this.props

    return (
      <SelectImgDiv>
        {choicesList.map(eachItem => {
          let testId = ''
          if (eachItem.id === 'ROCK') testId = 'rockButton'
          else if (eachItem.id === 'PAPER') testId = 'paperButton'
          else testId = 'scissorsButton'

          return (
            <SelectBtn
              key={eachItem.id}
              data-testid={testId}
              type="button"
              onClick={() => this.onSelectImg(eachItem)}
            >
              <SelectImg src={eachItem.imageUrl} alt={eachItem.id} />
            </SelectBtn>
          )
        })}
      </SelectImgDiv>
    )
  }

  resultView = () => {
    const {userSelectedImgUrl, machineSelectedUrl, result} = this.state
    return (
      <ResultContainer>
        <FlexConatainerRow>
          <ResultImgDiv>
            <Description>YOU</Description>
            <SelectImg src={userSelectedImgUrl} alt="your choice" />
          </ResultImgDiv>
          <ResultImgDiv>
            <Description>OPPONENT</Description>
            <SelectImg src={machineSelectedUrl} alt="opponent choice" />
          </ResultImgDiv>
        </FlexConatainerRow>
        <Description>{result}</Description>
        <PlayButton type="button" onClick={this.onPlayAgain}>
          PLAY AGAIN
        </PlayButton>
      </ResultContainer>
    )
  }

  render() {
    const {score, showResult} = this.state

    return (
      <GameDiv>
        <Header>
          <FlexConatainerColumn>
            <HeadingContent>
              Rock
              <br />
              Paper
              <br />
              Scissors
            </HeadingContent>
          </FlexConatainerColumn>
          <ScoreCard>
            <Heading3>Score</Heading3>
            <Score>{score}</Score>
          </ScoreCard>
        </Header>

        {showResult ? this.resultView() : this.playingView()}

        <Popup modal trigger={<RuleButton type="button">RULES</RuleButton>}>
          {close => (
            <div style={{position: 'relative'}}>
              <CrossBtn type="button" onClick={close}>
                ×
              </CrossBtn>
              <RuleImg
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </div>
          )}
        </Popup>
      </GameDiv>
    )
  }
}

export default GameContainer
