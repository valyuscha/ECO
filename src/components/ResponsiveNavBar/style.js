import styled from 'styled-components'
import {smallHeaderTopSpot} from '../../assets'
import {Link as RouteLink} from 'react-router-dom'
import {colors} from '../../assets/colors'

export const ResponsiveNavBarWrapper = styled.div`
  width: 100%;
  padding: 28px 0 45px;
  background: ${p => `url("${smallHeaderTopSpot}") no-repeat left top/cover`};
  background-size: 100% 100%;
  text-align: center;

  @media screen and (min-width: 481px) {
    display: none;
  }
`

export const ChangeLanguage = styled(RouteLink)`
  font-size: 18px;
  color: ${colors.white};
  text-decoration: none;
`

export const Logo = styled.h2`
  color: ${colors.white};
  font-size: 24px;
`
