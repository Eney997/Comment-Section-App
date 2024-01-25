import styled from 'styled-components'
import girlPick from '../public/firstGogo.svg'
import replyPick from '../public/replyArrow.svg'

const Card = () => {
  return (
    <Mshobelidivi>
        <Cardheaderdiv>
        <Headerimg src={girlPick}></Headerimg>
        <Headername>amyrobson</Headername>
        <Headertime>1 month ago</Headertime>
        </Cardheaderdiv>
        <Commentp>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.</Commentp>
        <Counters>
            <Counterhtwo>+</Counterhtwo>
            <Counterhthre>12</Counterhthre>
            <Counterfour>-</Counterfour>
        </Counters>
        <Replyd>
          <Replyimg src={replyPick}></Replyimg>
          <Replytxt>Reply</Replytxt>
        </Replyd>
    </Mshobelidivi>
  )
}

export default Card

const Mshobelidivi = styled.div`
    display: grid;
    place-items: center;
    background-color: #fff;
    margin-top: 16px;
    width: 343px;
    height: 256px;
    border-radius: 8px;
`
const Cardheaderdiv = styled.div `
    display:flex;
    justify-content: center;
    align-items: center;
    column-gap: 16px;
    margin-top: 16px;
`
const Headerimg = styled.img `
    margin-left: -70px;
`
const Headername = styled.h5 `
color:  #292a2c;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Rubik;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const Headertime = styled.h1 `
color: var(--Grayish-Blue, #67727E);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Rubik;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
margin-left:12 ;
`
const Commentp = styled.p ` 
margin-top: 10px;
width: 311px;
color: var(--Grayish-Blue, #67727E);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Rubik;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
`
const Counters = styled.div `
display:flex;
justify-content: center;
align-items: center;
width: 100px;
height: 40px;
flex-shrink: 0;
border-radius: 10px;
background:#F5F6FA;
column-gap: 13px;
margin-top: 10px;
margin-left: -210px;
`

const Counterhtwo = styled.h2`
font-size: 18px;
color:#C5C6EF;
cursor: pointer;
`
const Counterhthre = styled.h3`
color:  #5357B6;
text-align: center;
font-family: Rubik;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const Counterfour = styled.h4`
font-size: 18px;
color:#C5C6EF;
cursor: pointer;
`

const Replyd = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
    margin-left: 200px;
    margin-top: -58px;
    cursor: pointer;
`
const Replyimg = styled.img `
    display: block;
`
const Replytxt = styled.h6 `
color: var(--Moderate-Blue, #5357B6);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Rubik;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
`
