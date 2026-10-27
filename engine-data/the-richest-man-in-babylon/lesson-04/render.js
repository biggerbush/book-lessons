const wk=p(u,TM.sleeping_coins+5.4,TM.sleeping_coins+6);
JC.forEach((c,i)=>{const a=TM.sleeping_coins+i*.12;c.setAttribute('opacity',p(u,a,a+.4).toFixed(2));c.setAttribute('transform','translate(0 '+(-wk*Math.abs(Math.sin(t*5+i*.9))*16).toFixed(1)+')')});
$('zzz').setAttribute('opacity',(p(u,TM.sleeping_coins+1,TM.sleeping_coins+1.6)*(1-wk)).toFixed(2));
$('zzz').setAttribute('transform','translate(0 '+(-6*Math.sin(t*1.5)).toFixed(1)+')');

rise($('ark1'),p(u,TM.arkad,TM.arkad+.5));
PC.forEach((c,i)=>{const a=TM.coin_pile+i*.12;rise(c,p(u,a,a+.4))});
rise($('clk1'),p(u,TM.clock_dust,TM.clock_dust+.5));rise($('same1'),p(u,TM.clock_dust+1.5,TM.clock_dust+2));
const sp=Math.max(0,u-TM.clock_dust);
$('mh1').setAttribute('transform','rotate('+(sp*300).toFixed(1)+' 1320 380)');$('hh1').setAttribute('transform','rotate('+(sp*25).toFixed(1)+' 1320 380)');
$('dust1').setAttribute('opacity',p(u,TM.clock_dust,TM.clock_dust+.6).toFixed(2));
DU.forEach((d,i)=>d.setAttribute('cy',(260+((t*40+i*37)%240)).toFixed(1)));

WK.forEach(([o,g],i)=>{const a=TM.worker_coins+i*.4;rise(o,p(u,a,a+.5));g.setAttribute('transform','translate(0 '+(-Math.abs(Math.sin(t*3+i))*10).toFixed(1)+')')});
const ow=p(u,TM.worker_coins+7.4,TM.worker_coins+7.9);rise($('own2'),ow);
FL.forEach((c,i)=>{const k=(t*.5+i/3)%1;c.setAttribute('transform','translate('+(860+160*k).toFixed(1)+' '+(420-70*Math.sin(Math.PI*k)-20*k).toFixed(1)+')');c.setAttribute('opacity',(ow*Math.sin(Math.PI*k)).toFixed(2))});
KD.forEach((o,i)=>{const a=TM.coin_family+i*.5;rise(o,p(u,a,a+.5))});rise($('fl2'),p(u,TM.coin_family+1.6,TM.coin_family+2.1));

rise($('agg3'),p(u,TM.aggar,TM.aggar+.5));
$('ham3').setAttribute('transform','rotate('+(-20+35*Math.pow(Math.abs(Math.sin(t*2.5)),3)).toFixed(1)+' 330 460)');
rise($('sea3'),p(u,TM.bronze_ship,TM.bronze_ship+.5));rise($('ship3'),p(u,TM.bronze_ship,TM.bronze_ship+.5));
let wv='M700 620';for(let x=700;x<=1480;x+=30)wv+='L'+x+' '+(620+6*Math.sin(x/50+t*2)).toFixed(1);$('wave3').setAttribute('d',wv);
$('shipm3').setAttribute('transform','translate('+(1330-330*p(u,TM.bronze_ship,TM.bronze_ship+5)).toFixed(1)+' '+(640+4*Math.sin(t*2)).toFixed(1)+')');
rise($('arr3'),p(u,TM.bronze_ship+3,TM.bronze_ship+3.5));rise($('need3'),p(u,TM.bronze_ship+6.2,TM.bronze_ship+6.7));

rise($('ark4'),p(u,TM.gold_handoff-.3,TM.gold_handoff+.2));rise($('agg4'),p(u,TM.gold_handoff-.3,TM.gold_handoff+.2));
LC.forEach((c,i)=>{const a=TM.gold_handoff+i*.25,k=p(u,a,a+1.4);c.setAttribute('transform','translate('+(320+960*k).toFixed(1)+' 290)');c.setAttribute('opacity',(p(u,a,a+.2)*(1-p(u,TM.shields,TM.shields+.5))).toFixed(2))});
SH.forEach((g,i)=>{const a=TM.shields+.4+i*.5;rise(g,p(u,a,a+.5))});
RT.forEach((c,i)=>{const a=TM.rent_coins+i*.35,k=p(u,a,a+1.6);c.setAttribute('transform','translate('+(1280-(920-i*60)*k).toFixed(1)+' 740)');c.setAttribute('opacity',p(u,a,a+.2).toFixed(2))});

