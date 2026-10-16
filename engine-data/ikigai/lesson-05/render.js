const ring=(u>=TM.alarm_clock&&u<TM.alarm_clock+2.5)?1:0;
  $('clk').setAttribute('transform','rotate('+(ring*5*Math.sin(t*45)).toFixed(2)+' 1340 340)');
  $('hh').setAttribute('transform','rotate('+(t*6).toFixed(1)+' 1340 340)'); $('mh').setAttribute('transform','rotate('+(t*72).toFixed(1)+' 1340 340)');
  rise($('clkw'),p(u,TM.alarm_clock,TM.alarm_clock+.5)); rise($('c2w'),p(u,TM.alarm_clock+4.9,TM.alarm_clock+5.5));

  rise($('frk'),p(u,TM.frankl,TM.frankl+.5)); $('wire').setAttribute('opacity',p(u,TM.frankl+.6,TM.frankl+1.4));
  rise($('pris'),p(u,TM.prisoners,TM.prisoners+.5));
  const rs=u>=TM.prisoners+1.5; [1,3].forEach(i=>PR[i].forEach(e=>e.setAttribute('class',rs?'gain':'ink')));
  rise($('bub'),p(u,TM.prisoners+1.5,TM.prisoners+2)); rise($('endure'),p(u,TM.prisoners+4,TM.prisoners+4.6));

  rise($('logo'),p(u,TM.logotherapy,TM.logotherapy+.5)); rise($('qt'),p(u,TM.quote_card,TM.quote_card+.5));
  rise($('cmp'),p(u,TM.compass,TM.compass+.5));
  $('ndl').setAttribute('transform','rotate('+((1-p(u,TM.compass,TM.compass+2.5))*540+3*Math.sin(t*2)).toFixed(1)+' 1200 660)');
  rise($('mt0'),p(u,TM.compass+.6,TM.compass+1.1)); rise($('mt1'),p(u,TM.compass+3,TM.compass+3.6));

  rise($('dip'),p(u,TM.diplomat,TM.diplomat+.5)); rise($('pn0'),p(u,TM.old_couch,TM.old_couch+.5));
  rise($('pn1'),p(u,TM.job_desk,TM.job_desk+.5)); rise($('pn2'),p(u,TM.new_door,TM.new_door+.5));
  const jd=p(u,TM.job_desk+.6,TM.job_desk+1.2); $('x0').setAttribute('opacity',jd);

  rise($('mor'),p(u,TM.morita,TM.morita+.5)); rise($('msub'),p(u,TM.morita+.3,TM.morita+.8));
  rise($('wth'),p(u,TM.weather,TM.weather+.5)); rise($('act'),p(u,TM.hands,TM.hands+.5));
  const cx=640+60*Math.sin(t*.5); CLD.setAttribute('transform','translate('+cx.toFixed(1)+' 380)');
  RN.forEach((l,i)=>{const x=cx+i*20-5,y=440+((t*160+i*37)%110);l.setAttribute('x1',x.toFixed(1));l.setAttribute('x2',(x-4).toFixed(1));l.setAttribute('y1',y.toFixed(1));l.setAttribute('y2',(y+20).toFixed(1))});
  const bs=(t*.8)%4,bi=Math.min(3,Math.floor(bs)),bf=bs<3?bs-bi:0;
  $('ball').setAttribute('cx',(1070+100*(bi+bf)).toFixed(1)); $('ball').setAttribute('cy',(562-80*(bi+bf)-40*Math.sin(Math.PI*bf)).toFixed(1));

  rise($('st0'),p(u,TM.bed,TM.bed+.5));
  TH.forEach((c,i)=>{const k=(t*.4+i/3)%1;c.setAttribute('cx',(250+i*50+10*Math.sin(t+i)).toFixed(1));c.setAttribute('cy',(420-150*k).toFixed(1));c.setAttribute('opacity',Math.sin(Math.PI*k).toFixed(2))});
  rise($('st1'),p(u,TM.garden_task,TM.garden_task+.5));
  $('stem').setAttribute('d','M800 490V'+(490-140*p(u,TM.garden_task+.3,TM.garden_task+1.8)).toFixed(1));
  rise($('lvs'),p(u,TM.garden_task+1.6,TM.garden_task+2.1));
  rise($('st2'),p(u,TM.community,TM.community+.5));
  $('pm').setAttribute('cx',(320+480*p(u,TM.garden_task-.4,TM.garden_task+.4)+480*p(u,TM.community-.4,TM.community+.4)).toFixed(1));
  $('pm').setAttribute('opacity',p(u,TM.bed,TM.bed+.5));

  rise($('pl0'),p(u,TM.two_paths,TM.two_paths+.5)); rise($('flag'),p(u,TM.two_paths+.3,TM.two_paths+.8));
  rise($('pl1'),p(u,TM.nervous_heart,TM.nervous_heart+.5)); rise($('mss'),p(u,TM.nervous_heart+.5,TM.nervous_heart+1));
  rise($('wkb'),p(u,TM.two_paths,TM.two_paths+.5)); rise($('hrtw'),p(u,TM.nervous_heart+.4,TM.nervous_heart+.9));
  const sc=1+.14*Math.pow(Math.abs(Math.sin(t*4)),6); $('hrt').setAttribute('transform','translate(0 470) scale('+sc.toFixed(3)+') translate(0 -470)');
  const wx=220+1080*p(u,TM.first_step,TM.first_step+5); $('wk').setAttribute('transform','translate('+wx.toFixed(1)+' 0)');
  MS.forEach(m=>m[0].setAttribute('fill',wx>=m[1]?'var(--gain)':'var(--stage)'));
  rise($('anyway'),p(u,TM.first_step+3,TM.first_step+3.6));

  rise($('qa'),p(u,TM.notebook,TM.notebook+.5)); rise($('qb'),p(u,TM.notebook+.6,TM.notebook+1.1));
  rise($('nb'),p(u,TM.notebook+.3,TM.notebook+.8));
  rise($('qc'),p(u,TM.notebook+7,TM.notebook+7.5)); rise($('ql'),p(u,TM.notebook+7.6,TM.notebook+8.1));