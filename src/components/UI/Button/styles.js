import styled from 'styled-components'
import {Link as ScrollLink} from 'react-scroll'
import {colors} from '../../../assets/colors'

export const StyledButton = styled(ScrollLink)`
  width: 100%;
  display: inline-block;
  padding: 12px 10px;
  text-align: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: ${p => p.isfontregular ? 400 : 600};
  background: ${p => p.btntype === 'green' ? colors.green : colors.white};
  box-shadow: ${p => p.btntype === 'green' ? '0px 2px 15px rgba(147, 210, 131, 0.5)' : '0px 2px' +
          ' 15px rgba(147, 210, 131, 0.15)'};
  color: ${p => p.btntype === 'green' ? colors.white : colors.green};
  text-decoration: underline rgba(${p => p.btntype === 'green' ? '255, 255, 255, 0' : '147, 210,' +
          ' 131, 0'});
  &:hover {
    text-decoration-color: rgba(${p => p.btntype === 'green' ? '255, 255, 255, 1' : '147, 210,' +
            ' 131, 1'});
  }
  transition: .3s ease-in-out;
`
