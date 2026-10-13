const k0=p(u,TM.race_track,TM.race_track+5),f0=1-.7*p(u,TM.race_track+5,TM.race_track+6);
RU.forEach((c,i)=>{c.setAttribute('cx',(1000+(i===1?400:80+i*20)*k0).toFixed(1));if(i!==1)c.setAttribute('opacity',f0.toFixed(2))});
RU[1].setAttribute('cy',(420-6*Math.abs(Math.sin(t*8))*(k0<1?1:0)).toFixed(1));

rise($('shops'),p(u,TM.two_shops,TM.two_shops+.5));rise($('eye'),p(u,TM.two_shops+.8,TM.two_shops+1.3));
CP.forEach((g,i)=>{const a=TM.two_shops+3+i*.5,k=p(u,a,a+1.2);g.setAttribute('transform','translate('+(800*(1-k)).toFixed(1)+' 0)');g.setAttribute('opacity',k.toFixed(2))});
const gy=390-100*p(u,TM.mirror,TM.mirror+2.5),gr=$('grow');
gr.setAttribute('d','M380 390V'+gy.toFixed(1)+'m-20 20 20-20 20 20');gr.setAttribute('opacity',u>=TM.mirror?1:0);gr.style.stroke=u>=TM.mirror+3.7?'var(--loss)':'var(--gain)';
rise($('ceil'),p(u,TM.mirror+3.7,TM.mirror+4.2));rise($('lim'),p(u,TM.mirror+3.9,TM.mirror+4.5));

rise($('book'),p(u,TM.book_title,TM.book_title+.5));rise($('notig'),p(u,TM.book_title+4.6,TM.book_title+5.1));
rise($('ktop'),p(u,TM.crown,TM.crown+.5));rise($('lead'),p(u,TM.crown+.3,TM.crown+.8));
$('crn').setAttribute('transform','translate(0 '+(-4*Math.abs(Math.sin(t*2))).toFixed(1)+')');
rise($('pie'),p(u,TM.crown+5,TM.crown+5.5));const sp=14*p(u,TM.crown+5.4,TM.crown+6.2);
PS.forEach(q=>q[0].setAttribute('transform','translate('+(sp*Math.cos(q[1])).toFixed(1)+' '+(sp*Math.sin(q[1])).toFixed(1)+')'));
rise($('fol'),p(u,TM.crown+7.2,TM.crown+7.7));

rise($('skh'),p(u,TM.phone,TM.phone+.5));rise($('chart'),p(u,TM.phone,TM.phone+.5));
[TM.phone+3.8,TM.phone+5.2,TM.phone+7.4].forEach((a,i)=>rise(RW[i],p(u,a,a+.5)));
BY.forEach((r,i)=>{const a=i<3?TM.phone+.4:TM.stack_tasks+(i-3)*.4;r.setAttribute('opacity',p(u,a,a+.3).toFixed(2))});
rise($('rep'),p(u,TM.stack_tasks,TM.stack_tasks+.5));rise($('gap'),p(u,TM.stack_tasks+3.6,TM.stack_tasks+4.1));

rise($('cloud'),p(u,TM.storm_cloud,TM.storm_cloud+.5));
RN.forEach((r,i)=>{const ry=360+((t*160+i*23)%60);r.setAttribute('d','M'+(700+i*40)+' '+ry.toFixed(1)+'l-8 24')});
rise($('shut'),p(u,TM.storm_cloud+3.8,TM.storm_cloud+4.3));
$('door').setAttribute('width',(80-64*p(u,TM.open_door,TM.open_door+1)).toFixed(1));
rise($('push'),p(u,TM.open_door+3.8,TM.open_door+4.3));
const cv=p(u,TM.storm_cloud+3.8,TM.storm_cloud+4.3);
CU.forEach((g,i)=>{const a=TM.open_door+3.8+i*.4,k=p(u,a,a+1.6),sx=640+i*50,x=sx+(1250-sx)*k,y=720-(k>0&&k<1?4*Math.abs(Math.sin(t*9+i)):0);
g.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+')');g.setAttribute('opacity',(cv*(1-cl((k-.8)/.2))).toFixed(2))});

rise($('cone'),p(u,TM.spotlight,TM.spotlight+.5));rise($('meW'),p(u,TM.spotlight+.2,TM.spotlight+.7));
const bj=s=>(-14*Math.abs(Math.sin(2*s))).toFixed(1);
$('me').setAttribute('transform','translate(0 '+bj(t)+')');
rise($('cusW'),p(u,TM.spotlight+2.9,TM.spotlight+3.4));const ck=p(u,TM.spotlight+2.9,TM.spotlight+5);
CS.forEach((g,i)=>{const sx=160+i*70,x=sx+(400+i*55-sx)*ck;g.setAttribute('transform','translate('+x.toFixed(1)+' 470)')});
rise($('folW'),p(u,TM.followers,TM.followers+.5));
FL.forEach((g,i)=>g.setAttribute('transform','translate('+(1160+i*110)+' '+(450+ +bj(t-.4-i*.15)).toFixed(1)+')'));
rise($('t1'),p(u,TM.followers+4.6,TM.followers+5.1));rise($('t2'),p(u,TM.followers+6,TM.followers+6.6));

rise($('grid'),p(u,TM.target_map,TM.target_map+.5));const chs=u>=TM.target_map+3.4;
CE.forEach((c,i)=>{const on=i===7&&chs;c.style.fill=on?'var(--gain)':chs?'none':'var(--loss)';c.style.fillOpacity=on?1:chs?0:.22;c.style.stroke=on?'var(--gain)':chs?'var(--line)':'var(--loss)'});
rise($('flag'),p(u,TM.target_map+3.4,TM.target_map+3.9));rise($('one'),p(u,TM.target_map+3.6,TM.target_map+4.1));
rise($('mag'),p(u,TM.magnifier,TM.magnifier+.5));$('link').setAttribute('opacity',p(u,TM.magnifier+.3,TM.magnifier+.8).toFixed(2));
$('magI').setAttribute('transform','translate('+(8*Math.sin(t*.9)).toFixed(1)+' '+(6*Math.sin(t*1.3)).toFixed(1)+')');

rise($('pad'),p(u,TM.notepad,TM.notepad+.5));
[0,1,2].forEach(i=>{const a=TM.notepad+3.4+i*1.4;rise($('n'+i),p(u,a,a+.5))});
rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
CK.forEach((q,i)=>{const on=u>=TM.calendar+.8+i*.3;q[0].setAttribute('fill',on?'var(--gain)':'none');q[0].setAttribute('stroke',on?'var(--gain)':'var(--line)');q[1].setAttribute('opacity',on?1:0)});

rise($('qa'),p(u,TM.question,TM.question+.5));rise($('qb'),p(u,TM.question+.4,TM.question+.9));rise($('qc'),p(u,TM.question+.8,TM.question+1.3));
rise($('fl'),p(u,TM.finish_line,TM.finish_line+.5));const fk=p(u,TM.finish_line+.3,TM.finish_line+2.5);
$('rc').setAttribute('cx',(1000+400*fk).toFixed(1));$('ra').setAttribute('cx',(930+60*fk).toFixed(1));$('rb').setAttribute('cx',(900+40*fk).toFixed(1));