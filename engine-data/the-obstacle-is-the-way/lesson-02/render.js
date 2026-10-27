const a0=SC[0][0]/K,d0=SC[1][0]/K-a0,c0=a0+d0*.42;
  rise($('pan'),p(u,a0+.3,a0+.8)); $('panF').setAttribute('transform','translate('+(3*Math.sin(t*40)).toFixed(1)+' 0)');
  rise($('calm'),p(u,c0,c0+.5)); SPK.setAttribute('transform','translate(1400 425) scale('+(1+.15*Math.sin(t*3)).toFixed(3)+') translate(-1400 -425)');
  $('rain').setAttribute('stroke-dashoffset',(-(t*60)%28).toFixed(1));

  rise($('glass'),p(u,TM.two_lenses,TM.two_lenses+.5)); $('sight').setAttribute('opacity',p(u,TM.two_lenses+3.4,TM.two_lenses+4));
  rise($('evt'),p(u,TM.event_box,TM.event_box+.5)); rise($('stl'),p(u,TM.story_cloud,TM.story_cloud+.5));
  PL.forEach((g,i)=>{const a=TM.story_cloud+.3+i*.5;rise(g,p(u,a,a+.4))});
  rise($('epi'),p(u,TM.story_cloud+4.5,TM.story_cloud+5.1));

  rise($('rk'),p(u,TM.cleveland,TM.cleveland+.5)); rise($('crash'),p(u,TM.stock_crash,TM.stock_crash+.5));
  $('crl').setAttribute('stroke-dashoffset',(1-p(u,TM.stock_crash+.3,TM.stock_crash+2.3)).toFixed(3));
  rise($('froze'),p(u,TM.calm_ledger,TM.calm_ledger+.5)); rise($('cool'),p(u,TM.calm_ledger+.6,TM.calm_ledger+1.1));
  $('look').setAttribute('opacity',p(u,TM.calm_ledger+.6,TM.calm_ledger+1.2));
  RK.forEach(e=>e.setAttribute('class',u>=TM.calm_ledger?'gain':'ink'));

  rise($('pA'),p(u,TM.magnifier,TM.magnifier+.5));
  $('mag').setAttribute('transform','translate('+(220+200*p(u,TM.magnifier+.5,TM.magnifier+3)).toFixed(1)+' 440)');
  rise($('pB'),p(u,TM.savings_jar,TM.savings_jar+.5));
  CO.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.savings_jar+.5+i*.5,TM.savings_jar+.8+i*.5)));
  const pc=TM.savings_jar+4.2; rise($('pC'),p(u,pc,pc+.5));
  const bk=p(u,pc+.5,pc+2); $('bold').setAttribute('stroke-dashoffset',(1-bk).toFixed(3)); $('bhd').setAttribute('opacity',bk>=1?1:0);
  $('riv').setAttribute('transform','translate('+(2.5*Math.sin(t*35)).toFixed(1)+' 0)');

  rise($('astr'),p(u,TM.astronaut,TM.astronaut+.5)); rise($('sim'),p(u,TM.simulator,TM.simulator+.5));
  const pn=u<TM.simulator+3.6;
  LP.forEach((c,i)=>c.setAttribute('fill',pn?((Math.floor(t*4)+i)%2?'var(--loss)':'var(--line)'):'var(--gain)'));
  RP.forEach((c,i)=>c.setAttribute('fill',u>=TM.simulator+.3+i*.35?(i<6?'var(--loss)':'var(--gain)'):'var(--line)'));
  $('simT').textContent=pn?'SYSTEM FAILURE':'ROUTINE'; $('simT').style.fill=pn?'var(--loss)':'var(--gain)';
  rise($('fm'),p(u,TM.simulator+5,TM.simulator+5.5)); $('fearB').setAttribute('width',(140+30*Math.sin(t*3)).toFixed(1));
  rise($('nf'),p(u,TM.simulator+5,TM.simulator+5.5));
  rise($('dm'),p(u,TM.simulator+8,TM.simulator+8.5)); rise($('kf'),p(u,TM.simulator+8,TM.simulator+8.5));

  rise($('emp'),p(u,TM.emperor,TM.emperor+.5));
  rise($('wn'),p(u,TM.wine_glass,TM.wine_glass+.5)); sk('ws',632,200,p(u,TM.wine_glass+2,TM.wine_glass+2.6)); rise($('w2'),p(u,TM.wine_glass+2.5,TM.wine_glass+3.1));
  rise($('rb'),p(u,TM.purple_robe,TM.purple_robe+.5)); sk('rs',632,220,p(u,TM.purple_robe+1,TM.purple_robe+1.6)); rise($('r2'),p(u,TM.purple_robe+1.5,TM.purple_robe+2.1));
  const lb=TM.purple_robe+4.2; rise($('lab'),p(u,lb,lb+.6));
  PT.forEach((q,i)=>{const s=p(u,lb+1+i*.4,lb+1.4+i*.4); q[1].setAttribute('x2',(1170+160*s).toFixed(1));
    q[2].style.fill=s>.5?'var(--muted)':'var(--loss)';
    const f=p(u,lb+2.6+i*.3,lb+3.2+i*.3); q[0].setAttribute('transform','translate(0 '+(24*f).toFixed(1)+')'); q[0].setAttribute('opacity',(1-f).toFixed(2))});
  const sh=p(u,lb+3.6,lb+4.4); RKG.setAttribute('transform','translate(1000 770) scale('+(1-.3*sh).toFixed(3)+') translate(-1000 -770)');
  RKP.setAttribute('class',sh>.5?'gain':'loss');

  rise($('mail'),p(u,TM.late_email,TM.late_email+.5));
  TG.forEach((g,i)=>{const a=TM.label_tags+i*.6;rise(g[0],p(u,a,a+.4));
    const k=p(u,TM.plain_facts+i*.3,TM.plain_facts+i*.3+.6);
    g[3].setAttribute('x2',(836+220*k).toFixed(1)); g[3].setAttribute('opacity',k>0?1:0);
    const st=k>.5; g[4].style.fill=st?'var(--muted)':'var(--loss)'; g[5].setAttribute('class',st?'s-muted':'s-loss'); g[6].setAttribute('class',st?'s-muted':'s-loss')});
  const fl=p(u,TM.plain_facts+.2,TM.plain_facts+1.2);
  $('flow').setAttribute('stroke-dashoffset',(1-fl).toFixed(3)); $('flowH').setAttribute('opacity',fl>=1?1:0);
  ML.forEach(r=>r.setAttribute('fill',u>=TM.plain_facts?'var(--gain)':'var(--line)'));
  rise($('facts'),p(u,TM.plain_facts+.8,TM.plain_facts+1.3)); rise($('resp'),p(u,TM.plain_facts+5,TM.plain_facts+5.6));

  const pb=TM.pause_button; rise($('nP'),p(u,pb,pb+.4)); rise($('pz'),p(u,pb+.5,pb+1)); rise($('nR'),p(u,pb+1.2,pb+1.6));
  const gw=90+210*p(u,pb+.8,pb+2.5),bo=p(u,pb+.8,pb+1.2);
  $('brL').setAttribute('d','M'+(814-gw).toFixed(1)+' 340h-14v160h14'); $('brR').setAttribute('d','M'+(786+gw).toFixed(1)+' 340h14v160h-14');
  $('brL').setAttribute('opacity',bo); $('brR').setAttribute('opacity',bo);
  rise($('qm'),p(u,TM.question_mark,TM.question_mark+.5));
  rise($('gapL'),p(u,TM.question_mark+4.6,TM.question_mark+5.1)); rise($('clr'),p(u,TM.question_mark+4.6,TM.question_mark+5.2));

  rise($('qa'),p(u,TM.mirror,TM.mirror+.5)); rise($('qb'),p(u,TM.mirror+.4,TM.mirror+.9)); rise($('qc'),p(u,TM.mirror+.8,TM.mirror+1.3));
  rise($('mir'),p(u,TM.mirror+1,TM.mirror+1.5)); rise($('dt'),p(u,TM.mirror+1.2,TM.mirror+1.7));
  const dk=p(u,TM.mirror+5.4,TM.mirror+6.6); $('dtI').setAttribute('transform','translate(0 '+(dk*100).toFixed(1)+')'); $('dtI').setAttribute('opacity',(1-dk).toFixed(2));
  rise($('chal'),p(u,TM.mirror+5.4,TM.mirror+6));