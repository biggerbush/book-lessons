const S=i=>SC[i][0]/K;
rise($('tMM'),p(u,TM.title_card,TM.title_card+.6));rise($('tBub'),p(u,TM.title_card+.8,TM.title_card+1.3));
let sp='';for(let x=1265;x<=1445;x+=6)sp+=x+','+(275+22*Math.sin(x/18+t*2)+8*Math.sin(x/7-t*3)).toFixed(1)+' ';$('tSpark').setAttribute('points',sp);
tMouth.setAttribute('d','M1374 444Q1390 '+(444+12*Math.sin(t*1.7)).toFixed(1)+' 1406 444');
rise($('tYou'),p(u,TM.title_card+5.8,TM.title_card+6.4));

rise($('shop'),p(u,TM.small_shop,TM.small_shop+.6));rise($('slice'),p(u,TM.stake_1000,TM.stake_1000+.5));rise($('stake'),p(u,TM.stake_1000+.3,TM.stake_1000+.8));
const sv=Math.round(1000*p(u,TM.stake_1000+.3,TM.stake_1000+1.6));$('stakeV').textContent='$'+(sv>=1000?'1,000':sv);
rise($('pMM'),p(u,TM.mr_market,TM.mr_market+.6));rise($('calL'),p(u,TM.mr_market+4.1,TM.mr_market+4.6));
cal.forEach((g,i)=>rise(g,p(u,TM.mr_market+4.1+i*.25,TM.mr_market+4.4+i*.25)));

rise($('dMM'),p(u,S(2)+.3,S(2)+.8));rise($('dYou'),p(u,S(2)+.6,S(2)+1.1));rise($('note'),p(u,TM.price_note,TM.price_note+.6));
rise($('bArr'),p(u,TM.buy_arrow,TM.buy_arrow+.5));rise($('sArr'),p(u,TM.sell_arrow,TM.sell_arrow+.5));
$('tokB').setAttribute('x',(1132-700*((t*.45)%1)).toFixed(1));$('tokS').setAttribute('x',(432+700*((t*.45+.5)%1)).toFixed(1));
rise($('same2'),p(u,TM.sell_arrow+2,TM.sell_arrow+2.6));

rise($('ax3'),p(u,S(3)+.4,S(3)+1));
B3.forEach((b,i)=>{const k=p(u,TM.sales_chart+i*.2,TM.sales_chart+i*.2+.5);b[0].setAttribute('y',(720-b[1]*k).toFixed(1));b[0].setAttribute('height',(b[1]*k).toFixed(1))});
$('line3').setAttribute('opacity',p(u,TM.sales_chart+1.4,TM.sales_chart+2));rise($('leg3'),p(u,TM.sales_chart+.4,TM.sales_chart+1));
rise($('calm'),p(u,TM.nod_face,TM.nod_face+.6));$('nod3').setAttribute('transform','rotate('+(5*Math.sin(t*2.5)).toFixed(2)+' 1210 580)');

rise($('val4'),p(u,S(4)+.4,S(4)+1));rise($('mood4'),p(u,S(4)+.6,S(4)+1.2));
$('pc4').setAttribute('points',cv4(.5*p(u,TM.party_hat-.4,TM.party_hat+1.2)+.5*p(u,TM.rain_cloud-.4,TM.rain_cloud+1.2)));
rise($('hpl'),p(u,TM.party_hat,TM.party_hat+.5));rise($('hat4'),p(u,TM.party_hat+.6,TM.party_hat+1.1));rise($('cloud4'),p(u,TM.rain_cloud+.6,TM.rain_cloud+1.1));
const md=u<TM.party_hat?0:u<TM.rain_cloud?1:-1;setFace(f4,md);f4.c.style.fill=md>0?'var(--gain)':md<0?'var(--loss)':'var(--stage)';
rise($('bz0'),p(u,TM.rain_cloud+4.2,TM.rain_cloud+4.8));rise($('bz1'),p(u,TM.rain_cloud+6.8,TM.rain_cloud+7.4));

rise($('nOff'),p(u,S(5)+.4,S(5)+1));rise($('nYou'),p(u,TM.closed_door-3.4,TM.closed_door-2.8));
const dw=40+160*p(u,TM.closed_door,TM.closed_door+.6);$('dPan').setAttribute('width',dw.toFixed(1));$('dKnob').setAttribute('cx',(400+dw-22).toFixed(1));
rise($('ign'),p(u,TM.closed_door+.5,TM.closed_door+1));rise($('rep'),p(u,TM.report_book,TM.report_book+.6));rise($('info'),p(u,TM.report_book+4.9,TM.report_book+5.5));

rise($('scale6'),p(u,S(6)+.3,S(6)+.8));rise($('hTagW'),p(u,TM.high_tag,TM.high_tag+.4));
$('hTag').setAttribute('transform','translate(0 '+(600-320*p(u,TM.high_tag+.2,TM.high_tag+1.4)).toFixed(1)+')');
rise($('far6'),p(u,TM.high_tag+1.4,TM.high_tag+1.9));rise($('sh6'),p(u,TM.high_tag+2,TM.high_tag+2.5));
rise($('bag6'),p(u,TM.coins_bag,TM.coins_bag+.6));rise($('hold6'),p(u,TM.coins_bag+2.6,TM.coins_bag+3.2));

rise($('scale7'),p(u,S(7)+.3,S(7)+.8));rise($('lTagW'),p(u,TM.low_tag,TM.low_tag+.4));
$('lTag').setAttribute('transform','translate(0 '+(360+300*p(u,TM.low_tag+.2,TM.low_tag+1.4)).toFixed(1)+')');
rise($('cart7'),p(u,TM.cart_shares-.3,TM.cart_shares+.2));
BK.forEach((b,i)=>{const k=p(u,TM.cart_shares+.4+i*.35,TM.cart_shares+.8+i*.35);b[0].setAttribute('y',(b[1]-220*(1-k)).toFixed(1));b[0].setAttribute('opacity',k)});
rise($('scr7'),p(u,TM.stock_screen,TM.stock_screen+.6));
let sk='',ly=430;for(let x=1030;x<=1430;x+=10){ly=430+70*Math.sin(x/45+t*1.5)+30*Math.sin(x/17-t*2.3);sk+=x+','+ly.toFixed(1)+' '}
$('spk7').setAttribute('points',sk);$('mini7').setAttribute('transform','translate(1430 '+ly.toFixed(1)+')');
rise($('lo7'),p(u,TM.stock_screen+5,TM.stock_screen+5.6));

rise($('q0'),p(u,S(8)+.4,S(8)+1));rise($('qa'),p(u,S(8)+4.2,S(8)+4.7));rise($('qb'),p(u,S(8)+4.6,S(8)+5.1));rise($('qc'),p(u,S(8)+5,S(8)+5.5));
rise($('f8g'),p(u,S(8)+.8,S(8)+1.4));setFace(f8,Math.sin(t*1.5));