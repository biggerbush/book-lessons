MSG.forEach((g,i)=>rise(g,p(u,TM.phone+i*1.2,TM.phone+i*1.2+.4)));
$('tdots').setAttribute('opacity',(p(u,TM.phone+3.4,TM.phone+3.8)*(1-p(u,TM.phone+4.6,TM.phone+5))).toFixed(2));
TD.forEach((c,i)=>c.setAttribute('cy',(555-6*Math.max(0,Math.sin(t*6-i))).toFixed(1)));
rise($('tnr'),p(u,TM.phone+5,TM.phone+5.5));

rise($('p1a'),p(u,TM.chaser,TM.chaser+.5));
const cm=p(u,TM.chaser+.5,TM.chaser+3.5),bob=u>=TM.chaser?Math.abs(5*Math.sin(t*8)):0;
CH.setAttribute('transform','translate('+(30*cm).toFixed(1)+' '+(-bob).toFixed(1)+')');RU.setAttribute('transform','translate('+(55*cm).toFixed(1)+' 0)');
rise($('p1b'),p(u,TM.calendar,TM.calendar+.5));
CE.forEach((c,i)=>c.setAttribute('fill',i<9&&u>=TM.calendar+.6+i*.3?'var(--gain)':'var(--stage)'));
rise($('res'),p(u,TM.calendar+5.4,TM.calendar+6));
rise($('p1c'),p(u,TM.battery,TM.battery+.5));
const bl=1-.82*p(u,TM.battery+.6,TM.battery+3.6);$('batf').setAttribute('width',(222*bl).toFixed(1));$('batf').setAttribute('fill',bl<.4?'var(--loss)':'var(--gain)');

rise($('cards'),p(u,TM.magnifier,TM.magnifier+.5));rise($('magw'),p(u,TM.magnifier+.3,TM.magnifier+.8));
$('mag').setAttribute('transform','translate('+(250+1080*p(u,TM.magnifier+.8,TM.two_paths+3.2)).toFixed(1)+' '+(310+6*Math.sin(t*2)).toFixed(1)+')');
XS.forEach((x,i)=>x.setAttribute('opacity',p(u,TM.two_paths+.4+i*.6,TM.two_paths+.7+i*.6)));
const gf=p(u,TM.two_paths+5.3,TM.two_paths+6);rise($('gues'),p(u,TM.two_paths+.5,TM.two_paths+1)*(1-.35*gf));rise($('does'),gf);
rise($('acts'),p(u,TM.two_paths+10.3,TM.two_paths+10.9));

rise($('roof'),p(u,TM.three_pillars,TM.three_pillars+.6));
[TM.map_pins,TM.clock,TM.spark].forEach((a,i)=>{const h=284*p(u,a,a+.8),r=$('pl'+i);r.setAttribute('y',(640-h).toFixed(1));r.setAttribute('height',h.toFixed(1));
  rise($('ic'+i),p(u,a+.6,a+1.1));rise($('lb'+i),p(u,a+.3,a+.8))});
$('hand').setAttribute('transform','rotate('+(t*120%360).toFixed(1)+' 800 500)');

const s4=p(u,SC[4][0]/K+.3,SC[4][0]/K+.9),mv=TM.moving_van,vm=p(u,mv+1,mv+3.6),vd=520*vm;
rise($('home4'),s4);$('fr4').setAttribute('opacity',(s4*(1-p(u,mv+.6,mv+1))).toFixed(2));
rise($('vanw'),p(u,mv,mv+.5));$('van').setAttribute('transform','translate('+vd.toFixed(1)+' 0)');
const x2=u<mv+.8?596:700+vd,ty=u<mv+.8?390:430;
$('thr').setAttribute('d','M246 390Q'+((246+x2)/2).toFixed(1)+' 260 '+x2.toFixed(1)+' '+ty);
$('thr').setAttribute('opacity',(s4*(1-.7*vm)).toFixed(2));$('thr').setAttribute('stroke-dasharray',u>=mv+1?'12 12':'none');
rise($('nw4'),p(u,mv+4.6,mv+5.2));rise($('sea'),p(u,TM.tide,TM.tide+.6));rise($('dr4'),p(u,TM.tide+.4,TM.tide+1));
let wv='M120 720';for(let x=120;x<=1200;x+=40)wv+='L'+x+' '+(720+6*Math.sin(x/60+t*2)).toFixed(1);$('wv4').setAttribute('d',wv);
$('bt4').setAttribute('transform','translate('+(900+240*p(u,TM.tide+.5,TM.tide+12)).toFixed(1)+' '+(718+4*Math.sin(t*2)).toFixed(1)+')');

