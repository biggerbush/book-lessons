const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
R('t_rule',TM.title_card);$('t_ruleIn').setAttribute('transform','translate(0 '+(6*Math.sin(t*1.5)).toFixed(1)+')');
TP.forEach((g,i)=>rise(g,p(u,TM.title_card+.6+i*.25,TM.title_card+1.1+i*.25)));
$('t_beams').setAttribute('opacity',p(u,TM.title_card+5.4,TM.title_card+6.2));

R('st1',TM.clay_stele);R('pa1',TM.parchment);R('sb1',TM.parchment+3.8);

R('k2',TM.king);[0,1,2].forEach(i=>R('t2_'+i,TM.pyramid+i*.5));R('sc2',TM.scales);
const ang=p(u,TM.scales+.4,TM.scales+1.4)*(12+3*Math.sin(t*1.4)),ar=ang*Math.PI/180,bx=140*Math.cos(ar),by=140*Math.sin(ar);
$('beam2').setAttribute('transform','rotate('+ang.toFixed(2)+' 1260 330)');
$('pl2').setAttribute('transform','translate('+(1260-bx).toFixed(1)+' '+(330-by).toFixed(1)+')');
$('pr2').setAttribute('transform','translate('+(1260+bx).toFixed(1)+' '+(330+by).toFixed(1)+')');

R('f3',TM.founders);R('eq3',TM.founders+1.5);R('d3',TM.rights_list-.3);[0,1,2].forEach(i=>R('r3_'+i,TM.rights_list+i*.8));R('e3',TM.rights_list+5.3);

R('hx4',TM.dna_helix);R('no4',TM.dna_helix+1.5);
let ha='',hb='';for(let y=250;y<=710;y+=10){const s=Math.sin(y/45+t*1.5)*90;ha+=(300+s).toFixed(1)+','+y+' ';hb+=(300-s).toFixed(1)+','+y+' '}
$('h4a').setAttribute('points',ha);$('h4b').setAttribute('points',hb);
RG.forEach((l,i)=>{const s=Math.sin((265+i*30)/45+t*1.5)*90;l.setAttribute('x1',(300+s).toFixed(1));l.setAttribute('x2',(300-s).toFixed(1))});
R('ob4',TM.crowd);
const dd=u>=TM.lone_doubter;
CP.forEach((c,i)=>{const a=TM.crowd+.3+i*.06;rise(c[0],p(u,a,a+.4));const k=i===D&&dd?'loss':'ink';c[1].setAttribute('class',k);c[2].setAttribute('class',k);
 CL[i].setAttribute('opacity',(p(u,a,a+.6)*(i===D?1-p(u,TM.lone_doubter,TM.lone_doubter+.6):1)).toFixed(2))});
const dw=dd?4*Math.sin((u-TM.lone_doubter)*12)*Math.max(0,1-(u-TM.lone_doubter)):0;$('ob4in').setAttribute('transform','translate('+dw.toFixed(1)+' 0)');
R('dt4',TM.lone_doubter);R('sd4',TM.lone_doubter+6.6);

R('v5',TM.village);
KD.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.big_kingdom+i*.02,TM.big_kingdom+i*.02+.3)));
R('kl5',TM.big_kingdom);[0,1,2,3].forEach(i=>R('c5_'+i,TM.big_kingdom+1.2+i*.7));
R('b5',TM.brain);$('ar5').setAttribute('opacity',p(u,TM.brain+.5,TM.brain+1));
const ov=p(u,TM.brain+1,TM.brain+1.5);$('b5c').style.stroke=ov>0?'var(--loss)':'var(--ink)';
$('b5in').setAttribute('transform','translate('+(3*ov*Math.sin(t*30)).toFixed(1)+' 0)');R('tm5',TM.brain+1);

R('tb6',TM.clay_tablet);
W6.forEach((w,i)=>w.setAttribute('opacity',p(u,TM.clay_tablet+.6+i*.2,TM.clay_tablet+.9+i*.2)));
C6.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.barley+.4+i*.3,TM.barley+.7+i*.3)));
R('br6',TM.barley);R('k6',TM.name_kushim);R('kr6',TM.name_kushim+.6);

R('sh7',TM.shelves);T7.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.shelves+.3+i*.08,TM.shelves+.6+i*.08)));
R('em7',TM.scribes);K7.forEach((k,i)=>{const a=TM.scribes+.5+i*.3;k[0].setAttribute('opacity',p(u,a,a+.4));rise(k[1],p(u,a+.2,a+.6))});
S7.forEach((s,i)=>{const on=u>=TM.census+.3+i*.1;s.setAttribute('fill',on?'var(--gain)':'var(--muted)');s.setAttribute('fill-opacity',on?.45:.3)});R('cs7',TM.census+.5);

R('qa',TM.mirror);R('qm',TM.mirror+.8);R('g8',TM.mirror+1.2);R('qb',TM.mirror+6.6);R('qc',TM.mirror+7);
D8.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.mirror+7+i*.06,TM.mirror+7.3+i*.06)));