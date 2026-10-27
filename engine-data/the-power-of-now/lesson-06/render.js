const rk=p(u,TM.racing_head,TM.racing_head+.6), bk=p(u,TM.racing_head+5.8,TM.racing_head+6.6);
D0.forEach((c,i)=>{const f=(t*.45+i/6)%1,a=-Math.PI/2+(i-2.5)*.42,d=40+140*f;c.setAttribute('cx',(1300+Math.cos(a)*d).toFixed(1));c.setAttribute('cy',(330+Math.sin(a)*d).toFixed(1));c.setAttribute('opacity',(rk*(1-bk)*(1-f)).toFixed(2))});
paint(F0,ALL,bk>.5); $('aura0').setAttribute('opacity',(bk*(.2+.06*Math.sin(t*2))).toFixed(2));

rise($('cl1'),p(u,TM.thought_cloud,TM.thought_cloud+.5)); rise($('wk1'),p(u,TM.thought_cloud+.3,TM.thought_cloud+.8));
rise($('st1'),p(u,TM.busy_street,TM.busy_street+.5)); rise($('out1'),p(u,TM.busy_street+5.4,TM.busy_street+5.9));
rise($('bo1'),p(u,TM.body_outline,TM.body_outline+.5));
paint(F1,['chest','belly'],u>=TM.body_outline+1); paint(F1,['arms','legs','feet','hands','head'],u>=TM.body_outline+2);
$('au1').setAttribute('opacity',(p(u,TM.body_outline+1,TM.body_outline+2)*(.18+.06*Math.sin(t*2))).toFixed(2));

const g2=TM.glowing_hands;
rise($('c2a'),p(u,g2,g2+.5)); rise($('c2b'),p(u,g2+1.5,g2+2));
$('k21').setAttribute('stroke-dashoffset',(1-p(u,g2+3.4,g2+4)).toFixed(3)); $('k22').setAttribute('stroke-dashoffset',(1-p(u,g2+4,g2+4.6)).toFixed(3));
rise($('fg2'),p(u,g2+.5,g2+1)); rise($('in2'),p(u,g2+6.2,g2+6.7)); paint(F2,['hands'],u>=g2+6.4);
DT2.setAttribute('opacity',p(u,TM.energy_field,TM.energy_field+1));
DD.forEach((d,i)=>d.setAttribute('opacity',(.3+.7*Math.abs(Math.sin(t*2.2+i*1.7))).toFixed(2)));
rise($('dr2'),p(u,TM.energy_field+5.8,TM.energy_field+6.4));

rise($('clk3'),p(u,TM.clock_face,TM.clock_face+.5)); rise($('tl3'),p(u,TM.clock_face+.3,TM.clock_face+.8));
$('mh3').setAttribute('transform','rotate('+((t*240)%360).toFixed(1)+' 330 420)'); $('hh3').setAttribute('transform','rotate('+((t*20)%360).toFixed(1)+' 330 420)');
$('th3').setAttribute('opacity',p(u,TM.clock_face+.6,TM.clock_face+1.1)); $('th3').setAttribute('transform','translate('+(800+540*Math.sin(t*1.1)).toFixed(1)+' 650)');
rise($('fg3'),p(u,TM.heartbeat,TM.heartbeat+.5));
HR3.setAttribute('transform','translate(800 378) scale('+(.7*(1+.18*Math.pow(Math.abs(Math.sin(t*2.6)),8))).toFixed(3)+')');
let pe='';for(let x=1000;x<=1440;x+=4){const k=((x+t*240)%120+120)%120;pe+=x+','+(430-60*Math.max(0,1-Math.abs(k-60)/6)+22*Math.max(0,1-Math.abs(k-70)/4)).toFixed(1)+' '}
$('ecg3').setAttribute('points',pe); $('ecg3').setAttribute('opacity',p(u,TM.heartbeat+.4,TM.heartbeat+1));
const nw=TM.heartbeat+3.8; rise($('now3'),p(u,nw,nw+.5)); rise($('bk3'),p(u,nw+.3,nw+.9)); $('nl3').style.fill=u>=nw?'var(--gain)':'';

const ce=p(u,TM.closed_eyes+3.8,TM.closed_eyes+4.4);
rise($('lb4'),p(u,TM.closed_eyes,TM.closed_eyes+.5)); ['e41','e42'].forEach(e=>$(e).setAttribute('ry',(14-12*ce).toFixed(1)));
$('bm4').setAttribute('opacity',ce); $('bp4').setAttribute('stroke-dashoffset',(-t*40).toFixed(1));
rise($('hd4'),p(u,TM.closed_eyes+4,TM.closed_eyes+4.6)); rise($('q4'),p(u,TM.closed_eyes+8.4,TM.closed_eyes+9));
const bz=p(u,TM.faint_buzz,TM.faint_buzz+1); $('bz4').setAttribute('opacity',bz);
G4.forEach(c=>c.setAttribute('opacity',(bz*(.6+.3*Math.sin(t*3))).toFixed(2)));
RG4.forEach(([c,j])=>{const f=(t*.6+j*.5)%1;c.setAttribute('r',(85+40*f).toFixed(1));c.setAttribute('opacity',(1-f).toFixed(2))});
TK4.forEach(([l,x,a],i)=>{const r2=116+5*Math.sin(t*18+i);l.setAttribute('x1',(x+108*Math.cos(a)).toFixed(1));l.setAttribute('y1',(460+108*Math.sin(a)).toFixed(1));l.setAttribute('x2',(x+r2*Math.cos(a)).toFixed(1));l.setAttribute('y2',(460+r2*Math.sin(a)).toFixed(1))});

