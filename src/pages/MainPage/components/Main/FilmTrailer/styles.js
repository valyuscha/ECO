import styled from 'styled-components'
import {trailerRightSpot} from '../../../../../assets'
import {colors} from '../../../../../assets/colors'

export const TrailerWrapper = styled.section`
  width: 75%;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width: 1000px) {
    width: 80%;
  }

  @media screen and (max-width: 800px) {
    width: 85%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`

export const Title = styled.h2`
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 31px;

  @media screen and (max-width: 481px) {
    font-size: 32px;
  }
`

export const Trailer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 0;
  height: 0;

  &::after {
    content: url(${trailerRightSpot});
    position: absolute;
    bottom: -70px;
    right: -100px;
    z-index: -1;
  }

  @media screen and (max-width: 481px) {
    &::after {
      content: "";
    }
  }
`

export const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 25px;
`

export const WatchFilmBtnWrapper = styled.div`
  display: inline-block;
  min-width: 180px;
  margin-top: 20px;
  font-size: 24px;
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

  @media screen and (max-width: 481px) {
    display: none;
  }
`

export const ResponsiveWatchFilmBtnWrapper = styled.div`
  margin-top: 40px;
  font-size: 18px;
  width: 100%;
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
  
  @media screen and (min-width: 481px) {
    display: none;
  }
`
