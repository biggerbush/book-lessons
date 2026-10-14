const k0=p(u,TM.wish_star+.4,TM.wish_star+2.6);
  $('star').setAttribute('transform','translate(1300 '+(180+110*k0+5*Math.sin(t*2)*(1-k0)).toFixed(1)+') rotate('+(k0*144).toFixed(1)+')');
  rise($('sheet'),p(u,TM.wish_star,TM.wish_star+.6));
  SL.forEach((g,i)=>rise(g,p(u,TM.wish_star+6.2+i*.35,TM.wish_star+6.6+i*.35)));

  rise($('fogw'),p(u,TM.fog_cloud,TM.fog_cloud+.6));
  $('fog').setAttribute('transform','translate('+(8*Math.sin(t*.9)).toFixed(1)+' '+(5*Math.sin(t*1.3)).toFixed(1)+')');
  rise($('noedge'),p(u,TM.fog_cloud+5,TM.fog_cloud+5.5));
  rise($('carn'),p(u,TM.carnegie,TM.carnegie+.6)); rise($('cardw'),p(u,TM.carnegie+.6,TM.carnegie+1.1));
  $('card').setAttribute('transform','translate('+(850+110*p(u,TM.carnegie+1.2,TM.carnegie+2.6)).toFixed(1)+' 480)');
  rise($('hexw'),p(u,TM.six_steps,TM.six_steps+.4));
  HX.forEach((e,i)=>DR(e,p(u,TM.six_steps+.3+i*.4,TM.six_steps+.7+i*.4)));
  rise($('goalt'),p(u,TM.six_steps+2.8,TM.six_steps+3.3));

  rise($('tag'),p(u,TM.price_tag,TM.price_tag+.6)); rise($('chk'),p(u,TM.check,TM.check+.6));
  rise($('vague'),p(u,TM.check+5.3,TM.check+5.8));
  VA.forEach((e,i)=>DR(e,p(u,TM.check+5.5+i*.12,TM.check+6.1+i*.12)));
  rise($('tgt'),p(u,TM.target,TM.target+.5));
  TA.forEach((a,i)=>{const k=p(u,TM.target+.5+i*.4,TM.target+1.1+i*.4),dx=a.x1-a.x0,dy=a.y1-a.y0,x=a.x0+dx*k,y=a.y0+dy*k,o=k>0?1:0;
    a.l.setAttribute('x1',(x-dx*.3).toFixed(1));a.l.setAttribute('y1',(y-dy*.3).toFixed(1));a.l.setAttribute('x2',x.toFixed(1));a.l.setAttribute('y2',y.toFixed(1));
    a.c.setAttribute('cx',x.toFixed(1));a.c.setAttribute('cy',y.toFixed(1));a.l.setAttribute('opacity',o);a.c.setAttribute('opacity',o)});

  rise($('scl'),p(u,TM.scale,TM.scale+.6));
  const tl=-.18*(1-p(u,TM.toolbox+.2,TM.toolbox+3.2)),ca=Math.cos(tl),sa=Math.sin(tl),lx=800-340*ca,ly=560-340*sa,rx=800+340*ca,ry=560+340*sa;
  const bm=$('beam');bm.setAttribute('x1',lx.toFixed(1));bm.setAttribute('y1',ly.toFixed(1));bm.setAttribute('x2',rx.toFixed(1));bm.setAttribute('y2',ry.toFixed(1));
  [[lx,ly],[rx,ry]].forEach((e,i)=>{PO[i].setAttribute('x1',e[0].toFixed(1));PO[i].setAttribute('y1',e[1].toFixed(1));PO[i].setAttribute('x2',e[0].toFixed(1));PO[i].setAttribute('y2',(e[1]-30).toFixed(1))});
  $('panL').setAttribute('transform','translate('+lx.toFixed(1)+' '+(ly-30).toFixed(1)+')');
  $('panR').setAttribute('transform','translate('+rx.toFixed(1)+' '+(ry-30).toFixed(1)+')');
  rise($('nfn'),p(u,TM.scale+4.9,TM.scale+5.4)*(1-p(u,TM.toolbox,TM.toolbox+.4)));
  CHP.forEach((c,i)=>{c[0].setAttribute('transform','translate('+rx.toFixed(1)+' '+(ry-30).toFixed(1)+')');rise(c[1],p(u,TM.toolbox+i*.8,TM.toolbox+.4+i*.8))});
  rise($('price'),p(u,TM.toolbox+3.8,TM.toolbox+4.4));

  rise($('cal'),p(u,TM.calendar,TM.calendar+.6)); DR(CD,p(u,TM.calendar+5,TM.calendar+6));
  rise($('watch'),p(u,TM.stopwatch,TM.stopwatch+.5));
  const f=Math.min(.999,Math.max(.001,1-p(u,TM.stopwatch+.4,TM.stopwatch+3.2))),wa=-PI/2+f*2*PI,ex=1160+150*Math.cos(wa),ey=500+150*Math.sin(wa);
  $('wedge').setAttribute('d','M1160 500L1160 350A150 150 0 '+(f>.5?1:0)+' 1 '+ex.toFixed(1)+' '+ey.toFixed(1)+'Z');
  $('hand').setAttribute('x2',(1160+130*Math.cos(wa)).toFixed(1)); $('hand').setAttribute('y2',(500+130*Math.sin(wa)).toFixed(1));
  rise($('dl'),p(u,TM.stopwatch+.6,TM.stopwatch+1.2));

  DR($('route'),p(u,TM.map,TM.map+2)); rise($('wps'),p(u,TM.map+.6,TM.map+1.2));
  rise($('plan'),p(u,TM.map+1.2,TM.map+1.7)); rise($('flag'),p(u,TM.map+1.8,TM.map+2.3));
  const rk=p(u,TM.runner,TM.runner+6)*.96,pt=RP.getPointAtLength(rk*RL),sw=(rk>0&&rk<.96?1:0)*Math.sin(t*10);
  $('runr').setAttribute('transform','translate('+pt.x.toFixed(1)+' '+(pt.y-4).toFixed(1)+')'); $('runr').setAttribute('opacity',u>=TM.runner?1:0);
  $('legs').setAttribute('d','M6 -36L'+(6+18*sw).toFixed(1)+' -4M6 -36L'+(6-18*sw).toFixed(1)+' -4M2 -64L'+(2+16*sw).toFixed(1)+' -44M2 -64L'+(2-16*sw).toFixed(1)+' -44');
  rise($('wait'),p(u,TM.runner+5.4,TM.runner+6)); DR($('wx'),p(u,TM.runner+6,TM.runner+6.8));

  rise($('pad'),p(u,TM.notepad,TM.notepad+.6));
  let px=0,py=0;
  RW.forEach((r,i)=>{const a=TM.notepad+5+i*1.4,k=p(u,a+.2,a+1.3);rise(r.g,p(u,a,a+.4));DR(r.s,k);if(u>=a+.2){px=640+360*k;py=r.y}});
  $('pen').setAttribute('transform','translate('+px.toFixed(1)+' '+py.toFixed(1)+')'); $('pen').setAttribute('opacity',u>=TM.notepad+5.2&&u<TM.one_page?1:0);
  $('pg').setAttribute('stroke',u>=TM.one_page?'var(--gain)':'var(--ink)');
  rise($('onep'),p(u,TM.one_page,TM.one_page+.6));

  rise($('rdr'),p(u,TM.moon,TM.moon+.6)); rise($('moon'),p(u,TM.moon+.4,TM.moon+1));
  $('waves').setAttribute('opacity',(u>=TM.moon+.6?.5+.5*Math.sin(t*5):0).toFixed(2));
  rise($('sun'),p(u,TM.sun,TM.sun+.6)); $('rays').setAttribute('transform','rotate('+(t*12%360).toFixed(1)+' 1300 400)');
  rise($('bub'),p(u,TM.vision,TM.vision+.6)); rise($('loop'),p(u,TM.vision+5.4,TM.vision+6));

  rise($('qa'),p(u,TM.pen_paper,TM.pen_paper+.5)); rise($('qb'),p(u,TM.pen_paper+.4,TM.pen_paper+.9)); rise($('qc'),p(u,TM.pen_paper+.8,TM.pen_paper+1.3));
  rise($('np'),p(u,TM.pen_paper+1.4,TM.pen_paper+1.9));
  NT.forEach((e,i)=>DR(e,p(u,TM.pen_paper+2+i*.4,TM.pen_paper+2.3+i*.4)));
  rise($('rl'),p(u,TM.pen_paper+6.1,TM.pen_paper+6.7));