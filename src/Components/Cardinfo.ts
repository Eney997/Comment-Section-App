import gogoPick from '../public/firstGogo.svg'
import secBoy from '../public/secondBoy.svg'
import thirdBoy from '../public/thirdBoy.svg'
import arrow from '../public/replyArrow.svg'
export const Info = [
    {
      key:1,
      headerImgUrl: gogoPick,
      headerName:'amyrobson',
      timeAgo:'1 month ago',
      piInfo:'Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.',
      plius:'+',
      num:'12',
      minus:'-',
      replyImg:arrow,
      replyTxt:'Reply',
    },
    {
        key:2,
        headerImgUrl: secBoy,
        headerName:'maxblagun',
        timeAgo:'2 weeks ago',
        piInfo:'Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!',
        plius:'+',
        num:'5',
        minus:'-',
        replyImg:arrow,
        replyTxt:'Reply',
      },
      {
        key:3,
        headerImgUrl: thirdBoy,
        headerName:'ramsesmiron',
        timeAgo:'1 week ago',
        piInfo:'If you’re still new, I’d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It’s very tempting to jump ahead but lay a solid foundation first.',
        plius:'+',
        num:'4',
        minus:'-',
        replyImg:arrow,
        replyTxt:'Reply',
      },
  ] as const;

