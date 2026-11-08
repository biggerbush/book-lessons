rise($('hk'),p(u,TM.hook_phrase,TM.hook_phrase+.5)); rise($('t0p'),p(u,TM.hook_phrase+.2,TM.hook_phrase+.7));
  stk('hks',1240,180,p(u,TM.hook_phrase+3.4,TM.hook_phrase+4));

  rise($('cof'),p(u,TM.coffee_table,TM.coffee_table+.5)); rise($('bulb'),p(u,TM.coffee_table+.6,TM.coffee_table+1.1));
  rise($('skp'),p(u,TM.skeptic,TM.skeptic+.5));
  const shk=p(u,TM.skeptic+1,TM.skeptic+1.4)*(1-p(u,TM.skeptic+3.6,TM.skeptic+4)), lean=p(u,TM.skeptic+.3,TM.skeptic+1);
  $('skf').setAttribute('transform','translate('+(24*lean+10*shk*Math.sin(t*9)).toFixed(1)+' 0)');
  rise($('vrd'),p(u,TM.skeptic+4.6,TM.skeptic+5.1));
  const sv=TM.skeptic+9.9; rise($('shv'),p(u,sv,sv+.5));
  $('you1').setAttribute('transform','translate(0 '+(8*Math.abs(Math.sin(t*5))*p(u,sv,sv+.3)*(1-p(u,sv+1.6,sv+2))).toFixed(1)+')');
  $('bulbC').style.fill=u>=sv+.8?'var(--line)':'var(--gain)'; $('rays').setAttribute('opacity',u>=sv+.8?0:1);

  rise($('bk'),p(u,TM.rule_book,TM.rule_book+.5));
  DU.forEach((d,i)=>{const k=(t*.3+i*.37)%1; d.setAttribute('cy',(236-22*k).toFixed(1)); d.setAttribute('opacity',(Math.sin(k*Math.PI)).toFixed(2))});
  rise($('r1'),p(u,TM.rule_money,TM.rule_money+.5)); rise($('r2'),p(u,TM.rule_team,TM.rule_team+.5)); rise($('r3'),p(u,TM.rule_team+6.2,TM.rule_team+6.8));

  rise($('qcd'),p(u,TM.quote_card,TM.quote_card+.6)); rise($('shd'),p(u,TM.shield,TM.shield+.5)); rise($('arwo'),p(u,TM.shield+.8,TM.shield+1.3));
  $('arw').setAttribute('transform','translate('+(900+40*Math.abs(Math.sin(t*2.2))).toFixed(1)+' 440)');

  rise($('cl'),p(u,TM.thought_cloud,TM.thought_cloud+.5)); rise($('spk'),p(u,TM.thought_cloud-.4,TM.thought_cloud));
  rise($('lim'),p(u,TM.thought_cloud+4.2,TM.thought_cloud+4.7)); rise($('dr'),p(u,TM.thought_cloud+4.6,TM.thought_cloud+5.1));
  const od=p(u,TM.open_door+.3,TM.open_door+1.3), dw=240-170*od, ds=30*od;
  $('leaf').setAttribute('points','1000,300 '+(1000+dw)+','+(300+ds)+' '+(1000+dw)+','+(720-ds)+' 1000,720'); $('lit').setAttribute('opacity',(.3*od).toFixed(2));
  const wm=p(u,TM.open_door+.8,TM.open_door+2.6), walking=wm>0&&wm<1;
  $('wk').setAttribute('transform','translate('+(760+360*wm).toFixed(1)+' '+(walking?-6*Math.abs(Math.sin(t*8)):0).toFixed(1)+')');
  $('wk').setAttribute('opacity',p(u,TM.thought_cloud+4.6,TM.thought_cloud+5.1));
  rise($('pes'),p(u,TM.open_door+1.5,TM.open_door+2.1));

  [TM.small_office,TM.piggy_bank,TM.tiny_team,TM.basecamp_logo].forEach((a,i)=>rise(PC[i],p(u,a,a+.5)));
  const cc=(t%1.6)/1.6; coin.setAttribute('cy',(290+68*ease(cc)).toFixed(1)); coin.setAttribute('opacity',cc<.8?1:((1-cc)/.2).toFixed(2));
  rise($('cust'),p(u,TM.basecamp_logo+.3,TM.basecamp_logo+.8));
  CU.forEach((c,i)=>c.setAttribute('fill',u>=TM.basecamp_logo+.6+i*.05?'var(--gain)':'var(--line)'));

  rise($('pg'),p(u,TM.blank_page,TM.blank_page+.5)); stk('q1s',236,330,p(u,TM.pencil,TM.pencil+.5)); rise($('q2'),p(u,TM.pencil+.4,TM.pencil+.9));
  const pk=p(u,TM.pencil+.8,TM.pencil+3.8)*4, pj=Math.min(3,Math.floor(pk)), pf=cl(pk-pj);
  SK.forEach((s,i)=>s.setAttribute('stroke-dashoffset',((SKL[i]+2)*(1-cl(pk-i))).toFixed(1)));
  $('pen').setAttribute('transform','translate('+(250+SKL[pj]*pf).toFixed(1)+' '+(416+pj*70)+')');
  $('pen').setAttribute('opacity',(p(u,TM.pencil+.4,TM.pencil+.8)*(1-p(u,TM.pencil+4,TM.pencil+4.4))).toFixed(2));
  rise($('sp'),p(u,TM.signpost,TM.signpost+.5)); rise($('tl'),p(u,TM.signpost+1.2,TM.signpost+1.8));

  rise($('nb'),p(u,TM.notebook,TM.notebook+.5)); rise($('qm'),p(u,TM.question_mark,TM.question_mark+.5));
  rise($('oa'),p(u,TM.question_mark+4.9,TM.question_mark+5.4));
  stk('ws1',150,230,p(u,TM.question_mark+5.4,TM.question_mark+5.9)); stk('ws2',150,180,p(u,TM.question_mark+5.7,TM.question_mark+6.2));
  rise($('ob'),p(u,TM.question_mark+10.7,TM.question_mark+11.2));

  rise($('qa'),p(u,TM.mirror,TM.mirror+.5)); rise($('qb'),p(u,TM.mirror+.4,TM.mirror+.9)); rise($('qc2'),p(u,TM.mirror+.8,TM.mirror+1.3));
  rise($('mr'),p(u,TM.mirror+.2,TM.mirror+.7)); rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
  calD.setAttribute('opacity',(.6+.4*Math.abs(Math.sin(t*3))).toFixed(2));