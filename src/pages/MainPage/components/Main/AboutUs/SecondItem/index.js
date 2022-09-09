import {FormattedMessage} from 'react-intl'
import {aboutUs2} from '../../../../../../assets'
import {
  SecondItemWrapper,
  SecondItemImgWrapper,
  SecondItemImg,
  SecondItemBlockWrapper,
  SecondItemContentTitle,
  SecondItemContentSubtitle,
  SecondItemContentWrapper,
  SecondItemContent
} from './styles'

const SecondItem = () => (
  <SecondItemWrapper>
    <SecondItemImgWrapper>
      <SecondItemImg alt="" src={aboutUs2} />
    </SecondItemImgWrapper>
    <SecondItemBlockWrapper>
      <SecondItemContentTitle>
        <FormattedMessage id="aboutUs.secondItem.title"/>
      </SecondItemContentTitle>
      <SecondItemContentSubtitle>CO Founder</SecondItemContentSubtitle>
      <SecondItemContentWrapper>
        <SecondItemContent>
          <FormattedMessage id="aboutUs.secondItem.content"/>
        </SecondItemContent>
      </SecondItemContentWrapper>
    </SecondItemBlockWrapper>
  </SecondItemWrapper>
)

export default SecondItem
