const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  R('bulb',TM.lightbulb);
  $('tf').setAttribute('d',fl(1320,440,150+8*Math.sin(t*7),48));
  $('rays').setAttribute('opacity',(p(u,TM.lightbulb+.4,TM.lightbulb+1)*(.6+.4*Math.sin(t*3))).toFixed(2));

  R('dreamer',TM.dreamer); R('bubs',TM.dreamer+1);
  R('cloud',TM.thought_cloud); [0,1.2,2.4].forEach((a,i)=>R('w'+i,TM.thought_cloud+a));
  $('cloudIn').setAttribute('opacity',(1-.6*p(u,TM.thought_cloud+3.4,TM.thought_cloud+4.2)).toFixed(2));
  R('nothing',TM.thought_cloud+3.4);
  R('flameG',TM.flame);
  $('f1').setAttribute('d',fl(1250,640,380+14*Math.sin(t*6),130));
  $('f1i').setAttribute('d',fl(1250,640,200+10*Math.sin(t*8+1),60));
  R('desire',TM.flame+1.2);

  R('bar',TM.barnes); R('edi',TM.edison);
  R('o0',TM.edison+5.3); sk('k0',420,p(u,TM.edison+5.9,TM.edison+6.5));
  R('o1',TM.edison+7.1); sk('k1',420,p(u,TM.edison+7.5,TM.edison+8.1));
  R('o2',TM.edison+8.5); R('lk',TM.edison+8.8);

  R('wal',TM.empty_wallet);
  R('train',TM.freight_train);
  const mv=p(u,TM.freight_train,TM.freight_train+5);
  $('trm').setAttribute('transform','translate('+(120+440*mv).toFixed(1)+' '+(mv>0&&mv<1?2*Math.sin(t*20):0).toFixed(1)+')');
  R('tl1',TM.freight_train+.5);
  R('door',TM.lab_door); R('tramp',TM.lab_door+.4); R('tl2',TM.lab_door+.8); R('bub',TM.lab_door+1.5);

  R('bar4',TM.small_job-.3); R('pz',TM.small_job);
  sk('pzk',WD.pzt,p(u,TM.small_job+1.5,TM.small_job+2.1));
  R('job',TM.small_job+2.4); R('glad',TM.small_job+6);
  R('cal',TM.calendar);
  const n=u<TM.calendar?0:Math.floor(((u-TM.calendar)*5)%19);
  CELLS.forEach((c,i)=>c.setAttribute('fill',i<n?'var(--gain)':'var(--line)'));
  R('cool',TM.calendar+.8); R('tgt',TM.calendar+4.1);
  $('sight').setAttribute('opacity',p(u,TM.calendar+4.3,TM.calendar+5).toFixed(2));

  R('mach',TM.dictaphone); R('sal',TM.dictaphone+2.5);
  QM.forEach((q,i)=>q.setAttribute('opacity',(.6+.4*Math.sin(t*4+i)).toFixed(2)));
  R('bar5',TM.raised_hand);
  const ah=p(u,TM.raised_hand+.3,TM.raised_hand+1);
  $('arm').setAttribute('d','M1072 385L'+(1095+15*ah).toFixed(1)+' '+(440-190*ah).toFixed(1));
  R('say',TM.raised_hand+1);
  R('con',TM.contract); R('cty',TM.contract+.6);
  DOTS.forEach((d,i)=>{const a=TM.contract+1+i*.3;d.setAttribute('fill',u>=a?'var(--gain)':'var(--line)');ROUTES[i].setAttribute('opacity',p(u,a-.2,a+.2).toFixed(2))});
  R('bag',TM.money_bag);
  $('bagIn').setAttribute('transform','translate(0 '+(-8*Math.abs(Math.sin(t*3))).toFixed(1)+')');

  R('c1',TM.target); R('c2',TM.magnifier);
  const mg=p(u,TM.magnifier,TM.magnifier+1.2);
  $('mag').setAttribute('transform','translate('+(110*(1-mg)).toFixed(1)+' '+(90*(1-mg)).toFixed(1)+')');
  const hit=u>=TM.magnifier+1.8; $('bull').setAttribute('class',hit?'gain':'ink');
  $('bull').setAttribute('r',(14+(hit?4*Math.abs(Math.sin(t*3)):0)).toFixed(1));
  R('c3',TM.bridge_fire);
  FI.forEach((f,i)=>{const a=TM.bridge_fire+.5+i*.3,h=80*p(u,a,a+.6)*(1+.1*Math.sin(t*7+i));f.setAttribute('d',fl(1130+i*70,520,Math.max(h,.1),22))});

  R('nb',TM.notebook); R('w1x',TM.notebook+1.4); R('w2x',TM.notebook+2.2);
  sk('x1',250,p(u,TM.cross_out+1,TM.cross_out+1.6)); sk('x2',470,p(u,TM.cross_out+2.5,TM.cross_out+3.2));
  R('goal',TM.star);
  $('spk').setAttribute('transform','rotate('+(t*30%360).toFixed(1)+' 500 625)');

  R('ml',TM.mirror); R('mir',TM.mirror+.5);
  $('mf').setAttribute('d',fl(1260,560,150+10*Math.sin(t*6),52));
  R('qa',TM.mirror+7.4); R('qb',TM.mirror+7.9); R('ft',TM.mirror+8.6);