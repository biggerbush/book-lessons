const P=Math.PI;
$('tp').setAttribute('transform','rotate('+(3*Math.sin(t*1.5)).toFixed(2)+' 1310 330)');
TL.forEach((l,i)=>l.setAttribute('opacity',u>=TM.empty_purse+.4+i*.2?1:.15));
rise($('tlab'),p(u,TM.empty_purse+.4,TM.empty_purse+1));

rise($('b1'),p(u,TM.bansir,TM.bansir+.5));rise($('h1'),p(u,TM.low_wall,TM.low_wall+.5));
rise($('ch1'),p(u,TM.chariot,TM.chariot+.5));rise($('wf1'),p(u,TM.wife,TM.wife+.5));
$('qm1').setAttribute('y',(600-6*Math.abs(Math.sin(t*2))).toFixed(1));

const wk=p(u,TM.heavy_purse+6.1,TM.heavy_purse+7);
rise($('dc'),p(u,TM.dream_cloud,TM.dream_cloud+.6));$('dcw').setAttribute('opacity',(1-.45*wk).toFixed(2));
rise($('dhp'),p(u,TM.heavy_purse,TM.heavy_purse+.5));
rise($('wlab'),p(u,TM.heavy_purse,TM.heavy_purse+.5));
DC.forEach((c,i)=>{const k=(t*.45+i/6)%1;c.setAttribute('cx',(900+210*k).toFixed(1));c.setAttribute('cy',(420-100*Math.sin(k*P)+60*k).toFixed(1));c.setAttribute('opacity',(1-k).toFixed(2))});
$('zz').setAttribute('opacity',(1-wk).toFixed(2));rise($('sun2'),wk);rise($('rp'),p(u,TM.heavy_purse+9.5,TM.heavy_purse+10));

rise($('bk'),p(u,SC[3][0]/K+.3,SC[3][0]/K+.8));
$('kg').setAttribute('transform','translate('+(400*(1-p(u,TM.kobbi,TM.kobbi+1.5))).toFixed(1)+' 0)');rise($('kgi'),p(u,TM.kobbi,TM.kobbi+.6));
rise($('ka'),p(u,TM.open_hand,TM.open_hand+.5));rise($('bb'),p(u,TM.open_hand+5,TM.open_hand+5.5));
rise($('br'),p(u,TM.two_friends,TM.two_friends+.5));rise($('bt'),p(u,TM.two_friends+.4,TM.two_friends+1));

CE.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+.2+i*.08?'var(--ink)':'var(--line)'));
rise($('ss'),p(u,TM.calendar+3.8,TM.calendar+4.3));
const sk=(t*.25)%1;$('sun').setAttribute('cx',(370-200*Math.cos(sk*P)).toFixed(1));$('sun').setAttribute('cy',(760-200*Math.sin(sk*P)).toFixed(1));
rise($('cin'),p(u,TM.coin_stream,TM.coin_stream+.5));
IN.forEach((c,i)=>{const k=(t*.7+i/5)%1;c.setAttribute('cy',(230+190*k).toFixed(1))});
rise($('cout'),p(u,TM.leaky_bucket,TM.leaky_bucket+.5));
OUT.forEach((c,i)=>{const k=(t*.5+i/5)%1;c.setAttribute('cx',(1100+200*k).toFixed(1));c.setAttribute('cy',(690+80*(1-(1-k)*(1-k))).toFixed(1));c.setAttribute('opacity',(1-.85*k).toFixed(2))});
rise($('empty'),p(u,TM.leaky_bucket+.8,TM.leaky_bucket+1.3));

rise($('luck'),p(u,SC[5][0]/K+.3,SC[5][0]/K+.8));$('luckw').setAttribute('opacity',(1-.7*p(u,TM.arkad,TM.arkad+1)).toFixed(2));
rise($('boys'),p(u,TM.arkad,TM.arkad+.5));rise($('up5'),p(u,TM.arkad+1.2,TM.arkad+1.8));rise($('lp'),p(u,TM.arkad+1.8,TM.arkad+2.4));
rise($('pal'),p(u,TM.palace,TM.palace+.6));rise($('same'),p(u,TM.palace+4.1,TM.palace+4.7));

rise($('lamp'),p(u,TM.oil_lamp,TM.oil_lamp+.5));
$('flame').setAttribute('transform','translate(455 436) scale('+(1+.08*Math.sin(t*9)).toFixed(3)+') translate(-455 -436)');
$('rays').setAttribute('opacity',(p(u,TM.oil_lamp+.3,TM.oil_lamp+1)*(.6+.4*Math.sin(t*5))).toFixed(2));
rise($('sub6'),p(u,TM.oil_lamp+2.9,TM.oil_lamp+3.4));
rise($('scr'),p(u,TM.scroll,TM.scroll+.5));
const ph=30+266*p(u,TM.scroll+.3,TM.scroll+1.8);$('paper').setAttribute('height',ph.toFixed(1));$('roll2').setAttribute('y',(264+ph-14).toFixed(1));
$('scrt').setAttribute('opacity',p(u,TM.scroll+1.2,TM.scroll+2).toFixed(2));
rise($('vis6'),p(u,TM.scroll+5,TM.scroll+5.5));
$('walk').setAttribute('transform','translate('+(60*p(u,TM.scroll+5.3,TM.scroll+7.5)).toFixed(1)+' 0)');

rise($('hp'),p(u,TM.hammer,TM.hammer+.5));
const sw=Math.pow(Math.abs(Math.sin(t*2.2)),3);$('hmr').setAttribute('transform','rotate('+(-10+70*sw).toFixed(1)+' 260 470)');
HC.forEach((c,i)=>{const k=(t*.5+i/3)%1;c.setAttribute('cx',(440+220*k).toFixed(1));c.setAttribute('cy',(400-140*Math.sin(k*P)).toFixed(1));c.setAttribute('opacity',(1-k).toFixed(2))});
rise($('mp'),p(u,TM.map,TM.map+.6));rise($('road'),p(u,TM.map+4.2,TM.map+4.8));
$('cart').setAttribute('transform','translate('+(220*p(u,TM.map+4.6,TM.map+8)).toFixed(1)+' 0)');
rise($('prom'),p(u,TM.map+9.2,TM.map+9.8));

rise($('qa'),p(u,TM.ledger,TM.ledger+.5));rise($('led8'),p(u,TM.ledger+.3,TM.ledger+.8));
$('ebar').setAttribute('width',(760*p(u,TM.ledger+.8,TM.ledger+2.4)).toFixed(1));
rise($('qb'),p(u,TM.ledger+5,TM.ledger+5.5));rise($('kept'),p(u,TM.ledger+5.5,TM.ledger+6));