rise($('hero'),p(u,TM.fit_doctor,TM.fit_doctor+.7));
const by=230-22*Math.abs(Math.sin(t*1.6));
$('lift').setAttribute('transform','translate(0 '+fx(by-230)+')');
$('arms').setAttribute('d','M1272 455L1228 '+fx(by+4)+'M1388 455L1432 '+fx(by+4));
$('hHeart').setAttribute('opacity',p(u,TM.fit_doctor+2.5,TM.fit_doctor+3.2));
$('hHeart').setAttribute('stroke-dashoffset',fx(t*12));
rise($('heroL'),p(u,TM.fit_doctor+6.6,TM.fit_doctor+7.2));

rise($('card'),p(u,TM.attia,TM.attia+.5)); rise($('att'),p(u,TM.attia+.3,TM.attia+.8));
rows.forEach((r,i)=>{const a=TM.stopwatch+i*1.5;rise(r,p(u,a,a+.4))});
rise($('watch'),p(u,TM.stopwatch,TM.stopwatch+.5));
$('wHand').setAttribute('transform','rotate('+fx((t*120)%360)+' 800 570)');
rise($('cloud'),p(u,TM.storm_cloud,TM.storm_cloud+.6));
$('rain').setAttribute('stroke-dashoffset',fx(-(t*40)%52));
const hu=p(u,TM.storm_cloud+5.3,TM.storm_cloud+5.9);
rise($('hurt'),hu); $('bolt').setAttribute('opacity',fx(hu*(Math.sin(t*9)>-.3?1:.3)));
$('fam').setAttribute('transform','translate('+fx(hu*(18+3*Math.sin(t*14)))+' 0)');

rise($('house'),p(u,TM.family_home,TM.family_home+.5));
$('crack').setAttribute('opacity',p(u,TM.family_home+1,TM.family_home+1.4));
$('arr2').setAttribute('opacity',p(u,TM.clinic-.3,TM.clinic+.2));
rise($('clin'),p(u,TM.clinic,TM.clinic+.5));
WN.forEach((w,i)=>w.setAttribute('fill',u>=TM.clinic+.8+i*.5?'var(--gain)':'var(--line)'));
rise($('past'),p(u,TM.clinic+4.9,TM.clinic+5.5));
$('kid').setAttribute('opacity',fx(.6+.4*Math.sin(t*2)));

rise($('hg'),p(u,TM.hourglass,TM.hourglass+.5));
const sd=p(u,TM.hourglass,TM.empty_chair+4),ys=260+180*sd,yb=630-170*sd,dt=90*(ys-250)/190,db=90*(630-yb)/190;
$('sandT').setAttribute('points',fx(200+dt)+','+fx(ys)+' '+fx(400-dt)+','+fx(ys)+' 310,440 290,440');
$('sandB').setAttribute('points','200,630 400,630 '+fx(400-db)+','+fx(yb)+' '+fx(200+db)+','+fx(yb));
$('sandS').setAttribute('d','M300 440V'+fx(yb)); $('sandS').setAttribute('opacity',sd<1?1:0);
rise($('yrH'),p(u,TM.hourglass+.3,TM.hourglass+.8));
rise($('yrA'),p(u,TM.hourglass+3.7,TM.hourglass+4.2));
YR.forEach((r,i)=>{if(i<8){r.setAttribute('opacity',p(u,TM.hourglass+.3+i*.08,TM.hourglass+.6+i*.08));r.setAttribute('fill',u>=TM.hourglass+5.5?'var(--loss)':'var(--ink)')}
  else{const a=TM.hourglass+3.7+(i-8)*.4;r.setAttribute('opacity',p(u,a,a+.4))}});
rise($('lonely'),p(u,TM.empty_chair,TM.empty_chair+.6));
rise($('prize'),p(u,TM.empty_chair+1.5,TM.empty_chair+2.1));