rise($('bag5'),p(u,TM.loop_arrow-3,TM.loop_arrow-2.5));$('nox5').setAttribute('opacity',(.55*p(u,TM.loop_arrow-2.4,TM.loop_arrow-1.9)).toFixed(2));
rise($('loop5'),p(u,TM.loop_arrow,TM.loop_arrow+.5));
const lp=Math.max(0,u-TM.loop_arrow),an=-Math.PI/2+lp*1.6,lap=Math.floor(lp*1.6/(2*Math.PI));
$('lc5').setAttribute('cx',(760+160*Math.cos(an)).toFixed(1));$('lc5').setAttribute('cy',(480+160*Math.sin(an)).toFixed(1));
$('lc5').setAttribute('r',18+Math.min(lap,4)*4);$('lc5').setAttribute('opacity',p(u,TM.loop_arrow,TM.loop_arrow+.4).toFixed(2));
ST.forEach(([sl,tx],i)=>{const a=TM.growing_stack+i*.9;tx.setAttribute('opacity',p(u,a,a+.3).toFixed(2));sl.forEach((r,j)=>r.setAttribute('opacity',p(u,a+j*.08,a+j*.08+.2).toFixed(2)))});
rise($('rl5'),p(u,TM.growing_stack,TM.growing_stack+.5));

const rk=p(u,TM.golden_river,TM.golden_river+1.5);
$('riv6').setAttribute('stroke-dasharray',RL.toFixed(0));$('riv6').setAttribute('stroke-dashoffset',(RL*(1-rk)).toFixed(1));
$('rivd6').setAttribute('opacity',rk.toFixed(2));$('rivd6').setAttribute('stroke-dashoffset',(-t*40).toFixed(1));
RV.forEach((c,i)=>{const s=(t*.08+i/6)%1,pt=$('riv6').getPointAtLength(RL*s);c.setAttribute('transform','translate('+pt.x.toFixed(1)+' '+pt.y.toFixed(1)+')');c.setAttribute('opacity',(rk*Math.min(1,Math.sin(Math.PI*s)*3)).toFixed(2))});
rise($('ark6'),p(u,TM.golden_river,TM.golden_river+.5));
rise($('pur6'),p(u,TM.golden_river+7.3,TM.golden_river+7.8));rise($('inc6'),p(u,TM.golden_river+7.6,TM.golden_river+8.1));
rise($('gl6'),p(u,TM.young_old,TM.young_old+.5));
GE.forEach((c,i)=>{const a=TM.young_old+.4+i*.4;rise(c,p(u,a,a+.3))});GL.forEach((c,j)=>{const a=TM.young_old+.4+(4+j)*.4;rise(c,p(u,a,a+.3))});

[0,1,2].forEach(i=>{const a=TM.savings_acct+i*1.2;rise($('c7'+i),p(u,a,a+.5))});
rise($('tgg7'),p(u,TM.reinvest_btn,TM.reinvest_btn+.5));
const on=p(u,TM.reinvest_btn+.5,TM.reinvest_btn+1);$('kn7').setAttribute('cx',(165+90*on).toFixed(1));$('tg7').setAttribute('fill',on>.5?'var(--gain)':'var(--stage)');
rise($('cal7'),p(u,TM.calendar,TM.calendar+.5));
const ck=u>=TM.calendar+.8;CC[9].setAttribute('fill',ck?'var(--gain)':'var(--line)');CK.setAttribute('opacity',p(u,TM.calendar+.8,TM.calendar+1.1).toFixed(2));

const s8=SC[8][0]/K;
rise($('look8'),p(u,s8+.3,s8+.8));rise($('q8a'),p(u,s8+3.8,s8+4.3));rise($('q8b'),p(u,s8+4.2,s8+4.7));rise($('q8c'),p(u,s8+4.6,s8+5.1));
rise($('gr8'),p(u,s8+5.2,s8+5.8));
W8.forEach((g,i)=>g.setAttribute('transform','translate(0 '+(-Math.abs(Math.sin(t*4+i))*12).toFixed(1)+')'));