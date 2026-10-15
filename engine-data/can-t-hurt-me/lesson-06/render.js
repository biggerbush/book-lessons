const bk=p(u,TM.broken_bar,TM.broken_bar+.8);
$('bl').setAttribute('transform',`rotate(${(25*bk).toFixed(1)} 1180 320)`);
$('br').setAttribute('transform',`rotate(${(-25*bk).toFixed(1)} 1460 320)`);
$('spark').setAttribute('opacity',bk*(1-p(u,TM.broken_bar+1.2,TM.broken_bar+2)));
rise($('fwd'),p(u,TM.broken_bar+4.4,TM.broken_bar+5));

rise($('f1'),p(u,TM.goggins_bar,TM.goggins_bar+.5));
const d1=p(u,TM.clock+1.5,TM.clock+2.3);
P1(-50*Math.abs(Math.sin(t*2))*(1-d1)+260*d1).setAttribute('opacity',1-d1);
CR.forEach(([o,g],i)=>{rise(o,p(u,TM.crowd+i*.2,TM.crowd+i*.2+.4));g.setAttribute('transform',`translate(0 ${(-8*Math.abs(Math.sin(t*3+i))*(1-d1)).toFixed(1)})`)});
rise($('ck'),p(u,TM.clock,TM.clock+.5));
$('hand').setAttribute('transform',`rotate(${(1080*p(u,TM.clock,TM.clock+2.5)).toFixed(1)} 1150 370)`);
rise($('gave'),p(u,TM.clock+1.5,TM.clock+2.1));

const d2=p(u,TM.empty_bar,TM.empty_bar+.6),hd=p(u,TM.head_down,TM.head_down+.8);
rise($('h2o'),p(u,TM.second_try,TM.second_try+.6));
P2(-240*(1-d2)).setAttribute('opacity',1-d2);
$('h2').setAttribute('transform',`rotate(${(14*hd).toFixed(1)} 380 734)`);
$('bar2').style.stroke=u>=TM.empty_bar?'var(--loss)':'var(--ink)';
rise($('a1'),p(u,SC[2][0]/K+.3,SC[2][0]/K+.8));rise($('a2'),p(u,TM.empty_bar,TM.empty_bar+.5));
rise($('quit'),p(u,TM.empty_bar+1.3,TM.empty_bar+1.9));strk6('qs',672,660,p(u,TM.head_down,TM.head_down+.6));
rise($('notend'),p(u,TM.head_down+.6,TM.head_down+1.2));

SO.forEach((g,i)=>rise(g,p(u,TM.soldiers+i*.2,TM.soldiers+i*.2+.4)));
rise($('wl'),p(u,TM.soldiers+1,TM.soldiers+1.5));
rise($('rep'),p(u,TM.report,TM.report+.5));
QS.forEach((g,i)=>rise(g,p(u,TM.report+3+i*1.2,TM.report+3.4+i*1.2)));
rise($('blm'),p(u,TM.report+8,TM.report+8.5));strk6('bs',1212,140,p(u,TM.report+8.8,TM.report+9.4));
rise($('lrn'),p(u,TM.report+10.2,TM.report+10.7));

rise($('nb4'),p(u,TM.notebook,TM.notebook+.5));
const s4=cl((u-TM.magnifier)/1.5,0,3);
rise($('magw'),p(u,TM.magnifier,TM.magnifier+.4));
$('mag').setAttribute('transform',`translate(640 ${(360+s4*100).toFixed(1)})`);
IT.forEach((x,i)=>x.style.fill=u>=TM.magnifier&&s4>=i-.2?'var(--gain)':'');
rise($('ex0'),p(u,TM.magnifier+6.6,TM.magnifier+7));rise($('ex1'),p(u,TM.magnifier+7,TM.magnifier+7.4));
strk6('es0',872,240,p(u,TM.magnifier+7.8,TM.magnifier+8.3));strk6('es1',872,260,p(u,TM.magnifier+8.2,TM.magnifier+8.7));
rise($('hdt'),p(u,TM.magnifier+10.7,TM.magnifier+11.2));

rise($('card5'),p(u,TM.thumbs_up,TM.thumbs_up+.5));rise($('thumb'),p(u,TM.thumbs_up+.3,TM.thumbs_up+.8));
TK.forEach(([g,k],i)=>{const a=TM.checklist+i*.7;rise(g,p(u,a,a+.4));k.setAttribute('opacity',p(u,a+.3,a+.6))});
BR.forEach((b,i)=>rise(b,p(u,TM.checklist+3.4+i*.15,TM.checklist+3.7+i*.15)));
rise($('nt'),p(u,TM.checklist+4.8,TM.checklist+5.3));

rise($('plan'),p(u,TM.tools,TM.tools+.5));rise($('wr'),p(u,TM.tools+.4,TM.tools+.9));
PL.forEach((l,i)=>l.setAttribute('stroke',u>=TM.tools+1+i*.6?'var(--gain)':i===1?'var(--ink)':'var(--loss)'));
TR.forEach(([g,r,tx],i)=>{rise(g,p(u,TM.tools+i*.3,TM.tools+.4+i*.3));const on=i===2&&u>=TM.third_try;
  r.setAttribute('fill',on?'var(--gain)':'var(--stage)');r.setAttribute('stroke',i<2?'var(--loss)':on?'var(--gain)':'var(--line)');tx.style.fill=on?'var(--on-gain)':''});
rise($('h6o'),p(u,TM.third_try,TM.third_try+.6));
P6(u>=TM.third_try+.8?-60*Math.abs(Math.sin(t*2.6)):0);
const cn=p(u,TM.trophy,TM.trophy+2.2);rise($('cnt'),p(u,TM.trophy,TM.trophy+.5));
$('num').textContent=numFmt6(Math.round(4000*cn))+(cn>=1?'+':'');
rise($('trp'),p(u,TM.trophy+2,TM.trophy+2.6));

rise($('paper'),p(u,TM.pen_paper,TM.pen_paper+.5));
CO.forEach(([g,L],i)=>{const a=TM.columns+i*1.6;rise(g,p(u,a,a+.4));L.forEach((l,k)=>l.setAttribute('opacity',p(u,a+.3+k*.25,a+.6+k*.25)))});
$('arw').setAttribute('stroke-dashoffset',(1-p(u,TM.arrow_up,TM.arrow_up+.8)).toFixed(3));
rise($('fix'),p(u,TM.arrow_up+.6,TM.arrow_up+1.1));rise($('cal'),p(u,TM.arrow_up+1.2,TM.arrow_up+1.7));
$('day').setAttribute('opacity',p(u,TM.arrow_up+2,TM.arrow_up+2.4));
rise($('fin'),p(u,TM.arrow_up+3.8,TM.arrow_up+4.4));

rise($('ql'),p(u,TM.old_goal,TM.old_goal+.5));
['qa','qb','qc','qd'].forEach((id,i)=>rise($(id),p(u,TM.old_goal+3.4+i*.4,TM.old_goal+3.9+i*.4)));
$('dot8').setAttribute('cy',(730-90*Math.abs(Math.sin(t*1.5))).toFixed(1));