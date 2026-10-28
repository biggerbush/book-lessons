rise($('t_tool'),p(u,TM.stone_tool,TM.stone_tool+.5));
$('t_arc').setAttribute('stroke-dashoffset',1-p(u,TM.stone_tool+.8,TM.stone_tool+1.6));
rise($('t_atom'),p(u,TM.stone_tool+1.4,TM.stone_tool+2));
$('t_orb').setAttribute('transform','rotate('+((t*40)%360).toFixed(1)+' 1410 320)');
rise($('t_face'),p(u,TM.stone_tool+3.8,TM.stone_tool+4.3));

rise($('p_chart'),p(u,TM.ape_to_rocket,TM.ape_to_rocket+.5));
$('p_curve').setAttribute('stroke-dashoffset',1-p(u,TM.ape_to_rocket+.5,TM.ape_to_rocket+4));
rise($('p_rocket'),p(u,TM.ape_to_rocket+3.6,TM.ape_to_rocket+4.2));
$('p_flame').setAttribute('opacity',(.5+.5*Math.abs(Math.sin(t*9))).toFixed(2));
rise($('p_meter'),p(u,TM.happy_meter,TM.happy_meter+.5));
$('p_needle').setAttribute('transform','rotate('+(25*Math.sin(t*1.7)+10*Math.sin(t*3.1)).toFixed(1)+' 1220 560)');
rise($('p_q'),p(u,TM.happy_meter+7,TM.happy_meter+7.6));

rise($('h_head'),p(u,TM.brain,TM.brain+.5));
$('h_mol').setAttribute('opacity',p(u,TM.brain+.8,TM.brain+1.6));
MOL.forEach((c,i)=>c.setAttribute('cy',(MP[i][1]+4*Math.sin(t*2+i)).toFixed(1)));
rise($('h_th'),p(u,TM.thermostat,TM.thermostat+.5));
rise($('h_chart'),p(u,TM.thermostat,TM.thermostat+.5));
rise($('h_wl'),p(u,TM.thermostat+1,TM.thermostat+1.6));
$('h_mood').setAttribute('stroke-dashoffset',1-p(u,TM.thermostat+.4,TM.thermostat+2.4));
rise($('h_b0'),p(u,TM.thermostat+6.2,TM.thermostat+6.8));rise($('h_b1'),p(u,TM.thermostat+7.4,TM.thermostat+8));

[TM.bar_level,TM.upward_arrow,TM.upward_arrow+1.2].forEach((a,i)=>{const k=p(u,a,a+.8),h=EH[i]*k,e=p(u,a+.6,a+1.4);
 BR[i].setAttribute('y',740-h);BR[i].setAttribute('height',h);
 EL[i].setAttribute('transform','translate(0 '+(740-(740-EX[i])*e).toFixed(1)+')');EL[i].setAttribute('opacity',e>0?1:0)});
rise($('e_st0'),p(u,TM.bar_level+1.4,TM.bar_level+1.9));
rise($('e_st1'),p(u,TM.upward_arrow+2.4,TM.upward_arrow+2.9));rise($('e_st2'),p(u,TM.upward_arrow+2.6,TM.upward_arrow+3.1));
rise($('e_arr'),p(u,TM.upward_arrow+1.8,TM.upward_arrow+2.4));
rise($('e_txt'),p(u,TM.upward_arrow+3.4,TM.upward_arrow+4));

CG.forEach((g,i)=>{const a=TM.chicken_cage+i*.25;rise(g,p(u,a,a+.4))});
rise($('c_lbl'),p(u,TM.chicken_cage+4.6,TM.chicken_cage+5.1));
rise($('c_scale'),p(u,TM.scale,TM.scale+.5));
const deg=12*p(u,TM.scale+.6,TM.scale+1.8),rad=deg*Math.PI/180,cx=240*Math.cos(rad),cy=240*Math.sin(rad);
$('c_beam').setAttribute('transform','rotate('+deg.toFixed(2)+' 1120 330)');
$('c_panL').setAttribute('transform','translate('+(1120-cx).toFixed(1)+' '+(330-cy).toFixed(1)+')');
$('c_panR').setAttribute('transform','translate('+(1120+cx).toFixed(1)+' '+(330+cy).toFixed(1)+')');
rise($('c_txt'),p(u,TM.scale+1.5,TM.scale+2.1));

