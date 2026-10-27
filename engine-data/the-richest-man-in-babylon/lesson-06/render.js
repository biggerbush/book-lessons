const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  R('ladder',TM.hungry_youth,.6);
  CLB.setAttribute('transform','translate(1310 '+(640-170*p(u,TM.hungry_youth+1,TM.hungry_youth+6)).toFixed(1)+')');

  R('city',TM.dabasir);R('camel',TM.dabasir+.4);R('dab',TM.dabasir+.8);R('tark',TM.tarkad);
  IOU.forEach(([ln,g],i)=>{const k=p(u,TM.tarkad+1+i*.35,TM.tarkad+1.4+i*.35);ln.setAttribute('opacity',k);rise(g,k)});R('eat',TM.eating_house);

  R('sad',TM.saddle);
  const h=420*p(u,TM.spending,TM.spending+2);
  $('b2').setAttribute('y',700-h);$('b2').setAttribute('height',h);$('b2x').setAttribute('y',700-h);$('b2x').setAttribute('height',Math.max(0,h-260));
  R('borr',TM.spending+2);R('chase',TM.creditors);
  const rc=p(u,TM.creditors+.5,TM.creditors+4),mv=rc>0&&rc<1?1:0,bob=k=>(590-8*mv*Math.abs(Math.sin(t*9+k))).toFixed(1);
  RUN.setAttribute('transform','translate('+(1220+200*rc).toFixed(1)+' '+bob(0)+')');
  CR.forEach((g,i)=>g.setAttribute('transform','translate('+(940+80*i+200*rc).toFixed(1)+' '+bob(i+1)+')'));

  R('chn',TM.chains);R('sir',TM.sira);R('bub',TM.sira+.3);
  $('qm').setAttribute('opacity',1-p(u,TM.sira+3.5,TM.sira+3.9));R('q1',TM.sira+3.7);R('q2',TM.sira+4.5);R('peb',TM.sira+9.9);
  $('pb').setAttribute('cy',(688-14*Math.abs(Math.sin(t*3))).toFixed(1));

  const d1=p(u,TM.desert,TM.desert+5),d2=p(u,TM.desert+5.5,TM.desert+9.5),tn=u>=TM.desert+5.3;
  WK.setAttribute('transform','translate('+(820+200*d1-320*d2).toFixed(1)+' '+(470-5*Math.abs(Math.sin(t*6))).toFixed(1)+')');
  WK.setAttribute('fill',tn?'var(--gain)':'var(--ink)');$('home').style.stroke=tn?'var(--gain)':'var(--ink)';
  R('dsr',TM.desert);R('turn',TM.desert+5.3);R('coins',TM.desert+9.9);R('quo',TM.quote_card,.6);

  R('pie',TM.pie_chart);
  $('w0').setAttribute('d',wdg(0,.7*p(u,TM.seventy,TM.seventy+1.2)));
  $('w1').setAttribute('d',wdg(.7,.7+.2*p(u,TM.twenty,TM.twenty+1)));
  $('w2').setAttribute('d',wdg(.9,.9+.1*p(u,TM.ten,TM.ten+1)));
  R('r0',TM.seventy);R('r1',TM.twenty);R('r2',TM.ten);

  R('lend',TM.visit);R('vst',TM.visit+.3);R('stk',TM.visit+.3);
  VS.setAttribute('transform','translate('+(200+720*p(u,TM.visit+.5,TM.visit+4.5)).toFixed(1)+' 500)');
  const mf=u>=TM.mixed_faces;
  LD.forEach(([g,m],i)=>{g.setAttribute('fill',mf&&!MD[i]?'var(--loss)':'var(--ink)');m.setAttribute('opacity',p(u,TM.mixed_faces+i*.2,TM.mixed_faces+i*.2+.3))});
  const sp=p(u,TM.shrinking_debt,TM.shrinking_debt+5.5);
  STK.forEach((r,i)=>r.setAttribute('opacity',cl(10-10*sp-i)));MON.forEach((c,i)=>c.setAttribute('fill',10*sp>i+.5?'var(--gain)':'var(--line)'));
  R('mon',TM.shrinking_debt);R('paid',TM.shrinking_debt+5.7,.6);

  R('bal',TM.balance);$('beam').setAttribute('transform','rotate('+(3*Math.sin(t*1.5)).toFixed(2)+' 340 640)');
  R('jar',TM.savings_jar);
  const lv=p(u,TM.savings_jar+.5,TM.savings_jar+5),top=674-234*lv,cd=(t%1.4)/1.4;
  $('jf').setAttribute('y',top.toFixed(1));$('jf').setAttribute('height',(234*lv).toFixed(1));
  $('dropc').setAttribute('cy',(330+(top-330)*cd).toFixed(1));$('dropc').setAttribute('opacity',lv>0?1:0);
  R('stp',TM.steady_steps);
  const sm=5*p(u,TM.steady_steps+.5,TM.steady_steps+5);
  CLM.setAttribute('transform','translate('+(1090+60*sm).toFixed(1)+' '+(633-60*sm-10*Math.abs(Math.sin(Math.PI*sm))).toFixed(1)+')');

  const S8=SC[8][0]/K;
  R('payl',S8+.2);[0,1,2].forEach(i=>R('pay'+i,S8+.4+i*.4));
  R('qa',S8+4.9);R('qb',S8+5.3);R('qc',S8+5.7);R('phn',S8+6.1);
  $('phv').setAttribute('transform','rotate('+(Math.sin(t*2)>.3?2*Math.sin(t*20):0).toFixed(2)+' 1335 430)');