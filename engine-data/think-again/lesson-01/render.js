const rv=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  const g0=TM.brain_gears+5,ga=60*Math.min(u,g0)+6*Math.max(0,u-g0);
  $('gA').setAttribute('transform','translate(1275 400) rotate('+ga.toFixed(1)+')');
  $('gB').setAttribute('transform','translate(1365 466) rotate('+(-ga*10/7+13).toFixed(1)+')');
  rv('brain',TM.brain_gears,.6); rv('rare',g0);

  R1.forEach((c,i)=>rise(c[0],p(u,TM.preacher+i*.3,TM.preacher+i*.3+.4))); hi(R1,0,u>=TM.preacher+7);
  rv('pre',TM.preacher+7);
  $('arm').setAttribute('transform','rotate('+(u>=TM.pulpit?14*Math.sin(t*5):0).toFixed(1)+' 480 520)');
  rv('serm',TM.pulpit); SL.forEach((l,i)=>l.setAttribute('width',(SW[i]*p(u,TM.pulpit+.4+i*.5,TM.pulpit+.9+i*.5)).toFixed(0)));
  rv('lis',TM.pulpit+1); QB.forEach((b,i)=>rise(b,p(u,TM.pulpit+1.5+i*.3,TM.pulpit+1.9+i*.3)));
  $('qx').setAttribute('opacity',p(u,TM.pulpit+4.9,TM.pulpit+5.3)); rv('lect',TM.pulpit+4.9,.6);

  hi(R2,1,u>=TM.prosecutor); rv('pros',TM.prosecutor);
  CD.forEach((g,i)=>rise(g,p(u,TM.evidence_box+i*.5,TM.evidence_box+i*.5+.4)));
  rv('def',TM.evidence_box+2); rv('stamp',TM.evidence_box+3,.3);
  rv('goals',TM.prosecutor+6.7); rv('win2',TM.prosecutor+7.1,.6);

  hi(R3,2,u>=TM.politician); rv('pol',TM.politician);
  CR.forEach((g,i)=>rise(g,p(u,TM.crowd+i*.3,TM.crowd+i*.3+.4)));
  TH.forEach((h,i)=>rise(h,p(u,TM.crowd+1.2+i*.35,TM.crowd+1.5+i*.35)));
  rv('mtr',TM.crowd+1); $('meter').setAttribute('width',(470*p(u,TM.crowd+1.2,TM.crowd+3.4)).toFixed(0));
  rv('spk',TM.thumbs_up); rv('say3',TM.thumbs_up+.6); rv('doubt',TM.thumbs_up+2.5);

  rv('trio',TM.mirror); $('chk').setAttribute('opacity',p(u,TM.mirror+.8,TM.mirror+1.2));
  rv('vault',TM.locked_door); $('ties').setAttribute('opacity',p(u,TM.locked_door+.4,TM.locked_door+1));
  const lk=u>=TM.locked_door+4.2&&u<TM.locked_door+5.4?6*Math.sin(t*40):0; $('lock').setAttribute('transform','translate('+lk.toFixed(1)+' 0)');
  rv('others',TM.locked_door+4.2); rv('outs',TM.locked_door+4.4); OM.forEach(c=>c.setAttribute('class',u>=TM.locked_door+5?'gain':'ink'));
  rv('never4',TM.locked_door+4.6,.6);

  hi(R5,3,u>=TM.scientist); rv('sci',TM.scientist); rv('flask5',TM.scientist+.4);
  BB.forEach((b,i)=>{b.setAttribute('cy',(690-((t*60+i*57)%170)).toFixed(1)); b.setAttribute('opacity',u>=TM.flask?1:0)});
  rv('cyc',TM.hypothesis); PP.forEach((g,i)=>{const a=i?TM.flask+i*.4:TM.hypothesis+.3; rise(g,p(u,a,a+.4))});
  const da=-Math.PI/2+Math.max(0,u-TM.flask)*1.4; $('dot5').setAttribute('cx',(850+170*Math.cos(da)).toFixed(1)); $('dot5').setAttribute('cy',(560+170*Math.sin(da)).toFixed(1)); $('dot5').setAttribute('opacity',u>=TM.flask?1:0);
  rv('wcard',TM.flask+5); const nw=p(u,TM.flask+7.6,TM.flask+8.2);
  $('wx').setAttribute('opacity',1-nw); $('wl1').setAttribute('opacity',1-nw); $('winfo').setAttribute('opacity',nw); $('wl2').setAttribute('opacity',nw);

  rv('italy',TM.italy_map); rv('train',TM.startup_desk); rv('split',TM.two_groups); rv('grpA',TM.two_groups+.2); rv('grpB',TM.two_groups+.4);
  DT.forEach((c,i)=>{const a=p(u,TM.startup_desk+.3+i*.06,TM.startup_desk+1.2+i*.06),b=p(u,TM.two_groups+.6+i*.06,TM.two_groups+1.6+i*.06),k=i%2,j=i>>1;
    const x1=635+(i%4)*70,y1=470+(i>>2)*60,x2=1150+(j%3)*100,y2=(k?670:340)+(j>2?(k?80:70):0);
    c.setAttribute('cx',(IP[i][0]+(x1-IP[i][0])*a+(x2-x1)*b).toFixed(1)); c.setAttribute('cy',(IP[i][1]+(y1-IP[i][1])*a+(y2-y1)*b).toFixed(1));
    c.setAttribute('class',k&&b>.5?'gain':'ink'); c.setAttribute('opacity',p(u,TM.italy_map+.6+i*.08,TM.italy_map+1+i*.08))});

  rv('chart',TM.revenue_bars);
  const h0=120*p(u,TM.revenue_bars+.4,TM.revenue_bars+1.6),h1=360*p(u,TM.revenue_bars+.7,TM.revenue_bars+2.4);
  $('bar0').setAttribute('y',720-h0); $('bar0').setAttribute('height',h0); $('bar1').setAttribute('y',720-h1); $('bar1').setAttribute('height',h1);
  rv('piv',TM.pivot_arrow); $('pp').setAttribute('stroke-dashoffset',(1-p(u,TM.pivot_arrow+1.5,TM.pivot_arrow+3)).toFixed(3));
  $('ph').setAttribute('opacity',p(u,TM.pivot_arrow+2.9,TM.pivot_arrow+3.2)); rv('piv2',TM.pivot_arrow+2.8);
  rv('better',TM.pivot_arrow+7,.6);

  rv('qa',TM.question_mark); rv('qb',TM.question_mark+3.4); rv('qc',TM.question_mark+3.8); rv('q8',TM.question_mark+4.5);
  rv('lensw',TM.question_mark+.5,.6); $('lens8').setAttribute('transform','translate('+(18*Math.sin(t*1.2)).toFixed(1)+' 0)');