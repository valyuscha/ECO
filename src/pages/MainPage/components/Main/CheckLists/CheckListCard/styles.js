import styled from 'styled-components'
import {colors} from '../../../../../../assets/colors'

export const CardWrapper = styled.div`
  padding: 24px 36px;
  min-width: 320px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  margin-right: 51px;
  background: ${colors.white};
  
  &:last-of-type {
    margin-right: 20px; 
  }
  
  @media screen and (max-width: 480px) {
    height: 497.6px;
    width: 90%;
    max-width: 320px;
    margin: 5px 0;

    &:last-of-type {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 360px) {
    min-width: 90%;
    height: 525.6px;
  }
`

export const ContentWrapper = styled.div`
  margin-bottom: 10px;
`

export const TitleWrapper = styled.div`
  height: 99px;
  margin-bottom: 20px;
  position: relative;
`

export const Title = styled.h3`
  font-weight: 600;
  font-size: 28px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: fit-content;
  text-align: center;

  @media screen and (max-width: 360px) {
    font-size: 25px;
  }
`

export const Content = styled.p`
  color: ${colors.grey};
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  margin-bottom: 15px;
`

export const ReadMoreBtnWrapper = styled.a`
  font-size: 24px;
  width: 100%;
  padding: 12px 10px;
  text-align: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: 600;
  color: ${colors.white};
  background: ${colors.green};
  box-shadow: 0 2px 15px rgba(147, 210, 131, 0.5);
  text-decoration: underline rgba(255, 255, 255, 0);
  &:hover {
    text-decoration-color: rgba(255, 255, 255, 1);
  }
  transition: .3s ease-in-out;
`
