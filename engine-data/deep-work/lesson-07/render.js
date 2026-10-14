const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d)), dr=(el,k)=>el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));

RG.forEach((c,i)=>dr(c,p(u,TM.title_card+i*.5,TM.title_card+i*.5+1.2)));
$('dot0').setAttribute('cy',(200+200*p(u,TM.title_card+5.8,TM.title_card+7.2)).toFixed(1));
$('dot0').setAttribute('r',(30+3*Math.sin(t*2)).toFixed(1));
$('dot0').setAttribute('opacity',p(u,TM.title_card,TM.title_card+.6));

R('p0',TM.toolbox); R('p1',TM.trophy); R('p2',TM.heart); R('big1',TM.heart+2.5);
$('hrt').setAttribute('transform','translate(1273 450) scale('+(1+.07*Math.pow(Math.abs(Math.sin(t*3)),6)).toFixed(3)+')');

R('wr',TM.writer); R('dx',TM.writer+1.5); R('dis',TM.writer+1.5);
const sw=p(u,TM.spotlight+5.6,TM.spotlight+6.8);
$('beam').setAttribute('opacity',p(u,TM.spotlight,TM.spotlight+.6));
$('beam').setAttribute('transform','translate(300 395) rotate('+(14-18*sw).toFixed(2)+')');
R('good',TM.spotlight+.3); GD.forEach(c=>c.setAttribute('opacity',(.35+.65*sw).toFixed(2)));
$('disc').setAttribute('opacity',(1-.6*sw).toFixed(2)); R('kept',TM.spotlight+6.4);

R('mir',TM.mirror);
dr($('f0'),p(u,TM.split_path,TM.split_path+1)); R('triv',TM.split_path+.8);
TV.forEach((c,i)=>c.setAttribute('transform','translate('+(6*Math.sin(t*5+i*2)).toFixed(1)+' '+(6*Math.cos(t*4+i*3)).toFixed(1)+')'));
dr($('f1'),p(u,TM.deep_pool,TM.deep_pool+1)); R('pool',TM.deep_pool+.8);
PL.forEach((e,i)=>e.setAttribute('stroke-opacity',(.55+.45*Math.sin(t*2-i)).toFixed(2)));

R('tl',TM.professor); R('bp',TM.professor+.2);
TK.forEach((c,i)=>{const a=TM.professor+.6+i*.5;c.setAttribute('opacity',p(u,a,a+.2))});
$('bw').setAttribute('opacity',Math.abs(Math.sin(t*5)).toFixed(2));
R('dy',TM.diary); DR.forEach((g,i)=>rise(g,p(u,TM.diary+.6+i*.6,TM.diary+1+i*.6)));
R('ls',TM.work_desk); R('wk',TM.work_desk+.7); R('happy',TM.work_desk+1.4);

R('mtn',TM.mountain); R('clb',TM.mountain+.3); R('flag',TM.mountain+4);
const cp=CP.getPointAtLength(CL*p(u,TM.mountain+.5,TM.mountain+4.5));
$('clbc').setAttribute('cx',cp.x.toFixed(1)); $('clbc').setAttribute('cy',(cp.y-3*Math.abs(Math.sin(t*4))).toFixed(1));
R('flw',TM.flow_wave);
let wv='';for(let x=1120;x<=1470;x+=10)wv+=(x===1120?'M':'L')+x+' '+(500+18*Math.sin(x/30-t*3)).toFixed(1);
$('wv').setAttribute('d',wv); R('dwt',TM.flow_wave+2.2);

R('anv',TM.forge);
const hc=(t%1.2)/1.2;
$('hm').setAttribute('transform','translate(0 '+(30-110*Math.sin(Math.PI*hc)).toFixed(1)+')');
const sk=p(u,TM.sword,TM.sword+4);
$('bar').setAttribute('opacity',(1-.8*sk).toFixed(2));
R('swd',TM.sword); R('arw',TM.sword+.4);
$('blade').setAttribute('transform','translate(960 0) scale('+(.05+.95*sk).toFixed(3)+' 1) translate(-960 0)');
const on=u>=TM.spark?1:0;
SP.forEach((s,i)=>{const a=Math.PI+(i+.5)/8*Math.PI,d=10+90*hc;s.setAttribute('cx',(525+Math.cos(a)*d).toFixed(1));s.setAttribute('cy',(480+Math.sin(a)*d).toFixed(1));s.setAttribute('opacity',(on*(1-hc)).toFixed(2))});
$('glint').setAttribute('opacity',(p(u,TM.spark,TM.spark+.6)*(.5+.5*Math.sin(t*3))).toFixed(2));
R('mean',TM.spark+.8);

R('lap',TM.laptop);
CR.forEach((r,i)=>r.setAttribute('width',(CW[i]*p(u,TM.code_screen+i*.35,TM.code_screen+i*.35+.5)).toFixed(1)));
[0,1,2].forEach(i=>{R('k'+i,TM.code_screen+.8+i*1.6);$('kr'+i).setAttribute('stroke',u>=TM.sacred_glow?'var(--gain)':'var(--line)')});
$('halo').setAttribute('opacity',(p(u,TM.sacred_glow,TM.sacred_glow+1)*(.7+.3*Math.sin(t*2))).toFixed(2));
R('mn7',TM.sacred_glow+.8);

R('qa',TM.question); R('qb',TM.question+.4); R('qc',TM.question+.8); R('qm',TM.question+5);
QR.forEach((c,i)=>dr(c,p(u,TM.question+1.2+i*.3,TM.question+2.2+i*.3)));