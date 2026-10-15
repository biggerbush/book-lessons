const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
dr($('crack'),p(t,TM.broken_plan+.3,TM.broken_plan+1.3));
R('cyc',TM.broken_plan+4);R('rt0',TM.broken_plan+4.4);
$('cycr').setAttribute('transform','rotate('+(t*30%360).toFixed(1)+' 1300 410)');

R('paths1',TM.two_paths);dr($('br1'),p(u,TM.two_paths+1.5,TM.two_paths+3));R('brh1',TM.two_paths+2.8,.3);
$('dot1').setAttribute('cx',(140+1120*p(u,TM.two_paths,TM.two_paths+4)).toFixed(1));
R('wk1',TM.workplace);B1.forEach((b,i)=>rise(b,p(u,TM.workplace+1+i*.5,TM.workplace+1.4+i*.5)));
R('mr1',TM.mirror);$('q1').setAttribute('y',(660+6*Math.sin(t*3)).toFixed(1));

R('hosp2',TM.hospital);R('exp2',TM.hospital+2);R('ch2',TM.error_chart);
const ha=140*p(u,TM.error_chart+.4,TM.error_chart+1.6),hb=360*p(u,TM.error_chart+.8,TM.error_chart+2.2);
$('b2a').setAttribute('y',720-ha);$('b2a').setAttribute('height',ha);$('b2b').setAttribute('y',720-hb);$('b2b').setAttribute('height',hb);
R('bk2',TM.error_chart+3.8);

R('p3a',TM.nurse);R('nb3',TM.nurse+1);
OK3.forEach((c,i)=>{const on=u>=TM.nurse+5+i*.3;c.setAttribute('fill',on?'var(--gain)':'var(--stage)');c.setAttribute('stroke',on?'var(--gain)':'var(--line)')});
R('p3b',TM.fear_bubble);R('fb3',TM.fear_bubble+.6);
$('rug3').setAttribute('width',(520*p(u,TM.fear_bubble+2,TM.fear_bubble+3.5)).toFixed(1));
R('sh3',TM.shield);

R('cam4',TM.leader);$('rec4').setAttribute('opacity',Math.sin(t*5)>0?1:.2);R('ld4',TM.leader+1);
R('lp4',TM.laptop);CM4.forEach((g,i)=>rise(g,p(u,TM.laptop+.6+i*.4,TM.laptop+1+i*.4)));
R('em4',TM.raised_hand);AR4.forEach((a,i)=>rise(a,p(u,TM.raised_hand+1+i*.6,TM.raised_hand+1.4+i*.6)));
R('op4',TM.raised_hand+3.5);

R('sign5',TM.road_sign);R('ch5',TM.childhood);R('hole5',TM.deep_hole);R('esc5',TM.deep_hole+1);
const dd=40+260*p(u,TM.deep_hole+.5,TM.deep_hole+5.5),ph=dd*.4;
$('hl5').setAttribute('height',dd.toFixed(1));
$('dg5').setAttribute('transform','translate(1160 '+(420+dd-96+4*Math.sin(t*6)).toFixed(1)+')');
$('pl5').setAttribute('points','1320,420 1400,'+(420-ph).toFixed(1)+' 1480,420');

R('cal6',TM.calendar);HL6.forEach((e,i)=>{const on=u>=TM.calendar+1.2+i*.6;e.setAttribute('fill',on?'var(--gain)':'none');e.setAttribute('stroke',on?'var(--gain)':'var(--line)')});
R('st6',TM.stethoscope);$('cp6').setAttribute('r',(26+3*Math.pow(Math.abs(Math.sin(t*3)),6)).toFixed(1));
R('spl6',TM.signpost);R('spr6',TM.signpost+1);

R('qc7',TM.question_card);R('qt7',TM.question_card+.6);R('cp7',TM.compass);R('ct7',TM.compass+1.5);
const na=p(u,TM.compass,TM.compass+4);$('nd7').setAttribute('transform','rotate('+((1-na)*70*Math.sin(na*14)+3*Math.sin(t*2)).toFixed(1)+' 790 360)');
R('tb7',TM.team_table);R('tt7',TM.team_table+1);R('ty7',TM.team_table+3.5);
TB7[1].childNodes.forEach(n=>n.setAttribute('class',u>=TM.team_table+3.5?'gain':'ink'));

R('qa8',TM.pen);R('cal8',TM.pen);
const ck=p(u,TM.pen+.5,TM.pen+1.7),sl=ck*127.3;dr($('ck8'),ck);
let px,py;if(sl<42.4){px=1300+30*sl/42.4;py=750+30*sl/42.4}else{const f=(sl-42.4)/84.9;px=1330+60*f;py=780-60*f}
$('pen8').setAttribute('transform','translate('+px.toFixed(1)+' '+py.toFixed(1)+')');
R('qb8',TM.pen+3.4);R('qc8',TM.pen+3.9);R('qm8',TM.pen+4.6);