const e0=p(u,TM.empty_purse,TM.empty_purse+.6); rise($('purse'),e0);
  const on0=u<TM.empty_purse+5?1:0;
  FL.forEach((c,i)=>{const k=(t*.5+i*.25)%1; c.setAttribute('cx',(1330+(i-1.5)*90*k).toFixed(1)); c.setAttribute('cy',(470-320*k+120*k*k).toFixed(1)); op(c,e0*(1-k)*on0)});
  const g0=p(u,TM.empty_purse+5,TM.empty_purse+6); $('gc0').setAttribute('cy',(220+260*g0).toFixed(1)); op($('gc0'),Math.min(1,g0*4));

  rise($('ark1'),p(u,TM.young_arkad,TM.young_arkad+.5)); rise($('tab'),p(u,TM.clay_tablet,TM.clay_tablet+.5));
  WD.forEach((w,i)=>{const a=TM.clay_tablet+.3+i*.07; op(w,p(u,a,a+.2))});
  rise($('hard'),p(u,TM.clay_tablet+4.2,TM.clay_tablet+4.8));
  const a1=TM.algamish-4.7, pv=p(u,a1,a1+.5); rise($('pay1'),pv);
  op($('ghost'),.7*p(u,a1+.6,a1+1.1));
  PC.forEach((c,j)=>{const n=4-j, k=p(u,a1+.9+n*.4,a1+1.7+n*.4); c.setAttribute('cy',(440-j*18+200*k).toFixed(1)); op(c,pv*(1-k))});
  rise($('gone1'),p(u,a1+2.8,a1+3.3));

  rise($('ark2'),p(u,TM.algamish-.3,TM.algamish+.3)); rise($('alg2'),p(u,TM.algamish,TM.algamish+.5));
  rise($('deal'),p(u,TM.algamish+5,TM.algamish+5.5)); rise($('lamp'),p(u,TM.oil_lamp,TM.oil_lamp+.5));
  const fs=1+.12*Math.sin(t*9)+.06*Math.sin(t*23); $('flame').setAttribute('transform','translate(920 585) scale('+(1/fs).toFixed(3)+' '+fs.toFixed(3)+') translate(-920 -585)');
  const dw=p(u,TM.oil_lamp+5,TM.oil_lamp+6.5); op($('moon'),1-dw); op($('sun'),dw); $('sun').setAttribute('cy',(520-270*dw).toFixed(1));
  rise($('done'),p(u,TM.oil_lamp+5.5,TM.oil_lamp+6)); rise($('dawn'),p(u,TM.oil_lamp+5.5,TM.oil_lamp+6.1));

  rise($('lab3'),p(u,TM.gold_coin-1.8,TM.gold_coin-1.3)); rise($('q3'),p(u,TM.gold_coin,TM.gold_coin+.6));
  const k3=p(u,TM.gold_coin+.3,TM.gold_coin+1.1), sc3=Math.max(.01,k3*(1+.02*Math.sin(t*2)));
  op($('coin3'),k3); $('coin3i').setAttribute('transform','translate(1100 470) scale('+sc3.toFixed(3)+') translate(-1100 -470)');
  rise($('qm'),p(u,TM.question,TM.question+.5)); rise($('ask'),p(u,TM.question+1.4,TM.question+2));

  rise($('ark4'),p(u,TM.sandal_maker-1,TM.sandal_maker-.5));
  MG.forEach((g,i)=>{const a=TM.sandal_maker+i*1.2; rise(g,p(u,a,a+.5)); op(LN[i],p(u,a,a+.5))});
  const f4=p(u,TM.merchant_line,TM.merchant_line+.5);
  C4.forEach((c,i)=>{const k=(t*.6+i*.33)%1; c.setAttribute('cx',(320+740*k).toFixed(1)); c.setAttribute('cy',(480+(MY[i]-480)*k).toFixed(1)); op(c,f4*Math.min(1,(1-k)*6))});
  rise($('fast'),p(u,TM.merchant_line+3.4,TM.merchant_line+4)); rise($('mirror'),p(u,TM.mirror,TM.mirror+.6));

  const kx=p(u,TM.jar,TM.jar+1.4);
  C5.forEach((c,i)=>op(c,p(u,TM.ten_coins+i*.12,TM.ten_coins+i*.12+.3)));
  C5[0].setAttribute('cx',(160+1140*kx).toFixed(1)); C5[0].setAttribute('cy',(400-160*Math.sin(Math.PI*kx)+200*kx).toFixed(1));
  rise($('keep5'),p(u,TM.ten_coins+1.5,TM.ten_coins+2)*(1-kx)); rise($('jar5'),p(u,TM.jar-.4,TM.jar));
  rise($('spend5'),p(u,TM.jar+1.4,TM.jar+1.9)); rise($('tenth'),p(u,TM.jar+3.4,TM.jar+4)); rise($('copper'),p(u,TM.jar+8.4,TM.jar+8.9));

  rise($('box6'),p(u,TM.week_pay-.3,TM.week_pay+.2));
  ST.forEach((g,i)=>{const a=TM.week_pay+i*1.2, v=p(u,a,a+.4); rise(g,v); op(G6[i],v); G6[i].setAttribute('cy',(344+336*p(u,a+.5,a+1.1)).toFixed(1))});
  const sm=p(u,TM.smile+.3,TM.smile+1.2); rise($('face'),p(u,TM.smile,TM.smile+.5));
  $('mouth').setAttribute('d','M1180 475Q1240 '+(475+45*sm).toFixed(1)+' 1300 475');
  rise($('miss'),p(u,TM.smile+3.8,TM.smile+4.4)); rise($('adjust'),p(u,TM.smile+7.1,TM.smile+7.6));

  op($('seed'),p(u,TM.seed,TM.seed+.5)); rise($('lseed'),p(u,TM.seed+5.3,TM.seed+5.8));
  // trunk stops at the canopy's bottom edge (y=530 when full) and is drawn behind the canopy
  const tr=p(u,TM.sapling,TM.sapling+2); $('trunk').setAttribute('d','M800 700V'+(700-164*tr).toFixed(1)); op($('trunk'),tr>0?1:0);
  $('canopy').setAttribute('r',(150*p(u,TM.sapling+1.5,TM.sapling+4)*(1+.015*Math.sin(t*1.5))).toFixed(1));
  rise($('lsap'),p(u,TM.sapling,TM.sapling+.5));
  FR7.forEach((c,i)=>op(c,p(u,TM.coin_pile+i*.2,TM.coin_pile+i*.2+.3)));
  P7.forEach((c,i)=>op(c,p(u,TM.coin_pile+i*.1,TM.coin_pile+i*.1+.25)));
  rise($('habit'),p(u,TM.coin_pile+1,TM.coin_pile+1.6));

  rise($('cal'),p(u,TM.calendar,TM.calendar+.5)); op($('ring'),p(u,TM.calendar+1,TM.calendar+1.5)*(.6+.4*Math.abs(Math.sin(t*2))));
  rise($('inst'),p(u,TM.calendar+.4,TM.calendar+1));
  rise($('qa'),p(u,TM.calendar+6.2,TM.calendar+6.7)); rise($('qb'),p(u,TM.calendar+6.6,TM.calendar+7.1)); rise($('tag'),p(u,TM.calendar+7.2,TM.calendar+7.7));