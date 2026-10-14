rise($('tframe'),p(u,TM.title_card,TM.title_card+.6));
$('tape0').setAttribute('opacity',(p(u,TM.title_card+.6,TM.title_card+1.2)*(1-p(u,TM.title_card+5.4,TM.title_card+6.4))).toFixed(2));
tp.setAttribute('transform','translate('+(60*Math.sin(t*.9)).toFixed(1)+' '+(40*Math.sin(t*1.3)).toFixed(1)+')');

ST.forEach((g,i)=>{const a=i<3?TM.startup:TM.crowd+(i-3)*.35;rise(g,p(u,a,a+.4))});
rise($('floor1'),p(u,TM.startup,TM.startup+.4)); rise($('stars1'),p(u,TM.startup+.4,TM.startup+.9));
PP.forEach((g,i)=>rise(g,p(u,TM.rulebook+i*.3,TM.rulebook+i*.3+.4)));
rise($('tape1'),p(u,TM.rulebook+2.5,TM.rulebook+3)); rise($('bq'),p(u,TM.rulebook+4.9,TM.rulebook+5.5));

rise($('fr2'),p(u,TM.frame,TM.frame+.5));
FP.forEach((g,i)=>g.setAttribute('transform','translate('+(30*Math.sin(t*.7+i*1.7)).toFixed(1)+' '+(30*Math.cos(t*.9+i*2.3)).toFixed(1)+')'));
rise($('plane'),p(u,TM.pilot,TM.pilot+.5)); rise($('chk'),p(u,TM.pilot+2.9,TM.pilot+3.4));
TK.forEach((k,i)=>k.setAttribute('opacity',p(u,TM.pilot+3.4+i*.4,TM.pilot+3.7+i*.4)));
rise($('pil'),p(u,TM.pilot+4.5,TM.pilot+5)); rise($('fc'),p(u,TM.pilot+8.7,TM.pilot+9.3));

rise($('ath'),p(u,TM.athlete,TM.athlete+.5));
MD.forEach((c,i)=>rise(c,p(u,TM.athlete+.8+i*.15,TM.athlete+1.1+i*.15)));
rise($('bowl3'),p(u,TM.cheese,TM.cheese+.5));
const on3=u>=TM.cheese+.5?1:0;
DR.forEach((c,k)=>{const ph=(t*1.2+k/4)%1;c.setAttribute('cy',(300+130*ph).toFixed(1));c.setAttribute('opacity',on3)});
FT.forEach((c,k)=>{const ph=(t*.8+k/3)%1;c.setAttribute('cy',(590+100*ph).toFixed(1));c.setAttribute('opacity',(on3*(1-ph)).toFixed(2))});
rise($('days3'),p(u,TM.bowl,TM.bowl+.5));
DY.forEach((r,i)=>r.setAttribute('fill',u>=TM.bowl+.6+i*.2?V('gain'):V('stage')));
rise($('fz'),p(u,TM.bowl+5.8,TM.bowl+6.4));

rise($('tdl'),p(u,TM.todo,TM.todo+.5)); rise($('stl'),p(u,TM.stop_list,TM.stop_list+.5));
rise($('it0'),p(u,TM.stop_list+4.2,TM.stop_list+4.7)); rise($('stamp'),p(u,TM.stop_list+5.2,TM.stop_list+5.6));
let sy=470,cut=0;
for(let i=1;i<4;i++){const b=TM.scissors+(i-1)*.3;rise($('it'+i),p(u,b,b+.4));const a=TM.scissors+1.2+(i-1),k=p(u,a,a+.9),x=766+464*k;KS[i-1].setAttribute('x2',x.toFixed(1));if(u>=a){sy=360+i*110;cut=k<1?1:0}}
$('sc4').setAttribute('transform','translate(1370 '+sy+')');
SCB.setAttribute('transform','rotate('+(cut*10*Math.sin(t*14)).toFixed(1)+')');
$('sc4').setAttribute('opacity',(p(u,TM.scissors+.6,TM.scissors+1)*(1-p(u,TM.scissors+4.4,TM.scissors+4.8))).toFixed(2));

