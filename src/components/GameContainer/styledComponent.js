import styled from 'styled-components'

export const GameDiv = styled.div`
  height: 100vh;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: #ffffff 4px solid;
  border-radius: 12px;
  width: 50%;
  padding: 14px;
`

export const FlexConatainerColumn = styled.div``

export const FlexConatainerRow = styled.div`
  width: 400px;
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
`

export const TextContent = styled.p`
  font-family: Bree Serif;
  color: #ffffff;
  margin: 0px;
  font-size: 26px;
`
export const HeadingContent = styled.h1`
  font-family: Bree Serif;
  color: #ffffff;
  margin: 0px;
  font-size: 26px;
`

export const ScoreCard = styled.div`
  font-family: Bree Serif;
  color: #223a5f;
  height: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  width: 120px;
  text-align: center;
`

export const Heading3 = styled.p`
  font-size: 20px;
  margin: 0px;
`

export const Score = styled.p`
  font-size: 52px;
  margin: 0px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const SelectImgDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: space-around;
  width: 400px;
`

export const SelectImg = styled.img`
  width: 170px;
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResultImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Description = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
`
export const PlayButton = styled.button`
  font-family: Bree Serif;
  color: #223a5f;
  background-color: #ffffff;
  border-radius: 12px;
  width: 120px;
  padding: 10px;
  border: none;
`
export const RuleButton = styled(PlayButton)`
  margin-left: auto;
  margin-top: auto;
`
export const RuleImg = styled.img`
  width: 100%;
`
export const CrossBtn = styled.button`
  margin-left: 96%;
`
export const SelectBtn = styled.button`
  border: 0px;
  background-color: transparent;
`
