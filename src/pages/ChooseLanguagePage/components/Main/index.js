import {FormattedMessage} from 'react-intl'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {MainWrapper, Title, LanguageBtn, BackBtn} from './style'
import {setENLanguage, setUALanguage} from '../../../../store'

const Main = () => {
  const dispatch = useDispatch();
  const {language} = useSelector(state => state.language)
  const history = useNavigate()

  return (
    <MainWrapper>
      <Title>
        <FormattedMessage id="language.title"/>
      </Title>
      <LanguageBtn
        isActive={language === 'UA'}
        onClick={() => dispatch(setUALanguage())}>
        Я розмовляю українською
      </LanguageBtn>
      <LanguageBtn
        isActive={language === 'EN'}
        onClick={() => dispatch(setENLanguage())}>
        I speak English
      </LanguageBtn>
      <BackBtn onClick={() => history(-1)}>
        <FormattedMessage id="language.back" />
      </BackBtn>
    </MainWrapper>
  )
}

export default Main
