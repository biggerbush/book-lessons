const hf=p(u,TM.hourglass,TM.hourglass+11),L=300+136*hf,w=12+68*(440-L)/174,hb=8+120*hf;
  rise($('hg'),p(u,TM.hourglass,TM.hourglass+.6));
  $('sandT').setAttribute('points',(1350-w).toFixed(1)+','+L.toFixed(1)+' '+(1350+w).toFixed(1)+','+L.toFixed(1)+' 1350,438');
  $('sandB').setAttribute('points','1278,608 1422,608 1350,'+(608-hb).toFixed(1));
  $('stream').setAttribute('d','M1350 440V'+(608-hb).toFixed(1)); $('stream').setAttribute('opacity',hf>0&&hf<1?1:0);
  rise($('stay'),p(u,TM.hourglass+5.8,TM.hourglass+6.4));

  $('crv').setAttribute('points',CP.slice(0,1+Math.round(60*p(u,TM.curve,TM.curve+3))).join(' '));
  CB.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.curve+4.6+i*.2,TM.curve+4.9+i*.2)));
  rise($('gog'),p(u,TM.curve+4.6,TM.curve+5.1));
  JF.forEach((j,i)=>{rise(j[0],p(u,TM.three_jars+i*.4,TM.three_jars+i*.4+.5));const h=250*EX(p(u,TM.three_jars+1.5,TM.three_jars+9))*[1,.9,.96][i];j[1].setAttribute('y',(670-h).toFixed(1));j[1].setAttribute('height',h.toFixed(1))});
  rise($('late'),p(u,TM.three_jars+4.9,TM.three_jars+5.4)); rise($('lateT'),p(u,TM.three_jars+5.2,TM.three_jars+5.8));

  rise($('pA'),p(u,TM.two_players,TM.two_players+.5));
  const gr=p(u,TM.two_players+5,TM.two_players+5.5); rise($('grab'),gr); PA.forEach(g=>g.setAttribute('fill',gr>.5?'var(--loss)':'var(--ink)'));
  rise($('pB'),p(u,TM.calendar,TM.calendar+.5));
  CAL.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+.6+i*.25?'var(--gain)':'var(--line)'));
  const hn=TM.calendar+3.8; DL.forEach((d,i)=>d.setAttribute('fill',u>=hn+i*.15?'var(--gain)':'var(--line)'));
  PB.forEach(g=>g.setAttribute('fill',u>=hn?'var(--gain)':'var(--ink)'));
  rise($('hon'),p(u,hn,hn+.5)); rise($('shape'),p(u,hn+.6,hn+1.2));

  const kb=p(u,TM.broken_chain,TM.broken_chain+1);
  LKS.forEach((l,i)=>{const g=p(u,TM.handshake+i*.4,TM.handshake+i*.4+.5),b=i>=4?kb:0;
    l.setAttribute('opacity',(g*(1-.65*b)).toFixed(2)); l.setAttribute('transform','translate('+(24*b).toFixed(1)+' '+(70*b).toFixed(1)+')'); l.style.stroke=b>0?'var(--loss)':'var(--ink)';
    const h=(i<4?H[i]:H[i]+(H[i-4]-H[i])*kb)*g; BR[i].setAttribute('y',(720-h).toFixed(1)); BR[i].setAttribute('height',h.toFixed(1)); BR[i].setAttribute('class',b>0?'loss':'gain')});
  rise($('zeroT'),p(u,TM.broken_chain+.5,TM.broken_chain+1)); rise($('cutT'),p(u,TM.broken_chain+.8,TM.broken_chain+1.4));
  rise($('strg'),p(u,TM.broken_chain+5,TM.broken_chain+5.5));

  rise($('pc'),p(u,TM.old_friends,TM.old_friends+.5));
  $('chk4').setAttribute('opacity',(p(u,TM.old_friends+.4,TM.old_friends+1)*(1-p(u,TM.old_friends+3,TM.old_friends+3.8))).toFixed(2));
  rise($('jt'),p(u,TM.old_friends+4,TM.old_friends+4.5));
  rise($('lanes'),p(u,TM.fast_arrow,TM.fast_arrow+.5));
  $('fastA').setAttribute('stroke-width',(8+8*p(u,TM.fast_arrow+1,TM.fast_arrow+2)).toFixed(1));
  const sx=720+700*((t*.15)%1); $('fd').setAttribute('cx',(720+700*((t*.5)%1)).toFixed(1)); $('sd').setAttribute('cx',sx.toFixed(1)); $('sd').setAttribute('cy',zig(sx).toFixed(1));
  rise($('frT'),p(u,TM.fast_arrow+4.2,TM.fast_arrow+4.8));

  rise($('crowd5'),p(u,TM.magnifier-.4,TM.magnifier)); rise($('mag'),p(u,TM.magnifier,TM.magnifier+.4));
  $('magm').setAttribute('transform','translate('+(180+1080*p(u,TM.magnifier,TM.magnifier+2.4)).toFixed(1)+' 0)');
  [0,1,2].forEach(i=>rise($('c5'+i),p(u,TM.three_traits+i*.5,TM.three_traits+i*.5+.5)));
  const ck=p(u,TM.cracked_coin,TM.cracked_coin+.5),ok=p(u,TM.cracked_coin+3.8,TM.cracked_coin+4.3);
  $('crack').setAttribute('opacity',(ck*(1-ok)).toFixed(2));
  ['cr0','cr1'].forEach(id=>$(id).setAttribute('stroke',ck>.5&&ok<.5?'var(--loss)':'var(--line)'));
  rise($('agst'),ck*(1-ok));
  $('intR').setAttribute('fill',ok>.5?'var(--gain)':'var(--stage)'); $('intN').style.fill=ok>.5?'var(--on-gain)':'var(--ink)'; $('intS').style.fill=ok>.5?'var(--on-gain)':'var(--gain)';
  rise($('possT'),ok);

  // lifetime filter: rejected (indigo) drops stop above the rim and bounce away; partners (amber) pass inside the funnel
  const fv=p(u,TM.lifetime_rule,TM.lifetime_rule+.5); rise($('fun'),fv);
  DR.forEach((d,k)=>{const ph=(t*.3+k/6)%1;let x,y,o;
    if(k%3===0){x=1270;y=290+280*ph;o=lin(ph,0,.1)*(1-lin(ph,.85,1))}
    else{const x0=1150+k*40,dir=x0<1270?-1:1;x=x0+dir*30*lin(ph,.4,.8);y=160+66*ease(cl(ph/.4))-20*Math.sin(Math.PI*lin(ph,.4,.8));o=lin(ph,0,.1)*(1-lin(ph,.5,.8))}
    d.setAttribute('cx',x.toFixed(1));d.setAttribute('cy',y.toFixed(1));d.setAttribute('opacity',(fv*o).toFixed(2))});
  rise($('row1'),p(u,TM.day_vs_life,TM.day_vs_life+.5)); $('lifeB').setAttribute('width',(860*p(u,TM.day_vs_life+.5,TM.day_vs_life+3)).toFixed(1));
  rise($('lifeL'),p(u,TM.day_vs_life+3,TM.day_vs_life+3.4)); rise($('row2'),p(u,TM.day_vs_life+3.6,TM.day_vs_life+4.1));
  rise($('savT'),p(u,TM.day_vs_life+7.4,TM.day_vs_life+8));

  rise($('card7'),p(u,TM.contact_list-.3,TM.contact_list+.2));
  RW.forEach((r,i)=>{rise(r[0],p(u,TM.contact_list+i*.3,TM.contact_list+i*.3+.4));const tr=!!r[2]&&u>=TM.seedling+i*.3;r[1].setAttribute('class',tr?'gain':'ink');if(r[2])r[2].setAttribute('opacity',tr?1:0)});
  rise($('plant'),p(u,TM.seedling-.3,TM.seedling+.2));
  const g7=p(u,TM.seedling,TM.seedling+5),tp7=700-380*g7; $('stem').setAttribute('d','M1100 700V'+tp7.toFixed(1));
  LV.forEach((l,j)=>l.setAttribute('opacity',cl((700-tp7-60*(j+1))/30).toFixed(2)));
  YD.forEach((d,i)=>d.setAttribute('fill',g7*10>i+.5?'var(--gain)':'var(--line)'));
  rise($('qt'),p(u,TM.seedling+5.7,TM.seedling+6.3));

  rise($('mir'),p(u,TM.mirror,TM.mirror+.5)); rise($('qa'),p(u,TM.mirror,TM.mirror+.5)); rise($('qb'),p(u,TM.mirror+.4,TM.mirror+.9));
  rise($('refl'),p(u,TM.mirror+4.2,TM.mirror+4.7)); rise($('qc'),p(u,TM.mirror+4.2,TM.mirror+4.8));
  $('reflm').setAttribute('transform','translate(0 '+(4*Math.sin(t*1.5)).toFixed(1)+')');