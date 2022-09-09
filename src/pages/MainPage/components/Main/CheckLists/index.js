import {useSelector} from 'react-redux'
import {FormattedMessage} from 'react-intl'
import Slider from 'react-slick'
import CheckListCard from './CheckListCard'
import {CardsWrapper, CheckListsWrapper, SliderWrapper, Title, SliderItemWrapper} from './styles'

const CheckLists = () => {
  const {language} = useSelector(state => state.language)

  const checkLists = [
    {
      id: 1,
      title: 'checkLists.top.title',
      infoLink: language === 'EN'
        ? 'https://telegra.ph/10-Eco-Applications-06-09'
        : 'https://telegra.ph/10-Eko-Dodatk%D1%96v-06-07',
      message: 'checkLists.top.content'
    },
    {
      id: 2,
      title: 'checkLists.ecoVolunteer.title',
      infoLink: language === 'EN'
        ? 'https://telegra.ph/Eco-volunteer-organizations-of-Ukraine-06-09'
        : 'https://telegra.ph/Eko-volontersk%D1%96-organ%D1%96zac%D1%96i-Ukraini-06-07',
      message: 'checkLists.ecoVolunteer.content'
    },
    {
      id: 3,
      title: 'checkLists.garbage.title',
      infoLink: language === 'EN'
        ? 'https://telegra.ph/Garbage-sorting-stations-06-09'
        : 'https://telegra.ph/Stanc%D1%96i-sortuvannya-sm%D1%96ttya-06-08',
      message: 'checkLists.garbage.content'
    },
    {
      id: 4,
      title: 'checkLists.ecoOnline.title',
      infoLink: language === 'EN'
        ? 'https://telegra.ph/Selection-of-Eco-online-stores-06-09'
        : 'https://telegra.ph/P%D1%96db%D1%96rka-Eko-onlajn-magazin%D1%96v-06-08',
      message: 'checkLists.ecoOnline.content'
    },
    {
      id: 5,
      title: 'checkLists.ecoHabits.title',
      infoLink: language === 'EN'
        ? 'https://telegra.ph/Environmental-habits-06-09'
        : 'https://telegra.ph/Ekolog%D1%96chn%D1%96-zvichki-06-08',
      message: 'checkLists.ecoHabits.content'
    },
    {
      id: 6,
      title: 'checkLists.selection.title',
      infoLink: language === 'EN'
        ? 'https://telegra.ph/Useful-resources-and-opportunities-06-09'
        : 'https://telegra.ph/Korisn%D1%96-resursi-ta-mozhlivost%D1%96-06-08',
      message: 'checkLists.selection.content'
    }
  ]

  const settings = {
    dots: true,
    dotsClass: 'slick-dots dots',
    speed: 1000
  }

  return (
    <CheckListsWrapper name="CheckLists">
      <Title>
        <FormattedMessage id="checkLists.title"/>
      </Title>
      <CardsWrapper>
        {checkLists.map(item => (
          <CheckListCard key={item.id} title={item.title} infoLink={item.infoLink}>
            <FormattedMessage id={item.message}/>
          </CheckListCard>
        ))}
      </CardsWrapper>
      <SliderWrapper>
        <Slider {...settings}>
          {checkLists.map(item => (
            <SliderItemWrapper key={item.id}>
              <CheckListCard title={item.title} infoLink={item.infoLink}>
                <FormattedMessage id={item.message}/>
              </CheckListCard>
            </SliderItemWrapper>
          ))}
        </Slider>
      </SliderWrapper>
    </CheckListsWrapper>
  )
}

export default CheckLists
