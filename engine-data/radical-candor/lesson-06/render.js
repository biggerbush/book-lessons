const R=(id,a)=>rise(typeof id==='string'?$(id):id,p(u,a,a+.5));
const L0=TM.ladder;
R('push',L0+.4);
CL.forEach(([o,i],k)=>{R(o,L0+k*.3);const s=p(u,L0+5.8+k*.2,L0+6.6+k*.2);i.setAttribute('transform',k%2?'translate('+(-150*s).toFixed(1)+' 0)':'translate(0 '+(-80*s).toFixed(1)+')');i.setAttribute('fill',k%2&&s>.5?'var(--muted)':'var(--ink)')});

R('chart',TM.growth_chart);
$('steep').style.strokeDashoffset=1-p(u,TM.steep_line,TM.steep_line+1.5);R('stl',TM.steep_line+1);
$('gentle').style.strokeDashoffset=1-p(u,TM.gentle_line,TM.gentle_line+1.5);R('gtl',TM.gentle_line+1);

R('rockg',TM.rock);R('nf',TM.rock+2);
[0,1,2].forEach(i=>R('tr'+i,TM.anchor+i*.6));
let w='';[810,840].forEach((y,j)=>{w+='M120 '+y;for(let x=120;x<=700;x+=20)w+='L'+x+' '+(y+6*Math.sin(x/40+t*2+j)).toFixed(1)});
$('waves').setAttribute('d',w);$('waves').setAttribute('opacity',p(u,TM.anchor,TM.anchor+.6));

R('rkw',TM.rocket);
const rs=.12+.88*p(u,TM.rocket,TM.rocket+2.2),fx=220+300*rs,fy=800-500*rs+4*Math.sin(t*3);
$('rk').setAttribute('transform','translate('+fx.toFixed(1)+' '+fy.toFixed(1)+') rotate(31)');
$('trail').style.strokeDashoffset=1-rs;
$('fl').setAttribute('d','M-14 50L0 '+(84+10*Math.sin(t*20)).toFixed(1)+'L14 50Z');
[0,1,2].forEach(i=>R('c'+i,TM.new_project+i*.6));
R('bored',TM.new_project+4.2);R('teach',TM.new_project+7.9);

R('scl',TM.scales);
$('beam').setAttribute('transform','rotate('+(2*Math.sin(t*1.4)).toFixed(2)+' 520 290)');
R('lab',TM.scales+3.8);R('team',TM.team_circle);
TH.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.team_circle+.3+i*.12,TM.team_circle+.6+i*.12)));
R('hlt',TM.team_circle+1.2);

R('parr',TM.promotion);
$('mv').setAttribute('transform','translate('+(530*p(u,TM.promotion+.4,TM.promotion+1.8)).toFixed(1)+' 0)');
$('ghost').setAttribute('opacity',p(u,TM.promotion+1.2,TM.promotion+1.8));
$('mvp').setAttribute('fill',u>=TM.sad_face?'var(--loss)':'var(--ink)');
$('frown').setAttribute('opacity',p(u,TM.sad_face,TM.sad_face+.4));
R('lost',TM.sad_face+.6);
R('rwh',TM.trophy);[0,1,2].forEach(i=>R('rw'+i,TM.trophy+.4+i*.6));

R('axis6',TM.calendar);
const nx=160+260*p(u,TM.calendar,TM.calendar+1.5)+1020*p(u,TM.life_events,TM.life_events+6),ny=along(nx);
SG.forEach((s,i)=>s.style.strokeDashoffset=1-cl((nx-PT[i][0])/(PT[i+1][0]-PT[i][0])));
EV.forEach((g,j)=>rise(g,cl((nx-PT[j+1][0])/60)));
const nv=p(u,TM.calendar,TM.calendar+.5);
$('nowd').setAttribute('cx',nx.toFixed(1));$('nowd').setAttribute('cy',ny.toFixed(1));$('nowd').setAttribute('opacity',nv);
$('nowt').setAttribute('x',nx.toFixed(1));$('nowt').setAttribute('y',(ny-32).toFixed(1));$('nowt').setAttribute('opacity',nv);
R('scott',TM.life_events+7.4);R('perf',TM.life_events+12.8);

R('conv',TM.conversation);R('bub1',TM.conversation+1.5);
BD.forEach((c,i)=>c.setAttribute('cy',(345-6*Math.max(0,Math.sin(t*5-i*.8))).toFixed(1)));
R('nb',TM.notebook);R('nq0',TM.notebook+.6);R('nq1',TM.notebook+3);
R('cols',TM.team_map);
TP.forEach(([o,i,dx],k)=>{const a=TM.team_map+.6+k*.3;rise(o,p(u,a,a+.3));i.setAttribute('transform','translate('+(dx*(1-p(u,a+.2,a+1.1))).toFixed(1)+' 0)')});

const O=TM.one_person;
R('qa',O);R('qb',O+.4);R('qc',O+3);R('qd',O+3.4);R('fork',O+.6);R('fkl',O+4);
$('fs').style.strokeDashoffset=1-p(u,O+1,O+2.4);
$('fg').style.strokeDashoffset=1-p(u,O+1.4,O+2.8);
$('qm').setAttribute('opacity',p(u,O+2.6,O+3.1));
$('qm').setAttribute('transform','translate(0 '+(-8*Math.abs(Math.sin(t*2.5))).toFixed(1)+')');