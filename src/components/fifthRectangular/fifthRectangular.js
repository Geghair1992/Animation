import React from 'react'
import styled,{keyframes} from 'styled-components'

const Rotation = keyframes`
0%{
   transform: rotate(90deg);
   margin-top: -10px;
   margin-left: -35px;
}
35%{
    transform: rotate(0deg);
    margin-top: -40px;
    margin-left: -40px;
}
70%{
    transform: rotate(0deg);
    margin-top: -70px;
    margin-left: -80px; 
}   
100%{
    transform: rotate(45deg);
    margin-top: -110px;
    margin-left: -50px;
}
`

const StyledFifthRectangular = styled.div`
  width:140px;
  height:40px;
  background-color: #000;
  position: relative;
  top: 100px;
  left: 43px;
  transform: rotate(0deg);
  border: 2px solid #2F2FF2;
  z-index: 10;
  animation: ${Rotation} 6s ease infinite;
`
const StyledFifth = styled.div`
  color: #2F2FF2;
  font-size: 2em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`



const FifthRectangular = () => {
    return (
        <StyledFifthRectangular>
            <StyledFifth>WINING</StyledFifth>
        </StyledFifthRectangular>
    )
}

export default FifthRectangular;
