const k0=p(u,TM.lemon,TM.lemon+.9);$('t_lem').setAttribute('transform','translate(0 '+(-160*(1-k0)).toFixed(1)+')');$('t_lem').setAttribute('opacity',k0);
  rise($('t_gl'),p(u,TM.lemon+2.8,TM.lemon+3.4));FILL(G0,p(u,TM.lemon+3.4,TM.lemon+5.4));

  rise($('th'),p(u,TM.thought_cloud,TM.thought_cloud+.6));rise($('emq'),p(u,TM.emperor,TM.emperor+.6));rise($('lens'),p(u,TM.two_lenses,TM.two_lenses+.6));
  RN.forEach((l,i)=>{const j=i%7,cx=i<7?840:1180,h=i<7?120:60,x=cx-66+j*22,y=530+((t*110+j*37)%h);l.setAttribute('x1',x);l.setAttribute('y1',y.toFixed(1));l.setAttribute('x2',x-6);l.setAttribute('y2',(y+18).toFixed(1))});

  rise($('hb'),p(u,TM.harold,TM.harold+.6));const L=p(u,TM.smile+3.7,TM.smile+4.5);$('dc').setAttribute('opacity',1-L);rise($('sun'),L);
  [...AB.children].forEach(c=>c.setAttribute('class',L>.5?'gain':'loss'));
  const m=p(u,TM.platform,TM.platform+2.5);$('pm').setAttribute('transform','translate('+(480*(1-m)).toFixed(1)+' 0)');$('pm').setAttribute('opacity',p(u,TM.platform,TM.platform+.4));
  rise($('bub'),p(u,TM.smile,TM.smile+.5));$('grin').setAttribute('opacity',p(u,TM.smile,TM.smile+.5));rise($('lift'),p(u,TM.smile+3.9,TM.smile+4.5));

  rise($('r1'),p(u,TM.raft,TM.raft+.6));$('rd').textContent=Math.round(21*p(u,TM.raft+.6,TM.raft+2.4))+' days';
  let wv='M140 570';for(let x=160;x<=520;x+=20)wv+='L'+x+' '+(570+8*Math.sin(x/30+t*2)).toFixed(1);$('wv').setAttribute('d',wv);
  $('rf').setAttribute('transform','translate(0 '+(5*Math.sin(t*2)).toFixed(1)+')');
  rise($('w2'),p(u,TM.water_glass,TM.water_glass+.6));FILL(G3,p(u,TM.water_glass+.4,TM.water_glass+2));rise($('nc'),p(u,TM.water_glass+2.5,TM.water_glass+3.1));
  rise($('e3'),p(u,TM.eyes,TM.eyes+.6));const lx=(7*Math.sin(t*.9)).toFixed(1);IRS.forEach(ir=>ir.setAttribute('transform','translate('+lx+' 0)'));

  const s4=p(u,TM.sears,TM.sears+.7);$('l4').setAttribute('transform','translate(0 '+(-40*(1-s4)).toFixed(1)+')');$('l4').setAttribute('opacity',s4);
  rise($('fl'),p(u,TM.fool_sage,TM.fool_sage+.6));rise($('ws'),p(u,TM.fool_sage+5,TM.fool_sage+5.6));FILL(G4,p(u,TM.fool_sage+5.8,TM.fool_sage+7.5));

  rise($('fm'),p(u,TM.farm,TM.farm+.6));$('fx').setAttribute('opacity',p(u,TM.farm+1.6,TM.farm+2.1));
  const sk=p(u,TM.snake,TM.snake+.6);SN.forEach((s,i)=>{const x0=SP5[i][0],y0=SP5[i][1];let d='M'+x0+' '+y0;for(let j=1;j<=15;j++)d+='L'+(x0+j*10)+' '+(y0+9*Math.sin(j*.7-t*4+i)).toFixed(1);s.setAttribute('d',d);s.setAttribute('opacity',sk);s.setAttribute('class',u>=TM.cans?'s-gain':'s-loss')});
  rise($('ar5'),p(u,TM.cans,TM.cans+.5));PR.forEach((g,i)=>rise(g,p(u,TM.cans+i*1.6,TM.cans+i*1.6+.5)));rise($('sg'),p(u,TM.signpost,TM.signpost+.6));

  rise($('tg'),p(u,TM.arrow,TM.arrow+.5));const fa=p(u,TM.arrow+.5,TM.arrow+1.4);
  $('aw').setAttribute('transform','translate('+(300+290*fa).toFixed(1)+' '+(470-50*fa).toFixed(1)+') rotate(-10)');$('aw').setAttribute('opacity',p(u,TM.arrow+.4,TM.arrow+.6));
  rise($('cp'),p(u,TM.compass,TM.compass+.5));const cn=p(u,TM.compass+.6,TM.compass+2.2);
  $('nd').setAttribute('transform','translate(1150 480) rotate('+(180+180*cn+6*Math.sin(t*3)*(1-cn)).toFixed(1)+')');rise($('fw'),p(u,TM.compass+2,TM.compass+2.6));

  rise($('nb'),p(u,TM.notebook,TM.notebook+.6));LN.forEach((l,i)=>{const a=TM.notebook+.8+i*1.2,k=p(u,a,a+.8);l[0].setAttribute('stroke-dashoffset',(440*(1-k)).toFixed(1));l[1].setAttribute('opacity',p(u,a,a+.3))});
  rise($('lc'),p(u,TM.lemon_list,TM.lemon_list+.6));rise($('la'),p(u,TM.lemon_list+1.2,TM.lemon_list+1.7));FILL(G7,p(u,TM.lemon_list+1.6,TM.lemon_list+3.2));

  rise($('qa'),p(u,TM.question,TM.question+.5));rise($('qb'),p(u,TM.question+.4,TM.question+.9));rise($('l8'),p(u,TM.question+.2,TM.question+.8));
  rise($('g8'),p(u,TM.question+2.6,TM.question+3.1));rise($('qc'),p(u,TM.question+3,TM.question+3.5));FILL(G8,p(u,TM.question+3.2,TM.question+4.8));