const tf=TM.title_fork;draw($('f0'),p(u,tf,tf+1));draw($('f1'),p(u,tf+.9,tf+2));draw($('f2'),p(u,tf+.9,tf+2));
rise($('fe0'),p(u,tf+1.8,tf+2.3));rise($('fe1'),p(u,tf+2.1,tf+2.6));
$('tdot').setAttribute('cy',(850-240*p(u,tf+.3,tf+1.3)).toFixed(1));$('tdot').setAttribute('cx',(1330+(u>tf+2.6?40*Math.sin(t*1.2):0)).toFixed(1));

rise($('r1L'),p(u,TM.left_road,TM.left_road+.6));rise($('r1R'),p(u,TM.right_road,TM.right_road+.6));
rise($('trav'),p(u,TM.traveler,TM.traveler+.5));$('travI').setAttribute('transform','translate('+(70*Math.sin(t*.9)).toFixed(1)+' 0)');
rise($('neither'),p(u,TM.traveler+2,TM.traveler+2.6));

const dn=TM.dna_printer;rise($('pr'),p(u,dn,dn+.5));rise($('helix'),p(u,dn+.6,dn+1.2));MN.forEach((m,i)=>rise(m,p(u,dn+1.6+i*.3,dn+1.9+i*.3)));
rise($('a2a'),p(u,TM.small_group,TM.small_group+.4));rise($('grp'),p(u,TM.small_group,TM.small_group+.5));rise($('bug'),p(u,TM.small_group+1.2,TM.small_group+1.7));
const wm=TM.world_map;rise($('a2b'),p(u,wm,wm+.4));rise($('map'),p(u,wm,wm+.5));DT.forEach(d=>d[0].setAttribute('opacity',p(u,wm+.6+d[1]*3,wm+.9+d[1]*3)));
rise($('fast'),p(u,wm+2.8,wm+3.4));

const lb=TM.lab_building;rise($('lab'),p(u,lb,lb+.5));rise($('leak'),p(u,lb+3.8,lb+4.3));
DR.forEach((d,i)=>{const c=(t*.7+i/3)%1;d.setAttribute('cy',(640+130*c).toFixed(1));d.setAttribute('opacity',(1-c).toFixed(2))});
const ws=TM.warning_sign;LB.forEach((g,i)=>rise(g,p(u,ws+i*.25,ws+i*.25+.4)));rise($('labsL'),p(u,ws+.4,ws+.9));
rise($('gauge'),p(u,ws+.3,ws+.8));$('ndl').setAttribute('transform','rotate('+(-75+140*p(u,ws+.8,ws+4)).toFixed(1)+' 1260 560)');rise($('warn'),p(u,ws+3,ws+3.5));

rise($('crowd4'),p(u,TM.frightened,TM.frightened+.6));
const cr=TM.control_room;rise($('a4'),p(u,cr,cr+.4));rise($('bigeye'),p(u,cr,cr+.6));
const ix=(760+40*Math.sin(t*1.3)).toFixed(1);$('iris').setAttribute('cx',ix);$('pupil').setAttribute('cx',ix);
$('rings').setAttribute('stroke-dashoffset',(t*30).toFixed(1));
const cw=TM.camera_wall;MON.forEach((m,i)=>rise(m,p(u,cw+i*.2,cw+i*.2+.4)));REC.forEach((r,i)=>r.setAttribute('opacity',Math.sin(t*4+i)>0?1:.2));
$('scan4').setAttribute('y',(260+370*((t*.5)%1)).toFixed(1));$('scan4').setAttribute('opacity',p(u,cw+1.8,cw+2.3));rise($('wallL'),p(u,cw+1,cw+1.5));

rise($('city'),p(u,TM.china_city,TM.china_city+.6));CM.forEach((c,i)=>c.setAttribute('fill-opacity',(.08+.2*Math.abs(Math.sin(t*1.5+i))).toFixed(2)));
const fs=TM.face_scanner;rise($('face'),p(u,fs,fs+.5));$('fscan').setAttribute('y',(360+160*Math.abs(Math.sin(t*1.6))).toFixed(1));rise($('tags'),p(u,fs+1.5,fs+2));
rise($('bars'),p(u,TM.prison_bars,TM.prison_bars+.7));rise($('price'),p(u,TM.prison_bars+.9,TM.prison_bars+1.5));

rise($('pause'),p(u,TM.pause_button,TM.pause_button+.5));
const es=TM.empty_shelf;rise($('a6a'),p(u,es,es+.4));rise($('shelf'),p(u,es,es+.6));
const gh=TM.globe_heat,hk=p(u,gh+.5,gh+5);rise($('a6b'),p(u,gh,gh+.4));rise($('globe'),p(u,gh,gh+.5));
$('gfill').setAttribute('fill-opacity',(.08+.5*hk).toFixed(2));const mh=40+170*hk;$('merc').setAttribute('y',(540-mh).toFixed(1));$('merc').setAttribute('height',mh.toFixed(1));
[0,1,2].forEach(i=>rise($('pb'+i),p(u,gh+1.2+i*1.1,gh+1.7+i*1.1)));

rise($('scale'),p(u,TM.balance_scale,TM.balance_scale+.6));
const th=.07*Math.sin(t*1.2),cx=300*Math.cos(th),sy=300*Math.sin(th);
$('beam').setAttribute('d','M'+(800-cx).toFixed(1)+' '+(300-sy).toFixed(1)+'L'+(800+cx).toFixed(1)+' '+(300+sy).toFixed(1));
$('panL').setAttribute('transform','translate('+(800-cx).toFixed(1)+' '+(300-sy).toFixed(1)+')');$('panR').setAttribute('transform','translate('+(800+cx).toFixed(1)+' '+(300+sy).toFixed(1)+')');
const tw=TM.two_flags;rise($('card0'),p(u,tw,tw+.5));rise($('ask0'),p(u,tw+1.5,tw+2));rise($('card1'),p(u,tw+5.4,tw+5.9));rise($('ask1'),p(u,tw+6.6,tw+7.1));

const s8=SC[8][0]/K;rise($('q8l'),p(u,s8+.3,s8+.8));rise($('slide'),p(u,s8+.8,s8+1.4));
rise($('qa'),p(u,s8+3.8,s8+4.3));rise($('qb'),p(u,s8+4.2,s8+4.7));rise($('qc'),p(u,s8+5.6,s8+6.1));
$('knob').setAttribute('cx',(530+300*Math.sin(t*.8)).toFixed(1));