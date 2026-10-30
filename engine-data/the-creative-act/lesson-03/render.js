TD.forEach((c,i)=>{const a=TM.walk_street+.8+i*.5;c.setAttribute('fill',u>=a?'var(--gain)':'var(--line)');c.setAttribute('opacity',p(u,a-.5,a))});
  $('walker').setAttribute('transform','translate(0 '+(-4*Math.abs(Math.sin(t*4))).toFixed(1)+')');

  rise($('build'),p(u,TM.rubin_desk,TM.rubin_desk+.6));
  rise($('eye1'),p(u,TM.eye_icon,TM.eye_icon+.5)); $('pup1').setAttribute('cx',(1150+16*Math.sin(t*.9)).toFixed(1));
  rise($('slab'),p(u,TM.eye_icon+3.4,TM.eye_icon+4.2));
  const rm=p(u,TM.raw_material,TM.raw_material+.5); rise($('mat'),rm);
  FL.forEach((c,i)=>{const k=(t*.5+i/8)%1;c.setAttribute('cx',1150+((i*37)%60-30));c.setAttribute('cy',(410+k*300).toFixed(1));c.setAttribute('opacity',(rm*(k<.85?1:(1-k)/.15)).toFixed(2))});
  const H=140*p(u,TM.raw_material+.5,TM.raw_material+4.5); $('pile').setAttribute('y',(736-H).toFixed(1)); $('pile').setAttribute('height',H.toFixed(1));

  const gg=p(u,TM.globe_grow+.5,TM.globe_grow+7); rise($('gB'),p(u,TM.globe_grow,TM.globe_grow+.5));
  $('gbig').setAttribute('transform','translate(560 500) scale('+(.8+1.6*gg).toFixed(3)+')');
  GD.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.globe_grow+5.8+i*.15,TM.globe_grow+6.2+i*.15)));
  rise($('lb0'),p(u,TM.globe_grow+6.2,TM.globe_grow+6.7));
  const gs=p(u,TM.small_globe+.3,TM.small_globe+3); rise($('gS'),p(u,TM.small_globe,TM.small_globe+.5));
  $('gsml').setAttribute('transform','translate(1140 500) scale('+(1.6-.9*gs).toFixed(3)+')');
  SD.forEach((d,i)=>d.setAttribute('opacity',i<4?1:1-p(u,TM.small_globe+.5+i*.12,TM.small_globe+.8+i*.12)));
  rise($('lb1'),p(u,TM.small_globe+1,TM.small_globe+1.5));

  rise($('h0'),p(u,TM.clenched_fist,TM.clenched_fist+.5)); cone($('cn0'),330,710,520,4+26*p(u,TM.clenched_fist+.6,TM.clenched_fist+1.6));
  rise($('h1'),p(u,TM.open_hand,TM.open_hand+.5)); cone($('cn1'),1060,1450,520,4+226*p(u,TM.open_hand+.6,TM.open_hand+2.4));
  ID3.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.open_hand+1.4+i*.3,TM.open_hand+1.7+i*.3)));
  rise($('e0'),p(u,TM.open_hand+5,TM.open_hand+5.5)); rise($('e1'),p(u,TM.open_hand+6.8,TM.open_hand+7.3));

  rise($('treeg'),p(u,TM.tree,TM.tree+.6));
  const lt=p(u,TM.label_tag,TM.label_tag+.5), lf=p(u,TM.leaf_detail,TM.leaf_detail+.8), dim=1-.65*lt;
  rise($('tag'),lt*(1-lf)); rise($('filed'),lt);
  CR.forEach((c,i)=>{const sh=.45+.4*((i*7)%5)/4+.15*Math.sin(t*2+i);c.setAttribute('fill',lf>0?'var(--gain)':'var(--ink)');c.setAttribute('fill-opacity',(lf>0?dim+(sh-dim)*lf:dim).toFixed(2))});
  rise($('bark'),p(u,TM.leaf_detail+1.2,TM.leaf_detail+1.7));
  [1.2,2.2,3.4].forEach((d,i)=>rise($('f'+i),p(u,TM.leaf_detail+d,TM.leaf_detail+d+.5)));

  rise($('items'),p(u,TM.thumbs,TM.thumbs+.5));
  PL.forEach((e,i)=>rise(e,p(u,TM.thumbs+.8+i*.3,TM.thumbs+1.1+i*.3)*(1-p(u,TM.clear_lens,TM.clear_lens+.5))));
  const lx=560+380*Math.sin(t*.6); rise($('lensw'),p(u,TM.clear_lens+.3,TM.clear_lens+.8)); $('lens5').setAttribute('transform','translate('+lx.toFixed(1)+' 420)');
  IT.forEach((e,i)=>e.setAttribute('stroke',u>=TM.clear_lens&&Math.abs(lx-200-i*180)<70?'var(--gain)':'var(--ink)'));
  rise($('later'),p(u,TM.clear_lens+4.2,TM.clear_lens+4.7)); rise($('look'),p(u,TM.clear_lens+6.4,TM.clear_lens+6.9));
  const op=p(u,TM.clear_lens+8.1,TM.clear_lens+9.3), w=260*(1-.75*op), dd=40*op;
  $('dpan').setAttribute('points','1180,320 '+(1180+w).toFixed(1)+','+(320+dd).toFixed(1)+' '+(1180+w).toFixed(1)+','+(760-dd).toFixed(1)+' 1180,760');
  $('dlab').textContent=op>.5?'CURIOSITY OPENS IT':'JUDGMENT CLOSES IT'; rise($('door5'),p(u,TM.thumbs+1.5,TM.thumbs+2)); rise($('curio'),op);

  rise($('med'),p(u,TM.meditate,TM.meditate+.6)); $('ring').setAttribute('r',(140+10*Math.sin(t*1.3)).toFixed(1));
  rise($('cal'),p(u,TM.calendar-.4,TM.calendar+.1)); CC.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+.4+i*.1?'var(--gain)':'var(--stage)'));
  rise($('cup'),p(u,TM.coffee_cup,TM.coffee_cup+.5));
  ST.forEach((s,i)=>{const k=(t*.5+i/3)%1;s.setAttribute('transform','translate(0 '+(-30*k).toFixed(1)+')');s.setAttribute('opacity',Math.sin(Math.PI*k).toFixed(2))});
  [0,1,2].forEach(i=>rise($('ch'+i),p(u,TM.coffee_cup+3+i*.9,TM.coffee_cup+3.5+i*.9)));

  const ne=p(u,TM.new_eyes,TM.new_eyes+1); rise($('mugw'),p(u,TM.old_mug,TM.old_mug+.5));
  $('mugP').setAttribute('stroke',ne>0?'var(--ink)':'var(--muted)'); $('mugP').setAttribute('stroke-dasharray',ne>.5?'none':'14 12');
  $('mugP').setAttribute('opacity',(1-.7*p(u,TM.old_mug+1,TM.old_mug+3)*(1-ne)).toFixed(2));
  rise($('known'),p(u,TM.old_mug+1,TM.old_mug+1.5)*(1-ne)); rise($('mugd'),ne);
  ST7.forEach((s,i)=>{const k=(t*.5+i/3)%1;s.setAttribute('transform','translate(0 '+(-30*k).toFixed(1)+')');s.setAttribute('opacity',Math.sin(Math.PI*k).toFixed(2))});
  rise($('eye7'),p(u,TM.old_mug+2,TM.old_mug+2.5));
  const h=4+56*p(u,TM.new_eyes,TM.new_eyes+1.2);
  $('lid').setAttribute('d','M990 460Q1150 '+(460-2*h).toFixed(1)+' 1310 460Q1150 '+(460+2*h).toFixed(1)+' 990 460Z');
  $('iris7').setAttribute('ry',Math.max(0,Math.min(44,h-6)).toFixed(1)); $('pup7').setAttribute('ry',Math.max(0,Math.min(16,h-10)).toFixed(1));
  rise($('fresh'),p(u,TM.new_eyes+1,TM.new_eyes+1.5)); rise($('day'),p(u,TM.new_eyes+5.8,TM.new_eyes+6.3));
  IDE.forEach((c,i)=>{const a=TM.new_eyes+6.2+i*.3;c.setAttribute('r',Math.max(0,12*p(u,a,a+.3)+(u>a+.3?2*Math.sin(t*3+i):0)).toFixed(1))});

  rise($('sw'),p(u,TM.stopwatch,TM.stopwatch+.5)); rise($('pick'),p(u,TM.stopwatch+.3,TM.stopwatch+.8)); rise($('chal'),p(u,TM.stopwatch+1,TM.stopwatch+1.5));
  const an=Math.min(cl((u-TM.stopwatch)/6)*360,359.9)*Math.PI/180;
  $('arc').setAttribute('d','M1350 350A70 70 0 '+(an>Math.PI?1:0)+' 1 '+(1350+70*Math.sin(an)).toFixed(1)+' '+(420-70*Math.cos(an)).toFixed(1));
  $('hand').setAttribute('transform','rotate('+((Math.max(0,u-TM.stopwatch)*60)%360).toFixed(1)+' 1350 420)');
  rise($('qa'),p(u,TM.stopwatch+6.5,TM.stopwatch+7)); rise($('qb'),p(u,TM.stopwatch+6.9,TM.stopwatch+7.4)); rise($('qc'),p(u,TM.stopwatch+7.3,TM.stopwatch+7.8));