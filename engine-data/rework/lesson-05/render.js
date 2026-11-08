const cc=p(u,TM.cluttered_app+5.8,TM.cluttered_app+6.8);
  T0.forEach(([el,rot,cx,cy,keep,cls],i)=>{const a=p(u,TM.cluttered_app+i*.04,TM.cluttered_app+i*.04+.3);el.setAttribute('opacity',(keep?a:a*(1-cc)).toFixed(2));
    el.setAttribute('transform','rotate('+(keep?rot*(1-cc):rot+2*Math.sin(t*3+i)).toFixed(1)+' '+cx+' '+cy+')');el.setAttribute('class',keep&&cc>.5?'gain':cls)});

  rise($('b1f'),p(u,TM.two_boxes,TM.two_boxes+.5));rise($('b1h'),p(u,TM.half_box,TM.half_box+.5));rise($('b1b'),p(u,TM.bad_box,TM.bad_box+.5));
  $('jum').setAttribute('transform','translate('+(3*Math.sin(t*5)).toFixed(1)+' 0)');rise($('b1q'),p(u,TM.bad_box+5,TM.bad_box+5.6));

  // scene 2: cut rows slide right into a neat column, fade and get struck through
  rise($('rows'),p(u,SC[2][0]/K+.3,SC[2][0]/K+.9));
  R2.forEach(([g,y,k])=>{const a=TM.scissors+k*.9+.3,c=p(u,a,a+.8),s=p(u,a+.8,a+1.3);
    g.setAttribute('transform','translate('+(780*c).toFixed(1)+' '+((340+k*70-y)*c).toFixed(1)+')');
    g.setAttribute('opacity',(1-.6*s).toFixed(2));STK[k].setAttribute('stroke-dashoffset',(1-s).toFixed(3))});
  const em=p(u,TM.scissors+5.8,TM.scissors+6.6);
  E2.forEach(([g,y],i)=>g.setAttribute('transform','translate(0 '+(([380,450][i]-y)*em).toFixed(1)+')'));
  const f=cl(Math.floor((u-TM.scissors)/.9),0,5);$('scm').setAttribute('transform','translate(730 '+(R2[f][1]+25)+') rotate('+(6*Math.sin(t*12)).toFixed(1)+')');
  rise($('sc'),p(u,TM.scissors,TM.scissors+.4)*(1-p(u,TM.scissors+5.6,TM.scissors+6.2)));
  rise($('gd1'),p(u,TM.good_pile,TM.good_pile+.5));rise($('gd2'),p(u,TM.good_pile+5.4,TM.good_pile+6));

  rise($('st'),p(u,TM.hot_dog_stand,TM.hot_dog_stand+.6));
  C3.forEach((g,i)=>rise(g,p(u,TM.condiments+i*.6,TM.condiments+i*.6+.4)*(1-.6*p(u,TM.hot_dog+8.8,TM.hot_dog+9.4))));
  const hk=p(u,TM.hot_dog,TM.hot_dog+.6);rise($('hd'),hk);$('hdi').setAttribute('transform','translate(1150 525) scale('+(.5+.5*hk).toFixed(3)+') translate(-1150 -525)');
  rise($('rg'),p(u,TM.hot_dog+5,TM.hot_dog+5.6));rise($('sd'),p(u,TM.hot_dog+8.8,TM.hot_dog+9.4));

  // scene 4: NO sign, then a full-strength stack of costs
  rise($('ns'),p(u,TM.no_sign,TM.no_sign+.5));$('nsi').setAttribute('transform','translate(360 450) scale('+(1+.03*Math.sin(t*3)).toFixed(3)+') translate(-360 -450)');
  rise($('qt'),p(u,TM.no_sign+2.2,TM.no_sign+2.8));rise($('yp'),p(u,TM.yes_pile,TM.yes_pile+.4));
  TW.forEach((g,i)=>rise(g,p(u,TM.yes_pile+i*.5,TM.yes_pile+i*.5+.4)));
  $('tw').setAttribute('transform','rotate('+(1.5*Math.sin(t*1.6)*p(u,TM.yes_pile+2,TM.yes_pile+3)).toFixed(2)+' 1150 714)');
  rise($('fc'),p(u,TM.yes_pile+4.1,TM.yes_pile+4.7));

  // scene 5: list items are struck through and faded; the repeating requests take focus
  rise($('wl'),p(u,TM.request_list,TM.request_list+.5));
  SL5.forEach(([g,bar,sk],i)=>{const k=p(u,TM.request_list+2.9+i*.25,TM.request_list+3.5+i*.25);
    sk.setAttribute('stroke-dashoffset',(1-k).toFixed(3));bar.setAttribute('opacity',(1-.7*k).toFixed(2));
    g.setAttribute('transform','translate('+(12*k).toFixed(1)+' 0)')});
  rise($('lg'),p(u,TM.request_list+5,TM.request_list+5.5));
  CU.forEach((g,i)=>rise(g,p(u,TM.repeat_voice+i*1.2,TM.repeat_voice+i*1.2+.5)));rise($('ag'),p(u,TM.repeat_voice+3.6,TM.repeat_voice+4.2));

  // scene 6: power user stays visible but faded, with an arrow pointing away
  const lv=p(u,TM.newcomer+.5,TM.newcomer+2);rise($('pu'),p(u,TM.power_user,TM.power_user+.5));rise($('pul'),p(u,TM.power_user,TM.power_user+.5));
  $('pui').setAttribute('transform','translate('+(-40*lv).toFixed(1)+' 0)');$('pui').setAttribute('opacity',(1-.6*lv).toFixed(2));
  rise($('pa'),p(u,TM.newcomer+.5,TM.newcomer+1.2));
  RQ.forEach((g,i)=>rise(g,p(u,TM.power_user+.6+i*.4,TM.power_user+1+i*.4)*(1-lv)));
  const bl=p(u,TM.power_user+3.7,TM.power_user+4.7)*(1-p(u,TM.newcomer,TM.newcomer+1));
  LB.forEach((c,i)=>c.setAttribute('r',(bl*(50+6*Math.sin(t*3+i))).toFixed(1)));rise($('blt'),bl);
  rise($('ss'),p(u,TM.newcomer+1.5,TM.newcomer+2));
  NW.forEach((g,i)=>{const k=p(u,TM.newcomer+5+i*.4,TM.newcomer+6.2+i*.4);g.setAttribute('transform','translate('+((1-k)*320).toFixed(1)+' 0)');g.setAttribute('opacity',k.toFixed(2))});
  rise(nwl,p(u,TM.newcomer+5,TM.newcomer+5.5));rise($('mv'),p(u,TM.newcomer,TM.newcomer+.6));

  const dm=p(u,TM.circle+5.4,TM.circle+6);
  LS.forEach(([g,ln,e],i)=>{const k=p(u,TM.your_list+i*.5,TM.your_list+i*.5+.6);ln.setAttribute('stroke-dashoffset',(1-k).toFixed(3));g.setAttribute('opacity',(cl(k*4)*(e?1:1-.7*dm)).toFixed(2))});
  CI.forEach((c,i)=>{const k=p(u,TM.circle+i*.8,TM.circle+i*.8+.8);c.setAttribute('stroke-dashoffset',(1-k).toFixed(3));c.setAttribute('opacity',k>0?1:0)});
  rise($('sh'),dm);

  rise($('qa'),p(u,TM.next_request,TM.next_request+.5));rise($('qb'),p(u,TM.next_request+.4,TM.next_request+.9));rise($('qc'),p(u,TM.next_request+.8,TM.next_request+1.3));
  rise($('q8n'),p(u,TM.next_request+1.2,TM.next_request+1.7));$('q8i').setAttribute('transform','translate(1330 450) scale('+(1+.04*Math.sin(t*3)).toFixed(3)+') translate(-1330 -450)');
  rise($('qd'),p(u,TM.next_request+5.4,TM.next_request+6));