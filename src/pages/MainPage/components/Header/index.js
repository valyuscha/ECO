import {FormattedMessage} from 'react-intl'
import NavBar from './NavBar'
import {Button} from '../../../../components/UI'
import {
  CheckTrailerBtnWrapper,
  Container,
  HeaderWrapper,
  MainContent,
  SubTitle,
  Title,
  ResponsiveMainContent,
  ResponsiveTextWrapper,
  ResponsiveBannerButtons
} from './styles'

const Header = () => {
  return (
    <HeaderWrapper>
      <NavBar/>
      <Container>
        <MainContent>
          <Title>ECO INTERACTIVE FILM</Title>
          <SubTitle>
            <FormattedMessage id="header.banner.makeChoice"/>
          </SubTitle>
          <CheckTrailerBtnWrapper>
            <Button btntype="green" pathTo="FilmTrailer" fontSize={18} isfontregular="true">
              <FormattedMessage id="header.banner.checkFilm"/>
            </Button>
          </CheckTrailerBtnWrapper>
        </MainContent>
        <ResponsiveMainContent>
          <ResponsiveTextWrapper>
            <Title>ECO INTERACTIVE FILM</Title>
            <SubTitle>
              <FormattedMessage id="header.banner.makeChoice"/>
            </SubTitle>
          </ResponsiveTextWrapper>
          <ResponsiveBannerButtons>
            <CheckTrailerBtnWrapper>
              <Button btntype="green" pathTo="FilmTrailer" fontSize={18} isfontregular="true">
                <FormattedMessage id="header.banner.checkFilm"/>
              </Button>
            </CheckTrailerBtnWrapper>
            <CheckTrailerBtnWrapper>
              <Button pathTo="Contacts" isfontregular="true">
                <FormattedMessage id="header.banner.contactUs"/>
              </Button>
            </CheckTrailerBtnWrapper>
          </ResponsiveBannerButtons>
        </ResponsiveMainContent>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
