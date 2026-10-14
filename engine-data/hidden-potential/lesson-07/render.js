const lf=p(u,TM.title_card+.4,TM.title_card+2.6),dy=240*(1-lf);
$('lift').setAttribute('transform','translate(0 '+dy.toFixed(1)+')');$('lcol').setAttribute('y',(580+dy).toFixed(1));$('lcol').setAttribute('height',(240-dy).toFixed(1));
rise($('larr'),p(u,TM.title_card+6.6,TM.title_card+7.2));

rise($('fmap'),p(u,TM.finland_map,TM.finland_map+.5));$('fmapP').setAttribute('stroke-dashoffset',(1-p(u,TM.finland_map,TM.finland_map+1.5)).toFixed(3));
rise($('bars'),p(u,TM.mediocre_bar,TM.mediocre_bar+.5));
const fh=200*p(u,TM.mediocre_bar,TM.mediocre_bar+1)+200*p(u,TM.top_trophy,TM.top_trophy+1.5);
fin.setAttribute('y',(700-fh).toFixed(1));fin.setAttribute('height',fh.toFixed(1));fin.setAttribute('fill',u>=TM.top_trophy?'var(--gain)':'var(--muted)');
rise($('trophy'),p(u,TM.top_trophy+1.3,TM.top_trophy+1.8));
rise($('f1'),p(u,TM.top_trophy+5.7,TM.top_trophy+6.3));rise($('f2'),p(u,TM.top_trophy+9.5,TM.top_trophy+10.1));

const fo=p(u,TM.split_paths,TM.split_paths+.5),sp=p(u,TM.split_paths+.6,TM.split_paths+2.2);rise($('fork'),fo);
FK.forEach(k=>{const [c,x0,x1,y1,dn]=k;c.setAttribute('cx',(x0+(x1-x0)*sp).toFixed(1));c.setAttribute('cy',(500+(y1-500)*sp).toFixed(1));c.setAttribute('class',dn&&sp>.5?'loss':'ink');c.setAttribute('opacity',fo)});
rise($('room'),p(u,TM.one_classroom,TM.one_classroom+.5));RK.forEach((g,i)=>rise(g,p(u,TM.one_classroom+.3+i*.08,TM.one_classroom+.7+i*.08)));
rise($('ms1'),p(u,TM.one_classroom+4.6,TM.one_classroom+5.1));rise($('ms2'),p(u,TM.one_classroom+7.6,TM.one_classroom+8.2));

rise($('fun'),p(u,TM.teacher_desk,TM.teacher_desk+.5));const fd=p(u,TM.teacher_desk+1,TM.teacher_desk+2);
FD.forEach((c,i)=>c.setAttribute('opacity',i===3?1:(1-.75*fd).toFixed(2)));rise($('tch'),p(u,TM.teacher_desk+1.5,TM.teacher_desk+2));
rise($('dip'),p(u,TM.diploma,TM.diploma+.5));rise($('prog'),p(u,TM.diploma+3.4,TM.diploma+3.9));
PB.forEach((b,i)=>{const h=PH[i]*p(u,TM.diploma+3.8+i*.3,TM.diploma+5.3+i*.3);b.setAttribute('y',(590-h).toFixed(1));b.setAttribute('height',h.toFixed(1))});
rise($('tr3'),p(u,TM.diploma+4.5,TM.diploma+5.1));

CP.forEach((g,k)=>rise(g,p(u,TM.calendar_pages+k*.6,TM.calendar_pages+k*.6+.4)));
LP.forEach((g,k)=>rise(g,p(u,TM.teacher_class+k*.8,TM.teacher_class+k*.8+.5)));rise($('lpl'),p(u,TM.teacher_class+2.4,TM.teacher_class+2.9));
rise($('chart'),p(u,TM.growth_line,TM.growth_line+.5));$('gl').setAttribute('stroke-dashoffset',(1-p(u,TM.growth_line+.4,TM.growth_line+5)).toFixed(3));
rise($('snap'),p(u,TM.growth_line+5,TM.growth_line+5.6));

rise($('helper'),p(u,TM.helping_hand,TM.helping_hand+.5));
const sy=700-260*p(u,TM.helping_hand+1.2,TM.ladder+1.5);
$('strug').setAttribute('transform','translate(480 '+sy.toFixed(1)+')');ST.forEach(e=>e.setAttribute('class',u>=TM.ladder?'ink':'loss'));
$('arm').setAttribute('d','M626 352L498 '+(sy+20).toFixed(1));$('arm').setAttribute('opacity',p(u,TM.helping_hand+.6,TM.helping_hand+1));
rise($('h0'),p(u,TM.helping_hand,TM.helping_hand+.5));rise($('h1'),p(u,TM.helping_hand+2,TM.helping_hand+2.5));
rise($('h2'),p(u,TM.ladder,TM.ladder+.5));rise($('h3'),p(u,TM.ladder+6.6,TM.ladder+7.2));

rise($('p1'),p(u,TM.interview_room,TM.interview_room+.5));rise($('p2'),p(u,TM.diving_board,TM.diving_board+.5));rise($('p3'),p(u,TM.steep_hill,TM.steep_hill+.5));
const dc=(t%2.4)/2.4,q=Math.min(dc/.8,1),a1=(1-q)*(1-q),a2=2*(1-q)*q,a3=q*q;
$('diver').setAttribute('cx',(a1*760+a2*800+a3*790).toFixed(1));$('diver').setAttribute('cy',(a1*306+a2*198+a3*612).toFixed(1));$('diver').setAttribute('opacity',dc<.88?1:0);
rise($('grow'),p(u,TM.steep_hill+3,TM.steep_hill+3.5));rise($('hb'),p(u,TM.steep_hill+4,TM.steep_hill+4.6));

rise($('tbl'),p(u,TM.team_table,TM.team_table+.5));rise($('k0'),p(u,TM.team_table+3.4,TM.team_table+3.9));
rise($('k1'),p(u,TM.mentor_pair,TM.mentor_pair+.5));rise($('k2'),p(u,TM.open_door,TM.open_door+.5));rise($('yb'),p(u,TM.open_door+.6,TM.open_door+1.2));
const nw=p(u,TM.mentor_pair+.3,TM.mentor_pair+1.5),pr=u>=TM.mentor_pair+1.5;
$('nwc').setAttribute('cy',(820-110*nw).toFixed(1));$('nwc').setAttribute('opacity',p(u,TM.mentor_pair,TM.mentor_pair+.4));$('nwc').style.stroke=pr?'var(--gain)':'var(--ink)';
$('pl').setAttribute('opacity',p(u,TM.mentor_pair+1.5,TM.mentor_pair+2));SE[2].setAttribute('class',pr?'gain':'ink');

const s8=SC[8][0]/K;
rise($('qa'),p(u,s8+.3,s8+.8));rise($('qb'),p(u,s8+.7,s8+1.2));rise($('qc'),p(u,s8+1.1,s8+1.6));rise($('qd'),p(u,s8+4.8,s8+5.3));
$('stem').setAttribute('d','M1370 780V'+(780-140*p(u,s8+4.8,s8+6.3)).toFixed(1));rise($('lv'),p(u,s8+6,s8+6.6));