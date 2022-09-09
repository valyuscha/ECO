import {FormattedMessage} from 'react-intl'
import {useNavigate} from 'react-router-dom'
import {ResponsiveNavBar} from '../../components'
import {backArrow} from '../../assets'
import {
  FilmPageWrapper,
  BackToMainBtn,
  BackToMainIcon,
  BackToMainBtnText,
  FilmWrapper,
  Film,
  Video,
  BtnsWrapper,
  BackBtnWrapper,
  WhiteBtn,
  ChoiceBtnWrapper,
  GreenBtn,
  ResponsiveBtnsWrapper,
  ResponsiveChoiceBtnWrapper,
  ResponsiveBackToMainBtn
} from './style'

const FilmPage = () => {
  const history = useNavigate()

  return (
    <>
      <ResponsiveNavBar />
      <FilmPageWrapper>
        <BackToMainBtn onClick={() => history('/')}>
          <BackToMainIcon src={backArrow} />
          <BackToMainBtnText>
            <FormattedMessage id="film.backToMain" />
          </BackToMainBtnText>
        </BackToMainBtn>
        <FilmWrapper>
          <Film>
            <Video src="https://www.youtube.com/embed/fF_uCAan7OA"
                   title="YouTube video player" frameBorder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen></Video>
          </Film>
        </FilmWrapper>
        <BtnsWrapper>
          <BackBtnWrapper>
            <WhiteBtn onClick={() => history(-1)}>
              <FormattedMessage id="film.back" />
            </WhiteBtn>
          </BackBtnWrapper>
          <ChoiceBtnWrapper>
            <GreenBtn>
              <FormattedMessage id="film.choose" /> 1
            </GreenBtn>
          </ChoiceBtnWrapper>
          <ChoiceBtnWrapper>
            <WhiteBtn>
              <FormattedMessage id="film.choose" /> 2
            </WhiteBtn>
          </ChoiceBtnWrapper>
        </BtnsWrapper>
        <ResponsiveBtnsWrapper>
          <ResponsiveChoiceBtnWrapper>
            <GreenBtn>
              <FormattedMessage id="film.choose" /> 1
            </GreenBtn>
          </ResponsiveChoiceBtnWrapper>
          <ResponsiveChoiceBtnWrapper>
            <GreenBtn>
              <FormattedMessage id="film.choose" /> 2
            </GreenBtn>
          </ResponsiveChoiceBtnWrapper>
          <ResponsiveBackToMainBtn>
            <WhiteBtn onClick={() => history('/')}>
              <FormattedMessage id="film.backToMain" />
            </WhiteBtn>
          </ResponsiveBackToMainBtn>
        </ResponsiveBtnsWrapper>
      </FilmPageWrapper>
    </>
  )
}

export default FilmPage
