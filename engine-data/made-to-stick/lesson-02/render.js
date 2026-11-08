const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d)),A=(e,k,v)=>e.setAttribute(k,v);
  // title: many lines squeezed into one core
  BR.forEach((b,i)=>{const q=B0[i],a=TM.title_card+.2+i*.15,inn=p(u,a,a+.4),c=TM.title_card+1.6+i*.2,k=p(u,c,c+.9),w=q[2]+(60-q[2])*k;
    A(b,'x',(q[0]+(1220-w/2-q[0])*k).toFixed(1));A(b,'y',(q[1]+(424-q[1])*k).toFixed(1));A(b,'width',w.toFixed(1));A(b,'opacity',(inn*(1-p(u,c+.6,c+.9))).toFixed(2))});
  R('fun0',TM.title_card+1.2);R('pill0',TM.title_card+2.9);
  const lk=p(u,TM.title_card+3.4,TM.title_card+3.9);[$('lk0'),$('lk1')].forEach(l=>{A(l,'opacity',lk.toFixed(2));A(l,'stroke-dashoffset',(-t*30).toFixed(0))});
  R('arm0',TM.title_card+3.6);R('air0',TM.title_card+4);

  R('sold',TM.soldiers);
  A($('map1'),'opacity',p(u,TM.battle_map,TM.battle_map+.5));
  SG.forEach((s,i)=>{A(s,'opacity',p(u,TM.battle_map+.4+i*.5,TM.battle_map+.8+i*.5));const br=i>=3&&u>=TM.explosion+.3;A(s,'stroke',br?'var(--loss)':'var(--ink)');A(s,'transform',br?'translate('+(8*Math.sin(t*5+i)).toFixed(1)+' '+(10*Math.cos(t*4+i)).toFixed(1)+')':'')});
  WP.forEach((w,i)=>rise(w,p(u,TM.battle_map+.6+i*.5,TM.battle_map+1+i*.5)));
  R('goal1',TM.battle_map+2.6);
  const ex=p(u,TM.explosion,TM.explosion+.4);A($('boom'),'transform','translate(1060 520) scale('+(ex*(1+.06*Math.sin(t*6))).toFixed(3)+')');
  R('storm',TM.explosion+1.2);R('contact',TM.explosion+4.9,.6);

  R('ord',TM.order_sheet);R('band',TM.order_sheet+5.4);R('hill',TM.flag_hill);R('sol2',TM.flag_hill+.6);
  const st=p(u,TM.soldier_think,TM.soldier_think+.8);
  A($('plan2'),'opacity',(p(u,TM.flag_hill+.6,TM.flag_hill+1.1)*(1-.7*st)).toFixed(2));
  A($('plan2'),'transform','translate(0 '+(70*st).toFixed(1)+') rotate('+(8*st).toFixed(1)+' 950 410)');
  A($('pl2'),'stroke',st>0?'var(--loss)':'var(--ink)');
  rise($('think'),st);
  A($('imp'),'opacity',p(u,TM.soldier_think+.6,TM.soldier_think+1.4));A($('imp'),'stroke-dashoffset',(-t*40).toFixed(0));

  R('q1',TM.question_one);R('q1t',TM.question_one+4.6);R('q2',TM.question_two);
  IR.forEach((r,i)=>rise(r[0],p(u,TM.red_pencil-.6+i*.15,TM.red_pencil-.1+i*.15)));
  let px=0,py=0;[0,1,3,4].forEach((j,n)=>{const a=TM.red_pencil+.8+n*.7,k=p(u,a,a+.5),r=IR[j];A(r[3],'opacity',u>=a?.85:0);A(r[3],'x2',(140+720*k).toFixed(1));A(r[2],'fill-opacity',(1-.4*k).toFixed(2));if(u>=a){px=140+720*k;py=r[4]+26}});
  A($('pen'),'transform','translate('+px.toFixed(1)+' '+py+')');A($('pen'),'opacity',(p(u,TM.red_pencil+.8,TM.red_pencil+1)*(1-p(u,TM.red_pencil+3.4,TM.red_pencil+3.8))).toFixed(2));
  const es=u>=TM.red_pencil+3.6;A(IR[2][1],'fill',es?'var(--gain)':'var(--stage)');A(IR[2][1],'stroke',es?'var(--gain)':'var(--ink)');IR[2][2].style.fill=es?'var(--on-gain)':'var(--ink)';
  R('keep',TM.red_pencil+3.6);

  R('plane',TM.plane,.6);A($('planeB'),'transform','translate('+(10*Math.sin(t*.9)).toFixed(1)+' '+(8*Math.sin(t*1.7)).toFixed(1)+')');
  R('kel',TM.kelleher);R('quote',TM.price_tag);R('tag',TM.price_tag+.5);R('rul',TM.price_tag+3.4);
  A($('mk4'),'transform','translate('+(640+800*(.5+.5*Math.sin(t*1.2))).toFixed(1)+' 646)');

  R('mkt',TM.marketer);R('sal',TM.salad);R('gate',TM.scale);R('no5',TM.scale+1.8);R('emp',TM.scale+3.7,.6);

  // say less: juggler drops three messages
  R('pod',TM.podium);R('jug',TM.three_balls);
  const fl=p(u,TM.three_balls+2.5,TM.three_balls+3.3),ta=Math.min(u,TM.three_balls+2.5)*2.6;
  JB.forEach((b,i)=>{const a=ta+i*2.094,x=790+110*Math.cos(a),y=380-90*Math.sin(a);A(b,'cx',(x+(LAND[i]-x)*fl).toFixed(1));A(b,'cy',(y+(618-y)*fl).toFixed(1))});
  R('none6',TM.three_balls+3);R('tgt',TM.one_arrow-.4);
  const ak=p(u,TM.one_arrow,TM.one_arrow+.6);A($('arw'),'opacity',u>=TM.one_arrow?1:0);
  A($('arw'),'transform','translate('+(1270-250*(1-ak)).toFixed(1)+' '+(430-120*(1-ak)).toFixed(1)+')');
  R('extra',TM.one_arrow+1.2,.6);

  R('book',TM.proverb_book);const pk=p(u,TM.proverb_book+2.5,TM.proverb_book+3.3);A($('bkm'),'opacity',(1-pk).toFixed(2));A($('bkg'),'opacity',pk.toFixed(2));R('lab7',TM.proverb_book+2.5);
  R('card',TM.note_card);R('can',TM.trash_can);
  SCR.forEach((s,i)=>{const a=TM.trash_can+.4+i*.3,k=p(u,a,a+.8),y0=416+i*45;A(XL[i],'opacity',u>=a?0:1);A(s,'opacity',u>=a&&k<1?1:0);
    A(s,'transform','translate('+(860+470*k).toFixed(1)+' '+(y0+(470-y0)*k-180*Math.sin(Math.PI*k)).toFixed(1)+') rotate('+(k*300).toFixed(0)+')')});
  R('cut7',TM.trash_can+1.4,.6);

  ['qa','qb','qc','qd'].forEach((id,i)=>R(id,TM.challenge+i*.4));
  R('fl8',TM.challenge+1.6);R('wr',TM.challenge+6.6);
  const w=8*Math.sin(t*3);A($('flg'),'d','M1380 420Q1420 '+(400+w).toFixed(1)+' 1470 '+(430-w*.5).toFixed(1)+'V490Q1420 '+(470+w).toFixed(1)+' 1380 480z');