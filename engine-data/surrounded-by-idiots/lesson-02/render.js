const f0=(t%6)/6,a0=f0*2*Math.PI,ex=1280+100*Math.sin(a0),ey=350-100*Math.cos(a0);
  $('swarc').setAttribute('d','M1280 350L1280 250A100 100 0 '+(f0>.5?1:0)+' 1 '+ex.toFixed(1)+' '+ey.toFixed(1)+'Z');
  $('swh').setAttribute('x2',ex.toFixed(1));$('swh').setAttribute('y2',ey.toFixed(1));
  rise($('sw'),p(u,TM.stopwatch,TM.stopwatch+.5));rise($('rr'),p(u,TM.stopwatch+5.4,TM.stopwatch+5.9));

  rise($('ax'),p(u,TM.red_figure,TM.red_figure+.5));rise($('redf'),p(u,TM.red_figure+.3,TM.red_figure+.8));
  $('quad').setAttribute('opacity',p(u,TM.red_figure+6.2,TM.red_figure+6.8));
  rise($('fl'),p(u,TM.finish_flag,TM.finish_flag+.5));$('runr').setAttribute('cx',(880+520*p(u,TM.finish_flag+.3,TM.finish_flag+2.5)).toFixed(1));
  rise($('dec'),p(u,TM.finish_flag+3.7,TM.finish_flag+4.2));

  rise($('tl'),p(u,TM.task_list,TM.task_list+.5));
  CK.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.task_list+.8+i*.6,TM.task_list+1.1+i*.6)));
  rise($('cup'),p(u,TM.coffee_cup,TM.coffee_cup+.5));
  let sp='';[1040,1090,1140].forEach((x,i)=>{sp+='M'+x+' 460';for(let y=450;y>=380;y-=10)sp+='L'+(x+8*Math.sin(y/12+t*3+i)).toFixed(1)+' '+y});$('stm').setAttribute('d',sp);
  CB.forEach(([g,c,l],i)=>{rise(g,p(u,TM.coffee_cup+.3+i*.4,TM.coffee_cup+.7+i*.4));const k=p(u,TM.coffee_cup+1.8+i*.2,TM.coffee_cup+2.3+i*.2);
    c.setAttribute('stroke-dashoffset',(150*(1-k)).toFixed(1));l.setAttribute('fill-opacity',(1-.35*k).toFixed(2))});
  rise($('nx'),p(u,TM.coffee_cup+2,TM.coffee_cup+2.5));rise($('nc1'),p(u,TM.coffee_cup+4.1,TM.coffee_cup+4.6));rise($('nc2'),p(u,TM.coffee_cup+5.9,TM.coffee_cup+6.4));

  rise($('p0'),p(u,TM.rocket,TM.rocket+.5));$('rk').setAttribute('transform','translate(0 '+(-6*Math.sin(t*3)).toFixed(1)+')');
  $('flm').setAttribute('d','M302 500Q330 '+(570+12*Math.sin(t*14)).toFixed(1)+' 358 500Z');
  rise($('p1'),p(u,TM.crossroads,TM.crossroads+.5));$('cr').setAttribute('stroke-dashoffset',(320*(1-p(u,TM.crossroads+1,TM.crossroads+2.4))).toFixed(1));
  rise($('p2'),p(u,TM.mountain,TM.mountain+.5));const s3=.1+.82*p(u,TM.mountain+.6,TM.mountain+3.4);
  $('clb').setAttribute('cx',(1100+170*s3).toFixed(1));$('clb').setAttribute('cy',(584-270*s3).toFixed(1));
  rise($('ener'),p(u,TM.mountain+3.8,TM.mountain+4.3));

  rise($('fz'),p(u,TM.lit_fuse,TM.lit_fuse+.5));const sx=640-390*p(u,TM.lit_fuse+.3,TM.lit_fuse+12);
  $('fzl').setAttribute('x2',sx.toFixed(1));$('spk').setAttribute('cx',sx.toFixed(1));$('spk').setAttribute('r',(12+4*Math.abs(Math.sin(t*20))).toFixed(1));
  rise($('sb0'),p(u,TM.speech_bubble,TM.speech_bubble+.4));rise($('sb1'),p(u,TM.speech_bubble+.8,TM.speech_bubble+1.2));
  rise($('dz'),p(u,TM.bulldozer,TM.bulldozer+.5));const bx=180+580*p(u,TM.bulldozer+.3,TM.bulldozer+3.8),bl=bx+216;
  $('dzb').setAttribute('transform','translate('+bx.toFixed(1)+' 760)');
  PP.forEach(([g,b],i)=>{const x=Math.max(b,bl+32+i*70),tl=Math.min(18,(x-b)/4);g.setAttribute('transform','translate('+x.toFixed(1)+' 760) rotate('+tl.toFixed(1)+')')});

  rise($('room'),p(u,TM.meeting_room,TM.meeting_room+.5));rise($('att'),p(u,TM.meeting_room+.5,TM.meeting_room+1));
  SD.forEach((g,i)=>rise(g,p(u,TM.slide_deck+i*.5,TM.slide_deck+i*.5+.3)));
  rise($('scnt'),p(u,TM.slide_deck,TM.slide_deck+.4));$('scnt').textContent='SLIDE '+Math.max(1,Math.round(20*p(u,TM.slide_deck,TM.slide_deck+3.8)))+' OF 20';
  rise($('clk'),p(u,TM.clock_face,TM.clock_face+.5));const h1=u*2,h2=u*.17;
  $('ch1').setAttribute('x2',(1200+38*Math.sin(h1)).toFixed(1));$('ch1').setAttribute('y2',(290-38*Math.cos(h1)).toFixed(1));
  $('ch2').setAttribute('x2',(1200+26*Math.sin(h2)).toFixed(1));$('ch2').setAttribute('y2',(290-26*Math.cos(h2)).toFixed(1));
  const aw=380*(1-.85*p(u,TM.clock_face+.8,TM.clock_face+3.5));$('attf').setAttribute('width',aw.toFixed(1));$('attf').setAttribute('fill',aw<200?'var(--loss)':'var(--gain)');
  rise($('mg1'),p(u,TM.clock_face+4.2,TM.clock_face+4.7));rise($('mg2'),p(u,TM.clock_face+6.7,TM.clock_face+7.2));rise($('mg3'),p(u,TM.clock_face+8.5,TM.clock_face+9));

  rise($('tgt'),p(u,TM.target,TM.target+.5));const ka=p(u,TM.target+.3,TM.target+1);
  $('arw').setAttribute('opacity',p(u,TM.target+.3,TM.target+.5));$('arw').setAttribute('transform','translate('+(300+260*(1-ka)).toFixed(1)+' '+(440-90*(1-ka)).toFixed(1)+') rotate(-20)');
  rise($('cf'),p(u,TM.target+3.4,TM.target+3.9));
  NR.forEach((g,i)=>rise(g,p(u,TM.number_three+i*1.6,TM.number_three+i*1.6+.5)));rise($('few'),p(u,TM.number_three+4.8,TM.number_three+5.3));
  rise($('opt'),p(u,TM.two_paths,TM.two_paths+.5));const ch=u>=TM.two_paths+2;
  $('cb').style.fill=ch?'var(--gain)':'var(--stage)';$('cbt').style.fill=ch?'var(--on-gain)':'var(--ink)';

  rise($('shd'),p(u,TM.shield,TM.shield+.5));rise($('psh'),p(u,TM.shield+.3,TM.shield+.8));
  $('pshi').setAttribute('transform','translate('+(40*(1-Math.abs(Math.sin(t*2.2)))).toFixed(1)+' 0)');
  rise($('hs'),p(u,TM.handshake,TM.handshake+.5));
  FC.forEach((g,i)=>rise(g,p(u,TM.handshake+5.4+i*.6,TM.handshake+5.9+i*.6)));

  rise($('env'),p(u,TM.envelope,TM.envelope+.5));$('ltr').setAttribute('transform','translate(0 '+(-40*p(u,TM.envelope+3.4,TM.envelope+4.2)).toFixed(1)+')');
  rise($('qa'),p(u,TM.envelope,TM.envelope+.5));rise($('qb'),p(u,TM.envelope+.4,TM.envelope+.9));
  rise($('qc'),p(u,TM.envelope+3.4,TM.envelope+3.9));rise($('qd'),p(u,TM.envelope+3.8,TM.envelope+4.3));