const R=(e,a,d=.5)=>rise(typeof e==='string'?$(e):e,p(u,a,a+d)), S=i=>SC[i][0]/K;

  R('stuck',TM.stuck_person);
  const k0=p(u,TM.stuck_person+4.5,TM.stuck_person+5.7);
  $('tline0').setAttribute('d',zig(1282,610,1436,560,22*(1-k0)+2*Math.sin(t*3),9));
  $('tline0').style.stroke=k0>.6?'var(--gain)':'var(--muted)'; $('tline0').setAttribute('opacity',p(u,TM.stuck_person+1,TM.stuck_person+1.6));
  $('tlab0').setAttribute('opacity',k0);

  R('couch',TM.couch); $('sitter').setAttribute('transform','translate(0 '+(3*Math.sin(t*1.5)).toFixed(1)+')');
  const w1=p(u,TM.arrow_new+4.2,TM.arrow_new+4.8);
  rise($('ar1'),p(u,TM.arrow_new,TM.arrow_new+.5)*(1-.6*w1));
  R('newbox',TM.arrow_new);
  RK.forEach((g,i)=>R(g,TM.arrow_new+.8+i*.7)); R('wins',TM.arrow_new+4.2);

  R('cliffs',TM.gap_bridge); R('bA',TM.before_after); R('bB',TM.before_after+1.5);
  const k2=p(u,TM.before_after+5.8,TM.before_after+7);
  $('tline2').setAttribute('d',zig(440,500,1200,390,30*(1-k2)+2*Math.sin(t*4),14));
  $('tline2').setAttribute('opacity',p(u,TM.before_after+5.4,TM.before_after+5.9)); $('tline2').style.stroke=k2>.6?'var(--gain)':'var(--muted)';
  R('tlab2',TM.before_after+6.6);

  R('warn',TM.warning_sign); R('xg',TM.warning_sign+1.6); R('door',TM.open_door);
  const w3=p(u,TM.open_door+5,TM.open_door+7);
  $('walk').setAttribute('transform','translate('+(360*w3).toFixed(1)+' '+(-6*Math.abs(Math.sin(w3*Math.PI*6))).toFixed(1)+')'); $('walk').setAttribute('opacity',p(u,TM.open_door+4.6,TM.open_door+5));
  R('relief',TM.open_door+5.6);

  R('s4sub',S(4)+.5); R('lad',TM.ladder);
  LD.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.ladder+.4+i*.15,TM.ladder+.7+i*.15)));
  LD[2].setAttribute('cy',(460+4*Math.sin(t*2)).toFixed(1)); R('youl',TM.ladder+1.4);
  R('bub',TM.thought_bubble); [1.5,3,4.4].forEach((a,i)=>R('o'+i,TM.thought_bubble+a));

  R('stg',TM.improv_stage); R('acts',TM.improv_stage+1);
  const d5=p(u,TM.two_actors,TM.two_actors+1)*(40+10*Math.sin(t*2));
  $('actL').setAttribute('transform','translate(0 '+(-d5).toFixed(1)+')'); $('actR').setAttribute('transform','translate(0 '+(d5*.6).toFixed(1)+')');
  R('arL',TM.two_actors); R('arR',TM.two_actors+.4); LC.forEach((g,i)=>R(g,TM.two_actors+5.3+i*.5));

  R('pd',TM.crown); $('crw').setAttribute('transform','translate(0 '+(-4*Math.abs(Math.sin(t*2))).toFixed(1)+')');
  R('pa',TM.circle_hands); $('ring').setAttribute('transform','rotate('+(t*12%360).toFixed(1)+' 1160 430)');
  R('prot',TM.circle_hands+5);

  R('mapg',TM.map); const hi=u<TM.key_lock?Math.floor(t/1.5)%2:0;
  ['rt0','rt1'].forEach((id,i)=>{$(id).style.stroke=(i===hi&&u>=TM.map+1)?'var(--gain)':'var(--muted)'});
  R('lockg',TM.key_lock); const kk=p(u,TM.key_lock+.5,TM.key_lock+1.8);
  $('key').setAttribute('transform','translate('+(-80*(1-kk)).toFixed(1)+' 0)'); $('key').setAttribute('opacity',p(u,TM.key_lock+.3,TM.key_lock+.7));
  const un=p(u,TM.key_lock+2,TM.key_lock+2.6);
  $('shk').setAttribute('transform','translate(0 '+(-40*un).toFixed(1)+')');
  $('lbody').style.fill=un>.5?'var(--gain)':'var(--ink)'; $('shk').style.stroke=un>.5?'var(--gain)':'var(--ink)';
  R('kl0',TM.key_lock+3); R('kl1',TM.key_lock+3.6); R('worth',TM.key_lock+7.8);

  const s8=S(8); R('q0',s8+.3); R('qg',s8+.8); [1,2,3,4].forEach(i=>R('q'+i,s8+2.2+i*.4));
  $('qarc').style.strokeDashoffset=(-(t*30)%24).toFixed(1);
  $('qfig').setAttribute('transform','translate(0 '+(-3*Math.abs(Math.sin(t*2.2))).toFixed(1)+')');