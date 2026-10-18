C0.forEach((g,i)=>{const a=TM.mirror+i*.4;rise(g,p(u,a,a+.4)*(1-.6*p(u,TM.mirror+4,TM.mirror+4.6)))});
rise($('mir'),p(u,TM.mirror+1.6,TM.mirror+2.2));rise($('me'),p(u,TM.mirror+4.2,TM.mirror+4.8));
$('glint').setAttribute('opacity',(.4+.4*Math.sin(t*2)).toFixed(2));

rise($('spk'),p(u,TM.speech_bubble,TM.speech_bubble+.5));rise($('bub1'),p(u,TM.speech_bubble+.4,TM.speech_bubble+.9));
rise($('tgt'),p(u,TM.target,TM.target+.5));rise($('lis'),p(u,TM.target+.2,TM.target+.7));
fly($('dart1'),590,320,1000,480,120,p(u,TM.target+.6,TM.target+1.6),u>=TM.target+.6);
fly($('dart2'),590,320,1130,650,140,p(u,TM.shrug+1.2,TM.shrug+2.2),u>=TM.shrug+1.2);
rise($('said'),p(u,TM.shrug,TM.shrug+.5));$('strk').setAttribute('x2',(112+590*p(u,TM.shrug+2.6,TM.shrug+3.3)).toFixed(1));
rise($('qm'),p(u,TM.shrug+3.8,TM.shrug+4.3));rise($('unfin'),p(u,TM.shrug+3.8,TM.shrug+4.4));

rise($('selfp'),p(u,TM.self_portrait,TM.self_portrait+.5));rise($('blend'),p(u,TM.color_blend,TM.color_blend+.4));
segs.forEach((s,i)=>{const k=p(u,TM.color_blend+i*.3,TM.color_blend+i*.3+.6);s[0].setAttribute('width',(s[2]*k).toFixed(1));s[1].setAttribute('opacity',k)});
rise($('lead'),p(u,TM.color_blend+2,TM.color_blend+2.5));rise($('spot'),p(u,TM.spotlight,TM.spotlight+.5));rise($('shape'),p(u,TM.spotlight+.4,TM.spotlight+1));

[TM.red_clock,TM.yellow_mouth,TM.green_shield,TM.blue_lens].forEach((a,i)=>rise($('k'+i),p(u,a,a+.5)));
$('hand').setAttribute('transform','rotate('+((t*240)%360).toFixed(1)+' 275 360)');
$('mth').setAttribute('opacity',(.5+.5*Math.abs(Math.sin(t*4))).toFixed(2));
$('lensg').setAttribute('transform','translate('+(10*Math.sin(t*1.5)).toFixed(1)+' 0)');
const ov=u>=TM.blue_lens+3.8;cards.forEach(r=>r.setAttribute('stroke',ov?'var(--loss)':'var(--line)'));rise($('over'),p(u,TM.blue_lens+3.8,TM.blue_lens+4.4));

rise($('idea'),p(u,TM.proposal,TM.proposal+.5));rise($('pr'),p(u,TM.red_person,TM.red_person+.5));rise($('pb'),p(u,TM.blue_person,TM.blue_person+.5));
rise($('same'),p(u,TM.blue_person+4.6,TM.blue_person+5.2));rise($('pack'),p(u,TM.blue_person+6.7,TM.blue_person+7.3));
const pl=u>=TM.blue_person+4.6?4*Math.abs(Math.sin(t*3)):0;['bR','bB'].forEach(id=>$(id).setAttribute('r',(24+pl).toFixed(1)));
const pg=u>=TM.blue_person+6.7?'var(--gain)':'var(--ink)';$('pkR').setAttribute('stroke',pg);$('pkB').setAttribute('stroke',pg);

rise($('mask'),p(u,TM.costume,TM.costume+.5));rise($('xx'),p(u,TM.costume+1.5,TM.costume+2));rise($('mixer'),p(u,TM.dial,TM.dial+.5));
const amp=p(u,TM.dial+.5,TM.dial+1.5);knobs.forEach((k,i)=>{if(i)k.setAttribute('y',(443+amp*120*Math.sin(t*1.6+i*1.9)).toFixed(1))});
rise($('stay'),p(u,TM.dial+5,TM.dial+5.5));rise($('shift'),p(u,TM.dial+5.4,TM.dial+5.9));

rise($('axX'),p(u,TM.pace_meter,TM.pace_meter+.5));rise($('axY'),p(u,TM.task_people,TM.task_people+.5));
const px=p(u,TM.pace_meter+3.7,TM.pace_meter+4.7),py=p(u,TM.task_people+.5,TM.task_people+1.5),wb=p(u,TM.pace_meter+.5,TM.pace_meter+1.5)*(1-px);
$('who').setAttribute('cx',(720+220*px+120*wb*Math.sin(t*2)).toFixed(1));$('who').setAttribute('cy',(480-150*py).toFixed(1));$('who').setAttribute('opacity',p(u,TM.pace_meter+.3,TM.pace_meter+.8));
rise($('quads'),p(u,TM.task_people+4.2,TM.task_people+4.8));rise($('clue'),p(u,TM.task_people+4.4,TM.task_people+5));rise($('guide'),p(u,TM.guidebook,TM.guidebook+.6));

rise($('bat'),p(u,TM.battery,TM.battery+.5));const dr=p(u,TM.battery+1,TM.battery+3);
$('lvl').setAttribute('width',(228*(1-.8*dr)).toFixed(1));$('lvl').setAttribute('fill',dr<.6?'var(--gain)':'var(--loss)');
rise($('cloud'),p(u,TM.storm_cloud,TM.storm_cloud+.5));$('bolt').setAttribute('opacity',Math.sin(t*5)>0?1:.3);
rise($('bowl'),p(u,TM.storm_cloud+.2,TM.storm_cloud+.7));
const s=.9-.4*p(u,TM.storm_cloud+.8,TM.storm_cloud+2.6)+.35*p(u,TM.pause_button+.5,TM.pause_button+1.5),q=1-s;
$('ball').setAttribute('cx',(q*q*560+2*q*s*800+s*s*1040).toFixed(1));$('ball').setAttribute('cy',(q*q*520+2*q*s*820+s*s*520-24).toFixed(1));$('ball').setAttribute('opacity',p(u,TM.storm_cloud+.2,TM.storm_cloud+.7));
rise($('helps'),p(u,TM.storm_cloud+4.6,TM.storm_cloud+5.2));rise($('pz'),p(u,TM.pause_button,TM.pause_button+.5));

rise($('phone'),p(u,TM.phone,TM.phone+.5));rise($('qa'),p(u,TM.phone+.2,TM.phone+.7));rise($('qb'),p(u,TM.phone+3,TM.phone+3.5));rise($('qc'),p(u,TM.phone+3.6,TM.phone+4.1));