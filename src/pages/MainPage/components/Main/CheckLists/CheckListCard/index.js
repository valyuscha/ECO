import {FormattedMessage} from 'react-intl'
import {useSelector} from 'react-redux'
import {Button} from '../../../../../../components/UI'
import {CardWrapper, ContentWrapper, TitleWrapper, Title, Content, ReadMoreBtnWrapper} from './styles'

const CheckListCard = ({children, title, infoLink}) => {
  const {language} = useSelector(state => state.language)

  return (
    <CardWrapper language={language}>
      <ContentWrapper>
        <TitleWrapper>
          <Title>
            <FormattedMessage id={title}/>
          </Title>
        </TitleWrapper>
        <Content>{children}</Content>
      </ContentWrapper>
      <ReadMoreBtnWrapper href={infoLink} target="_blank">
        <FormattedMessage id="checkLists.readMore"/>
      </ReadMoreBtnWrapper>
    </CardWrapper>
  )
}

export default CheckListCard
