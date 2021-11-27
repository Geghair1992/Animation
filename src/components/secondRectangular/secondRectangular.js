import React from 'react'
import styled,{keyframes} from 'styled-components'

const Rotation = keyframes`
0%{
   transform: rotate(0deg);
   margin-top:50px;
}
35%{
    transform: rotate(90deg);
    margin-top: -50px;
    margin-left: 150px;
}
70%{
    transform: rotate(0deg);
    margin-top: 50px;
    margin-right: 300px;
}
100%{
    transform: rotate(0deg);
    margin-top: 130px;
    margin-left:190px;
}
`

const StyledSecondRectangular = styled.div`
  width:140px;
  height:40px;
  background-color: #000;
  position: relative;
  top: 167px;
  left: -50px;
  transform: rotate(90deg);
  border: 2px solid #fff;
  animation: ${Rotation} 6s ease infinite;
`
const StyledSecondDiv = styled.div`
  color: #fff;
  font-size: 2.5em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`



const SecondRectangular = () => {
    return (
        <StyledSecondRectangular>
            <StyledSecondDiv>IDEA(2)</StyledSecondDiv>
        </StyledSecondRectangular>
    )
}

export default SecondRectangular;
