rise($('hum'),p(u,TM.robot_seat,TM.robot_seat+.6));
const rk=p(u,TM.robot_seat+4,TM.robot_seat+5.5);
$('rob').setAttribute('transform','translate('+(30*(1-rk)).toFixed(1)+' 0)');$('rob').setAttribute('opacity',rk);

rise($('pL'),p(u,TM.press,TM.press+.5));
$('plate').setAttribute('transform','translate(0 '+(30*Math.abs(Math.sin(t*1.5))).toFixed(1)+')');
rise($('copies'),p(u,TM.press+3,TM.press+3.5));
const R1=[TM.press+3,TM.press+4.5,TM.book_choose];
RW[0].forEach((g,i)=>rise(g,p(u,R1[i],R1[i]+.4)));
rise($('pR'),p(u,TM.ai_agent,TM.ai_agent+.5));
RW[1].forEach((g,i)=>rise(g,p(u,TM.ai_agent+.6+i*.4,TM.ai_agent+1+i*.4)));
rise($('agt'),p(u,TM.ai_agent+2,TM.ai_agent+2.6));

ST.forEach((s,i)=>s.setAttribute('opacity',p(u,TM.go_board+i*.25,TM.go_board+i*.25+.3)));
rise($('mv'),p(u,TM.move_37,TM.move_37+.4));$('ring').setAttribute('r',(30+6*Math.sin(t*4)).toFixed(1));
rise($('exp'),p(u,TM.move_37+.4,TM.move_37+.9));rise($('bub'),p(u,TM.move_37+1,TM.move_37+1.5));
rise($('yet'),p(u,TM.move_37+3.5,TM.move_37+4));
rise($('aln'),p(u,TM.alien_mind,TM.alien_mind+.5));
$('aip').setAttribute('stroke-dashoffset',(1-p(u,TM.alien_mind+.6,TM.alien_mind+2.6)).toFixed(3));
rise($('alt'),p(u,TM.alien_mind+2.6,TM.alien_mind+3.2));

rise($('ph'),p(u,TM.phone_feed,TM.phone_feed+.5));rise($('gg'),p(u,TM.engage_meter,TM.engage_meter+.5));
const gv=.1+.3*p(u,TM.engage_meter+.5,TM.engage_meter+2)+.55*p(u,TM.hate_posts,TM.hate_posts+2),an=Math.PI*(1+gv);
$('ndl').setAttribute('x2',(820+170*Math.cos(an)).toFixed(1));$('ndl').setAttribute('y2',(560+170*Math.sin(an)).toFixed(1));
$('arc').setAttribute('stroke-dashoffset',(1-gv).toFixed(3));
HO.forEach((r,i)=>r.setAttribute('opacity',(.4*p(u,TM.hate_posts+i*.4,TM.hate_posts+i*.4+.4)).toFixed(2)));
rise($('hb1'),p(u,TM.hate_posts+.5,TM.hate_posts+1));rise($('hb2'),p(u,TM.hate_posts+5.8,TM.hate_posts+6.4));

rise($('eng'),p(u,TM.target,TM.target+.5));
$('aip2').setAttribute('stroke-dashoffset',(1-p(u,TM.target+1.8,TM.target+3.6)).toFixed(3));
rise($('harm'),p(u,TM.target+3,TM.target+3.5));rise($('gap'),p(u,TM.goal_gap,TM.goal_gap+.5));
rise($('dots'),p(u,TM.goal_gap+2,TM.goal_gap+2.6));
const wr=p(u,TM.speed_wave,TM.speed_wave+3.5)*1400;
DT.forEach(q=>q[0].setAttribute('fill',u>=TM.speed_wave&&q[1]<=wr?'var(--loss)':'var(--line)'));
rise($('spd'),p(u,TM.speed_wave+.5,TM.speed_wave+1));

rise($('no0'),p(u,TM.court,TM.court+.5));rise($('no1'),p(u,TM.court+2,TM.court+2.5));
$('x0').setAttribute('stroke-dashoffset',(1-p(u,TM.court+3,TM.court+3.5)).toFixed(3));
$('x1').setAttribute('stroke-dashoffset',(1-p(u,TM.court+4,TM.court+4.5)).toFixed(3));
rise($('loop'),p(u,TM.court+4.5,TM.court+5));
rise($('n0'),p(u,TM.watchdog,TM.watchdog+.5));rise($('eye'),p(u,TM.watchdog+.3,TM.watchdog+.8));
$('pup').setAttribute('cx',(1300+12*Math.sin(t*1.4)).toFixed(1));
rise($('icons'),p(u,TM.repair_loop,TM.repair_loop+.5));
rise($('n1'),p(u,TM.repair_loop+1,TM.repair_loop+1.5));rise($('n2'),p(u,TM.repair_loop+2.5,TM.repair_loop+3));
// the dot makes one full lap of the loop, starting and parking at the clear bottom gap between the two lower pills; it fades out near any pill
const da=Math.PI/2+2*Math.PI*p(u,TM.repair_loop+3,TM.repair_loop+7),dx5=1000+200*Math.cos(da),dy5=520+200*Math.sin(da);
$('dot5').setAttribute('cx',dx5.toFixed(1));$('dot5').setAttribute('cy',dy5.toFixed(1));
$('dot5').setAttribute('opacity',(p(u,TM.repair_loop+3,TM.repair_loop+3.4)*pillClear(dx5,dy5)).toFixed(2));
rise($('fixt'),p(u,TM.repair_loop+3.5,TM.repair_loop+4.1));

rise($('bt'),p(u,TM.bot_mask,TM.bot_mask+.5));
const mr=p(u,TM.label_tag,TM.label_tag+.8);
$('mask').setAttribute('transform','translate(0 '+(-80*mr).toFixed(1)+')');$('mask').setAttribute('opacity',(1-mr).toFixed(2));
rise($('tag'),p(u,TM.label_tag+.6,TM.label_tag+1.1));
rise($('chat'),p(u,TM.bot_mask+1,TM.bot_mask+1.5));
rise($('ctag'),p(u,TM.label_tag+.8,TM.label_tag+1.3));rise($('rep'),p(u,TM.label_tag+2,TM.label_tag+2.5));
BB.forEach((b,i)=>rise(b,p(u,TM.conversation+i*.25,TM.conversation+i*.25+.3)));
rise($('cvt'),p(u,TM.conversation+1,TM.conversation+1.5));

[TM.feed_check,TM.pause_hand,TM.support_inst].forEach((a,i)=>rise($('k'+i),p(u,a,a+.5)));
$('angry').setAttribute('transform','translate('+(3*Math.sin(t*25)).toFixed(1)+' 0)');
PP.forEach((g,i)=>rise(g,p(u,TM.support_inst+.5+i*.3,TM.support_inst+.9+i*.3)));

const S8=SC[8][0]/K;
[.4,.8,1.2,4.2,4.6].forEach((d,i)=>rise($('w'+i),p(u,S8+d,S8+d+.5)));
rise($('clab'),p(u,S8+5.2,S8+5.7));
$('mag').setAttribute('transform','translate('+(12*Math.sin(t*.9)).toFixed(1)+' '+(8*Math.cos(t*1.2)).toFixed(1)+')');