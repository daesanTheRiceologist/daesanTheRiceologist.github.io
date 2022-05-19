import styled from 'styled-components';

const LogoImg = styled.img`
display:flex;
width: 60vw;
margin-bottom: 5vw;

`;

const Header = styled.h1`
text-align: center;
width: 80vw;
`

export function Logo({
    img = "/logo.png",
}){

    return <LogoImg src={img} />
}

export default function Stuff(){
    
    return <Header>
        We're CND and we love bees
    </Header>
}