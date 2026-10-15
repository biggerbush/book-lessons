$('tag').setAttribute('transform','rotate('+(6*Math.sin(t*1.6)).toFixed(2)+' 1290 200)');
  rise($('tagw'),p(u,TM.price_tag,TM.price_tag+.6)); rise($('offer'),p(u,TM.price_tag+4.6,TM.price_tag+5.1));

  // scene 1: everything must be fully in before the scene ends
  const e1=SC[1][1]/K;
  shops.forEach((g,i)=>rise(g,p(u,TM.two_shops+i*.5,TM.two_shops+i*.5+.5)));
  rise($('shw'),p(u,TM.shopper,TM.shopper+.5)); $('shopper').setAttribute('transform','translate('+(14*Math.sin(t*1.3)).toFixed(1)+' 0)');
  const bb=Math.min(TM.shopper+3.4,e1-2.6); rise($('bub'),p(u,bb,bb+.5));
  const pa=Math.min(TM.price_signs,e1-2.2), ps=u>=pa; $('bq').textContent=ps?'$':'?'; $('bq').style.fill=ps?'var(--loss)':'var(--ink)';
  tags.forEach((g,i)=>rise(g,p(u,pa+i*.2,pa+i*.2+.4)));
  const oa=Math.min(TM.price_signs+.3,e1-1.8); rise($('only'),p(u,oa,oa+.6));

  // scene 2
  const s2=SC[2][0]/K, e2=SC[2][1]/K;
  [s2+.3,s2+.7,TM.cut_price,TM.cut_price+4.2,TM.shrink_coin,TM.shrink_coin+.5].forEach((a,i)=>rise(bars[i],p(u,a,a+.4)));
  $('down').setAttribute('opacity',p(u,TM.cut_price+4.2,TM.cut_price+5)); rise($('right'),p(u,TM.cut_price,TM.cut_price+.5));
  const ske=Math.min(TM.shrink_coin+2.5,e2-1.2), sk=p(u,TM.shrink_coin,Math.max(ske,TM.shrink_coin+.6));
  const hs=340-230*sk, hp=340-260*sk;
  $('svc').setAttribute('height',hs.toFixed(1)); $('svc').setAttribute('y',(700-hs).toFixed(1));
  $('pft').setAttribute('height',hp.toFixed(1)); $('pft').setAttribute('y',(700-hp).toFixed(1));
  $('coin').setAttribute('transform','translate(1330 '+(700-hp-56).toFixed(1)+')');
  const ta=Math.min(TM.shrink_coin+3.4,e2-1.2); rise($('trap'),p(u,ta,ta+.6));

  rise($('tr'),p(u,TM.trainer,TM.trainer+.5)); rise($('clk'),p(u,TM.hour_clock,TM.hour_clock+.5));
  RW.forEach((g,i)=>rise(g,p(u,TM.trainer_row+i*.2,TM.trainer_row+i*.2+.4))); rise($('rowlbl'),p(u,TM.trainer_row+1,TM.trainer_row+1.5));
  const hk=u-TM.trainer_row-3.8; $('hunt').setAttribute('opacity',cl(hk*2));
  $('hunt').setAttribute('x',(160+(3+3*Math.sin(Math.max(hk,0)*1.2-Math.PI/2))*180).toFixed(1));
  rise($('cheap'),p(u,TM.trainer_row+3.8,TM.trainer_row+4.4));

  rise($('box'),p(u,TM.package_box,TM.package_box+.5));
  [0,1.2,2.6].forEach((d,i)=>rise($('w'+i),p(u,TM.meal_plan+d,TM.meal_plan+d+.5)));
  rise($('nolike'),p(u,TM.package_box+10.8,TM.package_box+11.4)); rise($('scl'),p(u,TM.package_box+1,TM.package_box+1.6));
  const ang=.25*p(u,TM.scale_tipped,TM.scale_tipped+1.2), bc=260*Math.cos(ang), bs=260*Math.sin(ang);
  $('beam').setAttribute('x1',(1100-bc).toFixed(1)); $('beam').setAttribute('y1',(360-bs).toFixed(1));
  $('beam').setAttribute('x2',(1100+bc).toFixed(1)); $('beam').setAttribute('y2',(360+bs).toFixed(1));
  $('panL').setAttribute('transform','translate('+(1100-bc).toFixed(1)+' '+(360-bs).toFixed(1)+')');
  $('panR').setAttribute('transform','translate('+(1100+bc).toFixed(1)+' '+(360+bs).toFixed(1)+')');

  rise($('troph'),p(u,TM.gold_trophy,TM.gold_trophy+.5)); rise($('ring'),p(u,TM.gold_trophy+3,TM.gold_trophy+3.6));
  rise($('lanes'),p(u,TM.empty_lane,TM.empty_lane+.5));
  $('rv').setAttribute('opacity',(p(u,TM.empty_lane,TM.empty_lane+.4)*(1-p(u,TM.empty_lane+1.2,TM.empty_lane+2.2))).toFixed(3));
  $('ours').setAttribute('cx',(760+640*p(u,TM.empty_lane+1.5,TM.empty_lane+4)).toFixed(1));
  rise($('val'),p(u,TM.empty_lane+4.2,TM.empty_lane+4.8));

  rise($('tb'),p(u,TM.toolbox,TM.toolbox+.5)); rise($('arr'),p(u,TM.toolbox+5.3,TM.toolbox+5.8)); rise($('pk'),p(u,TM.toolbox+5.8,TM.toolbox+6.3));
  rise($('th'),p(u,TM.thought_bubble,TM.thought_bubble+.5)); rise($('meg'),p(u,TM.thought_bubble+.8,TM.thought_bubble+1.3));

  rise($('mir'),p(u,TM.mirror,TM.mirror+.5));
  lu.forEach((q,i)=>{rise(q[0],p(u,TM.checklist+i*.3,TM.checklist+i*.3+.5));
    rise(q[1],p(u,TM.checklist+5.8+i*.2,TM.checklist+6.2+i*.2)*(i?1:1-p(u,TM.spark,TM.spark+.4)))});
  rise($('cmp'),p(u,TM.checklist+1.2,TM.checklist+1.7)); rise($('chg'),p(u,TM.checklist+5.8,TM.checklist+6.4));
  const sp=p(u,TM.spark,TM.spark+.5); $('spk').setAttribute('opacity',sp);
  $('star').setAttribute('transform','translate(720 278) scale('+(sp*(1+.1*Math.sin(t*4))).toFixed(3)+') rotate('+(t*20%360).toFixed(1)+')');
  rise($('beg'),p(u,TM.spark+.3,TM.spark+.9));

  // challenge: write one sentence, then compare prices
  const Q=TM.question_mark;
  rise($('qa'),p(u,Q,Q+.5)); rise($('qb'),p(u,Q+.4,Q+.9)); rise($('pad'),p(u,Q+.6,Q+1.1));
  const wk=lin(u,Q+1,Q+3.4), xe=220+360*wk; let wp='220,'+hw(220).toFixed(1);
  for(let x=224;x<=xe;x+=4)wp+=' '+x+','+hw(x).toFixed(1);
  $('wline').setAttribute('points',wp);
  const wr=wk>0&&wk<1, ye=hw(xe)+(wr?-4*Math.abs(Math.sin(t*9)):0);
  $('pen').setAttribute('transform','translate('+xe.toFixed(1)+' '+ye.toFixed(1)+') rotate(30)');
  rise($('qc'),p(u,Q+3.4,Q+3.9)); rise($('qd'),p(u,Q+3.8,Q+4.3));
  rise($('cmpA'),p(u,Q+3.6,Q+4.1)); rise($('cmpB'),p(u,Q+4.1,Q+4.6)); rise($('tagB'),p(u,Q+4.6,Q+5.1));
  rise($('qm'),p(u,Q+5,Q+5.5)); $('qmi').setAttribute('transform','translate(0 '+(6*Math.sin(t*2)).toFixed(1)+')');