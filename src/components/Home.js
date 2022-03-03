import React from 'react'
import styled from "styled-components"
import Section from "./Section"
const Home = () => {
    return (
        <Container>
           <Section 
                title="Model S"
                description="order online for touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="custom order"
                rightBtnText="inventory"
           />
           <Section 
                title="Model 3"
                description="order online for touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="custom order"
                rightBtnText="inventory"
           />
           <Section 
                title="Model X"
                description="order online for touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="custom order"
                rightBtnText="inventory"
           />
           <Section 
                title="Model Y"
                description="order online for touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="custom order"
                rightBtnText="inventory"
           />
        </Container>
    )
}

export default Home
const Container=styled.div`
height:100vh;
z-index:10;
background-image:${process.env.PUBLIC_URL+"/image/model-s.jpg;"};
`