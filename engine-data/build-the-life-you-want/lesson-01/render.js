rise($('tstep'),p(u,TM.runner,TM.runner+.6)); rise($('trun'),p(u,TM.runner+.3,TM.runner+.8));
const rs=(t*.8)%5, ri=Math.floor(rs), rf=rs-ri;
$('trun').setAttribute('transform',`translate(${(1185+50*(ri+rf)).toFixed(1)} ${(720-70*(ri+ease(rf))-18*Math.sin(Math.PI*rf)).toFixed(1)})`);

rise($('fl'),p(u,TM.finish_line,TM.finish_line+.5));
MS.forEach((g,i)=>rise(g,p(u,TM.trophy+i*1.2,TM.trophy+i*1.2+.4)));
rise($('tro'),p(u,TM.trophy+3.6,TM.trophy+4.1));
const w1=p(u,TM.finish_line,TM.trophy+4);
$('w1').setAttribute('transform',`translate(${(200+1000*w1).toFixed(1)} ${(w1>0&&w1<1?-6*Math.abs(Math.sin(t*6)):0).toFixed(1)})`);
rise($('fev'),p(u,TM.trophy+5.8,TM.trophy+6.4));

rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
$('glow').setAttribute('points',GP.slice(0,Math.max(1,Math.round(GP.length*p(u,TM.calendar,TM.calendar+3)))).join(' '));
const nm=p(u,TM.new_line,TM.new_line+1.5);
$('nf').setAttribute('transform',`translate(${(1100+320*nm).toFixed(1)} 0)`); $('nfl').setAttribute('opacity',nm);
const w2=p(u,TM.calendar,TM.new_line+3);
$('w2').setAttribute('transform',`translate(${(900+140*w2).toFixed(1)} -40)`);
rise($('short'),p(u,TM.new_line+4,TM.new_line+4.6));

rise($('cmp'),p(u,TM.compass,TM.compass+.5));
const ka=p(u,TM.arrow,TM.arrow+1.2), na=(40*Math.sin(t*2.3)+25*Math.sin(t*3.7))*(1-ka)+59*ka;
$('ndl').setAttribute('transform',`rotate(${na.toFixed(1)} 400 480)`);
rise($('pin'),p(u,TM.compass+3.6,TM.compass+4.1)); $('pinx').setAttribute('opacity',p(u,TM.compass+4.4,TM.compass+4.9));
const ar=p(u,TM.arrow,TM.arrow+1.5); $('arw').setAttribute('stroke-dashoffset',(1-ar).toFixed(3)); $('arh').setAttribute('opacity',ar>.97?1:0);
rise($('hap'),p(u,TM.arrow+1.2,TM.arrow+1.7)); rise($('goal'),p(u,TM.arrow+6.2,TM.arrow+6.8));

rise($('tky'),p(u,TM.turkey,TM.turkey+.5));
ST.forEach((s,i)=>s.setAttribute('d',wav(340+i*60,470,170,t*3+i*2))); $('stm').setAttribute('opacity',p(u,TM.steam,TM.steam+.8));
rise($('c4a'),p(u,TM.steam+6,TM.steam+6.5)); rise($('c4b'),p(u,TM.steam+8.6,TM.steam+9.1));

$('wv').setAttribute('stroke-dashoffset',(1-p(u,TM.sun,TM.sun+2)).toFixed(3));
rise($('sun'),p(u,TM.sun+.3,TM.sun+.8)); $('rays').setAttribute('transform',`rotate(${(t*20%360).toFixed(1)} 347 280)`);
rise($('cld'),p(u,TM.rain_cloud,TM.rain_cloud+.5));
DR.forEach((d,i)=>d.setAttribute('transform',`translate(0 ${(350+(t*60+i*13)%40).toFixed(1)})`));
$('dir').setAttribute('stroke-dashoffset',(1-p(u,TM.rain_cloud+1,TM.rain_cloud+2.5)).toFixed(3)); rise($('dirh'),p(u,TM.rain_cloud+2.3,TM.rain_cloud+2.8));
rise($('plt'),p(u,TM.empty_plate,TM.empty_plate+.5)); PS.forEach((s,i)=>s.setAttribute('d',wav(1300+i*60,630,90,t*3+i*2)));

rise($('shd'),p(u,TM.shield,TM.shield+.5)); rise($('bel'),p(u,TM.alarm,TM.alarm+.5));
const on=u>=TM.alarm;
$('bsw').setAttribute('transform',`rotate(${(on?10*Math.sin(t*14):0).toFixed(1)} 800 362)`);
$('rng').setAttribute('opacity',on?(.5+.5*Math.sin(t*8)).toFixed(2):0);
rise($('f0'),p(u,TM.alarm+6.6,TM.alarm+7.1)); rise($('f1'),p(u,TM.alarm+8.4,TM.alarm+8.9)); rise($('unp'),p(u,TM.alarm+11.5,TM.alarm+12.1));

rise($('card'),p(u,TM.footsteps+.5,TM.footsteps+1));
[0,1,2].forEach(i=>{const a=TM.checklist+i*1.8; rise($('it'+i),p(u,a,a+.4)); $('ck'+i).setAttribute('opacity',p(u,a+.6,a+.9))});
FS.forEach((f,i)=>{f.setAttribute('opacity',p(u,TM.footsteps+i*.3,TM.footsteps+i*.3+.3)); f.setAttribute('fill',u>=TM.checklist+5.8+i*.3?'var(--gain)':'var(--muted)')});
rise($('ctl'),p(u,TM.checklist+10,TM.checklist+10.6));

rise($('sgn'),p(u,TM.signpost,TM.signpost+.5)); rise($('ask'),p(u,TM.signpost,TM.signpost+.5));
rise($('qa'),p(u,TM.signpost+2.2,TM.signpost+2.7)); rise($('qb'),p(u,TM.signpost+2.6,TM.signpost+3.1)); rise($('qc'),p(u,TM.signpost+3,TM.signpost+3.5));
rise($('ft8'),p(u,TM.signpost+3.6,TM.signpost+4.1));