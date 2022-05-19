import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ChangeAnswers } from '../../data/que_content';

const OpsCont = styled.div`
`;

const ButtonCont = styled.div`
display:flex;
justify-content: center;
flex-wrap: wrap;
`

const OpsTitle = styled.h3`
width:75vw;
`;

const ImgCont = styled.div`
display:flex;
justify-content:center;
`

const OpsImg = styled.img`
margin-top: 5vh;
border-radius: 5vw;
width:80vw;
`

const TitleCont = styled.div`
width:100vw;
display:flex;
justify-content:center;
`

const OpsButton = styled.button`
font-family: Helvetica;
font-weight: bold;
font-size:x-large;
margin-top: 4vw;
background-color: #FFEA00;  
border: none;
color: black;
padding: 20px;
text-align: center;
text-decoration: none;
cursor: pointer;
border-radius: 12px;
padding-left: 1vw;
padding-right: 1vw;
margin-right: 10px;
width: 40vw;
`;



export default function Options({
  q="How many eyes do bees have?",
  arr=[],
  beeImg="/img1.jpg"
}){

  const r = useRouter();

  var {qnum} = r.query;
  if(qnum === undefined){
    qnum = 1;
  }

  return <OpsCont>
    <ImgCont>
      <OpsImg src={beeImg} />
    </ImgCont>
    <TitleCont>
      <OpsTitle>{q} </OpsTitle>
    </TitleCont>
    <ButtonCont>
      {
        arr.map((o,i)=><OpsButton onClick={
          ()=>ChangeAnswers(o, qnum)
        }>{o}</OpsButton>)
      }
    </ButtonCont>
  </OpsCont>
}