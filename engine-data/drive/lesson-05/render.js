const ck=4*p(u,TM.climber+.5,TM.climber+7.3),kf=Math.min(Math.floor(ck),3),fr=ck-kf;
  $('climb').setAttribute('transform','translate('+(1208+56*(kf+fr)).toFixed(1)+' '+(560-60*(kf+fr)-30*Math.sin(Math.PI*fr)).toFixed(1)+')');
  rise($('climbw'),p(u,TM.climber,TM.climber+.4)); rise($('flag'),p(u,TM.climber+7.6,TM.climber+8.2));

  rise($('res'),p(u,TM.researcher,TM.researcher+.5)); rise($('flow'),p(u,TM.flow_wave,TM.flow_wave+.5));
  const fw=p(u,TM.flow_wave+.4,TM.flow_wave+4);let wd='',wx=650,wy=0;
  for(let i=0;i<=60;i++){wx=650+740*fw*i/60;wy=1063.5-.551*wx+18*Math.sin(wx/40-t*3);wd+=(i?'L':'M')+wx.toFixed(1)+' '+wy.toFixed(1)}
  $('fwave').setAttribute('d',wd); $('fdot').setAttribute('cx',wx.toFixed(1)); $('fdot').setAttribute('cy',wy.toFixed(1));
  rise($('flowtxt'),p(u,TM.flow_wave+7,TM.flow_wave+7.6));

  [TM.easy_task,TM.hard_task,TM.just_right].forEach((a,i)=>rise(GC[i][0],p(u,a,a+.5)));
  const jr=u>=TM.just_right+.5; GC[2][1].setAttribute('stroke',jr?'var(--gain)':'var(--line)'); GC[2][1].setAttribute('stroke-width',jr?5:3);
  GC[2][2].setAttribute('transform','translate(0 '+(u>=TM.just_right+.8?-34*Math.pow(Math.max(0,Math.sin(t*3)),2):0).toFixed(1)+')');

  rise($('dw'),p(u,TM.dweck,TM.dweck+.5)); rise($('fixL'),p(u,TM.fixed_box,TM.fixed_box+.5));
  $('fxbox').setAttribute('opacity',(1-.6*p(u,TM.growing_tree+5.4,TM.growing_tree+6)).toFixed(2));
  rise($('grL'),p(u,TM.growing_tree,TM.growing_tree+.5)); const ts=.2+.8*p(u,TM.growing_tree+.3,TM.growing_tree+3.5);
  $('tr').setAttribute('transform','translate(1200 640) scale('+ts.toFixed(3)+') rotate('+(1.5*Math.sin(t*1.2)).toFixed(2)+')');
  rise($('only'),p(u,TM.growing_tree+5.4,TM.growing_tree+6));

  rise($('road'),p(u,TM.practice,TM.practice+.3)); $('rpath').setAttribute('stroke-dashoffset',(RL*(1-p(u,TM.practice,TM.practice+3))).toFixed(1));
  const wr=120+1360*p(u,TM.practice+1,TM.scales+10); $('walker').setAttribute('cx',wr.toFixed(1)); $('walker').setAttribute('cy',(rf(wr)-14).toFixed(1));
  rise($('pno'),p(u,TM.scales,TM.scales+.5)); const ak=4+Math.floor(t*4)%4;
  WK.forEach((k,i)=>k.setAttribute('fill',(u>=TM.scales+.5&&i===ak)?'var(--gain)':'var(--stage)'));
  $('loop').setAttribute('transform','rotate('+((t*120)%360).toFixed(1)+' 960 350)');
  rise($('peaks'),p(u,TM.scales+5,TM.scales+5.6));

  rise($('wp'),p(u,TM.west_point,TM.west_point+.5)); rise($('gauge'),p(u,TM.grit_gauge,TM.grit_gauge+.5));
  const gp=p(u,TM.grit_gauge+.3,TM.grit_gauge+2.3); $('garc').setAttribute('stroke-dashoffset',(628*(1-.85*gp)).toFixed(1));
  $('needle').setAttribute('transform','rotate('+(-90+153*gp).toFixed(1)+' 400 560)');
  const gc=u>=TM.grit_gauge+1,fp=p(u,TM.finish_line,TM.finish_line+3);
  CD.forEach((c,i)=>{const k=G5[i]===1&&gc?'gain':'ink';c[1].setAttribute('class',k);c[2].setAttribute('class',k);c[0].setAttribute('transform','translate('+(600*G5[i]*fp).toFixed(1)+' 0)')});
  rise($('fin'),p(u,TM.finish_line,TM.finish_line+.5)); rise($('gtxt'),p(u,TM.finish_line+3,TM.finish_line+3.6));

  // asymptote: curve tops out ~373, dot max radius 18 -> top ~355, a clear 35px gap below the line at 320
  rise($('ach'),p(u,TM.curve,TM.curve+.5));
  const ap=p(u,TM.curve+.3,TM.curve+5);let ad='',ax=160,ay=760;
  for(let i=0;i<=80;i++){const s=ap*i/80;ax=160+800*s;ay=760-400*(1-Math.exp(-3.4*s));ad+=(i?'L':'M')+ax.toFixed(1)+' '+ay.toFixed(1)}
  $('acurve').setAttribute('d',ad); $('arun').setAttribute('cx',ax.toFixed(1)); $('arun').setAttribute('cy',ay.toFixed(1));
  $('arun').setAttribute('r',(14+(u>=TM.runner?4*Math.abs(Math.sin(t*4)):0)).toFixed(1));
  $('ayou').setAttribute('x',ax.toFixed(1)); $('ayou').setAttribute('y',(ay+46).toFixed(1)); $('ayou').setAttribute('opacity',p(u,TM.runner,TM.runner+.5));
  rise($('qcard'),p(u,TM.quote_card,TM.quote_card+.5)); rise($('joy'),p(u,TM.runner+5.4,TM.runner+6));

  rise($('st0'),p(u,TM.calendar,TM.calendar+.5)); const cs=u>=TM.calendar+.8;
  CS.setAttribute('r',cs?16:10); CS.setAttribute('fill',cs?'var(--gain)':'var(--muted)');
  rise($('st1'),p(u,TM.ladder,TM.ladder+.5)); RG[2].setAttribute('stroke',u>=TM.ladder+.6?'var(--gain)':'var(--ink)'); RG[2].setAttribute('stroke-width',u>=TM.ladder+.6?9:6);
  $('lyou').setAttribute('cy',(432-50*p(u,TM.ladder+1,TM.ladder+2)).toFixed(1));
  rise($('st2'),p(u,TM.notebook,TM.notebook+.5)); [0,1,2].forEach(i=>rise($('nm'+i),p(u,TM.notebook+.6+i*.8,TM.notebook+1+i*.8)));

  const S8=SC[8][0]/K;
  rise($('qa'),p(u,S8+.4,S8+.9)); rise($('qb'),p(u,S8+.8,S8+1.3)); rise($('qc'),p(u,S8+1.2,S8+1.7));
  rise($('tmr'),p(u,S8+1.6,S8+2.1)); rise($('chal'),p(u,S8+6.2,S8+6.8));
  $('ring').setAttribute('stroke-dashoffset',(402*(1-p(u,S8+6.4,S8+9))).toFixed(1));