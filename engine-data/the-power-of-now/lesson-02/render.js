const T7=TM.busy_head+7, ang=2*Math.min(t,T7)+.6*Math.max(0,t-T7);
  TD.forEach((c,i)=>{const a=ang+i*1.047, rr=55+15*Math.sin(t*3+i)*(u<T7?1:.3); c.setAttribute('cx',(1150+rr*Math.cos(a)).toFixed(1)); c.setAttribute('cy',(320+rr*Math.sin(a)).toFixed(1)); c.setAttribute('opacity',p(u,TM.busy_head,TM.busy_head+.6))});
  rise($('t0watch'),p(u,TM.busy_head+3,TM.busy_head+3.6)); $('t0eye').setAttribute('opacity',p(u,TM.busy_head+3.5,TM.busy_head+4.2));

  rise($('s1head'),p(u,TM.chatter,TM.chatter+.5));
  [0,1,2].forEach(i=>{const a=TM.chatter+.8+i*1.2; rise($('s1b'+i),p(u,a,a+.5))});
  rise($('s1loop'),p(u,TM.repeat_loop,TM.repeat_loop+.5)); $('s1lp').setAttribute('stroke-dashoffset',(-t*40).toFixed(1));
  rise($('s1rec'),p(u,TM.old_record,TM.old_record+.6)); $('s1spin').setAttribute('transform','rotate('+(t*90%360).toFixed(1)+' 1230 470)');
  rise($('s1cap'),p(u,TM.old_record+1,TM.old_record+1.6));

  rise($('s2ear'),p(u,TM.ear,TM.ear+.5)); rise($('s2voice'),p(u,TM.ear+.6,TM.ear+1.1));
  $('s2wav').setAttribute('opacity',(p(u,TM.ear+.6,TM.ear+1.1)*(.55+.45*Math.sin(t*4))).toFixed(2));
  [0,1,2].forEach(i=>{const a=TM.no_judge+i*.7; rise($('s2c'+i),p(u,a,a+.4)); rise($('s2x'+i),p(u,a+.4,a+.9))});
  rise($('s2noise'),p(u,TM.no_judge+4.6,TM.no_judge+5.1)); rise($('s2obs'),p(u,TM.observer,TM.observer+.5));
  const am=14+26*p(u,TM.no_judge+4.6,TM.no_judge+5.4)-32*p(u,TM.observer,TM.observer+1);
  $('s2sq').setAttribute('d',wav(640,960,470,am,.05,t*6));

  rise($('s3voice'),p(u,TM.two_figures,TM.two_figures+.5)); $('s3sq').setAttribute('d',wav(200,560,430,14,.05,t*5));
  rise($('s3you'),p(u,TM.two_figures+2.5,TM.two_figures+3)); $('s3arr').setAttribute('opacity',p(u,TM.two_figures+3,TM.two_figures+3.5));
  rise($('s3youl'),p(u,TM.two_figures+2.8,TM.two_figures+3.3));
  rise($('s3glow'),p(u,TM.glow_presence,TM.glow_presence+.8)); [140,195,250].forEach((r,i)=>$('s3r'+i).setAttribute('r',(r+6*Math.sin(t*1.5-i)).toFixed(1)));
  rise($('s3pres'),p(u,TM.glow_presence+.8,TM.glow_presence+1.4));

  const S4=SC[4][0]/K, dd=p(u,TM.deflate,TM.deflate+2.5), sc=1-.5*dd, lean=14*(1-dd)*(.9+.1*Math.sin(t*2)), ar=lean*Math.PI/180;
  rise($('s4manw'),p(u,S4+.3,S4+.8)); rise($('s4bal'),p(u,S4+.5,S4+1));
  $('s4man').setAttribute('transform','rotate('+lean.toFixed(2)+' 400 708)');
  const by=420+8*Math.sin(t*1.5); $('s4bi').setAttribute('transform','translate(1000 '+by.toFixed(1)+') scale('+sc.toFixed(3)+')');
  const hx=400+55*Math.cos(ar)+68*Math.sin(ar), hy=708+55*Math.sin(ar)-68*Math.cos(ar), ey=by+192*sc, sg=10+170*dd;
  $('s4rope').setAttribute('d','M'+hx.toFixed(1)+' '+hy.toFixed(1)+'Q'+((hx+1000)/2).toFixed(1)+' '+((hy+ey)/2+sg).toFixed(1)+' 1000 '+ey.toFixed(1));
  $('s4rope').setAttribute('opacity',p(u,S4+.5,S4+1));
  MAN.forEach(e=>e.style.fill=u>=TM.awareness?'var(--gain)':'var(--ink)');
  rise($('s4drag'),p(u,TM.deflate+5.3,TM.deflate+5.8)); rise($('s4ring'),p(u,TM.awareness,TM.awareness+.6)); rise($('s4awt'),p(u,TM.awareness+.6,TM.awareness+1.2));

  rise($('s5face'),p(u,TM.closed_eyes,TM.closed_eyes+.5)); rise($('s5q'),p(u,TM.closed_eyes+2.2,TM.closed_eyes+2.7));
  rise($('s5wall'),p(u,TM.closed_eyes+.3,TM.closed_eyes+.8)); rise($('s5cat'),p(u,TM.cat_mouse,TM.cat_mouse+.5));
  const tw=Math.sin(t*2); $('s5tail').setAttribute('d','M775 650q'+(-60+15*tw).toFixed(1)+' -20 '+(-40+20*tw).toFixed(1)+' -110');
  $('s5look').setAttribute('opacity',p(u,TM.cat_mouse+.6,TM.cat_mouse+1.1));
  rise($('s5dots'),p(u,TM.empty_hole,TM.empty_hole+.5)); [0,1,2].forEach(i=>$('s5d'+i).setAttribute('opacity',(.3+.7*Math.max(0,Math.sin(t*3-i*.8))).toFixed(2)));
  rise($('s5slow'),p(u,TM.empty_hole+.5,TM.empty_hole+1));

  const S6=SC[6][0]/K, gw=340*p(u,TM.gap_space,TM.gap_space+1)+360*p(u,TM.growing_gap,TM.growing_gap+1.5);
  rise($('s6lab'),p(u,S6+.2,S6+.7)); rise($('s6str'),p(u,S6+.3,S6+.8));
  BL.forEach((b,i)=>{const x=120+(((i*125-t*70)%1500)+1500)%1500; b.setAttribute('x',x.toFixed(1));
    b.setAttribute('opacity',(Math.abs(x+55-800)<gw/2+55?0:cl((x-120)/60)*cl((1370-x)/60)).toFixed(2))});
  $('s6gap').setAttribute('x',(800-gw/2).toFixed(1)); $('s6gap').setAttribute('width',Math.max(0,gw).toFixed(1)); $('s6gap').setAttribute('opacity',gw>2?1:0);
  $('s6nm').setAttribute('opacity',p(u,TM.gap_space+3.4,TM.gap_space+3.9));
  rise($('s6calm'),p(u,TM.calm_sky,TM.calm_sky+.5)); [0,1,2].forEach(i=>$('s6w'+i).setAttribute('opacity',p(u,TM.calm_sky+.6+i*.5,TM.calm_sky+1+i*.5)));
  rise($('s6grow'),p(u,TM.growing_gap,TM.growing_gap+.5)); [0,1,2].forEach(i=>$('s6g'+i).setAttribute('opacity',p(u,TM.growing_gap+.5+i*.6,TM.growing_gap+.9+i*.6)));

  rise($('s7p0'),p(u,TM.hand_wash,TM.hand_wash+.5)); rise($('s7p1'),p(u,TM.stairs,TM.stairs+.5));
  DR.forEach((c,i)=>c.setAttribute('cy',(380+((t*1.2+i/3)%1)*140).toFixed(1)));
  const ks=(t*.25)%1, si=Math.min(4,Math.floor(ks*5)); $('s7man').setAttribute('transform','translate('+(950+100*si)+' '+(620-60*si)+')');
  rise($('s7f0'),p(u,TM.stairs+2.1,TM.stairs+2.6)); rise($('s7f1'),p(u,TM.stairs+2.4,TM.stairs+2.9));
  const kf=p(u,TM.small_pause+.6,TM.small_pause+1.6); let sd='M120 740';
  for(let x=120;x<=1480;x+=8){const z=ZN.some(q=>x>=q[0]&&x<=q[1]); sd+='L'+x+' '+(740+28*(z?1-kf:1)*Math.sin(x*.06+t*5)).toFixed(1)}
  $('s7sq').setAttribute('d',sd); rise($('s7ch'),p(u,TM.small_pause,TM.small_pause+.5)); $('s7flat').setAttribute('opacity',kf);
  rise($('s7cap'),p(u,TM.small_pause+1,TM.small_pause+1.5));

  rise($('s8a'),p(u,TM.three_pauses,TM.three_pauses+.5));
  PZ.forEach((g,i)=>rise(g,p(u,TM.three_pauses+.6+i*.4,TM.three_pauses+1+i*.4))); rise($('s8l'),p(u,TM.three_pauses+1.2,TM.three_pauses+1.7));
  rise($('s8b'),p(u,TM.three_pauses+5.3,TM.three_pauses+5.8)); rise($('s8c'),p(u,TM.three_pauses+5.7,TM.three_pauses+6.2));