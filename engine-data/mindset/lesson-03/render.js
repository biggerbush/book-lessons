rise($('star0'),p(u,TM.star_poster,TM.star_poster+.6));
$('starP').setAttribute('transform','rotate('+(6*Math.sin(t*1.2)).toFixed(2)+' 1300 450)');
SPK.forEach((s,i)=>s.setAttribute('opacity',(.3+.7*Math.abs(Math.sin(t*2+i))).toFixed(2)));
BR.forEach((b,i)=>{const a=TM.star_poster+3.4+i*.25;rise(b,p(u,a,a+.4))});

rise($('crw'),p(u,TM.crowd,TM.crowd+.5));rise($('stg'),p(u,TM.crowd+.4,TM.crowd+.9));
rise($('wand'),p(u,TM.magic_wand,TM.magic_wand+.5));$('spk1').setAttribute('opacity',(.4+.6*Math.abs(Math.sin(t*3))).toFixed(2));
rise($('fx'),p(u,TM.magic_wand+3.8,TM.magic_wand+4.3));
rise($('hid'),p(u,TM.hidden_hours,TM.hidden_hours+.5));
CK.forEach((c,i)=>{const a=TM.hidden_hours+.4+i*.12;rise(c[0],p(u,a,a+.3));c[1].setAttribute('transform','rotate('+((t*120+i*40)%360).toFixed(1)+' '+c[2]+' '+c[3]+')')});

rise($('jd'),p(u,TM.jordan,TM.jordan+.5));$('ball2').setAttribute('transform','translate(0 '+(-34*Math.abs(Math.sin(t*3))).toFixed(1)+')');
rise($('vl'),p(u,TM.varsity_list,TM.varsity_list+.5));$('cut').setAttribute('x2',(590+140*p(u,TM.varsity_list+1.2,TM.varsity_list+1.8)).toFixed(1));
rise($('cd0'),p(u,TM.draft_board,TM.draft_board+.5));rise($('cd1'),p(u,TM.draft_board+.6,TM.draft_board+1.1));
rise($('few'),p(u,TM.draft_board+4.2,TM.draft_board+4.8));

rise($('gym'),p(u,TM.gym_light,TM.gym_light+.6));
$('h3').setAttribute('transform','rotate('+((t*200)%360).toFixed(1)+' 190 300)');
const bc=(t%1.6)/1.6;$('ball3').setAttribute('cx',(330+275*bc).toFixed(1));$('ball3').setAttribute('cy',(560-150*bc-680*bc*(1-bc)).toFixed(1));
rise($('mt'),p(u,TM.weak_spots,TM.weak_spots+.5));
[0,1].forEach(i=>{const k=p(u,TM.weak_spots+.5+i*.8,TM.weak_spots+3+i*.8),f=$('f'+i);f.setAttribute('width',(640*(.2+.8*k)).toFixed(1));f.setAttribute('fill',k>=1?'var(--gain)':'var(--loss)')});
rise($('tro'),p(u,TM.trophy,TM.trophy+.5));rise($('tt'),p(u,TM.trophy+.4,TM.trophy+1));

rise($('pno'),p(u,TM.piano,TM.piano+.5));rise($('mzl'),p(u,TM.piano+2.6,TM.piano+3.1));
rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
YR.forEach((r,i)=>r.setAttribute('fill',u>=TM.calendar+.4+i*.35?'var(--gain)':'none'));
const yk=p(u,TM.calendar+.4,TM.calendar+3.9);$('yrc').textContent=Math.round(10*yk)+(yk>=1?'+':'')+' years';
rise($('staff'),p(u,TM.sheet_music,TM.sheet_music+.4));
NT.forEach((n,i)=>{const a=TM.sheet_music+.2+i*.2;rise(n,p(u,a,a+.3))});
rise($('flw'),p(u,TM.sheet_music+.8,TM.sheet_music+1.4));

rise($('book'),p(u,TM.sketchbook,TM.sketchbook+.5));
BF.forEach(e=>draw(e,p(u,TM.before_face,TM.before_face+2)));rise($('bl'),p(u,TM.before_face,TM.before_face+.5));
AF.forEach(e=>draw(e,p(u,TM.after_face,TM.after_face+2.6)));rise($('al'),p(u,TM.after_face+.5,TM.after_face+1));
rise($('learn'),p(u,TM.after_face+4.1,TM.after_face+4.7));

rise($('k0'),p(u,TM.two_kids,TM.two_kids+.5));rise($('back'),p(u,TM.two_kids+2,TM.two_kids+2.5));
rise($('k1'),p(u,TM.hourglass,TM.hourglass+.5));
const sd=(t%4)/4,yt=320+140*sd,ht=60*(460-yt)/140,yb=600-140*sd,hb=60*(yb-460)/140;
$('sandT').setAttribute('points',(800-ht).toFixed(1)+','+yt.toFixed(1)+' '+(800+ht).toFixed(1)+','+yt.toFixed(1)+' 800,460');
$('sandB').setAttribute('points','740,600 860,600 '+(800+hb).toFixed(1)+','+yb.toFixed(1)+' '+(800-hb).toFixed(1)+','+yb.toFixed(1));
rise($('k2'),p(u,TM.closed_door,TM.closed_door+.5));
$('door').setAttribute('width',(170*(.15+.85*p(u,TM.closed_door+.6,TM.closed_door+1.6))).toFixed(1));

const ck=p(u,TM.upward_path,TM.upward_path+3);
$('clm').setAttribute('opacity',p(u,TM.start_line,TM.start_line+.5));
try{const q=ST.getPointAtLength(SL*ck);$('clm').setAttribute('cx',q.x.toFixed(1));$('clm').setAttribute('cy',(q.y-40).toFixed(1))}catch(e){$('clm').setAttribute('cx',220);$('clm').setAttribute('cy',680)}
DT.forEach((d,i)=>{const a=TM.start_line+2.9+i*.3;rise(d,p(u,a,a+.4))});
draw(ST,ck);rise($('ahd'),p(u,TM.upward_path+2.8,TM.upward_path+3.2));
rise($('ceil'),p(u,TM.upward_path+4.2,TM.upward_path+4.8));
TG.forEach((g,i)=>{const a=TM.practice_log+i*.6;rise(g,p(u,a,a+.4))});

const s8=SC[8][0]/K;
rise($('qa'),p(u,s8+.4,s8+.9));rise($('qb'),p(u,s8+.9,s8+1.4));rise($('qc'),p(u,s8+4.6,s8+5.1));rise($('ql'),p(u,s8+5.2,s8+5.7));
rise($('court'),p(u,s8+.6,s8+1.2));
const b8=(t%2)/2,bk=cl(b8/.8),bp=qb8(bk),bo=b8<.8?1:1-(b8-.8)/.2;
$('ball8').setAttribute('transform','translate('+bp[0].toFixed(1)+' '+(bp[1]+(b8>.8?60*(b8-.8)/.2:0)).toFixed(1)+')');
$('ball8').setAttribute('opacity',(bo*p(u,s8+.6,s8+1.2)).toFixed(2));