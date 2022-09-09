import {FormattedMessage} from 'react-intl'
import {ResponsiveNavBarWrapper, ChangeLanguage, Logo} from './style'

const ResponsiveNavBar = () => (
  <ResponsiveNavBarWrapper>
    <Logo>ECO INTERACTIVE FILM</Logo>
    <ChangeLanguage to="/language">
      <FormattedMessage id="header.navbar.chooseLanguage"/>
    </ChangeLanguage>
  </ResponsiveNavBarWrapper>
)

export default ResponsiveNavBar
