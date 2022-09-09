import styled from 'styled-components'

export const OurMissionWrapper = styled.section`
  width: 70%;
  margin: 0 auto 80px;

  @media screen and (max-width: 1400px) {
    width: 80%;
  }

  @media screen and (max-width: 1215px) {
    width: 90%;
  }

  @media screen and (max-width: 1085px) {
    width: 95%;
  }
  
  @media screen and (max-width: 481px) {
    margin-top: 60px;
  }
`

export const Title = styled.h2`
  font-weight: 600;
  font-size: 36px;
  text-align: center;
  margin-bottom: 18px;

  @media screen and (max-width: 481px) {
    font-size: 32px;
  }
`

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`
