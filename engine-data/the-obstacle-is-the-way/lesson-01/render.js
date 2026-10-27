rise($('r0'),p(u,TM.boulder,TM.boulder+.6));
  $('p0').setAttribute('y2',(830-240*p(u,TM.boulder+1,TM.boulder+3)).toFixed(1));
  const fp=p(u,TM.boulder+4.6,TM.boulder+5.6);
  rf.setAttribute('transform',`translate(1300 700) scale(1 ${Math.max(.02,Math.abs(Math.cos(fp*Math.PI))).toFixed(3)})`);r0p.setAttribute('class',fp>.5?'gain':'loss');

  rise($('emp'),p(u,TM.emperor,TM.emperor+.6));
  PR.forEach((g,i)=>rise(g,p(u,TM.plague+i*.5,TM.plague+i*.5+.4)));
  rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
  NL.forEach((e,i)=>e.setAttribute('opacity',p(u,TM.notebook+.6+i*.25,TM.notebook+.9+i*.25)));
  rise($('hol'),p(u,TM.notebook+4.9,TM.notebook+5.5));

  rise($('qc0'),p(u,TM.quote_card,TM.quote_card+.5));rise($('qt'),p(u,TM.quote_card+5,TM.quote_card+5.6));
  const ft=p(u,TM.arrow_turn+3.8,TM.arrow_turn+4.6);
  $('dt').setAttribute('opacity',p(u,TM.arrow_turn,TM.arrow_turn+.5)*(1-ft));
  $('dx').setAttribute('opacity',p(u,TM.arrow_turn+1.2,TM.arrow_turn+1.6)*(1-ft));
  rk2.setAttribute('opacity',1-ft);
  ST.forEach((s,i)=>rise(s,p(u,TM.arrow_turn+3.8+i*.2,TM.arrow_turn+4.3+i*.2)));
  const gw=p(u,TM.arrow_turn+4.2,TM.arrow_turn+5.4);
  $('gw').setAttribute('stroke-dasharray',(1260*gw).toFixed(0)+' 2000');$('gw').setAttribute('opacity',gw>0?1:0);
  rise($('rdl'),p(u,TM.arrow_turn+5,TM.arrow_turn+5.5));

  rise($('kg'),p(u,TM.king,TM.king+.5));
  const kb=p(u,TM.bush,TM.bush+1.6);
  kgm.setAttribute('transform',`translate(${(1020*kb).toFixed(1)} ${(-30*kb).toFixed(1)})`);
  kgm.setAttribute('opacity',(1-.85*Math.sin(Math.PI*kb)).toFixed(2));klab.setAttribute('opacity',1-kb);
  const bd=p(u,TM.road,TM.road+.9);
  b3.setAttribute('transform',`translate(0 ${(-280*(1-bd)).toFixed(1)})`);b3.setAttribute('opacity',cl(bd*3));
  rise($('bush'),p(u,TM.bush-.6,TM.bush));$('gz').setAttribute('opacity',p(u,TM.bush+1.8,TM.bush+2.4));

  const wv=p(u,TM.merchants,TM.merchants+.6);
  WK.forEach(([g,b],i)=>{const f=((t*.06+i*.25)%1+1)%1,x=140+1320*f,y=539+DY(x);
    g.setAttribute('transform',`translate(${x.toFixed(1)} ${y.toFixed(1)})`);
    g.setAttribute('opacity',(wv*Math.min(1,Math.sin(Math.PI*f)*4)).toFixed(2));
    b.setAttribute('opacity',p(u,TM.merchants+2.6,TM.merchants+3))});
  $('rt4').setAttribute('opacity',p(u,TM.merchants+2.6,TM.merchants+3.2));
  rise($('cmp'),p(u,TM.complaints,TM.complaints+.5));rise($('nob'),p(u,TM.complaints+4.2,TM.complaints+4.8));

  rise($('pz'),p(u,TM.peasant,TM.peasant+.5));
  const wl=p(u,TM.peasant,TM.peasant+3),l5=p(u,TM.peasant+6,TM.peasant+7),rl=p(u,TM.sweat,TM.sweat+4);
  const px=180+300*wl+130*l5+420*rl,bob=wl>0&&wl<1?Math.abs(Math.sin(t*8))*6:0;
  pzi.setAttribute('transform',`translate(${px.toFixed(1)} ${(660-bob).toFixed(1)}) rotate(${(22*l5).toFixed(1)})`);
  const dn=p(u,TM.peasant+5.6,TM.peasant+6.3);
  bk.setAttribute('transform',`translate(${(px*(1-dn)+390*dn).toFixed(1)} ${((500-bob)*(1-dn)+640*dn).toFixed(1)})`);
  const jig=l5>=1&&rl<=0?3*Math.sin(t*20):0;
  b5.setAttribute('transform',`translate(${(420*rl+jig).toFixed(1)} 0) rotate(${(219*rl).toFixed(1)} 800 560)`);
  SW.setAttribute('opacity',p(u,TM.sweat,TM.sweat+.4));SW.setAttribute('transform',`translate(0 ${(4*Math.sin(t*6)).toFixed(1)})`);
  rise($('nc'),p(u,TM.peasant+3.8,TM.peasant+4.4));

  rise($('pur'),p(u,TM.purse,TM.purse+.5));
  CN.forEach(([c,x,y],i)=>{const k=p(u,TM.purse+.6+i*.08,TM.purse+1.4+i*.08);
    c.setAttribute('cx',(800+(x-800)*k).toFixed(1));c.setAttribute('cy',(590+(y-590)*k+5*k*Math.sin(t*2+i)).toFixed(1));c.setAttribute('opacity',k>0?1:0)});
  rise($('nt'),p(u,TM.note,TM.note+.5));rise($('hid'),p(u,TM.note+5.7,TM.note+6.3));

  rise($('frw'),p(u,TM.fire,TM.fire+.6));
  let fed=0;
  LG.forEach((g,i)=>{const a=p(u,TM.logs+i*.3,TM.logs+i*.3+.5),k=p(u,TM.logs+2.5+i*1.5,TM.logs+3.6+i*1.5);fed+=k;
    const x=890-470*k,y0=300+i*120,y=y0+(600-y0)*k;
    g.setAttribute('transform',`translate(${x.toFixed(1)} ${y.toFixed(1)}) scale(${(1-.7*k).toFixed(3)})`);g.setAttribute('opacity',(a*(1-k*k)).toFixed(2))});
  const fs=1+.17*fed;
  $('fr').setAttribute('transform',`translate(420 640) scale(${(fs*(1+.03*Math.sin(t*9))).toFixed(3)} ${(fs*(1+.06*Math.sin(t*7))).toFixed(3)})`);
  rise($('o0'),p(u,TM.logs+7.9,TM.logs+8.4));rise($('o1'),p(u,TM.logs+8.4,TM.logs+8.9));
  rise($('tm0'),p(u,TM.tomorrow,TM.tomorrow+.6));rise($('tm1'),p(u,TM.tomorrow+4.2,TM.tomorrow+4.8));

  rise($('qa'),p(u,TM.your_rock,TM.your_rock+.5));rise($('qb'),p(u,TM.your_rock+.4,TM.your_rock+.9));
  rise($('qc'),p(u,TM.your_rock+3.8,TM.your_rock+4.4));
  const lf=p(u,TM.your_rock+4.2,TM.your_rock+5.2);
  r8.setAttribute('transform',`translate(${(60*lf).toFixed(1)} ${(-60*lf).toFixed(1)}) rotate(${(-14*lf+2*Math.sin(t*2)*(1-lf)).toFixed(2)} 1260 730)`);
  $('gl').setAttribute('opacity',lf);