const k0=p(u,TM.spark,TM.spark+.8);
  $('t0rays').setAttribute('transform','translate(1340 440) rotate('+(t*30).toFixed(1)+') scale('+(k0*(1+.12*Math.sin(t*5))).toFixed(3)+')');
  $('t0b').setAttribute('stroke-dashoffset',1-p(u,TM.spark+.6,TM.spark+2.2));

  rise($('road'),p(u,TM.crossroads,TM.crossroads+.6)); rise($('qt'),p(u,TM.crossroads+3.8,TM.crossroads+4.4));
  rise($('ends'),p(u,TM.two_paths,TM.two_paths+.5));
  ['n1','n2'].forEach((id,i)=>{const a=TM.two_paths+i*.9;rise($(id+'g'),p(u,a,a+.4));$('k'+(i+1)).setAttribute('x2',(900+W[id]*p(u,a+.5,a+.9)).toFixed(1))});
  rise($('yc'),p(u,TM.two_paths+2.2,TM.two_paths+2.8));
  $('e1').setAttribute('r',(26+(u>=TM.two_paths+2.2?6*Math.abs(Math.sin(t*3)):0)).toFixed(1));

  const ko=p(u,SC[2][0]/K+.4,SC[2][0]/K+1); rise($('opts'),ko); $('ropes').setAttribute('opacity',ko);
  const sy=360+280*cl(lin(u,TM.rope_cut,TM.rope_cut+2.4)), cutting=u>=TM.rope_cut&&u<TM.rope_cut+2.6, ang=cutting?12+10*Math.sin(t*14):18;
  $('sc').setAttribute('transform','translate(640 '+sy.toFixed(1)+')'); $('sc').setAttribute('opacity',p(u,TM.scissors,TM.scissors+.5));
  SB[0].setAttribute('transform','rotate('+(-ang).toFixed(1)+')'); SB[1].setAttribute('transform','rotate('+ang.toFixed(1)+')');
  RP.forEach(r=>{const tc=TM.rope_cut+2.4*(r.cy-360)/280,k=p(u,tc,tc+.7);r.b.setAttribute('opacity',(1-k).toFixed(2));r.b.setAttribute('transform','translate(0 '+(70*k).toFixed(1)+')');r.a.setAttribute('opacity',(1-.7*k).toFixed(2));r.g.setAttribute('opacity',(1-.6*k).toFixed(2))});
  rise($('res'),p(u,TM.rope_cut+5,TM.rope_cut+5.6)); rise($('nob'),p(u,TM.rope_cut+5.6,TM.rope_cut+6.2));

  rise($('wc'),p(u,TM.wish_cloud,TM.wish_cloud+.6)); $('cl').setAttribute('transform','translate(0 '+(8*Math.sin(t*1.6)).toFixed(1)+')');
  rise($('wt'),p(u,TM.wish_cloud+4.6,TM.wish_cloud+5.1));
  rise($('ss'),p(u,TM.stone_slab,TM.stone_slab+.5)); rise($('cv0'),p(u,TM.stone_slab+.5,TM.stone_slab+1)); rise($('cv1'),p(u,TM.stone_slab+1.2,TM.stone_slab+1.7)); rise($('neq'),p(u,TM.stone_slab+1.8,TM.stone_slab+2.3));

  rise($('apt'),p(u,TM.apartment,TM.apartment+.6)); rise($('l0'),p(u,TM.apartment+.6,TM.apartment+1.1));
  rise($('tub'),p(u,TM.bathtub,TM.bathtub+.6)); rise($('l1'),p(u,TM.bathtub+.4,TM.bathtub+.9));
  const ks=cl(lin(u,TM.fist_down,TM.fist_down+.35)), dt=u-TM.fist_down-.35, sh=dt>0?8*Math.sin(dt*50)*Math.max(0,1-dt*3):0;
  $('stp').setAttribute('opacity',ks); $('stp').setAttribute('transform','translate('+sh.toFixed(1)+' '+(-90*(1-ks)).toFixed(1)+')');
  rise($('up'),p(u,TM.fist_down+4.4,TM.fist_down+4.8)); $('upl').setAttribute('stroke-dashoffset',1-p(u,TM.fist_down+4.6,TM.fist_down+6));

  rise($('riv'),p(u,TM.river,TM.river+.6)); rise($('fall'),p(u,TM.river+1,TM.river+1.6));
  FL.forEach((l,i)=>l.setAttribute('stroke-dashoffset',(-t*(50+i*10)).toFixed(1))); FF.forEach(l=>l.setAttribute('stroke-dashoffset',(-t*160).toFixed(1)));
  const rx=220+780*p(u,TM.raft,TM.waterfall+4), wob=u>=TM.waterfall?6*Math.sin(t*7):1.5*Math.sin(t*2);
  $('raft').setAttribute('opacity',p(u,TM.raft,TM.raft+.5)); $('raft').setAttribute('transform','translate('+rx.toFixed(1)+' '+(512+4*Math.sin(t*2.2)).toFixed(1)+') rotate('+wob.toFixed(1)+')');
  rise($('roar'),p(u,TM.raft+2.6,TM.raft+3.1)); rise($('hard'),p(u,TM.waterfall+1,TM.waterfall+1.5)); rise($('ups'),p(u,TM.waterfall+5.4,TM.waterfall+6));

  CD.forEach((c,i)=>{rise(c[0],p(u,TM.three_cards+i*.3,TM.three_cards+i*.3+.5));const a=[TM.focus_lens,TM.focus_lens+3,TM.footsteps][i];c[1].setAttribute('stroke',u>=a?'var(--gain)':'var(--line)');rise($('ic'+i),p(u,a,a+.5))});
  $('lens6').setAttribute('transform','translate('+(14*Math.sin(t*1.4)).toFixed(1)+' '+(10*Math.sin(t*2)).toFixed(1)+')');
  FP.forEach((f,i)=>f.setAttribute('opacity',p(u,TM.footsteps+.3+i*.35,TM.footsteps+.5+i*.35)));
  rise($('every'),p(u,TM.footsteps+2.4,TM.footsteps+3));

  rise($('cmp'),p(u,TM.compass,TM.compass+.5)); $('ndl').setAttribute('transform','translate(240 330) rotate('+(96+5*Math.sin(t*2.5)).toFixed(1)+')');
  rise($('goal'),p(u,TM.compass+.3,TM.compass+.8));
  $('rA').setAttribute('opacity',(p(u,TM.compass+.6,TM.compass+1.1)*(u>=TM.map_detour?.35:1)).toFixed(2));
  rise($('blk'),p(u,TM.compass+3.2,TM.compass+3.6));
  const kb=p(u,TM.map_detour+.4,TM.map_detour+3.4); $('rB').setAttribute('stroke-dashoffset',(LB*(1-kb)).toFixed(1));
  const pt=u>=TM.map_detour+.4?$('rB').getPointAtLength(LB*kb):$('rA').getPointAtLength(LA*p(u,TM.compass+1.2,TM.compass+3.2));
  $('me').setAttribute('cx',pt.x.toFixed(1)); $('me').setAttribute('cy',pt.y.toFixed(1)); $('me').setAttribute('opacity',p(u,TM.compass+.6,TM.compass+1.1));
  rise($('flx'),p(u,TM.map_detour+2,TM.map_detour+2.5)); rise($('msc'),p(u,TM.muscle,TM.muscle+.6));
  BR.forEach((b,i)=>{const h=(14+i*14)*p(u,TM.muscle+1+i*.5,TM.muscle+1.5+i*.5);b.setAttribute('y',(BB-h).toFixed(1));b.setAttribute('height',h.toFixed(1))});

  rise($('qa'),p(u,TM.pen_paper,TM.pen_paper+.5)); rise($('qb'),p(u,TM.pen_paper+.4,TM.pen_paper+.9)); rise($('qc'),p(u,TM.pen_paper+.8,TM.pen_paper+1.3));
  rise($('pp'),p(u,TM.pen_paper+.3,TM.pen_paper+.8));
  const w=4*p(u,TM.pen_paper+1,TM.pen_paper+5), j=Math.min(3,Math.floor(w));
  WL.forEach((l,i)=>l.setAttribute('stroke-dashoffset',1-cl(w-i)));
  $('pen').setAttribute('transform','translate('+(1230+WW[j]*cl(w-j)).toFixed(1)+' '+(320+j*60+3*Math.sin(t*12)).toFixed(1)+')');
  [0,1,2].forEach(i=>{const a=TM.pen_paper+3.8+i*1.2;rise($('st'+i),p(u,a,a+.5))});