const A5=[TM.feet_glow+.3,TM.feet_glow+1.8,TM.arms_chest+.3,TM.arms_chest+1.6,TM.arms_chest+2.9,TM.whole_glow+.3], PT5=[['feet'],['legs'],['arms'],['belly'],['chest'],['head','hands']];
L5.forEach((r,i)=>{const on=u>=A5[i];paint(F5,PT5[i],on);rise(r[0],p(u,A5[i]-.2,A5[i]+.3));r[1].setAttribute('fill',on?'var(--gain)':'var(--stage)')});
$('au5').setAttribute('opacity',(p(u,TM.whole_glow,TM.whole_glow+1)*(.18+.06*Math.sin(t*1.5))).toFixed(2));
$('sq5').setAttribute('opacity',(1-p(u,TM.whole_glow+4.6,TM.whole_glow+6.6)).toFixed(2)); $('sq5').setAttribute('transform','translate(0 '+(4*Math.sin(t*5)).toFixed(1)+')');
rise($('qt5'),p(u,TM.whole_glow+4.6,TM.whole_glow+5.2));

const sw=p(u,TM.split_beam+3.8,TM.split_beam+6);
rise($('bm6'),p(u,TM.split_beam,TM.split_beam+.5)); $('bt6').setAttribute('stroke-width',(40-30*sw).toFixed(1)); $('bb6').setAttribute('stroke-width',(10+30*sw).toFixed(1));
rise($('ls6'),p(u,TM.split_beam+4.2,TM.split_beam+4.8));
rise($('fg6'),p(u,TM.tree_roots,TM.tree_roots+.5)); RT6.forEach((r,i)=>r.setAttribute('stroke-dashoffset',(1-p(u,TM.tree_roots+.3+i*.2,TM.tree_roots+1.6+i*.2)).toFixed(3)));
paint(F6,['chest','belly','legs','feet'],u>=TM.tree_roots+1); rise($('rw6'),p(u,TM.tree_roots+1,TM.tree_roots+1.5));
const cf=p(u,TM.calm_face,TM.calm_face+.6); $('cf6').setAttribute('opacity',cf); $('cd6').setAttribute('opacity',cf);
CD6.forEach((g,i)=>{const f=((t*50+i*190)%520)/520;g.setAttribute('transform','translate('+(1400-520*f).toFixed(1)+' '+(240+10*Math.sin(t+i*2)).toFixed(1)+')');g.setAttribute('opacity',cl(Math.min(f,1-f)*5).toFixed(2))});
rise($('tx6'),p(u,TM.calm_face+.4,TM.calm_face+1));

rise($('k70'),p(u,TM.two_people,TM.two_people+.5)); rise($('bt7'),p(u,TM.two_people+.8,TM.two_people+1.3));
rise($('lw7'),p(u,TM.two_people+5.8,TM.two_people+6.3)); $('gl7').setAttribute('r',(12+4*Math.sin(t*3)).toFixed(1));
rise($('k71'),p(u,TM.waiting_line,TM.waiting_line+.5)); rise($('k72'),p(u,TM.stress_spike,TM.stress_spike+.5));
const calm=p(u,TM.stress_spike+2,TM.stress_spike+4); let sp='';
for(let i=0,x=1228;x<=1316;x+=8,i++)sp+=x+','+(342+(i%2?-1:1)*(9+3*Math.sin(t*9+i))*(1-.6*calm)).toFixed(1)+' ';
$('sp7').setAttribute('points',sp);
$('st7').setAttribute('transform','translate('+(4*Math.sin(t*23)*(1-calm)).toFixed(1)+' 0)'); $('st7').setAttribute('opacity',(1-.7*calm).toFixed(2));
rise($('ia7'),p(u,TM.stress_spike+2,TM.stress_spike+2.5));

const op=p(u,TM.open_palms,TM.open_palms+.6);
rise($('pm8'),op); P8.forEach(c=>c.setAttribute('opacity',(op*(.6+.3*Math.sin(t*1.2))).toFixed(2)));
$('rg8').setAttribute('r',(150+8*Math.sin(t*1.2)).toFixed(1)); $('rg8').setAttribute('opacity',op);
rise($('lb8'),p(u,TM.open_palms+.4,TM.open_palms+1));
rise($('qa'),p(u,TM.open_palms+5,TM.open_palms+5.5)); rise($('qb'),p(u,TM.open_palms+5.4,TM.open_palms+5.9)); rise($('qc'),p(u,TM.open_palms+5.8,TM.open_palms+6.3));