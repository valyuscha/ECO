import styled from 'styled-components'
import {
  headerLeftSpot,
  headerRightSpotWithFish,
  smallHeaderSpotFish,
  mediumHeaderFishSpot
} from '../../../../assets'

export const HeaderWrapper = styled.header`
  height: 100vh;
  background: ${p => `url("${headerLeftSpot}") no-repeat left top, url("${headerRightSpotWithFish}") no-repeat right top`};
  display: flex;
  align-content: center;
  justify-content: center;

  @media screen and (min-width: 1650px) {
    background-size: 25.5%, 52%;
  }
  
  @media screen and (max-width: 1405px) {
    background-size: 25.5%, 52%;
  }
  
  @media screen and (max-width: 1050px) {
    background-size: 0, 65%;
  }

  @media screen and (max-width: 890px) {
    background: ${p => `url("${mediumHeaderFishSpot}") no-repeat right top`};
    background-size: 60%;
  }

  @media screen and (max-width: 732px) {
    background-size: 60% 80%;
  }

  @media screen and (max-width: 600px) {
    background-size: 60% 80%;
  }

  @media screen and (max-width: 481px) {
    background: ${p => `url("${smallHeaderSpotFish}") no-repeat left top 100%`};
    background-size: 100% 75%;
    flex-direction: column;
    justify-content: space-between;
  }

  @media screen and (max-width: 413px) {
    background: ${p => `url("${smallHeaderSpotFish}") no-repeat left top 127%`};
    background-size: 100% 75%;
  }
`

export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1050px) {
    width: 93%;
  }
  
  @media screen and (max-width: 481px) {
    height: 100%;
    width: 100%;
    justify-content: center;
  }
`

export const MainContent = styled.div`
  max-width: 55%;

  @media screen and (max-width: 566px) {
    max-width: 93%;
  }
  
  @media screen and (max-width: 481px) {
    display: none;
  }
`

export const Title = styled.h1`
  font-weight: 800;
  font-size: 64px;
  line-height: 78px;

  @media screen and (max-width: 1203px) {
    font-size: 45px;
    line-height: 60px;
  }

  @media screen and (max-width: 732px) {
    font-size: 35px;
    line-height: 50px; 
  }

  @media screen and (max-width: 346px) {
    font-size: 32px;
  }
`

export const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 36px;

  @media screen and (max-width: 1203px) {
    font-size: 28px;
  }

  @media screen and (max-width: 732px) {
    font-size: 22px;
  }
`

export const CheckTrailerBtnWrapper = styled.div`
  margin-top: 20px;
  display: inline-block;
  min-width: 150px;
  font-size: 18px;

  @media screen and (max-width: 375px) {
    min-width: fit-content;
  }
`

export const ResponsiveMainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 90%;
  
  @media screen and (min-width: 481px) {
    display: none;
  }
`

export const ResponsiveTextWrapper = styled.div`
  padding-top: 35px;
`

export const ResponsiveBannerButtons = styled.div`
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
`
