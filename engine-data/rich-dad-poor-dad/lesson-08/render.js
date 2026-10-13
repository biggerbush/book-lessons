const f0=.6*p(u,TM.open_book+.6,TM.open_book+3.4),q0=R0.getPointAtLength(L0*f0);
$('walk0').setAttribute('cx',q0.x.toFixed(1));$('walk0').setAttribute('cy',q0.y.toFixed(1));
R0.setAttribute('opacity',p(u,TM.open_book,TM.open_book+.8));
rise($('book0'),p(u,TM.open_book,TM.open_book+.5));rise($('q0'),p(u,TM.open_book+3.8,TM.open_book+4.3));

const a1=p(u,TM.reality_wall,TM.reality_wall+.5),b1=p(u,TM.strong_why,TM.strong_why+.5),dx=120*p(u,TM.strong_why+.6,TM.strong_why+2.4);
rise($('wall1'),a1);rise($('you1'),a1);rise($('push1'),a1*(1-b1));rise($('why1'),b1);
['wall1m','you1m','why1m'].forEach(id=>$(id).setAttribute('transform','translate('+dx.toFixed(1)+' 0)'));
rise($('spirit1'),p(u,TM.strong_why+4.6,TM.strong_why+5.2));

rise($('l0'),p(u,TM.two_lists,TM.two_lists+.5));rise($('l1'),p(u,TM.two_lists+.5,TM.two_lists+1));
rise($('cd2'),p(u,TM.clock_desk,TM.clock_desk+.5));rise($('or2'),p(u,TM.open_road,TM.open_road+.5));
$('mh2').setAttribute('x2',(420+55*Math.sin(t*2)).toFixed(1));$('mh2').setAttribute('y2',(380-55*Math.cos(t*2)).toFixed(1));
$('hh2').setAttribute('x2',(420+35*Math.sin(t*.2)).toFixed(1));$('hh2').setAttribute('y2',(380-35*Math.cos(t*.2)).toFixed(1));
rise($('fwd2'),p(u,TM.open_road+6.5,TM.open_road+7.1));

rise($('fork3'),p(u,TM.fork_road,TM.fork_road+.6));rise($('cl3'),p(u,TM.coin_purse,TM.coin_purse+.5));
const co=$('coin3');
if(u<TM.coin_purse)co.setAttribute('opacity',0);else{const c=(u-TM.coin_purse)/2.4,k=Math.floor(c),f=c-k,pp=k%2?PB:PA,q=pp.getPointAtLength((k%2?STOPB:STOPA)*ease(Math.min(f/.8,1)));
  co.setAttribute('transform','translate('+q.x.toFixed(1)+' '+q.y.toFixed(1)+')');co.setAttribute('opacity',(f<.8?1:1-(f-.8)/.2).toFixed(2));$('coinc3').setAttribute('class',k%2?'loss':'gain')}
rise($('hg3'),p(u,TM.hourglass,TM.hourglass+.5));rise($('mind3'),p(u,TM.hourglass+1.5,TM.hourglass+2));

rise($('head4'),p(u,TM.book_stack,TM.book_stack+.5));
BK.forEach((b,i)=>rise(b,p(u,TM.book_stack+.6+i*.5,TM.book_stack+1+i*.5)));
rise($('sem4'),p(u,TM.seminar_room,TM.seminar_room+.6));
rise($('pay4'),p(u,TM.seminar_room+7,TM.seminar_room+7.5));
CO.forEach((g,i)=>rise(g,p(u,TM.seminar_room+7.8+i*.25,TM.seminar_room+8.1+i*.25)));

FC.forEach((c,i)=>{const on=u>=TM.friend_circle+1.8;rise(c,p(u,TM.friend_circle+i*.15,TM.friend_circle+i*.15+.4));c.setAttribute('class',on&&i%2?'gain':'ink');c.setAttribute('fill-opacity',on&&!(i%2)?.35:1)});
LN.forEach((l,i)=>l.setAttribute('opacity',p(u,TM.friend_circle+1.8+i*.2,TM.friend_circle+2.2+i*.2)));
BB.forEach((b,i)=>rise(b,p(u,TM.friend_circle+2+i*.2,TM.friend_circle+2.4+i*.2)));
rise($('lunch5'),p(u,TM.mentor_lunch,TM.mentor_lunch+.6));$('kn5').setAttribute('stroke-dashoffset',(t*30).toFixed(1));

rise($('map6'),p(u,TM.map_pin,TM.map_pin+.5));rise($('pin6'),p(u,TM.map_pin+.4,TM.map_pin+.9));
FT.forEach((e,i)=>e.setAttribute('opacity',p(u,TM.walking_shoes+i*.25,TM.walking_shoes+i*.25+.2)));
SG.forEach((g,i)=>rise(g,p(u,TM.walking_shoes+2.5+i*.8,TM.walking_shoes+3+i*.8)));
rise($('wl6'),p(u,TM.walking_shoes,TM.walking_shoes+.5));
rise($('off6'),p(u,TM.offer_letter,TM.offer_letter+.5));
EV.forEach((g,i)=>{const a=TM.offer_letter+.3+i*.35;rise(g,p(u,a,a+.3));if(XM[i])XM[i].setAttribute('opacity',p(u,a+.4,a+.6))});
$('bar6').setAttribute('width',(580*p(u,TM.offer_letter+.3,TM.offer_letter+3.4)).toFixed(1));

rise($('stop7'),p(u,TM.stop_sign,TM.stop_sign+.5));rise($('wk7'),p(u,TM.stop_sign+1.2,TM.stop_sign+1.7));rise($('nw7'),p(u,TM.stop_sign+2.2,TM.stop_sign+2.7));
rise($('st7'),p(u,TM.first_step,TM.first_step+.5));rise($('cl7'),p(u,TM.first_step+.2,TM.first_step+.6));
const ix=3*p(u,TM.first_step+.8,TM.first_step+3.8),si=Math.min(Math.floor(ix),2),fr=ix-si;
$('cl7m').setAttribute('transform','translate('+(XS[si]+(XS[si+1]-XS[si])*fr).toFixed(1)+' '+(YS[si]+(YS[si+1]-YS[si])*fr-30*Math.sin(Math.PI*fr)).toFixed(1)+')');
rise($('plan7'),p(u,TM.first_step+4.2,TM.first_step+4.7));rise($('bt7'),p(u,TM.first_step+4.8,TM.first_step+5.3));

rise($('qa'),p(u,TM.your_lists,TM.your_lists+.5));rise($('qb'),p(u,TM.your_lists+.4,TM.your_lists+.9));
rise($('ca8'),p(u,TM.your_lists+1,TM.your_lists+1.5));rise($('cb8'),p(u,TM.your_lists+1.6,TM.your_lists+2.1));
rise($('qc'),p(u,TM.your_lists+6,TM.your_lists+6.5));rise($('fp8'),p(u,TM.your_lists+6.4,TM.your_lists+6.9));