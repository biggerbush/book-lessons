const a0=(t*6)%360,ar=a0*Math.PI/180;
$('hand0').setAttribute('transform','rotate('+a0.toFixed(1)+' 1330 400)');
$('arc0').setAttribute('d','M1330 308A92 92 0 '+(a0>180?1:0)+' 1 '+(1330+92*Math.sin(ar)).toFixed(1)+' '+(400-92*Math.cos(ar)).toFixed(1));

rise($('cop'),p(u,TM.copernicus,TM.copernicus+.5));
rise($('sun'),p(u,TM.sun_diagram,TM.sun_diagram+.5));
$('earth').setAttribute('cx',(800+220*Math.cos(t*.8)).toFixed(1));$('earth').setAttribute('cy',(480+150*Math.sin(t*.8)).toFixed(1));
rise($('cal'),p(u,TM.calendar_page,TM.calendar_page+.5));
const cf=p(u,TM.calendar_page+.5,TM.calendar_page+4);cells.forEach((c,i)=>c.setAttribute('fill',i<cf*36?'var(--gain)':'var(--stage)'));
rise($('pub'),p(u,TM.calendar_page+2.5,TM.calendar_page+3));

const s2=SC[2][0]/K;rise($('ax'),p(u,s2+.5,s2+1));
[0,1,2].forEach(r=>rise($('nm'+r),p(u,TM.scientists+r*.8,TM.scientists+r*.8+.5)));
IB.forEach(([e,r])=>e.setAttribute('opacity',p(u,TM.scientists+r*.8,TM.scientists+r*.8+.6)));
SB.forEach(([e,r])=>e.setAttribute('opacity',p(u,TM.hammock+r*.5,TM.hammock+r*.5+.6)));
rise($('lg0'),p(u,TM.scientists,TM.scientists+.5));rise($('lg1'),p(u,TM.hammock,TM.hammock+.5));
rise($('big'),p(u,TM.hammock+4,TM.hammock+4.6));

rise($('desk'),p(u,TM.office_desk,TM.office_desk+.5));
rise($('sw'),p(u,TM.stopwatch,TM.stopwatch+.5));$('swh').setAttribute('transform','rotate('+((t*540)%360).toFixed(1)+' 900 450)');
const tw=p(u,TM.tired_worker,TM.tired_worker+1.5);rise($('bat'),p(u,TM.tired_worker,TM.tired_worker+.5));
$('lvl').setAttribute('width',(94*(1-.8*tw)).toFixed(1));$('lvl').setAttribute('fill',tw>.5?'var(--loss)':'var(--gain)');
$('wk').setAttribute('transform','translate(0 '+(16*tw).toFixed(1)+')');wk.forEach(e=>e.setAttribute('fill',tw>.5?'var(--loss)':'var(--ink)'));
const tb=TM.tired_worker+5.5;rise($('pile'),p(u,tb,tb+.5));papers.forEach((e,i)=>e.setAttribute('opacity',p(u,tb+i*.25,tb+i*.25+.3)));
const sl=p(u,tb+2,tb+4.5);$('card').setAttribute('opacity',(p(u,tb,tb+.5)*(1-.25*sl)).toFixed(2));
$('card').setAttribute('transform','translate(0 '+(400*sl).toFixed(1)+') rotate('+(3*sl).toFixed(1)+' 1300 328)');
rise($('slip'),p(u,tb+1.5,tb+2));

rise($('mir'),p(u,TM.miranda,TM.miranda+.5));
rise($('bks'),p(u,TM.book_stack,TM.book_stack+.5));rise($('yrs'),p(u,TM.book_stack,TM.book_stack+.5));
rise($('notes'),p(u,TM.book_stack+2.5,TM.book_stack+3));notes.forEach((n,i)=>n.setAttribute('transform','translate(0 '+(10*Math.sin(t*2+i*1.3)).toFixed(1)+')'));
rise($('stg'),p(u,TM.stage,TM.stage+.5));
const cw=266-216*p(u,TM.stage+.5,TM.stage+2);$('cL').setAttribute('width',cw.toFixed(1));$('cR').setAttribute('width',cw.toFixed(1));$('cR').setAttribute('x',(1456-cw).toFixed(1));
rise($('stars'),p(u,TM.stage+2.5,TM.stage+3));
$('yb').setAttribute('x2',(120+1340*p(u,TM.book_stack,TM.stage+2)).toFixed(1));

