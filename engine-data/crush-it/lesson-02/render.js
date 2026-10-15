[1,0,2].forEach((i,o)=>rise(POD[i],p(u,TM.hook_scale+.5+o*.6,TM.hook_scale+1+o*.6)));

  CARDS.forEach((c,i)=>{const a=TM.three_cards+.4+i*.6;rise(c[0],p(u,a,a+.5));const b=TM.number_rank+.3+i*.4;rise(c[1],p(u,b,b+.4))});
  rise($('qban'),p(u,TM.quote_banner,TM.quote_banner+.6));rise($('ordr'),p(u,TM.number_rank+1.4,TM.number_rank+2));

  [0,1,2].forEach(i=>rise($('fr'+i),p(u,TM.family_home+i*.6,TM.family_home+i*.6+.5)));
  rise($('fhouse'),p(u,TM.family_home+.3,TM.family_home+.9));
  rise($('fcost'),p(u,TM.family_home+4.2,TM.family_home+4.8));
  rise($('fshd'),p(u,TM.heart_shield,TM.heart_shield+.5));rise($('frsn'),p(u,TM.heart_shield+.4,TM.heart_shield+1));
  rise($('fshop'),p(u,TM.shop_sign,TM.shop_sign+.6));

  rise($('tbx'),p(u,TM.toolbox,TM.toolbox+.5));rise($('clk'),p(u,TM.clock_face,TM.clock_face+.5));
  const ck=3*p(u,TM.clock_face+.4,TM.clock_face+5.2),ca=ck*2*Math.PI,fr=Math.min(ck,.999)*2*Math.PI;
  $('chand').setAttribute('x2',(800+110*Math.sin(ca)).toFixed(1));$('chand').setAttribute('y2',(420-110*Math.cos(ca)).toFixed(1));
  $('cswp').setAttribute('d',fr>0?'M800 420L800 300A120 120 0 '+(fr>Math.PI?1:0)+' 1 '+(800+120*Math.sin(fr)).toFixed(1)+' '+(420-120*Math.cos(fr)).toFixed(1)+'Z':'');
  rise($('nos'),p(u,TM.clock_face+5.3,TM.clock_face+5.9));
  rise($('tv'),p(u,TM.tv_off,TM.tv_off+.5));const sw=p(u,TM.tv_off+2,TM.tv_off+2.6);
  $('tvp').setAttribute('opacity',1-sw);$('tvh').setAttribute('opacity',sw);

  rise($('ls'),p(u,TM.liquor_store,TM.liquor_store+.6));
  rise($('ar1'),p(u,TM.wine_bottles,TM.wine_bottles+.4));rise($('wl'),p(u,TM.wine_bottles+.2,TM.wine_bottles+.7));
  BT.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.wine_bottles+.6+i*.08,TM.wine_bottles+.9+i*.08)));
  rise($('ar2'),p(u,TM.video_camera,TM.video_camera+.4));rise($('cam'),p(u,TM.video_camera+.2,TM.video_camera+.7));
  $('rec').setAttribute('opacity',Math.sin(t*4)>0?1:.25);
  WK.forEach((w,i)=>w.setAttribute('fill',u>=TM.video_camera+1.5+i*.5?'var(--gain)':'var(--stage)'));

  rise($('flm'),p(u,TM.flame,TM.flame+.5));const fg=.4+.6*p(u,TM.flame,TM.flame+1.2);
  FLP.setAttribute('transform','translate(330 470) scale('+(3*fg*(1+.04*Math.sin(t*7))).toFixed(3)+' '+(3*fg*(1+.06*Math.sin(t*5.3))).toFixed(3)+')');
  rise($('pb'),p(u,TM.flame+.8,TM.flame+1.4));
  rise($('ps0'),p(u,TM.flame+4.6,TM.flame+5.1));rise($('pst'),p(u,TM.flame+4.9,TM.flame+5.4));
  strike('pss',260,p(u,TM.flame+5.8,TM.flame+6.4));rise($('ps2'),p(u,TM.flame+6.2,TM.flame+6.8));
  rise($('bulb'),p(u,TM.burnout_bulb,TM.burnout_bulb+.5));const on=1-p(u,TM.burnout_bulb+1.2,TM.burnout_bulb+2.2);
  $('blr').setAttribute('opacity',(on*(.6+.4*Math.sin(t*25))).toFixed(2));
  const bc=on>.5?'var(--gain)':'var(--loss)';$('blc').style.stroke=bc;$('blf').style.stroke=bc;
  $('blf').setAttribute('stroke-dasharray',on>.5?'none':'14 10');$('blk').setAttribute('opacity',1-on);

  rise($('scl'),p(u,TM.balance_scale,TM.balance_scale+.6));
  const ta=(12*p(u,TM.balance_scale+4.2,TM.balance_scale+5.4)+1.5*Math.sin(t*1.5)*(u<TM.balance_scale+4.2?1:0))*Math.PI/180,bx=260*Math.cos(ta),by=260*Math.sin(ta);
  $('beam').setAttribute('x1',(500-bx).toFixed(1));$('beam').setAttribute('y1',(300-by).toFixed(1));$('beam').setAttribute('x2',(500+bx).toFixed(1));$('beam').setAttribute('y2',(300+by).toFixed(1));
  $('pl').setAttribute('transform','translate('+(500-bx).toFixed(1)+' '+(300-by).toFixed(1)+')');$('pr').setAttribute('transform','translate('+(500+bx).toFixed(1)+' '+(300+by).toFixed(1)+')');
  rise($('sw'),p(u,TM.balance_scale+4.8,TM.balance_scale+5.4));
  rise($('stl'),p(u,TM.ladder_steps,TM.ladder_steps+.4));[0,1,2].forEach(i=>rise($('st'+i),p(u,TM.ladder_steps+i*.6,TM.ladder_steps+i*.6+.5)));

  [0,1,2].forEach(i=>rise($('vc'+i),p(u,TM.venn_circles+i*.4,TM.venn_circles+i*.4+.5)));rise($('vh'),p(u,TM.venn_circles+1.4,TM.venn_circles+1.9));
  const h0=u>=TM.venn_circles+3&&u<TM.venn_circles+5.6,h1=u>=TM.venn_circles+5.6&&u<TM.lone_figure,lo=u>=TM.lone_figure;
  $('vc0').setAttribute('fill-opacity',h0?.3:0);$('vc1').setAttribute('fill-opacity',h1?.3:0);
  $('vc2').setAttribute('opacity',lo?.3:1);$('vc2').setAttribute('stroke-dasharray',lo?'12 12':'none');
  rise($('vt0'),p(u,TM.venn_circles+3,TM.venn_circles+3.5));rise($('vt1'),p(u,TM.venn_circles+5.6,TM.venn_circles+6.1));rise($('vt2'),p(u,TM.lone_figure,TM.lone_figure+.6));

  rise($('qa'),p(u,TM.index_card,TM.index_card+.5));rise($('qb'),p(u,TM.index_card+.4,TM.index_card+.9));
  rise($('qm1'),p(u,TM.index_card+1,TM.index_card+1.5));rise($('card'),p(u,TM.index_card+.8,TM.index_card+1.3));
  CL.forEach((l,i)=>l.setAttribute('stroke-dashoffset',(215*(1-p(u,TM.index_card+1.4+i*.6,TM.index_card+2+i*.6))).toFixed(1)));
  rise($('qm2'),p(u,TM.index_card+4.2,TM.index_card+4.8));rise($('cck'),p(u,TM.index_card+4.6,TM.index_card+5.1));