import { GetName, qs } from "../../data/que_content"
import styled, {keyframes} from 'styled-components';
import { fadeIn, dropDown, slideRight } from '../../data/animation'
import Options from "../../comps/Question/Options";
import { useRouter } from "next/router";

export default function Questions(){

  const nm = GetName();
  const r = useRouter();

  const QNumCont = styled.div`
  display: flex;
  justify-content: center;
  font-size:xx-large;
  font-family: Helvetica;
  font-weight:530;
  text-align: center;
  background-color: #FF9F0E;
  height: 8vh;
  color: white;
  margin-top: -1vh;
  position: relative;
  animation: ${dropDown} 1s;
  `

  const SpacerTop = styled.div`
  background-color: #FF9F0E;
  height: 3vh;
  color: white;
  position: relative;
  animation: ${dropDown} 1s;
  `
  const NextCont = styled.div`
  display:flex;
  justify-content: center;
  `

  const NextButton = styled.button`
  margin-top: 3vw;
  background-color: #FF9F0E; /* Green */
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 12px;
  display: flex;
  animation: ${fadeIn} 1s;
  `
  
  const ScreenCont = styled.div`
  background-image: url("/loadingScreen.png");
  height:100vh;
  width: 100vw;
  position: fixed;
  `

  const SomeDiv = styled.div`
  animation: ${slideRight} 3s;
  position: relative;
  `

  var {qnum} = r.query;
  if(qnum === undefined){
    qnum = 1;
  }

  return <ScreenCont>
    <div>
      <SpacerTop />
      <QNumCont>
        Question {qnum}
        
      </QNumCont>
    </div>
    
    <SomeDiv>
      <Options
      q={qs[qnum].title}
      arr={qs[qnum].ops}
      beeImg={qs[qnum].img}
      
      />
    </SomeDiv>
    {
      Number(qnum) >= qs.length - 1 &&
      <NextCont>
        <NextButton onClick={
          ()=>r.push("/questions/results")
        }>Finish!</NextButton>
      </NextCont>
    }

    {
      Number(qnum) < qs.length - 1 &&
      <NextCont>
        <NextButton onClick={
          ()=>r.push({
          pathname:"/questions",
          query:{
            qnum:Number(qnum)+1 > qs.length - 1 ? qs.length-1 : Number(qnum)+1
          }
        })
        }>Next</NextButton>
      </NextCont>
    }
  </ScreenCont>
}