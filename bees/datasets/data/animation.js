import styled, {keyframes} from 'styled-components';

export const fadeIn = keyframes`
from {
    opacity:0;
}
to {
    opacity:1;
}
`;

export const fadeOut = keyframes`
from {
    opacity:1;
    top:-100vw;

} 
to {
    opacity:0;
    top:0vw;

}
`

export const slideRight = keyframes`
from {
    opacity:0;
    right:-100vw;
}
to {
    opacity:1;
    right:0vw;
}
`;

export const dropDown = keyframes`
from {
    opacity:0;
    top:-100vw;
} 
to {
    opacity:1;
    top:0vw;
}
`