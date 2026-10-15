const kk=p(u,TM.stuck_lock+1,TM.stuck_lock+3);
$('key').setAttribute('transform','translate('+(1440-99*kk).toFixed(1)+' '+(780-229*kk).toFixed(1)+') rotate(-135)');
$('key').setAttribute('opacity',p(u,TM.stuck_lock,TM.stuck_lock+.6));
$('shack').setAttribute('transform','translate(0 '+(-34*p(u,TM.stuck_lock+3.2,TM.stuck_lock+3.8)).toFixed(1)+')');

let wv='M120 450';for(let x=120;x<=860;x+=20)wv+='L'+x+' '+(450+5*Math.sin(x/40+t*2)).toFixed(1);$('wave1').setAttribute('d',wv);
rise($('barge'),p(u,TM.oil_tanker,TM.oil_tanker+.5));rise($('ice'),p(u,TM.frozen_oil,TM.frozen_oil+.5));rise($('pumpg'),p(u,TM.frozen_oil+1,TM.frozen_oil+1.6));
TP.forEach((g,i)=>rise(g,p(u,TM.expert_team+i*.25,TM.expert_team+i*.25+.4)));rise($('years'),p(u,TM.expert_team+1.5,TM.expert_team+2.1));

rise($('web'),p(u,TM.web_board,TM.web_board+.6));
CW.forEach(([g,o])=>{const a=TM.crowd_icons+o*.1;rise(g,p(u,a,a+.35))});
rise($('arr2'),p(u,TM.crowd_icons+1.8,TM.crowd_icons+2.3));rise($('any'),p(u,TM.crowd_icons+2.5,TM.crowd_icons+3.1));

rise($('chem'),p(u,TM.chemist,TM.chemist+.5));rise($('p1'),p(u,TM.vibrator,TM.vibrator+.5));
const b1=u>=TM.vibrator+1,b2=u>=TM.shaking_oil+1;
$('vib1').setAttribute('transform','translate('+(b1?4*Math.sin(t*60):0).toFixed(1)+' 0)');$('buzz1').setAttribute('opacity',b1?.5+.5*Math.sin(t*20):0);
rise($('arr3'),p(u,TM.shaking_oil,TM.shaking_oil+.5));rise($('p2'),p(u,TM.shaking_oil,TM.shaking_oil+.5));
$('vib2').setAttribute('transform','translate('+(b2?4*Math.sin(t*60):0).toFixed(1)+' 0)');$('buzz2').setAttribute('opacity',b2?.5+.5*Math.sin(t*20):0);
$('oilG').setAttribute('opacity',p(u,TM.shaking_oil+1.5,TM.shaking_oil+3));rise($('shk'),p(u,TM.shaking_oil+3,TM.shaking_oil+3.6));

rise($('res'),p(u,TM.researcher,TM.researcher+.5));rise($('chart'),p(u,TM.distance_bar,TM.distance_bar+.5));
BR.forEach((r,i)=>{const h=BH[i]*p(u,TM.distance_bar+.6+i*.4,TM.distance_bar+1.2+i*.4);r.setAttribute('y',(640-h).toFixed(1));r.setAttribute('height',h.toFixed(1))});
rise($('eye'),p(u,TM.fresh_eyes,TM.fresh_eyes+.5));$('pupil').setAttribute('cx',(1300+10*Math.sin(t*1.5)).toFixed(1));
rise($('fresh'),p(u,TM.fresh_eyes+.4,TM.fresh_eyes+1));

rise($('yok'),p(u,TM.yokoi,TM.yokoi+.5));rise($('mach'),p(u,TM.yokoi+3.5,TM.yokoi+4.1));
GR.forEach(([g,x,y],i)=>g.setAttribute('transform','rotate('+((i?-1:1)*t*40).toFixed(1)+' '+x+' '+y+')'));
CD.forEach((g,i)=>{const k=(t*.4+i/4)%1;g.setAttribute('transform','translate('+(130+320*k).toFixed(1)+' 560)');g.setAttribute('opacity',Math.sin(Math.PI*k).toFixed(2))});
rise($('grab'),p(u,TM.grab_arm,TM.grab_arm+.5));rise($('spare'),p(u,TM.grab_arm,TM.grab_arm+.5));
const e=p(u,TM.grab_arm+.6,TM.grab_arm+2.4)*(.92+.08*Math.sin(t*2)),w5=18+57*e,h5=Math.sqrt(6400-w5*w5)/2;
let A='',B='';for(let i=0;i<=6;i++){const x=(880+i*w5).toFixed(1),s=i%2?1:-1;A+=x+','+(495+s*h5).toFixed(1)+' ';B+=x+','+(495-s*h5).toFixed(1)+' '}
armA.setAttribute('points',A);armB.setAttribute('points',B);
const ex=(880+6*w5).toFixed(1);claw.setAttribute('d','M'+ex+' '+(495-h5).toFixed(1)+'q30 0 30 '+h5.toFixed(1)+'M'+ex+' '+(495+h5).toFixed(1)+'q30 0 30 '+(-h5).toFixed(1));
rise($('hit'),p(u,TM.grab_arm+2.6,TM.grab_arm+3.2));

[0,1,2].forEach(i=>{rise($('pt'+i),p(u,TM.old_parts+i*.5,TM.old_parts+i*.5+.4));rise($('l'+i),p(u,TM.old_parts+3.8+i*.5,TM.old_parts+4.2+i*.5))});
rise($('arw6'),p(u,TM.old_parts+5.5,TM.old_parts+6));rise($('gb'),p(u,TM.game_boy,TM.game_boy+.6));
rise($('vs'),p(u,TM.game_boy+2.5,TM.game_boy+3));rise($('riv'),p(u,TM.game_boy+2.5,TM.game_boy+3.1));
rise($('bat'),p(u,TM.battery,TM.battery+.5));
$('bf0').setAttribute('width',(248*p(u,TM.battery+.5,TM.battery+2.5)).toFixed(1));$('bf1').setAttribute('width',(80*p(u,TM.battery+.5,TM.battery+1.2)).toFixed(1));
rise($('sold'),p(u,TM.battery+2,TM.battery+2.6));

rise($('tbx'),p(u,TM.toolbox,TM.toolbox+.5));rise($('venn'),p(u,TM.two_fields,TM.two_fields+.5));
rise($('star'),p(u,TM.two_fields+1.5,TM.two_fields+2));rise($('shr'),p(u,TM.share_arrow,TM.share_arrow+.5));
const k7=(t*.5)%1,m7=1-k7;$('sdot').setAttribute('cx',(m7*m7*1200+2*m7*k7*1295+k7*k7*1390).toFixed(1));$('sdot').setAttribute('cy',(m7*m7*380+2*m7*k7*290+k7*k7*380).toFixed(1));
rise($('stk'),p(u,TM.share_arrow+2,TM.share_arrow+2.6));

const s8=SC[8][0]/K;
rise($('qa'),p(u,s8+.3,s8+.8));rise($('qb'),p(u,s8+.7,s8+1.2));rise($('qc'),p(u,s8+1.1,s8+1.6));
rise($('qfig'),p(u,s8+1.5,s8+2));rise($('qq1'),p(u,s8+2,s8+2.4));
rise($('qlab'),p(u,s8+4.8,s8+5.3));rise($('qq2'),p(u,s8+5.3,s8+5.7));