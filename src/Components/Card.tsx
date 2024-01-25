import styled from 'styled-components'
import { Info } from './Cardinfo'
import { useState } from 'react'; 


const Card = () => {
    const [counts, setCounts] = useState(Info.map(() => 0));

    const increaseCount = (index:number) => {
      const newCounts = [...counts];
      newCounts[index] += 1;
      setCounts(newCounts);
    };
  
    const decreaseCount = (index:number) => {
      const newCounts = [...counts];
      if (newCounts[index] > 0) {
        newCounts[index] -= 1;
        setCounts(newCounts);
      }
    };
    return (
      <>
        {Info.map((x:any, i:any) => (
          <Mshobelidivi key={i}>
            <Cardheaderdiv>
              <Headerimg src={x.headerImgUrl} />
              <Headername>{x.headerName}</Headername>
              <Headertime>{x.timeAgo}</Headertime>
            </Cardheaderdiv>
            <Commentp>{x.piInfo}</Commentp>
            <Counters>
            <Counterhtwo onClick={() => increaseCount(i)}>{x.plius}</Counterhtwo>
            <Counterhthre>{counts[i]}</Counterhthre>
            <Counterfour onClick={() => decreaseCount(i)}>{x.minus}</Counterfour>
          </Counters>
            <Replyd>
              <Replyimg src={x.replyImg} />
              <Replytxt>{x.replyTxt}</Replytxt>
            </Replyd>
          </Mshobelidivi>
        ))}
      </>
    );
  };

export default Card

const Mshobelidivi = styled.div`
    display: grid;
    place-items: center;
    background-color: #fff;
    margin-top: 16px;
    width: 343px;
    height: 256px;
    border-radius: 8px;

    @media (width>750px){
        width: 730px;
        height: 167px;
        margin-top: 50px;
    }
`
const Cardheaderdiv = styled.div `
    display:flex;
    justify-content: center;
    align-items: center;
    column-gap: 16px;
    margin-top: 16px;

    @media (width>750px){
        margin-left: -250px;
    }
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

@media (width>750px){
    width: 618px;
    margin-left: 50px;
}
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

@media (width>750px){
    display: grid;
    width: 40px;
    height: 100px;
    margin-left: -650px;
    margin-top: -140px;
}
`
const Counterhtwo = styled.h2`
font-size: 18px;
color:#C5C6EF;
cursor: pointer;

@media (width>750px){
    margin-left: 2px;
}
`
const Counterhthre = styled.h3`
color:  #5357B6;
text-align: center;
font-family: Rubik;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;

@media (width>750px){
    margin-left: -1px;
}
`
const Counterfour = styled.h4`
font-size: 18px;
color:#C5C6EF;
cursor: pointer;

@media (width>750px){
    margin-left: 4px;
}
`
const Replyd = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
    margin-left: 200px;
    margin-top: -58px;
    cursor: pointer;

    @media (width>750px){
    margin-left: 600px;
    margin-top: -255px;
}
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
