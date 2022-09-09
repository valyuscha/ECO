import {FormattedMessage} from 'react-intl'
import {instagram, facebook} from '../../../../assets'
import {
  FooterWrapper,
  Container,
  PageInfoWrapper,
  InfoTitle,
  InfoSubtitle,
  Info,
  SocialLinksWrapper,
  SocialLinksTitle,
  SocialLink,
  SocialLinkIcon,
  Copyright
} from './style'

const Footer = () => (
  <FooterWrapper name="Contacts">
    <Container>
      <PageInfoWrapper>
        <InfoTitle>ECO INTERACTIVE FILM</InfoTitle>
        <InfoSubtitle>
          <FormattedMessage id="footer.subtitle"/>
        </InfoSubtitle>
        <Info>
          <FormattedMessage id="footer.content"/>
        </Info>
      </PageInfoWrapper>
      <SocialLinksWrapper>
        <SocialLinksTitle>
          <FormattedMessage id="footer.socialMedia"/>
        </SocialLinksTitle>
        <SocialLink href="https://instagram.com/eco_interactive_film?igshid=YmMyMTA2M2Y=" target="_blank">
          <SocialLinkIcon src={instagram} />
        </SocialLink>
        <SocialLinksTitle>UPSHIFT</SocialLinksTitle>
        <SocialLink href="https://instagram.com/upshiftukraine?igshid=YmMyMTA2M2Y=" target="_blank">
          <SocialLinkIcon src={instagram} />
        </SocialLink>
        <SocialLink href="https://www.facebook.com/UPSHIFTUkraine" target="_blank">
          <SocialLinkIcon src={facebook} />
        </SocialLink>
      </SocialLinksWrapper>
    </Container>
    <Copyright>
      Copyright © 2022 ECO INTERACTIVE FILM. All rights reserved.
    </Copyright>
  </FooterWrapper>
)

export default Footer
