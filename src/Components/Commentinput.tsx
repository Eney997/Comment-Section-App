import styled from "styled-components"
import mepick from '../public/meBoy.svg'

const Commentinput = () => {
  return (
    <Commentidiv>
        <Commentinputtypetxt placeholder="Type Comment..." name="formin" type="text"></Commentinputtypetxt>
        <Imgcomment src={mepick}></Imgcomment>
        <Commentaddbutton><Commentspan>Send</Commentspan></Commentaddbutton>
    </Commentidiv>
  )
}

export default Commentinput

const Commentidiv = styled.div`
display: grid;
margin-top: 20px;
width: 343px;
height: 200px;
border-radius: 8px;
background: var(--White, #FFF);
margin-bottom: 80px;
grid-template-areas:'one one'
                    'two three';

@media (width>750px){
    grid-template-areas: 'two one three';
    width: 730px;
    height: 144px;
}
`

const Commentinputtypetxt = styled.input`
margin-top: 16px;
margin-left: 16px;
grid-area: one;
width: 311px;
height: 96px;
border-radius: 8px;
border: 1px solid var(--Light-Gray, #E9EBF0);
background: var(--White, #FFF);
outline: none;
color: var(--Grayish-Blue, #67727E);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Rubik;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
padding-bottom: 60px;
padding-left: 10px;
min-width: 22%;

&::placeholder {
color: var(--Grayish-Blue, #67727E);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Rubik;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
}
@media (width>750px) {
    width: 506px;
    height: 96px;
}
`
const Imgcomment = styled.img `
 display: block;
 grid-area: two;
 margin-left: 16px;
 margin-top: 9px;
 @media (width>750px){
    margin-top: 20px;
 }
`
const Commentaddbutton = styled.button`
width: 104px;
height: 48px;
border-radius: 8px;
background: var(--Moderate-Blue, #5357B6);
grid-area: three;
margin-left: 155px;
outline: none;
border: none;
cursor: pointer;
@media (width>750px){
    margin-left: 0px;
    margin-top: 17px;
}
`
const Commentspan = styled.span`
color: var(--White, #FFF);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Rubik;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
`