const R=(id,c,d)=>rise($(id),p(u,c,c+(d||.5)));
$('puck').setAttribute('cx',(1290+130*Math.sin(t*1.1)).toFixed(1));$('puck').setAttribute('cy',(375+60*Math.sin(t*1.7)).toFixed(1));
R('rink',TM.hockey_rink);R('cal0',TM.hockey_rink+6.2);

R('roster',TM.team_roster);
rows.forEach((r,i)=>{const a=TM.team_roster+.4+i*.2;rise(r[0],p(u,a,a+.4));r[1].style.fill=r[2]&&u>=TM.calendar?'var(--gain)':''});
R('chart',TM.calendar);
bars.forEach((b,i)=>{const a=TM.calendar+.3+i*.08,h=BH[i]*p(u,a,a+.7);b.setAttribute('y',(680-h).toFixed(1));b.setAttribute('height',h.toFixed(1))});
R('magW',TM.magnifier);$('mag').setAttribute('transform','translate('+(1350-482*p(u,TM.magnifier,TM.magnifier+2)).toFixed(1)+' 440)');R('pat',TM.magnifier+1.5);

R('cut',TM.jan_first);R('ticks',TM.jan_first+.4);R('grp',TM.two_kids);
const hg=p(u,TM.height_bars,TM.height_bars+1.5);
$('kA').setAttribute('transform','translate(620 750) scale('+(1+.35*hg).toFixed(3)+')');
R('hb',TM.height_bars);$('hbA').setAttribute('y',750-260*hg);$('hbA').setAttribute('height',260*hg);$('hbB').setAttribute('y',750-170*hg);$('hbB').setAttribute('height',170*hg);
R('bigT',TM.height_bars+1.5);

k3.forEach((k,i)=>{const a=TM.coach+i*.12;rise(k[0],p(u,a,a+.5));const ch=k[3]&&u>=TM.badge;k[1].forEach(e=>e.setAttribute('class',ch?'gain':'ink'));if(k[2])rise(k[2],p(u,TM.badge+i*.1,TM.badge+.5+i*.1))});
R('coachG',TM.coach+.6);R('clip',TM.clipboard);
$('tStrike').setAttribute('x2',(1265+150*p(u,TM.clipboard+1,TM.clipboard+1.6)).toFixed(1));R('mat',TM.clipboard+1.6);R('chosen',TM.badge+.6);

// snowball: rolls from station to station, growing at each one
R('lb',TM.snowball);R('ball',TM.snowball);
const SA=[TM.snowball+.6,TM.snowball+2.1,TM.snowball+3.6,Math.max(TM.practice_net,TM.snowball+4.6)];
let sx=260,sr=18;
SA.forEach((a,i)=>{sx+=(SX[i]-(i?SX[i-1]:260))*p(u,a-1,a);sr+=22*p(u,a-.15,a+.45);rise(stp[i],p(u,a,a+.5));
  if(i<3)gh[i].setAttribute('opacity',(.7*p(u,SA[i+1]-.9,SA[i+1]-.4)).toFixed(2))});
sr*=1+.02*Math.sin(t*3)*p(u,TM.growing_ball,TM.growing_ball+.5);
const bx=sx+(sr+3)*NX,by=SLY(sx)-(sr+3)*NY,ba=(sx-260)/34;
$('bc').setAttribute('cx',bx.toFixed(1));$('bc').setAttribute('cy',by.toFixed(1));$('bc').setAttribute('r',sr.toFixed(1));
let sp='';for(let k=0;k<=16;k++){const an=ba+k*.6,rr=sr*.74*k/16;sp+=(k?'L':'M')+(bx+rr*Math.cos(an)).toFixed(1)+' '+(by+rr*Math.sin(an)).toFixed(1)}
$('bl').setAttribute('d',sp);
R('gap',TM.growing_ball);

R('book',TM.open_book);R('verse',TM.bible_verse);
steps.forEach((g,i)=>rise(g,p(u,TM.stairs+i*.3,TM.stairs+.4+i*.3)));
const ck=4*p(u,TM.stairs+.6,TM.stairs+3.4),cf=Math.floor(ck),cr=ck-cf;
cl0.setAttribute('transform','translate('+(795+150*ck).toFixed(1)+' '+(650-90*(cf+cl((cr-.3)/.4))-40*Math.sin(Math.PI*cr)).toFixed(1)+')');
$('climb').setAttribute('opacity',p(u,TM.stairs+.3,TM.stairs+.8));R('acc',TM.stairs+3.4);

R('b0',TM.soccer_ball);R('b1',TM.classroom);R('b2',TM.school_path);R('years',TM.school_path+3);
$('sball').setAttribute('transform','translate(0 '+(-40*Math.abs(Math.sin(t*2.4))).toFixed(1)+')');
const tf=(t*.35)%1,tx=tf<.5?1120+300*tf:1270+300*(tf-.5),ty=tf<.5?600-260*tf:470-320*(tf-.5);
$('tdot').setAttribute('cx',tx.toFixed(1));$('tdot').setAttribute('cy',ty.toFixed(1));

R('lost',TM.lost_players);
lost.forEach((g,i)=>{const a=TM.lost_players+1.5+i*.4;g.setAttribute('opacity',(1-.75*p(u,a,a+1)).toFixed(2))});
R('lg',TM.split_leagues);R('chk',TM.check_mark);

R('qa',TM.mirror);R('qb',TM.mirror+.4);R('qc',TM.mirror+.8);R('mir',TM.mirror+.3);R('q2',TM.mirror+4.2);