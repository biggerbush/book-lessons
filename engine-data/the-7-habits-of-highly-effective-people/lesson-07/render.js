rise($('saw0'),p(u,TM.blunt_saw,TM.blunt_saw+.5)); $('saw0').setAttribute('transform','translate('+(10*Math.sin(t*3)).toFixed(1)+' 0)');
$('glint').setAttribute('cx',(1068+(t*120)%312).toFixed(1));
rise($('pp0'),p(u,TM.two_people,TM.two_people+.5)); rise($('bub0'),p(u,TM.two_people+.8,TM.two_people+1.3)); rise($('plus0'),p(u,TM.two_people+1.6,TM.two_people+2.1));

rise($('brd'),p(u,TM.plank_pair,TM.plank_pair+.5)); rise($('bolts'),p(u,TM.plank_pair+1,TM.plank_pair+1.5));
W1.forEach((w,i)=>{const k=p(u,TM.plank_pair+1.8+i*.6,TM.plank_pair+2.3+i*.6);w.setAttribute('opacity',k);w.setAttribute('transform','translate(0 '+(-60*(1-k)).toFixed(1)+')')});
rise($('syn1'),p(u,TM.equation-6.2,TM.equation-5.6));
for(let i=0;i<5;i++)rise($('eq'+i),p(u,TM.equation+i*.35,TM.equation+i*.35+.4));
rise($('more1'),p(u,TM.equation+2.5,TM.equation+3));

rise($('row2'),p(u,TM.same_heads,TM.same_heads+.5));
const k2=p(u,TM.same_heads+1.5,TM.same_heads+2.5); ORIG.forEach(o=>o.setAttribute('opacity',1-k2)); SAME.forEach(o=>o.setAttribute('opacity',k2));
rise($('x2'),p(u,TM.blind_spot-2.6,TM.blind_spot-2));
rise($('see2'),p(u,TM.blind_spot,TM.blind_spot+.5)); rise($('idea2'),p(u,TM.blind_spot+1.8,TM.blind_spot+2.3));
const sc2=1+.08*Math.sin(t*3); star2.setAttribute('transform','translate(1140 500) scale('+sc2.toFixed(3)+') translate(-1140 -500)');

rise($('cp3'),p(u,TM.couple,TM.couple+.5)); rise($('lake3'),p(u,TM.couple+1,TM.couple+1.5));
rise($('cal3'),p(u,TM.calendar,TM.calendar+.5)); rise($('rope3'),p(u,TM.tug_of_war,TM.tug_of_war+.5));
$('knot3').setAttribute('cx',(800+70*Math.sin(t*2.2)).toFixed(1)); rise($('lbl3'),p(u,TM.tug_of_war+1.5,TM.tug_of_war+2));

rise($('side4'),p(u,TM.lightbulb,TM.lightbulb+.5)); rise($('bulb4'),p(u,TM.lightbulb+.6,TM.lightbulb+1.1));
rise($('trust4'),p(u,TM.path_fork-4.9,TM.path_fork-4.3));
const k4=p(u,TM.path_fork,TM.path_fork+1); $('midP').setAttribute('stroke-dashoffset',(280*(1-k4)).toFixed(1)); $('midP').setAttribute('opacity',k4>0?1:0);
rise($('arr4'),p(u,TM.path_fork+.8,TM.path_fork+1.3));
const lit=p(u,TM.path_fork+1,TM.path_fork+1.5); $('bulbC').setAttribute('fill',lit>.5?'var(--gain)':'var(--stage)'); $('q4').setAttribute('opacity',1-lit); $('ray4').setAttribute('opacity',lit);

rise($('wc5'),p(u,TM.woodcutter,TM.woodcutter+.5));
const dx=36*Math.sin(t*5); $('saw5').setAttribute('transform','translate('+dx.toFixed(1)+' 0)'); $('arm5').setAttribute('d','M476 716L'+(580+dx).toFixed(1)+' 707');
$('tth5').setAttribute('d',u>=TM.sweat_drops?T5d:T5s);
rise($('sw5'),p(u,TM.sweat_drops,TM.sweat_drops+.4)); DR.forEach((d,i)=>d.setAttribute('transform','translate(0 '+((t*30+i*8)%24).toFixed(1)+')'));
$('dull5').setAttribute('opacity',p(u,TM.sweat_drops+.6,TM.sweat_drops+1.1).toFixed(3));
rise($('pb5'),p(u,TM.passerby,TM.passerby+.5)); rise($('busy5'),p(u,TM.passerby+3.5,TM.passerby+4));

[TM.body_icon,TM.book_icon,TM.heart_compass,TM.heart_compass+3.5].forEach((a,i)=>{rise(cards6[i],p(u,a,a+.5));seg6[i].setAttribute('stroke',u>=a+.6?'var(--gain)':'var(--line)')});

rise($('clk7'),p(u,TM.clock_hour,TM.clock_hour+.5)); rise($('lab7'),p(u,TM.clock_hour+1,TM.clock_hour+1.5));
const k7=p(u,TM.clock_hour+.6,TM.clock_hour+2.4),a7=k7*Math.PI/6;
$('wedge7').setAttribute('d','M360 450V300A150 150 0 0 1 '+(360+150*Math.sin(a7)).toFixed(1)+' '+(450-150*Math.cos(a7)).toFixed(1)+'Z');
$('mh7').setAttribute('transform','rotate('+(360*k7).toFixed(1)+' 360 450)'); $('hh7').setAttribute('transform','rotate('+(30*k7).toFixed(1)+' 360 450)');
const sp0=p(u,TM.spiral,TM.spiral+.5); rise($('spb7'),sp0); rise($('spf7'),sp0); $('dots7').setAttribute('opacity',sp0);
const g7=p(u,TM.spiral+.3,TM.spiral+5.5), n7=u>=TM.spiral+.3?hidx(HL[HN]*g7):0;
GR7.forEach(r=>r[1].setAttribute('points',hpts(r[0],n7)));
$('tip7').setAttribute('cx',HP[n7][0].toFixed(1)); $('tip7').setAttribute('cy',HP[n7][1].toFixed(1)); $('tip7').setAttribute('opacity',sp0);
D7.forEach(d=>d[1].setAttribute('fill',n7>=d[0]?'var(--gain)':'var(--stage)'));
rise($('arr7'),p(u,TM.spiral+5.3,TM.spiral+5.8));
rise($('final7'),p(u,TM.spiral+6.6,TM.spiral+7.2));

const S8=SC[8][0]/K;
rise($('ch0'),p(u,S8+.5,S8+1)); rise($('ch1'),p(u,S8+3.5,S8+4)); rise($('venn8'),p(u,S8+1,S8+1.6));
rise($('qa'),p(u,S8+8,S8+8.5)); rise($('qb'),p(u,S8+8.4,S8+8.9)); rise($('ql8'),p(u,S8+9,S8+9.5));