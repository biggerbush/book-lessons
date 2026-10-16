const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  const fl=Math.sin(t*2.2),f2=Math.sin(t*2.2+1);
  $('capeP').setAttribute('d','M1275 470Q'+(1200+10*fl).toFixed(1)+' 560 '+(1205+12*fl).toFixed(1)+' 645L'+(1435+10*f2).toFixed(1)+' 645Q'+(1440-8*f2).toFixed(1)+' 560 1365 470Z');
  R('cape',TM.hero_cape); R('bell',TM.hero_cape+3);
  $('bellIn').setAttribute('transform','translate(0 '+(-14*Math.abs(Math.sin(t*1.6))).toFixed(1)+')');

  R('res',TM.researcher); R('qcard',TM.question_card); R('leaders',TM.question_card+1.5); R('glob',TM.globe);
  $('mer').setAttribute('rx',(150*Math.abs(Math.cos(t*.9))).toFixed(1)); $('mer2').setAttribute('rx',(150*Math.abs(Math.sin(t*.9))).toFixed(1));

  const bb=p(u,TM.speech_bubble+3.8,TM.speech_bubble+4.4);
  SB.forEach((g,i)=>{const a=TM.speech_bubble+i*.3;rise(g,p(u,a,a+.4)*(1-.6*bb))});
  rise($('bigb'),bb); R('gap',TM.gap_sign); $('gq').setAttribute('opacity',(.6+.4*Math.sin(t*3)).toFixed(2));

  R('cha',TM.charisma_star); R('xout',TM.charisma_star+5,.4); R('tbx',TM.toolbox);
  $('tools').setAttribute('transform','translate(0 '+(90*(1-p(u,TM.toolbox+.4,TM.toolbox+1.2))).toFixed(1)+')');
  R('clip',TM.checklist);
  CK.forEach((c,i)=>{const a=TM.checklist+.4+i*.6;rise(c[0],p(u,a,a+.4));c[1].setAttribute('opacity',p(u,a+.3,a+.6))});
  R('lock',TM.checklist+4.6);

  BL.forEach((b,i)=>{const a=TM.four_blocks+i*.3,c=TM.four_blocks+3.8+i*.9,d=TM.four_blocks+12.6+i*.2;
    rise(b[0],p(u,a,a+.4)); rise(b[1],p(u,c,c+.4)); b[2].setAttribute('opacity',p(u,d,d+.3))});
  R('later',TM.four_blocks+9.2); R('every',TM.four_blocks+12.6);

  R('badge',TM.name_badge); $('bstr').setAttribute('x2',(190+320*p(u,TM.name_badge+2,TM.name_badge+2.8)).toFixed(1)); R('tnote',TM.name_badge+2.6);
  R('pot',TM.seedling); const sg=p(u,TM.seedling+.2,TM.seedling+2);
  $('stem').setAttribute('d','M1100 560V'+(560-180*sg).toFixed(1)); $('stem').setAttribute('opacity',sg>0?1:0);
  rise($('leaves'),p(u,TM.seedling+1.6,TM.seedling+2.2)); R('def1',TM.seedling+.3);
  R('can',TM.watering_can); R('def2',TM.watering_can+.3);
  D.forEach((d,i)=>{const c=(t*1.2+i/3)%1;d.setAttribute('cy',(285+90*c).toFixed(1));d.setAttribute('opacity',u>=TM.watering_can+.4?(1-c).toFixed(2):0)});

  R('p0',TM.parent); R('p1',TM.team_member); R('p2',TM.big_office);
  const fx=p(u,TM.team_member+1,TM.team_member+3); let pts='';
  for(let x=750;x<=960;x+=10)pts+=x+','+(470+40*(1-fx)*Math.sin((x-750)/14)).toFixed(1)+' ';
  SQ.setAttribute('points',pts); SQ.setAttribute('stroke',fx>=1?'var(--gain)':'var(--loss)');
  R('chk6',TM.big_office+4.2); R('rc',TM.big_office+4.4);

  const gw=TM.gym_weights;
  BR.forEach((b,i)=>{const k=p(u,gw+.2+i*.25,gw+.6+i*.25);b[0].setAttribute('height',(b[1]*k).toFixed(1));b[0].setAttribute('y',(680-b[1]*k).toFixed(1))});
  R('db',gw); $('dbIn').setAttribute('transform','translate(0 '+(-10*Math.abs(Math.sin(t*2))).toFixed(1)+')');
  R('str',gw+2.6); R('awk',gw+5);
  R('cal',TM.calendar); R('pick',TM.calendar+.6); R('hl',TM.calendar+1.2);
  $('hcell').setAttribute('opacity',(.75+.25*Math.sin(t*3)).toFixed(2));

  R('mir',TM.mirror); ['qa','qb','qc','qd'].forEach((id,i)=>R(id,TM.mirror+.3+i*.4)); R('qe',TM.mirror+5.4);