const g0=TM.spark+5.4;
  $('rays').setAttribute('opacity',(u<TM.spark?0:u<g0?.35+.3*Math.abs(Math.sin(t*7)):1).toFixed(2));
  $('bulb').style.fill=u>=g0?'var(--gain)':'var(--stage)';

  rise($('desk'),p(u,TM.waiting_man,TM.waiting_man+.5)); rise($('cloud'),p(u,TM.lightning,TM.lightning+.5));
  $('bolt').setAttribute('opacity',u<TM.lightning+.3?0:(Math.sin(t*9)>.3?1:.15));
  rise($('s1sub'),p(u,TM.lightning+4.2,TM.lightning+4.7)); rise($('born'),p(u,TM.lightning+7.5,TM.lightning+8)); rise($('either'),p(u,TM.lightning+8,TM.lightning+8.6));

  rise($('s2sub'),p(u,sa(2)+.3,sa(2)+.8)); rise($('shieldG'),p(u,TM.shield,TM.shield+.5)); rise($('sofaG'),p(u,TM.sofa,TM.sofa+.5));
  $('zz').setAttribute('transform','translate(0 '+(-8*Math.sin(t*2)).toFixed(1)+')'); rise($('nofail'),p(u,TM.sofa+5.4,TM.sofa+6));

  rise($('s3sub'),p(u,sa(3)+.3,sa(3)+.8)); rise($('talG'),p(u,TM.scale,TM.scale+.5)); rise($('ladG'),p(u,TM.ladder,TM.ladder+.5));
  RG.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.ladder+.3+i*.65,TM.ladder+.6+i*.65)));
  CL.setAttribute('transform','translate(1130 '+(760-60*7*p(u,TM.ladder+.6,TM.ladder+5.2)).toFixed(1)+')');
  rise($('any3'),p(u,TM.ladder+5.8,TM.ladder+6.4));

  [TM.paintbrush,TM.teacher,TM.manager].forEach((a,i)=>rise($('card'+i),p(u,a,a+.5)));
  rise($('s4sub'),p(u,TM.paintbrush+3.4,TM.paintbrush+3.9));
  const nb=p(u,TM.teacher+.8,TM.teacher+1.4); $('oldb').setAttribute('opacity',1-nb); rise($('newb'),nb);
  const fx=u>=TM.manager+.8; $('brk').style.stroke=fx?'var(--gain)':'var(--loss)'; $('brk').setAttribute('stroke-dasharray',fx?'none':'8 12');

  rise($('s5sub'),p(u,sa(5)+.3,sa(5)+.8)); rise($('lap'),p(u,TM.laptop,TM.laptop+.5));
  LN.forEach((l,i)=>l[0].setAttribute('width',(l[1]*p(u,TM.laptop+.5+i*.7,TM.laptop+1.1+i*.7)).toFixed(1)));
  rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
  CE.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+.5+i*.13?'var(--gain)':'var(--line)'));
  ID.forEach((s,i)=>rise(s,p(u,TM.calendar+5.3+i*.3,TM.calendar+5.7+i*.3))); rise($('arrive'),p(u,TM.calendar+5.3,TM.calendar+5.9));

  rise($('s6sub'),p(u,sa(6)+.3,sa(6)+.8)); rise($('post'),p(u,TM.signpost,TM.signpost+.5));
  FP.forEach((f,i)=>f.setAttribute('opacity',p(u,TM.footprints+i*.35,TM.footprints+i*.35+.25)));
  rise($('flag'),p(u,TM.footprints+4.2,TM.footprints+4.7)); rise($('today'),p(u,TM.footprints+5,TM.footprints+5.6));

  rise($('st0'),p(u,TM.notebook,TM.notebook+.5)); PL.forEach((l,i)=>l.setAttribute('opacity',p(u,TM.notebook+.8+i*.6,TM.notebook+1.1+i*.6)));
  rise($('st1'),p(u,TM.clock,TM.clock+.5));
  const wa=p(u,TM.clock+.6,TM.clock+2)*Math.PI/2, sn=Math.sin(wa), cs=Math.cos(wa);
  $('wedge').setAttribute('d','M800 410L800 280A130 130 0 0 1 '+(800+130*sn).toFixed(1)+' '+(410-130*cs).toFixed(1)+'Z');
  $('hand').setAttribute('x2',(800+100*sn).toFixed(1)); $('hand').setAttribute('y2',(410-100*cs).toFixed(1));
  rise($('st2'),p(u,TM.clock+3.8,TM.clock+4.3));

  rise($('qa'),p(u,TM.mirror,TM.mirror+.5)); rise($('qb'),p(u,TM.mirror+.4,TM.mirror+.9)); rise($('qc'),p(u,TM.mirror+.8,TM.mirror+1.3));
  rise($('mirr'),p(u,TM.mirror+1.2,TM.mirror+1.8)); rise($('begin'),p(u,TM.mirror+4.6,TM.mirror+5.1));