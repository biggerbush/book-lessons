const hs=p(u,TM.hourglass+.6,TM.hourglass+12),hw=y=>12+68*(450-y)/190,y0=290+150*hs;
  rise($('hg'),p(u,TM.hourglass,TM.hourglass+.6));
  $('sandT').setAttribute('points',(1340-hw(y0)).toFixed(1)+','+y0.toFixed(1)+' '+(1340+hw(y0)).toFixed(1)+','+y0.toFixed(1)+' 1350,446 1330,446');
  $('sandB').setAttribute('points','1272,634 1408,634 1340,'+(630-130*hs).toFixed(1));
  $('stream').setAttribute('opacity',hs>0&&hs<1?1:0);

  rise($('bub'),p(u,TM.wish_list,TM.wish_list+.5));
  [0,1,2].forEach(i=>rise($('w'+i),p(u,TM.money_pile+i*.7,TM.money_pile+i*.7+.4)));
  rise($('rcoin'),p(u,TM.money_pile,TM.money_pile+.4)); COIN.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.money_pile+i*.1,TM.money_pile+i*.1+.25)));
  rise($('rclock'),p(u,TM.money_pile+.7,TM.money_pile+1.1)); rot('ch1',t*90,1120,410);
  rise($('rppl'),p(u,TM.money_pile+1.4,TM.money_pile+1.8));
  rise($('trap'),p(u,TM.money_pile+2.6,TM.money_pile+3.1));
  rise($('crowdG'),p(u,TM.crowd,TM.crowd+.5));
  $('crowdM').setAttribute('transform','translate('+(240*p(u,TM.crowd+.4,TM.crowd+4)+4*Math.sin(t*6)).toFixed(1)+' 0)');

  rise($('qcard'),p(u,TM.quote_card,TM.quote_card+.6));
  rise($('tbox'),p(u,TM.toolbox,TM.toolbox+.5));
  $('tools').setAttribute('transform','translate(0 '+(60*(1-p(u,TM.toolbox+.4,TM.toolbox+1.4))).toFixed(1)+')');
  const ks=p(u,TM.toolbox+5.7,TM.toolbox+6.2); rise($('spark'),ks); $('spark').setAttribute('opacity',(ks*(.7+.3*Math.sin(t*5))).toFixed(2));
  rise($('creat'),p(u,TM.toolbox+5.7,TM.toolbox+6.3));

  [TM.laptop,TM.client_folder,TM.empty_wallet].forEach((a,i)=>rise($('k'+i),p(u,a,a+.5)));
  $('pb').setAttribute('width',(160*p(u,TM.laptop+.6,TM.laptop+4)).toFixed(1));

  rise($('glob'),p(u,TM.globe,TM.globe+.5)); $('arc4').setAttribute('opacity',p(u,TM.globe+1,TM.globe+1.6));
  rise($('clk'),p(u,TM.two_clocks,TM.two_clocks+.5)); rise($('gap7'),p(u,TM.two_clocks+.8,TM.two_clocks+1.3));
  const ha=60+t*2; rot('hhA',ha,860,430); rot('hhB',ha+210,1300,430); rot('mmA',t*24,860,430); rot('mmB',t*24,1300,430);
  rise($('talk'),p(u,TM.two_clocks+5,TM.two_clocks+5.5));
  $('nox').setAttribute('x2',(740+660*p(u,TM.two_clocks+5.8,TM.two_clocks+6.5)).toFixed(1));
  rise($('nolong'),p(u,TM.two_clocks+6,TM.two_clocks+6.6));

  const fz=u>=TM.simple_app+3.8;
  CH.forEach((c,i)=>{const a=TM.simple_app+i*.12,k=KEEP.includes(i); rise(c[0],p(u,a,a+.3)); c[1].setAttribute('fill',fz&&k?'var(--gain)':'var(--stage)'); c[1].setAttribute('opacity',fz&&!k?.25:1); c[1].nextSibling.setAttribute('opacity',fz&&!k?.25:1)});
  rise($('fun'),p(u,TM.simple_app+.6,TM.simple_app+1.1)); rise($('app'),p(u,TM.simple_app+1.2,TM.simple_app+1.7));
  TK.forEach((k,i)=>k.setAttribute('opacity',p(u,TM.simple_app+4+i*.4,TM.simple_app+4.3+i*.4)));
  rise($('focus'),p(u,TM.simple_app+3.8,TM.simple_app+4.3));
  rise($('badge'),p(u,TM.star_badge,TM.star_badge+.5)); rot('star',20*Math.sin(t*1.5),1410,260); rise($('strong'),p(u,TM.star_badge+.3,TM.star_badge+.9));

  let wv='M120 500'; for(let x=120;x<=1480;x+=40)wv+='L'+x+' '+(500+6*Math.sin(x/50+t*2)).toFixed(1); $('wave').setAttribute('d',wv);
  rise($('ship'),p(u,TM.big_company,TM.big_company+.6)); $('shipM').setAttribute('transform','translate('+(20*Math.sin(t*.3)).toFixed(1)+' '+(2*Math.sin(t)).toFixed(1)+')');
  rise($('boatG'),p(u,TM.tiny_boat,TM.tiny_boat+.5));
  $('boat').setAttribute('transform','translate('+(1150+200*Math.sin(t*.9)).toFixed(1)+' '+(482+3*Math.sin(t*3)).toFixed(1)+') rotate('+(8*Math.cos(t*.9)).toFixed(1)+')');
  AL.forEach((g,i)=>rise(g,p(u,TM.tiny_boat+6.2+i*.3,TM.tiny_boat+6.5+i*.3)));
  AR.forEach((g,i)=>rise(g,p(u,TM.tiny_boat+6.6+i*.3,TM.tiny_boat+6.9+i*.3)));
  rise($('apT'),p(u,TM.tiny_boat+7.2,TM.tiny_boat+7.7));

  rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
  [0,1,2].forEach(i=>rise($('n'+i),p(u,TM.notebook+3.8+i*.7,TM.notebook+4.2+i*.7)));
  const lb=p(u,TM.lightbulb,TM.lightbulb+.5); rise($('bulb'),lb); $('lk7').setAttribute('opacity',lb);
  $('bulbC').setAttribute('fill',u>=TM.lightbulb+.4?'var(--gain)':'var(--stage)');
  RY.forEach((r,i)=>r.setAttribute('opacity',(p(u,TM.lightbulb+.4,TM.lightbulb+.8)*(.6+.4*Math.sin(t*4+i))).toFixed(2)));
  rise($('ask'),p(u,TM.lightbulb+.6,TM.lightbulb+1.1));
  rise($('r7a'),p(u,TM.lightbulb+4.6,TM.lightbulb+5.1)); rise($('r7b'),p(u,TM.lightbulb+5.6,TM.lightbulb+6.1));

  rise($('stk'),p(u,TM.sticky_note,TM.sticky_note+.5));
  rise($('qa'),p(u,TM.sticky_note+.4,TM.sticky_note+.9)); rise($('qb'),p(u,TM.sticky_note+.8,TM.sticky_note+1.3)); rise($('qc'),p(u,TM.sticky_note+1.2,TM.sticky_note+1.7));
  SL.forEach((l,i)=>l.setAttribute('stroke-dashoffset',(200*(1-p(u,TM.sticky_note+3.8+i*.6,TM.sticky_note+4.4+i*.6))).toFixed(1)));
  rise($('lbl8'),p(u,TM.sticky_note+3.8,TM.sticky_note+4.3));