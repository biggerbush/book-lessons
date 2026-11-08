rise($('grid'),p(u,TM.title_card,TM.title_card+.6));
ODD.setAttribute('cy',(410-34*Math.abs(Math.sin(t*2.4))*p(u,TM.title_card+4.6,TM.title_card+5.4)).toFixed(1));

rise($('brn'),p(u,TM.brain,TM.brain+.5));
$('pat').style.strokeDashoffset=(1.02*(1-p(u,TM.brain+.6,TM.routine+1.5))).toFixed(3);
rise($('zz'),p(u,TM.routine,TM.routine+.5)*(1-p(u,TM.alarm_bell,TM.alarm_bell+.3)));
rise($('rt'),p(u,TM.routine+.6,TM.routine+1.1));
const al=p(u,TM.alarm_bell,TM.alarm_bell+.6);
$('spk').style.strokeDashoffset=(1.02*(1-al)).toFixed(3);
$('brp').style.fill=u>=TM.alarm_bell?'var(--gain)':'var(--stage)';
$('brs').setAttribute('opacity',(al*(.6+.4*Math.sin(t*6))).toFixed(2));
rise($('snap'),p(u,TM.alarm_bell+.8,TM.alarm_bell+1.4));

rise($('qm'),p(u,TM.question_mark,TM.question_mark+.5));
$('qr').setAttribute('opacity',(.5+.5*Math.sin(t*5)).toFixed(2));
const lf=p(u,TM.eyebrows,TM.eyebrows+.6);
['br0','br1'].forEach(k=>$(k).setAttribute('transform','translate(0 '+(-30*lf).toFixed(1)+')'));
['ey0','ey1'].forEach(k=>$(k).setAttribute('r',(14+14*lf).toFixed(1)));
$('mo').setAttribute('r',(12+18*lf).toFixed(1));
[0,1,2].forEach(i=>{const a=TM.eyebrows+i*1.4;rise($('eb'+i),p(u,a,a+.5))});
rise($('teach'),p(u,TM.eyebrows+6.2,TM.eyebrows+6.8));

rise($('np'),p(u,TM.notepad,TM.notepad+.5));
[0,1,2].forEach(i=>{const a=TM.fact_list+i*1.8;rise($('f'+i),p(u,a,a+.5))});
$('fx').setAttribute('opacity',(1-.55*p(u,TM.headline,TM.headline+.6)).toFixed(2));
rise($('stu'),p(u,TM.students,TM.students+.5)); rise($('sum'),p(u,TM.students+.6,TM.students+1.1));
ST.forEach(c=>c.setAttribute('class',u>=TM.headline+.4?'gain':'ink'));
rise($('hl'),p(u,TM.headline,TM.headline+.6));

rise($('lp'),p(u,TM.lightbulb,TM.lightbulb+.5));
$('rays').setAttribute('opacity',(.5+.5*Math.sin(t*4)).toFixed(2));
rise($('tg'),p(u,TM.lightbulb+2.5,TM.lightbulb+3));
rise($('rp'),p(u,TM.gimmick,TM.gimmick+.5));
GA.forEach((g,i)=>g.setAttribute('transform','rotate('+(14*Math.sin(t*3+i*1.7)).toFixed(1)+' 1160 420)'));
rise($('cf'),p(u,TM.gimmick+5,TM.gimmick+5.6));

rise($('bar'),p(u,TM.gap,TM.gap+.6));
$('gp').style.strokeDashoffset=(-t*24).toFixed(1);
rise($('sci'),p(u,TM.scientist,TM.scientist+.5));
$('itc').setAttribute('opacity',p(u,TM.itch,TM.itch+.4));
IT.forEach((q,i)=>q.setAttribute('transform','translate('+(3*Math.sin(t*14+i*2)).toFixed(1)+' '+(3*Math.cos(t*11+i)).toFixed(1)+')'));
rise($('itx'),p(u,TM.itch+.3,TM.itch+.9));

rise($('sat'),p(u,TM.saturn,TM.saturn+.6));
rise($('det'),p(u,TM.detective,TM.detective+.5));
$('mag').setAttribute('transform','translate('+(560+50*Math.sin(t*.7)).toFixed(1)+' '+(440+30*Math.sin(t*1.1)).toFixed(1)+')');
[0,1,2].forEach(i=>{const a=TM.detective+5+i*.8;rise($('cd'+i),p(u,a,a+.5))});
const dk=p(u,TM.dust,TM.dust+.8),cs=Math.cos(-.244),sn=Math.sin(-.244);
DU.forEach(([c,a0,rr])=>{const a=a0+t*.15,x=270*rr*Math.cos(a),y=70*rr*Math.sin(a);c.setAttribute('cx',(400+x*cs-y*sn).toFixed(1));c.setAttribute('cy',(500+x*sn+y*cs).toFixed(1))});
$('dst').setAttribute('opacity',dk); $('rng').setAttribute('opacity',(1-.7*dk).toFixed(2));
rise($('ans'),p(u,TM.dust+.3,TM.dust+.9));

rise($('usual'),p(u,TM.map,TM.map+.6));
rise($('dor'),p(u,TM.open_door,TM.open_door+.5));
const dsw=p(u,TM.open_door+.5,TM.open_door+1.5);
$('dp').setAttribute('transform','translate(124 0) scale('+(1-.85*dsw).toFixed(3)+' 1) translate(-124 0)');
rise($('slt'),p(u,TM.open_door+.8,TM.open_door+1.3));
[0,1,2].forEach(i=>{const a=TM.puzzle+i*1.6;rise($('pz'+i),p(u,a,a+.5))});
PC.forEach((r,i)=>{const k=p(u,TM.key+i*.7,TM.key+i*.7+.5);r.setAttribute('opacity',k);r.setAttribute('transform','translate(0 '+(-60*(1-k)).toFixed(1)+')')});
$('sq').setAttribute('opacity',(1-p(u,TM.key,TM.key+2.6)).toFixed(2));
rise($('fil'),p(u,TM.key+.3,TM.key+.9));

rise($('qa'),p(u,TM.mirror,TM.mirror+.5)); rise($('qb'),p(u,TM.mirror+.4,TM.mirror+.9)); rise($('qc'),p(u,TM.mirror+.8,TM.mirror+1.3));
rise($('hkm'),p(u,TM.hook_sign,TM.hook_sign+.5)); rise($('hk'),p(u,TM.hook_sign+.3,TM.hook_sign+.8));
$('ln').setAttribute('transform','rotate('+(10+5*Math.sin(t*2)).toFixed(1)+' 1160 750)');