const mt=p(u,TM.cockpit,TM.cockpit+8);$('mtn').setAttribute('transform','translate(1190 480) scale('+(.6+.4*mt).toFixed(3)+') translate(-1190 -480)');
$('mtn').setAttribute('opacity',u>=TM.cockpit+6.2?(.7+.3*Math.sin(t*5)).toFixed(2):1);
rise($('pilots'),p(u,TM.cockpit,TM.cockpit+.6));rise($('hint0'),p(u,TM.cockpit+2.5,TM.cockpit+3));

const k=.85*p(u,TM.plane,TM.tired_crew+3),q=1-k,bx=q*q*160+2*q*k*900+k*k*1360,by=q*q*300+2*q*k*240+k*k*460,dx=q*740+k*460,dy=-q*60+k*220;
P1.setAttribute('transform','translate('+bx.toFixed(1)+' '+by.toFixed(1)+') rotate('+(Math.atan2(dy,dx)*57.3).toFixed(1)+')');
rise($('pl1'),p(u,TM.plane,TM.plane+.5));
ER.forEach((e,i)=>{const a=TM.error_chain+i*.6;rise(e[0],p(u,a,a+.4));const on=u>=TM.tired_crew+i*.7,two=on&&e[3][1]!=='';
 e[1].textContent=on?e[3][0]:'SMALL ERROR';e[2].textContent=two?e[3][1]:'';e[1].setAttribute('y',two?574:588)});
rise($('boom'),p(u,TM.tired_crew+2.6,TM.tired_crew+3.1));

rise($('isl'),p(u,TM.guam_island,TM.guam_island+.5));rise($('pl2'),p(u,TM.guam_island+.3,TM.guam_island+.8));
const g2=p(u,TM.guam_island+.3,TM.guam_island+6);P2.setAttribute('transform','translate('+(180+260*g2).toFixed(1)+' '+(260+240*g2).toFixed(1)+') rotate(35) scale(.6)');
rise($('cld'),p(u,TM.rain_cloud,TM.rain_cloud+.5));$('rain').setAttribute('opacity',p(u,TM.rain_cloud+.3,TM.rain_cloud+.9));
RN.forEach((l,i)=>{const x=395+i*16,y=385+((t*260+i*47)%150);l.setAttribute('d','M'+x+' '+y.toFixed(1)+'l-6 22')});
rise($('cap'),p(u,TM.rain_cloud+1.8,TM.rain_cloud+2.3));rise($('fo'),p(u,TM.first_officer,TM.first_officer+.5));rise($('fe'),p(u,TM.first_officer+.6,TM.first_officer+1.1));
rise($('hb0'),p(u,TM.first_officer+2.5,TM.first_officer+3));rise($('hb1'),p(u,TM.first_officer+3.3,TM.first_officer+3.8));
rise($('unsaid'),p(u,TM.first_officer+6.5,TM.first_officer+7.1));

rise($('spk'),p(u,TM.speech_bubble,TM.speech_bubble+.5));rise($('bA'),p(u,TM.speech_bubble+.3,TM.speech_bubble+.8));rise($('bB'),p(u,TM.speech_bubble+2.5,TM.speech_bubble+3));
rise($('rails'),p(u,TM.ladder,TM.ladder+.5));RG.forEach((r,i)=>{const a=TM.ladder+.3+i*.3;r.setAttribute('opacity',p(u,a,a+.3))});
rise($('lblT'),p(u,TM.ladder+.6,TM.ladder+1.1));rise($('lblB'),p(u,TM.ladder+2,TM.ladder+2.5));
RG[5].setAttribute('stroke-width',u>=TM.ladder+7?(4+3*Math.abs(Math.sin(t*4))).toFixed(1):4);rise($('miss'),p(u,TM.ladder+7,TM.ladder+7.6));

