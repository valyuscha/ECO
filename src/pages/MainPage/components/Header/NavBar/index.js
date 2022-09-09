import {useDispatch, useSelector} from 'react-redux'
import {FormattedMessage} from 'react-intl'
import {ResponsiveNavBar} from '../../../../../components'
import {setENLanguage, setUALanguage} from '../../../../../store'
import {
  CheckLanguageWrapper,
  Language,
  Link,
  LinkWrapper,
  Logo,
  NavBarWrapper,
  PageLinksList,
  ResponsivePageLinksList,
  TopPartWrapper
} from './styles'


const NavBar = () => {
  const dispatch = useDispatch();
  const {language} = useSelector(state => state.language)

  const pageLinksList = [
    {
      id: 1,
      to: 'OurMission',
      title: 'header.navbar.ourMission'
    },
    {
      id: 2,
      to: 'CheckLists',
      title: 'header.navbar.checkLists'
    },
    {
      id: 3,
      to: 'AboutUs',
      title: 'header.navbar.aboutUs'
    },
    {
      id: 4,
      to: 'Contacts',
      title: 'header.navbar.contacts'
    }
  ]

  return (
    <>
      <NavBarWrapper>
        <TopPartWrapper>
          <Logo>ECO INTERACTIVE FILM</Logo>
          <PageLinksList>
            {pageLinksList.map(({id, to, title}) => {
              return (
                <LinkWrapper key={id}>
                  <Link
                    to={to}
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={500}>
                    <FormattedMessage id={title}/>
                  </Link>
                </LinkWrapper>
              )
            })
            }
          </PageLinksList>
          <CheckLanguageWrapper>
            <Language
              active={language === 'EN'}
              onClick={() => dispatch(setENLanguage())}>EN</Language>
            <Language
              active={language === 'UA'}
              onClick={() => dispatch(setUALanguage())}>UA</Language>
          </CheckLanguageWrapper>
        </TopPartWrapper>
        <ResponsivePageLinksList>
          {pageLinksList.map(({id, to, title}) => {
            return (
              <LinkWrapper key={id}>
                <Link
                  to={to}
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}>
                  <FormattedMessage id={title}/>
                </Link>
              </LinkWrapper>
            )
          })
          }
        </ResponsivePageLinksList>
      </NavBarWrapper>
      <ResponsiveNavBar />
    </>
  )
}

export default NavBar
