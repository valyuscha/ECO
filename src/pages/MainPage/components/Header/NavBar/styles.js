import styled from 'styled-components'
import {Link as ScrollLink} from 'react-scroll'
import {colors} from '../../../../../assets/colors'

export const NavBarWrapper = styled.nav`
  position: absolute;
  width: 93%;
  margin: 0 auto;
  padding-top: 28px;

  @media screen and (max-width: 481px) {
    display: none;
  }
`

export const TopPartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.h1`
  font-weight: 800;
  font-size: 24px;
  color: ${colors.white};
  margin: 0;
  
  @media screen and (max-width: 1203px) {
    font-size: 20px;
  }

  @media screen and (max-width: 1050px) {
    color: ${colors.black};
  }
`

export const PageLinksList = styled.ul`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  @media screen and (max-width: 890px) {
    position: static;
    transform: translate(0, 0);
  }

  @media screen and (max-width: 750px) {
    display: none;
  }
`

export const LinkWrapper = styled.li`
  list-style: none;
  margin: 0 20px;
  font-size: 22px;
  
  @media screen and (max-width: 1203px) {
    font-size: 18px;
  }

  @media screen and (max-width: 1055px) {
    margin: 0 10px;
  }

  @media screen and (max-width: 750px) {
    &:first-of-type {
      margin: 0 10px 0 0;
    }
  }
`

export const Link = styled(ScrollLink)`
  color: ${colors.grey};
  cursor: pointer;
  transition: .2s ease-in-out;
  
  &:hover,
  &:focus {
    color: ${colors.black};
    border-bottom: 2px solid rgba(57, 57, 57, 1);
  }

  @media screen and (max-width: 1050px) {
    color: ${colors.black};
  }
`

export const CheckLanguageWrapper = styled.div`
  width: 62px;
  border: 1px solid #FFFFFF;
  border-radius: 25px;
  padding: 2px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 481px) {
    display: none;
  }
`

export const Language = styled.span`
  display: inline-flex;
  font-size: 14px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${p => p.active ? colors.green : colors.white};
  background: ${p => p.active ? colors.white: colors.green};
  transition: all .3s ease-in-out;
`

export const ResponsivePageLinksList = styled.div`
  display: flex;
  margin-top: 15px;
  
  @media screen and (min-width: 750px) {
    display: none;
  }

  @media screen and (max-width: 481px) {
    display: none;
  }
`
