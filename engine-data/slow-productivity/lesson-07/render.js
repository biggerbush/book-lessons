$('tgem').setAttribute('transform','translate(0 '+(8*Math.sin(t*1.5)).toFixed(1)+')');
SPK.forEach((e,i)=>{const a=TM.title_card+.4+i*.2,s=(.5+.5*Math.abs(Math.sin(t*1.6+i*1.3)))*p(u,a,a+.5);e.setAttribute('transform','translate('+SP0[i][0]+' '+SP0[i][1]+') scale('+s.toFixed(3)+')')});

rise($('pils'),p(u,TM.three_pillars,TM.three_pillars+.6));
const kk=p(u,TM.keystone,TM.keystone+1),wo=(1-kk)*3*Math.sin(t*2.2);
$('pl0').setAttribute('transform','rotate('+wo.toFixed(2)+' 440 740)');$('pl1').setAttribute('transform','rotate('+(-wo).toFixed(2)+' 1160 740)');
$('arc').setAttribute('transform','translate(0 '+(24*(1-kk)).toFixed(1)+')');
$('kst').setAttribute('opacity',kk.toFixed(2));$('kst').setAttribute('transform','translate(0 '+(-160*(1-kk)).toFixed(1)+')');
rise($('kcap'),p(u,TM.keystone+6.6,TM.keystone+7.2));

rise($('jw'),p(u,TM.jewel,TM.jewel+.5));
NT.forEach((n,i)=>{const c=(t*.5+i*.5)%1;n.setAttribute('transform','translate('+(NP[i][0]+10*Math.sin(t*2+i)).toFixed(1)+' '+(NP[i][1]-40*c).toFixed(1)+')');n.setAttribute('opacity',(Math.sin(Math.PI*c)*p(u,TM.coffee_shop,TM.coffee_shop+.5)).toFixed(2))});
CR.forEach((g,i)=>{const a=TM.coffee_shop+.3+i*.25;rise(g,p(u,a,a+.4))});
LB.forEach((g,i)=>{const a=TM.record_labels+i*.5;rise(g,p(u,a,a+.4))});

rise($('bc'),p(u,TM.big_check,TM.big_check+.5));
const sk=p(u,TM.big_check+1.2,TM.big_check+1.8);$('bcs').setAttribute('x2',(130+500*sk).toFixed(1));$('bcs').setAttribute('y2',(400-150*sk).toFixed(1));
rise($('sc'),p(u,TM.small_check,TM.small_check+.5));
rise($('tg'),p(u,TM.small_check+6.6,TM.small_check+7.1));$('tgf').setAttribute('width',(520*p(u,TM.small_check+6.8,TM.small_check+10.5)).toFixed(1));
rise($('ch3'),p(u,TM.album-.4,TM.album+.1));$('crv').setAttribute('stroke-dashoffset',(1-p(u,TM.album,TM.album+3)).toFixed(3));
rise($('slow'),p(u,TM.album+.6,TM.album+1.1));rise($('alb'),p(u,TM.album+2.6,TM.album+3.2));

rise($('ov'),p(u,TM.overloaded,TM.overloaded+.5));
BL.forEach((c,i)=>{const a=t*3+i*Math.PI/10;c.setAttribute('cx',(440+220*Math.cos(a)).toFixed(1));c.setAttribute('cy',(370+100*Math.sin(a)).toFixed(1))});
$('jug').setAttribute('transform','translate('+(3*Math.sin(t*20)).toFixed(1)+' 0)');
rise($('wb'),p(u,TM.workbench,TM.workbench+.5));
NO.forEach((n,i)=>{const a=TM.workbench+1.2+i*.5;rise(n,p(u,a,a+.4))});
rise($('fcap'),p(u,TM.workbench+6.9,TM.workbench+7.5));

const lv=p(u,TM.leverage,TM.leverage+1.2),la=-12*lv,lr=la*Math.PI/180;
$('beam').setAttribute('transform','rotate('+la.toFixed(2)+' 560 540)');
$('lgem').setAttribute('transform','translate('+(560-360*Math.cos(lr)).toFixed(1)+' '+(540-360*Math.sin(lr)).toFixed(1)+')');$('lgem').setAttribute('opacity',p(u,TM.leverage,TM.leverage+.4).toFixed(2));
$('rcard').setAttribute('transform','translate('+(560+360*Math.cos(lr)).toFixed(1)+' '+(540+360*Math.sin(lr)).toFixed(1)+')');$('rcard').setAttribute('opacity',p(u,TM.manager+.6,TM.manager+1.1).toFixed(2));
rise($('mgr'),p(u,TM.manager,TM.manager+.5));rise($('bub'),p(u,TM.manager+1.4,TM.manager+1.9));
rise($('bsy'),p(u,TM.busy_badge,TM.busy_badge+.5));$('bsyp').setAttribute('transform','translate('+(2*Math.sin(t*25)).toFixed(1)+' 0)');

rise($('ch6'),p(u,TM.ira_glass,TM.ira_glass+.5));rise($('ira'),p(u,TM.ira_glass+.3,TM.ira_glass+.8));
const gb=p(u,TM.gap_bridge+.5,TM.gap_bridge+3.5),H=200+160*gb,ty=330-30*gb;let pts=[];
for(let x=160;x<=1100;x+=20)pts.push(x+','+(700-H*Math.sqrt((x-160)/940)).toFixed(1));
$('skl').setAttribute('points',pts.join(' '));$('taste').setAttribute('transform','translate(0 '+(ty-330).toFixed(1)+')');
$('gapf').setAttribute('points','160,'+ty.toFixed(1)+' 1100,'+ty.toFixed(1)+' '+pts.slice().reverse().join(' '));
$('gapt').setAttribute('y',((ty+700-H)/2+8).toFixed(1));$('gapg').setAttribute('opacity',p(u,TM.ira_glass+2,TM.ira_glass+2.6).toFixed(2));
rise($('bks'),p(u,TM.gap_bridge,TM.gap_bridge+.5));

rise($('st0'),p(u,TM.small_bet,TM.small_bet+.5));rise($('st1'),p(u,TM.portfolio,TM.portfolio+.5));rise($('st2'),p(u,TM.calendar,TM.calendar+.5));
const nf=Math.round(8*p(u,TM.calendar+.8,TM.calendar+3.5));
CEL.forEach((c,i)=>{const f=ORD.indexOf(i)<nf;c.setAttribute('fill',f?'var(--stage)':'var(--loss)');c.setAttribute('stroke',f?'var(--line)':'var(--loss)')});
let mx=P7[0][0],my=P7[0][1];[p(u,TM.portfolio+.3,TM.portfolio+1.2),p(u,TM.calendar+.3,TM.calendar+1.2),p(u,TM.calendar+3.6,TM.calendar+4.5)].forEach((k,i)=>{mx+=(P7[i+1][0]-P7[i][0])*k;my+=(P7[i+1][1]-P7[i][1])*k-50*Math.sin(Math.PI*k)});
$('me7').setAttribute('transform','translate('+mx.toFixed(1)+' '+my.toFixed(1)+')');$('me7').setAttribute('opacity',p(u,TM.small_bet+.4,TM.small_bet+.9).toFixed(2));

['qa','qb','qc','qd'].forEach((id,i)=>{const a=TM.question+i*.4;rise($(id),p(u,a,a+.5))});
$('qgem').setAttribute('opacity',p(u,TM.question+1.6,TM.question+2.2).toFixed(2));$('qgem').setAttribute('transform','rotate('+(4*Math.sin(t*1.4)).toFixed(2)+' 1280 600)');