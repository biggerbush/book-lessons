const T0=TM.stuck_founder,L=$('tline');
  L.setAttribute('points',part(TL,p(u,T0,T0+1.6))); L.style.stroke=u>=T0+3.8?'var(--loss)':'var(--ink)';
  rise($('tman'),p(u,T0+.6,T0+1.1)); $('tarc').setAttribute('opacity',p(u,T0+1.2,T0+1.8)); $('tarc').style.strokeDashoffset=(-t*30).toFixed(1);
  rise($('tlab'),p(u,T0+3.8,T0+4.3));

  rise($('ax1'),p(u,TM.zombie_co,TM.zombie_co+.5)); $('zl').setAttribute('points',part(ZL,p(u,TM.flat_line,TM.flat_line+3)));
  const f1=TM.flat_line+5.4; rise($('team'),p(u,f1,f1+.5)); rise($('teaml'),p(u,f1,f1+.5));
  CP.forEach((c,i)=>rise(c,p(u,f1+.6+i*.6,f1+1+i*.6)));
  const h1=TM.flat_line+10.8; $('hope').setAttribute('opacity',p(u,h1,h1+.6)); rise($('hopet'),p(u,h1,h1+.6));

  rise($('pushg'),p(u,TM.push_on,TM.push_on+.5)); rise($('giveg'),p(u,TM.give_up,TM.give_up+.5));
  const w2=TM.give_up+3.3,k2=p(u,w2,w2+.8);
  rise($('learnl'),p(u,TM.push_on+.4,TM.push_on+.9));
  // lost lessons drift AWAY from the label: upper dots up, lower dots down
  BD.forEach((d,i)=>{const a=i<3?TM.push_on:TM.give_up; d.setAttribute('opacity',(p(u,a+.3,a+.7)*(1-.75*k2)).toFixed(2)); d.setAttribute('transform','translate(0 '+((i<3?-40:40)*k2).toFixed(1)+')'); d.setAttribute('class',k2>0?'loss':'gain')});
  rise($('pivg'),p(u,TM.give_up+6.7,TM.give_up+7.2)); rise($('third'),p(u,TM.give_up+7,TM.give_up+7.6));

  rise($('plyr'),p(u,TM.basketball,TM.basketball+.5));
  const a3=1.55+1.35*Math.sin(t*1.4),fx=(440+150*Math.cos(a3)).toFixed(1),fy=(720+46*Math.sin(a3)).toFixed(1);
  $('fleg').setAttribute('x2',fx); $('fleg').setAttribute('y2',fy); $('ffoot').setAttribute('cx',fx); $('ffoot').setAttribute('cy',fy);
  rise($('pivl'),p(u,TM.basketball+6.5,TM.basketball+7));
  rise($('strat'),p(u,TM.new_hypo,TM.new_hypo+.5));
  const s3=p(u,TM.new_hypo+1.2,TM.new_hypo+2.2),sw=s3>=.5;
  BK[2][0].setAttribute('transform','translate('+(30*Math.sin(Math.PI*s3)).toFixed(1)+' 0)');
  BK[2][1].setAttribute('fill',sw?'var(--gain)':'var(--stage)'); BK[2][1].setAttribute('stroke',sw?'var(--gain)':'var(--ink)');
  BK[2][2].textContent=sw?'NEW HYPOTHESIS':'SOLUTION'; BK[2][2].style.fill=sw?'var(--on-gain)':'';
  BK.forEach((b,i)=>b[3].setAttribute('opacity',p(u,TM.new_hypo+2.4+i*.2,TM.new_hypo+2.8+i*.2)));
  rise($('paid'),p(u,TM.new_hypo+3,TM.new_hypo+3.6));

  rise($('net'),p(u,TM.voter_net,TM.voter_net+.6)); rise($('badges'),p(u,TM.voter_net+4.6,TM.voter_net+5.1)); rise($('civ'),p(u,TM.voter_net+4.6,TM.voter_net+5.1));
  const fd=p(u,TM.low_signups+1.5,TM.low_signups+2.3); ND.forEach((n,i)=>n.setAttribute('opacity',[0,2,3,5].includes(i)?1-.75*fd:1));
  rise($('bars'),p(u,TM.low_signups,TM.low_signups+.4));
  const b1=330*p(u,TM.low_signups,TM.low_signups+1),b2=56*p(u,TM.low_signups+.8,TM.low_signups+1.6);
  $('bar1').setAttribute('y',690-b1); $('bar1').setAttribute('height',b1); $('bar2').setAttribute('y',690-b2); $('bar2').setAttribute('height',b2);
  rise($('few'),p(u,TM.low_signups+1.6,TM.low_signups+2.2));

  const kp=p(u,TM.tool_screen,TM.mail_icon),bq=pt(P,kp); $('vp').setAttribute('points',part(P,kp));
  VN.forEach((n,i)=>rise(n,cl((kp*6-i-.7)/.3)));
  $('bead').setAttribute('cx',bq[0].toFixed(1)); $('bead').setAttribute('cy',bq[1].toFixed(1)); $('bead').setAttribute('opacity',u>=TM.tool_screen?1:0);
  rise($('env'),p(u,TM.mail_icon,TM.mail_icon+.6));
  const g5=TM.mail_icon+6.6; $('vg').setAttribute('points',part(P,p(u,g5,g5+1.5))); rise($('reuse'),p(u,g5,g5+.6));

  rise($('cal'),p(u,TM.calendar,TM.calendar+.5)); MK.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+1+i*.6?'var(--gain)':'var(--stage)'));
  rise($('tbl'),p(u,TM.team_table,TM.team_table+.5)); HD.forEach((h,i)=>rise(h,p(u,TM.team_table+.3+i*.15,TM.team_table+.7+i*.15)));
  rise($('fork'),p(u,TM.fork_road,TM.fork_road+.5));
  $('walker').setAttribute('cy',(740-200*p(u,TM.fork_road+.5,TM.fork_road+2)).toFixed(1)); $('walker').setAttribute('opacity',u>=TM.fork_road+.3?1:0);
  rise($('signs'),p(u,TM.fork_road+2,TM.fork_road+2.5)); rise($('choice'),p(u,TM.fork_road+2.5,TM.fork_road+3.1));

  const z=TM.zoom_lens; rise($('zp'),p(u,z,z+.5));
  const lk=p(u,z+.6,z+2),e=p(u,z+2.6,z+3.6);
  $('lens').setAttribute('transform','translate('+(640-312*lk).toFixed(1)+' '+(610-215*lk).toFixed(1)+')'); $('lens').setAttribute('opacity',1-p(u,z+2.4,z+2.9));
  TI.forEach((r,i)=>{r.setAttribute('fill',i===0&&lk>=1?'var(--gain)':'var(--line)'); r.setAttribute('opacity',(1-e).toFixed(2))});
  const G=$('grow'); G.setAttribute('x',(280-20*e).toFixed(1)); G.setAttribute('y',(340-20*e).toFixed(1));
  G.setAttribute('width',(96+264*e).toFixed(1)); G.setAttribute('height',(110+170*e).toFixed(1)); G.setAttribute('opacity',e>0?1:0);
  $('zarr').setAttribute('opacity',Math.sin(Math.PI*e).toFixed(2));
  rise($('wp'),p(u,z+3.4,z+3.9)); rise($('zc1'),p(u,z+2,z+2.4)); rise($('zc2'),p(u,z+3.4,z+3.9));
  rise($('sp'),p(u,TM.new_crowd,TM.new_crowd+.5));
  const nc=p(u,TM.new_crowd+1.2,TM.new_crowd+1.7); rise($('newc'),nc); $('oldc').setAttribute('opacity',(1-.55*nc).toFixed(2));
  rise($('fresh'),p(u,TM.new_crowd+5,TM.new_crowd+5.6));

  const q=TM.your_calendar; rise($('qa'),p(u,q,q+.5)); rise($('qb'),p(u,q+.4,q+.9)); rise($('qc'),p(u,q+.8,q+1.3));
  $('ring').style.strokeDashoffset=(202*(1-p(u,q+1.5,q+2.5))).toFixed(1); rise($('ql'),p(u,q+5.4,q+6));