const f=1+.12*Math.sin(t*9)+.06*Math.sin(t*23);
$('frays').setAttribute('transform','translate(1180 640) scale('+f.toFixed(3)+') translate(-1180 -640)');
rise($('flare'),p(u,TM.flare,TM.flare+.4)); rise($('sign0'),p(u,TM.flare+3.8,TM.flare+4.4));

const F=TM.friend_text, H=TM.thermometer;
rise($('phone'),p(u,F,F+.5)); rise($('bub'),p(u,F+.6,F+1)); rise($('thermo'),p(u,F+1.5,F+2)); rise($('lvl0'),p(u,F+1.8,F+2.3));
const hy=640-350*p(u,H,H+1.6); $('merc').setAttribute('y',hy.toFixed(1)); $('merc').setAttribute('height',(770-hy).toFixed(1));
rise($('lvl1'),p(u,H+1.2,H+1.7)); rise($('gap'),p(u,H+3.8,H+4.4)); rise($('older'),p(u,H+6.7,H+7.3));

const L=TM.light_tap;
rise($('a1'),p(u,TM.bruise,TM.bruise+.5)); rise($('a0'),p(u,L,L+.5));
[L+.6,L+2.9].forEach((a,i)=>{const k=p(u,a,a+.25)-p(u,a+.35,a+.7);$('fing'+i).setAttribute('y',(260+80*k).toFixed(1));$('fing'+i).setAttribute('opacity',(1-.7*p(u,L+6.7,L+7.3)).toFixed(2));rise($('r'+i),p(u,a+.3,a+.7))});
rise($('same'),p(u,L+2.9,L+3.4));
$('bruise').setAttribute('ry',(40+(u>=L+6.7?6*Math.abs(Math.sin(t*3)):0)).toFixed(1));
rise($('cap0'),p(u,L+6.7,L+7.2)); rise($('cap1'),p(u,L+9.7,L+10.2));

const C=TM.critic, M=TM.mirror;
rise($('pl'),p(u,C,C+.5));
const k0=p(u,C+.6,C+1.6); $('c0').setAttribute('transform','translate('+(200+170*k0).toFixed(1)+' '+(260+270*k0).toFixed(1)+') rotate('+(20*k0).toFixed(1)+')'); $('c0').setAttribute('opacity',cl(lin(u,C+.4,C+.7)));
rise($('lab0'),p(u,C+1.8,C+2.3)); rise($('secure'),p(u,M,M+.5));
// comment flies in, hits the secure ring, then glides off around it and away
const k1=p(u,M+.3,M+1.1), k2=p(u,M+1.1,M+2.6);
let cx1=880+135*k1, cy1=240+89*k1;
if(k2>0){const ang=(-130+150*k2)*Math.PI/180, rad=210+40*k2; cx1=1150+rad*Math.cos(ang); cy1=490+rad*Math.sin(ang)}
$('c1').setAttribute('transform','translate('+cx1.toFixed(1)+' '+cy1.toFixed(1)+') rotate('+(65*k2).toFixed(1)+')');
$('c1').setAttribute('opacity',(cl(lin(u,M+.1,M+.4))*(1-.6*k2)).toFixed(2));
$('trail1').setAttribute('opacity',(.7*cl(lin(u,M+1.1,M+1.5))).toFixed(2));
$('fear').setAttribute('r',(24+(u>=M+5?6*Math.abs(Math.sin(t*3)):0)).toFixed(1));
rise($('fearL'),p(u,M+5,M+5.5)); rise($('nw'),p(u,M+9.6,M+10.2));

const D=TM.open_door, S=TM.spotlight;
rise($('ppl'),p(u,TM.two_people,TM.two_people+.5)); rise($('envy'),p(u,TM.two_people+.8,TM.two_people+1.3));
rise($('door'),p(u,D,D+.5)); const o=p(u,D+.6,D+2.2), w=220*(1-.75*o);
$('dpan').setAttribute('points','1060,300 '+(1060+w).toFixed(1)+','+(300+20*o).toFixed(1)+' '+(1060+w).toFixed(1)+','+(680-20*o).toFixed(1)+' 1060,680');
rise($('spot'),p(u,S,S+.6)); rise($('dir'),p(u,S+5.7,S+6.3));

const O=TM.pot;
rise($('push'),p(u,TM.lid,TM.lid+.5)); $('push').setAttribute('transform','translate(0 '+(30*p(u,TM.lid+.5,TM.lid+1.2)).toFixed(1)+')');
$('lid').setAttribute('transform','translate(0 '+(-(6+6*Math.abs(Math.sin(t*14)))*p(u,O,O+1)).toFixed(1)+')');
$('flm').setAttribute('opacity',(.75+.25*Math.sin(t*11)).toFixed(2));
$('boil').setAttribute('opacity',p(u,O+1,O+2));
rise($('hid'),p(u,O+4.5,O+5)); HT.forEach((h,i)=>rise(h,p(u,O+5.3+i*.5,O+5.6+i*.5)));

const N=TM.notebook;
rise($('post'),p(u,TM.signpost,TM.signpost+.5)); rise($('q1'),p(u,TM.question,TM.question+.5));
rise($('q2'),p(u,N,N+.5)); rise($('q3'),p(u,N+2.5,N+3)); rise($('al'),p(u,N,N+.5));

const B=TM.bandage, Q=B+9.5, rr=1-p(u,Q,Q+1);
rise($('arm7'),p(u,B-.6,B-.1)); rise($('band'),p(u,B+.4,B+.9));
CH7.forEach((g,i)=>rise(g,p(u,B+4.5+i*.8,B+5+i*.8)));
rise($('bell'),p(u,B+.8,B+1.3)); $('bellB').setAttribute('transform','rotate('+(10*rr*Math.sin(t*22)).toFixed(1)+' 960 362)');
$('ring').setAttribute('opacity',rr.toFixed(2)); $('bellP').style.fill=rr>.5?'var(--loss)':'var(--muted)';
rise($('heal'),p(u,Q,Q+.6)); rise($('face'),p(u,TM.calm_face,TM.calm_face+.5));
$('mouth').setAttribute('d','M1235 500Q1280 '+(465+70*p(u,TM.calm_face+.5,TM.calm_face+1.5)).toFixed(1)+' 1325 500');

rise($('qa'),p(u,TM.map,TM.map+.5)); rise($('qb'),p(u,TM.map+.4,TM.map+.9)); rise($('qc'),p(u,TM.map+4.2,TM.map+4.8));
$('sign8').setAttribute('transform','rotate('+(4*Math.sin(t*1.6)).toFixed(2)+' 1380 650)');