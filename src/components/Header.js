import React,{useState} from 'react'
import styled from 'styled-components'
import { Close } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu';
import {selectCars} from "../features/carSlice"

const  Header = () => {

    const [burgerStatus,setBurgerStatus]=useState(false)
    return (
        <Container>
            <a href='#'>
                <img src={process.env.PUBLIC_URL+"/image/logo.svg"} alt='tesla'/>
            </a>
            <Menu>
               <p>
                   <a href="#"> Model S</a>
               </p>
               <p>
                   <a href="#"> Model 3</a>
               </p>
               <p>
                   <a href="#"> Model X</a>
               </p>
               <p>
                   <a href="#"> Model Y</a>
               </p>
            </Menu>
            <RightMenu>
                <a href="#">Shop Tesla</a>
                <a href="#">Account</a>
                {/* <a hrer="#">Model X</a>
                <a hrer="#">Model Y</a> */}
                {/* <MenuOpen/> */}
                {/* <AirOutlined/> */}
                {/* <MenuIcon/> */}
            <CustomMenu onClick={()=>setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                     <CustomClose onClick={()=>setBurgerStatus(false)}/>
                </CloseWrapper>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">used Inventory</a></li>
                <li><a href="#">Trade-in </a></li>
                <li><a href="#">CyberTruck </a></li>
                <li><a href="#">RoadSter </a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header
const Container=styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
padding:0 20px;
top:0;
left:0;
right:0;
z-index:1;

`
const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;

p{
font-weight:600;
text-transfrom:uppercase;
padding:0 10px;
flex-wrap:no-wrap;
 a{
     color:black;
 }
}
`
const RightMenu=styled.div`
color:black;
& >*{
    pointer:cursor;
}
a{
    color:black;
    font-weight:600;
    text-transfrom:uppercase;
   margin-right:10px;
    }


`

const CustomMenu=styled(MenuIcon)`
color:black;
&:hover{
    cursor:pointer;
}
`
const BurgerNav=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;

display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;

text-align:start;
li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,0.2);
    width:100%;
}
a{
    font-weight:600;
}
transform:${(props)=>{
  return   props.show?"translateX(0);":"translateX(100%);"
}});
transition:transform 0.2s linear;

`
const CustomClose=styled(Close)`
cursor:pointer
`
const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;

`