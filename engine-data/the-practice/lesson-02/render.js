rise($('wr'),p(u,TM.writer,TM.writer+.6));
const sk=p(u,TM.writer+1,TM.writer+1.6);
SH.forEach((s,i)=>{const c=(t*.4+i/3)%1;s.setAttribute('x',(1300+150*c).toFixed(1));s.setAttribute('y',(480-180*c).toFixed(1));s.setAttribute('opacity',((1-c)*sk).toFixed(2))});
rise($('hush'),p(u,TM.writer+2.5,TM.writer+3));
[0,1,2].forEach(i=>$('hd'+i).setAttribute('cy',(280-6*Math.max(0,Math.sin(t*3-i))).toFixed(1)));

rise($('bx0'),p(u,TM.two_boxes,TM.two_boxes+.5)); rise($('bx1'),p(u,TM.two_boxes+.3,TM.two_boxes+.8));
rise($('pc'),p(u,TM.process_box,TM.process_box+.5));
const zk=p(u,TM.process_box+.3,TM.process_box+3.5),zd=zk*679,zs=Math.min(7,Math.floor(zd/84.85)),zf=cl(zd/84.85-zs);
$('zig').setAttribute('stroke-dashoffset',(680*(1-zk)).toFixed(1));
$('pen').setAttribute('transform','translate('+(180+60*(zs+zf)).toFixed(1)+' '+(470-60*(zs%2?1-zf:zf)).toFixed(1)+') rotate(18)');
rise($('oc'),p(u,TM.outcome_box,TM.outcome_box+.5));
BB.forEach((b,i)=>{const a=TM.outcome_box+.6+i*.4;rise(b,p(u,a,a+.4))});
rise($('mix'),p(u,TM.outcome_box+5.4,TM.outcome_box+6));

rise($('dial'),p(u,TM.control_dial,TM.control_dial+.5));
let dk=0;[0,1,2].forEach(i=>{const a=TM.control_dial+4.6+i*1.2,k=p(u,a,a+.5);dk+=k;rise($('i'+i),k)});
$('ptr').setAttribute('transform','rotate('+(-100+70*dk+4*Math.sin(t*2)).toFixed(1)+' 330 480)');
rise($('crw'),p(u,TM.crowd,TM.crowd+.6));
CR.forEach((g,i)=>g.setAttribute('transform','translate(0 '+(-6*Math.abs(Math.sin(t*3+i))).toFixed(1)+')'));
rise($('theirs'),p(u,TM.crowd+4.6,TM.crowd+5.1));

rise($('me3'),p(u,TM.scoreboard,TM.scoreboard+.5)); rise($('board3'),p(u,TM.scoreboard+.2,TM.scoreboard+.7));
RW.forEach((g,i)=>{const a=TM.scoreboard+.8+i*.6;g.setAttribute('opacity',p(u,a,a+.4))});
$('vline').setAttribute('opacity',p(u,TM.scoreboard+2.6,TM.scoreboard+3.2));
rise($('cloud'),p(u,TM.stress_cloud,TM.stress_cloud+.5));
$('cl3').setAttribute('transform','translate('+(5*Math.sin(t*1.7)).toFixed(1)+' '+(4*Math.sin(t*2.3)).toFixed(1)+')');
[0,1,2].forEach(i=>{const a=TM.stress_cloud+.8+i*.9;rise($('w'+i),p(u,a,a+.4))});
rise($('wk'),p(u,TM.stress_cloud+.4,TM.stress_cloud+.9));
const sh=p(u,TM.stress_cloud+5.4,TM.stress_cloud+6.6);
$('wrect').setAttribute('width',(220-140*sh).toFixed(1)); $('wrect').setAttribute('height',(180-120*sh).toFixed(1));
$('wrect').style.fill=sh>.5?'var(--muted)':'var(--gain)';
$('wkarr').setAttribute('opacity',p(u,TM.stress_cloud+5.8,TM.stress_cloud+6.4));
rise($('small'),p(u,TM.stress_cloud+5.6,TM.stress_cloud+6.2));

