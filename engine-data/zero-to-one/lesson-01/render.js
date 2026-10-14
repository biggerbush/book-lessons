dr('t_arr',p(u,TM.title_card+.3,TM.title_card+1.5)); rise($('t_one'),p(u,TM.title_card+1.2,TM.title_card+1.8)); rise($('t_opp'),p(u,TM.title_card+5.4,TM.title_card+6));

rise($('gh'),p(u,TM.two_arrows,TM.two_arrows+.5));
dr('fa',p(u,TM.flat_arrow,TM.flat_arrow+1.2)); $('fah').setAttribute('opacity',p(u,TM.flat_arrow+1,TM.flat_arrow+1.3));
dr('ta',p(u,TM.tall_arrow,TM.tall_arrow+1.2)); $('tah').setAttribute('opacity',p(u,TM.tall_arrow+1,TM.tall_arrow+1.3));
rise($('hl'),p(u,TM.tall_arrow+2.6,TM.tall_arrow+3.1)); rise($('vl'),p(u,TM.tall_arrow+3,TM.tall_arrow+3.5));

rise($('s2sub'),p(u,TM.one_to_n,TM.one_to_n+.5)); rise($('s2n'),p(u,TM.one_to_n+3.4,TM.one_to_n+3.9));
rise($('tw1'),p(u,TM.typewriter,TM.typewriter+.5)); rise($('tw1a'),p(u,TM.typewriter_row,TM.typewriter_row+.4));
TWS.forEach((g,i)=>{const a=TM.typewriter_row+.3+i*.025; g.setAttribute('opacity',p(u,a,a+.2))});
rise($('s2end'),p(u,TM.typewriter_row+3.4,TM.typewriter_row+4));

rise($('s3sub'),p(u,TM.zero_to_one,TM.zero_to_one+.5)); rise($('s3n'),p(u,TM.zero_to_one+3.8,TM.zero_to_one+4.3));
rise($('tw2'),p(u,TM.zero_to_one+.3,TM.zero_to_one+.8)); rise($('wp'),p(u,TM.word_proc,TM.word_proc+.6));
dr('lp',p(u,TM.word_proc+4.4,TM.word_proc+5.4)); $('lph').setAttribute('opacity',p(u,TM.word_proc+5.2,TM.word_proc+5.5));
rise($('s3end'),p(u,TM.word_proc+4.6,TM.word_proc+5.2)); rise($('nw'),p(u,TM.word_proc+6.6,TM.word_proc+7.2));

rise($('pL'),p(u,TM.globe,TM.globe+.5)); rise($('gname'),p(u,TM.globe+3,TM.globe+3.5));
GD.forEach((r,i)=>{const a=t*.8+i*Math.PI/2; r.setAttribute('x',(431+190*Math.cos(a)).toFixed(1)); r.setAttribute('y',(451+60*Math.sin(a)).toFixed(1))});
rise($('pR'),p(u,TM.lightbulb,TM.lightbulb+.5)); $('rays').setAttribute('opacity',(.6+.4*Math.sin(t*3)).toFixed(2));
rise($('s4end'),p(u,TM.lightbulb+6.6,TM.lightbulb+7.1));

rise($('chn'),p(u,TM.china_map,TM.china_map+.5)); rise($('usa'),p(u,TM.us_skyline,TM.us_skyline+.6));
CM.forEach((r,i)=>{const a=TM.us_skyline+5.8+i*.2; rise(r,p(u,a,a+.3))});
rise($('smk'),p(u,TM.smoke_cloud,TM.smoke_cloud+.8)); $('smkin').setAttribute('transform','translate('+(12*Math.sin(t*.9)).toFixed(1)+' '+(-6*Math.abs(Math.sin(t*.6))).toFixed(1)+')');
rise($('s5end'),p(u,TM.smoke_cloud+1,TM.smoke_cloud+1.6));

rise($('cal'),p(u,TM.calendar_page,TM.calendar_page+.5)); rise($('cg'),p(u,TM.gates_portrait,TM.gates_portrait+.5)); rise($('cp'),p(u,TM.google_box,TM.google_box+.5));
$('cur').setAttribute('opacity',t%1<.5?1:0);
dr('x1',p(u,TM.google_box+4.2,TM.google_box+4.8)); dr('x2',p(u,TM.google_box+4.5,TM.google_box+5.1)); rise($('s6end'),p(u,TM.google_box+4.4,TM.google_box+5));

rise($('road'),p(u,TM.easy_road,TM.easy_road+.5)); $('ceil').setAttribute('opacity',p(u,TM.easy_road,TM.easy_road+.5));
$('rp').setAttribute('transform','translate('+(160+480*p(u,TM.easy_road+.3,TM.easy_road+3.5)).toFixed(1)+' 726)');
rise($('mtn'),p(u,TM.hard_climb,TM.hard_climb+.5));
const ck=p(u,TM.hard_climb+.5,TM.hard_climb+8); $('clb').setAttribute('cx',(780+330*ck).toFixed(1)); $('clb').setAttribute('cy',(698-390*ck).toFixed(1));
$('ceil').setAttribute('transform','translate(0 '+(460-220*p(u,TM.hard_climb+4.2,TM.hard_climb+5.6)).toFixed(1)+')');
rise($('s7end'),p(u,TM.hard_climb+8.7,TM.hard_climb+9.3));

rise($('qm'),p(u,TM.mirror,TM.mirror+.5));
['qa','qb','qc','qd'].forEach((id,i)=>{const a=TM.mirror+2.9+i*.5; rise($(id),p(u,a,a+.5))});
rise($('qg'),p(u,TM.mirror+5,TM.mirror+5.6));