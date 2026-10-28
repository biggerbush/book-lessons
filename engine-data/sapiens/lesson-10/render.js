<<<<<<< HEAD
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
=======
rise($('globe'),p(u,TM.spark,TM.spark+.6));rise($('tman'),p(u,TM.spark+.5,TM.spark+1.1));
$('bolt').setAttribute('opacity',(p(u,TM.spark+1,TM.spark+1.4)*(.7+.3*Math.sin(t*5))).toFixed(2));
const hb=1+.12*Math.abs(Math.sin(t*6));$('rheart').setAttribute('transform','translate(1200 290) rotate('+(8*Math.sin(t*7)).toFixed(1)+') scale('+(.3*hb).toFixed(3)+')');$('rheart').setAttribute('opacity',p(u,TM.spark+4,TM.spark+4.6));

rise($('stone'),p(u,TM.stone_tool,TM.stone_tool+.6));drw($('pcurve'),p(u,TM.stone_tool+1.5,TM.rocket+1));
rise($('plab'),p(u,TM.rocket,TM.rocket+.5));rise($('rocket'),p(u,TM.rocket,TM.rocket+.6));
$('rbody').setAttribute('transform','translate(0 '+(-40*p(u,TM.rocket,TM.rocket+3)+2*Math.sin(t*20)).toFixed(1)+')');$('rflame').setAttribute('opacity',(.6+.4*Math.abs(Math.sin(t*12))).toFixed(2));
rise($('happy'),p(u,TM.scale,TM.scale+.6));rise($('verd'),p(u,TM.scale+4.9,TM.scale+5.5));

rise($('forag'),p(u,TM.farmer,TM.farmer+.5));rise($('farm'),p(u,TM.farmer+.6,TM.farmer+1.1));
$('barF').setAttribute('width',(400*p(u,TM.farmer+1,TM.farmer+2.2)).toFixed(1));$('drops').setAttribute('transform','translate(0 '+(12*((t*1.5)%1)).toFixed(1)+')');
rise($('cagelab'),p(u,TM.chicken,TM.chicken+.5));CG.forEach((g,i)=>rise(g,p(u,TM.chicken+i*.15,TM.chicken+i*.15+.4)));
rise($('joy'),p(u,TM.chicken+4.9,TM.chicken+5.5));

rise($('bal'),p(u,TM.balance,TM.balance+.6));
const h1=220+180*p(u,TM.old_car,TM.old_car+1),h2=160+180*p(u,TM.old_car+1.6,TM.old_car+2.8),y1=660-h1,y2=660-h2;
$('cC').setAttribute('y',y1.toFixed(1));$('cC').setAttribute('height',h1.toFixed(1));$('cE').setAttribute('y',y2.toFixed(1));$('cE').setAttribute('height',h2.toFixed(1));
$('gT1').setAttribute('d','M380 '+y1.toFixed(1)+'H640');$('gT2').setAttribute('d','M600 '+y2.toFixed(1)+'H640');$('gV').setAttribute('d','M640 '+y1.toFixed(1)+'V'+y2.toFixed(1));$('gL').setAttribute('y',((y1+y2)/2+8).toFixed(1));
rise($('oc'),p(u,TM.old_car,TM.old_car+.5));rise($('tread'),p(u,TM.treadmill,TM.treadmill+.6));rise($('trc'),p(u,TM.treadmill+.8,TM.treadmill+1.4));
$('belt').setAttribute('stroke-dashoffset',(-t*120%40).toFixed(1));const ph=Math.sin(t*8);
$('lg1').setAttribute('x2',(1180+40*ph).toFixed(1));$('lg2').setAttribute('x2',(1180-40*ph).toFixed(1));$('am1').setAttribute('x2',(1186-30*ph).toFixed(1));$('am2').setAttribute('x2',(1186+30*ph).toFixed(1));