rise($('roof'),p(u,TM.three_pillars,TM.three_pillars+.5));
[.6,2.5,4.5].forEach((d,i)=>{const a=TM.three_pillars+d;rise(PL[i][0],p(u,a,a+.5));rise($('lb'+i),p(u,a+.2,a+.7))});
const cr=p(u,TM.cracked_pillar+.8,TM.cracked_pillar+2);
crack.setAttribute('opacity',p(u,TM.cracked_pillar,TM.cracked_pillar+.4));
PL[2][1].setAttribute('stroke',u>=TM.cracked_pillar?'var(--loss)':'var(--ink)');
PL[2][2].setAttribute('transform','translate(0 '+fx(30*cr)+') rotate('+fx(6*cr)+' 1200 720)');
$('roofW').setAttribute('transform','rotate('+fx(2*cr)+' 260 330)');
rise($('lose'),p(u,TM.cracked_pillar+1.5,TM.cracked_pillar+2.1));

rise($('p5a'),p(u,TM.dumbbell,TM.dumbbell+.5));
$('bell').setAttribute('transform','translate(0 '+fx(-30*Math.abs(Math.sin(t*2)))+')');
rise($('p5b'),p(u,TM.therapist,TM.therapist+.5));
const ph=Math.sin(t*1.8)>0; $('bub0').setAttribute('opacity',ph?1:.25); $('bub1').setAttribute('opacity',ph?.25:1);
rise($('dbt'),p(u,TM.skill_cards,TM.skill_cards+.5));
CD.forEach((c,i)=>{const a=TM.skill_cards+.4+i*.6;rise(c[0],p(u,a,a+.4))});
const hl=u>=TM.skill_cards+3;
CD[1][1].setAttribute('fill',hl?'var(--gain)':'var(--stage)'); CD[1][1].setAttribute('stroke',hl?'var(--gain)':'var(--ink)'); CD[1][2].style.fill=hl?'var(--on-gain)':'';

rise($('pz'),p(u,TM.pause_button,TM.pause_button+.5));
const rp=(t%2)/2; $('ring').setAttribute('r',fx(120+30*rp)); $('ring').setAttribute('opacity',fx(1-rp));
rise($('angL'),p(u,TM.pause_button+2.5,TM.pause_button+3));
ST.forEach((s,i)=>{const a=TM.pause_button+3+i*1.4,on=u>=a+.4;rise(s[0],p(u,a,a+.4));
  s[1].setAttribute('fill',on?'var(--gain)':'var(--stage)'); s[1].setAttribute('stroke',on?'var(--gain)':'var(--ink)'); s[2].style.fill=on?'var(--on-gain)':''});
rise($('cons'),p(u,TM.pause_button+8.3,TM.pause_button+8.8));
DY.forEach((d,i)=>d.setAttribute('fill',u>=TM.pause_button+8.6+i*.18?'var(--gain)':'var(--line)'));
rise($('conn'),p(u,TM.connection,TM.connection+.6));

rise($('dr'),p(u,TM.open_door,TM.open_door+.5));
const op=p(u,TM.open_door+.5,TM.open_door+2),dw=240-180*op,ds=30*op;
$('leaf').setAttribute('points','160,280 '+fx(160+dw)+','+fx(280+ds)+' '+fx(160+dw)+','+fx(640-ds)+' 160,640');
HL.forEach((h,i)=>{const a=TM.helping_hand+i*.9;rise(h[0],p(u,a,a+.4));h[1].setAttribute('opacity',p(u,a,a+.4));h[1].setAttribute('stroke-dashoffset',fx(-t*30))});
rise($('early'),p(u,TM.helping_hand+5.8,TM.helping_hand+6.4));
CP.forEach((c,i)=>{const a=TM.helping_hand+6.2+i*.4;rise(c,p(u,a,a+.4))});

rise($('wk'),p(u,TM.mirror,TM.mirror+.5)); rise($('mir'),p(u,TM.mirror+.3,TM.mirror+.9));
$('old').setAttribute('opacity',fx(.75+.25*Math.sin(t*1.5)));
['qa','qb','qc','qd'].forEach((q,i)=>rise($(q),p(u,TM.mirror+4.6+i*.4,TM.mirror+5.1+i*.4)));