rise($('wind'),p(u,TM.question_mark,TM.question_mark+.6));
$('qm').setAttribute('transform','translate(0 '+(-6-6*Math.sin(t*1.8)).toFixed(1)+')');
rise($('safe'),p(u,TM.safe_path,TM.safe_path+.5));
rise($('flaw'),p(u,TM.safe_path+4.2,TM.safe_path+4.7)); rise($('deal'),p(u,TM.safe_path+8.4,TM.safe_path+9));

rise($('lap'),p(u,TM.laptop,TM.laptop+.5));
const ty=(t*.6)%6;TL.forEach((r,i)=>r.setAttribute('width',(TW[i]*cl(ty-i)).toFixed(1)));
rise($('cal'),p(u,TM.laptop+3,TM.laptop+3.6));
CE.forEach((c,i)=>{const a=TM.calendar+i*.18,k=p(u,a,a+.3);c[0].setAttribute('stroke',k>.5?'var(--ink)':'var(--line)');c[1].setAttribute('opacity',k)});
rise($('cmt'),p(u,TM.calendar+5.8,TM.calendar+6.4));

PL.forEach((q,i)=>{const a=TM.seedlings+i*.25,g=p(u,a,a+1.6),top=700-q.h*g,sw=4*Math.sin(t*1.5+i)*g,my=700-q.h*g*.5;
  q.s.setAttribute('d','M'+q.x+' 700Q'+q.x+' '+my.toFixed(1)+' '+(q.x+sw).toFixed(1)+' '+top.toFixed(1));
  q.l.setAttribute('d','M'+q.x+' '+my.toFixed(1)+'q'+(30*g).toFixed(1)+' '+(-24*g).toFixed(1)+' '+(52*g).toFixed(1)+' 0q'+(-22*g).toFixed(1)+' '+(22*g).toFixed(1)+' '+(-52*g).toFixed(1)+' 0');
  if(q.b){const bk=p(u,TM.seedlings+3+i*.4,TM.seedlings+3.6+i*.4);q.b.setAttribute('cx',(q.x+sw).toFixed(1));q.b.setAttribute('cy',top.toFixed(1));q.b.setAttribute('r',(22*bk).toFixed(1))}});
const cx=200+1060*p(u,TM.garden,TM.garden+5);
rise($('can'),p(u,TM.garden,TM.garden+.5)); $('can').setAttribute('transform','translate('+cx.toFixed(1)+' 300)');
DR.forEach((d,i)=>{const c=(t*1.2+i/3)%1;d.setAttribute('cx',(100+6*i).toFixed(1));d.setAttribute('cy',(-30+90*c).toFixed(1));d.setAttribute('opacity',(1-c).toFixed(2))});
rise($('tend'),p(u,TM.garden+.8,TM.garden+1.4));

rise($('oq'),p(u,TM.old_question,TM.old_question+.5));
const ok=p(u,TM.new_question,TM.new_question+.6);
$('ostk').setAttribute('x2',(150+440*ok).toFixed(1)); $('ostk').setAttribute('y2',(500-140*ok).toFixed(1)); $('ostk').setAttribute('opacity',ok>0?1:0);
$('arr7').setAttribute('opacity',ok);
rise($('nq'),p(u,TM.new_question+.3,TM.new_question+.9));
rise($('chk'),p(u,TM.checkmark,TM.checkmark+.5));
$('tick').setAttribute('stroke-dashoffset',(120*(1-p(u,TM.checkmark+.3,TM.checkmark+1))).toFixed(1));

const S8=SC[8][0]/K;
rise($('qa'),p(u,S8+.3,S8+.8)); rise($('qb'),p(u,S8+.7,S8+1.2)); rise($('qc'),p(u,S8+1.1,S8+1.6));
rise($('jg'),p(u,S8+5.4,S8+6));
DY.forEach((d,i)=>{const a=S8+6+i*.35;d.setAttribute('stroke-dashoffset',(60*(1-p(u,a,a+.3))).toFixed(1))});