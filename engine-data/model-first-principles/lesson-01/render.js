$('tag').setAttribute('transform','rotate('+(4*Math.sin(t*1.4)).toFixed(2)+' 1120 220)');
rise($('tagw'),p(u,TM.price_tag,TM.price_tag+.5)); rise($('tq'),p(u,TM.price_tag+2.5,TM.price_tag+3.2));

rise($('lead'),p(u,TM.two_people,TM.two_people+.5)); rise($('foll'),p(u,TM.two_people+.6,TM.two_people+1.1));
rise($('map'),p(u,TM.old_map,TM.old_map+.5)); rise($('fast'),p(u,TM.old_map+4,TM.old_map+4.5));
rise($('bag'),p(u,TM.backpack,TM.backpack+.4));
BX.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.backpack+.4+i*.35,TM.backpack+.7+i*.35)));
rise($('inh'),p(u,TM.backpack+1.8,TM.backpack+2.4));

const br=p(u,TM.blocks+2.2,TM.blocks+3.4), gd=u>=TM.blocks+3.4;
B.forEach((b,i)=>{const x=440+(140+i*120-440)*br,y=570-i*70*(1-br)-40*Math.sin(Math.PI*br)*(i%2);b.setAttribute('x',x.toFixed(1));b.setAttribute('y',y.toFixed(1));
  b.setAttribute('opacity',p(u,TM.blocks+i*.15,TM.blocks+i*.15+.3));b.style.fill=gd?'var(--gain)':'var(--stage)';b.style.stroke=gd?'var(--gain)':'var(--ink)'});
rise($('true2'),p(u,TM.blocks+3.2,TM.blocks+3.7));
NB.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.ground_floor+.3+i*.4,TM.ground_floor+.6+i*.4)));
rise($('up'),p(u,TM.ground_floor,TM.ground_floor+.5)); rise($('ari'),p(u,TM.aristotle,TM.aristotle+.6));

rise($('bat'),p(u,TM.battery_pack,TM.battery_pack+.5)); rise($('p600'),p(u,TM.price_600,TM.price_600+.5));
$('v600').textContent='$'+Math.round(600*p(u,TM.price_600+.2,TM.price_600+1.6));
rise($('lock'),p(u,TM.price_600+3.4,TM.price_600+3.9));
CR.forEach((g,i)=>rise(g,p(u,TM.shrug+i*.15,TM.shrug+i*.15+.4))); rise($('bub3'),p(u,TM.shrug+.8,TM.shrug+1.3));

rise($('bat4'),p(u,TM.magnifier-.8,TM.magnifier-.3));
$('mag').setAttribute('opacity',p(u,TM.magnifier,TM.magnifier+.5));
$('mag').setAttribute('transform','translate('+(270+70*Math.sin(t*1.2)).toFixed(1)+' '+(340+20*Math.sin(t*2)).toFixed(1)+')');
rise($('arr4'),p(u,TM.raw_metals,TM.raw_metals+.4));
CH4.forEach((g,i)=>rise(g,p(u,TM.raw_metals+i*.6,TM.raw_metals+i*.6+.4)));
$('brk').setAttribute('opacity',p(u,TM.price_80,TM.price_80+.5)); rise($('p80'),p(u,TM.price_80+.3,TM.price_80+.8));
$('v80').textContent='$'+Math.round(80*p(u,TM.price_80+.4,TM.price_80+1.6));

const g5=p(u,SC[5][0]/K+.2,SC[5][0]/K+1.4), hP=480*g5, hM=64*g5;
$('barP').setAttribute('y',(760-hP).toFixed(1)); $('barP').setAttribute('height',hP.toFixed(1));
$('barM').setAttribute('y',(760-hM).toFixed(1)); $('barM').setAttribute('height',hM.toFixed(1));
rise($('gap'),p(u,TM.gap_arrow,TM.gap_arrow+.5)); rise($('how'),p(u,TM.gap_arrow+3.4,TM.gap_arrow+3.9));
rise($('fac'),p(u,TM.factory,TM.factory+.5)); rise($('work'),p(u,TM.factory+4.6,TM.factory+5.1));
GR.setAttribute('transform','translate(1200 540) rotate('+(t*20+360*p(u,TM.factory+4.6,TM.factory+8)).toFixed(1)+')');

rise($('col6'),p(u,TM.two_columns,TM.two_columns+.5));
CC.forEach((c,i)=>{rise(c[1],p(u,TM.two_columns+2+i*.3,TM.two_columns+2.4+i*.3));
  const st=u>=TM.rebuild+i*.25; c[5].style.fill=st?'var(--stage)':'var(--gain)'; c[5].style.stroke=st?'var(--gain)':'none'; c[5].style.strokeWidth=st?'4':'0';
  c[4].style.fill=st?'var(--gain)':'var(--on-gain)'});
FD.forEach((c,i)=>{const k=p(u,TM.rebuild+i*.25,TM.rebuild+i*.25+.8);
  c[0].setAttribute('opacity',u>=TM.rebuild+i*.25?1:0);
  c[0].setAttribute('transform','translate('+(480*i*k).toFixed(1)+' '+((710-c[3])*k).toFixed(1)+')')});
AC.forEach((c,i)=>{rise(c[1],p(u,TM.two_columns+2.6+i*.3,TM.two_columns+3+i*.3));c[0].setAttribute('opacity',(1-.3*p(u,TM.rebuild,TM.rebuild+.6)).toFixed(2));
  const xo=p(u,TM.cross_out+i*.4,TM.cross_out+i*.4+.4); c[2].setAttribute('x2',(1096+368*xo).toFixed(1));
  c[4].style.fill=xo>0?'var(--muted)':'var(--ink)'});
rise($('lad'),p(u,TM.why_ladder,TM.why_ladder+.4));
RG.forEach((g,k)=>rise(g,p(u,TM.why_ladder+.3+k*.6,TM.why_ladder+.7+k*.6))); rise($('true6'),p(u,TM.why_ladder+2.8,TM.why_ladder+3.3));
rise($('beam'),p(u,TM.rebuild+1.2,TM.rebuild+1.8));

rise($('cal'),p(u,TM.calendar,TM.calendar+.5)); rise($('lockw'),p(u,TM.calendar+1,TM.calendar+1.4));
$('lockin').setAttribute('transform','rotate('+(u>=TM.calendar+1?4*Math.sin(t*3):0).toFixed(2)+' 396 478)');
rise($('qcard'),p(u,TM.question,TM.question+.5)); rise($('pad'),p(u,TM.notepad,TM.notepad+.5));
IT.forEach((g,i)=>rise(g,p(u,TM.notepad+.4+i*.4,TM.notepad+.8+i*.4))); rise($('tick'),p(u,TM.notepad+2.8,TM.notepad+3.2));
rise($('noth'),p(u,TM.notepad+4.9,TM.notepad+5.5));

rise($('qa'),p(u,TM.mirror,TM.mirror+.5)); rise($('qb'),p(u,TM.mirror+.4,TM.mirror+.9)); rise($('qc'),p(u,TM.mirror+.8,TM.mirror+1.3));
rise($('mir'),p(u,TM.mirror+1.2,TM.mirror+1.8)); rise($('br8'),p(u,TM.mirror+4.6,TM.mirror+5.2));