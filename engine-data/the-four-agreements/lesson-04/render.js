const hwc=TM.hurtful_word,h0=p(u,hwc,hwc+.7),h1=p(u,hwc+4.6,hwc+6);
  $('hw').setAttribute('transform','translate('+((1-h0)*160).toFixed(1)+' '+(-(1-h0)*200+h1*220).toFixed(1)+')');
  $('hw').setAttribute('opacity',(h0*(1-h1)).toFixed(2)); me0.setAttribute('class',h1>.5?'gain':'ink');

  const sb=TM.speech_bubble;
  rise($('you1'),p(u,TM.stranger,TM.stranger+.5));
  const sw=p(u,TM.stranger+2.2,TM.stranger+3.4); $('strw').setAttribute('transform','translate('+((1-sw)*320).toFixed(1)+' 0)'); $('strw').setAttribute('opacity',sw.toFixed(2));
  rise($('bub1'),p(u,sb,sb+.5)); rise($('nev'),p(u,sb+4.2,sb+4.7));
  const st=p(u,sb+6.3,sb+6.8); rise($('stg'),st); me1.setAttribute('class',st>.5?'loss':'ink');
  rise($('qm'),p(u,TM.question_mark,TM.question_mark+.5)); rise($('qtx'),p(u,TM.question_mark+.4,TM.question_mark+1));

  const tc=TM.thought_cloud,tw=TM.two_bubbles;
  rise($('his'),p(u,tc,tc+.5)); rise($('cld'),p(u,tc+.5,tc+1)); rise($('hc'),p(u,tc+5,tc+5.5));
  rise($('yc'),p(u,tw,tw+.5)); rise($('wd'),p(u,tw+.6,tw+1)); rise($('blk'),p(u,tw+1,tw+1.5)); rise($('quo'),p(u,tw+3,tw+3.6));

  const sp=p(u,TM.spotlight,TM.spotlight+.6),me=p(u,TM.spotlight+3.8,TM.spotlight+4.4),cr=p(u,TM.crowd,TM.crowd+.6);
  rise($('cone'),sp); rise($('meS'),sp);
  $('meL').setAttribute('opacity',(me*(1-cr)).toFixed(2)); $('crl').setAttribute('opacity',(me*(1-cr)).toFixed(2));
  $('crd').setAttribute('opacity',(me*(.35+.65*cr)).toFixed(2));
  TB.forEach((b,i)=>rise(b,p(u,TM.crowd+.3+i*.2,TM.crowd+.8+i*.2))); rise($('own'),p(u,TM.crowd+4.6,TM.crowd+5.2));

  const pb=TM.poison_bottle,tb=TM.trash_bag;
  rise($('btl'),p(u,pb,pb+.5)); rise($('yo4'),p(u,pb+.3,pb+.8));
  const dO=p(u,pb+3,pb+3.4);
  DR.forEach((c,i)=>{const k=(t*.7+i/4)%1,a=(1-k)*(1-k),b=2*k*(1-k),e=k*k;
    c.setAttribute('cx',(a*370+b*560+e*756).toFixed(1)); c.setAttribute('cy',(a*330+b*250+e*440).toFixed(1));
    c.setAttribute('opacity',(dO*(k<.9?1:(1-k)*10)).toFixed(2))});
  rise($('oth4'),p(u,tb,tb+.5)); rise($('bag'),p(u,tb,tb+.5));
  // bag is offered toward you but stops in the gap between the two figures (>100px clear of either)
  $('bagw').setAttribute('transform','translate('+(-110*p(u,tb+1.5,tb+3)).toFixed(1)+' 0)');
  const wk=p(u,tb+5.8,tb+6.3); me4.setAttribute('class',wk>.5?'loss':'ink');
  $('rg').setAttribute('r',(66+8*Math.sin(t*4)).toFixed(1)); $('rg').setAttribute('opacity',wk.toFixed(2)); rise($('wk'),wk);

  const gs=TM.gold_star,bs=TM.balance_scale;
  rise($('star'),p(u,gs,gs+.5)); rise($('sA'),p(u,gs+2.2,gs+2.7)); rise($('sB'),p(u,gs+6.8,gs+7.3)); rise($('ins'),p(u,gs+6.8,gs+7.3)); rise($('lab5'),p(u,gs+7.3,gs+7.8));
  const sc=p(u,bs,bs+.5); rise($('frm'),sc); rise($('pLs'),sc); rise($('pRs'),sc);
  const ang=-8*(1-p(u,bs+.6,bs+1.8))+1.2*Math.sin(t*1.6)*p(u,bs+1.8,bs+2.4),dy=280*Math.sin(ang*Math.PI/180);
  $('beam').setAttribute('transform','rotate('+ang.toFixed(2)+' 800 470)');
  $('pL').setAttribute('transform','translate(0 '+(-dy).toFixed(1)+')'); $('pR').setAttribute('transform','translate(0 '+dy.toFixed(1)+')');
  rise($('bal'),p(u,bs+1.8,bs+2.4));

  const sh=TM.shield,od=TM.open_door;
  rise($('yo6'),p(u,sh,sh+.5)); rise($('shd'),p(u,sh+.2,sh+.7));
  const on=p(u,sh+.6,sh+1.2);
  // chips bounce off the shield and shrink away to nothing (full opacity while visible, no faint ghost)
  CHP.forEach((g,i)=>{const c=(t*.4+i/3)%1,q=Math.abs(1-2*c),s=Math.min(1,4*(1-q)),x=700+340*q;
    g.setAttribute('transform','translate('+(x+85).toFixed(1)+' '+(390+i*90)+') scale('+s.toFixed(3)+') translate(-85 0)');
    g.setAttribute('opacity',(s<.15?0:on).toFixed(2))});
  rise($('kp'),p(u,sh+5,sh+5.5)); rise($('dor'),p(u,od,od+.5));
  $('dr').setAttribute('width',(180-140*p(u,od+.6,od+1.6)).toFixed(1)); rise($('fr'),p(u,od+1,od+1.5));

  const a7=[TM.pause_button,TM.pause_button+3.8,TM.label_tag,TM.label_tag+4.1];
  CD.forEach((c,i)=>{rise(c[0],p(u,a7[i],a7[i]+.5)); c[1].setAttribute('stroke',u>=a7[i]&&(i==3||u<a7[i+1])?'var(--gain)':'var(--line)')});
  rise($('tg'),p(u,TM.label_tag+.6,TM.label_tag+1.2));

  const S8=SC[8][0]/K;
  rise($('qa'),p(u,S8+.4,S8+.9)); rise($('qb'),p(u,S8+.9,S8+1.4)); rise($('qc'),p(u,S8+3.8,S8+4.3)); rise($('fin'),p(u,S8+4.2,S8+4.8));
  $('hb').setAttribute('transform','translate('+(1030+270*ease(cl((t%3)/2))).toFixed(1)+' 0)');