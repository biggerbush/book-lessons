const dr=(id,k)=>$(id).setAttribute('stroke-dashoffset',R(1-k));

  $('rp0').setAttribute('d',RD(1320,522,1.3,t*7));
  rise($('run0'),p(u,TM.title_runner,TM.title_runner+.6)); rise($('modes'),p(u,TM.title_runner+5,TM.title_runner+5.6));
  $('pill').setAttribute('transform','translate(0 '+R(8*Math.sin(t*1.5))+')');

  rise($('tm'),p(u,TM.treadmill,TM.treadmill+.5)); $('rp1').setAttribute('d',RD(330,530,1,t*8)); $('belt').setAttribute('stroke-dashoffset',R(t*80));
  $('cnt').textContent=Math.round(120000*p(u,TM.treadmill+.3,TM.treadmill+1.8)).toLocaleString('en-US')+'+';
  rise($('cax'),p(u,TM.fitness_chart,TM.fitness_chart+.5));
  BR.forEach((b,i)=>{const a=TM.fitness_chart+.3+i*.3; rise(b,p(u,a,a+.4))});
  rise($('smoke'),p(u,TM.cigarette,TM.cigarette+.5));
  const ak=p(u,TM.cigarette+4.9,TM.cigarette+6.2); dr('ap',ak); $('ah').setAttribute('opacity',ak>.95?1:0);
  rise($('drop'),p(u,TM.cigarette+5.4,TM.cigarette+6));

  rise($('stairs'),p(u,TM.couch,TM.couch+.5)); rise($('couchg'),p(u,TM.couch+.2,TM.couch+.7)); rise($('riskg'),p(u,TM.couch+.4,TM.couch+.9));
  const ck=p(u,TM.step_up,TM.step_up+1.4);
  $('climb').setAttribute('transform','translate('+R(275+185*ck)+' '+R(655-35*ck-90*Math.sin(Math.PI*ck))+')');
  const rh=428*(1-.5*p(u,TM.step_up+.6,TM.step_up+1.8)); $('riskf').setAttribute('y',R(734-rh)); $('riskf').setAttribute('height',R(rh));
  rise($('bigdrop'),p(u,TM.step_up+1.6,TM.step_up+2.1)); rise($('ath'),p(u,TM.step_up+8.1,TM.step_up+8.7));

  rise($('bike'),p(u,TM.cyclist,TM.cyclist+.5));
  let rd='M290 486L395 428L465 482';
  [0,Math.PI].forEach(k=>{const fx=330+28*Math.cos(t*4+k),fy=620+28*Math.sin(t*4+k); rd+='M290 486L'+R((290+fx)/2+34)+' '+R((486+fy)/2-14)+'L'+R(fx)+' '+R(fy)});
  $('rider').setAttribute('d',rd);
  rise($('bub'),p(u,TM.talk_bubble,TM.talk_bubble+.5)); rise($('cell'),p(u,TM.mitochondria,TM.mitochondria+.5));
  MI.forEach((g,i)=>{const q=MP[i],a=TM.mitochondria+.4+i*.3; g.setAttribute('opacity',R(p(u,a,a+.4))); g.setAttribute('transform','translate('+(960+q[0])+' '+(440+q[1])+') rotate('+q[2]+') scale('+(1+.06*Math.sin(t*3+i)).toFixed(3)+')')});
  rise($('clk'),p(u,TM.clock,TM.clock+.5));
  const wk=p(u,TM.clock+.3,TM.clock+1.6),wa=Math.PI/2*wk;
  $('wedge').setAttribute('d','M1330 370L1330 280A90 90 0 0 1 '+R(1330+90*Math.sin(wa))+' '+R(370-90*Math.cos(wa))+'Z');
  $('hand').setAttribute('transform','rotate('+R(90*wk)+' 1330 370)');
  BK.forEach((g,i)=>{const a=TM.clock+2+i*.35; rise(g,p(u,a,a+.4))});

  rise($('gauge'),p(u,TM.oxygen_gauge,TM.oxygen_gauge+.5));
  const gk=p(u,TM.oxygen_gauge+.4,TM.oxygen_gauge+1.8); dr('garc',gk);
  $('needle').setAttribute('transform','rotate('+R(-90+176*gk+2*gk*Math.sin(t*6))+' 380 520)');
  rise($('hillg'),p(u,TM.hill,TM.hill+.5)); rise($('chart'),p(u,TM.decline_line,TM.decline_line+.5));
  dr('l1',p(u,TM.decline_line+.4,TM.decline_line+1.9)); dr('l2',p(u,TM.decline_line+2,TM.decline_line+3.5));
  rise($('room'),p(u,TM.decline_line+3.3,TM.decline_line+3.9));

  rise($('sw'),p(u,TM.stopwatch,TM.stopwatch+.5)); $('swh').setAttribute('transform','rotate('+R((t*90)%360)+' 290 460)');
  rise($('ilg'),p(u,TM.intervals,TM.intervals+.5));
  IV.forEach((r,i)=>{const a=TM.intervals+.4+i*.35; rise(r,p(u,a,a+.35))});
  rise($('cal'),p(u,TM.calendar,TM.calendar+.5));

  rise($('bottle'),p(u,TM.pill_bottle,TM.pill_bottle+.5)); rise($('lt'),p(u,TM.pill_bottle+1.5,TM.pill_bottle+2)); rise($('body'),p(u,TM.pill_bottle+2,TM.pill_bottle+2.6));
  [0,1,2].forEach(i=>{const a=TM.body_map+i*1.2; rise($('mk'+i),p(u,a,a+.5))});
  $('hrt').setAttribute('r',R(20+5*Math.pow(Math.abs(Math.sin(t*3)),6)));
  rise($('medi'),p(u,TM.body_map+5,TM.body_map+5.6));

  TL.forEach((g,i)=>{const a=TY[i]=='h'?TM.progress_bar:TM.sneakers+i*.25; rise(g,p(u,a,a+.4))});
  const vk=p(u,TM.progress_bar+.5,TM.progress_bar+6); dr('cv',vk);
  DT.forEach((c,i)=>c.setAttribute('opacity',vk>=DF[i]?1:0));
  rise($('rlab'),p(u,TM.progress_bar+.5,TM.progress_bar+1)); rise($('sgain'),p(u,TM.progress_bar+4.6,TM.progress_bar+5.2));

  const b8=SC[8][0]/K;
  rise($('qa'),p(u,b8+.4,b8+.9)); rise($('qb'),p(u,b8+.8,b8+1.3)); rise($('qc'),p(u,b8+1.2,b8+1.7));
  rise($('cal8'),p(u,b8+2,b8+2.5)); CB.forEach((g,i)=>{const a=b8+2.6+i*.4; rise(g,p(u,a,a+.4))});
  rise($('qd'),p(u,b8+6.6,b8+7.2));