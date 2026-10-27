const f0=.02+.58*p(t,.6,3.4),q0=pt0(f0),hop=60*Math.sin(Math.PI*cl((f0-.22)/.16));
  $('walk0').setAttribute('cx',q0.x.toFixed(1));$('walk0').setAttribute('cy',(q0.y-24-hop).toFixed(1));
  W0[0].style.fill=f0>.38?'var(--line)':'var(--ink)'; rise(W0[1],p(t,TM.road+3.6,TM.road+4.2));

  const fl=TM.finish_line,nw=TM.new_wall,bp=TM.backpack;
  $('rn1').setAttribute('transform',`translate(${(200*p(u,fl,fl+4)).toFixed(1)} ${(-4*Math.abs(Math.sin(t*6))).toFixed(1)})`);
  rise($('fin1'),p(u,fl,fl+.5)*(1-.7*p(u,fl+4.6,fl+6))*(1-p(u,nw-.4,nw+.1)));
  $('fin1i').setAttribute('transform',`translate(${(260*p(u,fl+4.6,fl+6)).toFixed(1)} 0)`);
  WL1.forEach((w,i)=>rise(w,p(u,nw+i*.6,nw+i*.6+.4)));
  rise($('pk1'),p(u,bp,bp+.5)); rise($('pack1'),p(u,bp+.5,bp+1.1));

  const od=TM.odysseus,sh=TM.ship,st=TM.storm;
  rise($('troy2'),p(u,od,od+.5)); rise($('tl0g'),p(u,od+.5,od+1)); rise($('ship2w'),p(u,od+1,od+1.5));
  rise($('rt2'),p(u,sh,sh+.5)); rise($('ith2'),p(u,sh,sh+.5)); rise($('tl1g'),p(u,sh,sh+.5));
  const back=u>st?.08*Math.max(0,Math.sin((u-st)*1.8))*(1-p(u,st+6.4,st+7.2)):0, f2=cl(p(u,sh+1,st+7.5)-back), q2=rp2.getPointAtLength(f2*L2);
  $('ship2').setAttribute('transform',`translate(${q2.x.toFixed(1)} ${q2.y.toFixed(1)}) rotate(${(4*Math.sin(t*2)).toFixed(1)})`);
  $('tl1').setAttribute('width',(650*f2).toFixed(1));
  CL2.forEach((g,i)=>rise(g,p(u,st+i*.5,st+i*.5+.4))); rise($('fin2'),p(u,st+7.2,st+7.8));

  const hm=TM.hammer,ca=TM.calendar;
  rise($('L3'),p(u,hm,hm+.5));
  const ang=u>hm+.5?-25+35*Math.abs(Math.cos((u-hm-.5)*2.4)):10;
  $('hm3').setAttribute('transform',`translate(650 660) rotate(${ang.toFixed(1)})`);
  ck3.setAttribute('stroke-dashoffset',(CK3*(1-p(u,hm+1,hm+4))).toFixed(1));
  rise($('R3'),p(u,ca,ca+.5));
  const cyc=Math.max(0,(u-ca-.6)/3),n3=Math.floor((cyc%1)*13),yr=Math.floor(cyc);
  CC3.forEach((c,i)=>c.style.fill=(u>ca+.6&&i<n3)?'var(--gain)':'var(--stage)');
  YD3.forEach((d,i)=>d.style.fill=i<yr?'var(--gain)':'var(--line)');
  rise($('tg3'),p(u,ca+5.4,ca+6)); rise($('f3'),p(u,ca+8.8,ca+9.4));

  [TM.eye,TM.hands,TM.heart].forEach((a,i)=>rise($('t4'+i),p(u,a,a+.5)));
  const bt=1+.08*Math.pow(Math.abs(Math.sin(t*3.5)),6);
  $('hr4').setAttribute('transform',`translate(1040 640) scale(${bt.toFixed(3)}) translate(-1040 -640)`);
  LK4.forEach(l=>{l.setAttribute('opacity',p(u,TM.heart+4.5,TM.heart+5.2));l.setAttribute('stroke-dashoffset',(-t*30).toFixed(1))});
  rise($('os4'),p(u,TM.heart+4.8,TM.heart+5.4));

  rise($('db5'),p(u,TM.dumbbell,TM.dumbbell+.5));
  $('db5i').setAttribute('transform',`translate(0 ${(-18*Math.abs(Math.sin(t*2.5))).toFixed(1)})`);
  ST5.forEach((s,i)=>rise(s,p(u,TM.ladder+i*1.2,TM.ladder+i*1.2+.4)));
  rise($('cl5'),p(u,TM.dumbbell+.3,TM.dumbbell+.8));
  const kc=3*p(u,TM.ladder+.3,TM.ladder+4)-1,xc=kc<0?670+200*kc:670+300*kc,sc5=1+.1*(kc+1);
  CB5.setAttribute('transform',`translate(${xc.toFixed(1)} ${(640-120*kc).toFixed(1)}) scale(${sc5.toFixed(3)})`);
  rise($('fn5'),p(u,TM.ladder+3.8,TM.ladder+4.4));

  const sd=TM.seed,sr=TM.sunrise,dr=TM.open_door,kb=p(u,sd+.4,sd+1.4);
  BK6.forEach((b,i)=>{const r=RB6[i],y0=590-i*52;b.setAttribute('transform',`translate(${(r[0]*kb).toFixed(1)} ${((r[1]-y0)*kb).toFixed(1)}) rotate(${(r[2]*kb).toFixed(1)} 300 ${y0+25})`)});
  rise($('sd6'),p(u,sd+1.6,sd+2)); $('stem6').setAttribute('y2',(630-80*p(u,sd+2,sd+3.2)).toFixed(1));
  rise($('lv6'),p(u,sd+3,sd+3.5)); rise($('acc6'),p(u,sd+4.9,sd+5.4));
  $('sun6').setAttribute('transform',`translate(0 ${(-220*p(u,sr,sr+2)).toFixed(1)})`);
  $('rays6').setAttribute('opacity',p(u,sr+1.5,sr+2.2)); $('rays6').setAttribute('transform',`rotate(${(t*10%360).toFixed(1)} 900 760)`);
  rise($('sr6'),p(u,sr+1,sr+1.6));
  rise($('dr6'),p(u,dr,dr+.5));
  $('dp6').setAttribute('transform',`translate(1200 0) scale(${(1-.75*p(u,dr+.5,dr+1.7)).toFixed(3)} 1) translate(-1200 0)`);
  rise($('pth6'),p(u,dr+1,dr+1.6)); rise($('cp6'),p(u,dr+1.2,dr+1.8));

  const nb=TM.notebook,pn=TM.pen,R7=[nb+.3,pn,pn+4.6];
  rise($('nb7'),p(u,nb,nb+.5));
  const k7=SC7.map((s,i)=>{const a=R7[i],k=p(u,a+.5,a+3);rise($('r7'+i),p(u,a,a+.4));s[0].setAttribute('stroke-dashoffset',(s[1]*(1-k)).toFixed(1));return k});
  const ix=u<R7[2]+.5?1:2;
  rise($('pn7'),p(u,pn,pn+.4));
  $('pn7i').setAttribute('transform',`translate(${(340+800*k7[ix]).toFixed(1)} ${(SC7[ix][2]-6+5*Math.sin(t*14)).toFixed(1)})`);
  rise($('ar7'),p(u,R7[2]+3,R7[2]+3.6));

  const qq=TM.question;
  rise($('qa'),p(u,qq,qq+.5)); rise($('qb'),p(u,qq+.4,qq+.9)); rise($('gr8'),p(u,qq+.8,qq+1.3));
  rise($('qc'),p(u,qq+3,qq+3.5)); rise($('qd'),p(u,qq+3.4,qq+3.9));
  const c8=(t%2.4)/2.4,i8=Math.min(2,Math.floor(c8*3)),f8=c8*3-i8,s8=i8+f8;
  $('dt8').setAttribute('cx',(1200+80*s8).toFixed(1)); $('dt8').setAttribute('cy',(780-70*s8-22-40*Math.sin(Math.PI*f8)).toFixed(1));