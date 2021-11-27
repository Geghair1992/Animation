import React from 'react'
import styled,{keyframes} from 'styled-components'

const Rotation = keyframes`
0%{
   transform: rotate(180deg);
   margin-top:100px;
}
35%{
    transform: rotate(90deg);
    margin-top: -50px;
    margin-left: 150px;
}
70%{
    transform: rotate(90deg);
    margin-top: -100px;
    margin-left: 200px;
}
100%{
    transform: rotate(0deg);
    margin-top: 50px;
    margin-left:230px;
}
`

const StyledSixthRectangular = styled.div`
  width:140px;
  height:40px;
  background-color: #000;
  position: relative;
  top: 53px;
  left: 50px;
  transform: rotate(-435deg);
  border: 2px solid #fff;
  animation: ${Rotation} 6s ease infinite;
`
const StyledSixth = styled.div`
  color: #fff;
  font-size: 2.5em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`



const SixthRectangular = () => {
    return (
        <StyledSixthRectangular>
            <StyledSixth>IDEA</StyledSixth>
        </StyledSixthRectangular>
    )
}

export default SixthRectangular;
