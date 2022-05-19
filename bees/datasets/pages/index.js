import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MainImg } from '../comps/Display'
import Stuff from '../comps/Display/Stuff'
import {Logo} from '../comps/Display/Stuff'
import styled, {keyframes} from 'styled-components';
import { fadeIn, dropDown, slideRight } from '../data/animation';

import { useRouter } from 'next/router'
import { ChangeName } from '../data/que_content'

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
animation: ${slideRight} 3s;
position: relative;
`;

const ScreenCont = styled.div`
background-image: url("/loadingScreen.png");
height:100vh;
width: 100vw;
position: fixed;
`
const InputBox = styled.input`
background-color: white;
padding-left: 40px;
font-size: 20px;
width: 60vw;
padding-top: 1vh;
padding-bottom: 1vh;
border: none;
animation: ${slideRight} 2s;
position: relative;
`

const TopDiv = styled.div`
animation: ${dropDown} 2s;
position: relative;
`

const LogoDiv = styled.div`
animation: ${fadeIn} 3s;
`

export default function Home() {

  
  const r = useRouter();
  return (
    <ScreenCont className={styles.container}>
      <TopDiv>
        <Stuff></Stuff>
      </TopDiv>
      <LogoDiv>
        <Logo></Logo>
      </LogoDiv>
      <InputBox type='text' placeholder='Enter your name...'
      onChange={
        (e)=>ChangeName(e.target.value)
      }
      />
      <GetStartedButton onClick={
        ()=>r.push("/start")
      }>Get Started</GetStartedButton>
    </ScreenCont>
  )
}
