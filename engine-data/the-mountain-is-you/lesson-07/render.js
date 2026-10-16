const c0=TM.climber, pr=.55*p(u,c0,c0+3)-.12*p(u,c0+3,c0+3.3)+.12*p(u,c0+3.6,c0+4.5)+.45*p(u,c0+4.5,c0+7.5), cq=at(CP,cl(pr,0,1)*3);
$('clim').setAttribute('transform','translate('+cq[0].toFixed(1)+' '+cq[1].toFixed(1)+')');

rise($('flag'),p(u,TM.summit_flag,TM.summit_flag+.5));
const s1=TM.perfect_self+5.8;
rise($('perf'),p(u,TM.perfect_self,TM.perfect_self+.5)*(1-.65*p(u,s1,s1+.6)));
[0,1,2].forEach(i=>{const a=TM.perfect_self+.8+i*.6;rise($('pl'+i),p(u,a,a+.4))});
rise($('stuck'),p(u,s1+.4,s1+.9)); rise($('stuckT'),p(u,s1+1,s1+1.6));

rise($('mt2'),p(u,TM.calm_center,TM.calm_center+.5)); rise($('calm'),p(u,TM.calm_center+.6,TM.calm_center+1.1));
$('cloud').setAttribute('transform','translate('+(460+200*Math.sin(t*.4)).toFixed(1)+' 300)'); $('cloud').setAttribute('opacity',p(u,TM.storm_cloud,TM.storm_cloud+.8).toFixed(2));
rise($('feel'),p(u,TM.storm_cloud+4.2,TM.storm_cloud+4.7));
rise($('wheelw'),p(u,TM.steering,TM.steering+.5)); $('wheel').setAttribute('transform','translate(1180 620) rotate('+(14*Math.sin(t*.9)).toFixed(1)+')');
rise($('grab'),p(u,TM.steering+.8,TM.steering+1.3));

const s3=TM.angry_text+6.6;
rise($('phone'),p(u,TM.angry_text,TM.angry_text+.5)); rise($('old'),p(u,s3,s3+.5)); rise($('burst'),p(u,s3+.8,s3+1.3));
rise($('pz'),p(u,TM.pause_button,TM.pause_button+.5)); rise($('wave'),p(u,TM.pause_button+1.2,TM.pause_button+1.7));
rise($('choose'),p(u,TM.pause_button+2.6,TM.pause_button+3.1)); rise($('rr'),p(u,TM.pause_button+3.6,TM.pause_button+4.2));

const wc=TM.watering_can;
PL.forEach((q,i)=>{rise(q.g,p(u,TM.need_list+i*.4,TM.need_list+i*.4+.4));const k=p(u,wc+i*1.2,wc+i*1.2+.6),tx=q.x+90*(1-k),ty=470+90*(1-k);
  q.st.setAttribute('d','M'+q.x+' 620Q'+q.x+' 540 '+tx.toFixed(1)+' '+ty.toFixed(1)); q.fl.setAttribute('cx',tx.toFixed(1)); q.fl.setAttribute('cy',ty.toFixed(1));
  const ig=u>=TM.need_list+5.8&&k<.5; q.fl.setAttribute('r',(24+(ig?5*Math.abs(Math.sin(t*3)):0)).toFixed(1)); q.fl.setAttribute('class',k>.5?'gain':'loss')});
can.setAttribute('transform','translate('+(210+900*lin(u,wc,wc+3.6)).toFixed(1)+' 340)'); can.setAttribute('opacity',(p(u,wc,wc+.4)*(1-p(u,wc+4,wc+4.6))).toFixed(2));
DR.forEach((d,j)=>{d.setAttribute('cx',96);d.setAttribute('cy',(-30+((t*1.5+j/3)%1)*110).toFixed(1))});
rise($('leak'),p(u,wc+4.2,wc+4.8));

const sl=TM.slip_path, tm=TM.trail_map;
$('trail').setAttribute('stroke-dashoffset',(1-p(u,sl,sl+1.2)).toFixed(3)); $('grid').setAttribute('opacity',(.6*p(u,tm,tm+.6)).toFixed(2));
const wk=at(P5,3*p(u,sl+1,sl+4)+3*p(u,tm+10,tm+13)); $('walker').setAttribute('cx',wk[0].toFixed(1)); $('walker').setAttribute('cy',wk[1].toFixed(1));
$('walker').setAttribute('opacity',p(u,sl,sl+.4)); $('walker').setAttribute('class',u>=sl+3.3&&u<tm+10?'loss':'gain');
rise($('dipl'),p(u,tm+.4,tm+.9)); rise($('info'),p(u,tm+5.8,tm+6.3)); CHP.forEach((g,i)=>rise(g,p(u,tm+10+i*.5,tm+10.4+i*.5)));

const tb=TM.toothbrush;
rise($('troph'),p(u,tb,tb+.5)*(1-.6*p(u,tb+1.6,tb+2))); rise($('tx'),p(u,tb+1.6,tb+2)); rise($('brushw'),p(u,tb+2.2,tb+2.7));
$('brush').setAttribute('transform','translate('+(u>=tb+5?12*Math.sin(t*7):0).toFixed(1)+' 0)');
rise($('calw'),p(u,TM.calendar,TM.calendar+.5)); CELLS.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+.6+i*.09?'var(--gain)':'var(--stage)'));
rise($('trust'),p(u,TM.calendar+3.9,TM.calendar+4.4));

rise($('m7'),p(u,TM.mountain,TM.mountain+.6)); rise($('mhead'),p(u,TM.mountain+2.5,TM.mountain+3)); rise($('youl'),p(u,TM.mountain+3,TM.mountain+3.5));
rise($('nfl'),p(u,TM.footprints+.8,TM.footprints+1.3));
FT.forEach((f,i)=>{const a=i<6?TM.footprints+i*.4:TM.new_view+(i-6)*.35;f.setAttribute('opacity',p(u,a,a+.3).toFixed(2))});
rise($('peak2'),p(u,TM.new_view,TM.new_view+.6)); rise($('keep'),p(u,TM.new_view+2.5,TM.new_view+3.1));

const q=TM.question_mark;
rise($('qw'),p(u,q,q+.5)); $('qwi').setAttribute('transform','translate(1380 200) rotate('+(18*Math.sin(t*.8)).toFixed(1)+')');
rise($('qa'),p(u,q+.3,q+.8)); rise($('qb'),p(u,q+.8,q+1.3)); rise($('qc'),p(u,q+5.4,q+5.9)); rise($('ql'),p(u,q+6,q+6.5));