const lk=p(u,TM.lone_bulb+1,TM.lone_bulb+4);
  LV.forEach(([g,x,y],i)=>{const k=cl(lk*1.5-i*.25);g.setAttribute('transform','translate('+((1440-x)*k).toFixed(1)+' '+((520-y)*k).toFixed(1)+')');g.setAttribute('opacity',(1-cl((k-.6)/.4)).toFixed(2))});
  const lb=p(u,TM.lone_bulb+4,TM.lone_bulb+4.6);
  $('bulb').setAttribute('opacity',(.2+.8*lb).toFixed(2)); $('rays').setAttribute('opacity',(lb*(.75+.25*Math.sin(t*4))).toFixed(2));

  rise($('off'),p(u,TM.open_office,TM.open_office+.5)); rise($('cls'),p(u,TM.group_desks,TM.group_desks+.5));
  const s=1+.7*(1-p(u,TM.group_desks+.6,TM.group_desks+2.2)), sk=1+(s-1)*.6;
  DK.forEach(([e,cx,cy,dx,dy,k])=>{if(k){e.setAttribute('cx',(cx+dx*sk).toFixed(1));e.setAttribute('cy',(cy+dy*sk).toFixed(1))}else{e.setAttribute('x',(cx+dx*s-25).toFixed(1));e.setAttribute('y',(cy+dy*s-25).toFixed(1))}});
  rise($('ng'),p(u,TM.group_desks+4.6,TM.group_desks+5.2));

  rise($('osb'),p(u,TM.adman,TM.adman+.5)); rise($('storm'),p(u,TM.idea_storm,TM.idea_storm+.5));
  SPK.forEach((c,i)=>{const k=(t*.9+i*.37)%1;c.setAttribute('cx',(660+i*80+10*Math.sin(t*2+i)).toFixed(1));c.setAttribute('cy',(480-110*k).toFixed(1));c.setAttribute('opacity',(1-k).toFixed(2))});
  rise($('rule0'),p(u,TM.idea_storm+1.8,TM.idea_storm+2.3)); rise($('rule1'),p(u,TM.idea_storm+2.8,TM.idea_storm+3.3));
  rise($('mach'),p(u,TM.idea_storm+5.5,TM.idea_storm+6.1));

  rise($('lab'),p(u,TM.research_lab,TM.research_lab+.5));
  const h0=360*p(u,TM.research_lab+3.3,TM.research_lab+4.6), h1=220*p(u,TM.research_lab+3.6,TM.research_lab+4.9);
  $('bar0').setAttribute('y',(700-h0).toFixed(1)); $('bar0').setAttribute('height',h0.toFixed(1));
  $('bar1').setAttribute('y',(700-h1).toFixed(1)); $('bar1').setAttribute('height',h1.toFixed(1));
  rise($('b0t'),p(u,TM.research_lab+4.6,TM.research_lab+5.1));
  rise($('shr'),p(u,TM.group_shrink,TM.group_shrink+.5));
  GD.forEach((g,i)=>rise(g,p(u,TM.group_shrink+.4+i*.5,TM.group_shrink+.8+i*.5)));
  $('perf').setAttribute('stroke-dashoffset',(500*(1-p(u,TM.group_shrink+.6,TM.group_shrink+2))).toFixed(1));
  PV.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.group_shrink+.6+i*.7,TM.group_shrink+.9+i*.7)));

  rise($('w0'),p(u,TM.slacker,TM.slacker+.5)); $('zz').setAttribute('transform','translate(0 '+(-6*Math.sin(t*2)).toFixed(1)+')');
  rise($('w1'),p(u,TM.idea_queue,TM.idea_queue+.5));
  QB.forEach((b,i)=>b.setAttribute('opacity',(1-.85*p(u,TM.idea_queue+1.5+i*.6,TM.idea_queue+3.5+i*.6)).toFixed(2)));
  rise($('w2'),p(u,TM.judge_eyes,TM.judge_eyes+.5));
  EY.forEach((e,i)=>rise(e,p(u,TM.judge_eyes+.5+i*.25,TM.judge_eyes+.9+i*.25)));

  rise($('wz'),p(u,TM.woz,TM.woz+.5)); rise($('club'),p(u,TM.homebrew,TM.homebrew+.5));
  LKS.forEach(l=>l.setAttribute('stroke-dashoffset',(-t*20).toFixed(1)));
  rise($('insp'),p(u,TM.homebrew+6.2,TM.homebrew+6.8)); rise($('wcap'),p(u,TM.homebrew+6.6,TM.homebrew+7.2));

  rise($('cub'),p(u,TM.cubicle,TM.cubicle+.5)); rise($('brd'),p(u,TM.circuit,TM.circuit+.5));
  TR.forEach((e,i)=>e.setAttribute('opacity',p(u,TM.circuit+.4+i*.3,TM.circuit+.7+i*.3)));
  rise($('mon'),p(u,TM.screen_text,TM.screen_text+.5));
  const n=Math.floor(8*p(u,TM.screen_text+.8,TM.screen_text+3.4)); $('typed').textContent='ABCDEFGH'.slice(0,n)+(Math.sin(t*6)>0?'_':'');
  rise($('apl'),p(u,TM.screen_text+6.2,TM.screen_text+6.8));

  rise($('adv'),p(u,TM.advice_card,TM.advice_card+.5)); rise($('nota'),p(u,TM.advice_card+3.8,TM.advice_card+4.3));
  rise($('scl'),p(u,TM.balance_scale,TM.balance_scale+.5));
  const ang=2.5*Math.sin(t*1.2), dy=240*Math.sin(ang*Math.PI/180);
  $('beam').setAttribute('transform','rotate('+ang.toFixed(2)+' 1090 330)');
  $('panL').setAttribute('transform','translate(850 '+(440-dy).toFixed(1)+')'); $('panR').setAttribute('transform','translate(1330 '+(440+dy).toFixed(1)+')');
  rise($('swp'),p(u,TM.swap_table,TM.swap_table+.6));

  // close: block the hour, then the meeting
  rise($('qa'),p(u,TM.calendar,TM.calendar+.5)); rise($('qb'),p(u,TM.calendar+.4,TM.calendar+.9));
  rise($('qc'),p(u,TM.calendar+.8,TM.calendar+1.3)); rise($('qd'),p(u,TM.calendar+1.2,TM.calendar+1.7));
  rise($('cal'),p(u,TM.calendar+.2,TM.calendar+.7));
  const bw=300*p(u,TM.calendar+1,TM.calendar+2); $('blkA').setAttribute('width',bw.toFixed(1)); $('blkA').setAttribute('opacity',bw>1?1:0);
  rise($('blkAt'),p(u,TM.calendar+1.8,TM.calendar+2.3));
  rise($('blkM'),p(u,TM.calendar+2.8,TM.calendar+3.3));
  const nm=p(u,TM.calendar+.8,TM.calendar+2.2)*96+p(u,TM.calendar+4.5,TM.calendar+5.7)*100;
  $('nowM').setAttribute('transform','translate(0 '+(402+nm).toFixed(1)+')'); $('nowM').setAttribute('opacity',(p(u,TM.calendar+.6,TM.calendar+1)*(.75+.25*Math.sin(t*3))).toFixed(2));
  rise($('qn'),p(u,TM.calendar+6.5,TM.calendar+7.1));