rise($('t_q'),p(u,TM.job_interview,TM.job_interview+.6));
$('t_qt').setAttribute('transform','translate(0 '+(8*Math.sin(t*2)).toFixed(1)+')');
rise($('t_lbl'),p(u,TM.job_interview+4.2,TM.job_interview+4.8));

rise($('th'),p(u,TM.peter_thiel,TM.peter_thiel+.5));
rise($('bub1'),p(u,TM.speech_bubble,TM.speech_bubble+.5));
rise($('cand'),p(u,TM.speech_bubble+.3,TM.speech_bubble+.8));
const fz=p(u,TM.speech_bubble+5.4,TM.speech_bubble+6.2);
$('ice').setAttribute('opacity',(fz*.6).toFixed(2)); rise($('frz'),fz);

rise($('sch'),p(u,TM.school_desk,TM.school_desk+.5));
ECH.forEach((b,i)=>{const a=TM.school_desk+1+i*.4;rise(b,p(u,a,a+.3))});
rise($('lone'),p(u,TM.lone_figure,TM.lone_figure+.5));

rise($('say'),p(u,TM.common_view,TM.common_view+.5));
rise($('nod'),p(u,TM.crowd_nodding,TM.crowd_nodding+.5));
const nd=u>=TM.crowd_nodding;
NH.forEach((h,i)=>h.setAttribute('cy',(430+(nd?6*Math.abs(Math.sin(t*3+i*.6)):0)).toFixed(1)));
$('strike3').setAttribute('x2',(140+690*p(u,TM.crowd_nodding+2,TM.crowd_nodding+2.8)).toFixed(1));
rise($('nodl'),p(u,TM.crowd_nodding+1.5,TM.crowd_nodding+2));
rise($('tpl'),p(u,TM.template_card,TM.template_card+.6));

rise($('door'),p(u,TM.locked_door,TM.locked_door+.5));
const op=p(u,TM.locked_door+4.6,TM.locked_door+6),dw=260-180*op;
$('dp').setAttribute('width',dw.toFixed(1)); $('dk').setAttribute('cx',(160+dw-28).toFixed(1));
$('lock').setAttribute('opacity',(1-cl(op*3)).toFixed(2));
rise($('def'),p(u,TM.locked_door+4.6,TM.locked_door+5.2));
rise($('np'),p(u,TM.nature_people,TM.nature_people+.5));
rise($('map'),p(u,TM.treasure_map,TM.treasure_map+.5));
$('trail').setAttribute('stroke-dashoffset',(1-p(u,TM.treasure_map+.5,TM.treasure_map+2)).toFixed(3));
$('xmark').setAttribute('opacity',p(u,TM.treasure_map+1.8,TM.treasure_map+2.2));
rise($('mapc'),p(u,TM.treasure_map+1,TM.treasure_map+1.5));

rise($('house'),p(u,TM.empty_room,TM.empty_room+.5));
const sp=p(u,TM.empty_room+2.9,TM.empty_room+3.6);
WIN.forEach((w,i)=>{w.style.fill=sp>0?'var(--gain)':'var(--stage)';w.style.fillOpacity=sp>0?(sp*(.35+.2*Math.sin(t*2+i))).toFixed(2):1});
rise($('hl'),sp);
rise($('trav'),p(u,TM.traveler,TM.traveler+.5));
const lk=p(u,TM.connect_line,TM.connect_line+1.2);
$('link').setAttribute('stroke-dashoffset',(1-lk).toFixed(3));
$('arw').setAttribute('opacity',p(u,TM.connect_line+1,TM.connect_line+1.4));
const dv=p(u,TM.connect_line+1.2,TM.connect_line+1.8);
DT.forEach((d,i)=>{d.setAttribute('cx',(580+((t*110+i*116)%580)).toFixed(1));d.setAttribute('opacity',dv.toFixed(2))});
rise($('mkt'),p(u,TM.connect_line+1.4,TM.connect_line+1.9));
rise($('saw'),p(u,TM.connect_line+.8,TM.connect_line+1.4));

rise($('w_sub'),p(u,TM.small_steps,TM.small_steps+.5));
rise($('w0'),p(u,TM.small_steps+5,TM.small_steps+5.5));
rise($('w1'),p(u,TM.fear_shield,TM.fear_shield+.5));
rise($('w2'),p(u,TM.comfy_chair,TM.comfy_chair+.5));
const k=Math.floor(t*1.5)%8; CL.setAttribute('transform','translate('+(190+k*40)+' '+(600-k*14)+')');
$('zz').setAttribute('transform','translate(0 '+(-6*Math.sin(t*2)).toFixed(1)+')');

rise($('spot'),p(u,TM.magnifier,TM.magnifier+.5));
const mg=p(u,TM.magnifier+.4,TM.magnifier+.9),mx=590+50*Math.sin(t*.9),my=430+40*Math.cos(t*1.1);
rise($('magw'),mg); $('mag').setAttribute('transform','translate('+mx.toFixed(1)+' '+my.toFixed(1)+')');
$('hid').setAttribute('opacity',(mg*cl(1-Math.hypot(mx-600,my-440)/70)).toFixed(2));
rise($('look'),p(u,TM.magnifier+.8,TM.magnifier+1.3));
rise($('sh'),p(u,TM.shush_finger,TM.shush_finger+.5));
rise($('sc'),p(u,TM.small_circle,TM.small_circle+.5));

rise($('qa'),p(u,TM.notebook,TM.notebook+.5)); rise($('qb'),p(u,TM.notebook+.4,TM.notebook+.9)); rise($('qc'),p(u,TM.notebook+.8,TM.notebook+1.3));
rise($('nb'),p(u,TM.notebook+.3,TM.notebook+.8));
$('wl').setAttribute('width',(160*p(u,TM.notebook+1,TM.notebook+3.5)).toFixed(1));
rise($('qd'),p(u,TM.notebook+5.8,TM.notebook+6.4));