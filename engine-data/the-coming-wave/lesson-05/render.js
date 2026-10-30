const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
R('tshield',TM.state_shield);
const ck=p(u,TM.state_shield+7.4,TM.state_shield+8.4); drw($('tcrack'),ck);
$('tsw').setAttribute('transform','rotate('+(ck*1.5*Math.sin(t*6)).toFixed(2)+' 1310 380)');
let wv='M1080 700'; for(let x=1100;x<=1480;x+=20)wv+='L'+x+' '+(700+12*Math.sin(x/40-t*2)).toFixed(1); $('twave').setAttribute('d',wv);

R('cits',TM.citizens); R('stbld',TM.citizens+.6); R('badge',TM.police_badge); R('give',TM.police_badge+.4);
R('get',TM.peaceful_town); R('houses',TM.peaceful_town+.5); R('strain',TM.peaceful_town+4.1);
const sk=p(u,TM.peaceful_town+4.1,TM.peaceful_town+4.8);
$('arrows').setAttribute('transform','translate(0 '+(sk*4*Math.sin(t*9)).toFixed(1)+')');
['ar1','ar2'].forEach(a=>$(a).style.stroke=sk>0?'var(--loss)':'var(--ink)');

R('chart',TM.price_tag); drw($('cost'),p(u,TM.price_tag+.3,TM.price_tag+1.8)); R('tag',TM.price_tag+1.4);
R('gov',TM.laptop); R('lap',TM.laptop+.4); $('arc').setAttribute('opacity',p(u,TM.laptop+.6,TM.laptop+1));
const fl=u>=TM.laptop+.8;
DT.forEach((d,i)=>{const s=(t*.5+i/3)%1; d.setAttribute('cx',bz(910,980,1080,1140,s).toFixed(1)); d.setAttribute('cy',bz(330,230,230,320,s).toFixed(1)); d.setAttribute('opacity',fl?1:0)});
$('lscr').style.stroke=u>=TM.laptop+1.5?'var(--gain)':'var(--ink)';
R('army',TM.small_group); R('eq',TM.small_group+.6); R('tiny',TM.small_group+1.1);

R('hosp',TM.nhs_hospital);
WIN.forEach((w,i)=>w.style.fill=u>=TM.nhs_hospital+1.2+i*.15?'var(--ink)':'var(--ice)');
R('scr',TM.locked_screen); R('appt',TM.locked_screen+1); R('file',TM.leaked_file);
drw($('back'),p(u,TM.leaked_file+2,TM.leaked_file+3.5)); R('turned',TM.leaked_file+7.4);

const sp=p(u,TM.splinter_map,TM.splinter_map+1.5), rv=u>=TM.rival_groups;
WG.forEach((w,k)=>{const d=sp*(60+4*Math.sin(t*2+k)); w[0].setAttribute('transform','translate('+(Math.cos(w[1])*d).toFixed(1)+' '+(Math.sin(w[1])*d).toFixed(1)+')'); w[0].setAttribute('class',rv&&k%2===0?'loss':'ink')});
R('chhead',TM.rival_groups); CHP.forEach((g,i)=>rise(g,p(u,TM.rival_groups+.4+i*.5,TM.rival_groups+.9+i*.5)));
const shk=p(u,TM.rival_groups+5,TM.rival_groups+5.5); R('sh4',TM.rival_groups+5); R('shaky',TM.rival_groups+5);
$('sh4w').setAttribute('transform','rotate('+(shk*8*Math.sin(t*5)).toFixed(2)+' 560 490)');

R('tower',TM.watch_tower); $('pupil').setAttribute('cx',(300+10*Math.sin(t*1.3)).toFixed(1));
R('cams',TM.camera_grid);
DS.forEach(d=>d[0].setAttribute('class',u>=TM.camera_grid+.5+d[1]*.12?'loss':'ink'));
$('sight').setAttribute('opacity',(.6*p(u,TM.camera_grid+1,TM.camera_grid+2)).toFixed(2));
R('cn',TM.china_map); R('conc',TM.china_map+6.6);

R('tugL',TM.tug_of_war); R('tugR',TM.tug_of_war+.3); R('tugS',TM.tug_of_war+.6);
$('rope').setAttribute('opacity',p(u,TM.tug_of_war+.3,TM.tug_of_war+.8));
const tg=p(u,TM.tug_of_war+1,TM.tug_of_war+1.6);
$('tugSw').setAttribute('transform','translate('+(tg*40*Math.sin(t*1.6)).toFixed(1)+' 0)');
R('bridge',TM.fragile_bridge);
drw($('ck0'),p(u,TM.fragile_bridge+1.5,TM.fragile_bridge+2.3)); drw($('ck1'),p(u,TM.fragile_bridge+2.3,TM.fragile_bridge+3.1));
const wb=p(u,TM.fragile_bridge+5.8,TM.fragile_bridge+6.4);
$('brw').setAttribute('transform','rotate('+((.3+1.2*wb)*Math.sin(t*2.5)).toFixed(2)+' 800 612)');
R('both',TM.fragile_bridge+5.8);

R('qm',TM.question_mark); R('scale',TM.balance_scale); R('plab',TM.balance_scale+.6); R('ask',TM.balance_scale+1.5);
const ang=6*Math.sin(t*1.2)*Math.PI/180, bx=220*Math.cos(ang), by=220*Math.sin(ang), bm=$('beam');
bm.setAttribute('x1',(820-bx).toFixed(1)); bm.setAttribute('y1',(300-by).toFixed(1)); bm.setAttribute('x2',(820+bx).toFixed(1)); bm.setAttribute('y2',(300+by).toFixed(1));
PAN[0].setAttribute('transform','translate('+(820-bx).toFixed(1)+' '+(300-by).toFixed(1)+')'); PAN[1].setAttribute('transform','translate('+(820+bx).toFixed(1)+' '+(300+by).toFixed(1)+')');
R('ballot',TM.ballot_box); R('blab',TM.ballot_box+.4);
$('paper').setAttribute('y',(300+120*p(u,TM.ballot_box+.6,TM.ballot_box+1.6)).toFixed(1));
$('chk').setAttribute('opacity',p(u,TM.ballot_box+1.6,TM.ballot_box+2));

R('qa',TM.thinking_face); R('qb',TM.thinking_face+.4); R('qc',TM.thinking_face+.8);
R('face',TM.thinking_face+1.2); R('sh8',TM.thinking_face+1.8); R('q2',TM.thinking_face+4.6);