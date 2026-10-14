crowd.forEach((c,i)=>{const a=TM.title_cadet+.2+i*.04;rise(c[0],p(u,a,a+.4));const j=QT.indexOf(i);
  if(j>=0){const k=p(u,TM.title_cadet+3+j*.7,TM.title_cadet+4.2+j*.7);c[1].setAttribute('fill',k>0?'var(--loss)':'var(--ink)');c[1].setAttribute('opacity',(1-.7*k).toFixed(2))}});
rise($('who'),p(u,TM.title_cadet+7.5,TM.title_cadet+8));

rise($('gate'),p(u,TM.academy_gate,TM.academy_gate+.6));
cards.forEach((g,i)=>{const a=TM.application+i*.7;rise(g,p(u,a,a+.5))});
$('links').setAttribute('opacity',p(u,TM.whole_score,TM.whole_score+.6));
rise($('wcs'),p(u,TM.whole_score,TM.whole_score+.6));
$('wbar').setAttribute('width',(360*p(u,TM.whole_score+.6,TM.whole_score+2.4)).toFixed(1));

row.forEach((c,i)=>{const k=p(u,TM.first_summer+i*.15,TM.first_summer+.8+i*.15);let x=-160*(1-k),y=0,f='var(--ink)',o=k;
  if(i>3){const a=TM.exit_door+.5+(i-4)*.9,q=p(u,a,a+1.5);x+=(1285-(560+i*100))*q;y=-140*q;if(q>0)f='var(--loss)';o=k*(1-cl((q-.7)/.3))}
  c[1].setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+')');c[1].setAttribute('fill',f);c[0].setAttribute('opacity',o.toFixed(2))});
rise($('clk'),p(u,TM.alarm_clock,TM.alarm_clock+.5));
$('hM').setAttribute('transform','rotate('+((t*120)%360).toFixed(1)+' 320 430)');$('hH').setAttribute('transform','rotate('+((t*10)%360).toFixed(1)+' 320 430)');
pills.forEach((g,i)=>{const a=TM.alarm_clock+.8+i*.9;rise(g,p(u,a,a+.5))});
rise($('door'),p(u,TM.exit_door,TM.exit_door+.5));rise($('drop'),p(u,TM.exit_door+2.5,TM.exit_door+3.1));

rise($('duck'),p(u,TM.duckworth,TM.duckworth+.5));rise($('sheet'),p(u,TM.grit_scale,TM.grit_scale+.6));
[TM.statements,TM.statements+2.5].forEach((a,k)=>{rise($('it'+k),p(u,a,a+.5));dots[k].forEach((d,j)=>d.setAttribute('fill',j===SEL[k]&&u>=a+1?'var(--gain)':'var(--stage)'))});
rise($('more'),p(u,TM.statements+4.5,TM.statements+5));

rise($('p0'),p(u,TM.two_parts,TM.two_parts+.5));rise($('p1'),p(u,TM.two_parts+.6,TM.two_parts+1.1));
rise($('cmp'),p(u,TM.compass,TM.compass+.5));
const ck=p(u,TM.compass+.3,TM.compass+2.2),ang=(1-ck)*90*Math.sin(t*2.5)+2*Math.sin(t*1.5);
$('ndl').setAttribute('transform','rotate('+ang.toFixed(1)+' 440 440)');
rise($('mtn'),p(u,TM.mountain,TM.mountain+.5));
const cp=along(MP,p(u,TM.mountain+.5,TM.mountain+4));$('clb').setAttribute('cx',cp[0].toFixed(1));$('clb').setAttribute('cy',cp[1].toFixed(1));

rise($('ax'),p(u,TM.compare_chart,TM.compare_chart+.6));
$('ln0').setAttribute('stroke-dashoffset',(1-p(u,TM.score_flat,TM.score_flat+1.5)).toFixed(3));rise($('cap0'),p(u,TM.score_flat+1,TM.score_flat+1.5));
$('ln1').setAttribute('stroke-dashoffset',(1-p(u,TM.grit_rising,TM.grit_rising+1.5)).toFixed(3));rise($('cap1'),p(u,TM.grit_rising+1.2,TM.grit_rising+1.7));

rise($('bag'),p(u,TM.talent_bag,TM.talent_bag+.5));rise($('lad'),p(u,TM.ladder,TM.ladder+.5));rise($('st'),p(u,TM.ladder+.8,TM.ladder+1.3));
rise($('fork'),p(u,TM.fork_road,TM.fork_road+.5));
const fp=along(FP,.95*p(u,TM.fork_road+.6,TM.fork_road+3.5));$('fdot').setAttribute('cx',fp[0].toFixed(1));$('fdot').setAttribute('cy',fp[1].toFixed(1));
rise($('fl'),p(u,TM.fork_road+3,TM.fork_road+3.5));

rise($('mir'),p(u,TM.mirror,TM.mirror+.6));rise($('snap'),p(u,TM.scorecard,TM.scorecard+.6));rise($('road'),p(u,TM.long_road,TM.long_road+.5));
[[1160,5.5],[260,2.3],[480,3.3]].forEach((w,i)=>{const k=p(u,TM.long_road+.3,TM.long_road+w[1]),b=k>0&&k<1?-4*Math.abs(Math.sin(t*8)):0;
  wk[i][1].setAttribute('transform','translate('+(w[0]*k).toFixed(1)+' '+b.toFixed(1)+')');if(i)wk[i][1].setAttribute('fill',k>=1?'var(--muted)':'var(--ink)')});
rise($('lrt'),p(u,TM.long_road+1.5,TM.long_road+2.1));

rise($('qa'),p(u,TM.question_mark,TM.question_mark+.5));rise($('qb'),p(u,TM.question_mark+.4,TM.question_mark+.9));rise($('qc'),p(u,TM.question_mark+.8,TM.question_mark+1.3));
rise($('stp'),p(u,TM.question_mark+1.5,TM.question_mark+2));rise($('qd'),p(u,TM.question_mark+6,TM.question_mark+6.6));
const sj=Math.floor(t%3);$('sdot').setAttribute('cx',1150+sj*100);$('sdot').setAttribute('cy',776-sj*50);