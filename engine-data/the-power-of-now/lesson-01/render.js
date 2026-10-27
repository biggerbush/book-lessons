const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  R('tBub',TM.voice_bubble);
  [262,290,318].forEach((y,i)=>$('tq'+i).setAttribute('d',sq(1040,1340,y,6,t*6+i*2)));
  const k0=p(u,TM.voice_bubble+4.4,TM.voice_bubble+5); $('tBubW').setAttribute('opacity',(1-.6*k0).toFixed(2)); rise($('tRingG'),k0);

  // years of dread
  R('anx',TM.young_tolle); R('wk',TM.young_tolle); R('dep',TM.storm_cloud);
  const w1=p(u,TM.young_tolle,TM.storm_cloud+5), wx=200+1180*w1, k1=p(u,TM.young_tolle,TM.young_tolle+.5), storm=p(u,TM.storm_cloud,TM.storm_cloud+.6);
  $('walker').setAttribute('transform','translate('+wx.toFixed(1)+' 0)'); $('tl').setAttribute('stroke-dashoffset',(1280-(wx-160)).toFixed(1));
  $('jit').setAttribute('opacity',p(u,TM.young_tolle+.5,TM.young_tolle+1)); $('jit').setAttribute('transform','translate('+(3*Math.sin(t*20)).toFixed(1)+' 0)');
  const ck=CLD.map(c=>cl((wx-c.cx+60)/80)*k1);
  CLD.forEach((c,i)=>{rise(c.o,ck[i]); c.inn.setAttribute('fill',u>=TM.storm_cloud?'var(--loss)':'var(--muted)')});
  DROPS.forEach(d=>{d.el.setAttribute('transform','translate(0 '+(452+((t*90+d.j*17+d.c*11)%50)).toFixed(1)+')'); d.el.setAttribute('opacity',(ck[d.c]*storm).toFixed(2))});

  R('bed',TM.night_bed); $('dread').setAttribute('opacity',(p(u,TM.night_bed+.8,TM.night_bed+1.3)*(.6+.4*Math.sin(t*6))).toFixed(2));
  R('win',TM.dark_window); R('quote',TM.quote_card);

  const a3=TM.two_figures,d3=TM.question_mark-a3,sp3=p(u,a3+d3*.2,a3+d3*.2+1.2);
  R('figs',a3); $('fA').setAttribute('transform','translate('+(800-240*sp3).toFixed(1)+' 0)'); $('fB').setAttribute('transform','translate('+(800+240*sp3).toFixed(1)+' 0)');
  $('fA').setAttribute('fill',sp3>0?'var(--gain)':'var(--ink)'); $('fB').setAttribute('fill','var(--loss)');
  $('fB').setAttribute('opacity',(1-.5*p(u,TM.question_mark+.6,TM.question_mark+1.2)).toFixed(2));
  R('lA',a3+d3*.57); R('lB',a3+d3*.57+.3); R('qm',TM.question_mark); R('real',TM.question_mark+.6);

  R('pn0',TM.vortex); R('pn1',TM.sunrise_bird); R('pn2',TM.park_bench);
  $('spir').setAttribute('transform','translate(320 440) rotate('+((t*60)%360).toFixed(1)+')');
  $('sun').setAttribute('cy',(600-110*p(u,TM.sunrise_bird+.2,TM.sunrise_bird+1.6)).toFixed(1));
  $('bird').setAttribute('transform','translate('+(640+(t*50)%280).toFixed(1)+' '+(320+8*Math.sin(t*3)).toFixed(1)+')');
  $('halo').setAttribute('r',(110+6*Math.sin(t*2)).toFixed(1));

  const T5=TM.observer+(TM.chatter_loop-TM.observer)*.46, cut=p(u,T5,T5+1);
  R('cloudG',TM.mind_cloud); R('cordG',TM.mind_cloud+.6); R('obsG',TM.observer); R('stop',T5+.4);
  ['c1','c2'].forEach((c,i)=>{$(c).setAttribute('stroke-dasharray',u>=TM.observer?'12 12':'none'); $(c).setAttribute('transform','translate('+((i?40:-40)*cut).toFixed(1)+' 0)')});
  $('cloudT').setAttribute('transform','translate('+(80*cut).toFixed(1)+' 0)'); $('cloudT').setAttribute('opacity',(1-.5*cut).toFixed(2));

  R('man',TM.chatter_loop); $('loop').setAttribute('stroke-dashoffset',(-t*40).toFixed(1));
  for(let i=0;i<4;i++)R('pl'+i,TM.judge_gavel+i*.6);
  R('chainG',TM.heavy_chain); R('ident',TM.heavy_chain+.6,.6);

  R('col1',TM.toolbox); R('col2',TM.puppet_strings); R('col3',TM.free_hand); R('back',TM.free_hand+.6,.6);
  $('g7a').setAttribute('transform','translate(450 440) rotate('+((t*40)%360).toFixed(1)+')');
  const px=800+12*Math.sin(t*1.6); $('pup').setAttribute('transform','translate('+px.toFixed(1)+' 0)');
  $('str').setAttribute('d','M780 312L'+(px-50).toFixed(1)+' 500M800 316L'+px.toFixed(1)+' 396M820 312L'+(px+50).toFixed(1)+' 500');

  R('qa',TM.mirror_check); R('qb',TM.mirror_check+.4); R('qc',TM.mirror_check+.8);
  R('lis',TM.mirror_check+.4,.6); R('lisB',TM.mirror_check+1.2,.6);
  $('lq').setAttribute('d',sq(1045,1255,292,6,t*7)); $('lq2').setAttribute('d',sq(1045,1205,322,6,t*7+2));
  $('lring').setAttribute('r',(70+4*Math.sin(t*2.4)).toFixed(1)); $('lring').setAttribute('stroke-dashoffset',(-t*20).toFixed(1));
  R('you8',TM.mirror_check+6.4,.6);