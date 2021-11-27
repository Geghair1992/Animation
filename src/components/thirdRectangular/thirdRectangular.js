import React from 'react'
import styled,{keyframes} from 'styled-components'

const Rotation = keyframes`
0%{
   transform: rotate(0deg);
   margin-top: -50px;
   margin-left: 150px;
}
35%{
    transform: rotate(0deg);
    margin-top: -30px;
    margin-left: 120px;
}
70%{
    transform: rotate(0deg);
    margin-top: -20px;
    margin-left: 120px;
}
100%{
    transform: rotate(0deg);
    margin-top: -80px;
    margin-left: 100px;
}
`

const StyledThirdRectangular = styled.div`
  width:140px;
  height:40px;
  background-color: #000;
  position: relative;
  top: 110px;
  left: 100px;
  transform: rotate(0deg);
  border: 2px solid #fff;
  animation: ${Rotation} 6s ease infinite;
`
const StyledThird = styled.div`
  color: #fff;
  font-size: 2.5em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`



const ThirdRectangular = () => {
    return (
        <StyledThirdRectangular>
            <StyledThird>IDEA</StyledThird>
        </StyledThirdRectangular>
    )
}

export default ThirdRectangular;
