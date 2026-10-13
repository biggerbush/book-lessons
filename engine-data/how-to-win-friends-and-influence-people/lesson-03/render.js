const hy=250+250*p(u,TM.fishing_hook,TM.fishing_hook+1.8);
  $('fl').setAttribute('y2',hy.toFixed(1)); $('hk').setAttribute('transform','translate(0 '+hy.toFixed(1)+')');
  $('xs').setAttribute('opacity',p(u,TM.fishing_hook+6,TM.fishing_hook+6.5));
  let w='M1060 470'; for(let x=1060;x<=1480;x+=20)w+='L'+x+' '+(470+5*Math.sin(x/40+t*2)).toFixed(1); $('wv').setAttribute('d',w);
  $('fish').setAttribute('transform','translate('+(1270+120*Math.sin(t*.6)).toFixed(1)+' 720) scale('+(Math.cos(t*.6)>0?-1:1)+' 1)');

  rise($('st'),p(u,TM.strawberries,TM.strawberries+.5)); rise($('rodg'),p(u,TM.fishing_rod,TM.fishing_rod+.5)); rise($('wm'),p(u,TM.worm,TM.worm+.5));

  rise($('ppl2'),p(u,TM.speech_bubble-.8,TM.speech_bubble-.2)); rise($('bub2'),p(u,TM.speech_bubble,TM.speech_bubble+.5));
  rise($('b2a'),p(u,TM.speech_bubble+.6,TM.speech_bubble+1.1)); rise($('b2b'),p(u,TM.speech_bubble+1.8,TM.speech_bubble+2.3));
  $('yawn').setAttribute('ry',(3+11*p(u,TM.yawning_face,TM.yawning_face+.8)*(.6+.4*Math.abs(Math.sin(t*1.5)))).toFixed(1));
  rise($('zz'),p(u,TM.yawning_face+.5,TM.yawning_face+1)); rise($('cld'),p(u,TM.thought_cloud,TM.thought_cloud+.5)); rise($('cap2'),p(u,TM.thought_cloud+.6,TM.thought_cloud+1.2));

  // stubborn calf
  rise($('cf3'),p(u,TM.calf,TM.calf+.6)); rise($('pp'),p(u,TM.push_pull,TM.push_pull+.5)*(1-p(u,TM.housemaid,TM.housemaid+.6)));
  const sp=p(u,TM.push_pull+5.3,TM.push_pull+5.8)*(1-p(u,TM.housemaid+1.5,TM.housemaid+2)), mvk=p(u,TM.housemaid+2.5,TM.housemaid+6.5), sw=(mvk>0&&mvk<1)?10*Math.sin(t*8):0;
  LGX.forEach((x,i)=>{const o=(i<2?-22:22)*sp+(i%2?sw:-sw); $('lg'+i).setAttribute('d','M'+x+' 630L'+(x+o).toFixed(1)+' 716')});
  rise($('bdg'),p(u,TM.push_pull+5.3,TM.push_pull+5.8)*(1-p(u,TM.housemaid,TM.housemaid+.5)));
  rise($('maid'),p(u,TM.housemaid,TM.housemaid+.6)); $('mv').setAttribute('transform','translate('+(550*mvk).toFixed(1)+' 0)');
  rise($('maidA'),p(u,TM.housemaid+.8,TM.housemaid+1.3)*(1-p(u,TM.housemaid+2.5,TM.housemaid+3)));
  rise($('cw'),p(u,TM.housemaid+7.4,TM.housemaid+8));

  rise($('ltr'),p(u,TM.envelope,TM.envelope+.5)); rise($('nph'),p(u,TM.envelope+.6,TM.envelope+1.1));
  rise($('fd'),p(u,TM.five_dollars,TM.five_dollars+.5)); $('bill').setAttribute('opacity',p(u,TM.five_dollars+.6,TM.five_dollars+1.1)*(1-p(u,TM.missing_cash,TM.missing_cash+.6)));
  rise($('lo'),p(u,TM.missing_cash+.4,TM.missing_cash+.9));
  const ek=p(u,TM.missing_cash+1.2,TM.missing_cash+2.6), mc=TM.missing_cash;
  $('env').setAttribute('transform','translate('+(760+490*ek).toFixed(1)+' '+(360+40*ek).toFixed(1)+')'); $('env').setAttribute('opacity',p(u,mc+.8,mc+1.2)*(1-p(u,mc+2.4,mc+2.8)));
  [0,1].forEach(i=>{const a=TM.reply_letters+i*.5; rise($('r'+i),p(u,a,a+.5)); rise($('ps'+i),p(u,TM.reply_letters+5+i*.3,TM.reply_letters+5.5+i*.3))});

  rise($('qcard'),p(u,TM.quote_card,TM.quote_card+.6)); rise($('cw0'),p(u,TM.connect_arrow,TM.connect_arrow+.5)); rise($('rq'),p(u,TM.connect_arrow+1.2,TM.connect_arrow+1.7));
  const lk=p(u,TM.connect_arrow+2,TM.connect_arrow+3); $('lk').setAttribute('stroke-dashoffset',(540*(1-lk)).toFixed(1)); $('lkh').setAttribute('opacity',lk>.95?1:0); rise($('lkl'),p(u,TM.connect_arrow+2.6,TM.connect_arrow+3.1));

  rise($('fc'),p(u,TM.flip_card,TM.flip_card+.5)); rise($('frt'),p(u,TM.report,TM.report+.5));
  const f=p(u,TM.report+3.2,TM.report+4.2), sx=Math.max(Math.abs(Math.cos(Math.PI*f)),.01);
  $('fcI').setAttribute('transform','translate(800 0) scale('+sx.toFixed(3)+' 1) translate(-800 0)'); $('fF').setAttribute('opacity',f<.5?1:0); $('fB').setAttribute('opacity',f<.5?0:1);
  rise($('cal'),p(u,TM.report+.6,TM.report+1.1)); CAL[4][0].setAttribute('stroke',u>=TM.report+1?'var(--loss)':'var(--ink)'); rise($('due'),p(u,TM.report+1,TM.report+1.5));
  const we=u>=TM.weekend; [5,6].forEach(i=>{CAL[i][0].setAttribute('fill',we?'var(--gain)':'var(--stage)'); CAL[i][0].setAttribute('stroke',we?'var(--gain)':'var(--ink)'); CAL[i][1].style.fill=we?'var(--on-gain)':''});
  rise($('free'),p(u,TM.weekend,TM.weekend+.5)); rise($('wk'),p(u,TM.weekend+.3,TM.weekend+.9));

  rise($('hs'),p(u,TM.handshake,TM.handshake+.6)); rise($('scl'),p(u,TM.scale,TM.scale+.5));
  const both=u>=TM.two_smiles, res=u>=TM.scale+.6&&!both, rr=p(u,TM.scale+.6,TM.scale+1.2)*(1-p(u,TM.two_smiles,TM.two_smiles+.8));
  $('armB').setAttribute('d','M980 450L'+(805+150*rr).toFixed(1)+' 450');
  HA.forEach(e=>e.setAttribute('class',both?'gain':'ink')); HB.forEach(e=>e.setAttribute('class',both?'gain':res?'loss':'ink'));
  mouth(MO[0],560,330,both?1:0); mouth(MO[1],1040,330,both?1:res?-1:0);
  const tl=40*p(u,TM.scale+.6,TM.scale+1.4)*(1-p(u,TM.two_smiles,TM.two_smiles+1));
  $('beam').setAttribute('x1',500); $('beam').setAttribute('y1',(550+tl).toFixed(1)); $('beam').setAttribute('x2',1100); $('beam').setAttribute('y2',(550-tl).toFixed(1));
  $('panA').setAttribute('transform','translate(500 '+(550+tl).toFixed(1)+')'); $('panB').setAttribute('transform','translate(1100 '+(550-tl).toFixed(1)+')');
  CO[1].setAttribute('opacity',p(u,TM.two_smiles,TM.two_smiles+.5));
  rise($('lbR'),p(u,TM.scale+.6,TM.scale+1.1)*(1-p(u,TM.two_smiles,TM.two_smiles+.4))); rise($('cap7'),p(u,TM.two_smiles+.6,TM.two_smiles+1.2));

  rise($('qa'),p(u,TM.notepad,TM.notepad+.5)); rise($('qb'),p(u,TM.notepad+.4,TM.notepad+.9)); rise($('np'),p(u,TM.notepad+.2,TM.notepad+.7));
  [0,1,2].forEach(i=>{const a=TM.notepad+4.6+i*.5; $('n'+i).setAttribute('stroke-dashoffset',(170*(1-p(u,a,a+.5))).toFixed(1))});
  rise($('qc'),p(u,TM.notepad+4.6,TM.notepad+5.1)); rise($('lb8'),p(u,TM.notepad+5.2,TM.notepad+5.7));