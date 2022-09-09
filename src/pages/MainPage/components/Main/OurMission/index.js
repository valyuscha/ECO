import {FormattedMessage} from 'react-intl'
import MissionCard from './MissionCard'
import {ourMissionUncover, ourMissionShow, ourMissionTeach, ourMissionInspire} from '../../../../../assets'
import {CardsWrapper, OurMissionWrapper, Title} from './styles'

const OurMission = () => (
  <OurMissionWrapper name="OurMission">
    <Title>
      <FormattedMessage id="ourMission.title"/>
    </Title>
    <CardsWrapper>
      <MissionCard imageUrl={ourMissionUncover}>
        <FormattedMessage id="ourMission.uncover"/>
      </MissionCard>
      <MissionCard imageUrl={ourMissionShow}>
        <FormattedMessage id="ourMission.show"/>
      </MissionCard>
      <MissionCard imageUrl={ourMissionTeach}>
        <FormattedMessage id="ourMission.teach"/>
      </MissionCard>
      <MissionCard imageUrl={ourMissionInspire}>
        <FormattedMessage id="ourMission.inspire"/>
      </MissionCard>
    </CardsWrapper>
  </OurMissionWrapper>
)

export default OurMission
