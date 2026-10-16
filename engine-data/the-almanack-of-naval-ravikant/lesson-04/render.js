rise($('sg0'),p(u,TM.name_tag,TM.name_tag+.3));draw(S0,p(u,TM.name_tag+.3,TM.name_tag+2));
rise($('seal'),p(u,TM.name_tag+3.8,TM.name_tag+4.3));

rise($('me'),p(u,TM.signature,TM.signature+.5));draw(S1,p(u,TM.signature+.6,TM.signature+1.8));
rise($('co'),p(u,TM.crowd,TM.crowd+.5));rise($('blame'),p(u,TM.crowd+4.6,TM.crowd+5.1));
BR.forEach((b,i)=>draw(b,p(u,TM.crowd+8.3+i*.08,TM.crowd+8.9+i*.08)));rise($('trap'),p(u,TM.crowd+8.6,TM.crowd+9.1));

$('cone').setAttribute('opacity',(p(u,TM.spotlight,TM.spotlight+.6)*(.85+.15*Math.sin(t*5))).toFixed(2));
rise($('actor'),p(u,TM.spotlight+.3,TM.spotlight+.8));
const sb=p(u,TM.stumble,TM.stumble+.6);AC.setAttribute('transform','rotate('+(-18*sb+(sb>0?3*Math.sin(t*6):0)).toFixed(1)+' 440 690)');
rise($('oops'),p(u,TM.stumble+.4,TM.stumble+.8));rise($('hide'),p(u,TM.stumble+3.7,TM.stumble+4.2));rise($('tog'),p(u,TM.stumble+8.3,TM.stumble+8.8));

rise($('hs'),p(u,TM.handshake,TM.handshake+.5));
const md=p(u,TM.handshake+.6,TM.handshake+1.6);
$('medal').setAttribute('transform','translate('+(-90*(1-md)).toFixed(1)+' 0)');
$('ribbon').setAttribute('opacity',p(u,TM.handshake+1.5,TM.handshake+1.8).toFixed(2));
$('arm').setAttribute('transform','translate('+(-30*p(u,TM.handshake+1.6,TM.handshake+2.2)).toFixed(1)+' 0)');
rise($('gb'),p(u,TM.gift_box,TM.gift_box+.5));
TG.forEach((g,i)=>rise(g,p(u,TM.gift_box+.6+i*.6,TM.gift_box+1.1+i*.6)));
rise($('trk'),p(u,TM.gift_box+3.4,TM.gift_box+3.9));CK.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.gift_box+3.9+i*.3,TM.gift_box+4.2+i*.3)));
rise($('opp'),p(u,TM.gift_box+8.4,TM.gift_box+8.8));OB.forEach((b,i)=>{const h=(40+i*40)*p(u,TM.gift_box+8.6+i*.2,TM.gift_box+9.4+i*.2);b.setAttribute('y',(830-h).toFixed(1));b.setAttribute('height',h.toFixed(1))});

rise($('cmp'),p(u,TM.compass,TM.compass+.5));$('ndl').setAttribute('transform','rotate('+(22*Math.sin(t*1.2)).toFixed(1)+' 330 460)');
rise($('tgt'),p(u,TM.compass+5,TM.compass+5.4));draw($('la'),p(u,TM.compass+5.2,TM.compass+6));draw($('lb'),p(u,TM.compass+5.6,TM.compass+6.4));
rise($('lev'),p(u,TM.compass+5.8,TM.compass+6.3));
rise($('hg'),p(u,TM.hourglass,TM.hourglass+.5));
const f=cl((u-TM.hourglass-.5)/9),yt=310+160*f,yb=630-150*f,dt=60*(yt-310)/160,db=60*(630-yb)/160;
$('sTop').setAttribute('points',(920+dt)+','+yt+' '+(1060-dt)+','+yt+' 1000,470 980,470');
$('sBot').setAttribute('points','920,630 1060,630 '+(1060-db)+','+yb+' '+(920+db)+','+yb);
$('sStr').setAttribute('d','M990 470V'+yb.toFixed(1));$('sStr').setAttribute('opacity',f>0&&f<1?1:0);
rise($('wis'),p(u,TM.hourglass+.3,TM.hourglass+.8));rise($('jud'),p(u,TM.hourglass+4.6,TM.hourglass+5.1));

$('shp').setAttribute('opacity',p(u,TM.ship,TM.ship+.5));$('shp').setAttribute('transform','translate(0 '+(5*Math.sin(t*2)).toFixed(1)+')');
let wd='M120 535';for(let x=140;x<=380;x+=20)wd+='L'+x+' '+(535+5*Math.sin(x/25+t*3)).toFixed(1);$('wv').setAttribute('d',wd);$('wv').setAttribute('opacity',p(u,TM.ship,TM.ship+.5));
draw($('cA'),p(u,TM.course_line,TM.course_line+2));draw($('cB'),p(u,TM.course_line+.3,TM.course_line+2.3));
rise($('gap'),p(u,TM.course_line+2.4,TM.course_line+2.9));rise($('mag'),p(u,TM.course_line+5,TM.course_line+5.5));
rise($('qt'),p(u,TM.quote_card,TM.quote_card+.6));

rise($('inv'),p(u,TM.investor,TM.investor+.5));
const mp=p(u,TM.money_pile,TM.money_pile+.5);rise($('givers'),mp);
FC.forEach((c,i)=>{const k=(t*.5+i*.2)%1,x0=GV[i];c.setAttribute('cx',(x0+(750-x0)*k).toFixed(1));c.setAttribute('cy',(340+200*k-160*Math.sin(Math.PI*k)).toFixed(1));c.setAttribute('opacity',(mp*Math.min(1,k*10,(1-k)*10)).toFixed(2))});
const n=Math.round(32*p(u,TM.money_pile+.5,TM.money_pile+5));PL.forEach((e,i)=>e.setAttribute('opacity',i<n?1:0));
rise($('tl'),p(u,TM.money_pile+5.4,TM.money_pile+5.9));TD.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.money_pile+5.8+i*.2,TM.money_pile+6+i*.2)));

rise($('wb'),p(u,TM.workbench,TM.workbench+.5));
rise($('gr'),p(u,TM.gears,TM.gears+.5));rise($('gl'),p(u,TM.gears+.6,TM.gears+1.1));
const ga=t*30;G1.setAttribute('transform','rotate('+ga.toFixed(1)+' 720 450)');G2.setAttribute('transform','rotate('+(-ga+6.43).toFixed(1)+' 895 450)');
rise($('nb'),p(u,TM.notebook,TM.notebook+.5));NC.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.notebook+.6+i*.5,TM.notebook+.9+i*.5)));
$('sharp').setAttribute('width',(340*p(u,TM.notebook+.6,TM.notebook+3.4)).toFixed(1));

rise($('qa'),p(u,TM.pen,TM.pen+.5));rise($('qb'),p(u,TM.pen+.4,TM.pen+.9));rise($('qc'),p(u,TM.pen+.8,TM.pen+1.3));
const pk=p(u,TM.pen+1.4,TM.pen+3.2);draw(S8,pk);
let pt={x:1150,y:770};try{pt=S8.getPointAtLength(L8*pk)}catch(e){}
$('pen').setAttribute('transform','translate('+pt.x.toFixed(1)+' '+pt.y.toFixed(1)+') rotate(28)');$('pen').setAttribute('opacity',p(u,TM.pen+1.1,TM.pen+1.4));
rise($('wr1'),p(u,TM.pen+5.8,TM.pen+6.3));rise($('wr2'),p(u,TM.pen+6.3,TM.pen+6.8));