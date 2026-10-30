u0=u;
  sh('doc',TM.doctor);sh('bone',TM.doctor+.8);sh('band',TM.doctor+1.6);sh('clk',TM.clock);
  const ca=-1440*p(u,TM.clock,TM.clock+3);$('ch1').setAttribute('transform',`rotate(${ca.toFixed(1)} 1370 300)`);$('ch2').setAttribute('transform',`rotate(${(ca/12).toFixed(1)} 1370 300)`);

  sh('tl',TM.three_eras);sh('col',TM.ancient_greek);sh('jars',TM.fluid_jars);sh('obs',TM.fluid_jars+4);
  JF.forEach((f,i)=>{const h=cl(110+70*Math.sin(t*1.5+i*1.7),30,206);f.setAttribute('y',(694-h).toFixed(1));f.setAttribute('height',h.toFixed(1))});

  sh('pn0',TM.microscope);$('germs').setAttribute('transform',`translate(${(3*Math.sin(t*3)).toFixed(1)} ${(3*Math.cos(t*2.3)).toFixed(1)})`);
  sh('pn1',TM.pill_bottle);
  const ak=p(u,TM.ambulance,TM.ambulance+.8);rise($('pn2'),ak);$('amb').setAttribute('transform',`translate(${(60*(1-ak)).toFixed(1)} 0)`);
  $('siren').style.fill=Math.sin(t*8)>0?'var(--loss)':'var(--gain)';sh('emg',TM.ambulance+1.5);

  sh('house',TM.house_fire-.4);const fk=p(u,TM.house_fire+.3,TM.house_fire+.9);rise($('flames'),fk);
  FL.forEach((f,i)=>{const sy=f.k*(1+.14*Math.sin(t*9+i*2.1)),sx=f.k*(1+.07*Math.sin(t*7+i*1.3)),sk=4*Math.sin(t*5+i);
    f.g.setAttribute('transform',`translate(${f.x} ${f.y}) skewX(${sk.toFixed(1)}) scale(${sx.toFixed(3)} ${sy.toFixed(3)})`)});
  SMK.forEach((s,i)=>{const c=((t*.45+i/3)%1+1)%1;s.setAttribute('cx',(372+70*c).toFixed(1));s.setAttribute('cy',(248-48*c).toFixed(1));s.setAttribute('r',(9+11*c).toFixed(1));s.setAttribute('opacity',(.45*(1-c)).toFixed(2))});
  ['win0','win1'].forEach(w=>$(w).style.fill=fk>.5?'var(--gain)':'var(--stage)');sh('brig',TM.house_fire+2);
  sh('axes',TM.calendar);$('dz').setAttribute('stroke-dashoffset',(1-p(u,TM.calendar+.3,TM.calendar+4.5)).toFixed(3));
  sh('quiet',TM.calendar+1.5);sh('symp',TM.calendar+4.9);$('dmg').setAttribute('opacity',p(u,TM.calendar+5,TM.calendar+6));sh('dmgT',TM.calendar+5.5);

  sh('tube',TM.blood_test);sh('zone',TM.threshold);sh('pat',TM.patient);
  TPL.setAttribute('stroke-dashoffset',(1-p(u,TM.down_arrow,TM.down_arrow+2.4)).toFixed(3));
  TD.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.down_arrow+i*.35,TM.down_arrow+i*.35+.3)));sh('slide',TM.down_arrow+2.5);

  sh('shld',TM.shield);const fl=Math.max(.02,p(u,TM.shield,TM.shield+.8));$('shIn').setAttribute('transform',`translate(300 0) scale(${fl.toFixed(3)} 1) translate(-300 0)`);
  FP.forEach((e,i)=>e.setAttribute('opacity',p(u,TM.fingerprint+i*.25,TM.fingerprint+i*.25+.4)));sh('fpl',TM.fingerprint+1.6);
  sh('mapc',TM.map);$('route').setAttribute('stroke-dashoffset',(1-p(u,TM.map+.5,TM.map+3)).toFixed(3));
  [0,1,2].forEach(i=>sh('pin'+i,TM.map+.6+i*1.1,.4));

  sh('scl',TM.scales);const dy=60*p(u,TM.scales+4.2,TM.scales+5.5);
  $('beam').setAttribute('transform',`rotate(${(Math.atan2(dy,220)*180/Math.PI).toFixed(2)} 500 330)`);
  $('panL').setAttribute('transform',`translate(280 ${(330-dy).toFixed(1)})`);$('panR').setAttribute('transform',`translate(720 ${(330+dy).toFixed(1)})`);
  sh('cost',TM.scales+4.2);sh('stp',TM.early_step);
  const wk=p(u,TM.early_step+.8,TM.early_step+2),wx=ST[0][0]+(ST[1][0]-ST[0][0])*wk,wy=ST[0][1]+(ST[1][1]-ST[0][1])*wk-40*Math.sin(Math.PI*wk);
  WK.setAttribute('transform',`translate(${wx.toFixed(1)} ${(wy-6).toFixed(1)})`);

  sh('whl',TM.steering);$('whr').setAttribute('transform',`rotate(${(20*Math.sin(t*.8)).toFixed(1)} 340 470)`);
  sh('hands',TM.sneakers);[0,1,2].forEach(i=>sh('t'+i,TM.sneakers+.6+i*.6));
  sh('coach',TM.coach);$('you7').setAttribute('transform',`translate(0 ${(-10*Math.abs(Math.sin(t*4))).toFixed(1)})`);sh('cap7',TM.coach+1.2);

  const s8=SC[8][0]/K;sh('ask',s8+.4);sh('gfx',s8+.8);sh('qa',s8+1.4);sh('qb',s8+1.8);sh('qc',s8+2.2);
  $('ring').setAttribute('r',(28+4*Math.sin(t*3)).toFixed(1));