// scene 5: the tyrant shouts, then walks off; the crowd topples one by one
rise($('bossg'),p(u,TM.boss,TM.boss+.5)); rise($('crowd5'),p(u,TM.boss+.3,TM.boss+.8));
const c5=p(u,TM.boss+3.6,TM.boss+5);
const shout=(1-c5)*3*Math.sin(t*9);
$('bossm').setAttribute('transform','translate('+(-240*c5).toFixed(1)+' '+shout.toFixed(1)+')'); $('bossm').setAttribute('opacity',(1-c5).toFixed(2));
CR.forEach((g,i)=>{const k=p(u,TM.boss+4.4+i*.15,TM.boss+5.2+i*.15);g.setAttribute('transform','rotate('+(78*k).toFixed(1)+' '+CX5[i]+' 657)');g.setAttribute('fill',k>.3?V('muted'):V('ink'))});
rise($('leave5'),p(u,TM.boss+3.4,TM.boss+3.9));
rise($('ring5'),p(u,TM.team,TM.team+.5));
TP.forEach((g,i)=>rise(g,p(u,TM.team+.2+i*.12,TM.team+.5+i*.12)));
rise($('lbl5'),p(u,TM.team+1,TM.team+1.5));

rise($('gad'),p(u,TM.gadget,TM.gadget+.5)); rise($('nocause'),p(u,TM.gadget+1.4,TM.gadget+1.9));
rise($('net6'),p(u,TM.network,TM.network+.6)); rise($('wal6'),p(u,TM.network+.4,TM.network+.9));
PU.forEach((c,i)=>{const s=S6[i],ph=(t*.6+i/6)%1;c.setAttribute('cx',(720+(s[0]-720)*ph).toFixed(1));c.setAttribute('cy',(500+(s[1]-500)*ph).toFixed(1));c.setAttribute('opacity',u>=TM.network+.6?1:0)});
rise($('focus6'),p(u,TM.network+4.2,TM.network+4.8)); rise($('fly'),p(u,TM.network+4.2,TM.network+4.8));
$('wheel').setAttribute('transform','rotate('+((t*20+Math.max(0,u-TM.rocket)*160)%360).toFixed(1)+' 1300 480)');
rise($('boost'),p(u,TM.rocket,TM.rocket+.5));

rise($('lane'),p(u,TM.web,TM.web+.5));
RV.forEach((c,i)=>c.setAttribute('cx',(160+((t*320+i*236)%1160)).toFixed(1)));
[0,1.5,3.5].forEach((d,i)=>rise($('b7'+i),p(u,TM.steps+d,TM.steps+d+.5)));
const k1=p(u,TM.steps+1.5,TM.steps+2.5),k2=p(u,TM.steps+5,TM.steps+6);
$('walker').setAttribute('transform','translate('+(380+360*(k1+k2)).toFixed(1)+' '+(568-100*(k1+k2)-3*Math.abs(Math.sin(t*5))).toFixed(1)+')');
$('walker').setAttribute('opacity',p(u,TM.steps,TM.steps+.5));
rise($('fast7'),p(u,TM.steps+5,TM.steps+5.6));

rise($('card8'),p(u,TM.pen,TM.pen+.5));
const x8=1262+160*p(u,TM.pen+.8,TM.pen+2);
$('st8').setAttribute('x2',x8.toFixed(1)); $('pen8').setAttribute('transform','translate('+x8.toFixed(1)+' 215)');
rise($('qa'),p(u,TM.pen+.2,TM.pen+.7)); rise($('qb'),p(u,TM.pen+.6,TM.pen+1.1)); rise($('qc'),p(u,TM.pen+1,TM.pen+1.5));
rise($('lab8'),p(u,TM.pen+3,TM.pen+3.6));