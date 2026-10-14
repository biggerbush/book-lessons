const k0=p(t,.2,2);$('map').setAttribute('transform','translate(0 '+(-40*k0+5*Math.sin(t*1.5)).toFixed(1)+')');
CH.forEach((c,i)=>rise(c[0],p(u,TM.bet_chips+i*.35,TM.bet_chips+i*.35+.4)));
const rk=u>=TM.bet_chips+6.2;CH[3][2].setAttribute('fill',rk?'var(--loss)':'var(--stage)');CH[3][1].setAttribute('transform','translate('+(rk?(6*Math.sin(t*9)).toFixed(1):0)+' 0)');
rise($('rq'),p(u,TM.bet_chips+6.2,TM.bet_chips+6.7));

rise($('fnd'),p(u,TM.founder,TM.founder+.5));rise($('bulb'),p(u,TM.founder+1,TM.founder+1.5));rise($('sheet'),p(u,TM.spreadsheet,TM.spreadsheet+.5));
SB.forEach((b,i)=>{const g=p(u,TM.spreadsheet+4.6+i*.1,TM.spreadsheet+4.9+i*.1);b.setAttribute('opacity',1-g);SQ[i].setAttribute('opacity',g)});
rise($('leap'),p(u,TM.leap_arrow,TM.leap_arrow+.5));const lk=p(u,TM.leap_arrow+.6,TM.leap_arrow+2.2),mm=1-lk;$('arc').setAttribute('stroke-dashoffset',mm);
$('ball').setAttribute('cx',(mm*mm*1130+2*mm*lk*1270+lk*lk*1410).toFixed(1));$('ball').setAttribute('cy',(mm*mm*540+2*mm*lk*330+lk*lk*540).toFixed(1));
rise($('jump'),p(u,TM.leap_arrow+2,TM.leap_arrow+2.6));

rise($('pil'),p(u,TM.two_pillars,TM.two_pillars+.5));$('pv').setAttribute('fill',u>=TM.value_heart?'var(--gain)':'var(--line)');
rise($('vh'),p(u,TM.value_heart,TM.value_heart+.5));$('heart').setAttribute('transform','translate(1150 360) scale('+(1+.06*Math.abs(Math.sin(t*3))).toFixed(3)+')');
rise($('vq'),p(u,TM.value_heart+.6,TM.value_heart+1.1));rise($('say'),p(u,TM.value_heart+6.9,TM.value_heart+7.4));
$('sayx').setAttribute('opacity',p(u,TM.value_heart+7.6,TM.value_heart+8));rise($('do2'),p(u,TM.value_heart+8.2,TM.value_heart+8.7));

TR.forEach(n=>{const a=TM.growth_tree+.5+n[1]*.6,k=p(u,a,a+.4);rise(n[0],k);if(n[2])n[2].setAttribute('opacity',k)});
rise($('lb1'),p(u,TM.growth_tree+2.5,TM.growth_tree+3));
const rg=(t*.8)%1;$('ring').setAttribute('r',(22+60*rg).toFixed(1));$('ring').setAttribute('opacity',u>=TM.ripple?(1-rg).toFixed(2):0);
PD.forEach((g,i)=>rise(g,p(u,TM.ripple+.8+i*.3,TM.ripple+1.2+i*.3)));rise($('lb2'),p(u,TM.ripple+2.6,TM.ripple+3.1));
rise($('stall'),p(u,TM.ripple+5.8,TM.ripple+6.4));

rise($('camp'),p(u,TM.campus,TM.campus+.5));rise($('lap'),p(u,TM.laptop_user,TM.laptop_user+.5));rise($('rev'),p(u,TM.laptop_user+.4,TM.laptop_user+.9));
rise($('why'),p(u,TM.laptop_user+4.2,TM.laptop_user+4.6));rise($('back'),p(u,TM.laptop_user+4.8,TM.laptop_user+5.3));
DY.forEach((d,i)=>d.setAttribute('fill',u>=TM.laptop_user+7+i*.3?'var(--gain)':'var(--line)'));
$('tbar').setAttribute('width',(560*p(u,TM.laptop_user+7,TM.laptop_user+10)).toFixed(1));rise($('ev1'),p(u,TM.laptop_user+11.2,TM.laptop_user+11.8));

// growth bet: spread radiates from the first pin and fills the campus
const ms=Math.min(TM.map_pins,SC[5][1]/K-5);
rise($('fmap'),p(u,ms-.4,ms));
DOT.forEach(d=>{const a=ms+.6+d[1]*3;d[0].setAttribute('opacity',p(u,a,a+.3))});
BLK.forEach(b=>{const a=ms+.5+b[1]*2.8;b[0].setAttribute('fill-opacity',(.22*p(u,a,a+.6)).toFixed(3))});
$('pin').setAttribute('transform','translate(0 '+(-6*Math.abs(Math.sin(t*2.5))).toFixed(1)+')');
rise($('bill'),p(u,TM.no_ads-.6,TM.no_ads-.1));$('xad').setAttribute('opacity',p(u,TM.no_ads+.4,TM.no_ads+.8));rise($('ev2'),p(u,TM.no_ads+3.3,TM.no_ads+3.9));

rise($('k0'),p(u,TM.walkman,TM.walkman+.5));rise($('ok0'),p(u,TM.walkman+5,TM.walkman+5.5));rise($('k1'),p(u,TM.napster_icon,TM.napster_icon+.5));
rise($('free'),p(u,TM.napster_icon+2.5,TM.napster_icon+3));rise($('k2'),p(u,TM.question_mark,TM.question_mark+.5));

rise($('mag'),p(u,TM.magnifier,TM.magnifier+.5));$('lens').setAttribute('transform','translate('+(30*Math.sin(t*1.4)).toFixed(1)+' 0)');
rise($('door'),p(u,TM.door_open,TM.door_open+.5));const dk=p(u,TM.door_open+.6,TM.door_open+1.8),dw=200-150*dk,ds=30*dk;
$('leaf').setAttribute('points','560,260 '+(560+dw)+','+(260-ds)+' '+(560+dw)+','+(560+ds)+' 560,560');
rise($('list'),p(u,TM.checklist,TM.checklist+.5));RW.forEach((r,i)=>rise(r[0],p(u,TM.checklist+.5+i*.4,TM.checklist+.9+i*.4)));
RW[0][1].setAttribute('stroke',u>=TM.checklist+2.5?'var(--gain)':'var(--line)');rise($('top1'),p(u,TM.checklist+2.5,TM.checklist+3));rise($('wrt'),p(u,TM.checklist+1.5,TM.checklist+2));

const s8=SC[8][0]/K;rise($('ql'),p(u,s8+.3,s8+.8));rise($('ech'),p(u,s8+.3,s8+.8));
rise($('qa'),p(u,s8+2.6,s8+3.1));rise($('qb'),p(u,s8+3,s8+3.5));rise($('qc'),p(u,s8+3.4,s8+3.9));
$('echips').setAttribute('transform','translate(0 '+(-6*Math.sin(t*2)).toFixed(1)+')');