rise($('chat'),p(u,TM.group_chat,TM.group_chat+.5));
CB.forEach((g,i)=>rise(g,p(u,TM.group_chat+.8+i*.8,TM.group_chat+1.2+i*.8)));
const hl=u>=TM.coffee_cups+5.8;
[0,1,2].forEach(i=>{const a=TM.coffee_cups+i*1.8;rise($('cd'+i),p(u,a,a+.5));$('cr'+i).setAttribute('stroke',hl?'var(--gain)':'var(--line)');$('cr'+i).setAttribute('stroke-width',hl?6:3)});
rise($('lean'),p(u,TM.coffee_cups+5.8,TM.coffee_cups+6.4));

const wc=TM.watering_can,gd=TM.garden,od=TM.open_door;
rise($('canw'),p(u,wc,wc+.5));rise($('pots'),p(u,wc+.2,wc+.7));
const cxp=200+495*p(u,gd-.5,gd+3);$('can').setAttribute('transform','translate('+cxp.toFixed(1)+' 300)');
const dro=u>=wc+.6&&u<od?1:0;
DR.forEach((d,k)=>{const y=(t*160+k*37)%110;d.setAttribute('transform','translate('+(cxp+130).toFixed(1)+' '+(310+y).toFixed(1)+')');d.setAttribute('opacity',(dro*(1-y/110)).toFixed(2))});
const GS={0:wc+.8,2:gd+1.5,3:gd+2.5};
GR.forEach(i=>{const h=20+180*p(u,GS[i],GS[i]+1.4);ST[i].setAttribute('y2',(630-h).toFixed(1));LF[i].setAttribute('transform','translate('+PX[i]+' '+(630-h).toFixed(1)+') scale('+(.4+.6*h/200).toFixed(2)+')')});
rise($('dor'),p(u,od,od+.5));const dk=p(u,od+.6,od+1.8),dx=(1360-140*dk).toFixed(1);
$('dpan').setAttribute('points','1180,380 '+dx+','+(380+20*dk).toFixed(1)+' '+dx+','+(700-20*dk).toFixed(1)+' 1180,700');
$('retf').setAttribute('opacity',p(u,od+1.4,od+2));rise($('ret'),p(u,od+1.8,od+2.4));

const hs=TM.heart,sc=TM.scale;
rise($('hrt'),p(u,hs,hs+.5));
rise($('k0'),p(u,hs+.4,hs+.8));strk('ks0',W.kt0,p(u,hs+1.2,hs+1.7));
rise($('k1'),p(u,hs+1.8,hs+2.2));strk('ks1',W.kt1,p(u,hs+2.6,hs+3.1));
rise($('scl'),p(u,sc,sc+.5));
const th=.31*(1-p(u,sc+1,sc+3)),cc=Math.cos(th),ss=Math.sin(th),lx=1120-200*cc,ly=480+200*ss,rx=1120+200*cc,ry=480-200*ss,B=$('beam');
B.setAttribute('x1',lx.toFixed(1));B.setAttribute('y1',ly.toFixed(1));B.setAttribute('x2',rx.toFixed(1));B.setAttribute('y2',ry.toFixed(1));
$('panL').setAttribute('transform','translate('+lx.toFixed(1)+' '+(ly+80).toFixed(1)+')');$('panR').setAttribute('transform','translate('+rx.toFixed(1)+' '+(ry+80).toFixed(1)+')');
const wk=p(u,sc+5.3,sc+5.9);rise($('warm'),wk);rise($('ppl'),wk);
[0,1].forEach(i=>{const ph=(t*.5+i*.5)%1;$('rg'+i).setAttribute('r',(160+90*ph).toFixed(1));$('rg'+i).setAttribute('opacity',(wk*(1-ph)).toFixed(2))});
$('hrti').setAttribute('transform','translate(400 470) scale('+(1+.05*wk*Math.sin(t*4)).toFixed(3)+')');

const nb=TM.notebook;
rise($('qa'),p(u,nb,nb+.5));rise($('qb'),p(u,nb+.4,nb+.9));rise($('nb'),p(u,nb+.6,nb+1.1));
TK.forEach((q,i)=>{q[0].setAttribute('opacity',p(u,nb+1.2+i*.6,nb+1.5+i*.6));q[1].setAttribute('stroke',i===0&&u>=nb+4.2?'var(--gain)':'var(--line)')});
rise($('qc'),p(u,nb+4.2,nb+4.7));rise($('qm'),p(u,nb+4.8,nb+5.3));