rise($('road0'),p(u,TM.easy_road,TM.easy_road+.5));rise($('hill0'),p(u,TM.easy_road+.6,TM.easy_road+1.1));
const c0=part(CP,p(u,TM.easy_road+5.4,TM.easy_road+11));$('climb0').setAttribute('points',c0[0]);
$('climber').setAttribute('cx',c0[1][0].toFixed(1));$('climber').setAttribute('cy',(c0[1][1]-14).toFixed(1));$('climber').setAttribute('opacity',p(u,TM.easy_road+.8,TM.easy_road+1.3));

rise($('room1'),p(u,TM.classroom,TM.classroom+.5));rise($('stu1'),p(u,TM.student,TM.student+.5));
$('q1').setAttribute('opacity',(p(u,TM.student+.4,TM.student+.9)*(1-p(u,TM.teacher+3,TM.teacher+3.4))).toFixed(2));
rise($('tch1'),p(u,TM.teacher,TM.teacher+.5));H1.forEach((g,i)=>rise(g,p(u,TM.teacher+.5+i*.8,TM.teacher+.9+i*.8)));
rise($('ans1'),p(u,TM.teacher+3,TM.teacher+3.5));rise($('feel1'),p(u,TM.teacher+4.6,TM.teacher+5.2));

rise($('badge2'),p(u,TM.bjork,TM.bjork+.5));rise($('ax2'),p(u,TM.bjork+1,TM.bjork+1.5));
rise($('lg2a'),p(u,TM.mountain,TM.mountain+.4));$('pl2a').setAttribute('points',part(S2,p(u,TM.mountain,TM.mountain+2.5))[0]);$('pl2a').setAttribute('opacity',u>=TM.mountain?1:0);rise($('lb2a'),p(u,TM.mountain+2.4,TM.mountain+2.9));
rise($('lg2b'),p(u,TM.fast_lane,TM.fast_lane+.4));$('pl2b').setAttribute('points',part(F2,p(u,TM.fast_lane,TM.fast_lane+2))[0]);$('pl2b').setAttribute('opacity',u>=TM.fast_lane?1:0);rise($('lb2b'),p(u,TM.fast_lane+1.9,TM.fast_lane+2.4));

const W=TM.wrong_guess,s3=p(u,W+5.7,W+6.7);
rise($('card3'),p(u,TM.quiz_card,TM.quiz_card+.5));rise($('guess3'),p(u,W,W+.5));$('x3').setAttribute('opacity',p(u,W+1.2,W+1.6));
rise($('net3'),p(u,W+.3,W+.8));rise($('lens3'),p(u,W+.5,W+1));
const lx=1150+230*Math.sin(t*.9),ly=460+150*Math.sin(t*1.3);
$('lensI').setAttribute('transform','translate('+(lx+(1180-lx)*s3).toFixed(1)+' '+(ly+(520-ly)*s3).toFixed(1)+')');
ND[10].setAttribute('class',s3>0?'gain':'ink');ND[10].setAttribute('r',(14+8*s3).toFixed(1));
$('link3').setAttribute('opacity',s3);$('qm3').setAttribute('opacity',(1-s3).toFixed(2));$('ok3').setAttribute('opacity',s3);
rise($('stick3'),p(u,W+6,W+6.6));

BK.forEach((g,i)=>rise(g,p(u,TM.blocked_set+i*.25,TM.blocked_set+i*.25+.4)));
const M=TM.mixed_set,sh=p(u,M+.8,M+2.2);rise($('mix4'),p(u,M,M+.5));
MX.forEach((g,i)=>{const x=120+(i+(S4[i]-i)*sh)*104,y=450-36*Math.sin(Math.PI*sh)*(i%2?1:-1);g.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+')')});
rise($('ch4a'),p(u,M+5,M+5.5));rise($('ch4b'),p(u,M+9.2,M+9.7));rise($('strat4'),p(u,M+10,M+10.5));
const ga=p(u,M+5.3,M+6.3),gb=p(u,M+9.5,M+10.5);
[['b4a0',170*ga],['b4a1',100*ga],['b4b0',80*gb],['b4b1',170*gb]].forEach(([id,h])=>{$(id).setAttribute('y',(820-h).toFixed(1));$(id).setAttribute('height',h.toFixed(1))});

