import styled from "styled-components"

import { useRouter } from "next/router";

export default function Content({
    
    

    Header="Why are bees important?",
    beeImg="/img1.jpg",
    text= "Biodiversity - Bees help and support flowers, trees, and other plants grow. Food Source - Bees produce honey which serve as a nutritious food for people, animals, and bugs in the wild. Pollination - Bees pollinate billions of plants each year which helps the growth of crops"

  }){

    const r = useRouter();

  
    const Img = styled.img`
        margin-top: 5vh;
        border-radius: 5vw;
        width:80vw;
    `

    const ImgCont = styled.div`
        display:flex;
        justify-content:center;
        margin-bottom:5vh;
    `

    const ScreenCont = styled.div`
    background-image: url("/content.png");
    height: 100vh;
    `

    const HeaderCont = styled.div`
    margin-top: -1vh;
    display: flex;
    justify-content: center;
    font-size:xx-large;
    font-family: Helvetica;
    font-weight:530;
    text-align: center;
    background-color: #FF9F0E;
    height: 10vh;
    color: white;
    `

    const TextCont = styled.div`
    width: 80%;
    text-align: center;
    `
    const BottomButton = styled.div`
    margin-top: 3vw;
    background-color: #FFEA00; /* Green */
    border: none;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 12px;
    display: flex;
    width: 20vw;
    `
    const ButtonCont = styled.div`
    display:flex;
    justify-content: space-evenly;
    `

    const SpacerTop = styled.div`
    background-color: #FF9F0E;
    height: 3vh;
    color: white;
    `
    return <ScreenCont>
        <SpacerTop />
        <HeaderCont>
            {Header}
        </HeaderCont>
        <ImgCont>
            <Img src={beeImg} />
        </ImgCont>
        <ImgCont>
            <TextCont>
                {text}
            </TextCont>
        </ImgCont>
        <ButtonCont>
            <BottomButton onClick={
                ()=>r.push("/questions/importance")
            }
            >!</BottomButton>
            <BottomButton onClick={
                ()=>r.push("/questions/help")
            }>How to help</BottomButton>
            <BottomButton onClick={
                ()=>r.push("/questions/dying")
            }>Bees are dying</BottomButton>
            <BottomButton onClick={
                ()=>r.push("/questions/statistics")
            }>Statistics</BottomButton>
        </ButtonCont>
    </ScreenCont>
  }