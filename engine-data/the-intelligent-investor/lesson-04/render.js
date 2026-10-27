const o=p(u,TM.two_doors+.3,TM.two_doors+1.5);
  $('dp0').setAttribute('width',(150-110*o).toFixed(1));$('dp1').setAttribute('width',(150-110*o).toFixed(1));
  rise($('sg0'),p(u,TM.two_doors+4.6,TM.two_doors+5.1));rise($('sg1'),p(u,TM.two_doors+4.9,TM.two_doors+5.4));

  const dk=p(u,TM.risk_dial+.3,TM.risk_dial+2);
  rise($('dial'),p(u,TM.risk_dial,TM.risk_dial+.5));
  $('ndl').setAttribute('transform','rotate('+(-80+150*dk+3*dk*Math.sin(t*9)).toFixed(1)+' 360 580)');
  rise($('gam'),p(u,TM.gambler,TM.gambler+.5));
  $('hrt').setAttribute('transform','translate(880 490) scale('+(1+.18*Math.pow(Math.abs(Math.sin(t*5)),4)).toFixed(3)+')');
  drw($('rx'),p(u,TM.gambler+5.4,TM.gambler+6.2));
  rise($('hurt'),p(u,TM.gambler+7.5,TM.gambler+8));drw($('hl'),p(u,TM.gambler+7.7,TM.gambler+9));

  rise($('clk'),p(u,TM.clock,TM.clock+.5));rise($('retL'),p(u,TM.clock,TM.clock+.5));
  $('hnd').setAttribute('transform','rotate('+(t*90%360).toFixed(1)+' 290 514)');
  rise($('tbx'),p(u,TM.toolbox,TM.toolbox+.5));
  CN.forEach((c,i)=>{const a=i<2?TM.clock+.4+i*.3:TM.toolbox+.4+(i-2)*.3;c.setAttribute('opacity',p(u,a,a+.3))});
  rise($('rsk'),p(u,TM.toolbox+4.5,TM.toolbox+5));

  rise($('chr'),p(u,TM.armchair,TM.armchair+.5));$('shd').setAttribute('opacity',p(u,TM.armchair+.5,TM.armchair+1.2));
  rise($('thr'),p(u,TM.armchair+1.2,TM.armchair+1.7));
  rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
  rise($('ns0'),p(u,TM.calendar+4.2,TM.calendar+4.7));rise($('ns1'),p(u,TM.calendar+6.8,TM.calendar+7.3));

  rise($('bsk'),p(u,TM.basket,TM.basket+.5));
  BL.forEach((b,i)=>{const k=p(u,TM.basket+.4+i*.4,TM.basket+1+i*.4);b.setAttribute('transform','translate(0 '+(-160*(1-k)).toFixed(1)+')');b.setAttribute('opacity',k)});
  $('coinG').setAttribute('opacity',p(u,TM.coins,TM.coins+.4));
  CO.forEach((c,i)=>rise(c,p(u,TM.coins+.3+i*.3,TM.coins+.6+i*.3)));
  const pk=p(u,TM.coins+3,TM.coins+4.5);$('plG').setAttribute('opacity',p(u,TM.coins+3,TM.coins+3.3));drw($('pl'),pk);
  PD.forEach((d,i)=>d.setAttribute('opacity',pk>=i/7?1:0));
  $('barG').setAttribute('opacity',p(u,TM.up_down,TM.up_down+.3));
  BR.forEach((b,i)=>{const h=60/PR[i]*p(u,TM.up_down+i*.2,TM.up_down+.5+i*.2);b.setAttribute('y',(780-h).toFixed(1));b.setAttribute('height',h.toFixed(1))});
  rise($('udL'),p(u,TM.up_down+2,TM.up_down+2.5));

  rise($('cards'),p(u,TM.magnifier,TM.magnifier+.5));
  $('mag').setAttribute('transform','translate('+(1100+260*Math.sin(t*.7)).toFixed(1)+' '+(440+120*Math.sin(t*1.1)).toFixed(1)+')');
  $('mag').setAttribute('opacity',p(u,TM.magnifier+.3,TM.magnifier+.8));
  const gl=u>=TM.magnifier+9.6;
  CD.forEach(([g,r,h])=>{r.setAttribute('fill',gl&&h?'var(--gain)':'var(--stage)');r.setAttribute('stroke',gl&&h?'var(--gain)':'var(--ink)');g.setAttribute('opacity',gl&&!h?.35:1)});
  rise($('gl'),p(u,TM.magnifier+9.6,TM.magnifier+10.1));
  rise($('desk'),p(u,TM.desk,TM.desk+.5));rise($('fin'),p(u,TM.magnifier+15,TM.magnifier+15.6));

  rise($('tag'),p(u,TM.price_tag,TM.price_tag+.5));
  [3,4,5].forEach((d,i)=>rise($('b'+i),p(u,TM.price_tag+d,TM.price_tag+d+.5)));
  rise($('map'),p(u,TM.detective,TM.detective+.5));
  const tk=p(u,TM.detective+.3,TM.detective+3);drw($('trl'),tk);
  const dp=$('trl').getPointAtLength(TL*tk);$('det').setAttribute('transform','translate('+dp.x.toFixed(1)+' '+dp.y.toFixed(1)+')');
  $('xm').setAttribute('opacity',p(u,TM.detective+3,TM.detective+3.4));
  rise($('pn0'),p(u,TM.map,TM.map+.5));rise($('pn1'),p(u,TM.map+1,TM.map+1.5));

  const a=p(u,TM.fork_road+.3,TM.fork_road+3),b=p(u,TM.fork_road+3.3,TM.fork_road+4.8);
  $('dr').setAttribute('cx',(800+70*Math.sin(a*4*Math.PI)).toFixed(1));$('dr').setAttribute('cy',(800-210*a-170*b).toFixed(1));
  $('dr').setAttribute('r',(22*(1-.5*b)).toFixed(1));$('dr').setAttribute('opacity',u>=TM.fork_road?1-.5*b:0);
  rise($('pit'),p(u,TM.fork_road+3.3,TM.fork_road+3.8));
  rise($('sp'),p(u,TM.signpost,TM.signpost+.5));
  const ck=p(u,TM.signpost+.6,TM.signpost+2.6),cp=RP[0].getPointAtLength(LT*(.03+.94*ck));
  $('cm').setAttribute('cx',cp.x.toFixed(1));$('cm').setAttribute('cy',cp.y.toFixed(1));$('cm').setAttribute('opacity',p(u,TM.signpost+.3,TM.signpost+.6));
  rise($('cmT'),p(u,TM.signpost+1,TM.signpost+1.5));

  rise($('qa'),p(u,TM.stopwatch,TM.stopwatch+.5));rise($('qb'),p(u,TM.stopwatch+.4,TM.stopwatch+.9));rise($('qc'),p(u,TM.stopwatch+.8,TM.stopwatch+1.3));
  rise($('stw'),p(u,TM.stopwatch+.3,TM.stopwatch+.8));
  $('swh').setAttribute('transform','rotate('+(t*60%360).toFixed(1)+' 1330 450)');
  rise($('ans'),p(u,TM.stopwatch+5.4,TM.stopwatch+6));