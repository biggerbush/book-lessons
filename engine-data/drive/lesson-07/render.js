u_=u;
rv('t0x',TM.title_card+.3); rv('t0i',TM.title_card+1.2); rv('t0a',TM.two_people);
$('t0r').setAttribute('r',(80+6*Math.sin(t*3)).toFixed(1));

rv('x1',TM.type_x);
RW.forEach((g,i)=>rise(g,p(u,TM.type_x+2.6+i*.6,TM.type_x+3.1+i*.6)));
rv('i1',TM.type_i); const sc=1+.06*Math.sin(t*3);
$('i1y').setAttribute('transform','translate(1160 430) scale('+sc.toFixed(3)+') translate(-1160 -430)');
$('i1y').setAttribute('opacity',p(u,TM.type_i+1,TM.type_i+1.6));
rv('lh',TM.arrow_long); const lk=p(u,TM.arrow_long+.3,TM.arrow_long+2.5); drw($('lI'),lk); drw($('lX'),lk);

rv('pot',TM.seedling); drw($('sd'),p(u,TM.seedling+.3,TM.seedling+2));
rv('lf1',TM.seedling+1.5); rv('lf2',TM.seedling+5);
rv('bat',TM.battery); $('bf').setAttribute('width',(380*p(u,TM.battery+.5,TM.battery+3)).toFixed(1));
$('rc').setAttribute('transform','rotate('+(t*60%360).toFixed(1)+' 1110 300)');

rv('payw',TM.paycheck);
const uf=p(u,TM.paycheck+2.9,TM.paycheck+3.4)*(1-p(u,TM.table,TM.table+.4)), fr=u>=TM.table;
rise($('unf'),uf); rv('fair',TM.table+.2);
$('payr').setAttribute('stroke',fr?'var(--gain)':uf>0?'var(--loss)':'var(--ink)');
$('payr').setAttribute('stroke-width',(6+(uf>0?4*Math.abs(Math.sin(t*4))*uf:0)).toFixed(1));
$('payt').textContent=fr?'FAIR PAY':'PAY'; $('chk').setAttribute('opacity',p(u,TM.table,TM.table+.4));
$('pay').setAttribute('transform','translate('+(580*p(u,TM.pushed_aside,TM.pushed_aside+1.2)).toFixed(1)+' 0)');
rv('wk',TM.pushed_aside+.8); rv('off',TM.pushed_aside+1.1);

rv('slab',TM.three_blocks); [0,1,2].forEach(i=>rv('b'+i,TM.three_blocks+.6+i*.5));
rv('mg',TM.manager); rv('mr',TM.mirror);
rows.forEach((g,i)=>{const a=i<3?TM.manager+1+i*1.6:TM.mirror+1.5+(i-3)*1.6; rise(g,p(u,a,a+.5))});

rv('kenw',TM.kennedy); rv('lucw',TM.luce); rv('bub',TM.luce+1);
drw($('ul'),p(u,TM.luce+6.6,TM.luce+8)); rv('mean',TM.luce+6.8);

rv('lc',TM.lincoln); rv('bc',TM.blank_card);
const k1=p(u,TM.blank_card+.6,TM.blank_card+2.6), k2=p(u,TM.blank_card+2.6,TM.blank_card+3.8);
drw($('w1'),k1); drw($('w2'),k2);
const px=k1<1?870+570*k1:870+430*k2, py=k1<1?350:410;
$('pn').setAttribute('transform','translate('+px.toFixed(1)+' '+(py-4*Math.abs(Math.sin(t*9))).toFixed(1)+')');
$('pn').setAttribute('opacity',p(u,TM.blank_card+.3,TM.blank_card+.6)*(1-p(u,TM.blank_card+4,TM.blank_card+4.4)));
rv('fam',TM.family); rv('blb',TM.family+2.6); $('bry').setAttribute('opacity',(.5+.5*Math.sin(t*4)).toFixed(2));

rv('cal',TM.calendar);
cells.forEach((c,i)=>{if(i<17)c.setAttribute('opacity',p(u,TM.calendar+.4+i*.08,TM.calendar+.7+i*.08))});
const qm=u>=TM.question_mark; cells[17].setAttribute('fill',qm?'var(--gain)':'var(--line)');
$('tq').setAttribute('opacity',p(u,TM.question_mark,TM.question_mark+.4)); rv('qq',TM.question_mark+.3);
steps.forEach((s,i)=>s.setAttribute('opacity',p(u,TM.small_steps+i*.2,TM.small_steps+i*.2+.3)));
const ck=5*p(u,TM.small_steps+1,TM.small_steps+3.6), fk=ck-Math.floor(ck);
$('clb').setAttribute('cx',(780+ck*120).toFixed(1));
$('clb').setAttribute('cy',(740-(1+ck)*50-14*Math.sin(fk*Math.PI)).toFixed(1));
$('clb').setAttribute('opacity',p(u,TM.small_steps+.6,TM.small_steps+1)); rv('sbs',TM.small_steps+.4);

rv('qa',TM.pen); rv('qb',TM.pen+.4); rv('qc',TM.pen+3.4); rv('cd',TM.pen+.8);
$('cpen').setAttribute('transform','translate('+(12*Math.sin(t*2)).toFixed(1)+' '+(-3*Math.abs(Math.sin(t*8))).toFixed(1)+')');