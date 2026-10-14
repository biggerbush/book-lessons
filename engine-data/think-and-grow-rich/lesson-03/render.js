const w0=p(u,TM.seed+2.5,TM.seed+5),f0=p(u,TM.seed+8.6,TM.seed+11);
  grow('pl0',1090,800,w0,t);grow('pl2',1390,800,w0*.85,t);grow('pl1',1240,800,f0,t);
  $('seed0').setAttribute('cy',(640+150*p(u,TM.seed+7.8,TM.seed+8.6)).toFixed(1));$('seed0').setAttribute('opacity',u>TM.seed+7.6&&f0<.3?1:0);

  rise($('wishA'),p(u,TM.chemist,TM.chemist+.5));rise($('flask'),p(u,TM.chemist+.3,TM.chemist+.8));
  $('wish').setAttribute('transform','translate(0 '+(190*p(u,TM.chemist+3.8,TM.chemist+5)).toFixed(1)+')');$('wish').setAttribute('opacity',(1-p(u,TM.chemist+4.6,TM.chemist+5.2)).toFixed(2));
  const lq=p(u,TM.chemist+4.8,TM.chemist+5.8);$('liq').setAttribute('opacity',lq.toFixed(2));
  BB.forEach((b,i)=>{b.setAttribute('cy',(630-((t*40+i*35)%90)).toFixed(1));b.setAttribute('opacity',lq.toFixed(2))});
  rise($('force'),p(u,TM.chemist+5.6,TM.chemist+6.2));
  rise($('hl'),p(u,TM.brick_wall,TM.brick_wall+.5));$('hlI').setAttribute('opacity',(1-.3*p(u,TM.brick_wall+5,TM.brick_wall+5.5)).toFixed(2));
  BR.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.brick_wall+5+i*.14,TM.brick_wall+5.3+i*.14).toFixed(2)));
  rise($('bld'),p(u,TM.brick_wall+6,TM.brick_wall+6.6));

  rise($('mir'),p(u,TM.mirror,TM.mirror+.5));rise($('lp'),p(u,TM.thought_loop,TM.thought_loop+.5));
  const sw=TM.thought_loop+6.1,on=u>=sw,dip=1-p(u,sw-.4,sw)+p(u,sw,sw+.4);
  CP.forEach((c,i)=>{const a=t*.5+i*2*Math.PI/3;c[0].setAttribute('transform','translate('+(1120+190*Math.cos(a)).toFixed(1)+' '+(480+190*Math.sin(a)).toFixed(1)+')');
    c[0].setAttribute('opacity',dip.toFixed(2));c[1].setAttribute('stroke',on?'var(--gain)':'var(--loss)');c[2].textContent=on?'MY GOAL':CPN[i];c[2].style.fill=on?'var(--gain)':''});
  rise($('nz'),p(u,sw,sw+.6));

  rise($('pap'),p(u,TM.paper_goal,TM.paper_goal+.5));rise($('vo'),p(u,TM.flat_voice,TM.flat_voice+.5));
  const em=p(u,TM.heart_glow+.3,TM.heart_glow+1.8),A=3+67*em,hg=u>=TM.heart_glow;let pw='';
  for(let x=500;x<=1000;x+=6)pw+=x+','+(520-A*Math.sin(x/18+t*6)*Math.sin((x-500)/500*Math.PI)).toFixed(1)+' ';
  $('wv').setAttribute('points',pw);$('wv').style.stroke=hg?'var(--gain)':'var(--loss)';$('vl').textContent=hg?'WITH FEELING':'DULL VOICE';$('vl').style.fill=hg?'var(--gain)':'var(--loss)';
  rise($('hrtA'),p(u,TM.heart_glow,TM.heart_glow+.5));$('hrt').setAttribute('transform','translate(750 320) scale('+(.6*(1+.08*Math.pow(Math.abs(Math.sin(t*3.5)),4))).toFixed(3)+')');
  grow('pl3',1280,680,.15*p(u,TM.flat_voice+.6,TM.flat_voice+1.6)+.85*p(u,TM.heart_glow+.6,TM.heart_glow+2.6),t);

  rise($('sunA'),p(u,TM.sunrise,TM.sunrise+.5));$('sun').setAttribute('transform','translate(0 '+(70*(1-p(u,TM.sunrise,TM.sunrise+1.6))).toFixed(1)+')');
  rise($('moonA'),p(u,TM.moon,TM.moon+.5));rise($('scr'),p(u,TM.movie_screen,TM.movie_screen+.5));
  $('scrR').setAttribute('stroke',u>=TM.movie_screen+2?'var(--gain)':'var(--ink)');
  rise($('dl'),p(u,TM.movie_screen+2.3,TM.movie_screen+2.8));DY.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.movie_screen+2.5+i*.25,TM.movie_screen+2.8+i*.25).toFixed(2)));

  rise($('bab'),p(u,TM.baby,TM.baby+.5));$('bab').setAttribute('transform','rotate('+(2*Math.sin(t*1.6)).toFixed(2)+' 360 700)');
  rise($('doc'),p(u,TM.doctor,TM.doctor+.5));
  const rf=TM.doctor+3.8;$('dwG').setAttribute('opacity',(1-.5*p(u,rf,rf+.6)).toFixed(2));
  rise($('dx'),p(u,rf,rf+.5));
  rise($('fa'),p(u,rf+.4,rf+.9));$('sd5').setAttribute('cy',(630+60*p(u,rf+1.2,rf+2)).toFixed(1));

  NT.forEach((n,i)=>n.setAttribute('opacity',p(u,TM.storybook+i*.6,TM.storybook+.3+i*.6).toFixed(2)));
  rise($('bk'),p(u,TM.storybook,TM.storybook+.5));rise($('pill'),p(u,TM.storybook+1,TM.storybook+1.5));
  const adv=u>=TM.storybook+4;$('pillT').textContent=adv?'An advantage':'A burden';$('pillT').style.fill=adv?'var(--gain)':'var(--loss)';$('pillR').setAttribute('stroke',adv?'var(--gain)':'var(--loss)');
  rise($('ear'),p(u,TM.hearing_aid,TM.hearing_aid+.5));
  [0,1,2].forEach(i=>$('ew'+i).setAttribute('opacity',(.5+.5*Math.sin(t*4-i*1.2)).toFixed(2)));
  rise($('cred'),p(u,TM.hearing_aid+3,TM.hearing_aid+3.6));

  rise($('bulb'),p(u,TM.lightbulb,TM.lightbulb+.5));const lit=p(u,TM.lightbulb+.4,TM.lightbulb+1);
  $('bulbC').setAttribute('fill',lit>.5?'var(--gain)':'var(--stage)');$('brays').setAttribute('opacity',(lit*(.6+.4*Math.sin(t*5))).toFixed(2));
  rise($('act'),p(u,TM.running_shoe,TM.running_shoe+.5));$('shoe').setAttribute('transform','translate(0 '+(-10*Math.abs(Math.sin(t*4))).toFixed(1)+')');
  FP.forEach((f,i)=>f.setAttribute('opacity',p(u,TM.footprints+i*.3,TM.footprints+.25+i*.3).toFixed(2)));
  rise($('flag'),p(u,TM.footprints,TM.footprints+.5));rise($('keep'),p(u,TM.footprints+2.6,TM.footprints+3.2));

  const q=SC[8][0]/K;rise($('qa'),p(u,q+.3,q+.8));rise($('qb'),p(u,q+.7,q+1.2));rise($('qc'),p(u,q+1.1,q+1.6));
  rise($('qd'),p(u,q+5.4,q+5.9));rise($('qg'),p(u,q+5.6,q+6.1));