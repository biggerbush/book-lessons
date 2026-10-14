const sc=i=>SC[i][0]/K;
rise($('t0b'),p(u,TM.title_card,TM.title_card+.6));$('t0i').setAttribute('transform','translate(0 '+(6*Math.sin(t*2)).toFixed(1)+')');

rise($('y1'),p(u,sc(1)+.2,sc(1)+.7));rise($('c1'),p(u,TM.request,TM.request+.5));rise($('b1'),p(u,TM.request+2.4,TM.request+2.8));
rise($('f1'),p(u,TM.worried_face,TM.worried_face+.5));
const n1=5*p(u,TM.worried_face+2,TM.worried_face+8.5),y1=310+n1*76;B1.forEach((g,i)=>rise(g,cl(n1-i)));
pr1.setAttribute('y',y1.toFixed(1));pr1.setAttribute('height',(750-y1).toFixed(1));pt1.setAttribute('y',(y1+Math.min(48,(750-y1)/2+8)).toFixed(1));

$('sl2').setAttribute('y2',(230+310*p(u,TM.split_line,TM.split_line+1)).toFixed(1));
rise($('dc2'),p(u,TM.split_line+.6,TM.split_line+1.1));rise($('pr2'),p(u,TM.split_line+1,TM.split_line+1.5));
const s2b=TM.split_line+4.6;rise($('x2'),p(u,s2b,s2b+.4));rise($('h2'),p(u,s2b+1,s2b+1.5));
rise($('dk2'),p(u,TM.drucker_desk,TM.drucker_desk+.5));rise($('rc2'),p(u,TM.drucker_desk+1.5,TM.drucker_desk+2));
const e2=p(u,TM.letter,TM.letter+2.5);$('env2').setAttribute('transform','translate('+(430+760*e2).toFixed(1)+' '+(700-30*Math.sin(Math.PI*e2)).toFixed(1)+')');
$('env2').setAttribute('opacity',p(u,TM.letter,TM.letter+.3));rise($('lt2'),p(u,TM.letter+.5,TM.letter+1));rise($('h2b'),p(u,TM.letter+2.6,TM.letter+3.1));

rise($('sc3'),p(u,TM.scale,TM.scale+.5));rise($('rR3'),p(u,TM.scale+1,TM.scale+1.5));
const a3=(-8+20*p(u,TM.scale+1.5,TM.scale+3)+1.2*Math.sin(t*1.6))*Math.PI/180,c3=300*Math.cos(a3),s3=300*Math.sin(a3);
$('bm3').setAttribute('x1',(700-c3).toFixed(1));$('bm3').setAttribute('y1',(300-s3).toFixed(1));$('bm3').setAttribute('x2',(700+c3).toFixed(1));$('bm3').setAttribute('y2',(300+s3).toFixed(1));
$('pL3').setAttribute('transform','translate('+(700-c3).toFixed(1)+' '+(300-s3).toFixed(1)+')');$('pR3').setAttribute('transform','translate('+(700+c3).toFixed(1)+' '+(300+s3).toFixed(1)+')');
$('dp3').setAttribute('opacity',(p(u,TM.scale+6.2,TM.scale+6.7)*(1-p(u,TM.handshake+1,TM.handshake+2))).toFixed(2));
rise($('hs3'),p(u,TM.handshake,TM.handshake+.5));rise($('yt3'),p(u,TM.handshake+1,TM.handshake+1.6));

[TM.pause_clock,TM.calendar,TM.boss_list,TM.referral].forEach((a,i,A)=>{rise(K4[i],p(u,a,a+.5));R4[i].setAttribute('stroke',u>=a&&(i==3||u<A[i+1])?'var(--gain)':'var(--line)')});
H4.setAttribute('transform','rotate('+((t*90)%360).toFixed(1)+' 235 370)');

