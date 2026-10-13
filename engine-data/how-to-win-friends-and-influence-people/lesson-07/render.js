FL.forEach(f=>f[0].setAttribute('transform','translate('+f[1]+' '+f[2]+') scale('+f[3]+' '+(f[3]*(1+.1*Math.sin(t*9+f[1]))).toFixed(3)+')'));

$('pupil').setAttribute('cx',(1310+16*Math.sin(t*.9)).toFixed(1));
rise($('eye'),p(u,TM.title_eyes,TM.title_eyes+.6));
const s0e=SC[0][1]/K, sk0=Math.max(TM.title_eyes+.8,Math.min(TM.title_eyes+5.8,s0e-3));
SK.forEach((g,i)=>{const a=sk0+i*.2;rise(g,p(u,a,a+.5))});rise(SKL,p(u,sk0+1,sk0+1.5));

rise($('man'),p(u,TM.stubborn_man,TM.stubborn_man+.5));
rise($('cloud'),p(u,TM.thought_cloud,TM.thought_cloud+.6));
rise($('lockg'),p(u,TM.thought_cloud+5,TM.thought_cloud+5.5));
const kk=p(u,TM.key_hole,TM.key_hole+1);
$('key').setAttribute('transform','translate('+(1450-110*kk).toFixed(1)+' 420)');$('key').setAttribute('opacity',cl(kk*3).toFixed(2));
$('khole').setAttribute('class',kk>=1?'gain':'ink');
rise($('keyt'),p(u,TM.key_hole+.8,TM.key_hole+1.3));

TR.forEach((g,i)=>{const a=TM.park_trees+i*.25;rise(g,p(u,a,a+.5))});
rise($('boys2'),p(u,TM.boys_fire,TM.boys_fire+.5));
const sp=u>=TM.boys_fire+5;$('spp').setAttribute('opacity',p(u,TM.boys_fire+5,TM.boys_fire+5.5));
SPK.forEach((c,i)=>{const s=(t*.5+i/4)%1,m=1-s;c.setAttribute('cx',(m*m*810+2*m*s*900+s*s*1000).toFixed(1));c.setAttribute('cy',(m*m*610+2*m*s*440+s*s*470).toFixed(1));c.setAttribute('opacity',sp?(1-s*.6).toFixed(2):0)});
CN[3].setAttribute('class',sp?'s-loss':'s-ink');
rise($('sparkt'),p(u,TM.boys_fire+5.3,TM.boys_fire+5.8));

rise($('carn3'),p(u,TM.police_badge,TM.police_badge+.5));rise($('bub3'),p(u,TM.police_badge+.6,TM.police_badge+1.1));
B3.forEach(h=>h.setAttribute('class',u>=TM.sulky_faces?'loss':'ink'));rise($('lab3'),p(u,TM.sulky_faces,TM.sulky_faces+.5));
const rk=p(u,TM.relit_fire,TM.relit_fire+1);$('gone3').setAttribute('opacity',(1-.8*rk).toFixed(2));$('gone3').setAttribute('transform','translate('+(-80*rk).toFixed(1)+' 0)');
rise($('fire3'),p(u,TM.relit_fire+.5,TM.relit_fire+1));rise($('relt'),p(u,TM.relit_fire+.8,TM.relit_fire+1.3));

rise($('carn4'),p(u,TM.smile_hello,TM.smile_hello+.5));rise($('b41'),p(u,TM.smile_hello+.3,TM.smile_hello+.8));rise($('b42'),p(u,TM.smile_hello+2.1,TM.smile_hello+2.6));
rise($('mem'),p(u,TM.young_carnegie,TM.young_carnegie+.6));
rise($('cd1'),p(u,TM.rake_leaves+1,TM.rake_leaves+1.5));rise($('cd2'),p(u,TM.rake_leaves+3,TM.rake_leaves+3.5));
const hp=u>=TM.rake_leaves+7;M4.forEach((m,i)=>m.setAttribute('d',mouth(X4[i],470,32,hp)));H4.forEach(h=>h.setAttribute('class',hp?'gain':'ink'));
rise($('agr'),p(u,TM.rake_leaves+7,TM.rake_leaves+7.5));

rise($('scale'),p(u,TM.balance_scale,TM.balance_scale+.5));
$('beam').setAttribute('transform','rotate('+(6*(1-p(u,TM.balance_scale,TM.balance_scale+2))*Math.sin(t*5)).toFixed(2)+' 490 300)');
rise($('factt'),p(u,TM.balance_scale+.8,TM.balance_scale+1.3));
rise($('room5'),p(u,TM.balance_scale+2,TM.balance_scale+2.5));rise($('carn5'),p(u,TM.balance_scale+2,TM.balance_scale+2.5));
$('c5m').setAttribute('transform','translate('+(90*p(u,TM.balance_scale+2.6,TM.balance_scale+4)).toFixed(1)+' 0)');
const dk=p(u,TM.open_door,TM.open_door+1.2),xr=1300-200*dk;
$('door5').setAttribute('points','1060,300 '+xr+','+(300+40*dk)+' '+xr+','+(720-40*dk)+' 1060,720');
rise($('undt'),p(u,TM.open_door+.6,TM.open_door+1.1));

rise($('self'),p(u,TM.mirror_self,TM.mirror_self+.6));
CR.forEach((g,i)=>{const a=TM.crowd_people+i*.08;rise(g,p(u,a,a+.4))});
rise($('shoes'),p(u,TM.crowd_people+3,TM.crowd_people+3.5));rise($('shoet'),p(u,TM.crowd_people+3.5,TM.crowd_people+4));

rise($('roots'),p(u,TM.tree_roots,TM.tree_roots+.6));
PL.forEach((g,i)=>{const a=TM.tree_roots+3.4+i*.6;rise(g,p(u,a,a+.5))});
rise($('quote'),p(u,TM.quote_card,TM.quote_card+.6));
rise($('hrt'),p(u,TM.heart_icon,TM.heart_icon+.5));$('heartP').setAttribute('transform','scale('+(1+.1*Math.pow(Math.abs(Math.sin(t*3)),6)).toFixed(3)+')');
rise($('fake'),p(u,TM.heart_icon+1.8,TM.heart_icon+2.3));

rise($('cal'),p(u,TM.calendar_day,TM.calendar_day+.6));rise($('ql'),p(u,TM.calendar_day+.3,TM.calendar_day+.8));
rise($('qa'),p(u,TM.calendar_day+3.8,TM.calendar_day+4.3));rise($('qb'),p(u,TM.calendar_day+4.2,TM.calendar_day+4.7));rise($('qc'),p(u,TM.calendar_day+4.6,TM.calendar_day+5.1));
rise($('qd'),p(u,TM.calendar_day+5.4,TM.calendar_day+5.9));