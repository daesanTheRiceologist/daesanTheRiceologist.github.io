import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Stuff from '../comps/Display/Stuff'
import {Logo} from '../comps/Display/Stuff' 
import { GetName,qs } from '../data/que_content'
import styled, {keyframes} from 'styled-components';
import { fadeIn, dropDown, slideRight } from '../data/animation';

import { useRouter } from "next/router"; 

const GetStartedButton = styled.button`
margin-top: 5vh;
background-color: #FF9F0E; /* Green */
border: none;
color: white;
padding: 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
cursor: pointer;
border-radius: 12px;
position: relative;
`;

const Header = styled.h2`
width: 70vw;
text-align: center;
animation: ${slideRight} 2s;
position: relative;
`

const ScreenCont = styled.div`
background-image: url("/startScreen.png");
height:100vh;
width: 100vw;
position: fixed;
`
const H1Cont = styled.h1`
animation: ${fadeIn} 2s;
position: relative;
`

export default function Home() {
  
  const nm = GetName();
  const r = useRouter();
  
  return (
    <ScreenCont className={styles.container}>
      <H1Cont>Hi {nm}</H1Cont>
      <Header>Let's see how much you know about bees</Header>
      <hr />
      <Logo></Logo>
      <GetStartedButton onClick={
        ()=>r.push("/questions")
      }>Take the Bee Quiz</GetStartedButton>
    </ScreenCont>
  )
}
