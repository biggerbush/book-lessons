const tb=p(u,TM.title_bus,TM.title_bus+1.8); $('tbus').setAttribute('transform',`translate(${(1100+420*(1-tb)).toFixed(1)} 340)`);
TS.forEach((s,i)=>rise(s,p(u,TM.title_bus+2+i*.35,TM.title_bus+2.4+i*.35)));
rise($('tsign'),p(u,TM.title_bus+5.8,TM.title_bus+6.4));

rise($('bbus'),p(u,TM.bus,TM.bus+.6)); rise($('byou'),p(u,TM.bus+1,TM.bus+1.5));
BS.forEach((s,i)=>rise(s,p(u,TM.right_seats+i*.5,TM.right_seats+.4+i*.5))); rise($('blab'),p(u,TM.right_seats+.5,TM.right_seats+1));
const k1=p(u,TM.exit_door,TM.exit_door+1), k2=p(u,TM.exit_door+1,TM.exit_door+2.2);
WR.setAttribute('opacity',p(u,TM.right_seats+1.6,TM.right_seats+2)); WR.setAttribute('transform',`translate(${(62*k1+107*k2).toFixed(1)} ${(102*k2).toFixed(1)})`);
rise($('olab'),p(u,TM.exit_door+2,TM.exit_door+2.5)); rise($('bsign'),p(u,TM.exit_door+3.3,TM.exit_door+3.9));

let bx=160+260*p(u,SC[2][0]/K,TM.road_fork+1), by=365; const kk=.8*p(u,TM.self_starter,TM.self_starter+3);
if(kk>0){const q=NR.getPointAtLength(NL*kk);bx=q.x-200;by=q.y-105}
$('rbus').setAttribute('transform',`translate(${bx.toFixed(1)} ${by.toFixed(1)})`);
rise($('block'),p(u,TM.road_fork+.6,TM.road_fork+1.1)); rise($('nroad'),p(u,TM.road_fork+1.8,TM.road_fork+2.4));
rise($('pA'),p(u,TM.passengers,TM.passengers+.5)); rise($('pB'),p(u,TM.self_starter,TM.self_starter+.5));

rise($('wbank'),p(u,TM.wells_bank,TM.wells_bank+.5)); rise($('wball'),p(u,TM.crystal_ball,TM.crystal_ball+.5));
$('swirl').setAttribute('transform',`rotate(${(t*40%360).toFixed(1)} 720 420)`);
rise($('wph'),p(u,TM.talent_pool,TM.talent_pool+.5)); WF.forEach((f,i)=>{const a=TM.talent_pool+.4+i*.35;rise(f,p(u,a,a+.4))});
rise($('wnote'),p(u,TM.talent_pool+3.4,TM.talent_pool+4));

rise($('scloud'),p(u,TM.storm_cloud,TM.storm_cloud+.6)); RN.forEach(r=>r.setAttribute('stroke-dashoffset',(-(t*60)%18).toFixed(1)));
SB.forEach((b,i)=>b.setAttribute('transform',`rotate(${(u>=TM.storm_cloud+1?4*Math.sin(t*3+i*2):0).toFixed(2)} ${BX[i]} 560)`));
rise($('steam'),p(u,TM.ready_team,TM.ready_team+.5)); TF.forEach((f,i)=>{const a=TM.ready_team+.3+i*.3;rise(f,p(u,a,a+.4))});
rise($('schart'),p(u,TM.trend_arrow,TM.trend_arrow+.5));
$('lw').setAttribute('stroke-dashoffset',1-p(u,TM.trend_arrow+.4,TM.trend_arrow+2.4)); $('lb').setAttribute('stroke-dashoffset',1-p(u,TM.trend_arrow+.4,TM.trend_arrow+2.4));
rise($('clab'),p(u,TM.trend_arrow+2.2,TM.trend_arrow+2.7));

rise($('sc'),p(u,TM.scales,TM.scales+.6)); const tip=p(u,TM.scales+2.9,TM.scales+3.9);
$('beam').setAttribute('transform',`rotate(${(8*tip).toFixed(2)} 410 300)`); $('rstrike').setAttribute('opacity',tip);
rise($('hbl'),p(u,TM.high_bar,TM.high_bar+.5)); $('hbar').setAttribute('x2',(800+660*p(u,TM.high_bar+.3,TM.high_bar+2.5)).toFixed(1));
const cf=p(u,TM.clear_choice,TM.clear_choice+.8);
SF.forEach((f,i)=>{const a=TM.high_bar+.3+i*.3;rise(f,p(u,a,a+.4)*(i===4?1-.6*cf:1))});
MK.forEach((m,i)=>{const a=i<4?TM.high_bar+1.2+i*.5:TM.clear_choice;rise(m,p(u,a,a+.4))});
rise($('ttf'),p(u,TM.high_bar+.8,TM.high_bar+1.3)); rise($('cc'),p(u,TM.clear_choice+.4,TM.clear_choice+1));

rise($('hbook'),p(u,TM.rule_book,TM.rule_book+.5)); rise($('h1'),p(u,TM.magnify,TM.magnify+.5));
$('lens').setAttribute('transform',`translate(${(480+360*p(u,TM.magnify+.5,TM.magnify+3)).toFixed(1)} 476)`);
CG.setAttribute('opacity',u>=TM.magnify+3?1:0); rise($('keep'),p(u,TM.magnify+3,TM.magnify+3.6));
rise($('h2'),p(u,TM.clock,TM.clock+.5));
$('hm').setAttribute('transform',`rotate(${(t*90%360).toFixed(1)} 1220 450)`); $('hh').setAttribute('transform',`rotate(${(t*7.5%360).toFixed(1)} 1220 450)`);

const sp=p(u,TM.spotlight,TM.spotlight+.6); $('cone').setAttribute('opacity',sp); rise($('stars'),sp);
$('aO').setAttribute('opacity',p(u,TM.spotlight+1.5,TM.spotlight+2.1)); rise($('olabel'),p(u,TM.spotlight+1.5,TM.spotlight+2.1));
$('aP').setAttribute('opacity',p(u,TM.problem_box,TM.problem_box+.5)); rise($('pbox'),p(u,TM.problem_box,TM.problem_box+.5));
const ry=680-300*p(u,TM.rocket,TM.rocket+2.2), fl=u>=TM.rocket?40+15*Math.sin(t*20):12;
$('rkt').setAttribute('transform',`translate(1180 ${ry.toFixed(1)})`); $('rkt').setAttribute('opacity',p(u,TM.spotlight+1.5,TM.spotlight+2.1));
$('flame').setAttribute('d',`M-16 50Q0 ${(50+fl*2).toFixed(1)} 16 50Z`);
$('trail').setAttribute('d',ry<670?`M1180 760V${(ry+70).toFixed(1)}`:''); rise($('great'),p(u,TM.rocket+1.2,TM.rocket+1.8));

rise($('qm'),p(u,TM.mirror,TM.mirror+.6));
rise($('qa'),p(u,TM.mirror+4.2,TM.mirror+4.7)); rise($('qb'),p(u,TM.mirror+4.6,TM.mirror+5.1)); rise($('qc'),p(u,TM.mirror+5,TM.mirror+5.5));
EC.forEach((c,i)=>{const a=TM.mirror+5.6+i*.4;rise(c,p(u,a,a+.4))});