rise($('m_monk'),p(u,TM.monk,TM.monk+.5));rise($('m_crave'),p(u,TM.monk+.8,TM.monk+1.3));
const rel=p(u,TM.open_hands+.3,TM.open_hands+2.3),fk=p(u,TM.monk+.6,TM.monk+1.2),tf=1-p(u,TM.open_hands,TM.open_hands+.8);
FE.forEach(([c,l],i)=>{const a=i*Math.PI/3+t*.5,r=230+90*rel,x=(800+r*Math.cos(a)).toFixed(1),y=(500+r*Math.sin(a)).toFixed(1);
 c.setAttribute('cx',x);c.setAttribute('cy',y);c.setAttribute('opacity',(fk*(1-rel)).toFixed(2));c.setAttribute('class',u>=TM.open_hands?'gain':'loss');
 l.setAttribute('x2',x);l.setAttribute('y2',y);l.setAttribute('opacity',(fk*tf).toFixed(2))});
rise($('m_hands'),p(u,TM.open_hands,TM.open_hands+.5));rise($('m_let'),p(u,TM.open_hands+1,TM.open_hands+1.5));
$('m_halo').setAttribute('opacity',p(u,TM.open_hands+.8,TM.open_hands+1.8));$('m_halo').setAttribute('transform','rotate('+((t*10)%360).toFixed(1)+' 800 500)');
rise($('m_txt'),p(u,TM.open_hands+7,TM.open_hands+7.6));

rise($('n0'),p(u,TM.green_rabbit,TM.green_rabbit+.5));rise($('n1'),p(u,TM.dna_strand,TM.dna_strand+.5));rise($('n2'),p(u,TM.cyborg,TM.cyborg+.5));
$('n_glow').setAttribute('r',(150+8*Math.sin(t*2)).toFixed(1));
let da='',db='';for(let y=280;y<=620;y+=10){const s=70*Math.sin((y-280)/50+t*1.5);da+=(y===280?'M':'L')+(800+s).toFixed(1)+' '+y;db+=(y===280?'M':'L')+(800-s).toFixed(1)+' '+y}
$('n_a').setAttribute('d',da);$('n_b').setAttribute('d',db);
RG.forEach((l,i)=>{const y=290+i*24,s=70*Math.sin((y-280)/50+t*1.5);l.setAttribute('x1',(800+s).toFixed(1));l.setAttribute('x2',(800-s).toFixed(1));l.setAttribute('y1',y);l.setAttribute('y2',y)});

rise($('q_old'),p(u,TM.question,TM.question+.5));
$('q_strike').setAttribute('x2',(112+(QW.v+8)*p(u,TM.question+2,TM.question+2.6)).toFixed(1));
rise($('q_new'),p(u,TM.question+5,TM.question+5.6));
rise($('g_god'),p(u,TM.gods_cloud,TM.gods_cloud+.6));
$('g_ndl').setAttribute('transform','rotate('+(200*Math.sin(t*.9)+90*Math.sin(t*2.3)).toFixed(1)+' 1200 680)');
$('g_bolt').setAttribute('opacity',(t%2.4)<.3?1:.35);
rise($('g_txt'),p(u,TM.gods_cloud+1,TM.gods_cloud+1.6));

rise($('z_top'),p(u,TM.mirror,TM.mirror+.5));rise($('z_mir'),p(u,TM.mirror+.3,TM.mirror+.9));
$('z_ref').setAttribute('transform','translate('+(6*Math.sin(t*1.2)).toFixed(1)+' 0)');
rise($('z_a'),p(u,TM.mirror+4.2,TM.mirror+4.7));rise($('z_b'),p(u,TM.mirror+4.6,TM.mirror+5.1));rise($('z_c'),p(u,TM.mirror+5,TM.mirror+5.5));
rise($('z_bot'),p(u,TM.mirror+5.8,TM.mirror+6.3));