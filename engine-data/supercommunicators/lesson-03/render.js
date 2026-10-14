rise($('tug'),p(u,TM.rope,TM.rope+.5)); tr('rope0',14*Math.sin(t*2.2),0); rise($('hour'),p(u,TM.rope+6.6,TM.rope+7.1));

  rise($('pp1'),p(u,TM.two_people,TM.two_people+.5)); rise($('flats'),p(u,TM.two_people+4.2,TM.two_people+4.7));
  rise($('tbox'),p(u,TM.thought_box,TM.thought_box+.5)); $('ball').setAttribute('cx',(800+110*Math.sin(t*2.5)).toFixed(1));
  rise($('hid'),p(u,TM.hidden_goals,TM.hidden_goals+.6));

  rise($('arr'),p(u,TM.push_arrows,TM.push_arrows+.5)); tr('aL',6*Math.sin(t*9),0); tr('aR',-6*Math.sin(t*9+1),0);
  rise($('clk'),p(u,TM.clock,TM.clock+.5)); $('hand').setAttribute('transform','rotate('+(t*90%360).toFixed(1)+' 800 640)');
  rise($('st'),p(u,TM.clock+2.9,TM.clock+3.4)); rise($('ask'),p(u,TM.clock+7.1,TM.clock+7.7));

  rise($('tbl'),p(u,TM.jury_table,TM.jury_table+.5)); $('rec').setAttribute('opacity',Math.sin(t*4)>0?1:.2);
  JR.forEach(c=>c.setAttribute('fill',c.L?(u>=TM.law_book?'var(--loss)':'var(--ink)'):(u>=TM.scales?'var(--muted)':'var(--ink)')));
  rise($('law'),p(u,TM.law_book,TM.law_book+.5)); rise($('scl'),p(u,TM.scales,TM.scales+.5));
  rise($('past'),p(u,TM.scales+4.6,TM.scales+5.1)); $('pa1').style.strokeDashoffset=(-t*30).toFixed(1); $('pa2').style.strokeDashoffset=(-t*30).toFixed(1);

  rise($('pp4'),p(u,TM.speech_bubble,TM.speech_bubble+.5)); rise($('bub4'),p(u,TM.speech_bubble+.4,TM.speech_bubble+.9));
  rise($('pz'),p(u,TM.speech_bubble+1,TM.speech_bubble+1.5));
  const k4=p(u,TM.open_hands,TM.open_hands+1.2); tr('pzA',300+340*k4,440); tr('pzB',1140-340*k4,440);
  rise($('wt'),p(u,TM.open_hands+1.2,TM.open_hands+1.7));
  const pzo=u>=TM.open_hands+5.4; ['pzAp','pzBp'].forEach(i=>$(i).setAttribute('fill',pzo?'var(--gain)':'var(--stage)'));
  ['pzAt','pzBt'].forEach(i=>$(i).style.fill=pzo?'var(--on-gain)':'var(--muted)');
  rise($('puz'),p(u,TM.open_hands+5.4,TM.open_hands+6));

  rise($('pp5'),p(u,TM.my_goal,TM.my_goal+.5)); rise($('g1'),p(u,TM.my_goal+.3,TM.my_goal+.8)); rise($('g1b'),p(u,TM.my_goal+4.2,TM.my_goal+4.7));
  rise($('g2'),p(u,TM.question_mark,TM.question_mark+.5));
  rise($('vn'),p(u,TM.venn,TM.venn+.5)); const k5=p(u,TM.venn,TM.venn+1.2); tr('vA',-140*(1-k5),0); tr('vB',140*(1-k5),0);
  $('lens5').setAttribute('opacity',p(u,TM.venn+1,TM.venn+1.5));

  rise($('st6'),p(u,TM.bridge,TM.bridge+.5)); const m6=p(u,TM.bridge+1.4,TM.bridge+2.6);
  tr('mvB',1300-900*m6,0); $('rp6').setAttribute('opacity',1-m6);
  rise($('prb'),p(u,TM.bridge+2.4,TM.bridge+2.9)); $('brg').setAttribute('stroke-dashoffset',1-p(u,TM.bridge+2.6,TM.bridge+3.6));
  rise($('mp'),p(u,TM.map,TM.map+.5)); $('route').setAttribute('stroke-dashoffset',1-p(u,TM.map+.6,TM.map+2.6));
  rise($('open'),p(u,TM.map+5.8,TM.map+6.4));

  rise($('pad'),p(u,TM.notepad,TM.notepad+.5)); [0,1,2].forEach(i=>{const a=TM.notepad+.8+i*.6; rise($('w'+i),p(u,a,a+.4))});
  rise($('chr'),p(u,TM.two_chairs,TM.two_chairs+.5)); rise($('cb1'),p(u,TM.two_chairs+.4,TM.two_chairs+.9)); rise($('cb2'),p(u,TM.two_chairs+2,TM.two_chairs+2.5));
  rise($('lst'),p(u,TM.two_chairs+5,TM.two_chairs+5.5)); $('wav').setAttribute('opacity',(.55+.45*Math.sin(t*4)).toFixed(2));

  rise($('ml'),p(u,TM.mirror,TM.mirror+.5)); rise($('mir'),p(u,TM.mirror+.3,TM.mirror+.9)); $('mq').setAttribute('opacity',(.6+.4*Math.sin(t*3)).toFixed(2));
  rise($('qa'),p(u,TM.mirror+3,TM.mirror+3.5)); rise($('qb'),p(u,TM.mirror+3.4,TM.mirror+3.9)); rise($('qc'),p(u,TM.mirror+3.8,TM.mirror+4.3)); rise($('qd'),p(u,TM.mirror+4.4,TM.mirror+4.9));