const R=(e,a,d=.5)=>rise(typeof e=='string'?$(e):e,p(u,a,a+d));
  R('sb0',TM.quit_sign);R('sb1',TM.quit_sign+.8);R('sb2',TM.quit_sign+1.6);
  const fl=u>=TM.quit_sign+3.5;$('sb0p').style.fill=fl?'var(--gain)':'var(--stage)';$('sb0p').style.stroke=fl?'var(--gain)':'var(--loss)';
  $('sb0t').textContent=fl?'EXPERIMENT':'QUIT?';$('sb0t').style.fill=fl?'var(--on-gain)':'var(--loss)';

  R('badge',TM.grit_badge);R('mt1',TM.mountain);
  const ck=.8*p(u,TM.mountain+.4,TM.mountain+3.2);$('climber').setAttribute('transform','translate('+(480+300*ck).toFixed(1)+' '+(760-440*ck).toFixed(1)+')');
  R('qm',TM.epstein);R('mt2',TM.epstein+1);R('rightm',TM.epstein+4.2);

  R('pz',TM.puzzle_piece);const jn=p(u,TM.puzzle_piece+1.6,TM.puzzle_piece+3.6),fit=u>=TM.puzzle_piece+3.6;
  $('pa').setAttribute('transform','translate('+(300+260*jn).toFixed(1)+' 300)');$('pb').setAttribute('transform','translate('+(1060-260*jn).toFixed(1)+' 300)');
  ['paP','pbP'].forEach(k=>$(k).style.fill=fit?'var(--gain)':'var(--stage)');['paT','pbT'].forEach(k=>$(k).style.fill=fit?'var(--on-gain)':'var(--muted)');
  R('spk',TM.sparks);R('bn0',TM.sparks+.6);R('bn1',TM.sparks+1.2);R('tryit',TM.sparks+3.7);

  R('map',TM.map_uk);$('ien').style.fill=u>=TM.england_desk?'var(--loss)':'var(--stage)';$('isc').style.fill=u>=TM.scotland_desk?'var(--gain)':'var(--stage)';
  R('rowE',TM.england_desk);R('rowS',TM.scotland_desk);SB.forEach((g,i)=>R(g,TM.scotland_desk+.6+i*.5));
  R('chosen',TM.scotland_desk+2.4);R('same',TM.scotland_desk+3.8);

  R('lab1',TM.career_paths);EL.forEach((e,i)=>drw(e,p(u,TM.career_paths+i*.3,TM.career_paths+2+i*.3)));R('eD',TM.career_paths+2);
  R('lab2',TM.career_paths+.4);SLn.forEach((e,i)=>drw(e,p(u,TM.career_paths+.4+i*.3,TM.career_paths+2.4+i*.3)));R('cmt',TM.career_paths+5.8);
  R('scl',TM.scale);const ang=12*p(u,TM.scale+.6,TM.scale+2.2),ar=ang*Math.PI/180,bx=170*Math.cos(ar),by=170*Math.sin(ar);
  $('beam').setAttribute('transform','rotate('+ang.toFixed(2)+' 1220 400)');
  $('panL').setAttribute('transform','translate('+(1220-bx).toFixed(1)+' '+(400-by).toFixed(1)+')');$('panR').setAttribute('transform','translate('+(1220+bx).toFixed(1)+' '+(400+by).toFixed(1)+')');
  R('trade',TM.scale+2);

  [TM.art_shop,TM.art_shop+2,TM.art_shop+4,TM.pulpit,TM.easel].forEach((a,i)=>{R('v'+i,a);if(i)drw(SG[i-1],p(u,a-.4,a+.3))});
  R('px',TM.pulpit+1);R('kx',TM.easel+2.5);const cs=u>=TM.easel+2.5?Math.floor(t*1.2):0;for(let k=0;k<3;k++)$('ca'+k).style.fill=CP[(cs+k)%4];
  R('fit5',TM.easel+6.2);

  R('bp',TM.ibarra);R('bx',TM.ibarra+2);R('cyc',TM.lab_flask);TN.forEach((g,i)=>R(g,TM.lab_flask+2.2+i*.9));
  const oa=-Math.PI/2+t*1.5;$('orb').setAttribute('cx',(980+140*Math.cos(oa)).toFixed(1));$('orb').setAttribute('cy',(400+140*Math.sin(oa)).toFixed(1));
  R('stones',TM.stepping);R('hop',TM.stepping);const hk=5*p(u,TM.stepping+.4,TM.stepping+3.6);
  $('hopp').setAttribute('transform','translate('+(200+200*hk).toFixed(1)+' '+(720-60*Math.abs(Math.sin(Math.PI*hk))).toFixed(1)+')');
  ST.forEach((s,i)=>s.style.fill=hk>=i-.01&&u>=TM.stepping+.4?'var(--gain)':'var(--line)');
  R('fitc',TM.stepping+3.6);R('revl',TM.stepping+.8);

  R('cal',TM.calendar);CE.forEach((c,i)=>c.style.fill=u>=TM.calendar+.8+i*.12?'var(--gain)':'var(--line)');
  R('nb',TM.notebook);[0,1,2].forEach(i=>R('ni'+i,TM.notebook+1.5+i*1.6));
  R('chk',TM.checkmark);$('bnow').setAttribute('width',(140*p(u,TM.checkmark+.4,TM.checkmark+1.4)).toFixed(1));$('btry').setAttribute('width',(260*p(u,TM.checkmark+.8,TM.checkmark+2)).toFixed(1));
  R('tick',TM.checkmark+2.2);R('strat',TM.checkmark+5);

  R('qa',TM.question);R('qb',TM.question+.4);R('qc',TM.question+.8);R('qg',TM.question+1.4);
  BB.forEach((b,i)=>{const c=(t*.6+i/3)%1;b.setAttribute('cy',(740-110*c).toFixed(1));b.setAttribute('opacity',(1-c).toFixed(2))});