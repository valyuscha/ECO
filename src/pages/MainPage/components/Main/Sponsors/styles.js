import styled from 'styled-components'
import {colors} from '../../../../../assets/colors'

export const SponsorsBlockWrapper = styled.section`
  width: 90%;
  margin: 0 auto 80px;
`

export const SponsorsWrapper = styled.div`
  background: #FAFAFA;
  border-radius: 25px;
  padding: 0 15px 25px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SponsorsContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`

export const SponsorLogo = styled.img`
  margin: 0 20px;
  padding-top: 25px;
  
  @media screen and (max-width: 679px) {
    padding-top: 80px;

    &:nth-child(1) {
      padding-top: 25px;
    }
  }
`

export const SponsorsInfo = styled.p`
  max-width: 785px;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: ${colors.grey};
  margin: 0 auto;
`
