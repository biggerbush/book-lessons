rise($('tc0'),p(u,TM.two_clocks,TM.two_clocks+.6)); rise($('tc1'),p(u,TM.two_clocks+1,TM.two_clocks+1.6));
rot(C0,t*3,t*36); rot(C1,-t*170+40*Math.sin(t*3),-t*520);

rise($('wc'),p(u,TM.wall_clock,TM.wall_clock+.5)); rot(C2,t*6,t*72);
rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
rise($('map'),p(u,TM.map_route,TM.map_route+.5)); $('route').setAttribute('stroke-dashoffset',(RL*(1-p(u,TM.map_route+.3,TM.map_route+2))).toFixed(1));
rise($('ok'),p(u,TM.map_route+5.3,TM.map_route+5.9));

rise($('cloud'),p(u,TM.thought_cloud,TM.thought_cloud+.6)); rise($('pl'),p(u,TM.thought_cloud+3.4,TM.thought_cloud+3.9)); rot(C3,t*120,t*500);
rise($('rw'),p(u,TM.rewind_icon,TM.rewind_icon+.5)); const fi=2-Math.floor(t*3)%3; FR.forEach((f,i)=>f.setAttribute('fill',i===fi?'var(--loss)':'var(--stage)'));
rise($('ff'),p(u,TM.fast_forward,TM.fast_forward+.5)); FQ.forEach((q,i)=>q.setAttribute('y',(640+8*Math.sin(t*4+i*1.3)).toFixed(1)));

rise($('vs'),p(u,TM.broken_vase,TM.broken_vase+.5)); const ck=p(u,TM.broken_vase+.8,TM.broken_vase+1.4);
$('vl').setAttribute('transform',`translate(${(-16*ck).toFixed(1)} ${(4*ck).toFixed(1)}) rotate(${(-9*ck).toFixed(1)} 790 350)`);
$('vr').setAttribute('transform',`translate(${(16*ck).toFixed(1)} ${(4*ck).toFixed(1)}) rotate(${(9*ck).toFixed(1)} 810 350)`);
rise($('va'),p(u,TM.broken_vase+1.6,TM.broken_vase+2.2)); rise($('nb'),p(u,TM.notebook,TM.notebook+.5)); rise($('sk'),p(u,TM.heavy_sack,TM.heavy_sack+.5));
$('sack').setAttribute('r',(40+35*p(u,TM.heavy_sack+.5,TM.heavy_sack+4)).toFixed(1)); rise($('same'),p(u,TM.heavy_sack+6.2,TM.heavy_sack+6.8));

rise($('mt'),p(u,TM.mountain_flag,TM.mountain_flag+.5)); rise($('wk'),p(u,TM.hiking_boots,TM.hiking_boots+.5));
const wx=200+360*p(u,TM.hiking_boots+.4,TM.hiking_boots+4.4); $('wki').setAttribute('transform',`translate(${wx.toFixed(1)} 0)`);
FP.forEach((f,i)=>f.setAttribute('opacity',u>=TM.hiking_boots&&wx>190+i*48+40?.5:0));
rise($('hall'),p(u,TM.mirage,TM.mirage+.6)); rise($('halo'),p(u,TM.mirage,TM.mirage+.6)); $('halo').setAttribute('stroke-dashoffset',(t*30).toFixed(1));
rise($('mq'),p(u,TM.mirage+.5,TM.mirage+1)); rise($('hw'),p(u,TM.mirage+5,TM.mirage+5.6));

rise($('st'),p(u,TM.storm_cloud,TM.storm_cloud+.5)); RN.forEach((r,i)=>r.setAttribute('transform',`translate(0 ${(370+(t*90+i*11)%30).toFixed(1)})`));
rise($('sw'),p(u,TM.storm_cloud+3.8,TM.storm_cloud+4.3)); rise($('ph'),p(u,TM.old_photos,TM.old_photos+.5));
rise($('sc'),p(u,TM.scale,TM.scale+.5)); $('beam').setAttribute('transform',`rotate(${(3*Math.sin(t*1.5)).toFixed(2)} 800 680)`); rise($('life'),p(u,TM.scale+2,TM.scale+2.6));

// tool: hand reaches, picks the clock up, then sets it down and leaves
rise($('tb'),p(u,TM.toolbox,TM.toolbox+.5));
const ha=TM.hand_tool, reach=p(u,ha,ha+.6), lift=p(u,ha+.6,ha+1.4), down=p(u,ha+3,ha+3.8), away=p(u,ha+3.8,ha+4.4);
const cy=620-240*lift*(1-down); $('tool').setAttribute('transform',`translate(400 ${cy.toFixed(1)})`); rot(C4,t*20,t*120);
const fy=u<ha+.6?260+265*reach:(u<ha+3.8?cy-95:525-265*away);
$('armP').setAttribute('d',`M400 220V${fy.toFixed(1)}`); $('fist').setAttribute('cy',fy.toFixed(1));
$('arm').setAttribute('opacity',(p(u,ha,ha+.2)*(1-away)).toFixed(2));
rise($('pk'),p(u,ha+.6,ha+1)*(1-p(u,ha+3,ha+3.3))); rise($('pd'),p(u,ha+3,ha+3.5));
rise($('tl'),p(u,TM.toolbox+4.9,TM.toolbox+5.4)); rise($('dr'),p(u,TM.open_door-.6,TM.open_door));
const dO=p(u,TM.open_door,TM.open_door+1), dw=280-190*dO, ds=40*dO;
$('door').setAttribute('points',`1040,300 ${(1040+dw).toFixed(1)},${(300+ds).toFixed(1)} ${(1040+dw).toFixed(1)},${(740-ds).toFixed(1)} 1040,740`);
$('knob').setAttribute('cx',(1040+dw-28*(1-.4*dO)).toFixed(1));
rise($('ar'),p(u,TM.open_door+.6,TM.open_door+1.2));

rise($('sn'),p(u,TM.sticky_note,TM.sticky_note+.5)); rise($('qm'),p(u,TM.question_mark,TM.question_mark+.5)); rise($('fk'),p(u,TM.question_mark+.6,TM.question_mark+1.1));
rise($('ya'),p(u,TM.deep_breath,TM.deep_breath+.5)); rise($('na'),p(u,TM.deep_breath+2.5,TM.deep_breath+3)); rise($('br'),p(u,TM.deep_breath+3.5,TM.deep_breath+4));
$('brc').setAttribute('r',(55+15*Math.sin(t*1.2)).toFixed(1));

const e8=SC[8][0]/K; rise($('qa'),p(u,e8+.5,e8+1)); rise($('qb'),p(u,e8+.9,e8+1.4)); rise($('qc'),p(u,e8+1.3,e8+1.8));
rise($('endclk'),p(u,e8+1.8,e8+2.4)); rise($('ms'),p(u,e8+5.4,e8+6)); rot(C5,t*4,t*48);