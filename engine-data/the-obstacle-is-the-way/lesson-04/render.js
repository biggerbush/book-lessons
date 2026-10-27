BR.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.brick_wall+i*.03,TM.brick_wall+i*.03+.3)));
const pc=(t%1.6)/1.6,pk=Math.floor(t/1.6),pd=pc<.5?ease(pc*2):1-ease((pc-.5)*2);
$('push').setAttribute('cx',(1120+92*pd).toFixed(1));$('push').setAttribute('cy',290+(pk*97)%210);$('push').setAttribute('opacity',p(u,TM.brick_wall+1,TM.brick_wall+1.5));

rise($('disc'),p(u,TM.action_icon,TM.action_icon+.5));rise($('move'),p(u,TM.action_icon+3.4,TM.action_icon+3.9));
const fade=1-.7*p(u,TM.small_steps,TM.small_steps+.5);
rise($('climbW'),p(u,TM.thinking_man,TM.thinking_man+.5));rise($('leap'),p(u,TM.thinking_man+.4,TM.thinking_man+.9)*fade);
rise($('leapL'),p(u,TM.thinking_man+.4,TM.thinking_man+.9)*(1-.4*p(u,TM.small_steps,TM.small_steps+.5)));
$('lx').setAttribute('opacity',p(u,TM.thinking_man+1.6,TM.thinking_man+2)*fade);
const cs=8*p(u,TM.small_steps+.2,TM.small_steps+2.6),cf=cs-Math.min(7,Math.floor(cs)),CXp=cs<1?260+cs*202:462+(cs-1)*125;
tr($('climber'),CXp-260,-cs*40-18*Math.sin(Math.PI*cf));
ST.forEach((s,i)=>{s.setAttribute('opacity',p(u,TM.thinking_man+1.6+i*.12,TM.thinking_man+1.9+i*.12));s.setAttribute('fill',cs>i+.5?'var(--gain)':'var(--stage)')});
rise($('ssl'),p(u,TM.small_steps,TM.small_steps+.5));

rise($('gr'),p(u,TM.grant,TM.grant+.5));rise($('army'),p(u,TM.union_army,TM.union_army+.5));
const sp=p(u,TM.union_army+.3,TM.union_army+1.3),ho=p(u,TM.union_army,TM.union_army+.5);
$('halfL').setAttribute('transform','translate('+(-14*sp).toFixed(1)+' 0)');$('halfR').setAttribute('transform','translate('+(14*sp).toFixed(1)+' 0)');
$('halfL').setAttribute('opacity',ho);$('halfR').setAttribute('opacity',ho);
draw($('riv'),RL,p(u,TM.river_city,TM.river_city+1.2));rise($('city'),p(u,TM.river_city+.6,TM.river_city+1.1));
rise($('swamp'),p(u,TM.river_city+5,TM.river_city+5.5));rise($('swl'),p(u,TM.river_city+5.2,TM.river_city+5.7));

cards.forEach((g,i)=>{const a=[TM.canal_dig,TM.failed_x,TM.failed_x+3.8,TM.failed_x+8.8][i];rise(g,p(u,a,a+.5))});
xs.forEach((x,i)=>x.setAttribute('opacity',p(u,TM.failed_x+3.8+i*.5,TM.failed_x+4.1+i*.5)));
rise($('crit'),p(u,TM.failed_x+5.4,TM.failed_x+5.9));rise($('kept'),p(u,TM.failed_x+8.8,TM.failed_x+9.3));

rise($('moon'),p(u,TM.gunboats,TM.gunboats+.5));
BT.forEach((b,i)=>{const a=TM.gunboats+.4+i*.5,q=$('riv2').getPointAtLength((.04+.84*p(u,a,a+3))*RL2);tr(b,q.x,q.y);b.setAttribute('opacity',u>=a?1:0)});
const mp=p(u,TM.gunboats+3,TM.gunboats+7.4),mq=$('march').getPointAtLength(mp*ML);draw($('march'),ML,mp);
$('lead').setAttribute('cx',mq.x.toFixed(1));$('lead').setAttribute('cy',mq.y.toFixed(1));$('lead').setAttribute('opacity',u>=TM.gunboats+3?1:0);
rise($('siege'),p(u,TM.victory_flag,TM.victory_flag+.5));rise($('flag'),p(u,TM.victory_flag+.6,TM.victory_flag+1.1));
rise($('stop'),p(u,TM.victory_flag+2.6,TM.victory_flag+3.1));rise($('funnel'),p(u,TM.victory_flag+5.6,TM.victory_flag+6.1));
FD.forEach((d,i)=>{if(i==2){const f=p(u,TM.victory_flag+7.6,TM.victory_flag+9);d.setAttribute('cx',(960+480*f).toFixed(1));d.setAttribute('cy',(530-20*f).toFixed(1))}else{const o=u>=TM.victory_flag+6.2+i*.3;d.setAttribute('class',o?'loss':'ink');d.setAttribute('fill-opacity',o?.3:1)}});

