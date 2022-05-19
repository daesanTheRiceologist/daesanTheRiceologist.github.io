import styled from 'styled-components';

const DispCont = styled.div`
display:flex;
`;

const ImgCont = styled.div`
width:50px;
height:50px;
`;

const DispImg = styled.div`
object-fit:cover;
width:50%;
height:100%;
`;


export function MainImg({
  img="/logo.png"
}){
  return <ImgCont>
    {
      <img src={img} />
    }
  </ImgCont>
}

export default function Display({
    arr=[]
}){
  return <DispCont>
    {
    arr.map((o,i)=><ImgCont>
    <DispImg src={o} height={100} />
    </ImgCont>)
    }
  </DispCont>
}