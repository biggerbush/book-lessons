const al=p(u,TM.brain_alarm,TM.brain_alarm+.5);rise($('alarm'),al);
$('bell').setAttribute('transform','rotate('+(10*Math.sin(t*14)*Math.max(0,Math.sin(t*1.6))).toFixed(1)+' 1420 250)');
const rk=(t%1.4)/1.4;$('ring').setAttribute('r',(38+24*rk).toFixed(1));$('ring').setAttribute('opacity',(1-rk).toFixed(2));
$('bolt').setAttribute('opacity',(.55+.45*Math.abs(Math.sin(t*5))).toFixed(2));

rise($('la'),p(u,TM.two_lines,TM.two_lines+.5));rise($('lb'),p(u,TM.two_lines+.4,TM.two_lines+.9));
rise($('fa'),p(u,TM.fins_out,TM.fins_out+.5));rise($('fb'),p(u,TM.fins_out+.6,TM.fins_out+1.1));
rise($('lookA'),p(u,TM.fins_out+3.6,TM.fins_out+4.1));rise($('lookB'),p(u,TM.fins_out+4,TM.fins_out+4.5));
const rl=p(u,TM.ruler,TM.ruler+1);rise($('rul'),rl);$('rulIn').setAttribute('transform','translate('+(-300*(1-rl)).toFixed(1)+' 0)');
$('guides').setAttribute('opacity',p(u,TM.ruler+1,TM.ruler+1.5));rise($('eq'),p(u,TM.ruler+1.5,TM.ruler+2));

rise($('eye'),p(u,TM.eye_open,TM.eye_open+.5));
const bk=t%3.2,sy=Math.max(.08,bk<.2?Math.abs(1-bk/.1):1);$('lid').setAttribute('transform','translate(0 '+(390*(1-sy)).toFixed(1)+') scale(1 '+sy.toFixed(3)+')');
rise($('note'),p(u,TM.thought_note,TM.thought_note+.5));rise($('know'),p(u,TM.thought_note+1.5,TM.thought_note+2));

rise($('auth'),p(u,TM.author,TM.author+.5));
const g1=p(u,TM.author+2.5,TM.author+3.5);rise($('grp1'),p(u,TM.author+2.5,TM.author+3));bar('b0',200*g1);bar('b1',200*p(u,TM.author+3.5,TM.author+4.5));
rise($('grp2'),p(u,TM.warning_sign,TM.warning_sign+.5));bar('b3',200+200*p(u,TM.warning_sign+.4,TM.warning_sign+1.6));
rise($('warn'),p(u,TM.warning_sign+1.4,TM.warning_sign+1.9));

rise($('mines'),p(u,TM.minefield,TM.minefield+.6));rise($('walker'),p(u,TM.minefield,TM.minefield+.5));
const wp=p(u,TM.minefield+.5,TM.stop_sign),mv=wp>0&&wp<1?Math.abs(Math.sin(t*8))*6:0;
$('wIn').setAttribute('transform','translate('+(200+380*wp).toFixed(1)+' '+(-mv).toFixed(1)+')');
rise($('sign'),p(u,TM.stop_sign,TM.stop_sign+.5));
BM.forEach((g,i)=>{const a=TM.big_choice+i*1.5;rise(g,p(u,a,a+.4))});
rise($('pause'),p(u,TM.big_choice+6,TM.big_choice+6.5));

rise($('dec'),p(u,TM.friend,TM.friend+.5));rise($('obs'),p(u,TM.friend+.8,TM.friend+1.3));
TH.forEach((c,i)=>{const a=t*(1.6+i*.3)+i;c.setAttribute('cx',(440+70*Math.cos(a)).toFixed(1));c.setAttribute('cy',(320+50*Math.sin(a)).toFixed(1))});
$('sight').setAttribute('opacity',p(u,TM.friend+2,TM.friend+2.6));rise($('mark'),p(u,TM.friend+2.6,TM.friend+3));
rise($('lab1'),p(u,TM.observer,TM.observer+.5));rise($('lab2'),p(u,TM.observer+1.5,TM.observer+2));
$('halo').setAttribute('opacity',(u>=TM.observer+1.5?.5+.5*Math.sin(t*2):0).toFixed(2));

rise($('bld'),p(u,TM.office,TM.office+.5));rise($('slowl'),p(u,TM.office+3.6,TM.office+4.1));
rise($('chk'),p(u,TM.checklist-.6,TM.checklist));rise($('ar2'),p(u,TM.checklist+.2,TM.checklist+.7));
TK.forEach((k,i)=>{const a=TM.checklist+.6+i*.5;k.setAttribute('opacity',p(u,a,a+.3))});
const dn=u>=TM.checklist+3.4;$('dbox').setAttribute('fill',dn?'var(--gain)':'var(--stage)');$('dtx').style.fill=dn?'var(--on-gain)':'var(--muted)';

rise($('cool'),p(u,TM.water_cooler,TM.water_cooler+.5));rise($('chat'),p(u,TM.water_cooler+1,TM.water_cooler+1.5));
rise($('tag'),p(u,TM.label_tags,TM.label_tags+.5));rise($('namet'),p(u,TM.label_tags+2,TM.label_tags+2.5));
rise($('say'),p(u,TM.colleague,TM.colleague+.5));

rise($('ql'),p(u,TM.question,TM.question+.5));rise($('qsign'),p(u,TM.question+.5,TM.question+1));
$('qsIn').setAttribute('transform','rotate('+(3*Math.sin(t*2)).toFixed(2)+' 1340 720)');
rise($('qa'),p(u,TM.question+3.8,TM.question+4.3));rise($('qb'),p(u,TM.question+4.2,TM.question+4.7));rise($('qc'),p(u,TM.question+4.6,TM.question+5.1));