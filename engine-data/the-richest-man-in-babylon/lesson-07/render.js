const T0=TM.gold_bag;
rise($('t0bag'),p(u,T0,T0+.6)); rise($('t0or'),p(u,T0+1.5,T0+2)); rise($('t0tab'),p(u,T0+2.5,T0+3.1));
const w0=p(u,T0+7.2,T0+7.9); bag0.setAttribute('opacity',(1-.6*w0).toFixed(2));
tab0[0].setAttribute('transform','translate(0 '+(-20*w0).toFixed(1)+')'); tab0[0].firstChild.setAttribute('stroke',w0>.5?'var(--gain)':'var(--ink)');

rise($('camp'),p(u,TM.campfire,TM.campfire+.6));
const fh=90+14*Math.sin(t*7)+8*Math.sin(t*11.3); FL[0].setAttribute('d',flame(560,692,fh,46)); FL[1].setAttribute('d',flame(560,692,fh*.5,22));
rise($('kal'),p(u,TM.kalabab,TM.kalabab+.5)); rise($('story'),p(u,TM.kalabab+.8,TM.kalabab+1.4));
rise($('nomS'),p(u,TM.nomasir,TM.nomasir+.5)); nomM.setAttribute('transform','translate('+(70*p(u,TM.nomasir+.5,TM.nomasir+2.5)).toFixed(1)+' 0)');

rise($('ark2'),p(u,TM.tablet-.5,TM.tablet)); rise($('gift1'),p(u,TM.tablet+.3,TM.tablet+.8)); rise($('gift2'),p(u,TM.tablet+1.5,TM.tablet+2));
rise($('tl'),p(u,TM.ten_years,TM.ten_years+.5));
TD.forEach((d,i)=>d.setAttribute('fill',u>=TM.ten_years+.6+i*.4?'var(--gain)':'var(--stage)'));
rise($('estate'),p(u,TM.ten_years+6.2,TM.ten_years+6.8));

rise($('pa'),p(u,TM.tricksters-.3,TM.tricksters+.3)); rise($('trk'),p(u,TM.tricksters+.8,TM.tricksters+1.3));
const rc=p(u,TM.tricksters+1.5,TM.tricksters+5); HR[0].setAttribute('cx',(190+480*rc).toFixed(1)); HR[1].setAttribute('cx',(190+220*Math.min(rc*1.6,1)).toFixed(1));
rise($('pb'),p(u,TM.partner,TM.partner+.5));
PC.forEach((c,i)=>{const a=i<5?TM.tricksters+3+i*.5:TM.partner+1+(i-5)*(TM.empty_purse-TM.partner-1)/5, k=p(u,a,a+.4);
  c.setAttribute('transform','translate(0 '+(40*k).toFixed(1)+')'); c.setAttribute('opacity',(1-k).toFixed(2));
  PO[i].setAttribute('stroke',k>.5?'var(--loss)':'var(--muted)')});
rise($('gone'),p(u,TM.empty_purse,TM.empty_purse+.6));

rise($('tab4'),p(u,TM.clay_rules,TM.clay_rules+.5));
[TM.tenth_coin,TM.flock].forEach((a,i)=>{const on=u>=a; NUM[i].style.fill=on?'var(--gain)':'var(--ink)'; T4[1][i].setAttribute('stroke',on?'var(--gain)':'var(--muted)')});
rise($('l1'),p(u,TM.tenth_coin,TM.tenth_coin+.5));
const kc=p(u,TM.tenth_coin+2,TM.tenth_coin+3.2); C9.setAttribute('transform','translate('+(114*kc).toFixed(1)+' '+(20*kc-60*Math.sin(Math.PI*kc)).toFixed(1)+')');
rise($('l2'),p(u,TM.flock,TM.flock+.5));
const nf=Math.round(Math.pow(36,p(u,TM.flock+.6,TM.flock+5))); FK.forEach((c,i)=>c.setAttribute('opacity',i<nf?1:0));

rise($('own'),p(u,TM.advisor,TM.advisor+.5)); rise($('adv'),p(u,TM.advisor+.8,TM.advisor+1.3)); rise($('stk'),p(u,TM.advisor+1.6,TM.advisor+2.1));
rise($('wg'),p(u,TM.wages,TM.wages+.5)); rise($('wtxt'),p(u,TM.wages+1,TM.wages+1.6));
FC.forEach((c,k)=>{const s=TM.wages+.6+k*.9, q=lin(u,s,s+1.2), tg=[1220+(k%3)*100,560-Math.floor(k/3)*24], P=[[180,330],[330,520],[880,380],tg];
  const sg=Math.min(2,Math.floor(q*3)), f=ease(q*3-sg), x=P[sg][0]+(P[sg+1][0]-P[sg][0])*f, y=P[sg][1]+(P[sg+1][1]-P[sg][1])*f;
  c.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+')'); c.setAttribute('opacity',q>0&&q<1?1:0); SK[k].setAttribute('opacity',u>=s+1.2?1:0)});

rise($('p4'),p(u,TM.strange_shop,TM.strange_shop+.5)); const d4=u>=TM.strange_shop+1?1:0;
DR.forEach((c,i)=>{const z=(t*.6+i/3)%1; c.setAttribute('transform','translate(0 '+(100*z).toFixed(1)+')'); c.setAttribute('opacity',((1-z)*d4).toFixed(2))});
rise($('p5'),p(u,TM.schemer,TM.schemer+.5)); const d5=u>=TM.schemer+1?1:0;
FE.forEach((c,i)=>{const z=(t*.5+i/4)%1; c.setAttribute('transform','translate('+(300*z).toFixed(1)+' '+(-70*z).toFixed(1)+')'); c.setAttribute('opacity',((1-z)*d5).toFixed(2))});
rise($('rl0'),p(u,TM.schemer+6.5,TM.schemer+7)); rise($('rl1'),p(u,TM.schemer+7,TM.schemer+7.5)); rise($('rl2'),p(u,TM.schemer+7.6,TM.schemer+8.2));

rise($('lft'),p(u,TM.full_bags,TM.full_bags+.5)); rise($('hom'),p(u,TM.full_bags+1,TM.full_bags+1.6));
rise($('scl'),p(u,TM.balance,TM.balance+.5));
const th=12*p(u,TM.balance+1,TM.balance+2.5)*Math.PI/180, bx=260*Math.cos(th), by=260*Math.sin(th), B=$('beam');
B.setAttribute('x1',(1110-bx).toFixed(1)); B.setAttribute('y1',(360+by).toFixed(1)); B.setAttribute('x2',(1110+bx).toFixed(1)); B.setAttribute('y2',(360-by).toFixed(1));
panL.setAttribute('transform','translate('+(1110-bx).toFixed(1)+' '+(360+by).toFixed(1)+')'); panR.setAttribute('transform','translate('+(1110+bx).toFixed(1)+' '+(360-by).toFixed(1)+')');
rise($('fin'),p(u,TM.balance+6.5,TM.balance+7.1));

rise($('qa'),p(u,TM.question,TM.question+.5)); rise($('qb'),p(u,TM.question+.6,TM.question+1.1)); rise($('qc'),p(u,TM.question+1.4,TM.question+1.9));
$('ck1').setAttribute('opacity',p(u,TM.question+3,TM.question+3.5)); $('ck2').setAttribute('opacity',p(u,TM.question+4.5,TM.question+5));
rise($('safe'),p(u,TM.question+6.5,TM.question+7.1)); LB.setAttribute('transform','translate(0 '+(6*Math.sin(t*2)).toFixed(1)+')');