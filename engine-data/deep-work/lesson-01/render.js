const sp0=p(u,TM.spotlight,TM.spotlight+1.2);
  $('cone').setAttribute('opacity',(sp0*(.85+.15*Math.sin(t*2))).toFixed(2)); $('pool').setAttribute('opacity',sp0.toFixed(2));
  const fo=u>=TM.spotlight+5.8; hero.forEach(e=>e.setAttribute('class',fo?'gain':'ink')); rise($('flab'),p(u,TM.spotlight+5.8,TM.spotlight+6.3));

  rise($('dp'),p(u,TM.deep_desk,TM.deep_desk+.5));
  const rg=p(u,TM.deep_desk+1,TM.deep_desk+2);
  rings.forEach((c,i)=>{const k=(t*.6+i/3)%1;c.setAttribute('r',(40+70*k).toFixed(1));c.setAttribute('opacity',((1-k)*rg).toFixed(2))});
  rise($('sh'),p(u,TM.shallow_pile,TM.shallow_pile+.5));
  env.forEach((g,i)=>{const a=TM.shallow_pile+.6+i*.3;rise(g,p(u,a,a+.3))});
  rise($('busy'),p(u,TM.shallow_pile+5.8,TM.shallow_pile+6.4));

  const a1=(-80+8*Math.sin(t))*Math.PI/180,a2=(-10+18*Math.sin(t*1.3))*Math.PI/180,ex=280+200*Math.cos(a1),ey=700+200*Math.sin(a1),wx=ex+160*Math.cos(a2),wy=ey+160*Math.sin(a2);
  $('armP').setAttribute('d','M280 700L'+ex.toFixed(1)+' '+ey.toFixed(1)+'L'+wx.toFixed(1)+' '+wy.toFixed(1)+'l22 -16m-22 16l22 16');
  rise($('arm'),p(u,TM.robot_arm,TM.robot_arm+.5)); rise($('eco'),p(u,TM.robot_arm+4.6,TM.robot_arm+5.1));
  rise($('pod'),p(u,TM.winner_podium,TM.winner_podium+.5)); rise($('starG'),p(u,TM.superstar,TM.superstar+.5));
  cli.forEach((g,i)=>{const a=TM.superstar+.6+i*.25;rise(g,p(u,a,a+.3))});

  const s3=SC[3][0]/K; rise($('sub3'),p(u,s3+.4,s3+.9));
  rise($('abl0'),p(u,TM.mountain,TM.mountain+.5)); DR($('climb'),p(u,TM.mountain+.6,TM.mountain+2.4)); rise($('flag'),p(u,TM.mountain+2.2,TM.mountain+2.6));
  rise($('abl1'),p(u,TM.trophy,TM.trophy+.5));
  const bo=p(u,TM.trophy+5.2,TM.trophy+5.8); DR($('lk0'),bo); DR($('lk1'),bo); rise($('both'),p(u,TM.trophy+5.4,TM.trophy+5.9));

  rise($('ss'),p(u,TM.spreadsheet,TM.spreadsheet+.5));
  cells.forEach((c,i)=>{const a=TM.spreadsheet+.5+i*.05;c.setAttribute('opacity',p(u,a,a+.3).toFixed(2))});
  rise($('auto'),p(u,TM.spreadsheet+6.2,TM.spreadsheet+6.7)); rise($('a40'),p(u,TM.laptop_code-.3,TM.laptop_code+.2));
  rise($('lap'),p(u,TM.laptop_code,TM.laptop_code+.5));
  code.forEach((c,i)=>{const a=TM.laptop_code+.5+i*.5;c.setAttribute('width',(CW[i]*p(u,a,a+.4)).toFixed(1))});
  $('skill').setAttribute('width',(340*p(u,TM.laptop_code+4.6,TM.laptop_code+8)).toFixed(1));
  rise($('fast'),p(u,TM.laptop_code+4.6,TM.laptop_code+5.2));
  rise($('a41'),p(u,TM.job_offer-.3,TM.job_offer+.2)); rise($('offer'),p(u,TM.job_offer,TM.job_offer+.5));

  [.3,3.6,4.6].forEach((d,i)=>rise($('e'+i),p(u,TM.equation+d,TM.equation+d+.5)));
  const ca=TM.equation+8.3; rise($('area'),p(u,ca,ca+.5));
  let fw=1,fh=1; if(u>ca+1){const c=((u-ca-1)%6)/6; if(c<.5)fw=1-.5*Math.sin(Math.PI*c*2); else fh=1-.5*Math.sin(Math.PI*(c-.5)*2)}
  const aw=440*fw,ah=280*fh; $('ar').setAttribute('width',aw.toFixed(1)); $('ar').setAttribute('height',ah.toFixed(1)); $('ar').setAttribute('y',(760-ah).toFixed(1));
  $('arL').setAttribute('x',(200+aw/2).toFixed(1)); $('arL').setAttribute('y',(768-ah/2).toFixed(1));
  rise($('clk'),p(u,TM.two_clocks,TM.two_clocks+.5));
  hands.forEach((h,i)=>{const [x,y,r]=HC[i],a=i?t*3+i*2:t*.8,L=r*.75;h.setAttribute('d','M'+x+' '+y+'l'+(L*Math.sin(a)).toFixed(1)+' '+(-L*Math.cos(a)).toFixed(1)+'M'+x+' '+y+'l0 '+(-L*.6).toFixed(1))});
  $('bf').setAttribute('width',(180*p(u,TM.two_clocks+1,TM.two_clocks+3)).toFixed(1)); $('bd').setAttribute('width',(110*p(u,TM.two_clocks+1,TM.two_clocks+3)).toFixed(1));

  rise($('doors'),p(u,TM.two_doors,TM.two_doors+.5)); rise($('walker'),p(u,TM.two_doors+.3,TM.two_doors+.8)); rise($('sub6'),p(u,TM.two_doors+2.9,TM.two_doors+3.4));
  const sw=p(u,TM.two_doors+4,TM.two_doors+6.5),px=520+320*sw; wk.setAttribute('transform','translate('+px.toFixed(1)+' 0)');
  const dop=p(u,TM.two_doors+1,TM.two_doors+1.5);
  dots.forEach((d,i)=>{const st=i<2,bx=st?520:px;d.setAttribute('cx',(bx+(i-2.5)*20+4*Math.sin(t*2+i)).toFixed(1));d.setAttribute('cy',(486+6*Math.sin(t*3+i*1.7)).toFixed(1));
    d.setAttribute('class',st&&sw>.3?'loss':'gain');d.setAttribute('opacity',dop.toFixed(2))});
  rise($('fog'),p(u,TM.fog_cloud,TM.fog_cloud+.6)); rise($('inbox'),p(u,TM.fog_cloud+2.2,TM.fog_cloud+2.7));

  folkG.forEach((g,i)=>{const a=TM.crowd_phones+i*.12;rise(g,p(u,a,a+.4))}); rise($('folkL'),p(u,TM.crowd_phones+1,TM.crowd_phones+1.5));
  pings.forEach((c,i)=>c.setAttribute('opacity',Math.sin(t*4+i*1.3)>0?1:.25));
  rise($('chart'),p(u,TM.gold_coin,TM.gold_coin+.5));
  const ln=p(u,TM.gold_coin+.3,TM.gold_coin+2.3); DR($('lv'),ln); DR($('lr'),ln); rise($('coin'),p(u,TM.gold_coin+2.2,TM.gold_coin+2.7));
  $('gapG').setAttribute('opacity',p(u,TM.gold_coin+5,TM.gold_coin+5.6).toFixed(2)); rise($('gapT'),p(u,TM.gold_coin+5,TM.gold_coin+5.6));
  rise($('cal'),p(u,TM.calendar,TM.calendar+.5)); rise($('hb'),p(u,TM.calendar+1,TM.calendar+1.5)); rise($('calT'),p(u,TM.calendar+.4,TM.calendar+1));

  const s8=SC[8][0]/K; rise($('look'),p(u,s8+.3,s8+.8)); rise($('hrs'),p(u,s8+.6,s8+1.2));
  rise($('qa'),p(u,s8+1.8,s8+2.3)); rise($('qb'),p(u,s8+2.2,s8+2.7)); rise($('qc'),p(u,s8+2.6,s8+3.1));
  const hi=Math.floor(t*3)%24; hrs.forEach((c,i)=>{c.setAttribute('stroke',i===hi?'var(--gain)':'var(--line)');c.setAttribute('fill',i===hi?'var(--gain)':'var(--stage)')});