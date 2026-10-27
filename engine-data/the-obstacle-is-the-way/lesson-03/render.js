const tk=p(t,.3,1.5);
TD.forEach((c,i)=>{const a=i*Math.PI/4+t*.4,r=105+6*Math.sin(t*2+i);c.setAttribute('cx',(1290+r*Math.cos(a)).toFixed(1));c.setAttribute('cy',(380+r*Math.sin(a)).toFixed(1));c.setAttribute('opacity',tk)});
$('t0core').setAttribute('r',(56+4*Math.sin(t*2)).toFixed(1));
rise($('t0sub'),p(u,TM.title_card,TM.title_card+.6));

rise($('a1'),p(u,TM.tired_person,TM.tired_person+.5));
$('steam').setAttribute('transform','translate(0 '+(-6*Math.abs(Math.sin(t*3))).toFixed(1)+')');
rise($('a2'),p(u,TM.storm_cloud,TM.storm_cloud+.5));
$('cloud').setAttribute('transform','translate('+(8*Math.sin(t*1.5)).toFixed(1)+' 0)');
rise($('ebarg'),p(u,TM.storm_cloud+4,TM.storm_cloud+4.4));
$('ebar').setAttribute('width',(884-800*p(u,TM.storm_cloud+4.4,TM.storm_cloud+7.5)).toFixed(1));
rise($('fix'),p(u,TM.storm_cloud+8,TM.storm_cloud+8.6));

rise($('ep'),p(u,TM.epictetus,TM.epictetus+.5));rise($('chain2'),p(u,TM.epictetus+.6,TM.epictetus+1.1));
rise($('own'),p(u,TM.epictetus+5.4,TM.epictetus+6));
$('divl').setAttribute('opacity',u>=TM.dividing_line?1:0);
$('divl').setAttribute('y2',(250+550*p(u,TM.dividing_line,TM.dividing_line+1.2)).toFixed(1));
rise($('upl'),p(u,TM.dividing_line+1,TM.dividing_line+1.5));rise($('upr'),p(u,TM.dividing_line+1.6,TM.dividing_line+2.1));

const ws=p(u,TM.right_pile+7.5,TM.right_pile+8.2);
cards.forEach((arr,s)=>arr.forEach((g,i)=>{const a=(s?TM.right_pile:TM.left_pile)+i*1.1;rise(g,p(u,a,a+.4)*(s?1-.6*ws:1))}));
rise($('pw'),p(u,TM.right_pile+7.5,TM.right_pile+8.1));rise($('pp'),p(u,TM.right_pile+10.9,TM.right_pile+11.5));

rise($('bx'),p(u,TM.boxer,TM.boxer+.5));
$('cell').setAttribute('opacity',p(u,TM.prison_cell,TM.prison_cell+.4));
BARS.forEach((b,i)=>b.setAttribute('y2',(250+500*p(u,TM.prison_cell+i*.1,TM.prison_cell+i*.1+1)).toFixed(1)));
OH.forEach((g,i)=>{const a=TM.prison_cell+4.6+i*.6;rise(g,p(u,a,a+.4))});
rise($('ohx'),p(u,TM.prison_cell+6.6,TM.prison_cell+7.2));

rise($('k0'),p(u,TM.uniform,TM.uniform+.5));$('k0x').setAttribute('opacity',p(u,TM.uniform+1,TM.uniform+1.4));
rise($('k1'),p(u,TM.law_books,TM.law_books+.5));
BK.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.law_books+.4+i*.3,TM.law_books+.7+i*.3)));
rise($('k2'),p(u,TM.open_door,TM.open_door+.5));
const o=p(u,TM.open_door+.6,TM.open_door+1.8),w=190*(1-.75*o);
$('leaf').setAttribute('points','1178,340 '+(1178+w).toFixed(1)+','+(340+24*o).toFixed(1)+' '+(1178+w).toFixed(1)+','+(600-24*o).toFixed(1)+' 1178,600');
$('walker').setAttribute('opacity',o);
$('yrs').textContent=Math.round(19*p(u,TM.open_door+.4,TM.open_door+1.8))+' years';

rise($('bat'),p(u,TM.battery,TM.battery+.5));
const dr=Math.floor(4*p(u,TM.battery+4.6,TM.battery+7.6)+1e-9);
CE.forEach((c,i)=>c.setAttribute('fill',i<5-dr?'var(--gain)':'var(--line)'));
rise($('drn'),p(u,TM.battery+4.6,TM.battery+5.1));
rise($('spot'),p(u,TM.spotlight,TM.spotlight+.6));
$('cone').setAttribute('fill-opacity',(.22+.08*Math.sin(t*2)).toFixed(2));
rise($('always'),p(u,TM.spotlight+6.5,TM.spotlight+7.1));

rise($('qcard'),p(u,TM.question_card,TM.question_card+.5));rise($('qtxt'),p(u,TM.question_card+3,TM.question_card+3.5));
const sd=p(u,TM.two_baskets+4.2,TM.two_baskets+4.8);
rise($('bL'),p(u,TM.two_baskets,TM.two_baskets+.5));rise($('bR'),p(u,TM.two_baskets,TM.two_baskets+.5));
$('bRo').setAttribute('opacity',(1-.5*sd).toFixed(2));
const pv=p(u,TM.question_card+3.5,TM.question_card+4);
PC.forEach((q,i)=>{const a=TM.two_baskets+.6+i*.5,k=p(u,a,a+.7),kx=k*k,ky=1-(1-k)*(1-k);
q.el.setAttribute('x',(q.x0+(q.x1-q.x0)*kx).toFixed(1));q.el.setAttribute('y',(q.y0+(q.y1-q.y0)*ky).toFixed(1));
q.el.setAttribute('fill',k>=1?(q.s?'var(--loss)':'var(--gain)'):'var(--ink)');q.el.setAttribute('opacity',((q.s?1-.6*sd:1)*pv).toFixed(2))});
rise($('setd'),sd);
const pr=p(u,TM.two_baskets+6.8,TM.two_baskets+7.3);
$('pour').setAttribute('opacity',pr);$('pour').setAttribute('transform','translate(0 '+(8*Math.sin(t*4)).toFixed(1)+')');
rise($('pourt'),pr);

rise($('qa'),p(u,TM.checklist,TM.checklist+.5));rise($('qb'),p(u,TM.checklist+3,TM.checklist+3.5));rise($('qc'),p(u,TM.checklist+3.4,TM.checklist+3.9));
rise($('clist'),p(u,TM.checklist+.6,TM.checklist+1.1));
TK.setAttribute('opacity',p(u,TM.checklist+4,TM.checklist+4.4));