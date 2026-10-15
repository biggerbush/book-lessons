const a0=t*1.2;$('runner').setAttribute('cx',(1260+200*Math.cos(a0)).toFixed(1));$('runner').setAttribute('cy',(450+130*Math.sin(a0)).toFixed(1));
$('fin').setAttribute('opacity',(1-p(u,TM.finish_line+2,TM.finish_line+3.5)).toFixed(2));
rise($('lapn'),p(u,TM.finish_line+5,TM.finish_line+5.6));$('lapn').textContent='LAP '+(Math.floor(a0/(2*Math.PI))+1);

$('loopc').setAttribute('stroke-dashoffset',(1508*(1-p(u,TM.loop_circle,TM.loop_circle+1.5))).toFixed(0));
rise($('lad'),p(u,TM.loop_circle+.8,TM.loop_circle+1.4));rise($('notop'),p(u,TM.loop_circle+4.6,TM.loop_circle+5.1));
nodes.forEach((g,i)=>{const a=i?TM.make_ship+[0,0,1.2,2.6][i]:TM.show_up;rise(g,p(u,a,a+.4))});
rise($('again'),p(u,TM.make_ship+4.9,TM.make_ship+5.4));
const la=-Math.PI/2+t*1.4;$('ldot').setAttribute('cx',(960+240*Math.cos(la)).toFixed(1));$('ldot').setAttribute('cy',(500+240*Math.sin(la)).toFixed(1));$('ldot').setAttribute('opacity',p(u,TM.show_up,TM.show_up+.5));

rise($('walker'),p(u,TM.trophy,TM.trophy+.5));
$('tro').setAttribute('opacity',(p(u,TM.trophy+.3,TM.trophy+.9)*(1-p(u,TM.horizon,TM.horizon+1))).toFixed(2));
rise($('hz'),p(u,TM.horizon+.6,TM.horizon+1.2));
laps.forEach((g,i)=>{const a=TM.horizon+5.4+i*.6;rise(g,p(u,a,a+.4))});
rise($('evst'),p(u,TM.horizon+7.5,TM.horizon+8.1));

rise($('lap'),p(u,TM.laptop,TM.laptop+.5));
const tk=(t*160)%(TS+400);let acc=0;TL.forEach(q=>{const l=cl(tk-acc,0,q[1]);acc+=q[1];q[0].setAttribute('d','M200 '+(330+q[2]*40)+'h'+l.toFixed(0));q[0].setAttribute('opacity',l>0?1:0)});
const lw=u>=TM.calendar+5.8,bn=u>=TM.calendar+7.6;
cal.forEach((c,i)=>{const a=TM.calendar+i*.12;rise(c[0],p(u,a,a+.3));c[1].setAttribute('stroke',lw&&c[3]?'var(--gain)':'var(--line)');c[2].setAttribute('r',lw&&c[3]?24:14);c[2].setAttribute('opacity',bn&&!c[3]?.3:1)});
rise($('lg0'),p(u,TM.calendar+5.8,TM.calendar+6.3));rise($('lg1'),p(u,TM.calendar+7.6,TM.calendar+8.1));
pg.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.stack_posts+i*.1,TM.stack_posts+i*.1+.2)));
$('tmr').setAttribute('y',(600+62*p(u,TM.stack_posts+1.4,TM.stack_posts+2.2)).toFixed(1));$('tmr').setAttribute('opacity',u>=TM.stack_posts+1.4?1:0);
rise($('tmw'),p(u,TM.stack_posts+.5,TM.stack_posts+1.1));

