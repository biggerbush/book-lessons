draw($('c0'),p(u,.2,1.4)); rise($('stop0'),p(u,TM.stop_line+.6,TM.stop_line+1.1));
  draw($('c1'),p(u,TM.stop_line+7.2,TM.stop_line+9)); rise($('acc0'),p(u,TM.stop_line+8.6,TM.stop_line+9.2));

  rise($('lift'),p(u,TM.dumbbell,TM.dumbbell+.5));
  const sh=u>=TM.rep_counter+3?1:0, by=320+20*Math.sin(t*3)*(1-sh*.6), jx=sh*3*Math.sin(t*40);
  $('bell').setAttribute('transform','translate('+jx.toFixed(1)+' '+by.toFixed(1)+')');
  $('arms').setAttribute('d','M258 490L'+(212+jx).toFixed(1)+' '+by.toFixed(1)+'M342 490L'+(388+jx).toFixed(1)+' '+by.toFixed(1));
  rise($('sh1'),p(u,TM.rep_counter+3,TM.rep_counter+3.5)); rise($('reps'),p(u,TM.rep_counter,TM.rep_counter+.4));
  RB.forEach((b,i)=>{const g=i>=8, on=g?u>=TM.strong_arm+.3+(i-8)*.5:u>=TM.rep_counter+.5+i*.45;
    b[0].setAttribute('fill',on?(g?'var(--gain)':'var(--ink)'):'var(--stage)'); b[0].setAttribute('stroke',g?'var(--gain)':'var(--ink)');
    b[1].style.fill=on?(g?'var(--on-gain)':'var(--stage)'):'var(--muted)'});
  rise($('stop1'),p(u,TM.strong_arm-4.6,TM.strong_arm-4.1)); rise($('grow1'),p(u,TM.strong_arm,TM.strong_arm+.5)); rise($('bld1'),p(u,TM.strong_arm+1,TM.strong_arm+1.6));

  rise($('pan0'),p(u,TM.checklist,TM.checklist+.5)); CK[0].forEach((g,j)=>rise(g,p(u,TM.checklist+.4+j*.4,TM.checklist+.8+j*.4)));
  rise($('st0g'),p(u,TM.checklist+2.2,TM.checklist+2.7));
  rise($('pan1'),p(u,TM.gold_star,TM.gold_star+.5)); CK[1].forEach((g,j)=>{const a=TM.gold_star+.3+j*.3+(j===3?.4:0); rise(g,p(u,a,a+.4))});
  rise($('st1g'),p(u,TM.gold_star+1.8,TM.gold_star+2.4));
  rise($('wow2'),p(u,TM.wow_sign,TM.wow_sign+.5)); $('burst').setAttribute('transform','rotate('+(8*Math.sin(t*1.5)).toFixed(2)+' 870 760)');

  const dim=1-.65*p(u,TM.spotlight,TM.spotlight+.6);
  DOC.forEach((d,i)=>{rise(d[0],p(u,TM.report+i*.15,TM.report+i*.15+.4)); d[1].setAttribute('opacity',i===2?1:dim.toFixed(2))});
  rise($('note3'),p(u,TM.sticky_note,TM.sticky_note+.5)); rise($('nl3'),p(u,TM.sticky_note+.6,TM.sticky_note+1.1));
  $('spot').setAttribute('opacity',p(u,TM.spotlight,TM.spotlight+.6)); rise($('out3'),p(u,TM.spotlight+1,TM.spotlight+1.6));

  rise($('cal4'),p(u,TM.love_note,TM.love_note+.5)); rise($('note4'),p(u,TM.love_note+1,TM.love_note+1.5));
  rise($('call4'),p(u,TM.phone_call,TM.phone_call+.5)); rise($('bub4'),p(u,TM.phone_call+1.2,TM.phone_call+1.7));
  [0,1,2].forEach(i=>$('w'+i).setAttribute('opacity',(.25+.75*(.5+.5*Math.sin(t*4-i*1.2))).toFixed(2)));
  rise($('bars4'),p(u,TM.phone_call+5,TM.phone_call+5.5)); $('memb').setAttribute('width',(1000*p(u,TM.phone_call+5.4,TM.phone_call+7)).toFixed(1));

  rise($('run5'),p(u,TM.runners,TM.runners+.4));
  const ra=p(u,TM.runners,TM.runners+4.5), rf=p(u,TM.finish_line,TM.finish_line+2.5);
  RU.forEach((g,i)=>{const x=i===2?170+800*ra+360*rf:170+(760+i*40)*ra, mv=i===2?(ra<1||(rf>0&&rf<1)):ra<1;
    g.setAttribute('transform','translate('+x.toFixed(1)+' '+(mv?-4*Math.abs(Math.sin(t*8+i)):0).toFixed(1)+')')});
  rise($('fin5'),p(u,TM.finish_line,TM.finish_line+.5)); rise($('out5'),p(u,TM.finish_line+1.5,TM.finish_line+2.1));

  rise($('pen6'),p(u,TM.penny,TM.penny+.5));
  draw($('cv0'),p(u,TM.growth_curve,TM.growth_curve+1.5)); draw($('cv1'),p(u,TM.growth_curve+1,TM.growth_curve+4));
  rise($('arr6'),p(u,TM.steep_arrow,TM.steep_arrow+.4)); rise($('lb0'),p(u,TM.steep_arrow,TM.steep_arrow+.5)); rise($('lb1'),p(u,TM.steep_arrow+.6,TM.steep_arrow+1.1));

  rise($('frame7'),p(u,TM.puzzle,TM.puzzle+.5)); rise($('pc0'),p(u,TM.mirror,TM.mirror+.5));
  rise($('pc1'),p(u,TM.notebook,TM.notebook+.5)); rise($('pc2'),p(u,TM.notebook+2.5,TM.notebook+3));
  const pk=p(u,TM.notebook+6.6,TM.notebook+7.4); $('pc3').setAttribute('transform','translate('+(260*(1-pk)).toFixed(1)+' 0)'); $('pc3').setAttribute('opacity',cl(pk*3).toFixed(2));

  rise($('qa'),p(u,TM.target,TM.target+.5)); rise($('qb'),p(u,TM.target+.4,TM.target+.9)); rise($('qc'),p(u,TM.target+.8,TM.target+1.3));
  rise($('tgt'),p(u,TM.target+1,TM.target+1.5));
  const ak=p(u,TM.target+1.8,TM.target+2.4); $('arw8').setAttribute('transform','translate('+(1330+300*(1-ak)).toFixed(1)+' '+(440-200*(1-ak)).toFixed(1)+')'); $('arw8').setAttribute('opacity',ak>0?1:0);
  rise($('tm8'),p(u,TM.target+5.8,TM.target+6.3));
  DY.forEach((c,i)=>c.setAttribute('fill',u>=TM.target+6+i*.4?'var(--gain)':'var(--line)'));