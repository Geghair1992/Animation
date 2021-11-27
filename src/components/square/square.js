import React from 'react'
import styled,{keyframes} from 'styled-components'
import FirstRectangular from '../firstRectangular/firstRectangular'
import SecondRectangular from '../secondRectangular/secondRectangular'
import ThirdRectangular from '../thirdRectangular/thirdRectangular'
import FourthRectangular from '../fourthRectangular/fourthRectangular'
import FifthRectangular from '../fifthRectangular/fifthRectangular'
import SixthRectangular from '../sixthRectangular/sixthRectangular'
import SeventhRectangular from '../seventhRectangular/seventhRectangular'
import EighthRectangular from '../eighthRectangular/eighthregtangular'
import NinthRectangular from '../ninthRectangular/ninthRectangular'
import TenthRectangular from '../tenthRectangular/tenthRectangular'


const Rotation = keyframes`
0%{
   transform: rotate(0deg);
}
100%{
    transform: rotate(360deg);
} 
`
const StyledSection = styled.body`
  width: 700px;
  height: 700px;
  position: relative;
  top: 0px;
  left: 340px;
  border: 5px dotted #fff;
`

const StyledSquare = styled.div`
  width:430px;
  height:430px;
  background-color: #000;
  position: absolute;
  /* left: 50%;
  top: 50%; */
  left: 15%;
  top: 23%;
  transform: translate(-50%,-50%);
  border: 2px solid #fff;
  animation: ${Rotation} 6s ease infinite;
`

const Square = () => {
    return (   
        <StyledSection>
          <StyledSquare>
            <FirstRectangular/>
            <SecondRectangular/>
            <ThirdRectangular/>
            <FourthRectangular/>
            <FifthRectangular/>
             {/*<SixthRectangular/>
            <SeventhRectangular/>
            <EighthRectangular/>
            <NinthRectangular/>
            <TenthRectangular/> */}
          </StyledSquare>     
        </StyledSection>   
    )
}

export default Square;
