import {FormattedMessage} from 'react-intl'
import {ingBankLogo, profDevLogo, unicefLogo, upshiftLogo} from '../../../../../assets'
import {
  SponsorLogo,
  SponsorsBlockWrapper,
  SponsorsContainer,
  SponsorsInfo,
  SponsorsWrapper
} from './styles'

const Sponsors = () => (
  <SponsorsBlockWrapper>
    <SponsorsWrapper>
      <SponsorsContainer>
        <SponsorLogo alt="" src={ingBankLogo}/>
        <SponsorLogo alt="" src={unicefLogo}/>
        <SponsorLogo alt="" src={profDevLogo}/>
        <SponsorLogo alt="" src={upshiftLogo}/>
      </SponsorsContainer>
    </SponsorsWrapper>
    <SponsorsInfo>
      <FormattedMessage id="sponsorsContent"/>
    </SponsorsInfo>
  </SponsorsBlockWrapper>
)

export default Sponsors
