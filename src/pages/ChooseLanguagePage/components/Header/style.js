import styled from 'styled-components'
import {colors} from '../../../../assets/colors'
import {smallHeaderTopSpot} from '../../../../assets'

export const HeaderWrapper = styled.div`
  background: url("${smallHeaderTopSpot}") top left/cover no-repeat;
  background-size: 100% 100%;
  padding: 28px 0 40px;
  text-align: center;
`

export const Logo = styled.h1`
  font-weight: 800;
  font-size: 24px;
  color: ${colors.white};
`
