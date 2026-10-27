rise($('t_boxes'),p(u,TM.worried_man,TM.worried_man+.6));
TQ.forEach((q,i)=>q.setAttribute('transform','translate(0 '+(6*Math.sin(t*2+i*2)).toFixed(1)+')'));
TD.forEach((d,i)=>d.setAttribute('height',(220*p(u,TM.worried_man+6+i*.4,TM.worried_man+7+i*.4)).toFixed(1)));

rise($('st1'),p(u,TM.osler_young,TM.osler_young+.5));
const fd=1-.35*p(u,TM.small_task+1,TM.small_task+2);
rise($('far'),p(u,TM.osler_young+1,TM.osler_young+1.6)*fd);
$('sight').setAttribute('opacity',(p(u,TM.osler_young+1.5,TM.osler_young+2.2)*(1-.7*p(u,TM.small_task+1,TM.small_task+2))).toFixed(2));
$('sight').setAttribute('stroke-dashoffset',(-t*30).toFixed(1));
rise($('bk'),p(u,TM.book_page,TM.book_page+.5));
rise($('task'),p(u,TM.small_task,TM.small_task+.5));
rise($('msg'),p(u,TM.small_task+1.5,TM.small_task+2.1));

rise($('hab'),p(u,TM.hospital,TM.hospital+.5));
[TM.hospital,TM.oxford_gown,TM.oxford_gown+2].forEach((a,i)=>rise($('k'+i),p(u,a+.3,a+.8)));
const cr=TM.oxford_gown+4.6;
L2.forEach((l,i)=>l.setAttribute('opacity',p(u,cr+i*.2,cr+i*.2+.5)));
rise($('cred'),p(u,cr,cr+.6));

rise($('yale'),p(u,TM.yale_stage,TM.yale_stage+.5));
rise($('ship'),p(u,TM.ship,TM.ship+.6));
let wv='M380 600';for(let x=380;x<=1480;x+=20)wv+='L'+x+' '+(600+5*Math.sin(x/50+t*2)).toFixed(1);
$('wave3').setAttribute('d',wv);
rise($('btn'),p(u,TM.button,TM.button+.4));
const pr=u>=TM.button+1;$('btnc').setAttribute('class',pr?'gain':'loss');$('btnc').setAttribute('r',pr?24:30);
BH.forEach((l,k)=>l.setAttribute('y2',(440+200*p(u,TM.button+1+k*.12,TM.button+1.5+k*.12)).toFixed(1)));
const wh=120*p(u,TM.button+2.5,TM.button+4.5);$('wtr').setAttribute('y',(640-wh).toFixed(1));$('wtr').setAttribute('height',wh.toFixed(1));
rise($('seal'),p(u,TM.button+3,TM.button+3.6));

rise($('vs'),p(u,TM.mind_ship,TM.mind_ship+.6));
$('dp').setAttribute('height',(332*p(u,TM.door_past+.4,TM.door_past+1.3)).toFixed(1));
$('df').setAttribute('height',(332*p(u,TM.door_future+.4,TM.door_future+1.3)).toFixed(1));
$('glow').setAttribute('opacity',(.18*p(u,TM.door_future+1.5,TM.door_future+2.2)).toFixed(2));
rise($('sail'),p(u,TM.door_future+2,TM.door_future+2.6));

rise($('car'),p(u,TM.two_loads-.3,TM.two_loads+.2));
['yb','tb'].forEach((id,i)=>{const k=p(u,TM.two_loads+1+i*1.2,TM.two_loads+1.6+i*1.2);$(id).setAttribute('transform','translate(0 '+(-(1-k)*50).toFixed(1)+')');$(id).setAttribute('opacity',k)});
const st=p(u,TM.two_loads+6.1,TM.two_loads+6.8);
$('tilt').setAttribute('transform','rotate('+(st*(-7+4*Math.sin(t*3))).toFixed(2)+' 400 720)');
rise($('sky'),p(u,TM.sunset-.4,TM.sunset));
$('sun').setAttribute('cy',(450+150*p(u,TM.sunset,TM.sunset+5)).toFixed(1));
rise($('quote'),p(u,TM.sunset+.5,TM.sunset+1.1));

rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
CK.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.calendar+2.9+i*.3,TM.calendar+3.2+i*.3)));
rise($('brood'),p(u,TM.desk_work,TM.desk_work+.5));
$('scrib').setAttribute('transform','rotate('+(t*25%360).toFixed(1)+' 1120 400)');
rise($('prep0'),p(u,TM.desk_work+3.4,TM.desk_work+4));
rise($('prep1'),p(u,TM.desk_work+4.2,TM.desk_work+4.8));

rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
NB.forEach((r,k)=>{const w=p(u,TM.notebook+2.8+k*.8,TM.notebook+3.4+k*.8);r[0].setAttribute('stroke-dashoffset',(r[2]*(1-w)).toFixed(1));r[0].setAttribute('opacity',w>0?1:0);r[1].setAttribute('opacity',p(u,TM.closed_doors+7+k*.4,TM.closed_doors+7.3+k*.4))});
rise($('d7'),p(u,TM.closed_doors-.4,TM.closed_doors));
const sh=p(u,TM.closed_doors+2,TM.closed_doors+3);
[0,1].forEach(i=>{const k=p(u,TM.closed_doors+.3+i*.5,TM.closed_doors+.9+i*.5);$('wr'+i).setAttribute('opacity',(k*(1-sh)).toFixed(2));$('wr'+i).setAttribute('transform','translate('+(40*(1-k)-180*sh).toFixed(1)+' 0)')});
setDoor(D7,sh);
rise($('ret'),p(u,TM.closed_doors+7,TM.closed_doors+7.6));

rise($('qa'),p(u,TM.question,TM.question+.5));
rise($('qb'),p(u,TM.question+.4,TM.question+.9));
rise($('qc'),p(u,TM.question+.8,TM.question+1.3));
rise($('qdoor'),p(u,TM.question+.6,TM.question+1.2));
setDoor(D8,p(u,TM.question+1.6,TM.question+2.6));
rise($('qm'),p(u,TM.question+3.8,TM.question+4.4));