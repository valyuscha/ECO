import {FormattedMessage} from 'react-intl'
import {aboutUs} from '../../../../../../assets'
import {
  FirstItemWrapper,
  FirstItemImgWrapper,
  FirstItemImg,
  FirstItemContentWrapper,
  FirstItemContent,
} from './styles'

const FirstItem = () => (
  <FirstItemWrapper>
    <FirstItemImgWrapper>
      <FirstItemImg alt="" src={aboutUs} />
    </FirstItemImgWrapper>
    <FirstItemContentWrapper>
      <FirstItemContent>
        <FormattedMessage id="aboutUs.firstItem.firstContent"/>
      </FirstItemContent>
      <FirstItemContent>
        <FormattedMessage id="aboutUs.firstItem.secondContent"/>
      </FirstItemContent>
      <FirstItemContent>
        <FormattedMessage id="aboutUs.firstItem.thirdContent"/>
      </FirstItemContent>
    </FirstItemContentWrapper>
  </FirstItemWrapper>
)

export default FirstItem
