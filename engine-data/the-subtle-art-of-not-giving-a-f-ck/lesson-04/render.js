const a0=TM.title_ruler;
rise($('tA'),p(u,a0,a0+.6));rise($('tB'),p(u,a0+.5,a0+1.1));rise($('tR'),p(u,a0+6.4,a0+7));
cA.setAttribute('transform','translate(0 '+(-5*Math.abs(Math.sin(t*2))).toFixed(1)+')');cB.setAttribute('transform','translate(0 '+(5*Math.abs(Math.sin(t*2))).toFixed(1)+')');

rise($('band'),p(u,TM.young_dave,TM.young_dave+.5));rise($('daveW'),p(u,TM.young_dave+.4,TM.young_dave+.9));
$('dave').setAttribute('transform','translate('+(410*p(u,TM.exit_door,TM.exit_door+1.6)).toFixed(1)+' 0)');
const da=(80*(1-p(u,TM.exit_door+1.6,TM.exit_door+2.3)))*Math.PI/180;
$('door').setAttribute('x2',(900+260*Math.sin(da)).toFixed(1));$('door').setAttribute('y2',(640-260*Math.cos(da)).toFixed(1));
rise($('hurt'),p(u,TM.exit_door+5,TM.exit_door+5.6));

rise($('mband'),p(u,TM.new_band,TM.new_band+.5));
RC.forEach((r,i)=>rise(r,p(u,TM.record_stack+i*.15,TM.record_stack+i*.15+.3)));rise($('recL'),p(u,TM.record_stack,TM.record_stack+.5));
CR.forEach((c,i)=>{const a=TM.stage_crowd+(i%12)*.05;c.setAttribute('opacity',p(u,a,a+.4).toFixed(2));c.setAttribute('transform','translate(0 '+(-Math.abs(Math.sin(t*4+i*.7))*8).toFixed(1)+')')});
rise($('made'),p(u,TM.stage_crowd+3.3,TM.stage_crowd+3.9));

const hB=480*p(u,TM.metallica_big,TM.metallica_big+1.5);$('barB').setAttribute('y',(760-hB).toFixed(1));$('barB').setAttribute('height',hB.toFixed(1));
rise($('lblB'),p(u,TM.metallica_big,TM.metallica_big+.5));rise($('sadD'),p(u,TM.sad_dave,TM.sad_dave+.6));rise($('gap'),p(u,TM.sad_dave+5,TM.sad_dave+5.6));

rise($('rul'),p(u,TM.ruler,TM.ruler+.6));rise($('L4'),p(u,TM.two_scales,TM.two_scales+.6));rise($('R4'),p(u,TM.pete_best,TM.pete_best+.6));
$('h4').setAttribute('transform','translate(1270 440) scale('+(1+.08*Math.pow(Math.abs(Math.sin(t*3)),4)).toFixed(3)+')');
rise($('love4'),p(u,TM.pete_best+9,TM.pete_best+9.6));

rise($('ctl'),p(u,TM.pleasure_icon,TM.pleasure_icon+.6));
CHP.forEach((c,i)=>{const a=i<4?TM.pleasure_icon+3+i*.9:TM.popularity,k=p(u,a,a+.4),b=TM.empty_hands+i*.2,d=p(u,b,b+1);
  c.setAttribute('opacity',k.toFixed(2));c.setAttribute('transform','translate('+(40*d).toFixed(1)+' '+(14*(1-k)).toFixed(1)+')')});
rise($('out'),p(u,TM.popularity+2.6,TM.popularity+3.2));rise($('hands'),p(u,TM.empty_hands,TM.empty_hands+.5));rise($('take'),p(u,TM.empty_hands+.6,TM.empty_hands+1.2));

[0,1,2].forEach(i=>rise($('g6_'+i),p(u,TM.good_list+i*1.2,TM.good_list+i*1.2+.5)));
$('stem').setAttribute('y2',(640-340*p(u,TM.honesty_seed,TM.honesty_seed+2.5)).toFixed(1));
LV.forEach((l,i)=>rise(l,p(u,TM.honesty_seed+.4+i*.6,TM.honesty_seed+.9+i*.6)));
rise($('today'),p(u,TM.small_win,TM.small_win+.5));rise($('succ'),p(u,TM.small_win+3.8,TM.small_win+4.4));

const q0=SC[7][0]/K;
rise($('qa'),p(u,q0+.3,q0+.8));rise($('qb'),p(u,q0+.7,q0+1.2));rise($('qc'),p(u,q0+1.1,q0+1.6));rise($('paper'),p(u,q0+1.4,q0+2));
const wk=p(u,TM.pen_paper+.3,TM.pen_paper+2.3);$('wline').setAttribute('stroke-dashoffset',(1-wk).toFixed(3));
$('pencil').setAttribute('opacity',p(u,TM.pen_paper,TM.pen_paper+.4).toFixed(2));
$('pencil').setAttribute('transform','translate('+(1260+150*wk).toFixed(1)+' '+(392-12*Math.sin(wk*Math.PI*6)).toFixed(1)+')');
rise($('meas'),p(u,TM.pen_paper+.6,TM.pen_paper+1.2));