rise($('team'),p(u,TM.startup_team,TM.startup_team+.5));rise($('mvp'),p(u,TM.mvp_label,TM.mvp_label+.5));
rise($('loop'),p(u,TM.mvp_label+3.7,TM.mvp_label+4.2));
const la=-Math.PI/2+Math.max(0,u-TM.mvp_label-3.7)*1.3;
LD.setAttribute('cx',(880+180*Math.cos(la)).toFixed(1));LD.setAttribute('cy',(470+180*Math.sin(la)).toFixed(1));
LP.forEach((r,i)=>{const d=Math.abs(((la+Math.PI/2-i*2*Math.PI/3)%(2*Math.PI)+3*Math.PI)%(2*Math.PI)-Math.PI);r.setAttribute('stroke',d<.5?'var(--gain)':'var(--ink)')});
rise($('verd'),p(u,TM.feedback_loop,TM.feedback_loop+.5));rise($('doors'),p(u,TM.feedback_loop+3,TM.feedback_loop+3.5));

rise($('cal'),p(u,TM.calendar,TM.calendar+.5));CX.forEach((c,i)=>c.setAttribute('opacity',u>=TM.calendar+.6+i*.12?1:0));
rise($('clk'),p(u,TM.clock,TM.clock+.5));
$('hm').setAttribute('transform','rotate('+((t*120)%360).toFixed(1)+' 770 400)');$('hh').setAttribute('transform','rotate('+((t*10)%360).toFixed(1)+' 770 400)');
rise($('chart'),p(u,TM.clock+4.6,TM.clock+5.1));draw($('act'),AL,p(u,TM.clock+5,TM.clock+6.5));draw($('plan'),440,p(u,TM.clock+5,TM.clock+6.5));
C4.forEach((g,i)=>rise(g,p(u,TM.clock+7.6+i*.5,TM.clock+8.1+i*.5)));

rise($('nb'),p(u,TM.notebook,TM.notebook+.5));draw($('sc1'),S1,p(u,TM.notebook+.8,TM.notebook+2));
rise($('fs'),p(u,TM.first_step,TM.first_step+.5));draw($('sc2'),S2,p(u,TM.first_step+.6,TM.first_step+1.8));draw($('tick'),60,p(u,TM.first_step+3.8,TM.first_step+4.2));
rise($('stones'),p(u,TM.first_step+3.8,TM.first_step+4.3));rise($('hopW'),p(u,TM.first_step+3.8,TM.first_step+4.3));
const hs=4*p(u,TM.first_step+4.3,TM.first_step+8.5),hj=Math.min(3,Math.floor(hs)),hf=hs-hj,HA=SN[hj],HB=SN[hj+1];
tr($('hop'),HA[0]+(HB[0]-HA[0])*hf,HA[1]+(HB[1]-HA[1])*hf-40*Math.sin(Math.PI*hf));
STN.forEach((s,i)=>s.setAttribute('stroke',hs>=i-.05?'var(--gain)':'var(--ink)'));
rise($('days'),p(u,TM.first_step+9.2,TM.first_step+9.6));DY.forEach((d,i)=>d.setAttribute('fill',u>=TM.first_step+9.4+i*.3?'var(--gain)':'none'));

rise($('qa'),p(u,TM.question,TM.question+.5));rise($('qb'),p(u,TM.question+.4,TM.question+.9));rise($('qc'),p(u,TM.question+3,TM.question+3.5));
TRY.forEach((a,i)=>{const s=i?TM.question+3.2+i*.4:TM.question+.8,k=p(u,s,s+.6);a.setAttribute('opacity',k);a.setAttribute('transform','translate('+(-60*(1-k)+(i?6*Math.sin(t*3+i):0)).toFixed(1)+' 0)')});