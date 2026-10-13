const R=(e,a,d)=>rise(typeof e==='string'?$(e):e,p(u,a,a+(d||.5)));
R('brief',TM.title_card);TB.forEach((b,i)=>R(b,TM.title_card+.6+i*.35,.3));R('troof',TM.title_card+2.8);

R('bk',TM.banker);R('yu',TM.name_tag);
const J=['NURSE','TEACHER','ENGINEER'];$('tagt').textContent=J[Math.min(2,Math.max(0,Math.floor((u-TM.name_tag)/1.6)))];
$('tagr').setAttribute('stroke',u>=TM.name_tag+5?'var(--loss)':'var(--ink)');
R('sg0',TM.split_sign);R('sg1',TM.split_sign+3);

FL.forEach((f,i)=>R(f,TM.office_tower+i*.45,.3));R('twl',TM.office_tower);R('yo2',TM.office_tower);R('own',TM.owner);
const bk=p(u,TM.owner+.3,TM.owner+3.5);BR.forEach(([r,h])=>{r.setAttribute('y',(480-h*bk).toFixed(1));r.setAttribute('height',(h*bk).toFixed(1))});
const pk=p(u,TM.owner+4.6,TM.owner+7.4),xe=760+620*pk;
$('payl').setAttribute('d',xe<=1100?'M760 640H'+xe.toFixed(1):'M760 640H1100V750H'+xe.toFixed(1));
R('pay',TM.owner+4.4);R('stp',TM.owner+6.2);$('yo2f').setAttribute('opacity',(1-.6*p(u,TM.owner+6,TM.owner+6.6)).toFixed(2));

R('brd',TM.lecture_hall);R('kr',TM.lecture_hall);R('stu',TM.lecture_hall+.4);R('qm',TM.question_mark);R('bur',TM.burger);R('ans',TM.burger+.4);
ST.forEach((g,i)=>g.setAttribute('transform','translate(0 '+(u>=TM.burger?-8*Math.abs(Math.sin(t*7+i)):0).toFixed(1)+')'));

R('map',TM.street_map);
LOT.forEach(([r,b],i)=>{const a=i?TM.crossroads+i*.4:TM.street_map+.6,h=i?a:TM.street_map+3,k=p(u,h,h+.5);
  R(b,a);r.setAttribute('opacity',p(u,a,a+.5).toFixed(2));r.setAttribute('fill-opacity',(.3*k).toFixed(2));r.setAttribute('stroke',k>0?'var(--gain)':'var(--muted)')});
CR.forEach((c,i)=>{c.setAttribute('x',(140+((t*140+i*420)%800)).toFixed(1));c.setAttribute('opacity',p(u,TM.crossroads,TM.crossroads+.5).toFixed(2))});
R('cd0',TM.crossroads+6.2);R('cd1',TM.crossroads+8.4);

R('dsk',TM.desk_job);R('keep',TM.desk_job+3.4);
$('scr').setAttribute('fill-opacity',(u>=TM.desk_job+3.4?.4+.5*Math.abs(Math.sin(t*3)):0).toFixed(2));
R('side',TM.asset_column);R('acol',TM.asset_column);AB.forEach((b,i)=>R(b,TM.asset_column+.6+i*.9,.3));R('moon',TM.asset_column+6.5);

R('c6a',TM.small_shop);R('c6b',TM.stock_chart);R('c6c',TM.stock_chart+.7);R('c6d',TM.book_royalty);
const RL=TM.book_royalty+3.8;R('rule',RL);
CN.forEach((c,i)=>{const a=RL+.6+i*.5,k=p(u,a,a+.5);c[0].setAttribute('cy',(590+(c[1]-590)*k).toFixed(1));c[0].setAttribute('opacity',u>=a?1:0)});

R('car',TM.sports_car);const CA=TM.coin_stack;
CS.forEach((c,i)=>c.setAttribute('opacity',p(u,CA+i*.08,CA+i*.08+.2).toFixed(2)));R('lbA',CA);R('flow',CA+1.8);
const fo=p(u,CA+1.8,CA+2.3);
FC.forEach((c,i)=>{const s=(t*.5+i/5)%1,q=1-s;c.setAttribute('cx',(q*q*540+2*q*s*780+s*s*1010).toFixed(1));c.setAttribute('cy',(q*q*540+2*q*s*300+s*s*510).toFixed(1));c.setAttribute('opacity',fo.toFixed(2))});
$('carb').setAttribute('fill',u>=CA+6.8?'var(--gain)':'var(--stage)');R('rwd',CA+6.8);

R('qa',TM.mirror);R('qb',TM.mirror+.4);R('mir',TM.mirror+.2);R('nxt',TM.mirror+3.4);