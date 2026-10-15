const pr=TM.remote, off=p(u,pr+3.6,pr+4.1), adGone=p(u,pr+3.2,pr+3.6);
  rise($('remote'),p(u,pr,pr+.5));
  SIG.forEach((s,k)=>s.setAttribute('opacity',(u>pr+2.4&&u<pr+4.4?(.5+.5*Math.sin(t*8-k)):0).toFixed(2)));
  $('adtxt').setAttribute('opacity',(1-adGone).toFixed(2));
  $('tvscr').setAttribute('transform','translate(0 '+(405*off*.97).toFixed(1)+') scale(1 '+(1-off*.97).toFixed(3)+')');
  $('tvscr').setAttribute('opacity',(1-off).toFixed(2));
  $('tvscr').style.display=off>=1?'none':'';
  rise($('qm'),p(u,pr+4.2,pr+4.7));
  $('qm').style.display=u<pr+4.15?'none':'';

  rise($('fac'),p(u,TM.factory,TM.factory+.5));
  SM.forEach((c,i)=>{const k=(t*.5+i/3)%1;c.setAttribute('cy',(280-k*50).toFixed(1));c.setAttribute('r',(8+k*8).toFixed(1));c.setAttribute('opacity',((1-k)*.6).toFixed(2))});
  rise($('avg'),p(u,TM.average_box,TM.average_box+.5));
  AU.forEach((g,i)=>rise(g,p(u,TM.average_box+1+i*.3,TM.average_box+1.4+i*.3)));
  rise($('plus1'),p(u,TM.tv_set-.3,TM.tv_set+.2)); rise($('tv1'),p(u,TM.tv_set,TM.tv_set+.5));
  WV.forEach((w,k)=>w.setAttribute('opacity',u>TM.tv_set?(.5+.5*Math.sin(t*5-k*1.2)).toFixed(2):0));
  rise($('eq1'),p(u,TM.tv_set+1.5,TM.tv_set+2.1));

  const s2=SC[2][0]/K;
  rise(nodes[0],p(u,s2+.6,s2+1.1)); rise(nodes[1],p(u,TM.store_shelf,TM.store_shelf+.5)); rise(nodes[2],p(u,TM.store_shelf+1.6,TM.store_shelf+2.1)); rise(nodes[3],p(u,TM.cash_stack,TM.cash_stack+.5));
  bills.forEach((b,i)=>rise(b,p(u,TM.cash_stack+.4+i*.25,TM.cash_stack+.7+i*.25)));
  const lp=p(u,TM.loop_arrow,TM.loop_arrow+.6);
  $('loopE').setAttribute('opacity',(.25+.75*lp).toFixed(2)); $('loopE').setAttribute('stroke-dashoffset',(-t*30).toFixed(1));
  $('chev').setAttribute('opacity',lp);
  const oa=-Math.PI/2+Math.max(0,u-TM.loop_arrow)*1.6;
  $('orb').setAttribute('cx',(800+350*Math.cos(oa)).toFixed(1)); $('orb').setAttribute('cy',(520+225*Math.sin(oa)).toFixed(1)); $('orb').setAttribute('opacity',lp);
  rise($('worked'),p(u,TM.loop_arrow+1.5,TM.loop_arrow+2));

  rise($('fam'),p(u,TM.family_couch,TM.family_couch+.6));
  rise($('shelf3'),p(u,TM.few_products,TM.few_products+.6));
  rise($('help'),p(u,TM.few_products+4.6,TM.few_products+5.1));
  rise($('pay'),p(u,TM.few_products+9.2,TM.few_products+9.8));

  prods.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.crowded_aisle+i*.04,TM.crowded_aisle+i*.04+.3)));
  rise($('clk'),p(u,TM.clock,TM.clock+.5));
  $('mnH').setAttribute('transform','rotate('+((t*200)%360).toFixed(1)+' 1240 340)');
  $('hrH').setAttribute('transform','rotate('+((t*17)%360).toFixed(1)+' 1240 340)');
  rise($('own'),p(u,TM.clock+3.8,TM.clock+4.3));
  rise($('filt'),p(u,TM.clock+10,TM.clock+10.6));

  const ea=TM.earmuffs, mf=p(u,ea,ea+.8);
  ads.forEach((a,i)=>{const s0=TM.ad_pile+i*.3,k=p(u,s0,s0+.6),r=1.1-.1*k+.05*mf+.012*Math.sin(t*2+i);a[0].setAttribute('transform','translate('+(800+a[1]*r).toFixed(1)+' '+(450+a[2]*r).toFixed(1)+')');a[0].setAttribute('opacity',(k*(1-.7*mf)).toFixed(2))});
  rise($('muff'),p(u,ea,ea+.5));
  chips.forEach((g,i)=>rise(g,p(u,ea+4.2+i*.5,ea+4.6+i*.5)));
  rise($('surv'),p(u,ea+7.2,ea+7.8));

  const pt=p(u,TM.price_tag,TM.price_tag+3);
  rise($('tag6'),p(u,TM.price_tag,TM.price_tag+.5));
  $('tagS').setAttribute('transform','translate(400 460) scale('+(.7+.55*pt).toFixed(3)+')');
  $('tagT').textContent='$'.repeat(1+Math.round(pt*2));
  rise($('crwd'),p(u,TM.tiny_crowd,TM.tiny_crowd+.5));
  crowd.forEach((g,i)=>{if(i%9===4){g.setAttribute('opacity',1);return}const a=TM.tiny_crowd+1+((i*7)%24)*.08;g.setAttribute('opacity',(1-.85*p(u,a,a+.4)).toFixed(2))});
  rise($('nobuy'),p(u,TM.tiny_crowd+4.5,TM.tiny_crowd+5.1));

  // scene 7: circular loop that snaps open at the bottom, ends splaying outward
  const sn=p(u,TM.snapped_loop+.4,TM.snapped_loop+1), hg=(1.5+22*sn)*Math.PI/180;
  const a0=Math.PI/2+hg, a1=Math.PI/2+2*Math.PI-hg, NP=90;
  const lpt=a=>{const dist=Math.min(a-a0,a1-a),f=Math.max(0,1-dist/.9),r=LC.r+34*sn*f*f;return [LC.x+r*Math.cos(a),LC.y+r*Math.sin(a)]};
  let ld='';for(let i=0;i<=NP;i++){const q=lpt(a0+(a1-a0)*i/NP);ld+=(i?'L':'M')+q[0].toFixed(1)+' '+q[1].toFixed(1)}
  $('loop7').setAttribute('d',ld);
  $('loop7').setAttribute('stroke-dashoffset',sn>0?0:(-t*30).toFixed(1));
  const lc=sn>0?'var(--loss)':'var(--gain)'; $('loop7').style.stroke=lc; chev7.forEach(c=>c.setAttribute('stroke',lc));
  let td='';[[a0,-1],[a1,1]].forEach(([a,s])=>{const E=lpt(a),T=[-Math.sin(a)*s,Math.cos(a)*s],N=[Math.cos(a),Math.sin(a)];
    const P=(tt,nn)=>(E[0]+T[0]*tt+N[0]*nn).toFixed(1)+' '+(E[1]+T[1]*tt+N[1]*nn).toFixed(1);
    td+='M'+P(0,11)+'L'+P(9,5)+'L'+P(3,0)+'L'+P(11,-5)+'L'+P(0,-11)});
  $('tips7').setAttribute('d',td); $('tips7').setAttribute('opacity',sn.toFixed(2));
  $('crack7').setAttribute('opacity',sn.toFixed(2));
  rise($('eq7a'),p(u,TM.snapped_loop+3,TM.snapped_loop+3.5)); rise($('eq7b'),p(u,TM.snapped_loop+4.5,TM.snapped_loop+5));
  rise($('bulb'),p(u,TM.lightbulb,TM.lightbulb+.6));
  rays.forEach((r,i)=>{const a=78,b=100+8*Math.sin(t*4+i);r[0].setAttribute('d','M'+(220+r[1]*a).toFixed(1)+' '+(710+r[2]*a).toFixed(1)+'L'+(220+r[1]*b).toFixed(1)+' '+(710+r[2]*b).toFixed(1))});

  const s8=SC[8][0]/K, gl=(t*.8)%1;
  rise($('qa'),p(u,s8+.5,s8+1)); rise($('qb'),p(u,s8+.9,s8+1.4)); rise($('qc'),p(u,s8+1.3,s8+1.8));
  rise($('g8'),p(u,s8+1.8,s8+2.4));
  $('glow8').setAttribute('r',(80+30*gl).toFixed(1)); $('glow8').setAttribute('stroke-opacity',(1-gl).toFixed(2));
  rise($('fix8'),p(u,s8+6.3,s8+6.9));