import {CardWrapper, CardImage, CardTextWrapper, CardText} from './styles'

const MissionCard = ({children, imageUrl}) => (
  <CardWrapper>
    <CardImage alt="" src={imageUrl} />
    <CardTextWrapper>
      <CardText>{children}</CardText>
    </CardTextWrapper>
  </CardWrapper>
)

export default MissionCard
