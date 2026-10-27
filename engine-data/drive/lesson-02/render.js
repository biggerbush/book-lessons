rise($('lap'),p(u,TM.laptop,TM.laptop+.5));
const up=p(u,TM.laptop+6.4,TM.laptop+9);
$('ubar').setAttribute('width',(288*up).toFixed(1));
$('ulbl').textContent=up>0?(up<1?'UPGRADING…':'UPGRADE READY'):'UPDATE AVAILABLE';
$('ulbl').style.fill=up>0?'var(--gain)':'var(--loss)';

rise($('mon'),p(u,TM.os_screen,TM.os_screen+.5));
rise($('v1'),p(u,TM.campfire,TM.campfire+.5));
rise($('fire'),p(u,TM.campfire+.3,TM.campfire+.8));
$('flame').setAttribute('transform','translate(1140 650) scale('+(1+.04*Math.sin(t*7)).toFixed(3)+','+(1+.1*Math.sin(t*5.3)).toFixed(3)+') translate(-1140 -650)');
P1.forEach((g,i)=>rise(g,p(u,TM.campfire+1+i*.6,TM.campfire+1.5+i*.6)));

rise($('cv'),p(u,TM.village,TM.village+.5));
HS.forEach((h,i)=>rise(h,p(u,TM.village+.3+i*.4,TM.village+.8+i*.4)));
rise($('cc'),p(u,TM.carrot_stick,TM.carrot_stick+.5));
$('carrot').setAttribute('transform','translate('+(8*Math.sin(t*2)).toFixed(1)+' 0)');
$('stick').setAttribute('transform','rotate('+(10*Math.sin(t*3)).toFixed(1)+' 890 340)');
rise($('cf'),p(u,TM.factory,TM.factory+.5));
[0,1,2].forEach(i=>rise($('st'+i),p(u,TM.factory+1.2+i*.6,TM.factory+1.7+i*.6)));
SM.forEach((c,i)=>{const k=((t*25+i*24)%70)/70;c.setAttribute('cy',(300-70*k).toFixed(1));c.setAttribute('opacity',(1-k).toFixed(2))});

rise($('belt'),p(u,TM.assembly_line,TM.assembly_line+.5));
const wk=p(u,TM.widgets,TM.widgets+.5);
WG.forEach((w,i)=>{const x=140+((i*100+t*90)%800);w.setAttribute('x',x.toFixed(1));w.setAttribute('opacity',(cl(Math.min((x-140)/40,(940-x)/40))*wk).toFixed(2))});
rise($('chart'),wk);
BR.forEach(([a,b,h],i)=>{const k=p(u,TM.widgets+.4+i*.5,TM.widgets+1.2+i*.5)*h;[a,b].forEach(r=>{r.setAttribute('y',(620-k).toFixed(1));r.setAttribute('height',k.toFixed(1))})});
rise($('clk'),p(u,TM.time_clock,TM.time_clock+.5));
$('hand').setAttribute('transform','rotate('+(t*60%360).toFixed(1)+' 200 690)');

rise($('cal'),p(u,TM.calendar_1995,TM.calendar_1995+.5));
rise($('ca'),p(u,TM.paid_team,TM.paid_team+.5));
PD.forEach((g,i)=>rise(g,p(u,TM.paid_team+.5+i*.5,TM.paid_team+1+i*.5)));
rise($('cb'),p(u,TM.volunteers,TM.volunteers+.5));
VL.forEach((g,i)=>rise(g,p(u,TM.volunteers+.5+i*.35,TM.volunteers+1+i*.35)));
rise($('bet'),p(u,TM.volunteers+6,TM.volunteers+6.5));

rise($('glb'),p(u,TM.wiki_globe,TM.wiki_globe+.6));
$('mer').setAttribute('rx',(170*Math.abs(Math.sin(t*.6))).toFixed(1));
DT.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.wiki_globe+.8+i*.3,TM.wiki_globe+1.1+i*.3)));
rise($('enc'),p(u,TM.closed_sign,TM.closed_sign+.5));
const sg=p(u,TM.closed_sign+.6,TM.closed_sign+1.2);
$('sign').setAttribute('opacity',sg);
$('sign').setAttribute('transform','translate(0 '+(-80*(1-sg)).toFixed(1)+') rotate('+(-8*sg).toFixed(1)+' 1180 420)');
rise($('noex'),p(u,TM.closed_sign+3.4,TM.closed_sign+4));

rise($('code'),p(u,TM.open_code,TM.open_code+.5));
CL.forEach((l,i)=>l.setAttribute('opacity',p(u,TM.open_code+.4+i*.3,TM.open_code+.6+i*.3)));
rise($('devs'),p(u,TM.open_code+3,TM.open_code+3.5));
rise($('warn'),p(u,TM.warning_icon,TM.warning_icon+.5));
$('tri').setAttribute('opacity',u>=TM.warning_icon?(.75+.25*Math.sin(t*6)).toFixed(2):1);
rise($('sub6'),p(u,TM.warning_icon+2.2,TM.warning_icon+2.7));
rise($('hrt'),p(u,TM.heart_badge,TM.heart_badge+.5));
$('hp6').setAttribute('transform','translate(200 690) scale('+(1+.06*Math.pow(Math.abs(Math.sin(t*3)),6)).toFixed(3)+')');
PL.forEach((g,i)=>rise(g,p(u,TM.heart_badge+.5+i*.6,TM.heart_badge+1+i*.6)));

const ib=p(u,TM.upgrade_bar,TM.upgrade_bar+3);
$('ibar').setAttribute('width',(1344*ib).toFixed(1));
$('ipct').textContent=ib<1?'INSTALLING MOTIVATION 3.0 · '+Math.round(100*ib)+'%':'MOTIVATION 3.0 INSTALLED';
rise($('sub7'),p(u,TM.upgrade_bar+3.4,TM.upgrade_bar+3.9));
rise($('tags'),p(u,TM.upgrade_bar+3.8,TM.upgrade_bar+4.3));
rise($('core'),p(u,TM.inner_spark,TM.inner_spark+.5));
const sp=p(u,TM.inner_spark+.3,TM.inner_spark+1)*(1+.08*Math.sin(t*4))*(1+.4*p(u,TM.inner_spark+4.5,TM.inner_spark+6));
$('spark').setAttribute('transform','translate(1180 600) scale('+sp.toFixed(3)+')');
rise($('coins'),p(u,TM.inner_spark+1.2,TM.inner_spark+1.7));
rise($('trend'),p(u,TM.inner_spark+4.5,TM.inner_spark+5));
const kk=p(u,TM.inner_spark+4.8,TM.inner_spark+7);let pts='';
for(let j=0;j<=40;j++){const k=j/40*kk;pts+=(180+660*k).toFixed(1)+','+(740-220*k*k).toFixed(1)+' '}
$('tline').setAttribute('points',pts);
rise($('fuel'),p(u,TM.inner_spark+6,TM.inner_spark+6.6));

const S=SC[8][0]/K;
rise($('q1'),p(u,S+.3,S+.8));rise($('q2'),p(u,S+.7,S+1.2));
rise($('q3'),p(u,S+4.6,S+5.1));rise($('q4'),p(u,S+5,S+5.5));
rise($('swap'),p(u,S+1.2,S+1.8));
$('spark8').setAttribute('transform','translate(1380 750) scale('+(.8+.06*Math.sin(t*4)).toFixed(3)+')');