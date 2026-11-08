const fc=(t%2.6)/2.6,fs=Math.cos(Math.PI*ease(cl(fc/.55)));
  $('flip').setAttribute('transform','translate(1260 0) scale('+fs.toFixed(3)+' 1) translate(-1260 0)');
  rise($('book'),p(u,TM.cookbook,TM.cookbook+.6)); rise($('q0'),p(u,TM.cookbook+5.2,TM.cookbook+5.8));

  SPN.forEach((s,i)=>s.setAttribute('opacity',p(u,TM.shelf+i*.03,TM.shelf+i*.03+.3)));
  ADV.forEach((g,i)=>rise(g,p(u,TM.big_goal+i*1.3,TM.big_goal+i*1.3+.5)));
  rise($('easy'),p(u,TM.big_goal+4.4,TM.big_goal+5));

  rise($('tgt'),p(u,TM.missed_goal,TM.missed_goal+.5));
  const ak=p(u,TM.missed_goal+.8,TM.missed_goal+1.4);
  $('arrow').setAttribute('transform','translate('+(560+200*(1-ak)).toFixed(1)+' '+(300-100*(1-ak)).toFixed(1)+')'); $('arrow').setAttribute('opacity',ak>0?1:0);
  rise($('missL'),p(u,TM.missed_goal+1.4,TM.missed_goal+1.9));
  rise($('team'),p(u,TM.entitled,TM.entitled+.5));
  TEAM.forEach(([sh,cr],i)=>{const a=TM.entitled+1+i*.4;sh.forEach(e=>e.setAttribute('class',u>=a?'loss':'ink'));cr.setAttribute('opacity',p(u,a,a+.4))});
  rise($('entL'),p(u,TM.entitled+1,TM.entitled+1.5));
  rise($('nobook'),p(u,TM.entitled+4.2,TM.entitled+4.8)); rise($('decide'),p(u,TM.entitled+7.9,TM.entitled+8.5));

  rise($('cloud'),p(u,TM.startup,TM.startup+.6));
  const on=p(u,TM.investors,TM.investors+.5);
  COIN.forEach((c,i)=>{const ph=(t*.6+i/5)%1;c.setAttribute('cy',(230+170*ph).toFixed(1));c.setAttribute('opacity',(on*(ph<.8?1:(1-ph)/.2)).toFixed(2))});
  CU.forEach((g,i)=>rise(g,p(u,TM.investors+i*.4,TM.investors+i*.4+.4)));
  rise($('custL'),p(u,TM.investors+.5,TM.investors+1)); rise($('chart'),on);
  $('up').setAttribute('stroke-dashoffset',(1-p(u,TM.investors+.5,TM.investors+3)).toFixed(3));

  const bk=p(u,TM.burst,TM.burst+.4);
  $('bub').setAttribute('r',(140+5*Math.sin(t*2)*(1-bk)+50*bk).toFixed(1)); $('bub').setAttribute('opacity',1-bk); $('bubT').setAttribute('opacity',1-bk);
  $('shards').setAttribute('opacity',(bk*(1-.5*p(u,TM.burst+1,TM.burst+2))).toFixed(2));
  GONE.forEach((i,j)=>{const a=TM.customers+.4+j*.35,k=p(u,a,a+.5);BX[i].setAttribute('transform','translate(0 '+(50*k).toFixed(1)+')');BX[i].setAttribute('opacity',1-k)});
  rise($('gauge'),p(u,TM.cash_gauge,TM.cash_gauge+.5));
  const ck=p(u,TM.cash_gauge+.3,TM.cash_gauge+2.8),ch=308*(1-.88*ck);
  $('cash').setAttribute('height',ch.toFixed(1)); $('cash').setAttribute('y',(604-ch).toFixed(1)); $('cash').setAttribute('class',ck>.6?'loss':'gain');
  rise($('plan'),p(u,TM.cash_gauge+3,TM.cash_gauge+3.6));

  rise($('fork'),p(u,TM.crossroads,TM.crossroads+.5)); rise($('nomap'),p(u,TM.crossroads+.8,TM.crossroads+1.4));
  const A=[TM.ipo_bell,TM.ipo_bell+7,TM.ipo_bell+10.5,TM.hp_logo],F=[0,.204,.481,.741,1];let rp=0;
  A.forEach((a,i)=>{rp+=(F[i+1]-F[i])*p(u,a,a+.8);rise($('ms'+i),p(u,a+.6,a+1.1))});
  $('road').setAttribute('stroke-dashoffset',(1-rp).toFixed(3));
  $('bell').setAttribute('transform','rotate('+(14*Math.sin(t*5)*p(u,TM.ipo_bell+.6,TM.ipo_bell+1)).toFixed(1)+' 520 340)');

  rise($('parts'),p(u,TM.moving_parts,TM.moving_parts+.5));
  PT.forEach((g,i)=>{const a=i*2.094+t*.6+.4*Math.sin(t*1.3+i),r=125+18*Math.sin(t*1.7+i*2);g.setAttribute('transform','translate('+(400+r*Math.cos(a)).toFixed(1)+' '+(460+r*Math.sin(a)).toFixed(1)+')')});
  rise($('rc0'),p(u,TM.moving_parts+4.6,TM.moving_parts+5.1)); rise($('rc1'),p(u,TM.moving_parts+6.2,TM.moving_parts+6.7));
  rise($('comp'),p(u,TM.compass,TM.compass+.5));
  $('needle').setAttribute('transform','rotate('+(40*Math.sin(t*1.3)*(1-.85*p(u,TM.compass+.5,TM.compass+2.5))).toFixed(1)+' 1270 440)');
  rise($('stories'),p(u,TM.compass+.8,TM.compass+1.4));

  rise($('st0'),p(u,TM.fact_sheet,TM.fact_sheet+.5)); rise($('st1'),p(u,TM.fact_sheet+4.6,TM.fact_sheet+5.1));
  rise($('st2'),p(u,TM.own_it,TM.own_it+.5)); rise($('st3'),p(u,TM.own_it+1.5,TM.own_it+2));
  $('adj').setAttribute('transform','rotate('+((t*90)%360).toFixed(1)+' 1325 345)');
  rise($('tracks'),p(u,TM.own_it+3.6,TM.own_it+4.2));
  const mv=p(u,TM.own_it+4,TM.own_it+9),xe=420+1020*mv;let tr='M420 640';
  for(let x=430;x<=xe;x+=10)tr+='L'+x+' '+(640+10*Math.sin(x/37)).toFixed(1);
  $('trail').setAttribute('d',tr); $('gdot').setAttribute('cx',xe.toFixed(1)); $('gdot').setAttribute('cy',(640+10*Math.sin(xe/37)).toFixed(1));
  $('fdot').setAttribute('r',(16+3*Math.abs(Math.sin(t*3))).toFixed(1));
  rise($('beats'),p(u,TM.own_it+4.2,TM.own_it+4.8));

  const q=SC[8][0]/K;
  rise($('qa'),p(u,q+.3,q+.8)); rise($('qb'),p(u,q+.7,q+1.2)); rise($('qc'),p(u,q+1.1,q+1.6));
  rise($('stairs'),p(u,q+1.4,q+2)); rise($('wk'),p(u,q+4.6,q+5.2));
  const hc=(t%3)/3*3,hi=Math.min(2,Math.floor(hc)),hf=hi<2?hc-hi:0,s0=STEP[hi],s1=STEP[Math.min(2,hi+1)];
  $('hop').setAttribute('cx',(s0[0]+(s1[0]-s0[0])*ease(hf)).toFixed(1));
  $('hop').setAttribute('cy',(s0[1]+(s1[1]-s0[1])*ease(hf)-18-60*Math.sin(Math.PI*hf)).toFixed(1));