rise($('pd'),p(u,TM.scale,TM.scale+.5));$('pdm').setAttribute('cx',(800+560*Math.sin(t*.7)).toFixed(1));
rise($('def'),p(u,TM.scale+4.9,TM.scale+5.4));rise($('lowp'),p(u,TM.scale+5.4,TM.scale+5.9));
rise($('hip'),p(u,TM.boss_desk,TM.boss_desk+.5));rise($('nochal'),p(u,TM.boss_desk+1.2,TM.boss_desk+1.7));rise($('chal'),p(u,TM.boss_desk+2,TM.boss_desk+2.6));

rise($('gauge'),p(u,TM.fuel_gauge,TM.fuel_gauge+.5));
const fa=Math.PI*.97*p(u,TM.fuel_gauge+.5,TM.fuel_gauge+4.5);$('needle').setAttribute('x2',(400+170*Math.cos(fa)).toFixed(1));$('needle').setAttribute('y2',(540-170*Math.sin(fa)).toFixed(1));
rise($('cop'),p(u,TM.radio,TM.radio+.5));rise($('tower'),p(u,TM.radio+.3,TM.radio+.8));rise($('em'),p(u,TM.radio+1.5,TM.radio+2));
const rd=p(u,TM.radio+.6,TM.radio+1.2);WV.forEach((w,i)=>{const ph=(t*90+i*100)%400,x=890+ph;w.setAttribute('d','M'+x.toFixed(1)+' 460Q'+(x+26).toFixed(1)+' 500 '+x.toFixed(1)+' 540');w.setAttribute('opacity',(rd*(1-ph/400)*.9).toFixed(2))});
rise($('muff'),p(u,TM.radio+5,TM.radio+5.6));

rise($('c1'),p(u,TM.airline_logo,TM.airline_logo+.5));rise($('c2'),p(u,TM.english_book,TM.english_book+.5));rise($('pil'),p(u,TM.airline_logo+1.5,TM.airline_logo+2));
const eq=p(u,TM.english_book+6.2,TM.english_book+7.4),hc=160-90*eq,hj=20+50*eq;
$('blkC').setAttribute('y',(780-hc).toFixed(1));$('blkC').setAttribute('height',hc.toFixed(1));$('blkJ').setAttribute('y',(780-hj).toFixed(1));$('blkJ').setAttribute('height',hj.toFixed(1));
CG.setAttribute('transform','translate(560 '+(654-hc).toFixed(1)+')');JG.setAttribute('transform','translate(1040 '+(654-hj).toFixed(1)+')');
rise($('eqf'),p(u,TM.english_book+7.2,TM.english_book+7.7));rise(AR,p(u,TM.raised_hand,TM.raised_hand+.5));rise($('spk6'),p(u,TM.raised_hand+1,TM.raised_hand+1.5));

rise($('badge'),p(u,TM.safety_badge,TM.safety_badge+.5));rise($('team'),p(u,TM.team_circle,TM.team_circle+.5));
TP.forEach((c,i)=>c[0].setAttribute('cy',(c[1]+5*Math.sin(t*2+i)).toFixed(1)));
$('tc').setAttribute('stroke',u>=TM.team_circle+3.5?'var(--gain)':'var(--line)');rise($('seeit'),p(u,TM.team_circle+3.5,TM.team_circle+4));
rise($('clr'),p(u,TM.clear_voice,TM.clear_voice+.5));rise($('habit'),p(u,TM.clear_voice+4.1,TM.clear_voice+4.7));

const S8=SC[8][0]/K;rise($('q0'),p(u,S8+.3,S8+.8));rise($('hq1'),p(u,S8+.8,S8+1.3));
rise($('qa'),p(u,S8+4.5,S8+5));rise($('qb'),p(u,S8+4.9,S8+5.4));rise($('qc'),p(u,S8+5.3,S8+5.8));rise($('hq2'),p(u,S8+5.8,S8+6.3));rise($('ql'),p(u,S8+6.5,S8+7));