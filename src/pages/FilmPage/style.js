import styled from 'styled-components'
import {colors} from '../../assets/colors'

export const FilmPageWrapper = styled.div`
  width: 80%;
  margin: 50px auto 60px;

  @media screen and (max-width: 481px) {
    width: 90%;
  }
`

export const BackToMainBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 38px;
  
  @media screen and (max-width: 481px) {
    display: none;
  }
`

export const BackToMainIcon = styled.img``

export const BackToMainBtnText = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: ${colors.green};
  margin-left: 10px;
`

export const FilmWrapper = styled.div`
  width: 90%;
  margin: 0 auto 20px;

  @media screen and (max-width: 1300px) {
    width: 100%;
  }

  @media screen and (max-width: 481px) {
    margin-bottom: 41px;
  }
`

export const Film = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 0;
  height: 0;
`

export const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 25px;
`

export const BtnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;

  @media screen and (max-width: 1300px) {
    width: 100%;
  }

  @media screen and (max-width: 481px) {
    display: none;
  }
`

export const BackBtnWrapper = styled.div`
  width: 19%;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`

export const WhiteBtn = styled.button`
  width: 100%;
  display: inline-block;
  min-width: 180px;
  font-size: 20px;
  padding: 12px 10px;
  text-align: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: 600;
  background: ${colors.white};
  box-shadow: 0 2px 15px rgba(147, 210, 131, 0.15);
  color: ${colors.green};
  text-decoration: underline rgba(147, 210, 131, 0);
  &:hover {
    text-decoration-color: rgba(147, 210, 131, 1);
  }
  transition: .3s ease-in-out;
`

export const ChoiceBtnWrapper = styled.div`
  width: 39%;

  @media screen and (max-width: 1200px) {
    width: 49%;
  }
`

export const GreenBtn = styled.button`
  width: 100%;
  height: 100%;
  font-size: 20px;
  display: inline-block;
  padding: 12px 10px;
  text-align: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: 600;
  background: ${colors.green};
  box-shadow: 0 2px 15px rgba(147, 210, 131, 0.5);
  color: ${colors.white};
  text-decoration: underline rgba(255, 255, 255, 0);
  &:hover {
    text-decoration-color: rgba(255, 255, 255, 1);
  }
  transition: .3s ease-in-out;
`

export const ResponsiveBtnsWrapper = styled.div``

export const ResponsiveChoiceBtnWrapper = styled.div`
  height: 121px;
  margin-bottom: 30px;
  
  @media screen and (min-width: 481px) {
    display: none;
  }
`

export const ResponsiveBackToMainBtn = styled.div`
  @media screen and (min-width: 481px) {
    display: none;
  }
`;
