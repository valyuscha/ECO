import styled from 'styled-components'
import {colors} from '../../../../../assets/colors'
import {checkListsLeftSpot} from '../../../../../assets'

export const CheckListsWrapper = styled.div`
  margin-bottom: 80px;
  padding-top: 80px;
  position: relative;

   &::before {
     content: url(${checkListsLeftSpot});
     position: absolute;
     top: 60px;
     left: 8%;
     z-index: -1;
   }
  
  @media screen and (max-width: 1100px) {
    &::before {
      left: 6%;
    }
  }

  @media screen and (max-width: 770px) {
    &::before {
      left: 4%;
    }
  }

  @media screen and (max-width: 740px) {
    &::before {
      content: "";
    }
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  margin-bottom: 28px;

  @media screen and (max-width: 481px) {
    font-size: 32px;
  }
`;

export const CardsWrapper = styled.div`
  max-width: 100vw;
  display: flex;
  padding: 10px 10px 10px 12.5%;
  overflow: auto;
  margin-bottom: 80px;

  ::-webkit-scrollbar {
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .4);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, .1);
    margin: 0 300px;
    border-radius: 10px;
  }

  @media screen and (max-width: 481px) {
    display: none;
  }
`;


export const SliderWrapper = styled.div`
  .slick-dots {
    list-style: none;
  }

  .slick-dots li {
    width: 10px;
    height: 10px;
  }

  .slick-dots li.slick-active {
    width: 16px;
    height: 16px;
  }

  .slick-dots li button {
    opacity: 1;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    padding: 0;
    background: rgba(127, 185, 112, 0.5);
    transition: all .3s ease-in-out;
  }

  .slick-dots li button:before {
    content: "";
    width: 10px;
    height: 10px;
  }

  .slick-dots li.slick-active button {
    opacity: 1;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    padding: 0;
    background: ${colors.green};
    transition: all .3s ease-in-out;
  }
  
  @media screen and (min-width: 481px) {
    display: none;
  }
`

export const SliderItemWrapper = styled.div`
  display: flex !important;
  justify-content: center;
`
