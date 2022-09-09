import {StyledButton} from './styles'

const Button = ({children, btntype, isfontregular, pathTo}) => (
  <StyledButton
    to={pathTo}
    spy={true}
    smooth={true}
    offset={-30}
    duration={500}
    btntype={btntype}
    isfontregular={isfontregular}>
    {children}
  </StyledButton>
)

export default Button