rise($('card'),p(u,TM.magnifier,TM.magnifier+.5));rise($('magw'),p(u,TM.magnifier+.3,TM.magnifier+.8));
$('mag').setAttribute('transform','translate('+(360+70*Math.sin(t*.9)).toFixed(1)+' '+(420+30*Math.cos(t*1.3)).toFixed(1)+')');
rise($('mk4'),p(u,TM.magnifier+3.8,TM.magnifier+4.3));rise($('lb4'),p(u,TM.magnifier+4.3,TM.magnifier+4.8));
const sk=p(u,TM.spiral,TM.spiral+3),sp=SPP[Math.round(sk*(SPP.length-1))];
$('spi').setAttribute('stroke-dashoffset',(SPL*(1-sk)).toFixed(1));$('sdot').setAttribute('cx',sp[0].toFixed(1));$('sdot').setAttribute('cy',sp[1].toFixed(1));$('sdot').setAttribute('opacity',sk>0?1:0);
rise($('sk'),p(u,TM.spiral,TM.spiral+.5));rise($('spt'),p(u,TM.spiral+.4,TM.spiral+1));

rise($('que'),p(u,TM.gatekeeper,TM.gatekeeper+.5));rise($('gate'),p(u,TM.gatekeeper+.5,TM.gatekeeper+1));rise($('wt'),p(u,TM.gatekeeper+1,TM.gatekeeper+1.5));
TG.forEach((g,i)=>{const a=TM.gatekeeper+4.2+i*.5;rise(g,p(u,a,a+.4))});
rise($('door'),p(u,TM.open_door,TM.open_door+.5));$('pnl').setAttribute('width',(200-170*p(u,TM.open_door+.3,TM.open_door+1.3)).toFixed(1));
rise($('you5w'),p(u,TM.open_door+.5,TM.open_door+1));$('you5').setAttribute('transform','translate('+(1000+240*p(u,TM.open_door+4.5,TM.open_door+6)).toFixed(1)+' 0)');
rise($('nop'),p(u,TM.open_door+.6,TM.open_door+1.2));rise($('bgn'),p(u,TM.open_door+4.5,TM.open_door+5));

rise($('clk'),p(u,TM.alarm_clock,TM.alarm_clock+.5));
const wob=u>=TM.alarm_clock&&u<TM.alarm_clock+1.5?4*Math.sin(t*40):0;$('clkin').setAttribute('transform','rotate('+wob.toFixed(2)+' 300 450)');
$('mh').setAttribute('transform','rotate('+((t*60)%360).toFixed(1)+' 300 450)');$('hh').setAttribute('transform','rotate('+((t*5)%360).toFixed(1)+' 300 450)');
ST.forEach((r,i)=>{const a=i?TM.chain+.6+i*.3:TM.small_block;rise(r,p(u,a,a+.4))});
rise($('sb'),p(u,TM.small_block+.3,TM.small_block+.8));
rise($('lp'),p(u,TM.chain,TM.chain+.5));
const rej=u>=TM.chain+2.5;$('lpa').setAttribute('stroke',rej?'var(--muted)':'var(--loss)');$('lpt').style.fill=rej?'var(--muted)':'var(--loss)';
rise($('hab'),p(u,TM.chain+2.8,TM.chain+3.3));

rise($('mir'),p(u,TM.mirror,TM.mirror+.6));
const fq=1-.7*p(u,TM.name_tag,TM.name_tag+.6);[0,1,2].forEach(i=>{const a=TM.mirror+1.7+i*.6;rise($('q'+i),p(u,a,a+.4)*fq)});
rise($('tag'),p(u,TM.name_tag,TM.name_tag+.6));$('tagw').textContent=TW[Math.floor(t/1.2)%3];

rise($('q8a'),p(u,TM.next_lap,TM.next_lap+.5));rise($('q8b'),p(u,TM.next_lap+.4,TM.next_lap+.9));rise($('q8c'),p(u,TM.next_lap+.8,TM.next_lap+1.3));
rise($('nlp'),p(u,TM.next_lap+1.5,TM.next_lap+2));rise($('nxt'),p(u,TM.next_lap+5,TM.next_lap+5.5));
const na=-Math.PI/2+t*1.6;$('nd').setAttribute('cx',(1340+70*Math.cos(na)).toFixed(1));$('nd').setAttribute('cy',(720+70*Math.sin(na)).toFixed(1));