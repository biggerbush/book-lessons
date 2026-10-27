const k0=(t/9)%1,h0=170*(1-k0),w0=10+60*h0/180,L0=645-120*k0,hw0=10+60*(L0-470)/180;
  $('sandT').setAttribute('points',(1320-w0).toFixed(1)+','+(470-h0).toFixed(1)+' '+(1320+w0).toFixed(1)+','+(470-h0).toFixed(1)+' 1320,470');
  $('sandB').setAttribute('points','1255,645 1385,645 '+(1320+hw0).toFixed(1)+','+L0.toFixed(1)+' '+(1320-hw0).toFixed(1)+','+L0.toFixed(1));
  $('strm').setAttribute('y2',L0.toFixed(1)); $('strm').setAttribute('opacity',k0<.97?1:0);
  rise($('hg'),p(u,TM.hourglass,TM.hourglass+.6));
  D0.forEach((c,i)=>c.setAttribute('fill',u>=TM.hourglass+7+i*.35?'var(--gain)':'var(--line)'));

  rise($('p1'),p(u,TM.magnify,TM.magnify+.5)); rise($('cloud'),p(u,TM.magnify+.3,TM.magnify+.8));
  const mg=p(u,TM.magnify+.6,TM.thought_cloud+3);
  $('mag').setAttribute('transform','translate('+(700+89*mg).toFixed(1)+' '+(300+198*mg).toFixed(1)+')'); $('mag').setAttribute('opacity',p(u,TM.magnify+.6,TM.magnify+1));
  rise($('s1sub'),p(u,TM.magnify+3.8,TM.magnify+4.3));
  tags1.forEach(([g,r],i)=>{const a=TM.thought_cloud+i*.6;g.setAttribute('opacity',.12+.88*p(u,a,a+.5));r.setAttribute('stroke',u>=TM.fear_label?'var(--loss)':'var(--ink)')});
  rise($('fear'),p(u,TM.fear_label,TM.fear_label+.6));

  rise($('p2'),p(u,TM.chain-.3,TM.chain+.2));
  links.forEach((e,i)=>e.setAttribute('opacity',p(u,TM.chain+i*.25,TM.chain+i*.25+.3)));
  rise($('wt'),p(u,TM.chain+2,TM.chain+2.5));
  const hv=p(u,TM.heavy_weight,TM.heavy_weight+.5);
  nd.forEach((c,i)=>{const k=(t*.45+i/6)%1,x=(1-k)*(1-k)*270+2*k*(1-k)*460+k*k*650,y=(1-k)*(1-k)*360+2*k*(1-k)*220+k*k*490;
    c.setAttribute('cx',x.toFixed(1));c.setAttribute('cy',y.toFixed(1));c.setAttribute('opacity',(hv*(k<.85?1:(1-k)/.15)).toFixed(2))});
  rise($('nrgL'),hv); rise($('cmp'),p(u,TM.heavy_weight+5.3,TM.heavy_weight+5.8));
  bars2.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.heavy_weight+5.6+i*.2,TM.heavy_weight+5.9+i*.2)));

  rise($('mir'),p(u,TM.woman_mirror-2.2,TM.woman_mirror-1.7)); rise($('wom'),p(u,TM.woman_mirror,TM.woman_mirror+.5));
  rise($('bub'),p(u,TM.woman_mirror+1.5,TM.woman_mirror+2));
  $('ws').setAttribute('x2',(716+234*p(u,TM.speech_bubble,TM.speech_bubble+.5)).toFixed(1));
  rise($('w1'),p(u,TM.speech_bubble+1,TM.speech_bubble+1.5)); rise($('card'),p(u,TM.new_card,TM.new_card+.6));

  rise($('bat'),p(u,TM.battery,TM.battery+.5));
  const br=[0,1,2].map(i=>TM.battery+2.6+i*1.6);
  cells.forEach((c,i)=>c.setAttribute('opacity',i?p(u,br[i-1]+.8,br[i-1]+1.1):p(u,TM.battery+.3,TM.battery+.8)));
  tg4.forEach(([g,inn,cr,y],i)=>{rise(g,p(u,TM.battery+.5+i*.3,TM.battery+1+i*.3));cr.setAttribute('opacity',p(u,br[i],br[i]+.2));inn.setAttribute('opacity',1-.6*p(u,br[i],br[i]+.4));
    const k=p(u,br[i],br[i]+.8),d=dots4[i];d.setAttribute('cx',(960-260*k).toFixed(1));d.setAttribute('cy',(y+40+(450-y-40)*k).toFixed(1));d.setAttribute('opacity',k>0&&k<1?1:0)});
  $('glowR').setAttribute('opacity',(p(u,TM.glow,TM.glow+.5)*(.55+.45*Math.sin(t*4))).toFixed(2));
  rise($('easier'),p(u,TM.glow+.4,TM.glow+1));

  // slip: stumble, judge strikes, hand stops it, get back up
  const oh=p(u,TM.open_hand+1,TM.open_hand+2), fl=p(u,TM.fallen_figure,TM.fallen_figure+.6);
  $('fig').setAttribute('transform','translate(420 700) rotate('+(-75*fl*(1-oh)).toFixed(1)+')');
  rise($('slipL'),p(u,TM.fallen_figure+.4,TM.fallen_figure+.9)*(1-oh)); rise($('upL'),oh);
  rise($('sb'),p(u,TM.fallen_figure+3,TM.fallen_figure+3.5)*(1-p(u,TM.open_hand,TM.open_hand+.5)));
  $('judge').setAttribute('opacity',(p(u,TM.gavel,TM.gavel+.5)*(1-.45*p(u,TM.open_hand,TM.open_hand+.6))).toFixed(2));
  const ga=(u>=TM.gavel&&u<TM.open_hand)?35*(1-Math.pow(Math.abs(Math.sin(t*3)),3)):35;
  $('gav').setAttribute('transform','translate(1460 500) rotate('+ga.toFixed(1)+')');
  rise($('hand'),p(u,TM.open_hand,TM.open_hand+.5)); rise($('forg'),p(u,TM.open_hand+.5,TM.open_hand+1.1));

  rise($('tp0'),p(u,TM.old_tape,TM.old_tape+.5)); rise($('tpA'),p(u,TM.old_tape+4.6,TM.old_tape+5)); rise($('tp1'),p(u,TM.old_tape+4.6,TM.old_tape+5.1));
  reels.forEach(([e,cx])=>e.setAttribute('transform','rotate('+((t*120)%360).toFixed(1)+' '+cx+' 315)'));
  rise($('sunG'),p(u,TM.sunrise,TM.sunrise+.5)); $('sun').setAttribute('cy',(500-80*p(u,TM.sunrise,TM.sunrise+2.5)).toFixed(1));
  $('rays6').setAttribute('opacity',p(u,TM.sunrise+2,TM.sunrise+2.6));
  rise($('stepsG'),p(u,TM.stepping,TM.stepping+.5));
  const f=6*p(u,TM.stepping+.3,TM.stepping+3.5),fr=f-Math.floor(Math.min(f,5.999));
  steps.forEach((s,i)=>s.setAttribute('fill',u>=TM.stepping+.3&&f>=i-.05?'var(--gain)':'var(--line)'));
  habT.setAttribute('opacity',f>=5.95?1:0);
  $('stepper').setAttribute('cx',(225+190*f).toFixed(1)); $('stepper').setAttribute('cy',(738-36*f-40*Math.sin(fr*Math.PI)).toFixed(1));
  $('stepper').setAttribute('opacity',p(u,TM.stepping+.2,TM.stepping+.5));

  cards.forEach(([g,r,m],i)=>{rise(g,p(u,TM.four_cards+i*.4,TM.four_cards+i*.4+.5));m.setAttribute('width',(250*(FR7[i]+(1-FR7[i])*p(u,TM.small_heart+3.8,TM.small_heart+6))).toFixed(1))});
  const hb=u>=TM.four_cards+4.2; cards[3][1].setAttribute('stroke',hb?'var(--gain)':'var(--ink)'); cards[3][1].setAttribute('stroke-width',hb?8:4);
  rise($('hrtW'),p(u,TM.small_heart,TM.small_heart+.5));
  $('hrt').setAttribute('transform','translate(240 660) scale('+(1+.07*Math.pow(Math.abs(Math.sin(t*3)),6)).toFixed(3)+')');
  bars7.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.small_heart+.3+i*.15,TM.small_heart+.6+i*.15)));
  rise($('tired'),p(u,TM.small_heart+1.2,TM.small_heart+1.6)); rise($('cnt'),p(u,TM.small_heart+1.8,TM.small_heart+2.4));
  rise($('repl'),p(u,TM.small_heart+3.8,TM.small_heart+4.4));

  rise($('qa'),p(u,TM.notebook,TM.notebook+.5)); rise($('qb'),p(u,TM.notebook+.4,TM.notebook+.9)); rise($('qc'),p(u,TM.notebook+.8,TM.notebook+1.3));
  rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
  nbl.forEach((l,i)=>l.setAttribute('stroke-dashoffset',(180*(1-p(u,TM.notebook+.6+i*.4,TM.notebook+1+i*.4))).toFixed(1)));
  rise($('sun8'),p(u,TM.tomorrow_sun,TM.tomorrow_sun+.6)); $('rays8').setAttribute('transform','rotate('+((t*15)%360).toFixed(1)+' 1320 640)');
  rise($('m8a'),p(u,TM.tomorrow_sun+.5,TM.tomorrow_sun+1)); rise($('m8b'),p(u,TM.tomorrow_sun+2.5,TM.tomorrow_sun+3));