H0.forEach((e,i)=>e.setAttribute('opacity',p(u,TM.hay_plate+i*.05,TM.hay_plate+i*.05+.3)));
  $('hay0').setAttribute('transform','translate(0 '+(2*Math.sin(t*1.5)).toFixed(1)+')');

  rise($('simple'),p(u,TM.stomach,TM.stomach+.5));
  ['f0','f1','f2'].forEach((id,i)=>{const h=280*p(u,TM.stomach+.4+i*.4,TM.stomach+1.6+i*.4);$(id).setAttribute('y',530-h);$(id).setAttribute('height',h)});
  rise($('imp'),p(u,TM.trophy,TM.trophy+.5));
  const h3=280*(.22+.1*Math.sin(t*1.8))*p(u,TM.trophy+.3,TM.trophy+1.2);$('f3').setAttribute('y',530-h3);$('f3').setAttribute('height',h3);
  rise($('jq'),p(u,TM.james_quote,TM.james_quote+.6));

  rise($('wm'),p(u,TM.farm_woman,TM.farm_woman+.5));rise($('fam'),p(u,TM.farm_woman+.6,TM.farm_woman+1.1));
  rise($('hp'),p(u,TM.hay_pile,TM.hay_pile+.6));
  const ang=u>=TM.angry_family;FAM.forEach(g=>[...g.children].forEach(c=>c.setAttribute('class',ang?'loss':'ink')));
  BUB.forEach((b,i)=>{const a=TM.angry_family+i*.2;rise(b,p(u,a,a+.4)*(1-.0*i))});
  $('bub').setAttribute('transform','translate(0 '+(4*Math.sin(t*5)).toFixed(1)+')');
  rise($('yr'),p(u,TM.angry_family+4,TM.angry_family+4.5));$('yrn').textContent=Math.round(20*p(u,TM.angry_family+4,TM.angry_family+5.5))+' years';

  rise($('sw'),p(u,TM.schwab,TM.schwab+.5));$('mil').textContent='$'+Math.round(1e6*p(u,TM.schwab+.4,TM.schwab+2)).toLocaleString('en-US');
  rise($('mill'),p(u,TM.steel_mill,TM.steel_mill+.5));
  SMK.forEach((c,i)=>{const k=(t*.5+i/3)%1;c.setAttribute('cy',(300-80*k).toFixed(1));c.setAttribute('r',(12+16*k).toFixed(1));c.setAttribute('opacity',(.5*(1-k)).toFixed(2))});
  rise($('crowd'),p(u,TM.cheer_crowd,TM.cheer_crowd+.5));
  const ch=u>=TM.cheer_crowd+.6;
  CRW.forEach(g=>[...g.children].forEach(c=>c.setAttribute('class',ch?'gain':'ink')));
  ARM.forEach((pr,i)=>pr.forEach((a,j)=>{const s=j?1:-1,w=ch?10*Math.sin(t*6+i+j):0,x=CX[i];a.setAttribute('d','M'+(x+s*28)+' 522L'+(x+s*46+w).toFixed(1)+' 448');a.setAttribute('opacity',ch?1:0)}));

  rise($('scl'),p(u,TM.scales,TM.scales+.5));rise($('coin'),p(u,TM.scales+.5,TM.scales+1));rise($('lf'),p(u,TM.scales+.8,TM.scales+1.3));
  rise($('hrt'),p(u,TM.heart,TM.heart+.5));rise($('lr'),p(u,TM.heart+.3,TM.heart+.8));
  const ag=(9*p(u,TM.heart+.3,TM.heart+1.3)+.8*Math.sin(t*1.5))*Math.PI/180,co=Math.cos(ag),sn=Math.sin(ag);
  $('beam').setAttribute('transform','rotate('+(ag*180/Math.PI).toFixed(2)+' 800 280)');
  $('panL').setAttribute('transform','translate('+(800-360*co).toFixed(1)+' '+(280-360*sn).toFixed(1)+')');
  $('panR').setAttribute('transform','translate('+(800+360*co).toFixed(1)+' '+(280+360*sn).toFixed(1)+')');
  $('crack').setAttribute('opacity',p(u,TM.fake_coin,TM.fake_coin+.4));rise($('fk'),p(u,TM.fake_coin+.3,TM.fake_coin+.8));

  rise($('ppl'),p(u,TM.magnifier,TM.magnifier+.5));rise($('mag'),p(u,TM.magnifier+.3,TM.magnifier+.8));
  const mx=200+1160*p(u,TM.magnifier+.8,TM.emerson-.3);$('magI').setAttribute('transform','translate('+mx.toFixed(1)+' 400)');
  const gp=p(u,TM.gold_star,TM.gold_star+.5);
  ST.forEach((s,i)=>{s.setAttribute('opacity',cl((mx-PX[i]+20)/60).toFixed(2));s.setAttribute('transform','translate('+PX[i]+' 300) scale('+(1+.3*gp*(.6+.4*Math.sin(t*4+i))).toFixed(3)+')')});
  rise($('em'),p(u,TM.emerson,TM.emerson+.6));rise($('gs'),p(u,TM.gold_star,TM.gold_star+.5));

  rise($('tr'),p(u,TM.sparks,TM.sparks+.5));
  const pr=p(u,TM.sparks+.4,TM.thank_note-.2),wp=TRL.getPointAtLength(TL*pr);
  $('walk').setAttribute('cx',wp.x.toFixed(1));$('walk').setAttribute('cy',wp.y.toFixed(1));$('walk').setAttribute('opacity',p(u,TM.sparks,TM.sparks+.4));
  SPK.forEach((s,i)=>{const k=cl((pr-(i+.5)/9)*9);s[0].setAttribute('opacity',k.toFixed(2));s[0].setAttribute('transform','translate('+s[1].toFixed(1)+' '+s[2].toFixed(1)+') scale('+(.5+.5*k+.12*Math.sin(t*5+i)).toFixed(3)+')')});
  rise($('note'),p(u,TM.thank_note,TM.thank_note+.5));rise($('mem'),p(u,TM.thank_note+3,TM.thank_note+3.6));
  $('cloud').setAttribute('stroke-width',(5+2*Math.sin(t*3)).toFixed(1));

  rise($('col'),p(u,TM.coworker,TM.coworker+.5));rise($('you7'),p(u,TM.coworker+.5,TM.coworker+1));
  $('gear').setAttribute('transform','rotate('+((t*40)%360).toFixed(1)+')');
  rise($('vg'),p(u,TM.speech_bubble,TM.speech_bubble+.4));
  $('vs').setAttribute('x2',(444+256*p(u,TM.speech_bubble+1.2,TM.speech_bubble+1.7)).toFixed(1));
  rise($('sp'),p(u,TM.speech_bubble+1.8,TM.speech_bubble+2.4));rise($('sb'),p(u,TM.speech_bubble+3.5,TM.speech_bubble+4.1));

  rise($('qa'),p(u,TM.dinner_table,TM.dinner_table+.5));rise($('qb'),p(u,TM.dinner_table+.4,TM.dinner_table+.9));rise($('qc'),p(u,TM.dinner_table+.8,TM.dinner_table+1.3));
  $('pl').setAttribute('opacity',p(u,TM.dinner_table+1.2,TM.dinner_table+1.8));
  $('hh').setAttribute('transform','scale('+(1+.08*Math.pow(Math.abs(Math.sin(t*3)),4)).toFixed(3)+')');
  rise($('tt'),p(u,TM.dinner_table+7.4,TM.dinner_table+8));