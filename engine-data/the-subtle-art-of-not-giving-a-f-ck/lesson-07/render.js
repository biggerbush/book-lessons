const q0=SC[8][0]/K;
rise($('hgw0'),p(u,TM.title_card,TM.title_card+.6)); sand(H0,1-p(u,TM.title_card+5.5,TM.title_card+11));

rise($('trav'),p(u,TM.backpack,TM.backpack+.5)); rise($('glass'),p(u,TM.backpack+1,TM.backpack+1.6));
PIN.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.world_map+i*.5,TM.world_map+i*.5+.3)));
SEG.forEach((s,i)=>s.setAttribute('opacity',p(u,TM.world_map+i*.5+.3,TM.world_map+i*.5+.6)));
const tr=p(u,TM.world_map,TM.world_map+4)*6,ti=Math.min(5,Math.floor(tr)),tf=tr-ti,bob=tr>0&&tr<6?Math.abs(Math.sin(t*6))*6:0;
TG.setAttribute('transform',`translate(${(PN[ti][0]+(PN[ti+1][0]-PN[ti][0])*tf).toFixed(1)} ${(PN[ti][1]+(PN[ti+1][1]-PN[ti][1])*tf-bob).toFixed(1)})`);
rise($('noties'),p(u,TM.world_map+5,TM.world_map+5.6));
const wl=330+300*p(u,TM.empty_glass+.5,TM.empty_glass+3.5),wd=30*(wl-300)/340;
$('water').setAttribute('points',`${1220+wd},${wl} ${1440-wd},${wl} 1409,636 1251,636`);
rise($('hollow'),p(u,TM.empty_glass+1.5,TM.empty_glass+2));

const on=u>=TM.crossed_out;
FK.forEach((f,i)=>{const a=TM.two_paths+i*.3,c=i===2&&on;f[0].setAttribute('stroke-dashoffset',1-p(u,a,a+.8));
  f[0].setAttribute('stroke',c?'var(--gain)':on?'var(--line)':'var(--muted)');f[1].setAttribute('opacity',p(u,a+.6,a+.9));
  f[1].setAttribute('fill',c?'var(--gain)':'var(--stage)');const b=TM.crossed_out+(i===2?0:.3+i*.3);rise(f[2],p(u,b,b+.4))});
rise($('nothing'),p(u,TM.crossed_out+4.1,TM.crossed_out+4.6)); rise($('rejnot'),p(u,TM.crossed_out+4.5,TM.crossed_out+5.1));

const dp=60*p(u,TM.one_partner,TM.one_partner+1)+340*p(u,TM.shovel,TM.shovel+3);
$('shaft').setAttribute('height',dp.toFixed(1));
$('shov').setAttribute('transform',`translate(0 ${(dp-7-(u>TM.one_partner&&u<TM.shovel+3?Math.abs(Math.sin(t*5))*8:0)).toFixed(1)})`);
rise($('shovW'),p(u,TM.one_partner,TM.one_partner+.5)); rise($('one'),p(u,TM.one_partner,TM.one_partner+.5));
[0,1,2].forEach(i=>{const a=TM.shovel+1+i*.9;rise($('dl'+i),p(u,a,a+.4))});
TB.forEach((g,i)=>rise(g,p(u,TM.stack_of_tabs+i*.15,TM.stack_of_tabs+i*.15+.3)));
rise($('tabL'),p(u,TM.stack_of_tabs,TM.stack_of_tabs+.5)); rise($('skim'),p(u,TM.stack_of_tabs+1.5,TM.stack_of_tabs+2));

rise($('lakeG'),p(u,TM.lake,TM.lake+.6));
RP.forEach((e,i)=>{const r=(t*40+i*60)%180;e.setAttribute('rx',r.toFixed(1));e.setAttribute('ry',(r*.4).toFixed(1));e.setAttribute('opacity',(1-r/180).toFixed(2))});
const sh=u>=TM.shaken_man&&u<TM.notebook?1:0;
rise($('man'),p(u,TM.shaken_man,TM.shaken_man+.5)); $('mani').setAttribute('transform',`translate(${(sh*5*Math.sin(t*40)).toFixed(1)} 0)`); $('jit').setAttribute('opacity',sh);
rise($('nb'),p(u,TM.notebook,TM.notebook+.5)); CK.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.notebook+1+i*.6,TM.notebook+1.3+i*.6)));
rise($('woke'),p(u,TM.notebook+.4,TM.notebook+1));

rise($('pn0'),p(u,TM.old_book,TM.old_book+.5));
rise($('pn1'),p(u,TM.hospital_bed,TM.hospital_bed+.5));
rise($('pn2'),p(u,TM.statue,TM.statue+.5));
rise($('pn3'),p(u,TM.tightrope,TM.tightrope+.5));
$('walker').setAttribute('transform',`translate(1319 444) rotate(${(10*Math.sin(t*2.2)).toFixed(1)})`);

rise($('hgw1'),p(u,TM.hourglass,TM.hourglass+.5)); sand(H1,1-p(u,TM.hourglass+.5,TM.hourglass+12));
rise($('bal'),p(u,TM.feather,TM.feather+.5)); rise(feL,p(u,TM.feather+.4,TM.feather+.9)); rise(htR,p(u,TM.heart,TM.heart+.5));
const an=(14*p(u,TM.heart+.3,TM.heart+1.5)+1.2*Math.sin(t*1.5))*Math.PI/180,bx=330*Math.cos(an),by=330*Math.sin(an);
$('beam').setAttribute('x1',(980-bx).toFixed(1));$('beam').setAttribute('y1',(330-by).toFixed(1));$('beam').setAttribute('x2',(980+bx).toFixed(1));$('beam').setAttribute('y2',(330+by).toFixed(1));
$('panL').setAttribute('transform',`translate(${(980-bx).toFixed(1)} ${(330-by).toFixed(1)})`);$('panR').setAttribute('transform',`translate(${(980+bx).toFixed(1)} ${(330+by).toFixed(1)})`);
rise($('remain'),p(u,TM.heart+.8,TM.heart+1.4));

rise($('paper'),p(u,TM.pen_paper,TM.pen_paper+.5)); let pi=0,pk=0;
[0,1,2].forEach(i=>{const a=TM.pen_paper+.8+i*1.4,k=p(u,a,a+1.2);$('wl'+i).setAttribute('stroke-dashoffset',1-k);if(u>=a){pi=i;pk=k}});
$('pen').setAttribute('transform',`translate(${(210+310*pk).toFixed(1)} ${372+100*pi})`);
rise($('cards'),p(u,TM.red_pen,TM.red_pen+.5)); $('xc').setAttribute('opacity',p(u,TM.red_pen+1,TM.red_pen+1.4));
$('cm').setAttribute('stroke',u>=TM.red_pen+1?'var(--loss)':'var(--ink)');
rise($('cal'),p(u,TM.calendar,TM.calendar+.5)); $('arr').setAttribute('opacity',p(u,TM.calendar+.5,TM.calendar+1));
$('free').setAttribute('opacity',p(u,TM.calendar+1,TM.calendar+1.4)); rise($('give'),p(u,TM.calendar+1.2,TM.calendar+1.8));

rise($('qa'),p(u,q0+.3,q0+.8)); rise($('qb'),p(u,q0+.7,q0+1.2)); rise($('qc'),p(u,q0+1.1,q0+1.6));
rise($('nextno'),p(u,q0+6,q0+6.5)); rise($('stamp'),p(u,q0+6.3,q0+6.8));