rise($('box5'),p(u,TM.academy+.5,TM.academy+1));
CD.forEach((c,i)=>{const m=p(u,TM.academy+2.5+i*.08,TM.academy+4+i*.08);c.setAttribute('cx',(C0[i][0]+(C1[i][0]-C0[i][0])*m).toFixed(1));c.setAttribute('cy',(C0[i][1]+(C1[i][1]-C0[i][1])*m).toFixed(1));c.setAttribute('opacity',p(u,TM.academy+i*.05,TM.academy+.5+i*.05))});
rise($('ra5'),p(u,TM.prof_a,TM.prof_a+.5));rise($('rb5'),p(u,TM.prof_b,TM.prof_b+.5));rise($('nx5'),p(u,TM.next_course,TM.next_course+.5));
$('c5a').setAttribute('width',(520*p(u,TM.prof_a+.3,TM.prof_a+1.3)).toFixed(1));$('c5b').setAttribute('width',(260*p(u,TM.prof_b+.3,TM.prof_b+1.3)).toFixed(1));
$('n5a').setAttribute('width',(280*p(u,TM.next_course+.4,TM.next_course+1.6)).toFixed(1));$('n5b').setAttribute('width',(520*p(u,TM.next_course+.4,TM.next_course+1.6)).toFixed(1));

const D=TM.deep_roots;rise($('sh6'),p(u,D,D+.5));rise($('dp6'),p(u,D+.4,D+.9));
const rk=.25*p(u,D+.4,D+1.4)+.75*p(u,D+6.6,D+9);R6.forEach(r=>draw(r,rk));
rise($('br6'),p(u,TM.bridge,TM.bridge+.4));draw($('brp6'),p(u,TM.bridge,TM.bridge+1.5));
const ws=(t*.25)%1,wq=1-ws;$('walk6').setAttribute('cx',(wq*wq*960+2*wq*ws*1130+ws*ws*1300).toFixed(1));$('walk6').setAttribute('cy',(wq*wq*480+2*wq*ws*360+ws*ws*480-16).toFixed(1));$('walk6').setAttribute('opacity',u>=TM.bridge+1.5?1:0);

rise($('k0'),p(u,TM.notebook,TM.notebook+.5));rise($('k1'),p(u,TM.shuffle,TM.shuffle+.5));rise($('k2'),p(u,TM.stopwatch,TM.stopwatch+.5));
W7.forEach((w,i)=>draw(w,p(u,TM.notebook+.6+i*.5,TM.notebook+1+i*.5)));
const f7=Math.max(0,u-TM.shuffle)/1.5,b7=Math.floor(f7),r7=ease(cl((f7-b7)*2)),SX=[650,760,870];
M7.forEach((g,i)=>{const a=SX[(i+b7)%3],b=SX[(i+b7+1)%3],x=f7>0?a+(b-a)*r7:SX[i],y=350-(f7>0?30*Math.sin(Math.PI*r7)*(i===1?-1:1):0);g.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+')')});
const sw=p(u,TM.stopwatch+.5,TM.stopwatch+4.5),an=sw*2*Math.PI*.999,hx=1273+88*Math.sin(an),hy=420-88*Math.cos(an);
$('wd7').setAttribute('d',sw>0?'M1273 420L1273 332A88 88 0 '+(an>Math.PI?1:0)+' 1 '+hx.toFixed(1)+' '+hy.toFixed(1)+'Z':'M1273 420');
$('hd7').setAttribute('x2',(1273+80*Math.sin(an)).toFixed(1));$('hd7').setAttribute('y2',(420-80*Math.cos(an)).toFixed(1));

const Q=TM.question;rise($('qa'),p(u,Q,Q+.5));rise($('qb'),p(u,Q+.4,Q+.9));rise($('qc'),p(u,Q+.8,Q+1.3));
rise($('mt8'),p(u,Q+1.4,Q+1.9));rise($('lab8'),p(u,Q+4.2,Q+4.7));draw($('cl8'),p(u,Q+4.2,Q+5.6));rise($('fl8'),p(u,Q+5.6,Q+6.1));