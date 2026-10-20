const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
$('t0').setAttribute('transform','translate(0 '+(Math.sin(t*2)*4).toFixed(1)+')');
R('t0w',TM.lone_figure,.6); R('t1',TM.lone_figure+5.8,.8);

R('tree',TM.family_tree);
BR.forEach((b,i)=>{const a=TM.family_tree+i*.15;b.setAttribute('opacity',p(u,a,a+.4));b.setAttribute('stroke',i===0&&u>=TM.sapiens_tag?CG:CI)});
R('sap',TM.sapiens_tag);
SB.forEach((g,i)=>rise(g,p(u,TM.sibling_icons+i*.25,TM.sibling_icons+i*.25+.4)));
R('sibt',TM.sibling_icons+1.2);

R('map',TM.world_map,.6);
ST.forEach((s,i)=>s.setAttribute('x2',(120+1360*p(u,TM.world_map+.5+i*.3,TM.world_map+3+i*.3)).toFixed(1)));
R('nea',TM.neanderthal); R('ere',TM.erectus);

R('isl',TM.flores_island); R('tape',TM.tape_measure); R('m1',TM.tape_measure+.6);
R('shr',TM.tape_measure+2.9);
SH.forEach((g,i)=>g.setAttribute('opacity',p(u,TM.tape_measure+3+i*.6,TM.tape_measure+3.4+i*.6)));

R('cave',TM.finger_bone); R('bone',TM.finger_bone+.6);
$('ring').setAttribute('r',(70+6*Math.sin(t*3)).toFixed(1));
const ph=t*2;let ha='',hb='';
for(let x=640;x<=1060;x+=10){const s=60*Math.sin((x-640)/50+ph);ha+=(x==640?'M':'L')+x+' '+(470+s).toFixed(1);hb+=(x==640?'M':'L')+x+' '+(470-s).toFixed(1)}
$('hx1').setAttribute('d',ha);$('hx2').setAttribute('d',hb);
RG.forEach((r,i)=>{const x=652+i*44,s=60*Math.sin((x-640)/50+ph);r.setAttribute('x1',x);r.setAttribute('x2',x);r.setAttribute('y1',(470+s).toFixed(1));r.setAttribute('y2',(470-s).toFixed(1))});
R('dna',TM.dna_helix); R('newsp',TM.dna_helix+1.2);
CO.forEach((g,i)=>rise(g,p(u,TM.dna_helix+4.9+i*.3,TM.dna_helix+5.3+i*.3)));
R('cousl',TM.dna_helix+5);

R('oth',SC[5][0]/K+.4);
R('walkw',TM.sapiens_walk);
const wk=p(u,TM.sapiens_walk,TM.sapiens_walk+3);
$('walk').setAttribute('transform','translate('+(-140+140*wk).toFixed(1)+' '+(wk<1&&wk>0?-6*Math.abs(Math.sin(t*6)):0).toFixed(1)+')');
OT.forEach((g,i)=>g.setAttribute('opacity',(1-.88*p(u,TM.fading_figures+i*.6,TM.fading_figures+i*.6+1.2)).toFixed(2)));
R('qm',TM.question_mark); R('quo',TM.quote_card,.6);

R('l0',TM.dna_chart); $('b0').setAttribute('width',(780*p(u,TM.dna_chart,TM.dna_chart+1.2)).toFixed(1)); R('x0',TM.dna_chart+1.3);
R('l1',TM.melanesia_map); $('b1').setAttribute('width',(780*p(u,TM.melanesia_map,TM.melanesia_map+1.2)).toFixed(1)); R('x1',TM.melanesia_map+1.3);
R('scl',TM.balance_scale);
const ba=.2*p(u,TM.balance_scale+.6,TM.balance_scale+1.8),bx=160*Math.cos(ba),by=160*Math.sin(ba);
$('beam').setAttribute('d','M'+(1240-bx).toFixed(1)+' '+(340-by).toFixed(1)+'L'+(1240+bx).toFixed(1)+' '+(340+by).toFixed(1));
$('pl').setAttribute('transform','translate('+(1240-bx).toFixed(1)+' '+(340-by).toFixed(1)+')');
$('pr').setAttribute('transform','translate('+(1240+bx).toFixed(1)+' '+(340+by).toFixed(1)+')');
R('cap6',TM.balance_scale+1.6,.6);

R('pa',TM.mirror); R('pb',TM.tree_branch); R('pc',TM.hourglass);
const lv=u>=TM.tree_branch+1.5;
BT[4].setAttribute('stroke',lv?CG:'var(--muted)');BT[4].setAttribute('stroke-width',lv?8:5);BT[4].setAttribute('stroke-dasharray',lv?'none':'10 8');
$('leaf').setAttribute('opacity',lv?1:0);
const sk=p(u,TM.hourglass+.5,TM.hourglass+6),L=310+138*sk,hw=Math.max(0,66-62*(L-300)/150);
$('sandT').setAttribute('points',(1273-hw)+','+L+' '+(1273+hw)+','+L+' 1277,450 1269,450');
$('sandB').setAttribute('points','1209,596 1337,596 1273,'+(596-110*sk).toFixed(1));
$('stream').setAttribute('opacity',sk>0&&sk<1?1:0);

R('pair',TM.side_by_side,.6); R('top8',TM.side_by_side+.3);
R('qa',TM.side_by_side+6.2); R('qb',TM.side_by_side+6.6); R('qc',TM.side_by_side+7); R('lab8',TM.side_by_side+7.6);