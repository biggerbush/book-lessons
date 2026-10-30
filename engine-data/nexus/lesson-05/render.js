$('flame').setAttribute('transform','translate(1320 406) scale('+(1+.06*Math.sin(t*9)).toFixed(3)+' '+(1+.1*Math.sin(t*7)).toFixed(3)+') translate(-1320 -406)');
$('glow').setAttribute('r',(90+50*p(u,TM.candle+5.8,TM.candle+7)+6*Math.sin(t*3)).toFixed(1));
rise($('cdl'),p(u,TM.candle,TM.candle+.6));

rise($('prs'),p(u,TM.press,TM.press+.5));
$('plat').setAttribute('transform','translate(0 '+(40*Math.abs(Math.sin(t*1.6))).toFixed(1)+')');
rise($('hope'),p(u,TM.press+5,TM.press+5.5));
rise($('wb'),p(u,TM.witch_book,TM.witch_book+.5));
rise($('kr'),p(u,TM.kramer,TM.kramer+.5));

rise($('acc'),p(u,TM.accused,TM.accused+.5));
rise($('conf'),p(u,TM.confession,TM.confession+.5));
WN.forEach(n=>{const a=[0,TM.confession+1,TM.web,TM.web+1.5,TM.web+3][n.g]+n.i*.08,o=p(u,a,a+.4);n.c.setAttribute('opacity',o);n.e.setAttribute('opacity',o*.6)});
rise($('webL'),p(u,TM.web+1,TM.web+1.5));

const S3=SC[3][0]/K; rise($('lp'),p(u,S3+.4,S3+1));
const an=t*1.2; $('lpD').setAttribute('cx',(440+170*Math.cos(an)).toFixed(1)); $('lpD').setAttribute('cy',(480+170*Math.sin(an)).toFixed(1));
rise($('jd'),p(u,TM.judge,TM.judge+.5));
rise($('ld'),p(u,TM.locked_door,TM.locked_door+.5));
const D3=TM.locked_door+6.2; DG.forEach((c,k)=>c.setAttribute('opacity',p(u,D3+k*.03,D3+k*.03+.3)));
rise($('dgL'),p(u,D3,D3+.5));

rise($('sci'),p(u,TM.scientist,TM.scientist+.5));
const aw=p(u,TM.journal,TM.journal+.6);
$('arwL').setAttribute('x2',(418+(538-418)*aw).toFixed(1)); $('arwL').setAttribute('opacity',aw>0?1:0);
$('arwH').setAttribute('opacity',p(u,TM.journal+.4,TM.journal+.7));
rise($('jr'),p(u,TM.journal,TM.journal+.5));
rise($('rs'),p(u,TM.journal+2.5,TM.journal+3));
rise($('tr'),p(u,TM.trophy,TM.trophy+.5));
$('fstk').setAttribute('x2',(1222+196*p(u,TM.trophy+.6,TM.trophy+1.2)).toFixed(1));

const S5=SC[5][0]/K; rise($('eq'),p(u,S5+.5,S5+1));
EX.forEach((e,i)=>e.setAttribute('opacity',p(u,TM.error_marks+i*.3,TM.error_marks+i*.3+.3)));
const mk5=cl((u-TM.magnifier-.3)/.8,0,4), mi=Math.min(3,Math.floor(mk5)), mf=ease(mk5-mi);
const mx=EP[mi][0]+(EP[mi+1][0]-EP[mi][0])*mf, my=EP[mi][1]+(EP[mi+1][1]-EP[mi][1])*mf;
$('mag').setAttribute('transform','translate('+mx.toFixed(1)+' '+my.toFixed(1)+')'); $('mag').setAttribute('opacity',p(u,TM.magnifier,TM.magnifier+.3));
RG.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.magnifier+.2+i*.8,TM.magnifier+.5+i*.8)));
[0,2,4].forEach((d,i)=>rise($('st'+i),p(u,TM.magnifier+d,TM.magnifier+d+.5)));

rise($('tp'),p(u,TM.two_paths,TM.two_paths+.5));
PL.forEach((g,j)=>rise(g,p(u,TM.pile+j*.2,TM.pile+j*.2+.3)));
rise($('plL'),p(u,TM.pile+.5,TM.pile+1));
ST.forEach((s,i)=>s.setAttribute('opacity',p(u,TM.staircase+i*.35,TM.staircase+i*.35+.3)));
rise($('stL'),p(u,TM.staircase+2.5,TM.staircase+3));
const ck=p(u,TM.staircase+.3,TM.staircase+3.5)*7.99, ci=Math.floor(ck);
$('clb').setAttribute('cx',(300+ck*140).toFixed(1)); $('clb').setAttribute('cy',(480-ci*30-20).toFixed(1)); $('clb').setAttribute('opacity',u>=TM.staircase?1:0);

rise($('tm'),p(u,TM.team,TM.team+.5));
const ha=p(u,TM.raised_hand,TM.raised_hand+.6);
$('hnd').setAttribute('transform','rotate('+((1-ha)*140).toFixed(1)+' 790 500)'); $('hnd').setAttribute('opacity',ha>0?1:0);
rise($('q7'),p(u,TM.raised_hand+.4,TM.raised_hand+.9));
const G7=TM.raised_hand+4.6;
rise($('gx0'),p(u,G7,G7+.4)); rise($('gc0'),p(u,G7+.8,G7+1.1));
rise($('gx1'),p(u,G7+1.1,G7+1.5)); rise($('gc1'),p(u,G7+1.9,G7+2.2));
rise($('gx2'),p(u,G7+2.2,G7+2.6));
const bs=1+.04*Math.sin(t*3)*p(u,G7+2.2,G7+2.6);
$('bigx').setAttribute('transform','translate(1262 580) scale('+bs.toFixed(3)+') translate(-1262 -580)');
rise($('gface'),p(u,G7+3.2,G7+3.7));
rise($('gr'),p(u,G7+.4,G7+.9));

const S8=SC[8][0]/K; rise($('tk'),p(u,S8+.4,S8+.9));
rise($('qa'),p(u,S8+5,S8+5.5)); rise($('qb'),p(u,S8+5.4,S8+5.9)); rise($('qc'),p(u,S8+5.8,S8+6.3));