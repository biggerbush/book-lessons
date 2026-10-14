rise($('tw'),p(u,TM.title_wheel,TM.title_wheel+.6)); spin(TW,t*36);

rise($('s1w'),p(u,TM.wheel,TM.wheel+.5));
spin(WH,-954*p(u,TM.wheel+.3,TM.secret_stops)-522*p(u,TM.students+.3,TM.students+3));
const rg=u>=TM.secret_stops;
[2,13].forEach(i=>{WH.ws[i].setAttribute('fill',rg?'var(--gain)':'var(--stage)'); WH.lb[i].style.fill=rg?'var(--on-gain)':'var(--ink)'});
rise($('rig'),p(u,TM.secret_stops,TM.secret_stops+.5));
ST.forEach((g,i)=>rise(g,p(u,TM.students+i*.3,TM.students+i*.3+.4)));
rise($('stl'),p(u,TM.students+1,TM.students+1.5)); rise($('unq'),p(u,TM.un_question,TM.un_question+.5));

const s2=SC[2][0]/K; rise($('ax'),p(u,s2+.4,s2+1));
rise($('a10'),p(u,TM.group_ten,TM.group_ten+.5)); rise($('a65'),p(u,TM.group_65,TM.group_65+.5));
rise($('pull'),p(u,TM.group_65+3,TM.group_65+3.6)); rise($('pulled'),p(u,TM.group_65+3.4,TM.group_65+4));

rise($('lad'),p(u,TM.ladder,TM.ladder+.5)); rise($('l1'),p(u,TM.ladder+.4,TM.ladder+.9));
$('clm').setAttribute('cy',(770-230*p(u,TM.ladder+1,TM.stop_sign)).toFixed(1));
$('miss').setAttribute('opacity',p(u,TM.stop_sign+1,TM.stop_sign+1.6));
rise($('stp'),p(u,TM.stop_sign,TM.stop_sign+.5)); rise($('l2'),p(u,TM.stop_sign+.4,TM.stop_sign+.9));

rise($('bulb'),p(u,TM.lightbulb,TM.lightbulb+.5)); $('glow').setAttribute('r',(60+6*Math.sin(t*4)).toFixed(1));
rise($('cloud'),p(u,TM.thought_cloud,TM.thought_cloud+.6));
IDE.forEach((g,i)=>{const a=TM.thought_cloud+1.5+i*.8;rise(g,p(u,a,a+.4))});
rise($('nudge'),p(u,TM.thought_cloud+8.2,TM.thought_cloud+8.8));

rise($('jdg'),p(u,TM.judge,TM.judge+.5)); rise($('d9'),p(u,TM.dice,TM.dice+.4)); rise($('d3'),p(u,TM.dice+.6,TM.dice+1));
rise($('case'),p(u,TM.shoplifter,TM.shoplifter+.5));
[TM.jail_bars,TM.jail_bars+3.4].forEach((a,k)=>{const r=RW[k],q=p(u,a+.2,a+1.8);rise(r.g,p(u,a,a+.4));
r.bars.forEach((b,j)=>b.setAttribute('opacity',q*r.n>j+.5?1:0));r.tx.textContent=Math.round(r.n*q)+' months'});

rise($('cards'),p(u,TM.price_tag,TM.price_tag+.5));
[0,1.5,3].forEach((d,i)=>rise($('i'+i),p(u,TM.house+d,TM.house+d+.5)));
rise($('sgn'),p(u,TM.sign_limit,TM.sign_limit+.5)); rise($('cart'),p(u,TM.sign_limit+.5,TM.sign_limit+1));
IT.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.sign_limit+1+i*.25,TM.sign_limit+1.2+i*.25)));
rise($('more'),p(u,TM.sign_limit+4,TM.sign_limit+4.5)); rise($('hs'),p(u,TM.sign_limit+6.2,TM.sign_limit+6.8));

rise($('c0'),p(u,TM.shield,TM.shield+.5)); rise($('c1'),p(u,TM.flip_arrows,TM.flip_arrows+.5)); rise($('c2'),p(u,TM.walk_away,TM.walk_away+.5));
const L=150*p(u,TM.flip_arrows+.6,TM.flip_arrows+1.6);
$('aL').setAttribute('d',`M770 380H${(770-L).toFixed(1)}m24-24-24 24 24 24`); $('aR').setAttribute('d',`M830 380H${(830+L).toFixed(1)}m-24-24 24 24-24 24`);
$('aL').setAttribute('opacity',L>2?1:0); $('aR').setAttribute('opacity',L>2?1:0);
$('xo').setAttribute('opacity',p(u,TM.walk_away+.6,TM.walk_away+1));
$('walker').setAttribute('transform',`translate(${(70*p(u,TM.walk_away+1,TM.walk_away+3)).toFixed(1)} 0)`);

rise($('qm'),p(u,TM.question_mark,TM.question_mark+.5)); $('ring').setAttribute('transform',`rotate(${(t*20).toFixed(1)} 1370 280)`);
rise($('qa'),p(u,TM.question_mark,TM.question_mark+.5)); rise($('qb'),p(u,TM.question_mark+.4,TM.question_mark+.9)); rise($('qc'),p(u,TM.question_mark+.8,TM.question_mark+1.3));
rise($('scr'),p(u,TM.question_mark+7.4,TM.question_mark+8));