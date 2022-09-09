import styled from 'styled-components'
import {colors} from '../../../../assets/colors'
import {responsiveFooterBottomSpot} from '../../../../assets'

export const FooterWrapper = styled.div`
  background: url(${responsiveFooterBottomSpot}) no-repeat right bottom;
  background-size: 100% 100%;
  padding: 40px 0 50px;
  text-align: center;
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 32px;
  color: ${colors.white};
  margin-bottom: 20px;
`

export const SocialLink = styled.a``

export const SocialLinkIcon = styled.img``
