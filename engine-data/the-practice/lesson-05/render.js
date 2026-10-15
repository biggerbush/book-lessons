const cv=p(u,TM.title_gift+4.2,TM.title_gift+5.2);
  $('cover').setAttribute('opacity',(1-cv).toFixed(2)); $('cover').setAttribute('transform','translate(0 '+(-140*cv).toFixed(1)+')');
  rise(w0,p(u,TM.title_gift+4.2,TM.title_gift+4.7));

  rise($('cab1'),p(u,TM.desk_drawer,TM.desk_drawer+.5));
  [0,1,2].forEach(i=>{const a=TM.notebook+i*1.3;rise($('crd'+i),p(u,a,a+.5))});
  rise($('hum'),p(u,TM.notebook+5,TM.notebook+5.5)); rise($('lk1'),p(u,TM.notebook+5.4,TM.notebook+5.9));
  rise($('godin1'),p(u,TM.notebook+8.3,TM.notebook+8.8));

  rise(me2,p(u,TM.gift_box,TM.gift_box+.5));
  const back=p(u,TM.waiting_person+.3,TM.waiting_person+1.8), gx=400+800*p(u,TM.arrow_out+.4,TM.arrow_out+2.2)-800*back;
  $('gf2').setAttribute('transform','translate('+gx.toFixed(1)+' 440)'); $('gf2').setAttribute('opacity',p(u,TM.gift_box,TM.gift_box+.5));
  rise(th2,p(u,TM.arrow_out,TM.arrow_out+.5));
  $('arr2').setAttribute('opacity',(p(u,TM.arrow_out,TM.arrow_out+.8)*(1-.75*back)).toFixed(2));
  rise($('lb2'),p(u,TM.arrow_out+.4,TM.arrow_out+.9));
  rise($('off2'),p(u,TM.arrow_out+1,TM.arrow_out+1.5));
  paint(th2,u>=TM.waiting_person+1?'loss':'ink');
  rise($('qm2'),p(u,TM.waiting_person+1,TM.waiting_person+1.5)); rise($('wo2'),p(u,TM.waiting_person+.5,TM.waiting_person+1));

  rise($('fm3'),p(u,TM.mask,TM.mask+.5));
  const mq=p(u,TM.mask+3.3,TM.mask+4.3);
  $('mask3').setAttribute('transform','translate('+(-80*mq).toFixed(1)+' '+(-110*mq).toFixed(1)+') rotate('+(-15*mq).toFixed(1)+' 380 460)');
  $('mask3').setAttribute('opacity',(1-.5*mq).toFixed(2));
  rise($('lbF'),p(u,TM.mask+3.6,TM.mask+4.1));
  rise($('sp3'),p(u,TM.spotlight,TM.spotlight+.5));
  const sw=p(u,TM.spotlight+4.2,TM.spotlight+5.6);
  $('beam').setAttribute('transform','rotate('+(25.6-52*sw).toFixed(2)+' 1120 240)');
  grp3.forEach(g=>paint(g,sw>.8?'gain':'ink'));
  rise($('spt3'),p(u,TM.spotlight+4.4,TM.spotlight+5));

  rise($('lap4'),p(u,TM.laptop,TM.laptop+.5)); rise($('cal4'),p(u,TM.laptop+2.3,TM.laptop+2.8));
  cells.forEach((c,i)=>{const on=u>=TM.laptop+2.5+i*.08;
    c.setAttribute('fill',on?'var(--gain)':'var(--line)');
    c.setAttribute('fill-opacity',on&&u>=TM.calendar&&i%3==1?.35:1);
    c.setAttribute('stroke',i==26&&u>=TM.reader?'var(--ink)':'none')});
  rise($('nb4'),p(u,TM.calendar+.3,TM.calendar+.8));
  rise($('rd4'),p(u,TM.reader+.5,TM.reader+1)); rise($('rt4'),p(u,TM.reader+1,TM.reader+1.5));

  rise($('ap5'),p(u,TM.applause,TM.applause+.5));
  $('apx').setAttribute('x2',(280+140*p(u,TM.applause+1.5,TM.applause+2)).toFixed(1));
  rise($('sc5'),p(u,TM.scale,TM.scale+.5));
  const ang=12*p(u,TM.scale+.8,TM.scale+2.2)+3*p(u,TM.scale+7.2,TM.scale+8.2), ra=ang*Math.PI/180, dx=320*Math.cos(ra), dy=320*Math.sin(ra);
  $('beam5').setAttribute('transform','rotate('+ang.toFixed(2)+' 1020 330)');
  $('panL').setAttribute('transform','translate('+(1020-dx).toFixed(1)+' '+(330-dy).toFixed(1)+')');
  $('panR').setAttribute('transform','translate('+(1020+dx).toFixed(1)+' '+(330+dy).toFixed(1)+')');
  rise($('ab5'),p(u,TM.scale+7,TM.scale+7.5));

  rise($('tag6'),p(u,TM.price_tag,TM.price_tag+.5)); rise($('gen6'),p(u,TM.price_tag+4.2,TM.price_tag+4.7));
  rise($('plb6'),p(u,TM.plumber,TM.plumber+.5)); rise($('bill6'),p(u,TM.plumber+.6,TM.plumber+1.1));
  const fix=p(u,TM.plumber+2,TM.plumber+3);
  $('wr6').setAttribute('transform','rotate('+(8*Math.sin(fix*Math.PI*3)).toFixed(2)+' 1120 375)');
  $('joint6').setAttribute('class',fix>.6?'gain':'ink');
  drops.forEach((d,i)=>{const k=(t*.9+i/3)%1; d.setAttribute('transform','translate(1160 '+(372+250*k).toFixed(1)+')'); d.setAttribute('opacity',((1-fix)*(k<.85?1:(1-k)/.15)).toFixed(2))});
  $('pud6').setAttribute('opacity',(.35*(1-fix)).toFixed(2));
  rise($('care6'),p(u,TM.plumber+6.6,TM.plumber+7.1)); rise($('lv6'),p(u,TM.plumber+6.8,TM.plumber+7.3));

  const o=p(u,TM.open_drawer+.3,TM.open_drawer+1.5), lf=p(u,TM.one_person+.3,TM.one_person+1.3), fl=p(u,TM.send_button+.9,TM.send_button+2.4);
  const dtr='translate('+(220*o).toFixed(1)+' 0)';
  $('dr7').setAttribute('transform',dtr); $('df7').setAttribute('transform',dtr);
  const ap7=p(u,TM.one_person+.3,TM.one_person+.6);
  $('wk7b').setAttribute('opacity',(1-ap7).toFixed(2));
  $('card7').setAttribute('transform','translate('+(550+670*fl).toFixed(1)+' '+(545-175*lf+90*fl).toFixed(1)+')');
  $('card7').setAttribute('opacity',ap7.toFixed(2));
  $('cr7').setAttribute('opacity',(1-fl).toFixed(2)); $('cg7').setAttribute('opacity',fl.toFixed(2));
  rise($('wh7'),p(u,TM.one_person+.3,TM.one_person+.8)); rise($('snd7'),p(u,TM.send_button,TM.send_button+.5));
  $('path7').setAttribute('opacity',p(u,TM.send_button+.2,TM.send_button+.8).toFixed(2));
  const pr=p(u,TM.send_button+.5,TM.send_button+.7)-p(u,TM.send_button+.7,TM.send_button+.9);
  $('sndi').setAttribute('transform','translate(910 705) scale('+(1-.06*pr).toFixed(3)+') translate(-910 -705)');
  rise($('nt7'),p(u,TM.send_button+1.5,TM.send_button+2));

  rise($('qa'),p(u,TM.question,TM.question+.5)); rise($('qb'),p(u,TM.question+.4,TM.question+.9));
  rise($('qc'),p(u,TM.question+4.2,TM.question+4.7)); rise($('qd'),p(u,TM.question+4.6,TM.question+5.1));
  rise($('ql'),p(u,TM.question+5,TM.question+5.5));
  $('g8').setAttribute('transform','translate(0 '+(6*Math.sin(t*2)).toFixed(1)+')');