rise($('pit5'),p(u,sc(5)+.5,sc(5)+1));
const n5=10*p(u,TM.sunk_coins,TM.sunk_coins+4.5),i5=Math.floor(n5),f5=n5-i5;C5.forEach((c,i)=>c.setAttribute('opacity',n5>=i+1?1:0));
const top5=780-Math.min(9,i5)*24;$('fc5').setAttribute('cy',(230+(top5-230)*f5*f5).toFixed(1));$('fc5').setAttribute('opacity',u>=TM.sunk_coins&&i5<10?1:0);
rise($('ch5'),p(u,TM.concorde,TM.concorde+.5));BR5.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.concorde+.5+i*.6,TM.concorde+.9+i*.6)));
rise($('lg5a'),p(u,TM.concorde+.5,TM.concorde+1));rise($('lg5b'),p(u,TM.concorde+1,TM.concorde+1.5));
const k5=p(u,TM.concorde+1,TM.concorde+6);$('rl5').setAttribute('points',RP5.slice(0,Math.max(2,Math.round(k5*RP5.length))).join(' '));$('rl5').setAttribute('opacity',k5>0?1:0);
rise($('gap5'),p(u,TM.concorde+5.6,TM.concorde+6.2));
$('pl5').setAttribute('transform','translate('+(1240+60*(1-p(u,TM.concorde,TM.concorde+1.2))).toFixed(1)+' '+(270+4*Math.sin(t*3)).toFixed(1)+') scale(1.8)');$('pl5').setAttribute('opacity',p(u,TM.concorde,TM.concorde+.5));

rise($('pp6'),p(u,TM.question,TM.question+.5));$('qm6').setAttribute('opacity',1-p(u,TM.thought_cloud,TM.thought_cloud+.4));
rise($('cl6'),p(u,TM.thought_cloud,TM.thought_cloud+.5));['qa6','qb6','qc6'].forEach((id,i)=>rise($(id),p(u,TM.thought_cloud+.3+i*.9,TM.thought_cloud+.8+i*.9)));
rise($('dr6'),p(u,TM.exit_door,TM.exit_door+.5));const o6=p(u,TM.exit_door+.4,TM.exit_door+1.4),x6=1240+160*(1-.75*o6);
$('gl6').setAttribute('opacity',o6);$('dp6').setAttribute('points','1240,420 '+x6.toFixed(1)+','+(420+24*o6).toFixed(1)+' '+x6.toFixed(1)+','+(760-24*o6).toFixed(1)+' 1240,760');
rise($('ex6'),p(u,TM.exit_door+.6,TM.exit_door+1.1));rise($('ar6'),p(u,TM.exit_door+.6,TM.exit_door+1.1));
const w6=p(u,TM.exit_door+1,TM.exit_door+4);$('mv6').setAttribute('transform','translate('+(330+920*w6).toFixed(1)+' '+(580-8*Math.abs(Math.sin(w6*Math.PI*8))).toFixed(1)+')');
$('mv6').setAttribute('opacity',1-p(u,TM.exit_door+3.8,TM.exit_door+4.4));

ST7.forEach((g,i)=>rise(g,p(u,TM.first_step+i*.4,TM.first_step+.4+i*.4)));
const k7=4*p(u,TM.first_step+1.5,TM.first_step+5),f7=k7%1;
$('cl7').setAttribute('transform','translate('+(220+k7*120).toFixed(1)+' '+(760-(Math.min(4,Math.floor(k7))+1)*80-(k7<4?30*Math.sin(Math.PI*f7):0)).toFixed(1)+')');
$('cl7').setAttribute('opacity',p(u,TM.first_step+1,TM.first_step+1.5));
rise($('bx7'),p(u,TM.open_hours,TM.open_hours+.5));TK7.forEach((g,k)=>rise(g,p(u,TM.open_hours+.4+k*.3,TM.open_hours+.7+k*.3)));
$('pt7').setAttribute('stroke-dashoffset',(1-p(u,TM.bright_path,TM.bright_path+2)).toFixed(3));rise($('fl7'),p(u,TM.bright_path+1.6,TM.bright_path+2.1));

['q80','q81','q82','q83'].forEach((id,i)=>rise($(id),p(u,TM.phone_note+i*.5,TM.phone_note+.5+i*.5)));
rise($('ph8'),p(u,TM.phone_note+.3,TM.phone_note+.8));$('ck80').setAttribute('opacity',p(u,TM.phone_note+3,TM.phone_note+3.4));$('ck81').setAttribute('opacity',p(u,TM.phone_note+5.5,TM.phone_note+5.9));