$('cone').setAttribute('transform',`rotate(${(4*Math.sin(t*2)).toFixed(2)} 1210 470)`);
  rise($('hat1'),p(u,TM.two_hats,TM.two_hats+.5)); rise($('hat2'),p(u,TM.two_hats+5.4,TM.two_hats+5.9));

  rise($('seed1'),p(u,TM.sandbox,TM.sandbox+.5));
  tries.forEach(([pa,sh],i)=>{const a=TM.sandbox+5.4+i*.5,k=p(u,a,a+.6);pa.setAttribute('stroke-dashoffset',(1-k).toFixed(3));sh.setAttribute('opacity',p(u,a+.5,a+.8).toFixed(2));sh.setAttribute('fill',u>=TM.no_judge+i*.1?'var(--gain)':'var(--stage)')});
  rise($('nj'),p(u,TM.no_judge,TM.no_judge+.5));

  rise($('desk'),p(u,TM.studio,TM.studio+.5)); $('rec').setAttribute('opacity',Math.sin(t*4)>0?1:.25);
  $('needle').setAttribute('transform',`rotate(${(110*Math.sin(t*1.3)*p(u,TM.tempo_dial,TM.tempo_dial+1)).toFixed(1)} 340 470)`);
  rows.forEach(([g,r,pl,cy],i)=>{const a=TM.tempo_dial+i*1.3;rise(g,p(u,a,a+.5));const hot=i===1&&u>=TM.unexpected,amp=12+(hot?28*p(u,TM.unexpected,TM.unexpected+.8):0),fr=[.11,.04,.07,.06][i];
    let s='';for(let x=900;x<=1450;x+=10)s+=x+','+(cy+amp*Math.sin(x*fr+t*(hot?6:3))*Math.sin((x-900)/550*Math.PI)).toFixed(1)+' ';
    pl.setAttribute('points',s);r.setAttribute('stroke',hot?'var(--gain)':'var(--line)');pl.setAttribute('stroke',hot?'var(--gain)':'var(--ink)')});
  rise($('alive'),p(u,TM.unexpected,TM.unexpected+.6));

  rise($('plan'),p(u,TM.sprout,TM.sprout+.5));
  const gk=p(u,TM.sprout+.6,TM.sprout+5); $('stem').setAttribute('stroke-dashoffset',(1-gk).toFixed(3));
  LV.forEach(([l,f])=>l.setAttribute('opacity',cl((gk-f)*8).toFixed(2)));
  rise($('energy'),p(u,TM.sprout+5.8,TM.sprout+6.3));
  rise($('shelf'),p(u,TM.set_aside,TM.set_aside+.5)); jars.forEach((j,i)=>{const a=TM.set_aside+.6+i*.4;rise(j,p(u,a,a+.4))});

  rise($('bench'),p(u,TM.workbench,TM.workbench+.5)); $('spark').setAttribute('transform',`rotate(${((t*40)%360).toFixed(1)} 380 420)`);
  [0,1,2].forEach(i=>{const a=TM.workbench+3.4+i;rise($('st'+i),p(u,a,a+.5))});
  rise($('rul'),p(u,TM.ruler,TM.ruler+.5)); $('rmark').setAttribute('transform',`translate(${(380+840*p(u,TM.ruler+.6,TM.ruler+2.6)).toFixed(1)} 0)`);
  rise($('jud'),p(u,TM.ruler+.4,TM.ruler+1));

  rise($('cloud'),p(u,TM.storm_cloud,TM.storm_cloud+.5)); $('rain').setAttribute('opacity',p(u,TM.storm_cloud+.4,TM.storm_cloud+.9).toFixed(2));
  rain.forEach((r,i)=>{const y=380+((t*260+i*67)%200);r.setAttribute('d',`M${470+i*20} ${y.toFixed(1)}l-8 22`)});
  rise($('std'),p(u,TM.storm_cloud+4.5,TM.storm_cloud+5));
  const wk=p(u,TM.storm_cloud+5.5,TM.storm_cloud+7);
  $('sprw').setAttribute('transform',`rotate(${(40*wk).toFixed(1)} 520 740)`); $('sprw').setAttribute('opacity',(1-.5*wk).toFixed(2));
  rise($('dis'),p(u,TM.storm_cloud+5.5,TM.storm_cloud+6));
  rise($('might'),p(u,TM.wilted,TM.wilted+.5)); rise($('ghost'),p(u,TM.wilted+1.5,TM.wilted+2.1));

  rise($('clk'),p(u,TM.clock,TM.clock+.5)); $('hand').setAttribute('transform',`rotate(${((t*60)%360).toFixed(1)} 200 320)`);
  [0,1,2].forEach(i=>{const a=TM.clock+.8+i*.6;rise($('b'+i),p(u,a,a+.5))});
  rise($('nofix'),p(u,TM.clock+4.9,TM.clock+5.4));
  rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
  notes.forEach((n,i)=>{const a=TM.notebook+.6+i*.3,k=p(u,a,a+1.2),s=NSRC[i];n.setAttribute('x',(s[0]+(1220+i*6-s[0])*k-20).toFixed(1));n.setAttribute('y',(s[1]+(680+i*10-s[1])*k-15).toFixed(1));n.setAttribute('opacity',u>=a?1:0)});

  rise($('bal'),p(u,TM.balance,TM.balance+.5)); rise($('care'),p(u,TM.balance+2.5,TM.balance+3.1));
  const sw=p(u,TM.balance+5.1,TM.balance+6.1),sq=Math.tanh(3*Math.sin(t*.9)),th=8*sq*sw*Math.PI/180,bc=320*Math.cos(th),bs=320*Math.sin(th);
  $('beam').setAttribute('x1',(800-bc).toFixed(1));$('beam').setAttribute('y1',(340-bs).toFixed(1));$('beam').setAttribute('x2',(800+bc).toFixed(1));$('beam').setAttribute('y2',(340+bs).toFixed(1));
  $('panL').setAttribute('transform',`translate(${(800-bc).toFixed(1)} ${(340-bs).toFixed(1)})`);$('panR').setAttribute('transform',`translate(${(800+bc).toFixed(1)} ${(340+bs).toFixed(1)})`);
  const rOn=sq>0; stL.textContent=rOn?'WAITS ITS TURN':'NOW'; stR.textContent=rOn?'NOW':'WAITS ITS TURN';
  stL.style.fill=rOn?'var(--muted)':'var(--gain)'; stR.style.fill=rOn?'var(--gain)':'var(--muted)';
  stL.setAttribute('opacity',sw.toFixed(2)); stR.setAttribute('opacity',sw.toFixed(2));

  rise($('sw'),p(u,TM.stopwatch,TM.stopwatch+.5)); $('sweep').setAttribute('d',arc(1260,450,140,p(u,TM.stopwatch+.5,TM.stopwatch+5)));
  rise($('tw'),p(u,TM.stopwatch+.6,TM.stopwatch+1.1));
  rise($('qa'),p(u,TM.stopwatch+5.4,TM.stopwatch+5.9)); rise($('qb'),p(u,TM.stopwatch+5.8,TM.stopwatch+6.3)); rise($('qc'),p(u,TM.stopwatch+6.2,TM.stopwatch+6.7));