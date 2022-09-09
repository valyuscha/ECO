import {FormattedMessage} from 'react-intl'
import {instagram} from '../../../../assets'
import {FooterWrapper, Title, SocialLink, SocialLinkIcon} from './style'

const Footer = () => (
  <FooterWrapper>
    <Title>
      <FormattedMessage id="language.socials" />
    </Title>
    <SocialLink href="https://instagram.com/eco_interactive_film?igshid=YmMyMTA2M2Y=" target="_blank">
      <SocialLinkIcon src={instagram} />
    </SocialLink>
  </FooterWrapper>
)

export default Footer
