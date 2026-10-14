const g0=p(u,TM.brain_glow,TM.brain_glow+1);$('glow0').setAttribute('opacity',(g0*(.25+.12*Math.sin(t*3))).toFixed(2));
  rise($('lp0'),p(u,TM.brain_glow+3.8,TM.brain_glow+4.4));
  D0.forEach((c,i)=>{const a=t*.8+i*2.094;c.setAttribute('cx',(1325+150*Math.cos(a)).toFixed(1));c.setAttribute('cy',(385+150*Math.sin(a)).toFixed(1))});

  rise($('mz1'),p(u,TM.maze,TM.maze+.5));rise($('rt1'),p(u,TM.rat,TM.rat+.5));rise($('ch1'),p(u,TM.chocolate,TM.chocolate+.5));rise($('sn1'),p(u,TM.chocolate+3.8,TM.chocolate+4.3));
  let wv='';for(let x=1206;x<=1454;x+=6)wv+=x+','+(440+30*Math.sin(x/18+t*5)*Math.sin(x/50)).toFixed(1)+' ';$('wv1').setAttribute('points',wv);

  rise($('ck2'),p(u,TM.click,TM.click+.3)*(1-p(u,TM.click+2,TM.click+2.5)));$('pt2').setAttribute('opacity',1-p(u,TM.click+.2,TM.click+.7));
  const k2=cl(lin(u,TM.sniffing,TM.busy_brain+5.4)),q2=at(W2,k2);put(R2,q2.x,q2.y,q2.r+(k2>0&&k2<1?12*Math.sin(t*9):0));$('tr2').setAttribute('points',q2.s);
  rise($('ch2c'),p(u,TM.busy_brain,TM.busy_brain+.5));$('ln2').setAttribute('points',line(k2,x=>ny(x/6)+6*Math.sin(t*8+x)));
  rise($('cp2a'),p(u,TM.busy_brain,TM.busy_brain+.5));rise($('ring2'),p(u,TM.busy_brain+5.4,TM.busy_brain+5.9));rise($('cp2b'),p(u,TM.busy_brain+5.4,TM.busy_brain+5.9));

  rise($('tr3'),p(u,TM.fast_rat,TM.fast_rat+.5));
  let k3=0;if(u>=TM.fast_rat){const c=((u-TM.fast_rat)%2.2)/2.2;k3=ease(Math.min(c/.75,1))}const q3=at(W3,k3);put(R3,q3.x,q3.y,q3.r);
  rise($('cc3'),p(u,TM.quiet_brain,TM.quiet_brain+.5));const sp=p(u,TM.spikes,TM.spikes+1);
  $('gh3').setAttribute('opacity',(.5*(1-sp)).toFixed(2));$('bf3').setAttribute('opacity',(1-sp).toFixed(2));
  $('ln3').setAttribute('points',line(p(u,TM.quiet_brain+2.6,TM.quiet_brain+4.6),x=>560+4*Math.sin(x/9)-230*sp*(Math.exp(-(((x-880)/14)**2))+Math.exp(-(((x-1420)/14)**2)))));
  rise($('sl3'),p(u,TM.spikes+.6,TM.spikes+1.1));rise($('cp3a'),p(u,TM.quiet_brain+2.6,TM.quiet_brain+3.1));rise($('cp3b'),p(u,TM.spikes,TM.spikes+.5));

  const m4=p(u,TM.chunk_block+2.2,TM.chunk_block+3.2);rise($('lb4'),p(u,TM.chunk_block,TM.chunk_block+.4));
  ST.forEach((s,i)=>{const x=120+i*(150-30*m4);s[1].setAttribute('x',x.toFixed(1));s[2].setAttribute('x',(x+60).toFixed(1));rise(s[0],p(u,TM.chunk_block+i*.15,TM.chunk_block+i*.15+.4))});
  rise($('ck4'),p(u,TM.chunk_block+3,TM.chunk_block+3.5));
  rise($('bg4'),p(u,TM.basal_ganglia,TM.basal_ganglia+.5));$('sp4').setAttribute('r',(26+(u>TM.basal_ganglia+2?5*Math.sin(t*4):0)).toFixed(1));
  const mv=p(u,TM.basal_ganglia+.5,TM.basal_ganglia+2);$('mini4').setAttribute('x',(440+40*(1-mv)-40).toFixed(1));$('mini4').setAttribute('y',(430+220*mv-17).toFixed(1));
  $('mini4').setAttribute('opacity',((u>=TM.basal_ganglia+.5?1:0)*(1-p(u,TM.basal_ganglia+2,TM.basal_ganglia+2.3))).toFixed(2));
  rise($('bt4'),p(u,TM.battery,TM.battery+.5));$('bf4').setAttribute('width',(308*p(u,TM.battery+.4,TM.battery+2.4)).toFixed(1));

  rise($('lp5'),p(u,TM.loop,TM.loop+.4));$('ci5').setAttribute('stroke-dashoffset',(1446*(1-p(u,TM.loop,TM.loop+1.6))).toFixed(0));$('ah5').setAttribute('opacity',p(u,TM.loop+1.2,TM.loop+1.8));
  [TM.cue_icon,TM.routine_icon,TM.reward_icon].forEach((a,i)=>rise($('n5'+i),p(u,a,a+.5)));
  const a5=(150+(t*60)%360)*Math.PI/180;$('dot5').setAttribute('cx',(800+230*Math.cos(a5)).toFixed(1));$('dot5').setAttribute('cy',(520+230*Math.sin(a5)).toFixed(1));$('dot5').setAttribute('opacity',p(u,TM.reward_icon+1,TM.reward_icon+1.5));

  rise($('cy6'),p(u,TM.cycle_arrows,TM.cycle_arrows+.5));$('rot6').setAttribute('transform','rotate('+(t*90%360).toFixed(1)+' 330 410)');$('mf6').setAttribute('width',(260*p(u,TM.cycle_arrows+.5,TM.cycle_arrows+3.5)).toFixed(1));
  rise($('bl6'),p(u,TM.sleep_bulb,TM.sleep_bulb+.5));$('gl6').setAttribute('opacity',(1-p(u,TM.sleep_bulb+1,TM.sleep_bulb+2.5)).toFixed(2));
  $('zz6').setAttribute('opacity',p(u,TM.sleep_bulb+1.8,TM.sleep_bulb+2.3));$('zz6').setAttribute('transform','translate(0 '+(-8*Math.sin(t*2)).toFixed(1)+')');
  rise($('pa6'),p(u,TM.sleep_bulb+5,TM.sleep_bulb+5.5));rise($('pb6'),p(u,TM.sleep_bulb+5.8,TM.sleep_bulb+6.3));
  rise($('mg6'),p(u,TM.magnifier,TM.magnifier+.5));$('lens6').setAttribute('transform','translate('+(12*Math.sin(t*1.5)).toFixed(1)+' '+(8*Math.cos(t*1.5)).toFixed(1)+')');

  rise($('ph7'),p(u,TM.phone,TM.phone+.5));$('bz7').setAttribute('opacity',p(u,TM.notification,TM.notification+.3));
  const sh=(u>=TM.notification&&u<TM.notification+2.5)?4*Math.sin(t*50):0;$('phg7').setAttribute('transform','translate('+sh.toFixed(1)+' 0)');
  [TM.notification,TM.notification+4.6,TM.smile_face].forEach((a,i)=>rise(C7[i],p(u,a,a+.5)));
  SB.forEach((b,j)=>b.setAttribute('y',(375+((t*30+j*27)%80)).toFixed(1)));
  rise($('lp7'),p(u,TM.smile_face+1.2,TM.smile_face+1.8));

  rise($('qm8'),p(u,TM.question_mark,TM.question_mark+.5));$('rg8').setAttribute('transform','rotate('+(t*30%360).toFixed(1)+' 1380 360)');
  rise($('qa8'),p(u,TM.question_mark+.3,TM.question_mark+.8));rise($('qb8'),p(u,TM.question_mark+.7,TM.question_mark+1.2));
  rise($('qc8'),p(u,TM.question_mark+3.4,TM.question_mark+3.9));rise($('qd8'),p(u,TM.question_mark+3.8,TM.question_mark+4.3));