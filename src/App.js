import Favicon from "react-favicon"
import {useSelector} from 'react-redux'
import {IntlProvider} from 'react-intl'
import {Routes, Route} from 'react-router-dom'
import {ChooseLanguagePage, FilmPage, MainPage} from './pages'
import flatten from 'flat'
import {en, ua} from './I18NLocales'
import {favIcon} from './assets'
import './fonts.css'

const local = navigator.language
let lang

function App() {
  const {language} = useSelector(state => state.language)

  if (language === 'EN') {
    lang = en;
  } else if (language === 'UA') {
    lang = ua;
  } else {
    lang = en;
  }

  return (
    <>
      <Favicon url={favIcon} />
      <IntlProvider locale={local} messages={flatten(lang)}>
        <Routes>
          <Route path="/film/:id" element={<FilmPage />} />
          <Route path="/language" element={<ChooseLanguagePage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </IntlProvider>
    </>
  )
}

export default App
