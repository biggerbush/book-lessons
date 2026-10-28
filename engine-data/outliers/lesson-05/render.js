rise($('brain'),p(u,TM.title_brain,TM.title_brain+.6)); $('ring').setAttribute('r',(80+8*Math.sin(t*3)).toFixed(1));
const fa=p(u,TM.title_brain+3.5,TM.title_brain+4.1); rise($('farmer'),fa); rise($('farm'),fa);

rise($('chart'),p(u,TM.iq_meter,TM.iq_meter+.5)); $('curve').setAttribute('stroke-dashoffset',(1-p(u,TM.iq_meter+.3,TM.iq_meter+1.8)).toFixed(3));
rise($('court'),p(u,TM.hoop,TM.hoop+.5)); rise($('cut'),p(u,TM.line_120,TM.line_120+.6));

const kE=p(u,TM.langan,TM.langan+1.2),kL=p(u,TM.langan+.6,TM.langan+1.8),hE=300*kE,hL=390*kL;
$('barE').setAttribute('y',760-hE);$('barE').setAttribute('height',hE);$('barL').setAttribute('y',760-hL);$('barL').setAttribute('height',hL);
$('vE').setAttribute('y',744-hE);$('vL').setAttribute('y',744-hL);$('vE').textContent='≈'+Math.round(150*kE);$('vL').textContent='≈'+Math.round(195*kL);
$('vE').setAttribute('opacity',kE>0?1:0);$('vL').setAttribute('opacity',kL>0?1:0);
rise($('lc0'),p(u,TM.reed_college,TM.reed_college+.5)); $('lx').setAttribute('opacity',p(u,TM.reed_college+3,TM.reed_college+3.4));
rise($('lc1'),p(u,TM.broken_car,TM.broken_car+.5)); $('smoke').setAttribute('transform','translate('+(4*Math.sin(t*2)).toFixed(1)+' '+(-6*((t*.8)%1)).toFixed(1)+')');
rise($('lc2'),p(u,TM.broken_car+3,TM.broken_car+3.5)); rise($('drop'),p(u,TM.broken_car+6,TM.broken_car+6.6));

rise($('oppie'),p(u,TM.oppenheimer,TM.oppenheimer+.5));
[TM.poison_vial,TM.poison_vial+3,TM.general].forEach((a,i)=>{rise($('ar'+i),p(u,a-.2,a+.3));rise($('st'+i),p(u,a,a+.5))});

rise($('heads'),p(u,TM.two_heads,TM.two_heads+.5)); $('hd2').style.stroke=u>=TM.toolbox?'var(--gain)':'var(--ink)';
$('arT').setAttribute('opacity',p(u,TM.toolbox,TM.toolbox+.4)); rise($('tbox'),p(u,TM.toolbox,TM.toolbox+.5));
[0,1,2].forEach(i=>{const a=TM.toolbox+1.2+i*1.2;rise($('ch'+i),p(u,a,a+.4))}); rise($('home'),p(u,TM.toolbox+7,TM.toolbox+7.6));

rise($('pw'),p(u,TM.lareau,TM.lareau+.5)); rise($('pp'),p(u,TM.lareau+.3,TM.lareau+.8));
CL.forEach((c,i)=>c.setAttribute('fill',u>=TM.busy_calendar+.3+i*.12?'var(--gain)':'var(--line)'));
$('cal').setAttribute('opacity',p(u,TM.busy_calendar,TM.busy_calendar+.3));
rise($('famW'),p(u,TM.busy_calendar+2,TM.busy_calendar+2.5)); rise($('capW'),p(u,TM.busy_calendar+3,TM.busy_calendar+3.5));
rise($('famP'),p(u,TM.free_play,TM.free_play+.5)); $('ball').setAttribute('cy',(540-110*Math.abs(Math.sin(t*3))).toFixed(1));
rise($('capP'),p(u,TM.free_play+2,TM.free_play+2.5)); rise($('love'),p(u,TM.free_play+4.6,TM.free_play+5.2));
$('roofW').style.stroke=u>=TM.free_play+4.6?'var(--gain)':'var(--ink)';

const cr=p(u,TM.car_ride,TM.car_ride+1.4); $('carG').setAttribute('transform','translate('+(-220*(1-cr)).toFixed(1)+' '+(2*Math.sin(t*9)).toFixed(1)+')'); $('carG').setAttribute('opacity',cr>0?1:0);
rise($('note'),p(u,TM.car_ride+2.5,TM.car_ride+3)); NI.forEach((g,i)=>rise(g,p(u,TM.car_ride+3.2+i*.6,TM.car_ride+3.6+i*.6)));
rise($('exam'),p(u,TM.doctor,TM.doctor+.5)); AK.forEach((g,i)=>rise(g,p(u,TM.doctor+.8+i*.5,TM.doctor+1.2+i*.5)));
rise($('inst'),p(u,TM.doctor+3.8,TM.doctor+4.4));

const kt=p(u,TM.top_bottom,TM.top_bottom+1.5),on=u>=TM.top_bottom;
DT.forEach((d,i)=>{const r=Math.floor(i/10),c=i%10,x0=580+c*48,y0=260+r*44;let x=x0,y=y0,f='var(--ink)',o=p(u,TM.terman+i*.04,TM.terman+i*.04+.3);
  if(r===0||r===3){const tx=(r?1248:160)+(c%5)*48,ty=260+Math.floor(c/5)*44;x=x0+(tx-x0)*kt;y=y0+(ty-y0)*kt;if(on)f=r?'var(--loss)':'var(--gain)'}else o*=1-kt;
  d.setAttribute('cx',x.toFixed(1));d.setAttribute('cy',y.toFixed(1));d.setAttribute('fill',f);d.setAttribute('opacity',o.toFixed(2))});
rise($('labT'),p(u,TM.top_bottom+1.2,TM.top_bottom+1.7)); rise($('labB'),p(u,TM.top_bottom+1.4,TM.top_bottom+1.9));
rise($('iqr'),p(u,TM.family_homes,TM.family_homes+.5)); rise($('homes'),p(u,TM.family_homes+1.5,TM.family_homes+2)); rise($('msg'),p(u,TM.family_homes+3,TM.family_homes+3.6));

rise($('qa'),p(u,TM.raised_hand,TM.raised_hand+.5)); rise($('qb'),p(u,TM.raised_hand+.4,TM.raised_hand+.9)); rise($('qc'),p(u,TM.raised_hand+.8,TM.raised_hand+1.3));
rise($('hander'),p(u,TM.raised_hand+1,TM.raised_hand+1.5)); $('arm').setAttribute('transform','rotate('+(6*Math.sin(t*4)).toFixed(2)+' 1405 500)');
rise($('coach'),p(u,TM.raised_hand+4.6,TM.raised_hand+5.2));