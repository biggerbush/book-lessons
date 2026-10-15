const R=(e,a,d=.5)=>rise(typeof e==='string'?$(e):e,p(u,a,a+d));

  R('door',TM.closed_door);
  const op=p(u,TM.closed_door+4.6,TM.closed_door+5.6);
  $('panel').setAttribute('width',(200-150*op).toFixed(1)); $('knob').setAttribute('cx',(1410-150*op).toFixed(1));
  $('rings').setAttribute('opacity',((1-op)*p(u,TM.closed_door+1,TM.closed_door+1.4)*(.5+.5*Math.sin(t*8))).toFixed(2));

  R('warm',TM.small_circle); $('warmring').style.stroke=u>=TM.small_circle+2.5?'var(--loss)':'';
  CD.forEach((c,i)=>{const a=TM.huge_crowd+(i%10)*.08; c.setAttribute('opacity',p(u,a,a+.4))});
  LI.forEach((k,j)=>{const a=TM.huge_crowd+1+j*.5,on=u>=a+.3; LN[j].setAttribute('opacity',p(u,a,a+.3)); CD[k].setAttribute('fill',on?'var(--gain)':'var(--muted)'); CD[k].setAttribute('r',on?16:12)});
  R('chan',TM.huge_crowd+.8); R('far',TM.huge_crowd+5.8);

  R('list',TM.contact_list);
  ROWS.forEach((g,i)=>{const a=TM.contact_list+.4+i*.2,k=p(u,a,a+.4); rise(g,(i==1||i==4)?k*(1-.65*p(u,TM.target_icon+1.5,TM.target_icon+2)):k)});
  R('targ',TM.target_icon);
  AIM.forEach((a,j)=>a.setAttribute('opacity',p(u,TM.target_icon+1+j*.3,TM.target_icon+1.4+j*.3)));
  BADX.forEach(b=>b.setAttribute('opacity',p(u,TM.target_icon+1.5,TM.target_icon+2)));
  SRC.forEach((g,i)=>R(g,TM.target_icon+5.8+i*.6));

  PL.forEach((g,i)=>R(g,TM.inbox_pile+i*.15,.4)); R('ign',TM.inbox_pile+2);
  R('prof',TM.magnifier);
  const m1=p(u,TM.magnifier+2.6,TM.magnifier+3.4);
  $('mag').setAttribute('transform',`translate(${(800+175*m1+6*Math.sin(t*2)*(1-m1)).toFixed(1)} ${(370+320*m1+4*Math.sin(t*2.6)).toFixed(1)})`);
  $('mag').setAttribute('opacity',p(u,TM.magnifier+.2,TM.magnifier+.7));
  [0,1,2].forEach(i=>R('sp'+i,TM.magnifier+3.3+i*1.2));
  R('rep',TM.reply_bubble); R('meter',TM.reply_bubble+.6);
  $('mfill').setAttribute('width',(400*p(u,TM.reply_bubble+.8,TM.reply_bubble+2.6)).toFixed(1));

  R('me4',SC[4][0]/K+.3); R('them4',SC[4][0]/K+.6);
  $('qm').setAttribute('opacity',(p(u,SC[4][0]/K+.6,SC[4][0]/K+1.1)*(1-p(u,TM.handshake,TM.handshake+.4))).toFixed(2));
  R('pitch',TM.gift_box);
  $('pstrike').setAttribute('x2',(175+300*p(u,TM.gift_box+1.6,TM.gift_box+2.2)).toFixed(1)); $('pstrike').setAttribute('opacity',u>=TM.gift_box+1.6?1:0);
  const gk=p(u,TM.gift_box+4.9,TM.gift_box+6.4), GA=TM.gift_box+6.4;
  $('gift').setAttribute('transform',`translate(${(420+730*gk).toFixed(1)} ${(470-70*Math.sin(Math.PI*gk)).toFixed(1)})`);
  $('gift').setAttribute('opacity',p(u,TM.gift_box+2.4,TM.gift_box+2.9));
  $('garrow').setAttribute('opacity',p(u,TM.gift_box+4.5,TM.gift_box+5.1));
  TH.forEach(e=>e.setAttribute('fill',u>=TM.handshake?'var(--gain)':'var(--ink)'));
  R('trust',Math.min(TM.handshake,GA-.3));
  $('tfill').setAttribute('width',(480*(.4*p(u,GA,GA+.8)+.6*p(u,TM.handshake+.4,TM.handshake+2))).toFixed(1));
  R('earn',TM.handshake+1);

  R('cal',TM.calendar); R(TC[0],TM.calendar+.3); R('first',TM.calendar+.8);
  TC.slice(1).forEach((g,i)=>R(g,TM.stack_notes+i*.9));
  R(ANS,TM.stack_notes+4); R('clear',TM.stack_notes+4.6);

  R('bk',TM.bookkeeper); R('rA',TM.bookkeeper+1); R('rB',TM.new_location);
  $('pin').setAttribute('transform',`translate(0 ${(-8*Math.abs(Math.sin(t*3))).toFixed(1)})`);
  R('msg',TM.free_guide); R('help',TM.free_guide+6.2);

  R('fun',TM.funnel);
  FL.forEach((c,i)=>{const k=(t*.4+i/8)%1,x0=200+i*57; c.setAttribute('cx',(400+(x0-400)*(1-k)).toFixed(1)); c.setAttribute('cy',(300+250*k).toFixed(1)); c.setAttribute('opacity',((1-k)*.9).toFixed(2))});
  R('resp',TM.funnel+2.6);
  R('dial',TM.dial_up);
  const dv=p(u,TM.dial_up+.3,TM.dial_up+2.3),th=(-120+240*dv)*Math.PI/180,ex=900+130*Math.sin(th),ey=470-130*Math.cos(th);
  $('darc').setAttribute('d',`M787.4 535A130 130 0 ${240*dv>180?1:0} 1 ${ex.toFixed(1)} ${ey.toFixed(1)}`);
  $('ndl').setAttribute('x2',(900+100*Math.sin(th)).toFixed(1)); $('ndl').setAttribute('y2',(470-100*Math.cos(th)).toFixed(1));
  R('ver',TM.dial_up+.6);
  VB.forEach((b,i)=>b.setAttribute('width',(350*[.3,.6,.9][i]*p(u,TM.dial_up+1+i*.8,TM.dial_up+1.6+i*.8)).toFixed(1)));
  R('team',TM.team_bots); TMG.forEach((g,i)=>R(g,TM.team_bots+.3+i*.25,.4));

  R('qa',TM.ten_messages); R('qb',TM.ten_messages+.4); R('qc',TM.ten_messages+.8);
  EN.forEach((g,i)=>R(g,TM.ten_messages+1.6+i*.2,.4));
  CK.forEach((g,i)=>R(g,TM.ten_messages+6.8+i*.25,.3)); R('fu',TM.ten_messages+6.6);