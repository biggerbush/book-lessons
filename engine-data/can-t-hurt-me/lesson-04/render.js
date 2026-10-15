rise($('tjar'),p(u,TM.cookie_jar,TM.cookie_jar+.6));
const k0=p(u,TM.cookie_jar+4.5,TM.cookie_jar+5.5);
lid0.setAttribute('transform','translate('+(-230*k0).toFixed(1)+' '+(-50*k0).toFixed(1)+') rotate('+(-25*k0).toFixed(1)+' 1300 311)');
const c0=p(u,TM.cookie_jar+5.3,TM.cookie_jar+6.5);
tck.setAttribute('transform','translate(1300 '+(520-290*c0+6*Math.sin(t*2)*c0).toFixed(1)+')');tck.setAttribute('opacity',c0>0?1:0);

rise($('run'),p(u,TM.runner,TM.runner+.5));
const w=t*7;[0,1].forEach(j=>{const ph=j*Math.PI,a=.6*Math.sin(w+ph),b=a-.9*(1+Math.sin(w+ph+1.5))/2,c=-.7*Math.sin(w+ph);RL[j].setAttribute('d',lg(400,520,a,b,95,100));RL[2+j].setAttribute('d',lg(415,385,c,c+1.5,60,55))});
rise($('burn'),p(u,TM.thought_cloud,TM.thought_cloud+.5));rise($('tc'),p(u,TM.thought_cloud+.6,TM.thought_cloud+1.1));
rise($('evr'),p(u,TM.thought_cloud+5,TM.thought_cloud+5.6));rise($('rf'),p(u,TM.thought_cloud+7.9,TM.thought_cloud+8.5));

rise($('shf'),p(u,TM.kitchen_shelf,TM.kitchen_shelf+.6));rise($('mc'),p(u,TM.memory_card,TM.memory_card+.6));
const m2=p(u,TM.memory_card+5.7,TM.memory_card+7),n2=1-m2;
mv2.setAttribute('transform','translate('+(n2*n2*420+2*n2*m2*650+m2*m2*880).toFixed(1)+' '+(n2*n2*520+2*n2*m2*330+m2*m2*660).toFixed(1)+')');
mv2.setAttribute('opacity',u>=TM.memory_card+5.7?1:0);
rise($('rch'),p(u,TM.memory_card+6.5,TM.memory_card+7));

[TM.book_open,TM.scale,TM.trident].forEach((a,i)=>rise($('ca'+i),p(u,a,a+.5)));
$('ndl').setAttribute('transform','rotate('+(70-140*p(u,TM.scale+.3,TM.scale+2)).toFixed(1)+' 800 340)');
$('lbs').textContent=Math.round(100*p(u,TM.scale+.3,TM.scale+1.8))+'+ pounds';

rise($('tro'),p(u,TM.storm_cloud,TM.storm_cloud+.5));rise($('cld'),p(u,TM.storm_cloud+2.5,TM.storm_cloud+3));
RN4.forEach(r=>r.setAttribute('stroke-dashoffset',(-(t*60)%28).toFixed(1)));
CH4.forEach((g,i)=>{const a=TM.storm_cloud+3+i*1.3;rise(g,p(u,a,a+.4))});
rise($('boy'),p(u,TM.small_boy,TM.small_boy+.5));
const rg=p(u,TM.small_boy+.8,TM.small_boy+1.6);$('ring').setAttribute('opacity',rg);$('ring').setAttribute('r',(60+40*rg).toFixed(1));
rise($('lbl4'),p(u,TM.small_boy+1,TM.small_boy+1.5));rise($('scar'),p(u,TM.small_boy+3.4,TM.small_boy+4));

