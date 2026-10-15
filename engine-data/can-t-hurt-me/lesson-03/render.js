$('shov').setAttribute('transform','rotate('+(4*Math.sin(t*1.6)).toFixed(2)+' 1300 600)');
rise($('hand'),p(u,TM.soft_hands,TM.soft_hands+.6));rise($('blis'),p(u,TM.soft_hands+6.6,TM.soft_hands+7.2));

[TM.rope,TM.blister,TM.callus].forEach((a,i)=>rise(cards[i],p(u,a,a+.5)));
RP.forEach(r=>r.setAttribute('stroke-dashoffset',(-t*30).toFixed(1)));
rise($('mind1'),p(u,TM.callus+5.8,TM.callus+6.4));

rise($('couchG'),p(u,TM.couch,TM.couch+.6));
[0,2.2,4.4].forEach((d,i)=>rise($('it'+i),p(u,TM.alarm_clock+d,TM.alarm_clock+d+.5)));
rise($('brainG'),p(u,TM.soft_brain,TM.soft_brain+.5));$('brainP').setAttribute('d',blob(780,640,68,.06,t*2.5));
rise($('strG'),p(u,TM.soft_brain+1,TM.soft_brain+1.5));$('strug').setAttribute('r',(14+82*p(u,TM.soft_brain+1.5,TM.soft_brain+4)).toFixed(1));

rise($('yg'),p(u,TM.young_goggins,TM.young_goggins+.6));
rise($('dream'),p(u,TM.seal_trident,TM.seal_trident+.6));rise($('heavy'),p(u,TM.seal_trident+3,TM.seal_trident+3.5));
rise($('scl'),p(u,TM.scale,TM.scale+.6));
const ks=p(u,TM.scale+.8,TM.scale+3);$('ndl').setAttribute('transform','rotate('+(70-110*ks).toFixed(1)+' 1280 470)');
$('lbs').textContent=ks>0?'−'+Math.round(100*ks)+' LB':'~300 LB';

[TM.running_shoes,TM.pool,TM.textbook].forEach((a,i)=>{rise(PB[i][0],p(u,a,a+.5));rise($('ic'+i),p(u,a,a+.5));PB[i][1].setAttribute('width',(334*p(u,a+.8,a+4)).toFixed(1))});
$('shoe').setAttribute('transform','translate(0 '+(-14*Math.abs(Math.sin(t*5))).toFixed(1)+')');
$('wa').setAttribute('d',wv(660,940,440,8,t*3));$('wb').setAttribute('d',wv(660,940,480,8,t*3+2));
$('swh').setAttribute('cy',(420+4*Math.sin(t*3)).toFixed(1));$('swa').setAttribute('transform','rotate('+((t*120)%360).toFixed(1)+' 800 420)');
$('pen').setAttribute('transform','translate('+(1320+20*Math.sin(t*4)).toFixed(1)+' 470)');

rise($('cal'),p(u,TM.calendar-.3,TM.calendar+.2));
CELL.forEach((c,i)=>{const on=u>=TM.calendar+i*.12;c.setAttribute('fill',on?'var(--loss)':'var(--line)');c.setAttribute('fill-opacity',on?(1-i/34).toFixed(2):1)});
rise($('headG'),p(u,TM.calendar,TM.calendar+.6));rise($('arr5'),p(u,TM.shield,TM.shield+.5));
LY.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.shield+i*.5,TM.shield+i*.5+.4)));
$('brn').style.fill=u>=TM.shield?'var(--gain)':'var(--loss)';
rise($('hard5'),p(u,TM.shield+1.5,TM.shield+2));rise($('seal5'),p(u,TM.shield+4.6,TM.shield+5.1));

[TM.dishes,TM.made_bed,TM.stairs,TM.stairs+.8].forEach((a,i)=>rise(ST[i],p(u,a,a+.5)));
rise($('dish'),p(u,TM.dishes+.3,TM.dishes+.8));rise($('bed'),p(u,TM.made_bed+.3,TM.made_bed+.8));
const sv=p(u,TM.made_bed+.8,TM.made_bed+2)+2*p(u,TM.stairs+1.2,TM.stairs+4),sk=Math.min(Math.floor(sv),2),sf=sv-sk,sh=cl(sf/.3);
clim.setAttribute('transform','translate('+(420+340*(sk+ease(cl((sf-.2)/.8)))).toFixed(1)+' '+(720-120*(sk+ease(sh))-20*Math.sin(Math.PI*sh)).toFixed(1)+')');
clim.setAttribute('opacity',p(u,TM.dishes,TM.dishes+.5));

rise($('sign'),p(u,TM.signpost,TM.signpost+.6));
const wx=p(u,TM.signpost+3,TM.signpost+4);$('waitX').setAttribute('d','M140 480H'+(140+240*wx).toFixed(1));$('waitX').setAttribute('opacity',wx>0?1:0);
rise($('wheel'),p(u,TM.steering_wheel,TM.steering_wheel+.6));$('spk').setAttribute('transform','rotate('+(25*Math.sin(t*1.2)).toFixed(1)+' 800 470)');
rise($('lad'),p(u,TM.ladder,TM.ladder+.6));
const by=720-380*p(u,TM.ladder+.8,TM.ladder+4);$('base').setAttribute('transform','translate(0 '+by.toFixed(1)+')');
RG.forEach((c,i)=>c.setAttribute('opacity',by<710-i*60?1:0));rise($('norm'),p(u,TM.ladder+1,TM.ladder+1.6));

['qa','qb','qc'].forEach((id,i)=>rise($(id),p(u,TM.notebook+i*.4,TM.notebook+i*.4+.5)));
rise($('nbk'),p(u,TM.notebook+.6,TM.notebook+1.2));
[0,1,2].forEach(i=>rise($('nl'+i),p(u,TM.notebook+1.4+i*.6,TM.notebook+1.9+i*.6)));
rise($('chk'),p(u,TM.notebook+5.4,TM.notebook+5.9));