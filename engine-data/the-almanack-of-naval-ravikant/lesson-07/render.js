const rv=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  const o=p(u,TM.open_door,TM.open_door+2.2),dw=216*(1-.8*o);
  $('door').setAttribute('points','1202,282 '+(1202+dw).toFixed(1)+','+(282+40*o).toFixed(1)+' '+(1202+dw).toFixed(1)+','+(678-40*o).toFixed(1)+' 1202,678');
  $('dfloor').setAttribute('opacity',(.35*o).toFixed(2)); rv('dfree',TM.open_door+5);

  rv('cg0',TM.cage_work); rv('bills',TM.cage_work+1.4); rv('cg1',TM.cage_mind);
  rv('k0',TM.key_ring); rv('k1',TM.key_ring+1.8);
  $('bars0').setAttribute('opacity',1-.8*p(u,TM.key_ring+.8,TM.key_ring+1.8));
  const cm=p(u,TM.key_ring+2.6,TM.key_ring+3.6); $('bars1').setAttribute('opacity',1-.8*cm);
  let cd='';for(let k=0;k<44;k++){const a=k*.7,r=(40+20*Math.sin(k*1.3+t*6))*(1-.75*cm);cd+=(k?'L':'M')+(1190+r*1.6*Math.cos(a)).toFixed(1)+' '+(320+r*.7*Math.sin(a)).toFixed(1)} $('chat').setAttribute('d',cd);
  let sd='';for(let x=960;x<=1420;x+=20)sd+=(x>960?'L':'M')+x+' '+(605+6*Math.sin(x/30+t*2)).toFixed(1); $('sea').setAttribute('d',sd);

  rv('box',TM.product_box); rv('mir',TM.mirror); rv('ar0',TM.mirror+.8); rv('ar1',TM.conveyor); rv('conv',TM.conveyor+.2); rv('own',TM.conveyor+7.4);
  $('mstar').setAttribute('opacity',(.75+.25*Math.sin(t*3)).toFixed(2));
  CB.forEach((g,i)=>{const x=890+((i*100+t*70)%500);g.setAttribute('transform','translate('+x.toFixed(1)+' 500)');g.setAttribute('opacity',(cl((x-890)/40)*cl((1390-x)/40)).toFixed(2))});

  rv('cal',TM.calendar); rv('bank',TM.calendar+.5); $('xx').setAttribute('opacity',p(u,TM.calendar+1.3,TM.calendar+1.8));
  rv('tl',TM.sun_today); rv('sun',TM.sun_today+1.5); $('arrS').setAttribute('opacity',(1-.5*p(u,TM.sun_today+2.5,TM.sun_today+3.2)).toFixed(2));
  $('rays').setAttribute('transform','rotate('+(t*20%360).toFixed(1)+' 860 400)');
  rv('bench',TM.workbench); rv('love',TM.workbench+.8);
  HT.forEach((h,i)=>{const ph=(t*.5+i*.5)%1;h.setAttribute('d',heart(440+i*50,560-80*ph,12));h.setAttribute('opacity',Math.sin(Math.PI*ph).toFixed(2))});

  COL.forEach((c,i)=>{const k=p(u,TM.money_stack+i*.15,TM.money_stack+i*.15+.6);c[0].setAttribute('y',700-c[1]*k);c[0].setAttribute('height',c[1]*k)});
  rv('solved',TM.money_stack+1.2); rv('rich',TM.rich_frown); rv('storm',TM.rich_frown+.4);
  $('rain').style.strokeDashoffset=(-t*30%16).toFixed(1);
  [0,1,2].forEach(i=>rv('w'+i,TM.rich_frown+.8+i*.6)); rv('cage2',TM.rich_frown+4.2); rv('eff',TM.rich_frown+4.6);

  rv('med',TM.cushion);
  const cs=p(u,TM.clear_sky,TM.clear_sky+2), tk=p(u,TM.thought_cloud,TM.thought_cloud+.6)*(1-.9*cs);
  TH.forEach((c,i)=>{const ph=(t*.18+i/TH.length)%1;c.setAttribute('cx',(420+THX[i]*ph).toFixed(1));c.setAttribute('cy',(420-200*ph).toFixed(1));c.setAttribute('r',(14+22*ph).toFixed(1));c.setAttribute('opacity',(tk*cl(1.6*Math.sin(Math.PI*ph))).toFixed(2))});
  rv('inbox',TM.thought_cloud+4.6);
  const n=10*p(u,TM.thought_cloud+5,TM.thought_cloud+9.5)-8*p(u,TM.clear_sky,TM.clear_sky+3);
  CD.forEach((c,i)=>c.setAttribute('opacity',cl(n-i).toFixed(2)));
  $('halo').setAttribute('r',(50+20*cs+3*Math.sin(t*2)).toFixed(1)); $('halo').setAttribute('opacity',cs.toFixed(2)); rv('calm',TM.clear_sky+.6);

  rv('pl',TM.book_stack); BK.forEach((b,i)=>rise(b,p(u,TM.book_stack+.3+i*.25,TM.book_stack+.6+i*.25))); rv('rh',TM.book_stack+1.4);
  DL.forEach((c,i)=>c.setAttribute('fill',u>=TM.book_stack+1.6+i*.45?'var(--gain)':'var(--line)'));
  rv('pr',TM.running_shoe); rv('badge',TM.running_shoe+1);
  DR.forEach((c,i)=>c.setAttribute('fill',u>=TM.running_shoe+1.4+i*.3?'var(--gain)':'var(--line)'));
  $('spd').style.strokeDashoffset=(t*60%34).toFixed(1); rv('tired',TM.running_shoe+4.6);

  const jk=p(u,TM.three_jars+9.1,TM.three_jars+13);
  JF.forEach((j,i)=>{rise(j[0],p(u,TM.three_jars+i*1.6,TM.three_jars+i*1.6+.5));const h=190*Math.floor(cl(jk*7-i*.3,0,7))/7;j[1].setAttribute('y',(492-h).toFixed(1));j[1].setAttribute('height',h.toFixed(1))});
  rv('bt',TM.three_jars+6.5); rv('ea',TM.three_jars+9.1);
  rv('bal',TM.balance); rv('balt',TM.balance+1);
  $('beam').setAttribute('transform','rotate('+(-12*(1-p(u,TM.balance+.3,TM.balance+2))+1.5*Math.sin(t*2)).toFixed(2)+' 1320 300)');

  const S8=SC[8][0]/K;
  rv('qa',S8+.4); rv('qb',S8+.8); rv('qc',S8+1.2); rv('step',S8+5.2); rv('clk',S8+5.2);
  const ca=Math.PI/3*p(u,S8+5.8,S8+8);
  $('sect').setAttribute('d',ca>0?'M1340 740L1340 680A60 60 0 0 1 '+(1340+60*Math.sin(ca)).toFixed(1)+' '+(740-60*Math.cos(ca)).toFixed(1)+'Z':'');