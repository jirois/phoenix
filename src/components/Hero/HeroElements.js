import styled from 'styled-components'
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'


export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    position: relative;
    z-index: 1;
    max-height: 800px;
    height: 600px;

`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
width: 100%;
height: 100%;
overflow: hidden;

`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    

   

`

export const HeroBlur = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 2;
    overflow: hidden;


`

export const HeroContent = styled.div`
    position: absolute;
    z-index: 3;
    padding: 8px 24px;
    display: flex;
    flex-direction : column;
    align-items: center;
    max-width: 1200px;

   
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 486px){
        font-size: 32px;
    }

`
export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 20px;
    }
    @media screen and (max-width: 486px){
        font-size: 18px;
    }

`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`


