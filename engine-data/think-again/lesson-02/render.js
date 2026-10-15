const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
R('gauge',TM.title_card,.6);
const na=64*Math.sin(t*2.2)*cl(1-(u-TM.title_card)/6)+3*Math.sin(t*.9);
$('needle').setAttribute('transform','rotate('+na.toFixed(2)+' 1300 470)');
$('gmid').setAttribute('stroke-width',u>=TM.title_card+5.8?34:24);

R('road1',TM.road);R('car',TM.road+.6);R('qb',TM.armchair_qb);R('imp',TM.impostor);R('both',TM.impostor+6.1);

R('paper',TM.test_paper);R('leg',TM.low_scorers);
BA.forEach((r,i)=>{const a=TM.low_scorers+i*.25,k=p(u,a,a+1);r.setAttribute('y',680-HA[i]*k);r.setAttribute('height',HA[i]*k);BE[i].setAttribute('y',680-HE[i]*k);BE[i].setAttribute('height',HE[i]*k)});
R('gap',TM.blind_spot);R('bs',TM.blind_spot+.3,.6);R('cwc',TM.blind_spot+5.4);

const m3=p(u,TM.mountain,TM.mountain+2);$('mt').setAttribute('stroke-dashoffset',1-m3);$('mtf').setAttribute('opacity',m3);R('msl',TM.mountain+1.6);
const ck=p(u,TM.climber,TM.climber+3.5);R('climw',TM.climber,.4);
$('clim').setAttribute('transform','translate('+bz(ck,[160,260,300,420]).toFixed(1)+' '+bz(ck,[760,760,300,300]).toFixed(1)+')');
QM.forEach(e=>e.setAttribute('opacity',(1-ck).toFixed(2)));R('flag',TM.climber+3.4);
$('kl').setAttribute('stroke-dashoffset',1-p(u,TM.climber+5.4,TM.climber+7.4));R('kll',TM.climber+6.4);

R('halla',TM.halla);R('ballot',TM.ballot);
$('bp').setAttribute('transform','translate(0 '+(130*p(u,TM.ballot+.6,TM.ballot+1.8)).toFixed(1)+')');
R('cloud',TM.ballot+2.4);$('cl').setAttribute('class',u>=TM.doubt_cloud?'gain':'loss');
R('fuel',TM.doubt_cloud,.8);['f0','f1','f2'].forEach((id,i)=>R(id,TM.doubt_cloud+1.6+i*.8));R('fl',TM.doubt_cloud+4);

R('chart',TM.poll_chart);
const hk=p(u,TM.rising_line,TM.rising_line+4)*5;let hd='M180 690',ex=180,ey=690;
for(let i=1;i<=5;i++){const f=cl(hk-i+1);if(f<=0)break;ex=PX[i-1]+(PX[i]-PX[i-1])*f;ey=HY[i-1]+(HY[i]-HY[i-1])*f;hd+='L'+ex.toFixed(1)+' '+ey.toFixed(1)}
$('hl').setAttribute('d',hd);$('hd').setAttribute('cx',ex.toFixed(1));$('hd').setAttribute('cy',ey.toFixed(1));
R('p2',TM.rising_line+4);R('dw',TM.rising_line+6.2);R('hum',TM.rising_line+11.2);

R('va',TM.two_dials);R('vb',TM.two_dials+.6);
const mg=p(u,TM.question_mark+5,TM.question_mark+6.2);$('vc1').setAttribute('cx',540+110*mg);$('vc2').setAttribute('cx',1060-110*mg);
R('fut',TM.arrow_future);R('qmk',TM.question_mark);R('lens',TM.question_mark+5.9);R('ptr',TM.question_mark+6.4);

R('nb',TM.notebook);BEL.setAttribute('stroke-dashoffset',1-p(u,TM.notebook+1,TM.notebook+3));
R('lc',TM.two_columns+.3);R('rc',TM.two_columns+3.6);R('magw',TM.magnifier,.4);
const mm=p(u,TM.magnifier,TM.magnifier+1.6);
$('mag').setAttribute('transform','translate('+(1380-340*mm).toFixed(1)+' '+(760-120*mm+4*Math.sin(t*3)).toFixed(1)+')');
R('hil',TM.magnifier+1.6);

R('w0',TM.steering);R('w1',TM.steering+.4);R('wh',TM.steering+.8);R('w2',TM.steering+4.1);R('w3',TM.steering+4.5);
$('wheel').setAttribute('transform','rotate('+(28*Math.sin(t*1.3)).toFixed(1)+' 1340 470)');