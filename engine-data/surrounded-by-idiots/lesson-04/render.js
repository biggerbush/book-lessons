$('t_head').setAttribute('cy',(270+(u>=TM.quiet_nod?7*Math.abs(Math.sin(t*2.6)):0)).toFixed(1));
rise($('t_sure'),p(u,TM.quiet_nod+1,TM.quiet_nod+1.5));
$('t_bar').setAttribute('width',(130*p(u,TM.quiet_nod+1.5,TM.quiet_nod+4)).toFixed(1));
rise($('t_st'),p(u,TM.quiet_nod+4.4,TM.quiet_nod+4.9));

FOUR.forEach((g,i)=>{const a=TM.green_person+i*.3;rise(g,p(u,a,a+.4))});
GC.setAttribute('r',(44+(u>=TM.green_person+1.5?6*Math.abs(Math.sin(t*1.5)):0)).toFixed(1));
rise($('g_team'),p(u,TM.team_circle,TM.team_circle+.5));
TP.forEach((c,i)=>{const a=TM.team_circle+.4+i*.25;rise(c,p(u,a,a+.3))});
rise($('g_ear'),p(u,TM.listening_ear,TM.listening_ear+.5));
WV.forEach((w,i)=>w.setAttribute('opacity',(.25+.75*(Math.sin(t*3-i)+1)/2).toFixed(2)));
[0,1,2].forEach(i=>{const a=TM.listening_ear+.8+i*1.4;rise($('g_t'+i),p(u,a,a+.5))});

CP.forEach((g,i)=>{const a=TM.scales+i*.7;rise(g,p(u,a,a+.4))});
rise($('v_sc'),p(u,TM.scales,TM.scales+.5));
const tl=p(u,TM.storm_cloud+.4,TM.storm_cloud+1.4);
$('v_beam').setAttribute('transform','rotate('+(3*Math.sin(t*1.2)*(1-tl)-10*tl).toFixed(2)+' 330 440)');
rise($('v_rel'),p(u,TM.scales+1.4,TM.scales+1.9));
const hb=1+.08*Math.abs(Math.sin(t*2.4));
$('v_heart').setAttribute('transform','translate(1270 432) scale('+hb.toFixed(3)+') translate(-1270 -432)');
rise($('v_house'),p(u,TM.safe_house,TM.safe_house+.5));
rise($('v_cloud'),p(u,TM.storm_cloud,TM.storm_cloud+.5));
RN.forEach((l,i)=>{const y=376+((t*70+i*11)%24);l.setAttribute('y1',y.toFixed(1));l.setAttribute('y2',(y+10).toFixed(1))});
$('v_bolt').setAttribute('opacity',t%2.5<.15?1:.35);

rise($('h_p'),p(u,TM.yes_bubble,TM.yes_bubble+.5));
rise($('h_yes'),p(u,TM.yes_bubble+3.2,TM.yes_bubble+3.7));
rise($('h_th'),p(u,TM.thought_cloud,TM.thought_cloud+.5));
rise($('h_peace'),p(u,TM.thought_cloud+3,TM.thought_cloud+3.5));
rise($('h_track'),p(u,TM.slow_cart,TM.slow_cart+.4));
const ck=Math.max(0,u-TM.slow_cart);$('h_cart').setAttribute('transform','translate('+(900+260*(1-Math.exp(-ck*.9))).toFixed(1)+' 0)');
rise($('h_why'),p(u,TM.slow_cart+2,TM.slow_cart+2.5));
rise($('h_q'),p(u,TM.slow_cart+2.6,TM.slow_cart+3.1));

rise($('c_cal'),p(u,TM.calendar,TM.calendar+.5));
$('c_arrow').style.stroke=u>=TM.sudden_memo?'var(--loss)':'var(--muted)';
rise($('c_memo'),p(u,TM.sudden_memo,TM.sudden_memo+.5));
rise($('c_red'),p(u,TM.worried_face,TM.worried_face+.5));
rise($('c_green'),p(u,TM.worried_face+1.2,TM.worried_face+1.7));
const sh=u>=TM.worried_face+1.7;$('c_gs').setAttribute('transform','translate('+(sh?3*Math.sin(t*18):0).toFixed(1)+' 0)');
let gd='';for(let x=1110;x<=1410;x+=20)gd+=(x>1110?'L':'M')+x+' '+(640+(sh?6:0)*Math.sin(x/25+t*6)).toFixed(1);$('c_ground').setAttribute('d',gd);

