TG.forEach((g,i)=>{const a=TM.ghosts+i*.4;g.setAttribute('opacity',(p(u,a,a+.6)*(.25+.75*p(u,TM.ghosts+5,TM.ghosts+6))).toFixed(2));g.setAttribute('transform','translate(0 '+(8*Math.sin(t*1.5+i)).toFixed(1)+')')});

C1.forEach((c,i)=>{const b=TM.ghost_list+i*.2;rise(c[0],p(u,b,b+.5));const a=(i<3?TM.ghost_money:TM.ghost_heart)+(i%3)*1.4;rise(c[1],p(u,a,a+.5))});

rise($('cloud'),p(u,TM.thought_cloud,TM.thought_cloud+.6));
rise($('quote'),p(u,TM.quote_card,TM.quote_card+.6));
rise($('dial'),p(u,TM.control_dial,TM.control_dial+.5));
const dk=p(u,TM.control_dial+.6,TM.control_dial+2.4);
$('needle').setAttribute('transform','rotate('+(-70+135*dk+4*Math.sin(t*4)*(1-dk)).toFixed(1)+' 1000 720)');
rise($('habit'),p(u,TM.control_dial+4.9,TM.control_dial+5.5));

rise($('wallet'),p(u,TM.empty_wallet,TM.empty_wallet+.5));
$('wg').setAttribute('transform','translate(0 '+(60*(1-p(u,TM.empty_wallet+.5,TM.empty_wallet+1.6))+5*Math.sin(t*2)).toFixed(1)+')');
TAGS.forEach((g,i)=>{const a=TM.snail+i*.9;rise(g,p(u,a,a+.4))});
$('snail').setAttribute('opacity',p(u,TM.snail,TM.snail+.5));
$('snail').setAttribute('transform','translate('+(640+180*lin(u,TM.snail,TM.snail+14)).toFixed(1)+' 560)');
rise($('door'),p(u,TM.locked_door,TM.locked_door+.5));rise($('envs'),p(u,TM.locked_door+1,TM.locked_door+1.5));
EN.forEach((g,i)=>{const k=((t*50+i*127)%380)/380;g.setAttribute('transform','translate('+(1420-380*k).toFixed(1)+' 660)');g.setAttribute('opacity',Math.min(1,k*5,(1-k)*5).toFixed(2))});

rise($('hand'),p(u,TM.pointing_hand,TM.pointing_hand+.5));
$('handj').setAttribute('transform','translate('+(u>=TM.pointing_hand?8*Math.sin(t*5):0).toFixed(1)+' 0)');
const sh=1-.18*p(u,TM.pointing_hand+.5,TM.pointing_hand+1.5);
$('victim').setAttribute('transform','translate(600 603) scale('+sh.toFixed(3)+') translate(-600 -603)');
rise($('copies'),p(u,TM.copycat,TM.copycat+.6));$('vbadge').setAttribute('opacity',p(u,TM.copycat+1.5,TM.copycat+2));
rise($('bulb'),p(u,TM.crushed_idea,TM.crushed_idea+.5));
const cr=p(u,TM.crushed_idea+1.5,TM.crushed_idea+2.3);$('lid').setAttribute('y',(220+70*cr).toFixed(1));$('bulbC').style.fill=cr>.5?'var(--line)':'var(--gain)';
rise($('crd'),p(u,TM.crushed_idea+2,TM.crushed_idea+2.6));

rise($('seeds'),p(u,TM.three_seeds,TM.three_seeds+.6));
['pl0','ar0','pl1','ar1','pl2'].forEach((id,i)=>{const a=TM.fork_road+[0,1.2,2,3.2,4][i];rise($(id),p(u,a,a+.6))});
$('root').setAttribute('stroke-dashoffset',(RL*(1-p(u,TM.slow_vine,TM.slow_vine+4))).toFixed(1));
rise($('grad'),p(u,TM.slow_vine,TM.slow_vine+.6));

const sk=p(u,TM.shield,TM.shield+.6);rise($('shield'),sk);
ATK.forEach((g,i)=>g.setAttribute('transform','translate('+(560+80*Math.abs(Math.sin(t*1.6+i))).toFixed(1)+' 0)'));
$('atk').setAttribute('opacity',(sk*(1-.75*p(u,TM.climber+1,TM.climber+2.5))).toFixed(2));
[TM.flame,TM.written_plan,TM.written_plan+3.8,TM.climber].forEach((a,i)=>{rise(TIL[i][0],p(u,a,a+.5));TIL[i][1].setAttribute('stroke',u>=a?'var(--gain)':'var(--line)')});

rise($('mir'),p(u,TM.mirror,TM.mirror+.6));rise($('mg'),p(u,TM.mirror+1.5,TM.mirror+2.1));
rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
SL7.forEach((L,i)=>$('sc'+i).setAttribute('stroke-dashoffset',(L*(1-p(u,TM.notebook+1+i*2,TM.notebook+2.6+i*2))).toFixed(1)));
const as=TM.action_step;rise($('stp'),p(u,as,as+.5));
const kk=p(u,as+.6,as+1.6)+3*p(u,as+10.4,as+13);
$('clb').setAttribute('cx',(1085+90*kk).toFixed(1));$('clb').setAttribute('cy',(738-80*kk).toFixed(1));
$('g7').setAttribute('opacity',(p(u,as,as+.5)*(1-p(u,as+4.6,as+6))).toFixed(2));
const lt=u>=as+10.4;$('stlA').textContent=lt?'SMALL STEPS BUILD':'ONE DECISION,';$('stlB').textContent=lt?'PERSISTENCE':'ONE SMALL STEP';
rise($('grip'),p(u,as+4.6,as+5.2));

rise($('qa'),p(u,TM.question,TM.question+.5));rise($('qb'),p(u,TM.question+.4,TM.question+.9));rise($('qc'),p(u,TM.question+.8,TM.question+1.3));
rise($('qd'),p(u,TM.question+4.6,TM.question+5.2));
const qk=p(u,TM.question+4.6,TM.question+7);
$('qg').setAttribute('transform','translate('+(90*qk).toFixed(1)+' '+(-60*qk+8*Math.sin(t*1.5)).toFixed(1)+')');
$('qg').setAttribute('opacity',(p(u,TM.question+1,TM.question+1.6)*(1-.85*qk)).toFixed(2));