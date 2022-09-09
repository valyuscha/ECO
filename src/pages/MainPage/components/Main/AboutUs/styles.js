import styled from 'styled-components'
import {colors} from '../../../../../assets/colors'

export const AboutUsWrapper = styled.section`
  width: 90%;
  margin: 0 auto 80px;
`

export const Title = styled.h3`
  font-weight: 600;
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;

  @media screen and (max-width: 481px) {
    font-size: 32px;
  }
`

export const CarouserItemWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

export const SliderWrapper = styled.div`
  position: relative;
  
  .slick-dots li {
    width: auto;
    height: 3px;
    overflow: hidden;
  }
  
  .slick-dots li button {
    opacity: 1;
    width: 60px !important;
    padding: 0;
    background: ${colors.grey};
    margin-right: 10px;
    transition: all 1s ease-in-out;
  }
  
  .slick-dots li.slick-active button {
    opacity: 1;
    width: 90px !important;
    padding: 0;
    background: ${colors.black};
    transition: all 1s ease-in-out;
  }

  //@media screen and (max-width: 900px) {
  //  .slick-dots {
  //    position: absolute;
  //    top: 360px;
  //  }
  //}
`