rise($('n_flag'),p(u,TM.early_flag,TM.early_flag+.5));
rise($('n_br'),p(u,TM.early_flag+1.2,TM.early_flag+1.7));
ST.forEach((g,i)=>{const a=TM.step_path+i*.6;rise(g,p(u,a,a+.4))});
const kk=3*p(u,TM.step_path+2.4,TM.step_path+4.4),i0=Math.min(2,Math.floor(kk)),fk=kk-i0;
const wx=245+kk*190,wy=700-60*kk-24*Math.sin(Math.PI*fk)-51;
$('n_walk').setAttribute('transform','translate('+wx.toFixed(1)+' '+wy.toFixed(1)+')');
$('n_walk').setAttribute('opacity',p(u,TM.step_path+2.2,TM.step_path+2.5).toFixed(2));
rise($('n_link'),p(u,TM.personal_link,TM.personal_link+.5));
LN.forEach(l=>l.style.strokeDashoffset=(-t*20).toFixed(1));

rise($('a_meet'),p(u,TM.question_mark,TM.question_mark+.5));
rise($('a_q'),p(u,TM.question_mark+1,TM.question_mark+1.5)*(.6+.4*Math.abs(Math.sin(t*2))));
rise($('a_one'),p(u,TM.one_on_one,TM.one_on_one+.5));
rise($('a_ask'),p(u,TM.one_on_one+.6,TM.one_on_one+1));
rise($('a_ans'),p(u,TM.one_on_one+2.4,TM.one_on_one+2.8));
rise($('a_door'),p(u,TM.open_door,TM.open_door+.5));
const od=p(u,TM.open_door+.4,TM.open_door+1.6),rx=1440-120*od;
$('a_panel').setAttribute('points','1270,340 '+rx.toFixed(1)+','+(340-18*od).toFixed(1)+' '+rx.toFixed(1)+','+(640+18*od).toFixed(1)+' 1270,640');
rise($('a_listen'),p(u,TM.open_door+1,TM.open_door+1.5));

rise($('w_cup'),p(u,TM.coffee_cup,TM.coffee_cup+.5));
SM.forEach((s,i)=>{let d='';for(let k=0;k<=8;k++){const y=400-k*12,x=290+i*40+8*Math.sin(k*.8+t*3+i);d+=(k?'L':'M')+x.toFixed(1)+' '+y}s.setAttribute('d',d)});
rise($('w_clock'),p(u,TM.slow_clock,TM.slow_clock+.5));
$('w_min').setAttribute('transform','rotate('+((t*12)%360).toFixed(1)+' 800 480)');$('w_hr').setAttribute('transform','rotate('+((t*1)%360).toFixed(1)+' 800 480)');
[0,1,2].forEach(i=>{const a=TM.slow_clock+.6+i*.9;rise($('w_c'+i),p(u,a,a+.4))});
rise($('w_shake'),p(u,TM.handshake,TM.handshake+.5));
const hk=1-p(u,TM.handshake+.2,TM.handshake+1.6);
$('w_la').setAttribute('transform','translate('+(-60*hk).toFixed(1)+' 0)');$('w_ra').setAttribute('transform','translate('+(60*hk).toFixed(1)+' 0)');
rise($('w_clasp'),p(u,TM.handshake+1.5,TM.handshake+2));
$('w_trust').setAttribute('width',(320*p(u,TM.handshake+1,TM.handshake+4.5)).toFixed(1));

rise($('qa'),p(u,TM.green_star,TM.green_star+.5));
rise($('qb'),p(u,TM.green_star+.4,TM.green_star+.9));
rise($('z_pair'),p(u,TM.green_star+.6,TM.green_star+1.1));
rise($('z_ask'),p(u,TM.green_star+1.2,TM.green_star+1.7));
rise($('qc'),p(u,TM.green_star+3.4,TM.green_star+3.9));
rise($('z_glass'),p(u,TM.green_star+3.4,TM.green_star+3.9));
const sc=(t%6)/6,yt=350+90*sc,ht=35*(440-yt)/90,yb=530-60*sc,hbm=35*(yb-440)/90;
$('z_top').setAttribute('points',(1400-ht).toFixed(1)+','+yt.toFixed(1)+' '+(1400+ht).toFixed(1)+','+yt.toFixed(1)+' 1400,440');
$('z_bot').setAttribute('points','1365,530 1435,530 '+(1400+hbm).toFixed(1)+','+yb.toFixed(1)+' '+(1400-hbm).toFixed(1)+','+yb.toFixed(1));
$('z_flow').setAttribute('y2',yb.toFixed(1));
rise($('z_note'),p(u,TM.green_star+3.9,TM.green_star+4.4));
rise($('z_ans'),p(u,TM.green_star+5.4,TM.green_star+5.9));