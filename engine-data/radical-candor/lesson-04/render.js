const a0=p(u,TM.boss_mirror,TM.boss_mirror+1.6);dr($('t_arc'),a0);$('t_head').setAttribute('opacity',a0>.95?1:0);
rise($('t_lab'),p(u,TM.boss_mirror+1,TM.boss_mirror+1.5));
$('t_ring').setAttribute('opacity',(p(u,TM.boss_mirror+6.6,TM.boss_mirror+7.2)*(.6+.4*Math.sin(t*3))).toFixed(2));

rise($('w_boss'),p(u,TM.new_manager,TM.new_manager+.5));
const fb=1-p(u,TM.trust_bridge,TM.trust_bridge+.5);
WB.forEach((b,i)=>{const a=TM.new_manager+.6+i*.7,k=p(u,a,a+1.8);b.setAttribute('transform','translate('+(380+580*k).toFixed(1)+' '+(330+i*40)+')');b.setAttribute('opacity',((u>=a?1:0)*fb).toFixed(2))});
const wc=u>=TM.wary_team&&u<TM.trust_bridge+.5?'loss':'ink';WT.forEach(e=>setc(e,wc));
rise($('w_nt'),p(u,TM.wary_team,TM.wary_team+.5)*fb);
rise($('w_kim'),p(u,TM.wary_team+4.6,TM.wary_team+5.1));
rise($('w_br'),p(u,TM.trust_bridge,TM.trust_bridge+.6));rise($('w_ask'),p(u,TM.trust_bridge+.5,TM.trust_bridge+1));
rise($('w_take'),p(u,TM.trust_bridge+1.2,TM.trust_bridge+1.8));

const st=u>=TM.sting_heart,sh=st?6*Math.sin(t*40)*(1-p(u,TM.sting_heart,TM.sting_heart+1.2)):0;
$('h_hp').style.fill=st?'var(--loss)':'var(--line)';$('h_crack').setAttribute('opacity',st?1:0);
$('h_heart').setAttribute('transform','translate('+(330+sh).toFixed(1)+' 470)');
rise($('h_land'),p(u,TM.sting_heart+3.8,TM.sting_heart+4.3));
const cr=(t*.25)%1;$('h_c0').setAttribute('cx',(660+740*cr).toFixed(1));$('h_c1').setAttribute('cx',(1420-740*cr).toFixed(1));
rise($('h_road'),p(u,TM.two_way_road,TM.two_way_road+.6));rise($('h_st'),p(u,TM.two_way_road+1,TM.two_way_road+1.6));

rise($('q_bub'),p(u,TM.speech_bubble,TM.speech_bubble+.5));rise($('q_txt'),p(u,TM.speech_bubble+4.9,TM.speech_bubble+5.4));
rise($('q_cd'),p(u,TM.closed_door,TM.closed_door+.5));rise($('q_od'),p(u,TM.open_door,TM.open_door+.5));

rise($('c_room'),p(u,TM.silent_room,TM.silent_room+.5));rise($('c_fear'),p(u,TM.silent_room+1.5,TM.silent_room+2));
rise($('c_dial'),p(u,TM.counting_hand,TM.counting_hand+.5));
const n=u<TM.counting_hand+.8?0:Math.min(6,1+Math.floor((u-TM.counting_hand-.8)/.85));
CS.forEach((s,i)=>s.setAttribute('stroke',i<n?'var(--gain)':'var(--line)'));$('c_num').textContent=n;
const ki=p(u,TM.counting_hand+6.2,TM.counting_hand+6.7);rise($('c_idea'),ki);CB[1].setAttribute('opacity',(1-ki).toFixed(2));
rise($('c_real'),p(u,TM.counting_hand+6.6,TM.counting_hand+7.2));

const ow=p(u,TM.open_ears,TM.open_ears+.5);LW.forEach((w,i)=>w.setAttribute('opacity',(ow*(.35+.65*Math.max(0,Math.sin(t*3+i)))).toFixed(2)));
rise($('l_und'),p(u,TM.open_ears+.3,TM.open_ears+.8));
const zk=p(u,TM.locked_lips+.4,TM.locked_lips+.9);$('l_mouth').setAttribute('opacity',(1-zk).toFixed(2));rise($('l_zip'),zk);
[0,1].forEach(i=>{const a=TM.locked_lips+i*.6,s=p(u,a+1.2,a+1.8),x1=720-SO,len=SW['l_t'+i]+2*SO,ln=$('l_s'+i);
  rise($('l_d'+i),p(u,a,a+.4));ln.setAttribute('x1',x1);ln.setAttribute('x2',(x1+len*s).toFixed(1));ln.setAttribute('opacity',s>0?1:0)});
rise($('l_quiet'),p(u,TM.locked_lips+4.2,TM.locked_lips+4.8));

[TM.thank_you,TM.fixed_gear,TM.reason_card].forEach((a,i)=>rise($('f'+i),p(u,a,a+.5)));
$('f_gear').setAttribute('transform','rotate('+((t*30)%360).toFixed(1)+' 800 400)');

dr($('g_stem'),p(u,TM.growing_plant,TM.growing_plant+4));
GL.forEach((l,i)=>{const a=TM.growing_plant+.8+i*.8;rise(l,p(u,a,a+.4))});
rise($('g_fl'),p(u,TM.growing_plant+4,TM.growing_plant+4.4));
rise($('g_ppl'),p(u,TM.growing_plant+2,TM.growing_plant+2.5));
rise($('g_hs'),p(u,TM.handshake,TM.handshake+.5));rise($('g_trust'),p(u,TM.handshake+.6,TM.handshake+1.2));
dr($('g_arc'),p(u,TM.handshake+5,TM.handshake+6));rise($('g_bel'),p(u,TM.handshake+5.8,TM.handshake+6.3));

rise($('qa'),p(u,TM.calendar_page,TM.calendar_page+.5));rise($('qb'),p(u,TM.calendar_page+.4,TM.calendar_page+.9));
rise($('k_cal'),p(u,TM.calendar_page+.8,TM.calendar_page+1.3));dr($('k_chk'),p(u,TM.calendar_page+1.3,TM.calendar_page+1.9));
[0,1,2].forEach(i=>{const a=TM.calendar_page+3.8+i*.5;rise($('k'+i),p(u,a,a+.4))});