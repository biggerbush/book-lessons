const th=300*p(u,TM.title_card+.3,TM.title_card+2.2);$('tfill').setAttribute('y',(724-th).toFixed(1));$('tfill').setAttribute('height',th.toFixed(1));
rise($('play'),p(u,TM.play_button,TM.play_button+.5));

rise($('jars'),p(u,TM.two_jars,TM.two_jars+.5));
[0,1].forEach(i=>rise($('cr'+i),p(u,TM.committed_box+i*.8,TM.committed_box+i*.8+.5)));
rise($('rkt'),p(u,TM.rocket,TM.rocket+.5));const rf=p(u,TM.rocket+.3,TM.rocket+2);
$('rk').setAttribute('transform','translate('+(1130+40*rf).toFixed(1)+' '+(610-90*rf+4*Math.sin(t*3)).toFixed(1)+') rotate(30)');
$('trail').setAttribute('opacity',rf.toFixed(2));
rise($('mix'),p(u,TM.rocket+6.2,TM.rocket+6.7));

const pa1=p(u,TM.full_meter,TM.full_meter+1.5);$('f1').setAttribute('width',(1044*pa1).toFixed(1));$('v1').textContent=Math.round(100*pa1)+'%';
rise($('miss'),p(u,TM.full_meter+3.4,TM.full_meter+3.9));
rise($('asp'),p(u,TM.seventy_mark,TM.seventy_mark+.5));
const pa2=.7*p(u,TM.seventy_mark+3.8,TM.seventy_mark+5.6);$('f2').setAttribute('width',(1044*pa2).toFixed(1));$('v2').textContent=Math.round(100*pa2)+'%';
rise($('succ'),p(u,TM.seventy_mark+5.4,TM.seventy_mark+5.9));rise($('timid'),p(u,TM.seventy_mark+10,TM.seventy_mark+10.5));

rise($('board'),p(u,TM.counter,TM.counter+.5));$('views').textContent=numFmt6(Math.floor(lin(u,TM.counter,TM.counter+20)*9e6));
$('views').setAttribute('fill-opacity',(1-.6*p(u,TM.stopwatch,TM.stopwatch+1)).toFixed(2));
rise($('goodrow'),p(u,TM.goodrow,TM.goodrow+.5));
rise($('sw'),p(u,TM.stopwatch,TM.stopwatch+.5));$('swh').setAttribute('transform','rotate('+((u*120)%360).toFixed(1)+' 1000 650)');

rise($('bill'),p(u,TM.billion_sign,TM.billion_sign+.5));$('bn').textContent=numFmt6(Math.round(1e9*p(u,TM.billion_sign+.2,TM.billion_sign+2.4)));
rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
rise($('gap'),p(u,TM.calendar+4.2,TM.calendar+4.7));rise($('gtx'),p(u,TM.calendar+5,TM.calendar+5.5));
$('garr').setAttribute('stroke-dashoffset',(-t*60).toFixed(0));

rise($('gears'),p(u,TM.gears,TM.gears+.5));
$('ga').setAttribute('transform','translate(280 400) rotate('+(t*30).toFixed(1)+')');
$('gb').setAttribute('transform','translate(430 540) rotate('+(11-t*45).toFixed(1)+')');
rise($('cards'),p(u,TM.gears+.8,TM.gears+1.3));const rr=p(u,TM.recommend+.5,TM.recommend+2);
cards6.forEach((g,i)=>g.setAttribute('transform','translate(0 '+(250+120*(i+[2,-1,-1][i]*rr)).toFixed(1)+')'));
rise($('woj'),p(u,TM.wojcicki,TM.wojcicki+.5));
steps6.forEach((g,i)=>{const a=TM.wojcicki+7+i*.4;rise(g,p(u,a,a+.4))});rise($('flag1'),p(u,TM.wojcicki+8.8,TM.wojcicki+9.3));

const xf=.95*p(u,TM.graph_up,TM.graph_up+4.3),pts=[];let hx=gx6(0),hy=gy6(0);
for(let i=0;i<GP6.length;i++){const a=GP6[i];if(a[0]<=xf){hx=gx6(a[0]);hy=gy6(a[1]);pts.push(hx.toFixed(1)+','+hy.toFixed(1))}else{const b=GP6[i-1],f=(xf-b[0])/(a[0]-b[0]);hx=gx6(xf);hy=gy6(b[1]+(a[1]-b[1])*f);pts.push(hx.toFixed(1)+','+hy.toFixed(1));break}}
$('prog').setAttribute('points',pts.join(' '));$('pdot').setAttribute('cx',hx.toFixed(1));$('pdot').setAttribute('cy',hy.toFixed(1));
$('pdot').setAttribute('opacity',p(u,TM.graph_up,TM.graph_up+.3).toFixed(2));
const ck=u-TM.confetti,cc=ck>0?ck%1.8:0;
CF6.forEach(([el,a,v])=>{el.setAttribute('x',(1243+Math.cos(a)*v*cc*.4).toFixed(1));el.setAttribute('y',(300-Math.abs(Math.sin(a))*v*cc+180*cc*cc).toFixed(1));el.setAttribute('opacity',ck>0?(1-p(cc,1.1,1.7)).toFixed(2):0)});
rise($('done'),p(u,TM.confetti,TM.confetti+.6));

rise($('scale'),p(u,TM.balance,TM.balance+.5));
const T7=TM.tired_team+6.1,tl=p(u,TM.tired_team,TM.tired_team+1)*(1-p(u,T7,T7+1)),an=12*tl*Math.PI/180,cs=300*Math.cos(an),sn=300*Math.sin(an);
$('beam').setAttribute('x1',(800-cs).toFixed(1));$('beam').setAttribute('y1',(260-sn).toFixed(1));$('beam').setAttribute('x2',(800+cs).toFixed(1));$('beam').setAttribute('y2',(260+sn).toFixed(1));
$('panL').setAttribute('transform','translate('+(800-cs).toFixed(1)+' '+(260-sn).toFixed(1)+')');
$('panR').setAttribute('transform','translate('+(800+cs).toFixed(1)+' '+(260+sn).toFixed(1)+')');
xs6.setAttribute('opacity',tl.toFixed(2));
rise($('tired'),p(u,TM.tired_team,TM.tired_team+.5));
['tagL','tagR'].forEach(k=>$(k).setAttribute('opacity',p(u,T7,T7+.5).toFixed(2)));rise($('lab'),p(u,T7+.3,T7+.8));

rise($('qa'),p(u,TM.notebook,TM.notebook+.5));rise($('qb'),p(u,TM.notebook+.5,TM.notebook+1));
rise($('nb'),p(u,TM.notebook+.3,TM.notebook+.8));$('nbl').setAttribute('stroke-dashoffset',(240*(1-p(u,TM.notebook+1,TM.notebook+2))).toFixed(1));
rise($('qc'),p(u,TM.notebook+5,TM.notebook+5.5));rise($('qd'),p(u,TM.notebook+5.5,TM.notebook+6));rise($('pill'),p(u,TM.notebook+5.3,TM.notebook+5.8));