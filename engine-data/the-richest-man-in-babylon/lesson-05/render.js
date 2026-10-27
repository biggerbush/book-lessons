const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  // title: a year of coins fills the pouch, then one afternoon empties it
  const g0=TM.gold_coins;
  R('fp0',g0);
  $('fpb0').setAttribute('transform','translate(1140 380) scale('+(.65+.2*p(u,g0+.3,g0+2.9)).toFixed(3)+')');
  ST.forEach((c,i)=>{const a=lin(u,g0+.3+i*.3,g0+.8+i*.3);c.setAttribute('cy',(220+100*a*a).toFixed(1));c.setAttribute('opacity',(cl(a*5)*(1-cl((a-.8)/.2))).toFixed(3))});
  R('ar0',g0+3.4);R('ep0',g0+3.9);

  const y1=TM.young_arkad,c1=TM.coin_pouch;
  R('ark1',y1);R('kp1',y1+2.5);R('row1',c1);R('pw1',c1+.4);R('mo1',c1+1);
  const m1=p(u,c1+1,c1+2.2),mv=$('mv1');mv.setAttribute('cx',(1390-310*m1).toFixed(1));mv.setAttribute('cy',(300+260*m1).toFixed(1));mv.setAttribute('opacity',(p(u,c1,c1+.5)*(1-p(u,c1+2,c1+2.3))).toFixed(3));
  $('pch1').setAttribute('transform','translate(1080 620) scale('+(.8+.4*p(u,c1+2,c1+9)).toFixed(3)+')');
  MO.forEach((c,i)=>c.setAttribute('fill',u>=c1+2+i*.6?G:'var(--line)'));

  const a2=TM.azmur,s2=TM.ship,j2=TM.jewels;
  R('az2',a2);R('ak2',a2+.6);R('cs2',a2+.6);R('tyre2',s2);R('shw2',s2);R('jw2',j2);
  $('shp2').setAttribute('transform','translate('+(400+740*p(u,s2+.5,s2+4.5)).toFixed(1)+' '+(700+4*Math.sin(t*2)).toFixed(1)+')');
  let w='M120 700';for(let x=140;x<=1480;x+=20)w+='L'+x+' '+(700+6*Math.sin(x/50+t*2)).toFixed(1);$('sea2').setAttribute('d',w);$('sea2').setAttribute('opacity',p(u,s2,s2+.5));
  C2.forEach((c,i)=>{const k=p(u,j2+6.9+i*.12,j2+7.7+i*.12);c.setAttribute('transform','translate('+(-310*k).toFixed(1)+' '+(-50*k-40*Math.sin(Math.PI*k)).toFixed(1)+')')});

  const gb=TM.glass_bits,e3=TM.empty_pouch,k3=p(u,gb+.6,gb+1.6),f3=.3+.8*k3;
  GM3.forEach(g=>g.setAttribute('opacity',(1-k3).toFixed(3)));
  SH3.forEach(s=>{s[0].setAttribute('transform','translate('+(410+s[1]*f3).toFixed(1)+' '+(400+s[2]*f3).toFixed(1)+')');s[0].setAttribute('opacity',k3.toFixed(3))});
  $('lb3').textContent=k3>.5?'WORTHLESS GLASS':'RARE JEWELS?';$('lb3').style.fill=k3>.5?L:'';
  $('fp3').setAttribute('opacity',(1-p(u,e3,e3+.5)).toFixed(3));R('ep3',e3+.3);R('bg3',e3+3);

  const al=TM.algamish;R('alg4',al);
  [al+3.7,TM.baker,TM.jeweler].forEach((a,i)=>{rise(RW4[i],p(u,a,a+.5));MK4[i].setAttribute('opacity',p(u,a+1,a+1.4))});

  const sc=TM.scale,sd=TM.shield,th=.14*p(u,sd+4.6,sd+5.8),cs=380*Math.cos(th),sn=380*Math.sin(th);
  R('fr5',sc);
  $('bm5').setAttribute('d','M'+(800-cs).toFixed(1)+' '+(330+sn).toFixed(1)+'L'+(800+cs).toFixed(1)+' '+(330-sn).toFixed(1));
  $('pl5').setAttribute('transform','translate('+(800-cs).toFixed(1)+' '+(330+sn).toFixed(1)+')');
  $('pr5').setAttribute('transform','translate('+(800+cs).toFixed(1)+' '+(330-sn).toFixed(1)+')');
  R('pc5',sc+3.4);R('sh5',sd);R('sp5',sd+1.5);R('lost5',sd+4.6);R('mg5',sd+4.6);R('cap5',sd+5.2);

  // free advice: worthy chips pass through the funnel into the box; rejected chips turn red, nudge toward the funnel and fade out for good
  const cw=TM.crowd,fl=TM.filter,on=u>=fl,bv=p(u,cw+.5,cw+1);
  R('cr6',cw);R('fn6',fl);R('kb6',fl+.3);R('tst6',fl+5.4);R('tq6',fl+7.1);
  const place=(b,x,y,o)=>{b.setAttribute('x',(x-20).toFixed(1));b.setAttribute('y',(y-14).toFixed(1));b.setAttribute('opacity',cl(o).toFixed(3))};
  KB.forEach((b,k)=>{const hx=KP6[k][0],ys=KP6[k][1],bob=4*Math.sin(t*1.6+k*2),a=fl+.8+k*1.5,
    s1=p(u,a,a+.8),s2=p(u,a+.8,a+1.6),s3=p(u,a+1.6,a+2.2),sx=1410-k*90;let x,y;
    if(s3>0){x=1000+(sx-1000)*s3;y=460}else if(s2>0){x=780+220*s2;y=ys+(460-ys)*s2}else{x=hx+(780-hx)*s1;y=ys+bob*(1-s1)}
    b.setAttribute('fill',on?G:S);b.setAttribute('stroke',I);place(b,x,y,bv)});
  RB.forEach((b,j)=>{const hx=RJ6[j][0],ys=RJ6[j][1],a=fl+.6+j*.8,mvr=p(u,a,a+.6),fall=p(u,a+.6,a+1.2),
    bob=4*Math.sin(t*1.6+j+1)*(1-mvr),x=hx+40*mvr,y=ys+bob+40*fall;
    b.setAttribute('fill',S);b.setAttribute('stroke',u>=a?L:I);place(b,x,y,bv*(1-fall))});

  R('cb7',TM.checklist);
  [TM.question_one,TM.question_two,TM.question_three].forEach((a,i)=>{rise(RW7[i],p(u,a,a+.5));const k=p(u,a+2,a+2.4);TK7[i][0].setAttribute('opacity',k);TK7[i][1].setAttribute('opacity',k)});

  const s8=SC[8][0]/K;R('qa8',s8+.3);R('qb8',s8+3.4);R('qc8',s8+4.2);R('ic8',s8+1);
  $('cn8').setAttribute('transform','translate(0 '+(6*Math.sin(t*2)).toFixed(1)+')');