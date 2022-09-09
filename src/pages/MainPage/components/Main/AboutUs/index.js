import {FormattedMessage} from 'react-intl'
import Slider from 'react-slick'
import FirstItem from './FirstItem'
import SecondItem from './SecondItem'
import {
  AboutUsWrapper,
  Title,
  CarouserItemWrapper,
  SliderWrapper
} from './styles'

const AboutUs = () => {
  const settings = {
    dots: true,
    dotsClass: 'slick-dots dots',
    speed: 1000
  }

  return (
    <AboutUsWrapper name="AboutUs">
      <Title>
        <FormattedMessage id="aboutUs.title"/>
      </Title>
      <SliderWrapper>
        <Slider {...settings}>
          <CarouserItemWrapper>
            <FirstItem />
          </CarouserItemWrapper>
          <CarouserItemWrapper>
            <SecondItem />
          </CarouserItemWrapper>
        </Slider>
      </SliderWrapper>
    </AboutUsWrapper>
  )
}

export default AboutUs
