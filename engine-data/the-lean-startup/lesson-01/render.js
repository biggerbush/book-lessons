rise($('tbox'),p(u,TM.perfect_ship,TM.perfect_ship+.6));
gh.forEach((g,i)=>{const a=TM.empty_store+i*.3;rise(g,p(u,a,a+.5))});
rise($('tnone'),p(u,TM.empty_store+1,TM.empty_store+1.5));

rise($('ries'),p(u,TM.eric_ries,TM.eric_ries+.5));
$('rarc').setAttribute('opacity',p(u,TM.team_huddle,TM.team_huddle+.5));
rise($('team'),p(u,TM.team_huddle,TM.team_huddle+.6));
qms.forEach((e,i)=>{const a=TM.uncertainty+i*.25;e.setAttribute('opacity',p(u,a,a+.4));e.setAttribute('transform','translate(0 '+(6*Math.sin(t*1.5+i)).toFixed(1)+')')});
rise($('quote'),p(u,TM.uncertainty+1,TM.uncertainty+1.6));

rise($('gar'),p(u,TM.garage,TM.garage+.6));
rise($('tow'),p(u,TM.office_tower,TM.office_tower+.6));
$('floor').setAttribute('opacity',(p(u,TM.office_tower+.8,TM.office_tower+1.3)*(.75+.25*Math.sin(t*3))).toFixed(2));
rise($('notsize'),p(u,TM.office_tower+4.6,TM.office_tower+5.2));

[TM.business_plan,TM.factory,TM.crystal_ball].forEach((a,i)=>rise($('pp'+i),p(u,a,a+.6)));
$('ballq').setAttribute('fill-opacity',(.55+.45*Math.sin(t*2)).toFixed(2));
rise($('fbot'),p(u,TM.crystal_ball+1.5,TM.crystal_ball+2.1));

rise($('chk'),p(u,TM.checklist,TM.checklist+.5));
ticks.forEach((k,i)=>{const a=TM.checklist+1.8+i*.6;k.setAttribute('opacity',p(u,a,a+.3))});
rise($('plant'),p(u,TM.checklist+.5,TM.checklist+1));
const ak=p(u,TM.bullseye_miss,TM.bullseye_miss+.7);
$('arrow').setAttribute('transform','translate('+(780+170*ak).toFixed(1)+' 470)');$('arrow').setAttribute('opacity',u>=TM.bullseye_miss?1:0);
rise($('realt'),p(u,TM.bullseye_miss+1.2,TM.bullseye_miss+1.8));
core.setAttribute('r',(24+4*Math.sin(t*3)).toFixed(1));
rise($('achv'),p(u,TM.bullseye_miss+2,TM.bullseye_miss+2.6));

rise($('win'),p(u,TM.imvu_logo,TM.imvu_logo+.6));
nets.forEach((g,i)=>{const a=TM.im_networks+i*.4;rise(g,p(u,a,a+.4));wires[i].setAttribute('opacity',p(u,a,a+.4));wires[i].setAttribute('stroke',u>=TM.code_hours+i*.8?'var(--gain)':'var(--line)')});
rise($('code'),p(u,TM.code_hours,TM.code_hours+.4));
segs.forEach((s,i)=>{const a=TM.code_hours+.3+i*.3;s.setAttribute('opacity',p(u,a,a+.25))});
rise($('codel'),p(u,TM.code_hours+1,TM.code_hours+1.6));

// scene 6
rise($('cust'),p(u,TM.user_test,TM.user_test+.5));
rise($('card'),p(u,TM.user_test+.8,TM.user_test+1.3));
$('xno').setAttribute('opacity',p(u,TM.friends_no+.5,TM.friends_no+.9));
const c6=p(u,TM.trash_bin-.6,TM.trash_bin-.1);
const lastDrop=TM.trash_bin+.5+(pile.length-1)*.3+.7;
// the emptied ADD-ON CODE box fades away once its last line lands in the bin
rise($('code6'),c6*(1-p(u,lastDrop-.2,lastDrop+.4)));
rise($('bin'),p(u,TM.trash_bin-.3,TM.trash_bin+.2));
rise($('lid'),p(u,TM.trash_bin-.3,TM.trash_bin+.2));
const lidA=32*(p(u,TM.trash_bin+.2,TM.trash_bin+.6)-p(u,lastDrop,lastDrop+.4));
$('lidr').setAttribute('transform','rotate('+(-lidA).toFixed(1)+' 900 431)');
pile.forEach((q,i)=>{const a=TM.trash_bin+.5+i*.3,k=p(u,a,a+.7);
  const x=q.sx+(q.ex-q.sx)*k,y=q.sy+(q.ey-q.sy)*k-120*Math.sin(Math.PI*k);
  q.g.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+') rotate('+(q.rt*k).toFixed(1)+')');
  q.g.setAttribute('opacity',c6.toFixed(2))});
rise($('ok1'),p(u,TM.trash_bin+6.6,TM.trash_bin+7.2));
rise($('ok2'),p(u,TM.trash_bin+9.2,TM.trash_bin+9.8));

rise($('bulb'),p(u,TM.lightbulb,TM.lightbulb+.6));
$('rays').setAttribute('opacity',(.6+.4*Math.sin(t*3)).toFixed(2));
rise($('plan'),p(u,TM.question_mark,TM.question_mark+.5));
tags.forEach((g,i)=>{const on=u>=TM.question_mark+1+i*.5;g[0].setAttribute('fill',on?'var(--gain)':'var(--stage)');g[0].setAttribute('stroke',on?'var(--gain)':'var(--loss)');g[1].textContent=on?'GUESS?':'ORDER';g[1].style.fill=on?'var(--on-gain)':'var(--loss)'});
$('arw2').setAttribute('opacity',p(u,TM.real_people+.3,TM.real_people+.7));
rise($('ppl'),p(u,TM.real_people,TM.real_people+.5));
chks.forEach((c,i)=>{const a=TM.real_people+1+i*.4;c.setAttribute('opacity',p(u,a,a+.3))});
rise($('tbot'),p(u,TM.real_people+2,TM.real_people+2.6));

$('sticky').setAttribute('opacity',p(u,TM.sticky_note,TM.sticky_note+.5));
sl.forEach((l,i)=>{const a=TM.sticky_note+1+i*.8;l.setAttribute('opacity',p(u,a,a+.4))});
rise($('lbl8'),p(u,TM.sticky_note+.4,TM.sticky_note+1));
rise($('qa'),p(u,TM.sticky_note+6.2,TM.sticky_note+6.7));rise($('qb'),p(u,TM.sticky_note+6.6,TM.sticky_note+7.1));rise($('qc'),p(u,TM.sticky_note+7,TM.sticky_note+7.5));