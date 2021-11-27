import React from 'react'
import styled,{keyframes} from 'styled-components'

const Rotation = keyframes`
0%{
   transform: rotate(0deg);
   margin-top:-10px;
   margin-left: 100px;
}
25%{
    transform: rotate(0deg);
    margin-top:-5px;
    margin-left: 60px;   
}
50%{
    transform: rotate(0deg);
    margin-top: 10px;
    margin-left: 40px;
}
75%{
    transform: rotate(35deg);
    margin-top: -25px;
    margin-left: 30px;
}
100%{
    transform: rotate(15deg);
    margin-top: 40px;
    margin-left:60px;
}
`

const StyledFourthRectangular = styled.div`
  width:140px;
  height:40px;
  background-color: #000;
  position: relative;
  top: 3px;
  left: 5px;
  transform: rotate(45deg);
  border: 2px solid #fff;
  animation: ${Rotation} 6s ease infinite;
`
const StyledFourth = styled.div`
  color: #fff;
  font-size: 2.5em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`



const FourthRectangular = () => {
    return (
        <StyledFourthRectangular>
            <StyledFourth>IDEA</StyledFourth>
        </StyledFourthRectangular>
    )
}

export default FourthRectangular;
