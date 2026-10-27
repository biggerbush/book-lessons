const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  R('t0c',TM.wish_cloud,.6); $('t0cb').setAttribute('transform','translate(0 '+(8*Math.sin(t*1.5)).toFixed(1)+')'); R('t0g',TM.wish_cloud+2);

  R('f1s',TM.foundation); R('f1q',TM.foundation+3,.6); R('h1w',TM.house);
  $('h1wh').setAttribute('transform','rotate('+(u>=TM.house?6*Math.sin(t*2.4):0).toFixed(2)+' 1000 610)'); R('h1f',TM.house+3.8);

  EQ.forEach((g,i)=>rise(g,p(u,TM.formula+2.2+i*.6,TM.formula+2.7+i*.6)));
  R('p2a',TM.dreamer); $('bal1').setAttribute('transform','translate(0 '+(10*Math.sin(t*1.6)).toFixed(1)+')');
  R('p2b',TM.realist); R('p2c',TM.realist+4.2); R('cap3',TM.realist+7.6);

  // the hunt
  rise(WBw,p(u,TM.hyenas,TM.hyenas+.5));
  const stb=p(u,TM.hyenas+1.4,TM.hyenas+3);
  WB.setAttribute('transform','rotate('+(stb*(9+2.5*Math.sin(t*7))).toFixed(2)+' 1132 740)');
  HY.forEach((h,i)=>{const a0=TM.hyenas+.6+i*.4; rise(h[0],p(u,a0,a0+.5)); const q=h[2],a=p(u,a0,a0+1.4),f=q[2],ph=t*5+i*1.3;
    const dx=-f*(1-a)*80+a*f*6*Math.sin(ph), dy=-a*8*Math.abs(Math.sin(ph)), ang=a*(q[3]+3*Math.sin(ph));
    h[1].setAttribute('transform','translate('+dx.toFixed(1)+' '+dy.toFixed(1)+') rotate('+ang.toFixed(1)+' '+q[0]+' '+q[1]+')')});
  R('r3',TM.wildebeest); R('dal3',TM.wildebeest+.8);
  const z=p(u,TM.wildebeest+4.2,TM.wildebeest+6),k=1-.4*z;
  $('hunt').setAttribute('transform','translate(1060 600) scale('+k.toFixed(3)+') translate(-1060 -600)');
  $('fr3').setAttribute('opacity',z.toFixed(2)); $('big3').setAttribute('opacity',p(u,TM.wildebeest+5,TM.wildebeest+6.2).toFixed(2));

  R('ring4',TM.ecosystem); R('nA',TM.ecosystem+.6); R('nB',TM.ecosystem+2); R('hd4',TM.ecosystem+.3);
  const ws=u>=TM.whole_system; [...$('ring4').children].forEach(e=>e.style.stroke=ws?'var(--gain)':'var(--line)');
  IND.setAttribute('opacity',(1-.6*p(u,TM.whole_system,TM.whole_system+1)).toFixed(2));
  R('t4a',TM.whole_system); R('t4b',TM.whole_system+1.5); R('t4c',TM.whole_system+6.6);

  R('sh5',TM.should_sign); $('sh5i').setAttribute('opacity',(1-.65*p(u,TM.is_sign,TM.is_sign+.6)).toFixed(2));
  rise($('pa5'),p(u,TM.should_sign+.6,TM.should_sign+1.1)*(1-p(u,TM.is_sign,TM.is_sign+.6)));
  R('is5',TM.is_sign); R('pb5',TM.is_sign+.4); R('t5a',TM.is_sign+.8); R('st1',TM.is_sign+5.8); R('st2b',TM.is_sign+6.6);

  R('hd6',TM.dominoes); R('mk6a',TM.dominoes+.5); R('mk6b',TM.dominoes+1);
  R('c1a',TM.gym); R('c1b',TM.gym+2); R('c2a',TM.dessert); R('c2b',TM.dessert+2); R('w6',TM.dessert+4.1,.6);

  R('sea7',TM.sailboat); W7.forEach((w,i)=>w.setAttribute('stroke-dashoffset',(-t*60-i*20).toFixed(0)));
  let wv='M120 650'; for(let x=140;x<=900;x+=20)wv+='L'+x+' '+(650+6*Math.sin(x/40+t*2)).toFixed(1); $('wv7').setAttribute('d',wv);
  $('boat').setAttribute('transform','translate('+(160*p(u,TM.sailboat+.5,TM.sailboat+6)).toFixed(1)+' '+(4*Math.sin(t*2)).toFixed(1)+')');
  R('o7',TM.own_it,.6); R('cp7',TM.compass); const ck=p(u,TM.compass,TM.compass+2.5);
  $('nd7').setAttribute('transform','translate(1220 440) rotate('+(45+(1-ck)*150*Math.sin(t*3)).toFixed(1)+')'); R('ww7',TM.compass+2.2);

  const s8=SC[8][0]/K; R('q8a',s8+.5); R('q8b',s8+1); R('lab8',s8+4.9); R('pad8',s8+5.2);
  ['n8a','n8b','n8c'].forEach((id,i)=>$(id).setAttribute('x2',(1230+140*p(u,s8+5.8+i*.6,s8+6.4+i*.6)).toFixed(1)));