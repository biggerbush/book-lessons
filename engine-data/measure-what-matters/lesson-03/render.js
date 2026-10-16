const S=(id,a)=>rise($(id),p(u,a,a+.5));
  const f0=TM.juggler+3.4;
  BL.forEach((b,i)=>{const a=i/20*Math.PI*2+u*1.6,f=p(u,f0+i*.04,f0+i*.04+.7),ox=1290+170*Math.cos(a),oy=380+110*Math.sin(a);
    b.setAttribute('cx',(ox+(1110+i*18-ox)*f).toFixed(1));b.setAttribute('cy',(oy+(727-oy)*f).toFixed(1));b.setAttribute('opacity',p(u,TM.juggler+i*.03,TM.juggler+i*.03+.3))});

  S('lst',TM.goal_list);RW.forEach((r,i)=>rise(r,p(u,TM.goal_list+i*.15,TM.goal_list+i*.15+.3)));
  $('rows').setAttribute('opacity',1-.6*p(u,TM.spotlight,TM.spotlight+1));
  S('spot',TM.spotlight);FB.forEach((g,i)=>rise(g,p(u,TM.five_fingers+i*.25,TM.five_fingers+i*.25+.4)));S('five',TM.five_fingers+1.4);

  S('cards',SC[2][0]/K+.2);
  ST.forEach((s,i)=>{const k=p(u,TM.crossed_out+i*.4,TM.crossed_out+.5+i*.4);s.setAttribute('x2',(130+500*k).toFixed(1));DG[i].setAttribute('opacity',(1-.6*k).toFixed(2))});
  S('hurt',TM.crossed_out+2.6);S('scl',TM.scale);
  const th=.18*p(u,TM.scale+.6,TM.scale+1.6),bx=280*Math.cos(th),by=280*Math.sin(th);
  $('beam').setAttribute('x1',1120-bx);$('beam').setAttribute('y1',380+by);$('beam').setAttribute('x2',1120+bx);$('beam').setAttribute('y2',380-by);
  $('panL').setAttribute('transform',`translate(${(1120-bx).toFixed(1)} ${(380+by).toFixed(1)})`);
  $('panR').setAttribute('transform',`translate(${(1120+bx).toFixed(1)} ${(380-by).toFixed(1)})`);

  S('cal',TM.calendar);S('ci',TM.calendar+1);S('cm',TM.rival_chip);S('tag',TM.rival_chip+2);S('note',TM.warning_note);S('cust',TM.warning_note+.5);
  CF.forEach((f,i)=>{const a=TM.warning_note+1+(i-3)*.3,d=i>=3?330*p(u,a,a+1.2):0;f.g.setAttribute('transform',`translate(${(CX[i]+d).toFixed(1)} 0)`);
    f.e.forEach(e=>e.setAttribute('class',i>=3&&u>=a+.4?'loss':'ink'))});
  S('drift',TM.warning_note+1);S('lose',TM.warning_note+2.4);

  S('meet',TM.meeting);S('tg',TM.target);
  const dk=p(u,TM.target+.3,TM.target+1);$('dart').setAttribute('transform',`translate(${(820+200*(1-dk)).toFixed(1)} ${(450-200*(1-dk)).toFixed(1)})`);$('dart').setAttribute('opacity',dk>0?1:0);
  S('numg',TM.target+.5);$('num').textContent=Math.round(2000*p(u,TM.target+.5,TM.target+1.8)).toLocaleString('en-US');
  S('gd',TM.new_gadget);$('dchip').setAttribute('opacity',p(u,TM.new_gadget+1,TM.new_gadget+1.5));S('gdl',TM.new_gadget+.8);

  const cv=p(u,TM.one_team,TM.one_team+1.2);S('tg5',TM.sales_team);
  RG.forEach((g,i)=>{const a=TM.sales_team+i*.4,y=RY0[i]+(RY1[i]-RY0[i])*cv;rise(g,p(u,a,a+.5));RI[i].setAttribute('transform',`translate(0 ${y.toFixed(1)})`);
    BX[i].setAttribute('opacity',1-cv);AR[i].setAttribute('d',`M510 ${y.toFixed(1)}L790 460`);AR[i].setAttribute('opacity',p(u,a+.3,a+.8))});
  S('team',TM.one_team+.8);S('shd',TM.shield);['w0','w1','w2','w3'].forEach((w,i)=>S(w,TM.shield+1+i*.6));

  const g6=p(u,TM.counter,TM.counter+2);$('bar').setAttribute('y',(760-500*g6).toFixed(1));$('bar').setAttribute('height',(500*g6).toFixed(1));
  S('tgl',TM.counter);S('cntg',TM.counter);$('cnt').textContent='~'+Math.round(2500*g6).toLocaleString('en-US');
  S('pc',TM.ibm_pc);S('rkt',TM.rocket);
  const rp=p(u,TM.rocket+.3,TM.rocket+2.5),ri=Math.floor(rp*60);
  let pt={x:RS[0][0],y:RS[0][1]};try{pt=RP.getPointAtLength(RL*rp)}catch(e){pt={x:RS[ri][0],y:RS[ri][1]}}
  let tp='';for(let i=0;i<=ri;i++)tp+=RS[i][0].toFixed(1)+','+RS[i][1].toFixed(1)+' ';tp+=pt.x.toFixed(1)+','+pt.y.toFixed(1);
  $('rtrail').setAttribute('points',tp);
  $('rk').setAttribute('transform',`translate(${pt.x.toFixed(1)} ${(pt.y-12).toFixed(1)})`);

  S('mg',SC[7][0]/K+.2);S('mgl',TM.magnifier);
  const mk7=p(u,TM.magnifier+.3,TM.magnifier+1.5);
  $('mgl').setAttribute('transform',`translate(${(230+180*mk7).toFixed(1)} ${(330+120*mk7).toFixed(1)})`);
  $('tdot').setAttribute('r',(14+10*mk7).toFixed(1));S('mlab',TM.magnifier+1.5);
  PL.forEach((g,i)=>rise(g,p(u,TM.few_blocks+i*.3,TM.few_blocks+i*.3+.4)));PB.forEach((g,i)=>rise(g,p(u,TM.few_blocks+1+i*.3,TM.few_blocks+1.4+i*.3)));
  S('fbl',TM.few_blocks+2);S('dr',TM.young_doerr);

  const S8=SC[8][0]/K;S('qa',S8+.3);S('qb',S8+.7);S('l8',S8+1.2);
  EL.forEach((e,i)=>e.setAttribute('opacity',p(u,S8+1.8+i*.4,S8+2.2+i*.4)));
  S('qc',S8+5.4);N8.forEach(l=>l.setAttribute('stroke',u>=S8+6?'var(--loss)':'var(--line)'));S('tl8',S8+6.5);