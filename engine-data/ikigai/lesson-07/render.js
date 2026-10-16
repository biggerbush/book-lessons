const bk=p(u,TM.bamboo+.6,TM.bamboo+1.6)-p(u,TM.bamboo+2.4,TM.bamboo+3.6),bx=60*bk+5*Math.sin(t*1.4),tx=1340+bx,ty=210+12*bk;
$('stalk').setAttribute('d','M1340 560Q1340 380 '+tx.toFixed(1)+' '+ty.toFixed(1));
$('stalk2').setAttribute('d','M1400 560Q1400 420 '+(1400+bx*.8).toFixed(1)+' 320');
$('leaves').setAttribute('transform','translate('+tx.toFixed(1)+' '+ty.toFixed(1)+') rotate('+(bx*.5).toFixed(1)+')');
$('wind').setAttribute('opacity',(p(u,TM.bamboo,TM.bamboo+.4)*(1-p(u,TM.bamboo+2.4,TM.bamboo+3))).toFixed(2));
$('wind').setAttribute('transform','translate('+((t*90)%40).toFixed(1)+' 0)');
rise($('stand'),p(u,TM.bamboo+3.8,TM.bamboo+4.3));

rise($('storm'),p(u,TM.storm_cloud,TM.storm_cloud+.5));
RN.forEach((r,i)=>{const o=(t*260+i*57)%150;r.setAttribute('transform','translate('+(225+i*50)+' '+(380+o).toFixed(1)+')');r.setAttribute('opacity',(1-o/150).toFixed(2))});
rise($('cmp'),p(u,TM.compass,TM.compass+.5));
$('needle').setAttribute('transform','rotate('+(35*Math.sin(t*6)*(1-p(u,TM.compass+.8,TM.compass+3))).toFixed(1)+' 800 520)');
rise($('ctl'),p(u,TM.compass+5.8,TM.compass+6.3));

rise($('sen'),p(u,TM.seneca,TM.seneca+.5));
rise($('bub'),p(u,TM.empty_chair,TM.empty_chair+.5));
[0,1,2].forEach(i=>rise($('ic'+i),p(u,TM.empty_chair+.3+i*.4,TM.empty_chair+.7+i*.4)));
const lo=p(u,TM.empty_chair+2.5,TM.empty_chair+3.5)*(1-p(u,TM.warm_heart,TM.warm_heart+1));
$('icw').setAttribute('opacity',(1-.75*lo).toFixed(2));$('chair').setAttribute('opacity',lo.toFixed(2));
rise($('wh'),p(u,TM.warm_heart,TM.warm_heart+.5));
$('hrt').setAttribute('transform','translate(1260 420) scale('+(1+.06*Math.abs(Math.sin(t*3))).toFixed(3)+')');

rise($('cup'),p(u,TM.teacup,TM.teacup+.5));drw($('crk'),p(u,TM.teacup+1,TM.teacup+2.5));
rise($('shr'),p(u,TM.shrine,TM.shrine+.5));
$('cyc').setAttribute('transform','rotate('+(360*p(u,TM.shrine+.5,TM.shrine+3)).toFixed(1)+' 1120 450)');
$('yr').textContent='ISE GRAND SHRINE · REBUILT EVERY '+Math.round(20*p(u,TM.shrine+.5,TM.shrine+2))+' YEARS';
rise($('nl'),p(u,TM.shrine+5.7,TM.shrine+6.3));rise($('ub'),p(u,TM.shrine+9.1,TM.shrine+9.7));

DT.forEach((d,i)=>d.setAttribute('cx',(120+((i*113+t*60)%1360)).toFixed(1)));
rise($('now'),p(u,TM.tea_ceremony,TM.tea_ceremony+.5));
rise($('tbl'),p(u,TM.friends_table,TM.friends_table+.5));
const ph=p(u,TM.friends_table+1.5,TM.friends_table+2.5),P=$('phone');
P.setAttribute('x',(1170-120*ph).toFixed(1));P.setAttribute('y',(470+96*ph).toFixed(1));P.setAttribute('width',(50+10*ph).toFixed(1));P.setAttribute('height',(92-80*ph).toFixed(1));
P.style.fill=ph>.5?'var(--muted)':'var(--loss)';
$('halo').setAttribute('opacity',p(u,TM.friends_table+4.6,TM.friends_table+5.4).toFixed(2));
rise($('qs'),p(u,TM.friends_table+4.6,TM.friends_table+5.2));

rise($('hyd'),p(u,TM.hydra,TM.hydra+.5));
const cu=p(u,TM.hydra+2,TM.hydra+2.6);$('mid').setAttribute('opacity',(1-cu).toFixed(2));
$('cut').setAttribute('opacity',(cu*(1-p(u,TM.hydra+4,TM.hydra+4.5))).toFixed(2));
rise($('new'),p(u,TM.hydra+3.5,TM.hydra+4.1));rise($('strg'),p(u,TM.hydra+8.6,TM.hydra+9.2));
rise($('plat'),p(u,TM.several_paths,TM.several_paths+.5));
PG.forEach((g,i)=>rise(g,p(u,TM.several_paths+.4+i*.6,TM.several_paths+.8+i*.6)));
const fl=p(u,TM.several_paths+5,TM.several_paths+6);
PR[0].setAttribute('transform','rotate('+(-84*fl).toFixed(1)+' 920 680)');PR[0].setAttribute('opacity',(1-.6*fl).toFixed(2));PR[0].setAttribute('class',fl>0?'loss':'gain');
rise($('one'),p(u,TM.several_paths+5.5,TM.several_paths+6));

rise($('core'),p(u,TM.ten_rules,TM.ten_rules+.5));
CP.forEach((g,i)=>{const a=i<3?TM.garden+i*1.6:TM.smile+(i-3)*1.1;rise(g,p(u,a,a+.4))});
const fo=p(u,TM.smile+7.4,TM.smile+8);
$('coreC').style.fill=fo>.5?'var(--gain)':'var(--stage)';$('c10').setAttribute('opacity',(1-fo).toFixed(2));$('cF').setAttribute('opacity',fo.toFixed(2));

rise($('room'),p(u,TM.sticky_note,TM.sticky_note+.5));
rise($('big'),p(u,TM.bedside,TM.bedside+.5));$('conn').setAttribute('opacity',p(u,TM.bedside,TM.bedside+.5).toFixed(2));
SCR.forEach((s,i)=>drw(s,p(u,TM.bedside+.6+i*.7,TM.bedside+1.2+i*.7)));
drw($('crk2'),p(u,TM.bedside+5,TM.bedside+6));rise($('kg'),p(u,TM.bedside+5.6,TM.bedside+6.2));

const s8=SC[8][0]/K;
rise($('qa'),p(u,s8+.5,s8+1));rise($('qb'),p(u,s8+.9,s8+1.4));rise($('qc'),p(u,s8+1.3,s8+1.8));rise($('qbowl'),p(u,s8+1.8,s8+2.3));