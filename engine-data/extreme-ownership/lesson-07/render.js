const a0=TM.alarm_clock,ph=t%4,sh=ph<1.2?Math.sin(t*40)*5*(1-ph/1.2):0;
  $('clk').setAttribute('opacity',p(u,a0,a0+.6));tr($('clk'),1280,400,` rotate(${sh.toFixed(2)})`);
  $('rings').setAttribute('opacity',ph<1.2?1:0);$('clkh').setAttribute('transform',`rotate(${((t*30)%360).toFixed(1)})`);

  const q=TM.quote_card,cg=p(u,q+2.2,q+2.7),op=p(u,q+6.4,q+7.4);
  rise($('jk'),p(u,TM.jocko,TM.jocko+.5));rise($('qc'),p(u,q,q+.5));rise($('cage'),cg);rise($('lb1'),cg);
  $('cbars').setAttribute('opacity',(cg*(1-.6*op)).toFixed(2));$('cbars').style.stroke=op>.5?'var(--gain)':'var(--ink)';
  $('walker').setAttribute('opacity',cg);
  const bob=op>.5?-8*Math.abs(Math.sin(t*3)):0;
  tr($('walker'),710,(580+bob).toFixed(1));WK.forEach(e=>e.setAttribute('class',op>.5?'gain':'ink'));
  rise($('lb2'),p(u,q+6.6,q+7.1));

  const hm=p(u,TM.humvee,TM.humvee+1.4),b=TM.building,cz=p(u,TM.chaos_cloud,TM.chaos_cloud+.8);
  $('hv').setAttribute('opacity',p(u,TM.humvee,TM.humvee+.4));tr($('hv'),(-300*(1-hm)).toFixed(1),0);
  rise($('bld'),p(u,b,b+.5));$('route').setAttribute('opacity',p(u,b+.5,b+1));
  WN.forEach((w,i)=>{w.setAttribute('fill',u>=b+.6+i*.3?'var(--gain)':'var(--stage)');w.setAttribute('stroke',cz>.5?'var(--loss)':'var(--ink)')});
  ST.forEach((g,i)=>rise(g,p(u,b+1+i*.8,b+1.4+i*.8)));
  let cd='';for(let a=0;a<=60;a++){const th=a*.55,rr=1+.25*Math.sin(a*1.7+t*3);cd+=(a?'L':'M')+(1000+210*rr*Math.cos(th)).toFixed(0)+' '+(470+170*rr*Math.sin(th*1.3)).toFixed(0)}
  $('chaos').setAttribute('d',cd);$('chaos').setAttribute('opacity',cz);rise($('czt'),p(u,TM.chaos_cloud+1,TM.chaos_cloud+1.6));

  const k=TM.checklist,h=TM.headcount,sw=TM.stopwatch;
  rise($('p0'),p(u,k,k+.5));CK.forEach((c,i)=>c.setAttribute('opacity',p(u,k+.6+i*.4,k+.9+i*.4)));
  rise($('p1'),p(u,h,h+.5));BG.forEach((c,i)=>c.setAttribute('opacity',p(u,h+.6+i*.3,h+.8+i*.3)));
  rise($('p2'),p(u,sw,sw+.5));$('sw').setAttribute('transform',`rotate(${((u*240)%360).toFixed(1)} 1270 470)`);
  SWC.forEach((c,i)=>{rise(c[0],p(u,sw+.6+i*.5,sw+1+i*.5));c[1].setAttribute('stroke',u>=sw+3?'var(--gain)':'var(--ink)')});

  const s4=SC[4][0]/K,e0=p(u,s4+.6,s4+1.6),e1=p(u,TM.speed_arrow,TM.speed_arrow+1.2),od=TM.open_door;
  rise($('a0'),p(u,s4+.4,s4+.8));$('ar0').setAttribute('d',`M120 330H${(144+376*e0).toFixed(1)}m-24-24l24 24-24 24`);
  rise($('a1'),p(u,TM.speed_arrow,TM.speed_arrow+.4));$('ar1').setAttribute('d',`M120 450H${(144+1296*e1).toFixed(1)}m-24-24l24 24-24 24`);
  rise($('bar'),p(u,s4+.6,s4+1.1));const w=1360-980*p(u,od,od+1.5);
  $('bk').setAttribute('width',w.toFixed(1));$('bkt').setAttribute('x',(120+w/2).toFixed(1));
  $('fr').setAttribute('x',(120+w).toFixed(1));$('fr').setAttribute('width',(1360-w).toFixed(1));
  $('frt').setAttribute('x',(120+w+(1360-w)/2).toFixed(1));$('frt').setAttribute('opacity',p(u,od+1,od+1.6));
  rise($('fd'),p(u,od+6.2,od+6.8));

  const sr=TM.sunrise,dbt=TM.dumbbell;
  rise($('sky'),p(u,sr,sr+.5));$('sun').setAttribute('cy',(640-180*p(u,sr,sr+2.5)).toFixed(1));
  rise($('ch'),p(u,sr+5,sr+5.5));$('snz').setAttribute('opacity',1-.6*p(u,sr+6.5,sr+7));
  rise($('db'),p(u,dbt,dbt+.5));tr($('dbi'),0,(-20*Math.abs(Math.sin(t*2))).toFixed(1));
  BR.forEach((r,i)=>r.setAttribute('opacity',p(u,dbt+.3+i*.12,dbt+.5+i*.12)));rise($('lbB'),p(u,dbt+2.6,dbt+3.1));

  const sc=TM.scale,amp=7*(1-p(u,TM.seesaw,TM.follower+1.5));
  rise($('fulc'),p(u,sc,sc+.5));$('beam').setAttribute('opacity',p(u,sc,sc+.5));
  $('beam').setAttribute('transform',`rotate(${(amp*Math.sin(t*1.4)).toFixed(2)} 800 520)`);
  $('frc').setAttribute('opacity',p(u,sc+3.4,sc+4));rise($('frl'),p(u,sc+3.4,sc+3.9));
  [TM.seesaw,TM.seesaw+2,TM.follower].forEach((a,i)=>rise(PR[i],p(u,a,a+.5)));rise($('bal'),p(u,TM.follower+5.8,TM.follower+6.4));

  const s7=SC[7][0]/K,ca=TM.calendar,tb=TM.toolbox,fdv=p(u,ca+.5,ca+1.5)*(1-p(u,tb,tb+1));
  TL.forEach((c,i)=>{rise(c[0],p(u,s7+.5+i*.4,s7+.9+i*.4));c[1].setAttribute('stroke',u>=tb?'var(--gain)':'var(--ink)')});
  $('tiles').setAttribute('opacity',(1-.7*fdv).toFixed(2));rise($('fdl'),p(u,ca+.5,ca+1)*(1-p(u,tb,tb+.5)));
  rise($('cal'),p(u,ca,ca+.5));DY.forEach((d,i)=>d.setAttribute('fill',u>=tb+i*.08?'var(--gain)':'var(--stage)'));
  rise($('tb'),p(u,tb+.3,tb+.9));rise($('ev'),p(u,tb+4.5,tb+5.1));

  const sn=TM.sticky_note;
  rise($('nt'),p(u,sn,sn+.5));rise($('qa'),p(u,sn,sn+.5));rise($('qb'),p(u,sn+.4,sn+.9));rise($('qc2'),p(u,sn+.8,sn+1.3));rise($('qd'),p(u,sn+6.5,sn+7));