rise($('brainG'),p(u,TM.brain,TM.brain+.6));
MO.forEach((g,i)=>{const k=p(u,TM.brain+.6+i*.5,TM.brain+1.1+i*.5);g.setAttribute('opacity',k.toFixed(2));g.setAttribute('transform','translate(0 '+((1-k)*14+3*Math.sin(t*1.3+i*2)).toFixed(1)+')')});
rise($('chart'),p(u,TM.lottery,TM.lottery+.5));drw($('mood'),p(u,TM.lottery+.3,TM.dial+1.2));rise($('winl'),p(u,TM.lottery+1,TM.lottery+1.5));rise($('gauge'),p(u,TM.lottery+1,TM.lottery+1.5));
const gv=.4+.5*p(u,TM.lottery+1.2,TM.lottery+2.2)-.5*p(u,TM.dial,TM.dial+2),ga=Math.PI*(1-gv);
$('ndl').setAttribute('x2',(1370+56*Math.cos(ga)).toFixed(1));$('ndl').setAttribute('y2',(410-56*Math.sin(ga)).toFixed(1));rise($('drift'),p(u,TM.dial,TM.dial+.6));

rise($('monk'),p(u,TM.monk,TM.monk+.6));rise($('pond'),p(u,TM.ripples,TM.ripples+.6));
RP.forEach(([e,o])=>{const f=(t*.35+o)%1;e.setAttribute('rx',(10+110*f).toFixed(1));e.setAttribute('ry',(3+33*f).toFixed(1));e.setAttribute('opacity',(1-f).toFixed(2))});
rise($('chase'),p(u,TM.ripples+3.8,TM.ripples+4.3));rise($('suff'),p(u,TM.ripples+4.2,TM.ripples+4.7));
const cx=1000+260*Math.sin(t*1.2),dir=Math.cos(t*1.2)>=0?1:-1;$('chp').setAttribute('transform','translate('+cx.toFixed(1)+' 360) scale('+dir+' 1)');
$('halo').setAttribute('opacity',(p(u,TM.ripples+7.6,TM.ripples+8.2)*(.7+.3*Math.sin(t*2))).toFixed(2));rise($('peace'),p(u,TM.ripples+7.6,TM.ripples+8.2));

rise($('rab'),p(u,TM.rabbit,TM.rabbit+.6));$('glow').setAttribute('opacity',(.15+.2*Math.abs(Math.sin(t*2))).toFixed(2));
rise($('dnaG'),p(u,TM.dna,TM.dna+.6));ER.setAttribute('class',u>=TM.dna+1.5?'s-gain':'s-line');$('sciss').setAttribute('transform','translate('+(-6*Math.abs(Math.sin(t*3))).toFixed(1)+' 0)');
rise($('cyb'),p(u,TM.cyborg,TM.cyborg+.6));rise($('next'),p(u,TM.cyborg+4.2,TM.cyborg+4.8));

rise($('god'),p(u,TM.crown,TM.crown+.6));rise($('where'),p(u,TM.crown+2.5,TM.crown+3));rise($('qcard'),p(u,TM.quote_card,TM.quote_card+.6));
rise($('comp'),p(u,TM.compass,TM.compass+.5));$('cneedle').setAttribute('transform','rotate('+(200*Math.sin(t*1.7)+120*Math.sin(t*3.1)).toFixed(1)+' 1330 440)');rise($('pwp'),p(u,TM.compass+.6,TM.compass+1.2));

rise($('mir'),p(u,TM.mirror,TM.mirror+.6));rise($('mlab'),p(u,TM.mirror+.5,TM.mirror+1.1));
rise($('qa'),p(u,TM.mirror+6.2,TM.mirror+6.7));rise($('qb'),p(u,TM.mirror+6.6,TM.mirror+7.1));rise($('qc'),p(u,TM.mirror+7,TM.mirror+7.5));rise($('ask'),p(u,TM.mirror+7.6,TM.mirror+8.1));
>>>>>>> 93ca47a (Draft 'Sapiens': lesson 10 of 10)
