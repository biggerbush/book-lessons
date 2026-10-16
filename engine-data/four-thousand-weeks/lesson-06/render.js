const sh=cl(t*5,0,100);
rise($('snail'),p(t,TM.snail,TM.snail+.6));$('snail').setAttribute('transform','translate('+sh.toFixed(1)+' 0)');$('trail').setAttribute('d','M980 470H'+(1100+sh).toFixed(1));

rise($('sw1'),p(u,TM.stopwatch,TM.stopwatch+.5));$('swh').setAttribute('transform','rotate('+((t*300)%360).toFixed(1)+' 300 470)');
rise($('pl1'),p(u,TM.growing_plant,TM.growing_plant+.5));const gr=p(u,TM.growing_plant+.3,TM.growing_plant+5);
$('stem').setAttribute('d','M800 610V'+(600-200*gr).toFixed(1));rise($('lf1'),p(gr,.35,.55));rise($('lf2'),p(gr,.75,.95));
rise($('tp1'),p(u,TM.tense_person,TM.tense_person+.5));$('zz').setAttribute('transform','translate('+(3*Math.sin(t*23)).toFixed(1)+' '+(2*Math.cos(t*19)).toFixed(1)+')');

rise($('ph2'),p(u,TM.photographer,TM.photographer+.5));rise($('st2'),p(u,TM.bus_station,TM.bus_station+.5));
const lk=.15*p(u,TM.bus_station+.3,TM.bus_station+1.3)+.85*p(u,TM.shared_road,TM.shared_road+2);BL.forEach(l=>dr(l,lk));
rise($('rd2'),p(u,TM.shared_road+.5,TM.shared_road+1));BS.forEach((b,i)=>b.setAttribute('x',(600+((t*70+i*90)%820)).toFixed(1)));

YR.forEach((g,i)=>rise(g,p(u,TM.bus_stop+i*.4,TM.bus_stop+i*.4+.4)));rise($('art3'),p(u,TM.portfolio,TM.portfolio+.5));
const rk=p(u,TM.return_trip+.3,TM.return_trip+2.3);ret.setAttribute('stroke-dashoffset',(RL*(1-rk)).toFixed(1));
const rp=ret.getPointAtLength(RL*rk);$('rdot').setAttribute('cx',rp.x.toFixed(1));$('rdot').setAttribute('cy',rp.y.toFixed(1));$('rdot').setAttribute('opacity',u>=TM.return_trip+.3?1:0);
rise($('rlb'),p(u,TM.return_trip+1,TM.return_trip+1.5));rise($('lp3'),p(u,TM.loop_arrow,TM.loop_arrow+.5));$('lpr').setAttribute('transform','rotate('+((t*90)%360).toFixed(1)+' 1250 640)');

const s4=SC[4][0]/K;BR.forEach((b,i)=>{dr(b,p(u,TM.road_split+i*.2,TM.road_split+i*.2+1));b.setAttribute('stroke',i===0&&u>=TM.new_place?'var(--gain)':'var(--line)')});
rise($('flag4'),p(u,TM.new_place+.6,TM.new_place+1.1));
const m1=p(u,s4+.5,TM.road_split),m2=p(u,TM.road_split+.8,TM.new_place+.6);let bx=160+540*m1,by=560,ba=0;
if(m2>0){bx=700+600*m2;by=560-230*600/680*m2;ba=-18.7}$('bus4').setAttribute('transform','translate('+bx.toFixed(1)+' '+by.toFixed(1)+') rotate('+ba+')');

CD.forEach((g,i)=>rise(g,p(u,TM.copy_stack+i*.4,TM.copy_stack+i*.4+.4)));rise($('cpa'),p(u,TM.copy_stack+2.4,TM.copy_stack+3));
rise($('lr5'),p(u,TM.learner,TM.learner+.5));rise($('mr5'),p(u,TM.mirror,TM.mirror+.6));

rise($('rs6'),p(u,TM.researcher,TM.researcher+.5));rise($('cal6'),p(u,TM.calendar,TM.calendar+.4));
CE.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.calendar+.4+i*.22,TM.calendar+.6+i*.22)));
rise($('bn6'),p(u,TM.binge_writer,TM.binge_writer+.4));const sp=150*p(u,TM.binge_writer+.3,TM.binge_writer+.9);$('spike').setAttribute('y',(410-sp).toFixed(1));$('spike').setAttribute('height',sp.toFixed(1));
DT.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.binge_writer+1+i*.12,TM.binge_writer+1.2+i*.12)));rise($('stall'),p(u,TM.binge_writer+2.2,TM.binge_writer+2.7));
rise($('stp6'),p(u,TM.stop_sign,TM.stop_sign+.6));

rise($('pt7'),p(u,TM.painting,TM.painting+.6));rise($('ck7'),p(u,TM.clock_face,TM.clock_face+.5));
const ck=p(u,TM.clock_face,TM.clock_face+9);$('mh').setAttribute('transform','rotate('+(ck*2160).toFixed(1)+' 1120 440)');$('hh').setAttribute('transform','rotate('+(ck*180).toFixed(1)+' 1120 440)');
DE.forEach((d,i)=>{const a=TM.hidden_detail+.4+i*.7;d[0].setAttribute('opacity',p(u,a,a+.6));d[1].setAttribute('r',(20+4*Math.sin(t*3+i)).toFixed(1))});
rise($('hd7'),p(u,TM.hidden_detail,TM.hidden_detail+.6));

rise($('qa'),p(u,TM.open_road,TM.open_road+.5));rise($('qb'),p(u,TM.open_road+.4,TM.open_road+.9));rise($('qc'),p(u,TM.open_road+.8,TM.open_road+1.3));
rise($('qd'),p(u,TM.open_road+5,TM.open_road+5.6));$('bus8').setAttribute('x',(143+1220*p(u,TM.open_road,TM.open_road+12)).toFixed(1));