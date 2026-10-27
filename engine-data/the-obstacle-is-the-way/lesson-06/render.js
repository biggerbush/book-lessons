fall(R0,395,t,.8); fall(R4,230,t,.9);
  const c0=p(u,TM.storm_cloud,TM.storm_cloud+.6); rise($('cloud'),c0); rise($('per0'),c0);
  rise($('umb'),p(u,TM.storm_cloud+1.2,TM.storm_cloud+1.8)); $('rain0').setAttribute('opacity',p(u,TM.storm_cloud+1.4,TM.storm_cloud+2));

  rise($('cit'),p(u,TM.inner_citadel,TM.inner_citadel+.6)); rise($('s1sub'),p(u,TM.inner_citadel+3,TM.inner_citadel+3.5)); rise($('tri'),p(u,TM.inner_citadel+3.4,TM.inner_citadel+4));
  rise($('w0'),p(u,TM.two_tools,TM.two_tools+.5)); rise($('w1'),p(u,TM.two_tools+1.4,TM.two_tools+1.9)); $('wl').setAttribute('opacity',p(u,TM.two_tools,TM.two_tools+.8));

  rise($('sen'),p(u,TM.seneca,TM.seneca+.5)); rise($('bub'),p(u,TM.seneca+.8,TM.seneca+1.4)); rise($('storm'),p(u,TM.ship_storm,TM.ship_storm+.6));
  let w='';for(let x=560;x<=1040;x+=20)w+=(x>560?'L':'M')+x+' '+(490+8*Math.sin(x/40+t*2)).toFixed(1); $('wv2').setAttribute('d',w);
  $('ship').setAttribute('transform','rotate('+(4*Math.sin(t*1.6)).toFixed(2)+' 800 470)');
  rise($('reh'),p(u,TM.ship_storm+5.4,TM.ship_storm+6)); rise($('shd'),p(u,TM.shield,TM.shield+.5));

  rise($('tbl'),p(u,TM.meeting_table,TM.meeting_table+.5)); TEAM.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.meeting_table+.3+i*.15,TM.meeting_table+.6+i*.15)));
  const sk=p(u,TM.failed_stamp,TM.failed_stamp+.4); $('stamp').setAttribute('opacity',sk); $('stamp').setAttribute('transform','translate(560 500) scale('+(1.8-.8*sk).toFixed(3)+') translate(-560 -500)');
  rise($('pmh'),p(u,TM.question_mark,TM.question_mark+.5));
  PM.forEach((r,i)=>{const a=TM.question_mark+.4+i*.5,f=u>=TM.question_mark+2.6+i*.5; rise(r.g,p(u,a,a+.4)); r.c.setAttribute('class',f?'gain':'loss'); r.q.setAttribute('opacity',f?0:1); r.k.setAttribute('opacity',f?1:0); r.tx.textContent=f?'Fixed early':'Weak spot'});
  rise($('pm'),p(u,TM.question_mark+3.6,TM.question_mark+4.2));

  $('rain4').setAttribute('opacity',p(u,TM.falling_rain,TM.falling_rain+.8)); rise($('calm'),p(u,TM.falling_rain+.3,TM.falling_rain+.8));
  rise($('hands'),p(u,TM.open_hands,TM.open_hands+.5)); rise($('s4sub'),p(u,TM.open_hands+1.7,TM.open_hands+2.2));
  rise($('bat'),p(u,TM.empty_battery,TM.empty_battery+.5)); const dr=p(u,TM.empty_battery+.8,TM.empty_battery+3.5);
  $('batf').setAttribute('width',(360-320*dr).toFixed(1)); $('batf').style.fill=dr>.6?'var(--loss)':'var(--gain)';

  // Edison's fire: big flames from roof, chimney and windows, dark smoke
  rise($('lab'),p(u,TM.lab_building,TM.lab_building+.6));
  const fk=p(u,TM.flames,TM.flames+.8)*(1-.45*p(u,TM.new_bricks,TM.new_bricks+2));
  const burn=(f,i,sp)=>{const h=fk*f.h*(1+.1*Math.sin(t*sp+i*1.7)+.05*Math.sin(t*sp*1.9+i)),ww=f.w*(.6+.4*fk);
    f.o.setAttribute('d',fireP(f.x,f.b,h,ww)); f.i.setAttribute('d',fireP(f.x,f.b,h*.5,ww*.45));
    const v=fk>.02?1:0; f.o.setAttribute('opacity',v); f.i.setAttribute('opacity',v)};
  FL.forEach((f,i)=>burn(f,i,6)); WF.forEach((f,i)=>burn(f,i+3,7.5));
  WIN.forEach(x=>x.style.fill=fk>.02?'var(--ink)':'var(--line)');
  SMK.forEach((s,i)=>{const k=(t*.2+i/11)%1,x0=240+(i*97)%440;
    s.setAttribute('cx',(x0+90*k+14*Math.sin(t+i)).toFixed(1)); s.setAttribute('cy',(430-215*k).toFixed(1)); s.setAttribute('r',(22+26*k).toFixed(1));
    s.setAttribute('fill-opacity',(.6*Math.min(1,k*6)*Math.min(1,(1-k)*2.5)*fk).toFixed(3))});
  rise($('ed'),p(u,TM.edison_son,TM.edison_son+.5)); rise($('bub5'),p(u,TM.edison_son+1,TM.edison_son+1.6));
  BR.forEach((b,i)=>rise(b,p(u,TM.new_bricks+i*.15,TM.new_bricks+i*.15+.3))); rise($('btw'),p(u,TM.new_bricks,TM.new_bricks+.5));

  rise($('af'),p(u,TM.amor_fati,TM.amor_fati+.6)); rise($('s6sub'),p(u,TM.amor_fati+5,TM.amor_fati+5.5)); rise($('use'),p(u,TM.amor_fati+5.4,TM.amor_fati+6));
  rise($('fire'),p(u,TM.blazing_fire,TM.blazing_fire+.6)); rise($('mq'),p(u,TM.blazing_fire+.8,TM.blazing_fire+1.4));
  FF.forEach((f,i)=>f.setAttribute('d',flame(1020+i*80,660,(i==1?280:200)*(1+.08*Math.sin(t*7+i*2)),i==1?70:50)));
  OB.forEach((o,i)=>{const k=(t*.45+i/3)%1,x=760+340*k,y=580-240*Math.sin(Math.PI*k)-40*k,s=k>.8?1-(k-.8)/.2:1;
    o.setAttribute('x',(x-20*s).toFixed(1)); o.setAttribute('y',(y-20*s).toFixed(1)); o.setAttribute('width',(40*s).toFixed(1)); o.setAttribute('height',(40*s).toFixed(1));
    o.style.fill=k>.7?'var(--gain)':'var(--loss)'; o.setAttribute('opacity',u>=TM.blazing_fire+1?1:0)});

  rise($('nb'),p(u,TM.notebook,TM.notebook+.6));
  NR.forEach((r,i)=>{const a=TM.worst_case+i*1.2; rise(r[0],p(u,a,a+.4)); rise(r[1],p(u,a+.6,a+1))});
  rise($('sm'),p(u,TM.smile,TM.smile+.5)); rise($('good'),p(u,TM.smile+1,TM.smile+1.5));
  $('face').setAttribute('transform','translate(0 '+(6*Math.sin(t*3)).toFixed(1)+')');

  rise($('qa'),p(u,TM.mirror,TM.mirror+.5)); rise($('qb'),p(u,TM.mirror+.4,TM.mirror+.9)); rise($('qc'),p(u,TM.mirror+.8,TM.mirror+1.3)); rise($('qd'),p(u,TM.mirror+1.2,TM.mirror+1.7));
  rise($('mir'),p(u,TM.mirror+1.2,TM.mirror+1.8));
  const ck=(t*.35)%1,cq=1-ck,bx=cq*cq*1070+2*cq*ck*1170+ck*ck*1290,by=cq*cq*590+2*cq*ck*350+ck*ck*600,csc=1-.5*ck;
  $('chunk').setAttribute('transform','translate('+bx.toFixed(1)+' '+by.toFixed(1)+') scale('+csc.toFixed(3)+')');
  $('chunk').setAttribute('class',ck>.7?'gain':'loss');
  $('chunk').setAttribute('opacity',((ck<.85?1:1-(ck-.85)/.15)*(u>=TM.mirror+1.6?1:0)).toFixed(2));
  const bump=ck>.85?Math.sin((ck-.85)/.15*Math.PI):0;
  $('mfo').setAttribute('d',flame(1300,700,(380+40*bump)*(1+.05*Math.sin(t*6)),130));
  $('mfi').setAttribute('d',flame(1300,700,(190+25*bump)*(1+.07*Math.sin(t*7+1)),55));