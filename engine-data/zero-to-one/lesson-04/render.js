const sq=p(u,TM.hook_founder+3.8,TM.hook_founder+6.5);
$('coinG').setAttribute('transform','translate(1240 360) scale('+(1-.75*sq).toFixed(3)+') translate(-1240 -360)');
R0.forEach((c,i)=>{const a=i*Math.PI/4+.2*Math.sin(t*.7+i),rr=180-55*sq+6*Math.sin(t*3+i*2);c.setAttribute('cx',(1240+rr*Math.cos(a)).toFixed(1));c.setAttribute('cy',(360+rr*Math.sin(a)).toFixed(1));c.setAttribute('opacity',p(u,TM.hook_founder+i*.15,TM.hook_founder+i*.15+.4))});

rise($('p0'),p(u,TM.two_doors,TM.two_doors+.5));rise($('p1'),p(u,TM.two_doors+.6,TM.two_doors+1.1));
dr('door0',140,p(u,TM.crowd_market,TM.crowd_market+1));dr('door1',860,p(u,TM.single_shop,TM.single_shop+1));
rise($('lab0'),p(u,TM.single_shop+5,TM.single_shop+5.5));rise($('lab1'),p(u,TM.single_shop+5.6,TM.single_shop+6.1));

rise($('plane'),p(u,TM.airplane,TM.airplane+.5));rise($('barA'),p(u,TM.airplane+1,TM.airplane+1.5));
$('planeIn').setAttribute('transform','translate('+(10*Math.sin(t*.9)).toFixed(1)+' '+(5*Math.sin(t*1.7)).toFixed(1)+')');
rise($('coin37'),p(u,TM.coin_37,TM.coin_37+.5));$('c37').textContent=Math.round(37*p(u,TM.coin_37+.3,TM.coin_37+1.6))+'¢';
rise($('ggl'),p(u,TM.google_logo,TM.google_logo+.5));
const gk=p(u,TM.google_logo+4.2,TM.google_logo+5.6);rise($('pct'),p(u,TM.google_logo+4.2,TM.google_logo+4.7));
$('pctT').textContent=Math.round(21*gk)+'%';$('gP').setAttribute('width',(147*gk).toFixed(1));

rise($('chart'),p(u,TM.price_arrow,TM.price_arrow+.5));
$('priceL').setAttribute('stroke-dashoffset',(1-p(u,TM.price_arrow+.3,TM.price_arrow+3.3)).toFixed(3));
$('priceA').setAttribute('opacity',p(u,TM.price_arrow+3.1,TM.price_arrow+3.5));
rise($('pie'),p(u,TM.shrinking_pie,TM.shrinking_pie+.5));
const pk=p(u,TM.shrinking_pie+1,TM.shrinking_pie+4.5);
$('pieW').setAttribute('d',wedge(2*Math.PI*(1-.9*pk)));
RV.forEach(([g,cx,cy],i)=>{const l=-14*pk+3*Math.sin(t*3+i*1.7);g.setAttribute('transform','translate('+(cx*l).toFixed(1)+' '+(cy*l).toFixed(1)+')');g.setAttribute('opacity',p(u,TM.shrinking_pie+.3+i*.2,TM.shrinking_pie+.6+i*.2))});
rise($('pieEnd'),p(u,TM.shrinking_pie+4.2,TM.shrinking_pie+4.7));
rise($('surv'),p(u,TM.shrinking_pie+5.4,TM.shrinking_pie+6));

rise($('chest'),p(u,TM.treasure_chest,TM.treasure_chest+.5));
const lo=p(u,TM.treasure_chest+.8,TM.treasure_chest+1.6);
$('lid').setAttribute('transform','rotate('+(-35*lo).toFixed(1)+' 190 470)');$('coins4').setAttribute('opacity',lo);
[TM.lab_bench,TM.happy_staff,TM.happy_staff+.8].forEach((a,i)=>{rise($('k'+i),p(u,a,a+.5));$('lk'+i).setAttribute('opacity',p(u,a,a+.5))});
rise($('lux'),p(u,TM.happy_staff+5.4,TM.happy_staff+6));

