const k=(t/14)%1,yt=300+140*k,hw=78-58*k,yb=(672-130*k).toFixed(1);
  $('sandT').setAttribute('points',(1340-hw).toFixed(1)+','+yt.toFixed(1)+' '+(1340+hw).toFixed(1)+','+yt.toFixed(1)+' 1346,462 1334,462');
  $('sandB').setAttribute('points','1266,672 1414,672 1340,'+yb); $('stream').setAttribute('d','M1340 466V'+yb);
  rise($('hg'),p(u,TM.hourglass,TM.hourglass+.6)); rise($('ytime'),p(u,TM.hourglass+5.8,TM.hourglass+6.4));

  rise($('coin'),p(u,TM.dividend_coin,TM.dividend_coin+.5)); rise($('divclk'),p(u,TM.dividend_coin+1.5,TM.dividend_coin+2));
  rot('h1',t*40,620,400); rise($('quote'),p(u,TM.dividend_coin+5,TM.dividend_coin+5.6));
  rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
  cells.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+.4+i*.15?'var(--gain)':'var(--line)'));
  rise($('quiet'),p(u,TM.calendar+4.6,TM.calendar+5.2));

  rise($('res'),p(u,TM.researcher,TM.researcher+.5)); rise($('chart'),p(u,TM.happy_meter,TM.happy_meter+.5));
  const bh=360*p(u,TM.happy_meter+3.3,TM.happy_meter+4.5); $('b2').setAttribute('height',bh.toFixed(1)); $('b2').setAttribute('y',(640-bh).toFixed(1));
  rise($('ctl'),p(u,TM.happy_meter+3.3,TM.happy_meter+3.8)); rise($('pred'),p(u,TM.happy_meter+3.8,TM.happy_meter+4.4));
  rise($('wheel'),p(u,TM.steering,TM.steering+.5)); rot('whl',18*Math.sin(t*1.2),1300,440);

  rise($('jar'),p(u,TM.savings_jar,TM.savings_jar+.5));
  const jh=20+200*p(u,TM.savings_jar+3.8,TM.savings_jar+5.5); $('jfill').setAttribute('height',jh.toFixed(1)); $('jfill').setAttribute('y',(636-jh).toFixed(1));
  rise($('cA'),p(u,TM.sick_bed,TM.sick_bed+.5)); rise($('cB'),p(u,TM.job_door,TM.job_door+.5));

  rise($('inc'),p(u,TM.office_desk,TM.office_desk+.5)); rise($('ctr'),p(u,TM.office_desk+5,TM.office_desk+5.5));
  rise($('home'),p(u,TM.laptop_brain,TM.laptop_brain+.5)); $('bub').setAttribute('transform','translate(0 '+(6*Math.sin(t*2)).toFixed(1)+')');
  rise($('heads4'),p(u,TM.laptop_brain+1.5,TM.laptop_brain+2.1));

  CR.forEach((g,i)=>g.setAttribute('opacity',p(u,TM.elderly_group+i*.03,TM.elderly_group+i*.03+.3)));
  rise($('crl'),p(u,TM.elderly_group+1,TM.elderly_group+1.5));
  rise($('shelf'),p(u,TM.trophy_shelf,TM.trophy_shelf+.5)); rise($('nox'),p(u,TM.trophy_shelf+1.5,TM.trophy_shelf+2));
  rise($('table'),p(u,TM.family_table,TM.family_table+.5)); rise($('fam5'),p(u,TM.family_table+1.5,TM.family_table+2.1));

  BK.forEach((b,i)=>{rise(b[0],p(u,TM.puzzle+i*.6,TM.puzzle+i*.6+.5)); b[1].setAttribute('stroke',u>=TM.puzzle+3.4+i*.4?'var(--gain)':'var(--ink)')});
  rise($('key6'),p(u,TM.key,TM.key+.5)); $('keyM').setAttribute('transform','translate('+(160*p(u,TM.key+.6,TM.key+1.8)).toFixed(1)+' 0)');
  rise($('lock6'),p(u,TM.key,TM.key+.5)); rot('h6',u>=TM.key+1.8?t*50:0,1200,440);
  rise($('mrowg'),p(u,TM.key+4.5,TM.key+5)); MO.forEach((m,i)=>m.setAttribute('fill',u>=TM.key+4.8+i*.25?'var(--gain)':'var(--line)'));

  rise($('dol'),p(u,TM.runway,TM.runway+.5)); const ds=p(u,TM.runway+1.2,TM.runway+1.8);
  $('dstr').setAttribute('x2',(140+120*ds).toFixed(1)); $('dstr').setAttribute('y2',(370-100*ds).toFixed(1)); $('dstr').setAttribute('opacity',ds>0?1:0);
  rise($('rwg'),p(u,TM.runway+3.3,TM.runway+3.8));
  RW.forEach((r,i)=>{const on=u>=TM.runway+3.6+i*.3; r[0].setAttribute('fill',on?'var(--gain)':'var(--line)'); r[1].style.fill=on?'var(--on-gain)':'var(--muted)'});
  rise($('fund'),p(u,TM.label_jar,TM.label_jar+.5)); FL.forEach((f,i)=>rise(f,p(u,TM.label_jar+1.5+i*.6,TM.label_jar+1.9+i*.6)));
  [0,1,2].forEach(i=>rise($('ft'+i),p(u,TM.label_jar+.4+i*.7,TM.label_jar+.9+i*.7)));

  ['qa','qb','qc','qd'].forEach((id,i)=>rise($(id),p(u,TM.clock+i*.4,TM.clock+i*.4+.5)));
  RG.forEach((g,i)=>g.setAttribute('opacity',p(u,TM.clock+1.6+i*.3,TM.clock+1.9+i*.3))); rot('h8',t*60,1300,700);