const cb=p(u,TM.busy_head+5,TM.busy_head+7.5);
  DOT.forEach((d,i)=>{const a=p(u,TM.busy_head+i*.08,TM.busy_head+i*.08+.4),s=1+.6*cb;
    d[2].setAttribute('cx',(1320+(d[0]-1320)*s+6*Math.sin(t*5+i)).toFixed(1));d[2].setAttribute('cy',(400+(d[1]-400)*s+6*Math.cos(t*4+i*2)).toFixed(1));d[2].setAttribute('opacity',(a*(1-cb)).toFixed(2))});
  Q('l4calm').setAttribute('r',Math.max(0,44*cb+3*cb*Math.sin(t*2)).toFixed(1));

  rise(Q('l4desk'),p(u,TM.full_desk,TM.full_desk+.5));
  PP.forEach((g,i)=>rise(g,p(u,TM.full_desk+.3+i*.15,TM.full_desk+.6+i*.15)));
  rise(Q('l4win'),p(u,TM.foggy_window,TM.foggy_window+.5));
  const cw=p(u,TM.clear_window,TM.clear_window+2);
  FOG.forEach((f,i)=>{const k=cl(cw*1.6-i*.08);f.setAttribute('x',(905+470*k).toFixed(1));f.setAttribute('width',(470*(1-k)).toFixed(1))});
  Q('l4fog').setAttribute('opacity',(1-.3*cw).toFixed(2));
  Q('l4wl').textContent=cw>.5?'CLEAR':'FOGGY';Q('l4wl').style.fill=cw>.5?'var(--gain)':'var(--muted)';
  rise(Q('l4clr'),p(u,TM.clear_window+1,TM.clear_window+1.6));

  rise(Q('l4cal'),p(u,TM.ceo_calendar,TM.ceo_calendar+.5));rise(Q('l4wm'),p(u,TM.ceo_calendar+1,TM.ceo_calendar+1.5));
  SLT.forEach(([r,f,bl,k])=>{r.setAttribute('opacity',p(u,TM.ceo_calendar+k*.03,TM.ceo_calendar+k*.03+.3).toFixed(2));
    const e=bl&&u>=TM.empty_blocks+(k%10)*.15;r.setAttribute('fill',e?'var(--stage)':'var(--line)');r.setAttribute('stroke',e?'var(--gain)':'none');if(f)f.setAttribute('opacity',e?1:0)});
  rise(Q('l4rule'),p(u,TM.empty_blocks,TM.empty_blocks+.5));rise(Q('l4thk'),p(u,TM.think_bubble,TM.think_bubble+.6));

  rise(Q('l4year'),p(u,TM.cabin,TM.cabin+.5));rise(Q('l4cab'),p(u,TM.cabin+.4,TM.cabin+.9));
  BK.forEach((b,i)=>rise(b,p(u,TM.book_stack+i*.25,TM.book_stack+i*.25+.4)));
  rise(Q('l4pic'),p(u,TM.book_stack+4.8,TM.book_stack+5.3));
  const fc=p(u,TM.book_stack+5.8,TM.book_stack+7.5);
  Q('l4foc').setAttribute('opacity',(.2+.8*fc).toFixed(2));Q('l4foc').setAttribute('transform','translate('+(8*(1-fc)*Math.sin(t*9)).toFixed(1)+' 0)');

  rise(Q('l4bat'),p(u,TM.battery,TM.battery+.5));
  const chg=p(u,TM.battery+.3,TM.battery+1.8)*(1-.75*p(u,TM.late_night,TM.late_night+2));
  CEL.forEach((c,i)=>c.setAttribute('opacity',cl(chg*4-i).toFixed(2)));
  rise(Q('l4asset'),p(u,TM.battery+3.4,TM.battery+4));rise(Q('l4badge'),p(u,TM.late_night,TM.late_night+.6));
  rise(Q('l4face'),p(u,TM.sleepy_face,TM.sleepy_face+.5));Q('l4zz').setAttribute('transform','translate(0 '+(6*Math.sin(t*2)).toFixed(1)+')');
  rise(Q('l4opts'),p(u,TM.sleepy_face+1,TM.sleepy_face+1.5));rise(Q('l4tired'),p(u,TM.sleepy_face+1.6,TM.sleepy_face+2.2));

  rise(Q('l4vio'),p(u,TM.violin,TM.violin+.6));rise(Q('l4bars'),p(u,TM.top_players,TM.top_players+.5));
  const bh=p(u,TM.top_players+.3,TM.top_players+1.8),sh=p(u,TM.top_players+1.5,TM.top_players+3);
  [300,260,220,190].forEach((h,i)=>{const e=Q('l4b'+i),k=h*(i%2?sh:bh);e.setAttribute('y',(700-k).toFixed(1));e.setAttribute('height',k.toFixed(1))});
  rise(Q('l4clock'),p(u,TM.sleep_clock,TM.sleep_clock+.5));
  const ck=p(u,TM.sleep_clock+.4,TM.sleep_clock+2.2),A=2*Math.PI*8.6/24*ck;
  Q('l4arc').setAttribute('d','M1230 310A170 170 0 '+(A>Math.PI?1:0)+' 1 '+(1230+170*Math.sin(A)).toFixed(1)+' '+(480-170*Math.cos(A)).toFixed(1));
  Q('l4arc').setAttribute('opacity',ck>0?1:0);Q('l4hrs').textContent=(8.6*ck).toFixed(1);
  rise(Q('l4exc'),p(u,TM.sleep_clock+5,TM.sleep_clock+5.6));

  rise(Q('l4kite'),p(u,TM.kite,TM.kite+.5));
  Q('l4kiteM').setAttribute('transform','rotate('+(4*Math.sin(t*1.3)).toFixed(2)+' 285 630)');
  rise(Q('l4brain'),p(u,TM.playful_brain,TM.playful_brain+.5));
  NC.forEach((c,i)=>c.setAttribute('fill',u>=TM.playful_brain+.6+i*.35?'var(--gain)':'var(--line)'));
  ED.forEach((e,i)=>e.setAttribute('opacity',p(u,TM.playful_brain+.8+i*.35,TM.playful_brain+1.1+i*.35).toFixed(2)));
  rise(Q('l4bulb'),p(u,TM.new_idea,TM.new_idea+.5));
  Q('l4rays').setAttribute('opacity',(p(u,TM.new_idea+.4,TM.new_idea+1)*(.6+.4*Math.sin(t*4))).toFixed(2));
  rise(Q('l4feeds'),p(u,TM.new_idea+4.6,TM.new_idea+5.2));

  rise(Q('l4c0'),p(u,TM.calendar_slot,TM.calendar_slot+.5));
  const sw=p(u,TM.calendar_slot+.4,TM.calendar_slot+1.4);Q('l4slot').setAttribute('width',(260*sw).toFixed(1));Q('l4slt').setAttribute('opacity',p(u,TM.calendar_slot+1.2,TM.calendar_slot+1.6).toFixed(2));
  rise(Q('l4c1'),p(u,TM.notebook,TM.notebook+.5));rise(Q('l4c2'),p(u,TM.pillow,TM.pillow+.5));

  const q8=SC[8][0]/K;
  rise(Q('l4qa'),p(u,q8+.3,q8+.8));rise(Q('l4qb'),p(u,q8+.7,q8+1.2));rise(Q('l4qc'),p(u,q8+1.1,q8+1.6));
  rise(Q('l4qm'),p(u,q8+4.8,q8+5.3));const bkd=u>=q8+6;
  Q('l4bk').setAttribute('fill',bkd?'var(--gain)':'var(--stage)');Q('l4bkt').textContent=bkd?'BOOKED':'BLANK SLOT';Q('l4bkt').style.fill=bkd?'var(--on-gain)':'var(--gain)';