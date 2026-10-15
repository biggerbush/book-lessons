$('tw').setAttribute('d',wv(1188,1432,430,592,8,t*2));
rise($('tsub'),p(u,TM.title_card,TM.title_card+.6));

rise($('who1'),p(u,TM.planner,TM.planner+.5)); rise($('brd1'),p(u,TM.planner,TM.planner+.5)); draw($('plan1'),p(u,TM.planner+.6,TM.planner+2.4));
const cs=TM.storm_cloud;
$('cloud1').setAttribute('transform','translate('+(80*(1-p(u,cs,cs+1))).toFixed(1)+' '+(4*Math.sin(t*2)).toFixed(1)+')'); $('cloud1').setAttribute('opacity',p(u,cs,cs+.6));
draw($('real1'),p(u,cs+.6,cs+3.4));
B1.forEach((b,i)=>{const a=cs+.8+i;b.setAttribute('opacity',p(u,a,a+.3))});
CH1.forEach((g,i)=>{const a=i<3?cs+.8+i:cs+5.8;rise(g,p(u,a,a+.4))});
rise($('fut1'),p(u,cs+6.2,cs+6.8));

rise($('need2'),p(u,TM.gap_bar,TM.gap_bar+.5)); rise($('have2'),p(u,TM.gap_bar+.4,TM.gap_bar+.9)); rise($('gap2'),p(u,TM.gap_bar+2.4,TM.gap_bar+2.9));
const HA=[0,1,2].map(i=>TM.cushion+1.2+i*1.4);
let E=120+1180*p(u,TM.gap_bar+.6,TM.gap_bar+2.8); HA.forEach(a=>E-=110*p(u,a+.45,a+.8));
$('hbar').setAttribute('width',Math.max(0,E-120).toFixed(1)); $('cush').setAttribute('width',Math.max(0,E-680).toFixed(1)); $('cush').setAttribute('opacity',p(u,TM.cushion,TM.cushion+.5));
$('brk2').setAttribute('d','M680 540v14H'+Math.max(680,E).toFixed(1)+'v-14'); rise($('room2'),p(u,TM.cushion,TM.cushion+.5));
H2.forEach((h,i)=>{const a=HA[i];h.setAttribute('cx',1250-110*i);h.setAttribute('cy',(230+220*p(u,a,a+.45)).toFixed(1));h.setAttribute('opacity',(u<a?0:1-p(u,a+.45,a+.9)).toFixed(2))});
rise($('game2'),p(u,TM.cushion+6.6,TM.cushion+7.2));

rise($('k0'),p(u,TM.piggy_bank,TM.piggy_bank+.5)); rise($('k1'),p(u,TM.low_debt,TM.low_debt+.5)); rise($('k2'),p(u,TM.calendar,TM.calendar+.5));
const cc=(t%1.6)/1.6; $('coin3').setAttribute('cy',(300+100*ease(Math.min(cc/.7,1))).toFixed(1)); $('coin3').setAttribute('opacity',(cc<.75?1:0)*p(u,TM.piggy_bank+.5,TM.piggy_bank+.8));
const bd=p(u,TM.low_debt+1.6,TM.low_debt+2.4), ih=260-120*bd; $('inc3').setAttribute('height',ih.toFixed(1)); $('inc3').setAttribute('y',(600-ih).toFixed(1)); rise($('bad3'),bd);
$('del3').setAttribute('x',(1178+64*p(u,TM.calendar+1.4,TM.calendar+2.2)).toFixed(1)); $('del3').setAttribute('class',u>=TM.calendar+1?'loss':'ink');

rise($('ax4'),p(u,TM.market_line,TM.market_line+.5)); draw($('mk4'),p(u,TM.market_line+.3,TM.market_line+4));
rise($('drops4'),p(u,TM.ticket,TM.ticket+.5)); rise($('tk4'),p(u,TM.ticket+.3,TM.ticket+.8)); rise($('fine4'),p(u,TM.ticket+1.5,TM.ticket+2));
$('strk4').setAttribute('x2',(1220+160*p(u,TM.ticket+2.2,TM.ticket+2.8)).toFixed(1)); rise($('bump4'),p(u,TM.ticket+7,TM.ticket+7.6));

const ta=TM.toll_booth;
rise($('road5'),p(u,ta,ta+.5)); rise($('star5w'),p(u,ta+.5,ta+1));
$('star5').setAttribute('transform','translate(1390 430) rotate('+(t*20%360).toFixed(1)+')');
$('car5').setAttribute('transform','translate('+(140+480*p(u,ta+.3,ta+2.6)+560*p(u,ta+5.2,ta+8)).toFixed(1)+' 0)');
$('arm5').setAttribute('transform','rotate('+(-80*p(u,ta+4.4,ta+5.2)).toFixed(1)+' 790 570)');
rise($('paid5'),p(u,ta+4.2,ta+4.7)); rise($('inv5'),p(u,TM.calm_investor,TM.calm_investor+.6));

rise($('p6a'),p(u,TM.two_paths,TM.two_paths+.5)); rise($('p6b'),p(u,TM.two_paths+.2,TM.two_paths+.7));
draw($('cv0'),p(u,TM.two_paths+.4,TM.two_paths+2.4)); draw($('cv1a'),p(u,TM.two_paths+.4,TM.two_paths+2.4));
const tf=p(u,TM.fragile_tower+.6,TM.fragile_tower+1.6);
$('tow6').setAttribute('transform','rotate('+(-28*tf).toFixed(1)+' 440 720)'); TB.forEach(b=>b.setAttribute('fill',tf>0?'var(--loss)':'var(--ink)'));
rise($('sold6'),p(u,TM.fragile_tower+.4,TM.fragile_tower+.9)); rise($('cap6a'),p(u,TM.fragile_tower+1,TM.fragile_tower+1.6));
draw($('cv1b'),p(u,TM.sturdy_house+.3,TM.sturdy_house+2.5)); rise($('house6'),p(u,TM.sturdy_house,TM.sturdy_house+.5)); rise($('cap6b'),p(u,TM.sturdy_house+1,TM.sturdy_house+1.6));

rise($('q7'),p(u,TM.checklist,TM.checklist+.5));
MO.forEach((m,i)=>{const a=TM.checklist+1.5+i*.5,h=118*p(u,a,a+.4);m.setAttribute('height',h.toFixed(1));m.setAttribute('y',(524-h).toFixed(1))});
const sn=TM.safety_net;
rise($('rope7'),p(u,sn,sn+.5)); $('walk7').setAttribute('transform','rotate('+(6*Math.sin(t*1.8)).toFixed(2)+' 1170 338)');
const sx=.35+.65*p(u,sn+1,sn+2.6); $('net7').setAttribute('transform','translate(1170 0) scale('+sx.toFixed(3)+' 1) translate(-1170 0)'); $('net7').setAttribute('opacity',p(u,sn+.6,sn+1));
rise($('netlab7'),p(u,sn+2.6,sn+3.1)); rise($('sur7'),p(u,sn+3.5,sn+4.1));

const qm=TM.question_mark;
rise($('qa'),p(u,qm,qm+.5)); rise($('qb'),p(u,qm+.4,qm+.9)); rise($('qc'),p(u,qm+.8,qm+1.3)); rise($('qd'),p(u,qm+1.2,qm+1.7));
rise($('cup8'),p(u,qm+1.6,qm+2.2)); $('qw').setAttribute('d',wv(1268,1432,660,772,6,t*2));