spin($('tsw'),1330,480,t*50,.2+.8*p(u,TM.title_storm,TM.title_storm+1.5));
$('tflag').setAttribute('opacity',(1-.75*p(u,TM.title_storm+3,TM.title_storm+7)).toFixed(2));

rise($('ldr'),p(u,TM.leader,TM.leader+.5)); rise($('scr'),p(u,TM.slides,TM.slides+.5)); rise($('aud'),p(u,TM.slides+.6,TM.slides+1.1));
$('spk').setAttribute('opacity',(p(u,TM.slides+1.2,TM.slides+1.6)*(1-p(u,TM.calendar,TM.calendar+.6))*(.6+.4*Math.sin(t*6))).toFixed(2));
$('scrin').setAttribute('opacity',(1-.7*p(u,TM.calendar,TM.calendar+.8)).toFixed(2)); rise($('cal'),p(u,TM.calendar,TM.calendar+.5));

ENV.forEach((e,i)=>rise(e,p(u,TM.inbox+i*.5,TM.inbox+i*.5+.3)));
rise($('flat'),p(u,TM.inbox+5,TM.inbox+5.6));
WK.forEach((w,i)=>rise(w,p(u,TM.fading_goal+i*1.1,TM.fading_goal+i*1.1+.5)));

FN.forEach((e,i)=>{const a=TM.whirlwind+(7-i)*.1;e.setAttribute('cx',(520+22*Math.sin(t*2.6+i*.8)*(1-i/9)).toFixed(1));e.setAttribute('opacity',p(u,a,a+.4).toFixed(2))});
rise($('wwl'),p(u,TM.whirlwind+.8,TM.whirlwind+1.3)); rise($('gearw'),p(u,TM.gears,TM.gears+.5));
GR.forEach((g,i)=>spin(g[0],g[1],g[2],(i?-1.4:1)*t*40));
[0,1].forEach(i=>{const a=TM.gears+5.4+i*.6,k=p(u,a+.8,a+2.6);rise($('tok'+i),p(u,a,a+.4));
  $('tm'+i).setAttribute('transform','translate('+(-760*k).toFixed(1)+' '+(-(15+i*100)*k).toFixed(1)+')');$('tm'+i).setAttribute('opacity',(1-k).toFixed(2))});

rise($('bellg'),p(u,TM.urgent_bell,TM.urgent_bell+.5));
spin($('bellr'),400,342,u>=TM.urgent_bell?8*Math.sin(t*14):0);
$('bwv').setAttribute('opacity',(.5+.5*Math.sin(t*10)).toFixed(2));
rise($('vs'),p(u,TM.seedling-.4,TM.seedling)); rise($('seedg'),p(u,TM.seedling,TM.seedling+.5));
spin($('seedi'),1100,560,3*Math.sin(t*1.5)); $('seedi').setAttribute('opacity',(1-.6*p(u,TM.seedling+10,TM.seedling+11)).toFixed(2));
rise($('win'),p(u,TM.seedling+10,TM.seedling+10.6));

rise($('shop'),p(u,TM.shop_front,TM.shop_front+.5));
$('bulb').setAttribute('r',(22+(u>=TM.shop_front+3?4*Math.sin(t*4):0)).toFixed(1));
rise($('bal'),p(u,TM.balance,TM.balance+.5));
ORB.forEach((o,i)=>{const a=t*1.2+i*Math.PI/3;o.setAttribute('cx',(1120+300*Math.cos(a)).toFixed(1));o.setAttribute('cy',(490+110*Math.sin(a)).toFixed(1))});
rise($('mid'),p(u,TM.balance+2,TM.balance+2.6));

rise($('pnl0'),p(u,TM.pen,TM.pen+.5)); $('sig').setAttribute('stroke-dashoffset',(1-p(u,TM.pen+1.5,TM.pen+3.5)).toFixed(3));
rise($('done'),p(u,TM.pen+7,TM.pen+7.5)); rise($('money'),p(u,TM.pen+7.3,TM.pen+7.9));
rise($('pnl1'),p(u,TM.crowd,TM.crowd+.5)); const sw=p(u,TM.crowd+4.1,TM.crowd+5);
PP.forEach((g,i)=>g.setAttribute('opacity',(p(u,TM.crowd+.3+i*.1,TM.crowd+.6+i*.1)*(1-.75*sw)).toFixed(2)));
rise($('swal'),sw); spin(SWL,SWC[0],SWC[1],t*60); rise($('swtx'),p(u,TM.crowd+4.6,TM.crowd+5.2));

const bf=TM.blame_finger; rise($('fing'),p(u,bf,bf+.5)); rise($('vic'),p(u,bf,bf+.5));
[0,1].forEach(i=>{rise($('tag'+i),p(u,bf+.8+i*.8,bf+1.3+i*.8));const sk=p(u,bf+5.4+i*.3,bf+6+i*.3);
  $('st'+i).setAttribute('x2',(STX[i][0]+(STX[i][1]-STX[i][0])*sk).toFixed(1));
  $('lt'+i).style.fill=sk>.5?'var(--muted)':'var(--loss)'; rise($('x'+i),p(u,bf+5.6+i*.3,bf+6.1+i*.3))});
rise($('cul'),p(u,bf+6,bf+6.6));
const wl=p(u,bf+9.5,bf+11.5); let wd=''; if(wl>0){const yl=700-220*wl; wd='M660 700'; for(let x=660;x<=940;x+=20)wd+='L'+x+' '+(yl+8*Math.sin(x/30+t*3)).toFixed(1); wd+='L940 700Z'}
$('wave').setAttribute('d',wd); rise($('wvl'),wl);
rise($('mag'),p(u,TM.magnifier,TM.magnifier+.5)); const mg=p(u,TM.magnifier+.3,TM.magnifier+1.5);
$('magi').setAttribute('transform','translate('+(1260-330*mg+6*Math.sin(t*2)).toFixed(1)+' '+(700-80*mg).toFixed(1)+')');
rise($('seetx'),p(u,TM.magnifier+1,TM.magnifier+1.6));

rise($('sw'),p(u,TM.stopwatch,TM.stopwatch+.5));
const f=.7*p(u,TM.stopwatch+.5,TM.stopwatch+3.5), an=f*2*Math.PI;
$('swedge').setAttribute('d',f>0?'M1340 230V170A60 60 0 '+(an>Math.PI?1:0)+' 1 '+(1340+60*Math.sin(an)).toFixed(1)+' '+(230-60*Math.cos(an)).toFixed(1)+'Z':'');
$('shand').setAttribute('d','M1340 230L'+(1340+52*Math.sin(t*2)).toFixed(1)+' '+(230-52*Math.cos(t*2)).toFixed(1));
rise($('q0'),p(u,TM.stopwatch,TM.stopwatch+.5)); rise($('q1'),p(u,TM.stopwatch+.4,TM.stopwatch+.9));
rise($('q2'),p(u,TM.stopwatch+4.6,TM.stopwatch+5.1)); rise($('q3'),p(u,TM.stopwatch+5.2,TM.stopwatch+5.7));