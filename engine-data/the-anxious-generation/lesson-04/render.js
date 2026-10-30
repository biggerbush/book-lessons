const V=(id,c,d=.5)=>rise($(id),p(u,c,c+d));

const g0=p(u,TM.phone_glow,TM.phone_glow+.6); rise($('t_ph'),g0);
RG.forEach((c,i)=>{const k=(t*.6+i/3)%1;c.setAttribute('r',(100+50*k).toFixed(1));c.setAttribute('opacity',(g0*(1-k)*.8).toFixed(2))});
V('t_tag',TM.phone_glow+1.5);
const lo=p(u,TM.phone_glow+5,TM.phone_glow+7.5);
LO.forEach(([q,c],i)=>{const k=cl(lo*1.6-i*.2);c.setAttribute('cx',(1330+(q[0]-1330)*k).toFixed(1));c.setAttribute('cy',(430+(q[1]-430)*k).toFixed(1));c.setAttribute('opacity',k<=0?0:k<.8?1:(1-.75*(k-.8)/.2).toFixed(2))});
$('t_scr').setAttribute('fill-opacity',(1-.6*lo).toFixed(2));

$('o_mh').setAttribute('transform','rotate('+((t*60)%360).toFixed(1)+' 330 440)'); $('o_hh').setAttribute('transform','rotate('+((t*5)%360).toFixed(1)+' 330 440)');
V('o_clk',TM.clock); V('o_eq',TM.clock+4.2);
V('o_day',TM.scale); $('o_pb').setAttribute('width',(126+378*p(u,TM.scale+.5,TM.scale+3)).toFixed(1));
V('o_bh',TM.four_boxes); BX.forEach((g,i)=>rise(g,p(u,TM.four_boxes+.3+i*.35,TM.four_boxes+.8+i*.35)));

V('f_bench',TM.friends_bench);
const fade=p(u,TM.time_chart+3,TM.time_chart+5);
FP[1].setAttribute('opacity',(1-.8*fade).toFixed(2)); $('f_laugh').setAttribute('opacity',((1-fade)*(.6+.4*Math.abs(Math.sin(t*3)))).toFixed(2));
V('f_ch',TM.time_chart); $('f_line').setAttribute('stroke-dashoffset',(1-p(u,TM.time_chart+.4,TM.time_chart+3)).toFixed(3));
V('f_ph',TM.two_phones); V('f_ml',TM.two_phones+1.5);
CHP.forEach((c,i)=>rise(c,p(u,TM.two_phones+2+i*.6,TM.two_phones+2.5+i*.6)));

V('z_bed',TM.bed); V('z_ph',TM.phone_in_bed);
$('z_gl').setAttribute('r',(40+6*Math.sin(t*3)).toFixed(1));
V('z_clk',TM.phone_in_bed+.6);
$('z_hand').setAttribute('transform','rotate('+(300+110*p(u,TM.phone_in_bed+1,TM.phone_in_bed+4.5)).toFixed(1)+' 880 360)');
V('z_bar',TM.phone_in_bed+5); $('z_get').setAttribute('width',(360-200*p(u,TM.phone_in_bed+5.5,TM.phone_in_bed+7.5)).toFixed(1));
V('z_tired',TM.tired_kid); ZC.forEach((c,i)=>rise(c,p(u,TM.tired_kid+.4+i*.5,TM.tired_kid+.9+i*.5)));

V('a_kid',TM.notification);
const pg=u>=TM.notification+2.6;
$('a_bdg').setAttribute('r',(16+(pg?5*Math.abs(Math.sin(t*6)):0)).toFixed(1));
$('a_tug').setAttribute('opacity',pg?(.4+.6*Math.abs(Math.sin(t*3))).toFixed(2):0);
V('a_r2',TM.notification+2.6); APG.forEach((g,i)=>rise(g,p(u,TM.notification+3+i*.7,TM.notification+3.4+i*.7)));
V('a_r1',TM.puzzle); $('a_bar').setAttribute('width',(800*p(u,TM.puzzle+.3,TM.puzzle+1.8)).toFixed(1));
const sk=p(u,TM.shards+.3,TM.shards+1.5);
SH.forEach(([r,cx,dy,an])=>{r.setAttribute('opacity',p(u,TM.shards,TM.shards+.3));r.setAttribute('transform','translate(0 '+(dy*sk).toFixed(1)+') rotate('+(an*sk).toFixed(1)+' '+cx.toFixed(1)+' 555)')});
V('a_txt',TM.shards+.8);

