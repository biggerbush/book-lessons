rise($('tApple'),p(u,TM.apple_logo,TM.apple_logo+.6));
  TQ.forEach((g,i)=>rise(g,p(u,TM.apple_logo+.6+i*.25,TM.apple_logo+1+i*.25)));
  $('tApple').setAttribute('transform','translate(0 '+(6*Math.sin(t*1.5)).toFixed(1)+')');

  ['bA','bB'].forEach((id,i)=>rise($(id),p(u,TM.two_companies+i*.4,TM.two_companies+.5+i*.4)));
  rise($('pool'),p(u,TM.talent_pool,TM.talent_pool+.5));
  const lo=TM.talent_pool+5; rise($('oA'),p(u,lo,lo+.5)); rise($('oB'),p(u,lo+.6,lo+1.1));
  WA.forEach((w,i)=>w.setAttribute('fill',u>=lo+i*.15?'var(--gain)':'var(--line)'));
  rise($('diff'),p(u,TM.talent_pool+9.6,TM.talent_pool+10.2));

  rise($('pc'),p(u,TM.computer,TM.computer+.5)); rise($('sheet'),p(u,TM.spec_sheet-.3,TM.spec_sheet+.2));
  FT.forEach((g,i)=>rise(g,p(u,TM.spec_sheet+i*.4,TM.spec_sheet+.4+i*.4)));
  rise($('hope'),p(u,TM.spec_sheet+3.4,TM.spec_sheet+4));

  rise($('bub'),p(u,TM.apple_store,TM.apple_store+.5));
  [['Why',TM.lightbulb],['How',TM.lightbulb+6.6],['What',TM.laptop]].forEach(([n,a])=>{rise($('g'+n),p(u,a,a+.5));rise($('t'+n),p(u,a+.2,a+.7))});

  rise($('ap'),p(u,TM.mp3_player,TM.mp3_player+.5));
  AI.forEach((g,i)=>rise(g,p(u,TM.mp3_player+.6+i*.5,TM.mp3_player+1+i*.5)));
  rise($('dl'),p(u,TM.dell_box,TM.dell_box+.5));
  DI.forEach((g,i)=>rise(g,p(u,TM.dell_box+.6+i*.5,TM.dell_box+1+i*.5)));
  const ns=TM.dell_box+5.4; $('dlI').setAttribute('opacity',u>=ns?.35:1); rise($('dlN'),p(u,ns,ns+.5));
  const cc=u>=TM.dell_box+10; $('dlT').textContent=cc?'A COMPUTER COMPANY':'COMPUTERS'; $('dlBox').setAttribute('stroke',cc?'var(--loss)':'var(--ink)');

  rise($('qc'),p(u,TM.quote_card,TM.quote_card+.6));
  rise($('ht'),p(u,TM.heart,TM.heart+.5));
  const bt=1.7*(1+.06*Math.pow(Math.abs(Math.sin(t*3)),6)); $('htP').setAttribute('transform','translate(380 640) scale('+bt.toFixed(3)+')');
  rise($('fol'),p(u,TM.heart+.2,TM.heart+.7));
  FL.forEach(([g,els],i)=>{const k=p(u,TM.heart+.6+i*.25,TM.heart+2.2+i*.25),x=900+i*120+(620+i*110-900-i*120)*k;g.setAttribute('transform','translate('+x.toFixed(1)+' 0)');els.forEach(e=>e.setAttribute('class',k>.99?'gain':'ink'))});
  flag.setAttribute('opacity',p(u,TM.customer,TM.customer+.5)); rise($('cust'),p(u,TM.customer,TM.customer+.5));

  rise($('pod'),p(u,TM.podium,TM.podium+.5));
  const cw=p(u,TM.crowd,TM.crowd+.8);
  WV.forEach((w,k)=>{const r=60+((t*50+k*50)%150);w.setAttribute('d','M'+(800-r).toFixed(1)+' 380A'+r.toFixed(1)+' '+r.toFixed(1)+' 0 0 0 '+(800+r).toFixed(1)+' 380');w.setAttribute('opacity',((1-(r-60)/150)*cw).toFixed(2))});
  rise($('mlk'),p(u,TM.crowd,TM.crowd+.5));
  const sf=TM.crowd+7.4;
  CR.forEach(([g,els],i)=>{rise(g,p(u,TM.crowd+.3+i*.08,TM.crowd+.7+i*.08));els.forEach(e=>e.setAttribute('class',u>=sf+i*.1?'gain':'ink'))});
  rise($('self'),p(u,sf,sf+.5));

  rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
  const wk=p(u,TM.pen+.4,TM.pen+4.5); scr.setAttribute('stroke-dashoffset',(SLn*(1-wk)).toFixed(1));
  let pt={x:205,y:455}; try{pt=scr.getPointAtLength(SLn*wk)}catch(e){}
  $('penG').setAttribute('transform','translate('+pt.x.toFixed(1)+' '+pt.y.toFixed(1)+')'); $('penG').setAttribute('opacity',p(u,TM.pen,TM.pen+.3));
  rise($('ord'),p(u,TM.arrow,TM.arrow+.5)); rise($('lis'),p(u,TM.arrow+.4,TM.arrow+.9));
  const ln=p(u,TM.arrow+3.3,TM.arrow+4.3);
  LS.forEach(([g,x,els])=>{g.setAttribute('transform','rotate('+(-14*ln).toFixed(2)+' '+x+' 650)');els.forEach(e=>e.setAttribute('class',ln>.5?'gain':'ink'))});
  rise($('lnT'),p(u,TM.arrow+3.3,TM.arrow+3.8));

  const q=SC[8][0]/K+.3;
  ['qa','qb','qc2','qd'].forEach((id,i)=>rise($(id),p(u,q+i*.4,q+.5+i*.4)));
  rise($('gc'),p(u,q+1.6,q+2.2)); $('gcC').setAttribute('r',(32+4*Math.sin(t*2.5)).toFixed(1));