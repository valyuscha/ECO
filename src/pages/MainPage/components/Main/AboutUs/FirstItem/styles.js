import styled from 'styled-components'
import {quotes} from '../../../../../../assets'

export const FirstItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }

  @media screen and (max-width: 481px) {
    margin-bottom: 20px;
  }
`

export const FirstItemImgWrapper = styled.div`
  width: 50%;

  @media screen and (max-width: 1200px) {
    width: 60%;
  }

  @media screen and (max-width: 900px) {
    width: 70%;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }

  @media screen and (max-width: 481px) {
    width: 100%;
  }
`

export const FirstItemImg = styled.img`
  width: 100%;
`

export const FirstItemContentWrapper = styled.div`
  width: 50%;
  
  @media screen and (max-width: 1200px) {
    width: 40%;
  }

  @media screen and (max-width: 900px) {
    width: 90%;
    margin-top: 30px;
  }
`

export const FirstItemContent = styled.p`
  font-size: 28px;
  line-height: 32px;
  margin-bottom: 20px;
  
  &:last-of-type {
    position: relative;
    margin-bottom: 0;
    display: inline;

    &::after {
      content: url(${quotes});
      position: absolute;
      right: -35px;
      bottom: -53px;
      z-index: -1;
    }
  }

  @media screen and (max-width: 1200px) {
    font-size: 24px;
    line-height: 28px;
  }

  @media screen and (max-width: 910px) {
    &:last-of-type {
      &::after {
        content: "";
      }
    }
  }

  @media screen and (max-width: 481px) {
    font-size: 18px;
    line-height: 21px;
  }
`
