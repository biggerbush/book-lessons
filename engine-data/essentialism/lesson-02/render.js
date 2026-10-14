rise($('t0h'),p(u,TM.title_card,TM.title_card+.6));
const sp=p(u,TM.title_card+6.8,TM.title_card+8);
$('tA').setAttribute('opacity',f(p(u,TM.title_card+.4,TM.title_card+1)*(1-sp)));
$('tS').setAttribute('opacity',f(sp));
TS.forEach(([e],i)=>{const a=i*Math.PI/4+.2*Math.sin(t+i),d=30+80*sp+6*Math.sin(t*1.5+i);e.setAttribute('transform','translate('+f(1280+d*Math.cos(a))+' '+f(400+d*Math.sin(a))+') rotate('+f(a*180/Math.PI)+')')});

rise($('p1'),p(u,TM.focused_pro,TM.focused_pro+.5));
rise($('tg1'),p(u,TM.focused_pro+1,TM.focused_pro+1.5));
const k1=p(u,TM.single_arrow,TM.single_arrow+1.2);
$('a1').setAttribute('d',arD(340,520,340+810*k1,520,14)); $('a1').setAttribute('opacity',u>=TM.single_arrow?1:0);
rise($('ew1'),p(u,TM.single_arrow+5,TM.single_arrow+5.5));
rise($('tr1'),p(u,TM.trophy,TM.trophy+.5)); rise($('cs1'),p(u,TM.trophy+.4,TM.trophy+1));

rise($('p2'),p(u,TM.inbox-.6,TM.inbox));
ENV.forEach((g,i)=>{const a=i<3?TM.inbox+i*.5:TM.new_doors+7.3+(i-3)*.4;rise(g,p(u,a,a+.3))});
DR.forEach((g,i)=>{const a=TM.new_doors+i*1.4;rise(g,p(u,a,a+.5))});
rise($('gd2'),p(u,TM.new_doors+7.3,TM.new_doors+7.9));

const ks=p(u,TM.scatter_arrow+.6,TM.scatter_arrow+2.4),tf=p(u,TM.tired_face,TM.tired_face+1);
$('sc3').setAttribute('opacity',f(p(u,TM.scatter_arrow,TM.scatter_arrow+.4)));
SA.forEach(([e,q,a,d],i)=>{const r=d+tf*3*Math.sin(t*3+i),x=300+(560+r*Math.cos(a)-300)*ks,y=500+r*Math.sin(a)*ks;e.setAttribute('transform','translate('+f(x)+' '+f(y)+') rotate('+f(a*ks*180/Math.PI)+')');q.setAttribute('stroke',ks>.5?'var(--loss)':'var(--gain)')});
YS.forEach((g,i)=>{const a=TM.scatter_arrow+5.4+i*.45;rise(g,p(u,a,a+.3))});
rise($('pg3'),p(u,TM.tired_face,TM.tired_face+.5)); rise($('tf3'),tf);
TR.forEach((r,i)=>r.setAttribute('width',f(10*p(u,TM.tired_face+.5+i*.2,TM.tired_face+1.5+i*.2))));

rise($('ln4'),p(u,TM.foggy_lens,TM.foggy_lens+.5));
$('fg4').setAttribute('opacity',f(.92*p(u,TM.foggy_lens+2.1,TM.foggy_lens+5)));
dash('cu4',p(u,TM.foggy_lens+.5,TM.foggy_lens+2)); dash('cd4',p(u,TM.falling_chart,TM.falling_chart+1.5));
rise($('bw4'),p(u,TM.falling_chart+.3,TM.falling_chart+.8)); rise($('fd4'),p(u,TM.falling_chart+1,TM.falling_chart+1.6));

rise($('el5'),p(u,TM.cycle_wheel,TM.cycle_wheel+.5));
N5.forEach((g,i)=>{const a=TM.cycle_wheel+i*.6;rise(g,p(u,a,a+.4))});
A5.forEach((e,i)=>e.setAttribute('opacity',f(p(u,TM.cycle_wheel+3.8+i*1.8,TM.cycle_wheel+4.4+i*1.8))));
const da=-Math.PI/2+t*.8; $('dt5').setAttribute('cx',f(EX(da))); $('dt5').setAttribute('cy',f(EY(da)));
$('dt5').setAttribute('opacity',f(p(u,TM.cycle_wheel+10.6,TM.cycle_wheel+11.2)));
rise($('ct5'),p(u,TM.cycle_wheel+11.2,TM.cycle_wheel+11.8));

rise($('bk6'),p(u,TM.collins_book,TM.collins_book+.5)); rise($('cl6'),p(u,TM.collins_book+3,TM.collins_book+3.5));
rise($('qt6'),p(u,TM.pursuit_more,TM.pursuit_more+.6));
PL.forEach((e,i)=>{const a=TM.pursuit_more+.4+i*.2;rise(e,p(u,a,a+.3))});
FL.forEach((g,i)=>{const a=TM.company_tower+i*.35;rise(g,p(u,a,a+.3))});
rise($('an6'),p(u,TM.company_tower+2.6,TM.company_tower+3));
const tl=p(u,TM.company_tower+3.6,TM.company_tower+5.2);
$('tw6').setAttribute('transform','rotate('+f(7*tl)+' 1200 720)');
rise($('ls6'),p(u,TM.company_tower+3.6,TM.company_tower+4.2));

rise($('op7'),p(u,TM.magnifier,TM.magnifier+.5));
const cr=p(u,TM.magnifier+3.4,TM.magnifier+5.4),sh=p(u,TM.shield,TM.shield+1.2);
OP.forEach(([e,r0,a])=>{let r=r0*(1-.46*cr);r+=(Math.max(r,200)-r)*sh;e.setAttribute('x',f(600+r*Math.cos(a)-18));e.setAttribute('y',f(500+r*Math.sin(a)-18))});
const mk7=p(u,TM.magnifier+.6,TM.magnifier+2.4);
$('mg7').setAttribute('transform','translate('+f(1200-600*mk7)+' '+f(420+80*mk7)+')');
$('mg7').setAttribute('opacity',f(p(u,TM.magnifier+.2,TM.magnifier+.7)*(1-p(u,TM.back_arrow,TM.back_arrow+.5))));
dash('ba7',p(u,TM.back_arrow,TM.back_arrow+1.2)); $('bh7').setAttribute('opacity',u>=TM.back_arrow+1.1?1:0);
rise($('q7'),p(u,TM.back_arrow+.8,TM.back_arrow+1.3));
rise($('sh7'),sh); rise($('pr7'),p(u,TM.shield+.5,TM.shield+1.1));

rise($('qa'),p(u,TM.mirror,TM.mirror+.5)); rise($('qb'),p(u,TM.mirror+.4,TM.mirror+.9));
rise($('mr8'),p(u,TM.mirror+.2,TM.mirror+.7)); rise($('mi8'),p(u,TM.mirror+1,TM.mirror+1.5));
rise($('qc'),p(u,TM.mirror+3.4,TM.mirror+3.9)); rise($('qd'),p(u,TM.mirror+3.8,TM.mirror+4.3));
BU.forEach((e,i)=>{const a=TM.mirror+4.4+i*.3;rise(e,p(u,a,a+.3))});