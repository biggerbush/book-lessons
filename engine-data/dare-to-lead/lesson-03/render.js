const tk=TM.knight;
  rise($('knight'),p(t,tk,tk+.8));
  GL.setAttribute('transform','translate(1326 350) scale('+(.5+.5*Math.abs(Math.sin(t*2.2))).toFixed(3)+')');
  const rk=p(u,tk+5.8,tk+6.4); $('ring').setAttribute('opacity',rk); rise($('reach'),rk);
  RD.forEach((c,i)=>{const r=222+26*Math.abs(Math.sin(t*2+i*1.3)); c.setAttribute('cx',(1280+r*Math.cos(RA[i])).toFixed(1)); c.setAttribute('cy',(460+r*Math.sin(RA[i])).toFixed(1))});

  rise($('p1'),p(u,TM.child,TM.child+.5));
  DT.forEach((l,i)=>{const f=(t*.7+i*.33)%1; l.setAttribute('transform','translate('+(-80*f).toFixed(1)+' 0)'); l.setAttribute('opacity',u>=TM.child+.6&&f<.9?1:0)});
  rise($('p2'),p(u,TM.helmet,TM.helmet+.5));
  $('helm2').setAttribute('transform','translate(0 '+(-260*(1-p(u,TM.helmet+.5,TM.helmet+1.3))).toFixed(1)+')');
  rise($('p3'),p(u,TM.weight,TM.weight+.5));
  const hw=p(u,TM.weight+.5,TM.weight+1.5);
  $('heavy').setAttribute('transform','translate(1270 700) scale('+(1+.05*hw).toFixed(3)+' '+(1-.08*hw).toFixed(3)+') translate(-1270 -700)');
  $('darr').setAttribute('transform','translate(0 '+(8*Math.abs(Math.sin(t*3))).toFixed(1)+')');

  rise($('shield2'),p(u,TM.polish,TM.polish+.5));
  $('cloth').setAttribute('x',(300+50*Math.cos(t*3)).toFixed(1)); $('cloth').setAttribute('y',(503+30*Math.sin(t*3)).toFixed(1));
  G2.forEach(([s,q],i)=>s.setAttribute('transform','translate('+q[0]+' '+q[1]+') scale('+(.4+.6*Math.abs(Math.sin(t*2+i*1.7))).toFixed(3)+')'));
  const nq=p(u,TM.polish+2.2,TM.polish+2.7); rise($('sub2'),nq); rise($('neq'),nq);
  rise($('cloud'),p(u,TM.thought_cloud,TM.thought_cloud+.5));
  rise($('climb'),p(u,TM.ladder,TM.ladder+.5));
  $('climber').setAttribute('transform','translate(0 '+(-320*p(u,TM.ladder+.4,TM.ladder+3)).toFixed(1)+')');

  rise($('spot'),p(u,TM.spotlight,TM.spotlight+.5));
  rise($('learn'),p(u,TM.magnifier,TM.magnifier+.5));
  $('mag').setAttribute('transform','translate('+(12*Math.sin(t*1.6)).toFixed(1)+' '+(8*Math.sin(t*2.3)).toFixed(1)+')');
  rise($('scl'),p(u,TM.scale,TM.scale+.5));
  const ang=-8+20*p(u,TM.scale+.5,TM.scale+2), ra=ang*Math.PI/180, cx=170*Math.cos(ra), cy=170*Math.sin(ra);
  $('beam').setAttribute('transform','rotate('+ang.toFixed(2)+' 1230 360)');
  $('panL').setAttribute('transform','translate('+(1230-cx).toFixed(1)+' '+(360-cy).toFixed(1)+')');
  $('panR').setAttribute('transform','translate('+(1230+cx).toFixed(1)+' '+(360+cy).toFixed(1)+')');
  rise($('tog'),p(u,TM.scale+1.5,TM.scale+2.1));

  const sm=TM.smirk, ro=p(u,sm+.6,sm+1.2);
  rise($('face'),p(u,sm,sm+.5));
  $('pl').setAttribute('cy',(430-18*ro).toFixed(1)); $('pr').setAttribute('cy',(430-18*ro).toFixed(1));
  $('mouth').setAttribute('d',u>=sm+.6?'M310 545Q390 555 450 510':'M320 540h120');
  rise($('ideaW'),p(u,sm,sm+.4));
  const shr=p(u,sm+1.2,sm+2.2), ik=1-.85*shr;
  $('idea').setAttribute('transform','translate(640 330) scale('+ik.toFixed(3)+') translate(-640 -330)');
  $('idea').setAttribute('opacity',(1-p(u,sm+1.6,sm+2.4)).toFixed(3));
  rise($('safe'),p(u,sm+6.5,sm+7));
  rise($('sunG'),p(u,TM.sunrise,TM.sunrise+.5));
  $('sun').setAttribute('transform','translate(0 '+(140*(1-p(u,TM.sunrise+.3,TM.sunrise+2.2))).toFixed(1)+')');
  $('rays').setAttribute('opacity',p(u,TM.sunrise+1.6,TM.sunrise+2.4));
  rise($('kind'),p(u,TM.sunrise+1,TM.sunrise+1.6));

  rise($('team5'),p(u,TM.team,TM.team+.5)); rise($('tl'),p(u,TM.team,TM.team+.5));
  TB.forEach((e,i)=>{const a=TM.team+.8+i*.3, c=u>=a?'loss':'ink'; e[0].setAttribute('class',c); e[1].setAttribute('class',c); rise(TH[i],p(u,a,a+.4))});
  rise($('bulb'),p(u,TM.lightbulb,TM.lightbulb+.5));
  const fk=p(u,TM.lightbulb+1,TM.lightbulb+3); $('bulbC').setAttribute('fill-opacity',(1-.85*fk).toFixed(2)); $('brays').setAttribute('opacity',(1-fk).toFixed(2));
  rise($('brg'),p(u,TM.bridge,TM.bridge+.5));
  TL.forEach((k,i)=>{const d=Math.abs(i-2.5)-.5, a=TM.bridge+.8+d*.5, f=p(u,a,a+1.2); k.setAttribute('opacity',(1-.85*f).toFixed(2))});
  rise($('cost'),p(u,TM.bridge+5.4,TM.bridge+6));

  rise($('cols'),p(u,TM.two_columns,TM.two_columns+.5));
  rise($('a0'),p(u,TM.numb_pill,TM.numb_pill+.5)); rise($('d0'),p(u,TM.numb_pill+1,TM.numb_pill+1.5));
  rise($('a1'),p(u,TM.critic,TM.critic+.5)); rise($('d1'),p(u,TM.critic+1,TM.critic+1.5));
  rise($('each'),p(u,TM.critic+4.6,TM.critic+5.2));

  rise($('quote'),p(u,TM.mirror,TM.mirror+.5)); rise($('mir'),p(u,TM.mirror+.3,TM.mirror+.8));
  rise($('note'),p(u,TM.notebook,TM.notebook+.5));
  [.4,4.6,5.4].forEach((d,i)=>{const a=TM.notebook+d; rise($('r'+i),p(u,a,a+.5)); $('ck'+i).setAttribute('opacity',p(u,a+1,a+1.3))});

  const q=TM.question;
  rise($('qa'),p(u,q,q+.5)); rise($('qb'),p(u,q+.4,q+.9)); rise($('qc'),p(u,q+.8,q+1.3));
  rise($('qd'),p(u,q+5.4,q+6));
  $('hdown').setAttribute('transform','translate(0 '+(-100*(1-p(u,q+5.4,q+6.4))).toFixed(1)+')');
  $('hdown').setAttribute('opacity',p(u,q+1,q+1.6));