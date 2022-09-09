import {useNavigate} from 'react-router-dom'
import {FormattedMessage} from 'react-intl'
import {
  ResponsiveWatchFilmBtnWrapper,
  Title,
  Trailer,
  TrailerWrapper,
  Video,
  WatchFilmBtnWrapper
} from './styles'

const FilmTrailer = () => {
  const history = useNavigate()

  return (
    <TrailerWrapper name="FilmTrailer">
      <Title>
        <FormattedMessage id="watchFilm.title"/>
      </Title>
      <Trailer>
        <Video src="https://www.youtube.com/embed/fF_uCAan7OA"
               title="YouTube video player" frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen></Video>
      </Trailer>
      <WatchFilmBtnWrapper onClick={() => history('/film/1')}>
        <FormattedMessage id="watchFilm.button"/>
      </WatchFilmBtnWrapper>
      <ResponsiveWatchFilmBtnWrapper onClick={() => history('/film/1')}>
        <FormattedMessage id="watchFilm.button"/>
      </ResponsiveWatchFilmBtnWrapper>
    </TrailerWrapper>
  )
}

export default FilmTrailer
