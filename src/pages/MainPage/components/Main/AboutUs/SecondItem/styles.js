import styled from 'styled-components'
import {quotes} from '../../../../../../assets'

export const SecondItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`

export const SecondItemImgWrapper = styled.div`
  @media screen and (max-width: 900px) {
    width: 35%;
  }

  @media screen and (max-width: 800px) {
    width: 44%;
  }

  @media screen and (max-width: 481px) {
    width: 48%;
  }
`

export const SecondItemImg = styled.img`
  width: 100%;
`

export const SecondItemBlockWrapper = styled.div`
  margin-left: 73px;

  @media screen and (max-width: 900px) {
    margin-left: 0;
  }
`

export const SecondItemContentTitle = styled.h4`
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;

  @media screen and (max-width: 900px) {
    margin-top: 30px;
  }

  @media screen and (max-width: 481px) {
    font-size: 28px;
    max-width: 251px;
    margin: 40px auto 10px;
    line-height: 34px;
  }
`

export const SecondItemContentSubtitle = styled.h5`
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 12px;

  @media screen and (max-width: 481px) {
    font-size: 24px;
    max-width: 251px;
    margin: 0 auto 20px;
  }
`

export const SecondItemContentWrapper = styled.div`
  max-width: 340px;

  @media screen and (max-width: 481px) {
    max-width: 100%;
  }
`

export const SecondItemContent = styled.p`
  font-size: 28px;
  line-height: 32px;
  position: relative;
  display: inline;
  
  &::after {
    content: url(${quotes});
    position: absolute;
    bottom: -65px;
    right: -105px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 24px;
    line-height: 28px;
  }

  @media screen and (max-width: 910px) {
    &::after {
      content: "";
    }
  }

  @media screen and (max-width: 481px) {
    font-size: 18px;
    line-height: 21px;
  }
`
