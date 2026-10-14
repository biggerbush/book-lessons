const ring=u<TM.boss_phone+5.8,fx=p(u,TM.boss_phone+5.8,TM.boss_phone+6.6);
  $('rg').setAttribute('opacity',ring?(.4+.6*Math.abs(Math.sin(t*6))).toFixed(2):0);
  $('phone').setAttribute('transform',ring?'rotate('+(6*Math.sin(t*30)).toFixed(1)+' 1401 361)':'rotate(0)');
  ASK.forEach((a,i)=>{const k=p(u,TM.boss_phone+.3+i*.4,TM.boss_phone+.8+i*.4);rise(a[0],k);a[1].setAttribute('opacity',(k*(1-fx)).toFixed(2));a[0].setAttribute('fill',fx>.5?'var(--gain)':'var(--ink)')});
  rise($('calm'),fx);

  rise($('crd'),p(u,TM.crowd,TM.crowd+.6)); $('wires').setAttribute('opacity',(.5*p(u,TM.crowd+.3,TM.crowd+1)).toFixed(2));
  rise($('inner'),p(u,TM.small_circle,TM.small_circle+.5)); rise($('ring1'),p(u,TM.small_circle+.3,TM.small_circle+.9));
  const ck=p(u,TM.small_circle+5.4,TM.small_circle+7);
  CD.forEach((d,i)=>{d.setAttribute('transform','translate(0 '+(ck*(8+(i*13)%34)).toFixed(1)+')');d.setAttribute('opacity',(1-.65*ck).toFixed(2))});
  CW.forEach(w=>{w.setAttribute('stroke-dasharray',ck>0?'6 10':'none');w.style.stroke=ck>0?'var(--loss)':''});
  rise($('bneck'),p(u,TM.small_circle+8.7,TM.small_circle+9.3));

  rise($('pltn'),p(u,TM.platoon,TM.platoon+.5)); rise($('sq'),p(u,TM.fire_teams,TM.fire_teams+.5)); rise($('ft'),p(u,TM.fire_teams+.6,TM.fire_teams+1.2));
  const sp=p(u,TM.fire_teams,TM.fire_teams+1.4),ld=u>=TM.team_leader;
  MB.forEach((m,i)=>{const o=OF[i%4],x0=660+(i%8)*40,y0=265+Math.floor(i/8)*36,x1=320+320*Math.floor(i/4)+o[0],y1=620+o[1],L=i%4===0&&ld;
    m.setAttribute('cx',(x0+(x1-x0)*sp).toFixed(1));m.setAttribute('cy',(y0+(y1-y0)*sp).toFixed(1));m.setAttribute('opacity',p(u,TM.platoon+i*.03,TM.platoon+.4+i*.03));m.setAttribute('class',L?'gain':'ink');m.setAttribute('r',L?18:14)});
  rise($('jr'),p(u,TM.team_leader,TM.team_leader+.5)); $('tree').setAttribute('opacity',p(u,TM.tree_chart,TM.tree_chart+.6));
  rise($('pl'),p(u,TM.tree_chart+.2,TM.tree_chart+.7)); rise($('rep'),p(u,TM.tree_chart+.4,TM.tree_chart+1));

  rise($('map'),p(u,TM.city_map,TM.city_map+.6)); rise($('team'),p(u,TM.city_map+.5,TM.city_map+1));
  FO.forEach((f,i)=>f.setAttribute('opacity',u>=TM.city_map+1?(.3+.7*Math.abs(Math.sin(t*3+i*1.7))).toFixed(2):0));
  const rk=p(u,TM.radio_static,TM.radio_static+.6); let zp='';
  for(let i=0;i<=20;i++){const f=i/20;zp+=(1210-430*f).toFixed(1)+','+(300+170*f+(i%2?1:-1)*(8+6*Math.sin(t*20+i))).toFixed(1)+' '}
  $('zz').setAttribute('points',zp); $('zz').setAttribute('opacity',rk); rise($('hq'),rk); rise($('xx'),p(u,TM.radio_static+1,TM.radio_static+1.4));
  SDA.forEach((g,i)=>rise(g,p(u,TM.arrow_fast+i*.4,TM.arrow_fast+i*.4+.4)));
  $('view').setAttribute('r',(170*p(u,TM.eye,TM.eye+1.2)).toFixed(1)); rise($('eyeg'),p(u,TM.eye+.4,TM.eye+1));

  const qk=u>=TM.target; rise($('kp'),p(u,TM.question_mark-.3,TM.question_mark+.2)); rise($('qm'),p(u,TM.question_mark,TM.question_mark+.5));
  $('qm').textContent=qk?'!':'?'; $('qm').style.fill=qk?'var(--gain)':'var(--loss)';
  const ak=p(u,TM.target+5,TM.target+5.5),pk=p(u,TM.question_mark+1,TM.question_mark+1.6);
  $('plang').setAttribute('opacity',(pk*(1-.6*ak)).toFixed(2)); rise($('planl'),pk);
  rise($('tgt'),p(u,TM.target,TM.target+.6)); rise($('wall'),ak);
  $('adp').setAttribute('stroke-dashoffset',(AL*(1-p(u,TM.target+5.4,TM.target+6.8))).toFixed(1));
  rise($('adl'),p(u,TM.target+6,TM.target+6.5)); rise($('kg'),p(u,TM.target+6.4,TM.target+7));

  const of=u>=TM.open_field;
  rise($('fen'),p(u,TM.fence,TM.fence+.6)); rise($('fdots'),p(u,TM.fence+.4,TM.fence+1));
  rise($('fl1'),p(u,TM.fence+1.8,TM.fence+2.3)); rise($('fl2'),p(u,TM.fence+6.8,TM.fence+7.3));
  $('fld').setAttribute('opacity',(.14*p(u,TM.open_field,TM.open_field+.8)).toFixed(3)); rise($('ftx'),p(u,TM.open_field+.3,TM.open_field+.9));
  FD.forEach((d,i)=>{d.setAttribute('transform','translate('+(22*Math.sin(t*.9+i*2)).toFixed(1)+' '+(16*Math.cos(t*1.1+i)).toFixed(1)+')');d.setAttribute('fill',of?'var(--gain)':'var(--ink)')});
  const wv=u>=TM.fence+6.8,ws=Math.max(0,Math.sin(t*1.6));
  $('wnd').setAttribute('cx',(1000+244*ws).toFixed(1)); $('wnd').setAttribute('opacity',wv?1:0); $('wnd').setAttribute('fill',of?'var(--gain)':'var(--ink)');
  $('hit').setAttribute('opacity',wv&&ws>.93?1:0);

  rise($('snr'),p(u,TM.handshake-.6,TM.handshake-.1)); rise($('jnr'),p(u,TM.handshake-.4,TM.handshake+.1));
  rise($('a1'),p(u,TM.handshake,TM.handshake+.5)); rise($('arm'),p(u,TM.hand_raised,TM.hand_raised+.4)); rise($('a2'),p(u,TM.hand_raised+.4,TM.hand_raised+.9));
  rise($('nt'),p(u,TM.hand_raised+4.5,TM.hand_raised+5)); rise($('bino'),p(u,TM.binoculars,TM.binoculars+.4)); rise($('bp'),p(u,TM.binoculars+.3,TM.binoculars+.9));

  rise($('ofc'),p(u,TM.office,TM.office+.6)); rise($('tl'),p(u,TM.office+.4,TM.office+1));
  $('card').setAttribute('transform','translate('+(400+440*p(u,TM.briefing+.5,TM.briefing+2)).toFixed(1)+' 300)'); $('card').setAttribute('opacity',p(u,TM.briefing,TM.briefing+.4));
  const gl=u>=TM.green_light; $('lmp').setAttribute('fill',gl?'var(--gain)':'var(--line)'); $('lmp').setAttribute('r',gl?(20+3*Math.abs(Math.sin(t*3))).toFixed(1):20);
  rise($('cl'),p(u,TM.green_light+.3,TM.green_light+.9)); rise($('cust'),p(u,TM.front_desk,TM.front_desk+.5));
  rise($('spot'),p(u,TM.front_desk+.6,TM.front_desk+1)); rise($('fd'),p(u,TM.front_desk+1,TM.front_desk+1.5));

  rise($('cal'),p(u,TM.calendar-.3,TM.calendar+.3)); $('day').setAttribute('opacity',p(u,TM.calendar+.8,TM.calendar+1.2));
  $('day').setAttribute('r',(28+3*Math.sin(t*3)).toFixed(1));
  rise($('qa'),p(u,TM.calendar,TM.calendar+.5)); rise($('qb'),p(u,TM.calendar+.4,TM.calendar+.9));
  rise($('qc'),p(u,TM.calendar+3.8,TM.calendar+4.3)); rise($('qd'),p(u,TM.calendar+4.2,TM.calendar+4.7)); rise($('q8l'),p(u,TM.calendar+4.8,TM.calendar+5.3));