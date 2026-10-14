const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  rise($('mq'),p(u,TM.mirror,TM.mirror+.5)*(1-p(u,TM.mirror+4.2,TM.mirror+4.6)));
  R('mp',TM.mirror+4.6); R('myou',TM.mirror+5);
  $('mp').setAttribute('transform','translate(0 '+(4*Math.sin(t*1.6)).toFixed(1)+')');

  BA.forEach((g,i)=>{const a=TM.traffic_jam+i*1.3; rise($('bc'+i),p(u,a,a+.5)); rise(g,p(u,a+.3,a+.8))});
  R('arms',TM.shrug); $('arms').setAttribute('opacity',u>=TM.shrug?1:0); R('cap0',TM.shrug+.3); R('cap1',TM.shrug+4.2);

  R('fork',TM.fork_road); $('route').setAttribute('stroke-dashoffset',(100*(1-p(u,TM.fork_road+1,TM.fork_road+3))).toFixed(1));
  R('calg',TM.calendar); CAL.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+.5+i*.14?'var(--gain)':'var(--line)'));
  [0,1.6,3.4].forEach((d,i)=>R('cl'+i,TM.calendar+d));
  R('stl',TM.stack); STK.forEach((b,i)=>rise(b,p(u,TM.stack+i*.3,TM.stack+i*.3+.3)));

  R('scl',TM.scale); R('rp',TM.scale+1.2);
  const f=p(u,TM.full_bar+2.5,TM.full_bar+4); $('barf').setAttribute('width',(340+340*f).toFixed(1));
  $('pct').textContent=Math.round(50+50*f)+'%'; $('pct').style.fill=f>0?'var(--gain)':'var(--ink)';
  $('oth').setAttribute('opacity',(1-.7*f).toFixed(2)); R('resp',TM.full_bar+6.3);

  R('him',TM.couple); R('her',TM.couple+.4); R('book',TM.journal);
  const w=p(u,TM.pen,TM.pen+5.5)*18;
  JL.forEach(([e,x,y],i)=>{const k=cl(w-i); e.setAttribute('d','M'+x+' '+y+'h'+(230*k).toFixed(1)); e.setAttribute('opacity',k>0?1:0)});
  const ix=Math.min(17,Math.floor(w)), jk=cl(w-ix);
  $('pen').setAttribute('transform','translate('+(JL[ix][1]+230*jk).toFixed(1)+' '+(JL[ix][2]-6)+')'); $('pen').setAttribute('opacity',p(u,TM.pen,TM.pen+.4));
  MO.forEach((c,i)=>c.setAttribute('fill',w>=(i+1)*1.5?'var(--gain)':'var(--line)')); R('mol',TM.pen+.3);

  R('k0',TM.magnifier); ST.forEach((s,i)=>s.setAttribute('opacity',p(u,TM.magnifier+1+i*.4,TM.magnifier+1.3+i*.4)));
  $('mag').setAttribute('transform','translate('+(10*Math.sin(t*1.5)).toFixed(1)+' '+(8*Math.cos(t*1.2)).toFixed(1)+')');
  R('a0',TM.heart-.3); R('k1',TM.heart);
  $('hrt').setAttribute('transform','translate(800 420) scale('+(1+.07*Math.pow(Math.abs(Math.sin(t*3)),6)).toFixed(3)+')');
  R('a1',TM.gift_box-.3); R('k2',TM.gift_box);
  $('lid').setAttribute('transform','translate(0 '+(-30*p(u,TM.gift_box+1,TM.gift_box+2)).toFixed(1)+')'); R('own',TM.gift_box+5);

  R('clv',TM.clover); const cs=p(u,TM.clover+2.5,TM.clover+3.1);
  $('cst').setAttribute('x2',(1250+180*cs).toFixed(1)); $('cst').setAttribute('y2',(390-180*cs).toFixed(1));
  const out=u>=TM.gears, mine=u>=TM.gears+2.6;
  EQ.forEach(([g,r,tx,lb],i)=>{rise(g,p(u,TM.equation+i*.8,TM.equation+i*.8+.4));
    if(i===2){r.setAttribute('stroke-dasharray',out?'10 10':'none'); r.setAttribute('stroke',out?'var(--loss)':'var(--ink)'); rise(lb,p(u,TM.gears,TM.gears+.5))}
    else{r.setAttribute('fill',mine?'var(--gain)':'var(--stage)'); r.setAttribute('stroke',mine?'var(--gain)':'var(--ink)'); tx.style.fill=mine?'var(--on-gain)':'var(--ink)'; rise(lb,p(u,TM.gears+2.6,TM.gears+3.1))}});
  R('luck',TM.equation+3.2); R('three',TM.gears+3);

  R('n0',TM.notepad); R('n1',TM.pointing); $('parr').setAttribute('stroke-dashoffset',(100*(1-p(u,TM.pointing+.4,TM.pointing+1.4))).toFixed(1));
  R('n2',TM.key); $('ky').setAttribute('transform','rotate('+(8*Math.sin(t*2)).toFixed(1)+' 1180 400)'); R('tdy',TM.key+.8);

  R('ex',TM.sunrise); $('exs').setAttribute('x2',(136+430*p(u,TM.sunrise+2,TM.sunrise+2.6)).toFixed(1));
  const sk=p(u,TM.sunrise,TM.sunrise+2); $('sun').setAttribute('transform','translate(1260 640) scale('+sk.toFixed(3)+') translate(-1260 -640)');
  RY.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.sunrise+1.5+i*.15,TM.sunrise+1.8+i*.15)*(.6+.4*Math.sin(t*2+i))));
  R('qa',TM.sunrise+5); R('qb',TM.sunrise+5.4); R('qm',TM.sunrise+6);