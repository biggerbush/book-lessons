FL.forEach((f,i)=>rise(f,p(u,TM.rowboat+.3+i*.25,TM.rowboat+.7+i*.25)));
const sp=Math.max(0,u-TM.rowboat-5.4);$('boat').setAttribute('transform',`rotate(${(sp*50+4*Math.sin(t*1.5)).toFixed(1)} 1300 430)`);

rise($('rooms'),p(u,TM.office_floor,TM.office_floor+.5));rise($('ov'),p(u,TM.two_teams,TM.two_teams+.5));
rise($('blk'),p(u,TM.blocked_team,TM.blocked_team+.5));rise($('s1t'),p(u,TM.blocked_team+1.6,TM.blocked_team+2.2));

rise($('lk'),p(u,TM.glass_wall-.3,TM.glass_wall+.2));const ok=p(u,TM.glass_wall+.2,TM.glass_wall+1);
$('shk').setAttribute('transform',`translate(0 ${(-22*ok).toFixed(1)}) rotate(${(-28*ok).toFixed(1)} 190 320)`);
rise($('mon'),p(u,TM.glass_wall+.6,TM.glass_wall+1.1));
CD.forEach((c,i)=>rise(c,p(u,TM.intranet+i*.2,TM.intranet+i*.2+.4)));
rise($('ceo'),p(u,TM.ceo_card,TM.ceo_card+.5));rise($('view'),p(u,TM.ceo_card+.6,TM.ceo_card+1.1));rise($('s2t'),p(u,TM.ceo_card+1.2,TM.ceo_card+1.8));

rise($('tree'),p(u,TM.magnifier-.4,TM.magnifier+.1));
const mg=p(u,TM.magnifier+.3,TM.magnifier+3.5);$('mag').setAttribute('transform',`translate(${(200+720*mg).toFixed(1)} 600)`);
$('mag').setAttribute('opacity',(p(u,TM.magnifier,TM.magnifier+.4)*(1-p(u,TM.thread_link-.4,TM.thread_link))).toFixed(2));
const ov=u>=TM.magnifier+1.3,gp=u>=TM.magnifier+3.2,yo=u>=TM.thread_link;
[4,5].forEach(i=>{NR[i].setAttribute('stroke',ov?'var(--loss)':'var(--ink)');NT[i].textContent=ov?'SAME':'';NT[i].style.fill='var(--loss)'});
NR[8].setAttribute('stroke',gp?'var(--muted)':'var(--ink)');NR[8].setAttribute('stroke-dasharray',gp?'10 8':'none');NT[8].textContent=gp?'GAP':'';
NR[7].setAttribute('fill',yo?'var(--gain)':'var(--stage)');NR[7].setAttribute('stroke',yo?'var(--gain)':'var(--ink)');NT[7].textContent=yo?'YOU':'';NT[7].style.fill='var(--on-gain)';
rise($('w0'),p(u,TM.magnifier+1.3,TM.magnifier+1.7));rise($('w1'),p(u,TM.magnifier+3.2,TM.magnifier+3.6));
rise($('thr'),p(u,TM.thread_link+.4,TM.thread_link+1));rise($('w2'),p(u,TM.thread_link+.6,TM.thread_link+1.1));
rise($('eyes'),p(u,TM.thread_link+5.7,TM.thread_link+6.2));rise($('w3'),p(u,TM.thread_link+5.9,TM.thread_link+6.4));

SG.forEach((g,i)=>rise(g,p(u,TM.waterfall+i*.5,TM.waterfall+i*.5+.4)));
PC.forEach((g,i)=>{if(i)rise(g,p(u,TM.waterfall+5.4+i*.5,TM.waterfall+5.9+i*.5))});
BR.forEach(b=>b.setAttribute('class',u>=TM.slow_clock?'loss':'gain'));
rise($('clk'),p(u,TM.slow_clock,TM.slow_clock+.5));
$('mh').setAttribute('transform',`rotate(${((t*12)%360).toFixed(1)} 1300 370)`);$('hh').setAttribute('transform',`rotate(${(t%360).toFixed(1)} 1300 370)`);
rise($('otk'),p(u,TM.slow_clock+2,TM.slow_clock+2.5));

rise($('lead5'),p(u,TM.frontline-.3,TM.frontline+.2));rise($('team'),p(u,TM.frontline,TM.frontline+.5));
const bk=p(u,TM.frontline+.6,TM.frontline+1.2);
BB.forEach((b,i)=>{const c=(t*.4+i*.23)%1;b.setAttribute('cx',(TX[i]+8*Math.sin(t*2+i)).toFixed(1));b.setAttribute('cy',(560-230*c).toFixed(1));b.setAttribute('opacity',(Math.min(1,c*5,(1-c)*5)*bk).toFixed(2))});
rise($('cust'),p(u,TM.customer,TM.customer+.5));rise($('upa'),p(u,TM.up_arrow,TM.up_arrow+.6));

rise($('lead6'),p(u,TM.two_arrows-.3,TM.two_arrows+.2));rise($('teams6'),p(u,TM.two_arrows-.1,TM.two_arrows+.4));rise($('arr6'),p(u,TM.two_arrows+.3,TM.two_arrows+.8));
rise($('cmp'),p(u,TM.compass,TM.compass+.5));rise($('rts'),p(u,TM.compass+.8,TM.compass+1.4));
$('ndl').setAttribute('transform',`rotate(${(40*Math.sin(t*2.5)*(1-p(u,TM.compass+.4,TM.compass+1.6))).toFixed(1)} 1370 300)`);
rise($('side'),p(u,TM.map_lines,TM.map_lines+.6));
SD.forEach((d,j)=>{const x0=j>>1?930:520;d.setAttribute('cx',(x0+150*((t*.6+j*.5)%1)).toFixed(1))});

rise($('c1'),p(u,TM.notepad,TM.notepad+.5));rise($('c2'),p(u,TM.ask_bubble,TM.ask_bubble+.5));rise($('ask'),p(u,TM.ask_bubble+1,TM.ask_bubble+1.5));
rise($('c3'),p(u,TM.match_pieces,TM.match_pieces+.5));const jn=p(u,TM.match_pieces+.6,TM.match_pieces+1.8);
$('pb').setAttribute('transform',`translate(${(1250+80*(1-jn)).toFixed(1)} 410)`);rise($('fit'),p(u,TM.match_pieces+1.8,TM.match_pieces+2.3));

rise($('qa'),p(u,TM.question,TM.question+.5));rise($('qb'),p(u,TM.question+.4,TM.question+.9));rise($('qc'),p(u,TM.question+.8,TM.question+1.3));
rise($('qd'),p(u,TM.question+5.8,TM.question+6.4));$('pup').setAttribute('cx',(1380+14*Math.sin(t*1.2)).toFixed(1));