const s5=SC[5][0]/K;rise($('q1'),p(u,s5+.5,s5+1));
$('qs').setAttribute('x2',(112+440*p(u,TM.timeline,TM.timeline+.6)).toFixed(1));
rise($('q2'),p(u,TM.timeline+.5,TM.timeline+1));rise($('axis5'),p(u,TM.timeline,TM.timeline+.5));
dots.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.timeline+.5+i*.08,TM.timeline+.8+i*.08)));
$('trend').setAttribute('opacity',p(u,TM.growing_tree,TM.growing_tree+.6));
const gt=p(u,TM.growing_tree,TM.growing_tree+3);$('tree').setAttribute('transform','translate(1280 680) scale('+gt.toFixed(3)+') translate(-1280 -680)');
rise($('treeL'),p(u,TM.growing_tree,TM.growing_tree+.5));

cols.forEach((g,i)=>rise(g,p(u,TM.five_year+i*.3,TM.five_year+i*.3+.5)));
rise($('grow'),p(u,TM.five_year+5.4,TM.five_year+6));
BR.forEach(([g,e],i)=>{rise(g,p(u,TM.blueprint+i*.6,TM.blueprint+i*.6+.5));e.setAttribute('width',(76*p(u,TM.blueprint+4.6+i*.3,TM.blueprint+5.6+i*.3)).toFixed(1))});
rise($('care'),p(u,TM.blueprint+4.6,TM.blueprint+5.2));

rise($('week'),p(u,TM.weekly_plan,TM.weekly_plan+.5));
cards.forEach(([r,b],i)=>{const k=i==3?0:p(u,TM.weekly_plan+2+i*.15,TM.weekly_plan+2.4+i*.15);b.setAttribute('opacity',(1-k).toFixed(2));r.setAttribute('stroke',k>.5?'var(--line)':'var(--loss)')});
rise($('dl'),p(u,TM.deadline_tag,TM.deadline_tag+.5));
const mv=p(u,TM.deadline_tag+1,TM.deadline_tag+2.5);tag.setAttribute('transform','translate('+(940+340*mv).toFixed(1)+' 380)');
tagP.setAttribute('fill',mv>.5?'var(--gain)':'var(--loss)');tagT.style.fill=mv>.5?'var(--on-gain)':'var(--stage)';
rise($('lr'),p(u,TM.deadline_tag+2.5,TM.deadline_tag+3));
rise($('walk'),p(u,TM.walking_path,TM.walking_path+.5));
const wx=140+((t*30)%1280);wl.setAttribute('transform','translate('+wx.toFixed(1)+' '+WY(wx).toFixed(1)+')');

rise($('pick'),p(u,TM.question_mark,TM.question_mark+.5));rise($('hg'),p(u,TM.question_mark+.5,TM.question_mark+1));
rise($('qa'),p(u,TM.question_mark+3.4,TM.question_mark+3.9));rise($('qb'),p(u,TM.question_mark+3.8,TM.question_mark+4.3));rise($('qc'),p(u,TM.question_mark+4.2,TM.question_mark+4.7));
const sd=(t*.1)%1,yt=570+66*sd,hw=5+45*(640-yt)/80-4;
$('sandT').setAttribute('points',(1360-hw).toFixed(1)+','+yt.toFixed(1)+' '+(1360+hw).toFixed(1)+','+yt.toFixed(1)+' 1360,636');
$('sandB').setAttribute('points','1314,716 1406,716 1360,'+(716-60*sd).toFixed(1));