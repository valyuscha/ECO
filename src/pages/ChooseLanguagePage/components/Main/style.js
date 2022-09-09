import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {colors} from '../../../../assets/colors'

export const MainWrapper = styled.div`
  width: 90%;
  margin: 30px auto;
`

export const Title = styled.h2`
  font-weight: 800;
  font-size: 32px;
  line-height: 39px;
  color: ${colors.black};
  margin-bottom: 25px;
  height: 78px;
`

export const LanguageBtn = styled.button`
  height: 94px;
  display: flex;
  width: 100%;
  text-align: left;
  padding: 15px 23px;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 40px;
  border: none;
  box-shadow: 0 4px 7px rgba(147, 210, 131, 0.15);
  border-radius: 10px;
  background: ${p => p.isActive ? colors.green : colors.white};
  color: ${p => p.isActive ? colors.white : colors.black};
  transition: .3s ease-in-out;
`

export const BackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 63px;
  width: 100%;
  border: none;
  background: ${colors.white};
  box-shadow: 0 4px 7px rgba(147, 210, 131, 0.15);
  border-radius: 10px;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
`
