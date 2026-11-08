const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
const sw=p(u,TM.profit_stack+4.6,TM.profit_stack+6),fin=sw>.5,dip=Math.abs(1-2*sw);
TB.forEach((b,i)=>{const sl=fin?i:2-i,tp=!fin&&!i,a=tp?-7+4*Math.sin(t*3):0,o=p(u,TM.profit_stack+[1,.6,.2][i],TM.profit_stack+[1.5,1.1,.7][i]);b.setAttribute('transform',`translate(1380 ${505-sl*80}) rotate(${a.toFixed(1)}) scale(${tp?.75:1})`);b.setAttribute('opacity',(o*(i==1?1:dip)).toFixed(2))});

CD.forEach((c,i)=>rise(c,p(u,TM.three_blocks+i*.5,TM.three_blocks+i*.5+.5)));
R('q1',TM.three_blocks+3.8);
const d0=p(u,TM.domino_chain,TM.domino_chain+.6),d1=p(u,TM.domino_chain+2.1,TM.domino_chain+2.7);
R('dom',TM.domino_chain-.6);
DM[0].setAttribute('transform',`rotate(${(40*d0+25*d1).toFixed(1)} 270 680)`);DM[1].setAttribute('transform',`rotate(${(40*d1).toFixed(1)} 450 680)`);DM[2].setAttribute('fill',d1>.99?'var(--gain)':'var(--ink)');
R('dc0',TM.domino_chain);R('dc1',TM.domino_chain+2.1);
R('tower',TM.wobbly_tower-.3);const wk=p(u,TM.wobbly_tower+.6,TM.wobbly_tower+1.2);
$('baseS').setAttribute('opacity',(1-wk).toFixed(2));$('baseD').setAttribute('opacity',wk.toFixed(2));
$('upT').setAttribute('transform',`translate(0 ${(-14*wk).toFixed(1)}) rotate(${(wk*7*Math.sin(t*3.2)).toFixed(2)} 1200 620)`);
R('wob',TM.wobbly_tower+.8);

R('desk',TM.office_desk);R('focus',TM.office_desk+4.1);$('beam2').setAttribute('stroke-dashoffset',(-t*30).toFixed(1));
R('arrow',TM.green_arrow);R('bx0',TM.green_arrow+.6);R('bx1',TM.green_arrow+1.1);R('trust',TM.green_arrow+1.8);

R('pan0',TM.tangled_maze);LK.forEach(l=>l.setAttribute('stroke-dashoffset',(-t*40).toFixed(1)));
R('pan1',TM.turf_fence);R('fence',TM.turf_fence+.4);R('brk',TM.turf_fence+2.5);
R('pan2',TM.blank_target);$('qm').setAttribute('opacity',(.7+.3*Math.sin(t*3)).toFixed(2));

$('rays').setAttribute('transform',`rotate(${((t*15)%360).toFixed(1)} 1300 300)`);
R('sunG',TM.sunny_sky);R('crowd4',TM.sunny_sky+.3);
const kc=p(u,TM.storm_cloud,TM.storm_cloud+1),kl=p(u,TM.lone_worker,TM.lone_worker+1.2);
BL.forEach((b,i)=>{const a=p(u,TM.sunny_sky+5+i*.4,TM.sunny_sky+5.5+i*.4);b.setAttribute('opacity',(a*(1-kl)).toFixed(2));b.setAttribute('transform',`translate(0 ${((1-a)*20-kl*90+4*Math.sin(t*2+i)).toFixed(1)})`)});
[0,2].forEach(i=>PL[i].setAttribute('opacity',(1-.85*kl).toFixed(2)));
$('sunIn').setAttribute('opacity',(1-.8*kc).toFixed(2));
rise($('cloud'),kc);$('cloudM').setAttribute('transform',`translate(${(120*(1-kc)).toFixed(1)} 0)`);
RN.forEach((l,i)=>{const y=(t*200+i*37)%120;l.setAttribute('y1',(390+y).toFixed(1));l.setAttribute('y2',(410+y).toFixed(1))});
R('ldesk',TM.lone_worker+.8);R('stay',TM.lone_worker+1.4,.6);

R('cls',TM.classroom);R('cal',TM.busy_calendar);
CE.forEach((c,i)=>c.setAttribute('fill',u>=TM.busy_calendar+.4+i*.08?'var(--loss)':'var(--stage)'));
R('sw',TM.stopwatch);$('hand').setAttribute('transform',`rotate(${((t*120)%360).toFixed(1)} 1300 390)`);
const wd=330*p(u,TM.stopwatch+.3,TM.stopwatch+3.5),wr=wd*Math.PI/180;
$('wedge').setAttribute('d',`M1300 390V280A110 110 0 ${wd>180?1:0} 1 ${(1300+110*Math.sin(wr)).toFixed(1)} ${(390-110*Math.cos(wr)).toFixed(1)}Z`);
R('waste',TM.stopwatch+.8);

R('book',TM.guide_booklet);R('colG',TM.two_columns);R('colB',TM.two_columns+.2);
RW.forEach((r,i)=>{const a=TM.two_columns+.6+i*.8;rise(r[0],p(u,a,a+.4));rise(r[1],p(u,a+.2,a+.6))});
R('clr',TM.two_columns+5.4);R('scl',TM.fair_scales);
const ba=12*(1-p(u,TM.fair_scales+.6,TM.fair_scales+2)),dy=120*Math.sin(ba*Math.PI/180);
$('beam').setAttribute('transform',`rotate(${ba.toFixed(2)} 300 690)`);$('pL').setAttribute('transform',`translate(0 ${(-dy).toFixed(1)})`);$('pR').setAttribute('transform',`translate(0 ${dy.toFixed(1)})`);
R('fair',TM.fair_scales+.4);

R('paths',TM.two_paths);['br0','br1'].forEach(id=>$(id).setAttribute('stroke-dashoffset',(t*30).toFixed(1)));
$('br0').setAttribute('stroke',u>=TM.skill_tools?'var(--gain)':'var(--muted)');$('br1').setAttribute('stroke',u>=TM.manager_coach?'var(--gain)':'var(--muted)');
R('k0',TM.skill_tools);R('k1',TM.manager_coach);R('team',TM.manager_coach+1,.6);

R('qa',TM.notepad);R('qb',TM.notepad+.4);R('pad',TM.notepad+.2);
['n0','n1','n2'].forEach((id,i)=>$(id).setAttribute('opacity',p(u,TM.notepad+1+i*.5,TM.notepad+1.4+i*.5).toFixed(2)));
R('qc',TM.teach_board);R('brd',TM.teach_board+.4);R('lab8',TM.teach_board+1);