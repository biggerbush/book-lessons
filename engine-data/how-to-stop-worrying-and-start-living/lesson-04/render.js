const cf=p(u,TM.worried_face+5,TM.worried_face+6.2), bw=(335+12*cf).toFixed(1);
rise($('face'),p(u,TM.worried_face,TM.worried_face+.5));
$('fi').setAttribute('transform','translate('+(3*(1-cf)*Math.sin(t*20)).toFixed(1)+' 0)');
$('mouth').setAttribute('d','M1270 470Q1320 '+(440+70*cf).toFixed(1)+' 1370 470');
$('brows').setAttribute('d','M1255 350L1300 '+bw+'M1340 '+bw+'L1385 350');
$('sweat').setAttribute('opacity',(1-cf).toFixed(2)); rise($('calm'),cf);

rise($('farm'),p(u,TM.farm_boy,TM.farm_boy+.5)); rise($('th'),p(u,TM.lightning,TM.lightning+.5));
rise($('f1'),p(u,TM.lightning,TM.lightning+.5)); rise($('f2'),p(u,TM.grave,TM.grave+.5));
const nv=p(u,TM.grave+2.5,TM.grave+3.1); $('f1i').setAttribute('opacity',1-.6*nv); $('f2i').setAttribute('opacity',1-.6*nv);
$('bolt').setAttribute('opacity',(nv>0?1:.6+.4*Math.abs(Math.sin(t*5))).toFixed(2)); rise($('never'),nv);

rise($('jim'),p(u,TM.jim_grant,TM.jim_grant+.5));
const tk=p(u,TM.train,TM.train+1.2); rise($('train'),tk); trn.setAttribute('transform','translate('+(60*(1-tk)).toFixed(1)+' 0)');
rise($('wrk'),p(u,TM.wreck,TM.wreck+.5)); $('wcar').setAttribute('transform','rotate('+(25+3*Math.sin(t*3)).toFixed(1)+' 900 335)');
const dn=u>=TM.wreck+4.6; JIM.forEach(e=>e.setAttribute('class',dn?'loss':'ink')); rise($('down'),p(u,TM.wreck+4.6,TM.wreck+5.2));

rise($('pad'),p(u,TM.notepad,TM.notepad+.5)); rise($('r1'),p(u,TM.count_25000,TM.count_25000+.5));
$('n25').textContent=Math.round(25000*p(u,TM.count_25000,TM.count_25000+2.2)).toLocaleString('en-US');
const gk=p(u,TM.count_25000,TM.count_25000+3), wk=u>=TM.count_5;
CELLS.forEach((c,i)=>{c.setAttribute('opacity',i/336<gk?1:0);c.setAttribute('class',wk&&WR.includes(i)?'loss':'ink')});
rise($('g1'),p(u,TM.count_25000+1,TM.count_25000+1.5)); rise($('r2'),p(u,TM.count_5,TM.count_5+.5));
$('n5').textContent=Math.round(5*p(u,TM.count_5,TM.count_5+1)); rise($('g2'),p(u,TM.count_5,TM.count_5+.5));

rise($('rat'),p(u,TM.ratio,TM.ratio+.5)); rise($('scl'),p(u,TM.scale,TM.scale+.5));
const sa=p(u,TM.scale+.5,TM.scale+2.5)*12*Math.PI/180, bx=380*Math.cos(sa), by=380*Math.sin(sa);
$('beam').setAttribute('x1',(800-bx).toFixed(1)); $('beam').setAttribute('y1',(560-by).toFixed(1)); $('beam').setAttribute('x2',(800+bx).toFixed(1)); $('beam').setAttribute('y2',(560+by).toFixed(1));
$('pl').setAttribute('transform','translate('+(800-bx).toFixed(1)+' '+(560-by).toFixed(1)+')'); $('pr').setAttribute('transform','translate('+(800+bx).toFixed(1)+' '+(560+by).toFixed(1)+')');
const gp=p(u,TM.scale+4.6,TM.scale+5.6); $('fearDot').setAttribute('r',(14-8*gp).toFixed(1)); rise($('grip'),gp);

rise($('bld'),p(u,TM.lloyds,TM.lloyds+.5));
const ck=p(u,TM.coins,TM.coins+3); COINS.forEach((c,i)=>c.setAttribute('opacity',i/COINS.length<ck?1:0)); rise($('cl'),p(u,TM.coins+.5,TM.coins+1));
rise($('dc'),p(u,TM.dice,TM.dice+.5)); rise($('gam'),p(u,TM.dice+.3,TM.dice+.8));
$('gs').setAttribute('x2',(1112+280*p(u,TM.dice+1.4,TM.dice+2)).toFixed(1)); rise($('ins'),p(u,TM.dice+2.2,TM.dice+2.8));

rise($('scr'),p(u,TM.mind_movie,TM.mind_movie+.5)); $('mcar').setAttribute('transform','rotate('+(-25*Math.abs(Math.sin(t*1.6))).toFixed(1)+' 380 440)');
rise($('met'),p(u,TM.odds_meter,TM.odds_meter+.5));
const nd=.85+.05*Math.sin(t*6)-.75*p(u,TM.odds_meter+.5,TM.odds_meter+2.5), na=Math.PI*(1-nd);
$('needle').setAttribute('x2',(1120+200*Math.cos(na)).toFixed(1)); $('needle').setAttribute('y2',(520-200*Math.sin(na)).toFixed(1));
rise($('wv'),p(u,TM.odds_meter+4.2,TM.odds_meter+4.8));
$('fw').setAttribute('d',wave(700,40*(1-.8*p(u,TM.odds_meter+9.1,TM.odds_meter+10.5))+9,23,7,t)); $('rw').setAttribute('d',wave(810,4,90,1.5,t));

rise($('card'),p(u,TM.worry_card,TM.worry_card+.5)); rise($('tp'),p(u,TM.tally-.3,TM.tally+.3));
TL.forEach((m,i)=>m.setAttribute('opacity',u>=TM.tally+.3+i*.2?1:0)); HAP.setAttribute('opacity',u>=TM.tally+3.6?1:0);
rise($('hon'),p(u,TM.tally+6.5,TM.tally+7)); rise($('chk'),p(u,TM.check_mark,TM.check_mark+.5));

rise($('qa'),p(u,TM.question,TM.question+.5)); rise($('qb'),p(u,TM.question+.4,TM.question+.9)); rise($('qc'),p(u,TM.question+2.6,TM.question+3.1));
rise($('qd'),p(u,TM.question+.8,TM.question+1.3)); $('qdi').setAttribute('transform','rotate('+(8*Math.sin(t*1.2)).toFixed(1)+' 1350 390)');