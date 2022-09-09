import styled from 'styled-components'
import {footerRightSpot, responsiveFooterBottomSpot} from '../../../../assets'
import {colors} from '../../../../assets/colors'

export const FooterWrapper = styled.footer`
  background: url(${footerRightSpot}) no-repeat right bottom;
  padding-top: 41px;
  box-shadow: 0 0 25px rgba(147, 210, 131, 0.15);
  border-radius: 50px 50px 0 0;

  @media screen and (max-width: 1200px) {
    background-size: 40% 100%;
  }

  @media screen and (max-width: 950px) {
    background-size: 50% 100%;
  }

  @media screen and (max-width: 600px) {
    background: url(${responsiveFooterBottomSpot}) no-repeat right bottom;
    background-size: 100% 55%;
  }
`

export const Container = styled.div`
  width: 73%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 1300px) {
    width: 80%;
  }

  @media screen and (max-width: 1250px) {
    width: 85%;
  }

  @media screen and (max-width: 1200px) {
    width: 90%;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

export const PageInfoWrapper = styled.div`
  margin-bottom: 41px;
`

export const InfoTitle = styled.h3`
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  color: ${colors.green};
`

export const InfoSubtitle = styled.h4`
  font-weight: 500;
  font-size: 18px;
  color: ${colors.green};
  margin-bottom: 40px;

  @media screen and (max-width: 600px) {
    margin-bottom: 33px;
  }
`

export const Info = styled.p`
  font-size: 24px;
  line-height: 28px;
  max-width: 518px;

  @media screen and (max-width: 1200px) {
    font-size: 20px;
    max-width: 420px;
  }

  @media screen and (max-width: 800px) {
    font-size: 18px;
    max-width: 300px;
  }

  @media screen and (max-width: 600px) {
    line-height: 21px;
  }
`

export const SocialLinksWrapper = styled.div`
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`

export const SocialLinksTitle = styled.h3`
  color: ${colors.white};
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
  
  &:last-of-type {
    margin-top: 40px;
  }

  @media screen and (max-width: 800px) {
    font-size: 26px;
  }
`

export const SocialLink = styled.a`
  margin-right: 20px;

  @media screen and (max-width: 600px) {
    margin-right: 0;
    
    &:last-child {
      margin-left: 40px;
    }
  }
`

export const SocialLinkIcon = styled.img`
  transition: .3s ease-in-out;
  &:hover {
    opacity: .8;
  }
`

export const Copyright = styled.h4`
  font-size: 12px;
  text-align: center;
  font-weight: 400;
  padding-bottom: 8px;

  @media screen and (max-width: 600px) {
    margin-top: 50px;
    color: ${colors.white};
  }
`
