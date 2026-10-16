const k0=1-p(u,TM.title_star+2.8,TM.title_star+3.6);
$('star0').setAttribute('opacity',(p(u,TM.title_star,TM.title_star+.6)*k0).toFixed(2));
$('star0').setAttribute('transform','translate(1300 '+(300+4*Math.sin(t*2)).toFixed(1)+') scale('+(.4+.6*k0).toFixed(3)+') rotate('+((t*15)%360).toFixed(1)+')');
cls(row0[2],k0>.5?'gain':'ink');

rise($('jim'),p(u,TM.jimmy,TM.jimmy+.5));
$('bulb').setAttribute('opacity',(p(u,TM.jimmy+1,TM.jimmy+1.5)*(.75+.25*Math.sin(t*6))).toFixed(2));
rise($('deck'),p(u,TM.pitch_deck,TM.pitch_deck+.5));
$('chart').style.strokeDashoffset=1-p(u,TM.pitch_deck+.5,TM.pitch_deck+2);
rise($('work'),p(u,TM.empty_office,TM.empty_office+.5));
const dg=p(u,TM.empty_office+5,TM.empty_office+5.6);rise($('dest'),dg);
$('halo').setAttribute('opacity',dg);$('halo').setAttribute('r',(140+6*Math.sin(t*3)).toFixed(1));

rise($('tro'),p(u,TM.trophy,TM.trophy+.5));
rise($('mir'),p(u,TM.mirror,TM.mirror+.5));
rise($('dc'),p(u,TM.mirror+2.5,TM.mirror+3));

rise($('f0'),p(u,TM.crown,TM.crown+.5));
rise($('f1'),p(u,TM.raincloud,TM.raincloud+.5));
const sw=p(u,TM.seesaw,TM.seesaw+.5);rise($('plank'),sw);rise($('ful'),sw);
$('tilt').setAttribute('transform','rotate('+(7*Math.sin(t*1.2)*p(u,TM.seesaw,TM.seesaw+1)).toFixed(2)+' 800 560)');
rise($('lbA'),p(u,TM.seesaw+.5,TM.seesaw+1));rise($('lbB'),p(u,TM.seesaw+3.5,TM.seesaw+4));
rise($('both'),p(u,TM.seesaw+7.8,TM.seesaw+8.4));

rise($('vb'),p(u,TM.victim_badge,TM.victim_badge+.5));
const ex=p(u,TM.victim_badge+4.6,TM.victim_badge+5.1);rise($('exp'),ex);rise($('ex2'),ex);
AR.forEach((a,i)=>a.setAttribute('transform','translate('+(60*Math.sin(((t*.8+i*.3)%1)*Math.PI)).toFixed(1)+' 0)'));
CR.forEach((g,i)=>rise(g,p(u,TM.crowd+i*.08,TM.crowd+i*.08+.4)));
rise($('crl'),p(u,TM.crowd+1.2,TM.crowd+1.7));
$('bub').setAttribute('opacity',(1-.85*p(u,TM.crowd+.5,TM.crowd+2)).toFixed(2));

rise($('ph'),p(u,TM.phone_screen,TM.phone_screen+.5));
CD.forEach((g,i)=>{const a=TM.phone_screen+1+i*.9;rise(g,p(u,a,a+.4))});
rise($('rul'),p(u,TM.ruler,TM.ruler+.5));
rise($('spt'),p(u,TM.spotlight,TM.spotlight+.5));
$('cone').setAttribute('fill-opacity',(.22+.06*Math.sin(t*4)).toFixed(2));
$('spP').setAttribute('transform','translate('+(3*Math.sin(t*23)).toFixed(1)+' 0)');
rise($('tyr'),p(u,TM.spotlight+5.8,TM.spotlight+6.4));

$('bc').style.strokeDashoffset=1-p(u,TM.bell_curve,TM.bell_curve+1.5);
rise($('avg'),p(u,TM.bell_curve+1.2,TM.bell_curve+1.7));
rise($('wtg'),p(u,TM.bell_curve+2.5,TM.bell_curve+3));
const L=p(u,TM.weight_lifted,TM.weight_lifted+1.4);
$('wt').setAttribute('transform','translate(0 '+(-200*L).toFixed(1)+')');$('wt').setAttribute('opacity',(1-.85*L).toFixed(2));
cls(LF,L>.5?'gain':'ink');rise($('np'),p(u,TM.weight_lifted+1,TM.weight_lifted+1.5));
const cx=520+280*p(u,TM.workbench,TM.workbench+2.5);
$('climb').setAttribute('cx',cx.toFixed(1));$('climb').setAttribute('cy',bcY(cx).toFixed(1));$('climb').setAttribute('opacity',u>=TM.workbench?1:0);
rise($('exl'),p(u,TM.workbench+2,TM.workbench+2.5));rise($('gr'),p(u,TM.workbench+1,TM.workbench+1.6));

rise($('scl'),p(u,TM.scale,TM.scale+.5));
$('beam').setAttribute('transform','rotate('+(10*p(u,TM.scale+1,TM.scale+2)).toFixed(2)+' 460 300)');
rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
BR.forEach((b,i)=>{const a=TM.notebook+1.5+i*.8;b.setAttribute('width',(26+(60+50*i)*p(u,a,a+.8)).toFixed(1))});
rise($('dr'),p(u,TM.open_door,TM.open_door+.4));
$('stem').style.strokeDashoffset=1-p(u,TM.open_door+.3,TM.open_door+1.5);
[.7,1.1,1.5].forEach((d,i)=>rise($('lf'+i),p(u,TM.open_door+d,TM.open_door+d+.4)));
$('lf2').setAttribute('transform','rotate('+(3*Math.sin(t*1.6)).toFixed(2)+' 1350 296)');
rise($('hon'),p(u,TM.open_door+.8,TM.open_door+1.4));

rise($('qa'),p(u,TM.question,TM.question+.5));rise($('qb'),p(u,TM.question+.4,TM.question+.9));rise($('qc'),p(u,TM.question+.8,TM.question+1.3));
rise($('stairs'),p(u,TM.question+1.2,TM.question+1.7));
rise($('qd'),p(u,TM.question+6.6,TM.question+7.2));
const sc=3*p(u,TM.question+6.6,TM.question+9),si=Math.floor(Math.min(sc,2.999)),sf=sc-si;
$('clim').setAttribute('cx',(1137+75*sc).toFixed(1));
$('clim').setAttribute('cy',(758-35*(si+ease(sf))-30*Math.sin(Math.PI*sf)).toFixed(1));
$('clim').setAttribute('opacity',p(u,TM.question+1.2,TM.question+1.7));