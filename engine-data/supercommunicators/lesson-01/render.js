rise($('pp'),p(u,TM.two_people,TM.two_people+.5));
rise($('bb0'),p(u,TM.two_people+.8,TM.two_people+1.3)); rise($('bb1'),p(u,TM.two_people+1.6,TM.two_people+2.1));
rise($('gap0'),p(u,TM.two_people+5,TM.two_people+5.5)); $('gapq').setAttribute('font-size',(64+6*Math.sin(t*3)).toFixed(1));

rise($('bub1'),p(u,TM.speech_bubble,TM.speech_bubble+.5));
ST.forEach((s,i)=>{const a=TM.three_layers+i*.5,k=p(u,a,a+.5);rise(s[0],k);s[1].setAttribute('opacity',k);s[3].setAttribute('opacity',k);const b=TM.three_layers+5+i*.5;rise(s[2],p(u,b,b+.5))});
rise($('note1'),p(u,TM.three_layers+7.9,TM.three_layers+8.5));

rise($('clip2'),p(u,TM.clipboard,TM.clipboard+.5));
RW.forEach((g,i)=>{const a=TM.clipboard+5.9+i*.7;rise(g,p(u,a,a+.4))});
rise($('hq2'),p(u,TM.question_mark,TM.question_mark+.5));
rise($('tag2'),p(u,TM.price_tag,TM.price_tag+.5)); rise($('cal2'),p(u,TM.price_tag+.7,TM.price_tag+1.2));

const bt=1+.06*Math.pow(Math.abs(Math.sin(t*3)),6); $('hrt').setAttribute('transform','translate(330 460) scale('+bt.toFixed(3)+')');
rise($('hrtW'),p(u,TM.heart,TM.heart+.5)); rise($('hq3'),p(u,TM.feelings_face,TM.feelings_face+.5));
FC.forEach((g,i)=>{const a=TM.feelings_face+3.4+i*.5;rise(g,p(u,a,a+.4))});
rise($('und3'),p(u,TM.feelings_face+8.4,TM.feelings_face+9));

rise($('ringc'),p(u,TM.group_circle,TM.group_circle+.5));
RG.forEach((g,i)=>{const a=TM.group_circle+.2+i*.15;rise(g,p(u,a,a+.4))});
rise($('you4'),p(u,TM.group_circle+1.2,TM.group_circle+1.7));
rise($('hq4'),p(u,TM.id_badges,TM.id_badges+.5));
BG.forEach((g,i)=>{const a=TM.id_badges+3+i*.6;rise(g,p(u,a,a+.4))});
rise($('pride4'),p(u,TM.id_badges+9.6,TM.id_badges+10.2));

rise($('auth5'),p(u,TM.tired_author,TM.tired_author+.5)); rise($('ab5'),p(u,TM.tired_author+.6,TM.tired_author+1.1));
rise($('sp5'),p(u,TM.spouse_advice,TM.spouse_advice+.5)); rise($('sb5'),p(u,TM.spouse_advice+.4,TM.spouse_advice+.9));
const sour=u>=TM.storm_cloud; Array.from(AU.children).forEach(e=>e.setAttribute('class',sour?'loss':'ink'));
rise($('cloud5'),p(u,TM.storm_cloud,TM.storm_cloud+.5)); $('cloudIn').setAttribute('transform','translate('+(6*Math.sin(t*1.5)).toFixed(1)+' 0)');
rise($('tens5'),p(u,TM.storm_cloud+5.3,TM.storm_cloud+5.9));

rise($('tA'),p(u,TM.two_tracks,TM.two_tracks+.5)); rise($('tB'),p(u,TM.sad_heart,TM.sad_heart+.5));
$('cAi').setAttribute('transform','translate('+(440+760*p(u,TM.two_tracks,TM.two_tracks+12)).toFixed(1)+' 0)');
$('cBi').setAttribute('transform','translate('+(440+760*p(u,TM.sad_heart,TM.sad_heart+12)).toFixed(1)+' 0)');
rise($('nomeet6'),p(u,TM.sad_heart+4.2,TM.sad_heart+4.8)); rise($('bot6'),p(u,TM.sad_heart+9.2,TM.sad_heart+9.8));

rise($('meet7'),p(u,TM.meeting_table,TM.meeting_table+.5));
$('hand7').setAttribute('transform','rotate('+(t*60%360).toFixed(1)+' 1340 420)');
BB.forEach((g,i)=>{const a=TM.meeting_table+3+i*1.5;rise(g,p(u,a,a+.4))});
TG.forEach((e,i)=>e.setAttribute('stroke-dashoffset',(1-p(u,TM.tangled_lines+i*.3,TM.tangled_lines+i*.3+1.6)).toFixed(3)));
rise($('bot7'),p(u,TM.tangled_lines+4.6,TM.tangled_lines+5.2));

rise($('qa8'),p(u,TM.ear_icon,TM.ear_icon+.5)); rise($('qb8'),p(u,TM.ear_icon+.4,TM.ear_icon+.9)); rise($('qc8'),p(u,TM.ear_icon+.8,TM.ear_icon+1.3));
rise($('ear8'),p(u,TM.ear_icon+1.2,TM.ear_icon+1.7)); $('wav8').setAttribute('opacity',(p(u,TM.ear_icon+1.5,TM.ear_icon+2)*(.55+.45*Math.sin(t*3))).toFixed(2));
CP.forEach((g,i)=>{const a=TM.ear_icon+7+i*.5;rise(g,p(u,a,a+.4))});