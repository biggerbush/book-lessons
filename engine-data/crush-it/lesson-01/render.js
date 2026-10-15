u0=u;
const tc=TM.title_card;
R('t_glass',tc);$('t_wine').setAttribute('opacity',p(u,tc+.6,tc+1.6).toFixed(2));
coins.forEach((c,i)=>rise(c,p(u,tc+5+i*.3,tc+5.3+i*.3)));

R('g_tower',TM.tv_tower);R('g_crowd',TM.tv_tower+.4);
rise($('g_you'),p(u,TM.tv_tower+.9,TM.tv_tower+1.4)*(1-.55*p(u,TM.exec_desk+5.8,TM.exec_desk+6.4)));
R('g_exec',TM.exec_desk);R('g_try',TM.exec_desk+1);R('g_no',TM.exec_desk+2);R('g_hob',TM.exec_desk+5.8);

R('l_lap',TM.laptop);R('l_globe',TM.laptop+1);R('l_ico',TM.upload_arrow);
drawK('l_arr',p(u,TM.upload_arrow+.4,TM.upload_arrow+1.4));R('l_head',TM.upload_arrow+1.3,.3);R('l_cost',TM.upload_arrow+2.5);
$('l_mer').setAttribute('rx',(60*Math.abs(Math.cos(t*.6))+4).toFixed(1));
R('l_ppl',TM.crowd_globe);R('l_dir',TM.crowd_globe+1);

R('f_fam',TM.young_gary);$('f_arc').setAttribute('opacity',p(u,TM.young_gary+.3,TM.young_gary+.8).toFixed(2));
const fk=p(u,TM.young_gary+.8,TM.young_gary+3),fq=1-fk;
$('f_dot').setAttribute('cx',(fq*fq*330+2*fk*fq*525+fk*fk*720).toFixed(1));$('f_dot').setAttribute('cy',(fq*fq*620+2*fk*fq*300+fk*fk*620).toFixed(1));
$('f_dot').setAttribute('opacity',p(u,TM.young_gary+.8,TM.young_gary+1).toFixed(2));
R('f_store',TM.liquor_store);R('f_bot',TM.wine_bottle);
const wl=u>=TM.wine_bottle+.8;$('f_sign').setAttribute('fill',wl?'var(--gain)':'var(--stage)');$('f_sign').setAttribute('stroke',wl?'var(--gain)':'var(--ink)');
$('f_signt').textContent=wl?'WINE LIBRARY':'LIQUORS';$('f_signt').style.fill=wl?'var(--on-gain)':'var(--ink)';

R('v_cam',TM.video_camera);$('v_rec').setAttribute('opacity',u>=TM.video_camera?(Math.sin(t*5)>0?1:.25):0);
R('v_gary',TM.video_camera+.6);R('v_scr',TM.video_camera+1.4);
R('v_buck',TM.spit_bucket);rise($('v_en'),p(u,TM.spit_bucket+.8,TM.spit_bucket+1.3)*(.6+.4*Math.abs(Math.sin(t*4))));
R('v_tag',TM.spit_bucket+1.5);R('v_bub',TM.spit_bucket+6.1);
R('v_view',TM.viewer_hearts);R('v_lbl',TM.viewer_hearts+.5);
const hv=p(u,TM.viewer_hearts,TM.viewer_hearts+.6);
HR.forEach((h,i)=>{const c=(t*.5+i/6)%1;h.setAttribute('transform','translate('+(1170+i*55)+' '+(605-100*c).toFixed(1)+') scale(1.3)');h.setAttribute('opacity',(hv*Math.sin(Math.PI*c)).toFixed(2))});

R('c_reg',TM.cash_register);R('c_bars',TM.cash_register+.6);R('c_lab',TM.cash_register+1.5);
const cg=p(u,TM.cash_register+1,TM.cash_register+3);
BR.forEach((b,i)=>{const h=(60+i*45)*cg;b.setAttribute('y',(650-h).toFixed(1));b.setAttribute('height',h.toFixed(1))});
R('c_spot',TM.spotlight);PL.forEach((g,i)=>rise(g,p(u,TM.spotlight+1.5+i*.6,TM.spotlight+2+i*.6)));R('c_cost',TM.spotlight+5.8);

R('a_t0',SC[6][0]/K+.6);[1,2,3,4].forEach(i=>R('a_t'+i,TM.yarn_ball+(i-1)*.7));
R('a_dots',TM.niche_map);
DT.forEach(d=>{const on=d[1]&&u>=TM.niche_map+.8+d[2]/100;d[0].setAttribute('fill',on?'var(--gain)':'var(--muted)');d[0].setAttribute('opacity',on?1:.4)});
R('a_ring',TM.niche_map+1.8);R('a_lbl',TM.niche_map+2.2);

R('k_me',TM.thought_cloud);R('k_cloud',TM.thought_cloud+.4);
$('k_cb').setAttribute('transform','translate(0 '+(20+6*Math.sin(t*1.4)).toFixed(1)+')');
[0,1,2].forEach(i=>$('k_w'+i).setAttribute('opacity',p(u,TM.thought_cloud+1.2+i*.8,TM.thought_cloud+1.6+i*.8).toFixed(2)));
R('k_pad',TM.notepad);R('k_e0',TM.notepad+.3);drawK('k_s0',p(u,TM.notepad+1.3,TM.notepad+1.9));
R('k_e1',TM.notepad+1.9);drawK('k_c1',p(u,TM.notepad+2.5,TM.notepad+3.3));R('k_lab',TM.notepad+3.3);

R('qa',TM.list_three);R('qb',TM.list_three+.4);R('qc',TM.list_three+.8);R('z_list',TM.list_three+1.2);
[0,1,2].forEach(i=>R('z_r'+i,TM.list_three+1.5+i*.5));
drawK('z_circ',p(u,TM.list_three+4.6,TM.list_three+5.4));R('z_lab',TM.list_three+4.6);