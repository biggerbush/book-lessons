const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  R('chair',TM.empty_chair); WD.forEach((c,i)=>c.setAttribute('opacity',(.25+.75*Math.max(0,Math.sin(t*3-i*.9))).toFixed(2)));

  R('cafe',TM.cafe_table); R('nap',TM.napkin); dr($('doodle'),DN,p(u,TM.napkin+.3,TM.napkin+2.3)); R('wom',TM.napkin+.6);
  R('tag',TM.price_tag); R('bub1',TM.price_tag+.8); R('reply',TM.price_tag+5.8,.6);

  PG.forEach(([g,r,X],i)=>{const a=TM.sketchbook+i*.08,b=TM.crumpled_page+i*.08; rise(g,p(u,a,a+.3)); X.setAttribute('opacity',i<39?p(u,b,b+.2):0)});
  PG[39][1].setAttribute('fill',u>=TM.crumpled_page+3.4?'var(--gain)':'var(--stage)');
  dr($('better'),BN,p(u,TM.crumpled_page,TM.crumpled_page+4)); R('betl',TM.crumpled_page+3.6); R('lesson',TM.crumpled_page+4.6,.6);

  C3.forEach(([g,r],i)=>{const a=TM.arrow_chain+i*.5; rise(g,p(u,a,a+.4)); r.setAttribute('stroke',u>=TM.lightbulb+i*1.6&&u<TM.clock?'var(--gain)':'var(--ink)')});
  R('bulb',TM.lightbulb); $('bulbC').setAttribute('fill',u>=TM.lightbulb&&(u<TM.clock||Math.sin(t*11)>.9)?'var(--gain)':'var(--stage)');
  R('clk',TM.clock); $('hand1').setAttribute('transform','rotate('+(t*90%360).toFixed(1)+' 380 710)'); $('hand2').setAttribute('transform','rotate('+(t*7.5%360).toFixed(1)+' 380 710)');
  R('wait',TM.clock+.8,.6);

  R('loopg',TM.loop_arrow); N4.forEach((n,i)=>rise(n[0],p(u,TM.loop_arrow+i*.4,TM.loop_arrow+i*.4+.4)));
  const act=u>=TM.running_shoe; N4[0][1].setAttribute('fill',act?'var(--gain)':'var(--stage)'); N4[0][1].setAttribute('stroke',act?'var(--gain)':'var(--ink)'); N4[0][2].style.fill=act?'var(--on-gain)':'var(--ink)';
  const la=(-90+(act?(u-TM.running_shoe)*90:0))*Math.PI/180; $('ldot').setAttribute('cx',(500+220*Math.cos(la)).toFixed(1)); $('ldot').setAttribute('cy',(530+220*Math.sin(la)).toFixed(1)); $('ldot').setAttribute('opacity',act?1:0);
  R('shoe',TM.running_shoe); $('shoeI').setAttribute('transform','translate(0 '+(-10*Math.abs(Math.sin(t*4))).toFixed(1)+')');
  R('first',TM.running_shoe+.4); R('react',TM.running_shoe+3.7);

  R('board5',TM.math_teacher); R('tch',TM.math_teacher+.4); R('bub5',TM.stuck_student); R('stu',TM.stuck_student+.3);
  const k5=p(u,TM.pencil,TM.pencil+3); dr(SCR,SN,k5); const pt=SCR.getPointAtLength(SN*k5);
  $('pen').setAttribute('transform','translate('+pt.x.toFixed(1)+' '+pt.y.toFixed(1)+')'); $('pen').setAttribute('opacity',u>=TM.pencil?1:0);
  const ans=p(u,TM.pencil+3,TM.pencil+3.5); $('qm').setAttribute('opacity',1-ans); $('qs').setAttribute('opacity',1-ans); rise($('chk'),ans);
  R('along',TM.pencil+.5,.6);

  const bl=u>=TM.one_sentence; R('page6',TM.blank_page); R('wr',TM.blank_page+.3); $('wr').style.fill=bl?'var(--gain)':'var(--ice)'; $('wrl').textContent=bl?'WRITING':'FROZEN';
  let cx=580,cy=300; LN.forEach(([e,n],k)=>{const a=LA(k),q=p(u,a,a+(k?.5:1.5)); dr(e,n,q); if(q>0){cx=580+LW[k]*q;cy=300+k*60}});
  $('cur').setAttribute('x',(cx+8).toFixed(1)); $('cur').setAttribute('y',cy-30); $('cur').setAttribute('opacity',t%1<.55?1:0);
  R('edits',TM.paragraph+3); R('exist',TM.paragraph+5,.6);

  R('gav',TM.judge_gavel); $('gavH').setAttribute('transform','rotate('+(-20+16*Math.abs(Math.sin(t*2.5))).toFixed(1)+' 305 490)');
  dr($('vstr'),VN,p(u,TM.compass,TM.compass+.6)); R('cmp',TM.compass);
  const kn=p(u,TM.compass+.3,TM.compass+2.3); $('needle').setAttribute('transform','rotate('+(45-165*(1-kn)*Math.cos(kn*9)+2*Math.sin(t*3)).toFixed(1)+' 720 420)');
  R('stairs',TM.compass+3.8); const k7=4*p(u,TM.compass+4.3,TM.compass+9);
  $('sdot').setAttribute('cx',(1005+90*k7).toFixed(1)); $('sdot').setAttribute('cy',(540-60*k7-40*Math.sin(Math.PI*(k7%1))).toFixed(1));
  R('fear',TM.compass+10,.6);

  ['qa','qb','qc','qd'].forEach((id,i)=>R(id,TM.stopwatch+i*.4)); R('sw',TM.stopwatch+.3); R('nxt',TM.stopwatch+5.8,.6);
  const k8=cl((u-TM.stopwatch-.5)/5),A=k8*2*Math.PI*.9999;
  $('swarc').setAttribute('d',k8>0?'M1280 460L1280 340A120 120 0 '+(A>Math.PI?1:0)+' 1 '+(1280+120*Math.sin(A)).toFixed(1)+' '+(460-120*Math.cos(A)).toFixed(1)+'Z':'M0 0');
  $('swh').setAttribute('transform','rotate('+(k8*360).toFixed(1)+' 1280 460)');