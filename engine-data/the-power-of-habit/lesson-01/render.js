const g0=p(u,TM.brain_glow,TM.brain_glow+.6);
  $('glow').setAttribute('r',(28*g0*(1+.12*Math.sin(t*3))).toFixed(1));
  R0.forEach((c,i)=>{const k=(t*.5+i/3)%1;c.setAttribute('r',(30+110*k).toFixed(1));c.setAttribute('opacity',(g0*(1-k)).toFixed(2))});
  rise($('apl'),p(u,TM.brain_glow+6.5,TM.brain_glow+7.1));

  rise($('fam'),p(u,TM.eugene,TM.eugene+.5));rise($('yr'),p(u,TM.virus,TM.virus+.5));
  VR.forEach((g,i)=>{const a=TM.virus+.3+i*.2,k=p(u,a,a+1.7),y0=340+i*40,x=780-480*k,y=y0+(400-y0)*k;
    g.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+')');g.setAttribute('opacity',((u>TM.virus?1:0)*(1-p(u,a+1.9,a+2.3))).toFixed(2))});
  rise($('hit'),p(u,TM.virus+2.4,TM.virus+3));
  rise($('slate'),p(u,TM.blank_slate,TM.blank_slate+.5));
  FB.forEach((b,i)=>{const k=(t*.35+i*.2)%1;b.setAttribute('opacity',(k<.15?k/.15:k<.4?1:k<.6?1-(k-.4)/.2:0).toFixed(2))});

  rise($('hs'),p(u,TM.house,TM.house+.5));rise($('sketch'),p(u,TM.map_blank,TM.map_blank+.5));rise($('plan'),p(u,TM.kitchen,TM.kitchen+.5));
  const kk=p(u,TM.kitchen+.6,TM.kitchen+3),kp=at(KP,KL*kk);
  $('eat').setAttribute('cx',kp[0].toFixed(1));$('eat').setAttribute('cy',kp[1].toFixed(1));$('kpath').setAttribute('stroke-dashoffset',(KL*(1-kk)).toFixed(1));
  rise($('kt'),p(u,TM.kitchen+3,TM.kitchen+3.6));

  const wk=p(u,TM.sneakers+.5,TM.front_door+1),wp=at(RP,RL*wk);
  $('route').setAttribute('stroke-dashoffset',(RL*(1-wk)).toFixed(1));
  $('walker').setAttribute('cx',wp[0].toFixed(1));$('walker').setAttribute('cy',wp[1].toFixed(1));rise($('walker'),p(u,TM.sneakers,TM.sneakers+.5));
  rise($('bev'),p(u,TM.worried_wife,TM.worried_wife+.5));
  $('home').style.fill=u>=TM.front_door+1?'var(--gain)':'var(--stage)';rise($('ht'),p(u,TM.front_door+1,TM.front_door+1.6));

  rise($('sci'),p(u,TM.scientist,TM.scientist+.5));rise($('pair'),p(u,TM.object_pair,TM.object_pair+.5));
  const lf=p(u,TM.object_pair+1.5,TM.object_pair+2.2);$('lid').setAttribute('transform','translate(0 '+(-60*lf).toFixed(1)+')');$('mk1').setAttribute('opacity',lf);
  rise($('chart'),p(u,TM.checkmark,TM.checkmark+.5));
  BR.forEach((b,i)=>{const h=(50+i*40)*p(u,TM.checkmark+.4+i*.4,TM.checkmark+.8+i*.4);b.setAttribute('y',(640-h).toFixed(1));b.setAttribute('height',h.toFixed(1))});
  rise($('chk'),p(u,TM.checkmark+4,TM.checkmark+4.4));rise($('pt'),p(u,TM.checkmark+4.5,TM.checkmark+5.1));

  rise($('brn'),p(u,TM.basal_ganglia,TM.basal_ganglia+.5));rise($('mem'),p(u,TM.basal_ganglia+1.5,TM.basal_ganglia+2));
  rise($('bgg'),p(u,TM.basal_ganglia+3,TM.basal_ganglia+3.5));$('bgc').setAttribute('r',(50+6*Math.sin(t*3)).toFixed(1));
  rise($('trk'),p(u,TM.two_paths,TM.two_paths+.5));$('hdot').setAttribute('cx',(840+600*((t*.25)%1)).toFixed(1));
  rise($('aut'),p(u,TM.auto_pilot,TM.auto_pilot+.6));

  rise($('pie'),p(u,TM.pie_chart,TM.pie_chart+.5));rise($('pg'),p(u,TM.pie_chart+.5,TM.pie_chart+1));
  const pk=p(u,TM.pie_chart+.5,TM.pie_chart+2),pa=2*Math.PI*.4*pk;
  $('wedge').setAttribute('d','M360 470L360 290A180 180 0 0 1 '+(360+180*Math.sin(pa)).toFixed(1)+' '+(470-180*Math.cos(pa)).toFixed(1)+'Z');
  $('pct').textContent=Math.round(40*pk)+'%+';
  [0,1,2].forEach(i=>{const a=TM.toothbrush+i*1.2;rise($('ic'+i),p(u,a,a+.5));$('ib'+i).style.stroke=u>=TM.you?'var(--gain)':'var(--line)'});
  rise($('yt'),p(u,TM.you,TM.you+.6));

  rise($('sun'),p(u,TM.sun_rays,TM.sun_rays+.5));$('rays').setAttribute('transform','rotate('+(t*20%360).toFixed(1)+' 300 440)');
  rise($('wheel'),p(u,TM.steering,TM.steering+.5));$('wheel').setAttribute('transform','rotate('+(25*Math.sin(t*1.2)).toFixed(1)+' 800 470)');
  rise($('road'),p(u,TM.steering+.8,TM.steering+1.3));rise($('st'),p(u,TM.steering+2,TM.steering+2.6));

  rise($('clk'),p(u,TM.clock,TM.clock+.5));rise($('tg'),p(u,TM.clock+.4,TM.clock+.9));
  $('mh').setAttribute('transform','rotate('+(t*60%360).toFixed(1)+' 1340 450)');$('hh').setAttribute('transform','rotate('+(t*5%360).toFixed(1)+' 1340 450)');
  rise($('qa'),p(u,TM.clock+3.5,TM.clock+4));rise($('qb'),p(u,TM.clock+3.9,TM.clock+4.4));rise($('qc'),p(u,TM.clock+4.3,TM.clock+4.8));