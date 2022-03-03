import React from 'react'
import styled from 'styled-components'
import Fade from "react-reveal/Fade"
const Section = (props) => {
    const {title,description,leftBtnText,rightBtnText,backgroundImg}=props;
    return (
        <Wrap backgroundImg={backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>

            </Fade>
           <Buttons>
               <Fade bottom>
                   <ButtonGroup>
                        <LeftButton>
                        {leftBtnText}
                        </LeftButton>
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    </ButtonGroup>
               </Fade>
               
                    <DownArrow src={process.env.PUBLIC_URL+"image/down-arrow.svg"}></DownArrow>
           </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap=styled.div`

width:100vw;
height:100vh;
background-size:cover;
background-image:url(${ props=>process.env.PUBLIC_URL+"/image/"+props.backgroundImg});
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
z-index=10;

`
const ItemText=styled.div`
padding-top:15vh;
z-index=1;
`

const ButtonGroup=styled.div`
display:flex;
margin-bottom:30px;
@media(max-width:768px){
    flex-direction:column
}

`
const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
height  :40px;
width  256px;
margin:20px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
`
const RightButton=styled(LeftButton)`
background-color:rgba(240,240,240,0.8);
opacity:0.65;
color:black;
// font-weight:bold;

`;
const DownArrow=styled.img`
height:40px;
animation:animateDown infinite 1.5s;
overflow-x:hidden;
`
const Buttons=styled.div``