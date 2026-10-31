const qb=(c,a,b,d)=>(1-c)*(1-c)*a+2*(1-c)*c*b+c*c*d;
  const c0=ease((t%2.2)/2.2);$('tdot').setAttribute('cx',qb(c0,1262,1320,1385).toFixed(1));$('tdot').setAttribute('cy',qb(c0,330,220,362).toFixed(1));

  rise($('sc1'),p(u,TM.latin_scroll,TM.latin_scroll+.5));rise($('ex1'),p(u,TM.latin_scroll+5.6,TM.latin_scroll+6.1));
  rise($('td1'),p(u,TM.tutor_desk,TM.tutor_desk+.5));rise($('mst1'),p(u,TM.tutor_desk+3,TM.tutor_desk+3.5));
  rise($('kd1'),p(u,TM.tutor_desk+5.6,TM.tutor_desk+6.2));

  rise($('cls2'),p(u,TM.harvard_class,TM.harvard_class+.5));rise($('nt2'),p(u,TM.lecture_notes,TM.lecture_notes+.5));
  CK.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.lecture_notes+1+i*.7,TM.lecture_notes+1.3+i*.7)));
  rise($('arr2'),p(u,TM.lecture_notes+.8,TM.lecture_notes+1.3));rise($('pg2'),p(u,TM.lecture_notes+5.2,TM.lecture_notes+5.7));
  $('bar2').setAttribute('width',(1360*(.15+.5*p(u,TM.lecture_notes+5.6,TM.lecture_notes+9.5))).toFixed(1));

  rise($('rh3'),p(u,TM.raised_hand,TM.raised_hand+.5));$('x3').setAttribute('opacity',p(u,TM.raised_hand+1.5,TM.raised_hand+2));
  rise($('st3'),p(u,TM.two_chairs,TM.two_chairs+.5));rise($('arc3'),p(u,TM.two_chairs+1.5,TM.two_chairs+2));
  rise($('bb3'),p(u,TM.two_chairs+6.3,TM.two_chairs+6.8));

  const as=p(u,TM.full_puzzle,TM.full_puzzle+1.4);
  PZ.forEach((z,i)=>{rise(z[0],p(u,TM.puzzle_pieces+i*.3,TM.puzzle_pieces+i*.3+.5));
    const x=PS[i][0]+(PT[i][0]-PS[i][0])*as,y=PS[i][1]+(PT[i][1]-PS[i][1])*as,r=PS[i][2]*(1-as);
    z[1].setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+') rotate('+r.toFixed(2)+' 160 90)');
    z[2].setAttribute('opacity',p(u,TM.puzzle_pieces+5.2+i*1.1,TM.puzzle_pieces+5.6+i*1.1))});
  rise($('one4'),p(u,TM.full_puzzle+1.4,TM.full_puzzle+2));

  const m5=p(u,TM.spotlight+.8,TM.spotlight+2.2),cx=560+480*m5;
  $('bm5').setAttribute('points','780,254 820,254 '+(cx+130).toFixed(1)+',690 '+(cx-130).toFixed(1)+',690');$('pl5').setAttribute('cx',cx.toFixed(1));
  F5a.setAttribute('fill',m5<.5?L:I);F5b.setAttribute('fill',m5>.5?G:I);$('ch5').setAttribute('opacity',(1-m5).toFixed(2));
  rise($('ar5'),p(u,TM.outward_arrow,TM.outward_arrow+.5));rise($('rl5'),p(u,TM.outward_arrow+4,TM.outward_arrow+4.6));

  rise($('hr6'),p(u,TM.ripple_pond,TM.ripple_pond+.5));
  const hs=1+.06*Math.pow(Math.abs(Math.sin(t*2.4)),4);$('hp6').setAttribute('transform','translate(800 485) scale('+hs.toFixed(3)+') translate(-800 -485)');
  const on6=u>=TM.ripple_pond?1:0;
  RP.forEach((e,i)=>{const k=(t*.35+i/3)%1;e.setAttribute('rx',(60+300*k).toFixed(1));e.setAttribute('ry',(45+225*k).toFixed(1));e.setAttribute('opacity',(on6*(1-k)*.7).toFixed(2))});
  R1.forEach((c,i)=>{c.setAttribute('opacity',p(u,TM.family_table+i*.3,TM.family_table+i*.3+.4));c.setAttribute('fill',u>=TM.family_table+1.8+i*.3?G:I)});
  R2.forEach((c,i)=>{const a=TM.ripple_rings+i*.2;c.setAttribute('opacity',p(u,a,a+.3));c.setAttribute('fill',G);LN[i].setAttribute('opacity',p(u,a,a+.3))});
  rise($('la6'),p(u,TM.ripple_pond+.5,TM.ripple_pond+1));rise($('lb6'),p(u,TM.family_table,TM.family_table+.5));rise($('lc6'),p(u,TM.ripple_rings,TM.ripple_rings+.5));

  rise($('p71'),p(u,TM.notebook,TM.notebook+.5));$('hl7').setAttribute('opacity',p(u,TM.notebook+1.5,TM.notebook+2));
  rise($('p72'),p(u,TM.coffee_cups,TM.coffee_cups+.5));ST.forEach((s,i)=>s.setAttribute('opacity',(.4+.4*Math.sin(t*2+i*1.5)).toFixed(2)));
  rise($('p73'),p(u,TM.calendar,TM.calendar+.5));CL.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+.8+i*.35?G:'var(--stage)'));
  rise($('tx7'),p(u,TM.calendar+3,TM.calendar+3.6));

  const q8=SC[8][0]/K;
  rise($('qa'),p(u,q8+.3,q8+.8));rise($('qb'),p(u,q8+.7,q8+1.2));rise($('qc'),p(u,q8+1.1,q8+1.6));rise($('qd'),p(u,q8+5.4,q8+6));
  const c8=ease((t%2.4)/2.4);$('qdot').setAttribute('cx',qb(c8,1285,1335,1395).toFixed(1));$('qdot').setAttribute('cy',qb(c8,575,490,592).toFixed(1));