V('x_slot',TM.slot_machine); V('x_sub',TM.slot_machine+2.2);
const ur=u-TM.reward_hand, n=ur<0?-1:Math.floor(ur/1.6), f=ur<0?0:(ur/1.6)%1;
const ky=300+(ur>=0?200*Math.sin(Math.PI*cl(f/.3)):0);
$('x_levp').setAttribute('d','M553 440V'+ky.toFixed(1)); $('x_knob').setAttribute('cy',ky.toFixed(1));
const spin=ur>=0&&f>.1&&f<.6, res=n<0?0:f>=.6?RS[n%9]:(n>0?RS[(n-1)%9]:0);
RH.forEach((h,j)=>{const on=spin?(Math.floor(t*14)+j)%2===0:!!res;h.setAttribute('opacity',on?1:0);RD[j].setAttribute('opacity',on?0:1)});
V('x_row',TM.reward_hand);
RW.forEach((c,i)=>{const done=i<n||(i===n&&f>=.6);c.setAttribute('opacity',done?1:.25);c.setAttribute('fill',done&&RS[i]?'var(--gain)':'none')});
V('x_feed',TM.endless_feed); V('x_ft',TM.endless_feed+.6);
const sc=u>TM.endless_feed?(u-TM.endless_feed)*90:0;
CD.forEach((g,i)=>g.setAttribute('transform','translate(0 '+((((i*140-sc)%700)+700)%700+220).toFixed(1)+')'));

V('k_loop',TM.stack);
SK.forEach((g,i)=>rise(g,p(u,TM.stack+.2+i*.3,TM.stack+.6+i*.3)));
ND.forEach((g,i)=>rise(g,p(u,TM.stack+2.6+i*1.2,TM.stack+3.1+i*1.2)));
const ka=Math.max(0,u-TM.stack-2.6)*1.1;
$('k_dot').setAttribute('cx',(560+250*Math.sin(ka)).toFixed(1)); $('k_dot').setAttribute('cy',(500-250*Math.cos(ka)).toFixed(1));
V('k_park',TM.empty_park); V('k_lab',TM.empty_park+1);
PK.forEach((g,i)=>g.setAttribute('opacity',(1-p(u,TM.empty_park+1.5+i*.6,TM.empty_park+3+i*.6)).toFixed(2)));
$('k_ghost').setAttribute('opacity',p(u,TM.empty_park+1.5,TM.empty_park+3));

V('n_rooms',TM.charger); V('n_ph',TM.charger); V('n_dock',TM.charger+1.2);
PH7.forEach(([g,s],i)=>{const k=p(u,TM.kitchen+.4+i*.5,TM.kitchen+1.4+i*.5),a=S7[i],b=D7[i];
  g.setAttribute('transform','translate('+(a[0]+(b[0]-a[0])*k).toFixed(1)+' '+(a[1]+(b[1]-a[1])*k-120*Math.sin(Math.PI*k)).toFixed(1)+')');
  s.setAttribute('fill',k>=1?'var(--line)':'var(--loss)');
  BL[i].setAttribute('opacity',(k>=1?.6+.4*Math.abs(Math.sin(t*2+i)):0).toFixed(2))});
V('n_tgg',TM.notif_off);
TG.forEach(([tr,kn],i)=>{const k=p(u,TM.notif_off+.6+i*.4,TM.notif_off+.9+i*.4);kn.setAttribute('cx',(1418-36*k).toFixed(1));tr.setAttribute('fill',k<.5?'var(--loss)':'var(--line)')});
V('n_txt',TM.notif_off+1.8);

const a8=SC[8][0]/K;
V('q0',a8+.3); V('qg',a8+.6); V('qa',a8+4.1); V('qb',a8+4.5); V('qc',a8+4.9);
QD.forEach((c,i)=>c.setAttribute('opacity',(.35+.65*Math.abs(Math.sin(t*1.5+i))).toFixed(2)));