rise($('mtn'),p(u,TM.mountain_trail,TM.mountain_trail+.6));
let dd=cl(lin(u,TM.mountain_trail,TM.fuel_gauge+5))*TOT,si=0;while(si<2&&dd>SG[si]){dd-=SG[si];si++}
const sf=Math.min(1,dd/SG[si]);
$('rnr').setAttribute('cx',(PT[si][0]+(PT[si+1][0]-PT[si][0])*sf).toFixed(1));$('rnr').setAttribute('cy',(PT[si][1]+(PT[si+1][1]-PT[si][1])*sf-22).toFixed(1));
rise($('stp'),p(u,TM.mountain_trail+.6,TM.mountain_trail+1.1));rise($('rem'),p(u,TM.mountain_trail+4.6,TM.mountain_trail+5.2));
rise($('gau'),p(u,TM.mountain_trail+1,TM.mountain_trail+1.6));
let fl=.7-.6*p(u,TM.mountain_trail+.5,TM.fuel_gauge);
FC.forEach((c,i)=>{const a=TM.fuel_gauge+i*1.4,k=p(u,a,a+.8);fl+=.3*k;
c.setAttribute('transform','translate('+(FX[i]+(1220-FX[i])*k).toFixed(1)+' '+(710-110*k).toFixed(1)+')');c.setAttribute('opacity',(p(u,a-.6,a-.2)*(1-p(u,a+.5,a+.8))).toFixed(2))});
const fc=cl(fl),fa=Math.PI*(1+fc);
$('fn').setAttribute('x2',(1220+160*Math.cos(fa)).toFixed(1));$('fn').setAttribute('y2',(600+160*Math.sin(fa)).toFixed(1));
$('gfill').setAttribute('d','M1030 600A190 190 0 0 1 '+(1220+190*Math.cos(fa)).toFixed(1)+' '+(600+190*Math.sin(fa)).toFixed(1));
$('gfill').setAttribute('opacity',fc>.01?1:0);
rise($('lbl5'),p(u,TM.fuel_gauge,TM.fuel_gauge+.5));rise($('brn'),p(u,TM.fuel_gauge+5,TM.fuel_gauge+5.6));

const tl=.2*p(u,TM.doubt_voice,TM.doubt_voice+1)-.4*p(u,TM.evidence_pile,TM.evidence_pile+3),dy=340*Math.sin(tl);
$('bm').setAttribute('x1',460);$('bm').setAttribute('y1',(580+dy).toFixed(1));$('bm').setAttribute('x2',1140);$('bm').setAttribute('y2',(580-dy).toFixed(1));
$('lpn').setAttribute('transform','translate(460 '+(580+dy).toFixed(1)+')');$('rpn').setAttribute('transform','translate(1140 '+(580-dy).toFixed(1)+')');
rise($('dv'),p(u,TM.doubt_voice,TM.doubt_voice+.5));$('ldb').setAttribute('opacity',p(u,TM.doubt_voice,TM.doubt_voice+.5));
PILE.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.evidence_pile+i*.4,TM.evidence_pile+i*.4+.3)));
rise($('ev'),p(u,TM.evidence_pile,TM.evidence_pile+.5));rise($('bh'),p(u,TM.evidence_pile+4.6,TM.evidence_pile+5.2));rise($('cf'),p(u,TM.evidence_pile+10.7,TM.evidence_pile+11.3));

const nbk=p(u,TM.notebook,TM.notebook+.6);rise($('nb'),nbk);
let px=560,py=700;[0,1,2].forEach(i=>{const a=TM.pen_list+i*1.6;rise($('it'+i),p(u,a,a+.4));if(u>=a){px=250+340*p(u,a,a+1.2);py=372+90*i}});
$('pen').setAttribute('transform','translate('+px.toFixed(1)+' '+py+')');$('pen').setAttribute('opacity',nbk);
rise($('bw'),p(u,TM.notebook+5.4,TM.notebook+6));rise($('rd'),p(u,TM.pen_list+5,TM.pen_list+5.6));

const q0=SC[8][0]/K;
rise($('qa'),p(u,q0+.3,q0+.8));rise($('qb'),p(u,q0+.7,q0+1.2));rise($('qc'),p(u,q0+1.1,q0+1.6));
rise($('j8'),p(u,q0+.6,q0+1.2));rise($('w8'),p(u,q0+3.8,q0+4.3));
const dk=p(u,q0+4,q0+4.8);dck.setAttribute('transform','translate(1340 '+(470+230*dk).toFixed(1)+')');dck.setAttribute('opacity',p(u,q0+3.8,q0+4.1));