rise($('tl'),p(u,TM.tiny_circle,TM.tiny_circle+.5));$('tc').setAttribute('r',(180-130*p(u,TM.tiny_circle+.6,TM.tiny_circle+2.2)).toFixed(1));
rise($('gl'),p(u,TM.giant_circle,TM.giant_circle+.5));$('gc').setAttribute('r',(60+140*p(u,TM.giant_circle+.6,TM.giant_circle+2.2)).toFixed(1));
rise($('gg'),p(u,TM.giant_circle+5.4,TM.giant_circle+6));

rise($('ring'),p(u,TM.boxing_ring,TM.boxing_ring+.5));
const bx=(10*Math.sin(t*4)).toFixed(1);$('f0').setAttribute('transform','translate('+bx+' 0)');$('f1').setAttribute('transform','translate('+(-bx)+' 0)');
rise($('cpy'),p(u,TM.boxing_ring+2.6,TM.boxing_ring+3.2));rise($('nm'),p(u,TM.two_giants,TM.two_giants+.5));
rise($('ap'),p(u,TM.apple_rising,TM.apple_rising+.5));
const ay=-380*p(u,TM.apple_rising+.3,TM.apple_rising+3);
$('apIn').setAttribute('transform','translate(0 '+ay.toFixed(1)+')');$('apL').setAttribute('d','M1300 724V'+(680+ay).toFixed(1));

// PayPal vs X.com: battle burns cash, then they merge
const hk=p(u,TM.handshake,TM.handshake+1.2),fo=1-hk;
rise($('bA'),p(u,TM.two_rockets,TM.two_rockets+.5));rise($('bB'),p(u,TM.two_rockets+.3,TM.two_rockets+.8));
const sh=(fo*4*Math.sin(t*12)).toFixed(1);
$('bAi').setAttribute('transform','translate('+sh+' 0)');$('bBi').setAttribute('transform','translate('+(-sh)+' 0)');
rise($('clash'),p(u,TM.two_rockets+.6,TM.two_rockets+1.1)*fo);
SPK.setAttribute('transform','translate(800 285) rotate('+(t*40%360).toFixed(1)+') scale('+(1+.12*Math.sin(t*9)).toFixed(3)+')');
rise($('cash'),p(u,TM.two_rockets+.8,TM.two_rockets+1.3));
const bn=p(u,TM.two_rockets+1.2,Math.max(TM.handshake,TM.two_rockets+3)),rem=6-3.5*bn;
BILL.forEach((row,s)=>{row.forEach((e,k)=>e.setAttribute('opacity',cl(rem-k).toFixed(2)));
  const fy=584-rem*30,fs=1+.12*Math.sin(t*11+s*2);
  FL[s].setAttribute('transform','translate('+(SX[s]-4)+' '+fy.toFixed(1)+') scale('+(.6*fs).toFixed(3)+' '+(.6*(2-fs)).toFixed(3)+')');FL[s].setAttribute('opacity',fo.toFixed(2))});
const ck=p(u,TM.handshake+.3,TM.handshake+1.1),hh=p(u,TM.handshake+1,TM.handshake+1.3);
$('mc0').setAttribute('stroke-dashoffset',(1-ck).toFixed(3));$('mc1').setAttribute('stroke-dashoffset',(1-ck).toFixed(3));
$('mc0').setAttribute('opacity',ck>0?1:0);$('mc1').setAttribute('opacity',ck>0?1:0);
$('mh0').setAttribute('opacity',hh);$('mh1').setAttribute('opacity',hh);
rise($('mg'),p(u,TM.handshake+.8,TM.handshake+1.4));rise($('mgSub'),p(u,TM.handshake+1.2,TM.handshake+1.7));
rise($('qt'),p(u,TM.handshake+5,TM.handshake+5.6));

rise($('qa'),p(u,TM.mirror,TM.mirror+.5));rise($('qb'),p(u,TM.mirror+.5,TM.mirror+1));
rise($('cg'),p(u,TM.mirror+1.2,TM.mirror+1.8));rise($('qc'),p(u,TM.mirror+5.7,TM.mirror+6.2));rise($('tag'),p(u,TM.mirror+6.3,TM.mirror+6.8));