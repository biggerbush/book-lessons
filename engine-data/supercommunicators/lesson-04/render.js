const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
R('tq',TM.title);$('tlink').setAttribute('opacity',p(u,TM.title+.4,TM.title+1));$('tlink').style.strokeDashoffset=(-t*30).toFixed(1);

R('pA',TM.two_strangers);R('pB',TM.two_strangers+.4);R('b1',TM.fact_bubble);R('b2',TM.fact_bubble+1.5);
R('sh',TM.shrug);R('ch1',TM.shrug);$('flat').setAttribute('x2',(1040+400*p(u,TM.shrug+.3,TM.shrug+2)).toFixed(1));
R('f1',TM.shrug+3);R('f2',TM.shrug+7);

CP.forEach((g,i)=>rise(g,p(u,TM.deep_bubble+1+i*.6,TM.deep_bubble+1.5+i*.6)));
R('cf',TM.why_arrow);R('ar2',TM.why_arrow+.8);R('cd',TM.why_arrow+1.4);
R('h2',TM.heart_icon);H2.setAttribute('transform','translate(1170 690) scale('+(1+.06*Math.sin(t*4)).toFixed(3)+')');R('t2',TM.heart_icon+.6);

R('ar3',TM.aron);PR.forEach((g,i)=>rise(g,p(u,TM.pairs+i*.5,TM.pairs+i*.5+.5)));R('prl',TM.pairs+1.5);
R('lad3',TM.ladder);RG.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.ladder+i*.35,TM.ladder+i*.35+.3)));
$('clb').setAttribute('cy',(740-480*p(u,TM.ladder+.5,TM.ladder+3)).toFixed(1));R('eq3',TM.ladder+3.8);

R('cpA',TM.control_pair);R('rA',TM.control_pair+.3);$('bfA').setAttribute('width',(148*p(u,TM.control_pair+.6,TM.control_pair+2)).toFixed(1));
R('cpB',TM.meter);R('rB',TM.meter+.3);$('bfB').setAttribute('width',(666*p(u,TM.meter+.6,TM.meter+2.6)).toFixed(1));
R('ck4',TM.clock);$('hand').setAttribute('transform','rotate('+(330*p(u,TM.clock+.3,TM.clock+3)).toFixed(1)+' 1300 420)');R('t4',TM.clock+1.5);

R('dr5',TM.open_door);$('door').setAttribute('width',(220-180*p(u,TM.open_door+.3,TM.open_door+1.3)).toFixed(1));R('pp5',TM.open_door+.6);
const bob=5*Math.sin(t*2);
FL.forEach((h,i)=>{const k=p(u,TM.feelings+i*.5,TM.feelings+i*.5+1.6),y=FLY[i]-bob;h.setAttribute('transform','translate('+(460+k*240).toFixed(1)+' '+y.toFixed(1)+') scale(.35)');h.setAttribute('opacity',cl(k*4).toFixed(2))});
R('fl5l',TM.feelings);R('ra1',TM.reply_arrow);R('ra2',TM.reply_arrow+1.2);R('t5',TM.reply_arrow+5);

R('cv6',TM.mirror);R('t6',TM.mirror+3.4);R('hh6',TM.two_hearts);R('iv6',TM.interview);
QS.forEach((q,i)=>{const f=(t*.4+i/3)%1;q.setAttribute('x',(1060+f*200).toFixed(1));q.setAttribute('opacity',Math.sin(Math.PI*f).toFixed(2))});

R('c7',TM.swap_card);const f7=p(u,TM.example_q,TM.example_q+.8),sx=Math.max(.02,Math.abs(Math.cos(Math.PI*f7)));
$('card').setAttribute('transform','translate(410 0) scale('+sx.toFixed(3)+' 1) translate(-410 0)');$('cfr').setAttribute('opacity',f7<.5?1:0);$('cbk').setAttribute('opacity',f7<.5?0:1);
R('a7',TM.follow_up);R('cq7',TM.follow_up+.4);R('v7',TM.follow_up+3);
VS.forEach(v=>v[0].setAttribute('fill',v[1]&&u>=TM.follow_up+3.8?'var(--gain)':'var(--line)'));R('t7',TM.follow_up+6.4);

R('qa',TM.challenge);R('qb',TM.challenge+.4);R('qc',TM.challenge+.8);R('qg',TM.challenge+1.2);R('ql',TM.challenge+5.8);