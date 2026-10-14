const k0=p(u,TM.shrinking_tag+.6,TM.shrinking_tag+4.5);
  $('tag0').setAttribute('transform','translate(1270 320) scale('+(1-.55*k0).toFixed(3)+') rotate('+(3*Math.sin(t*1.2)).toFixed(2)+')');$('tag0').setAttribute('opacity',(1-.5*k0).toFixed(2));
  B0.forEach((b,i)=>{const h=12+(28+i*22)*p(u,TM.shrinking_tag+.3+i*.3,TM.shrinking_tag+4.2);b.setAttribute('height',h.toFixed(1));b.setAttribute('y',(560-h).toFixed(1))});

  R(u,'store1',TM.small_store);R(u,'wal1',TM.walton);PG.forEach((g,i)=>R(u,g,TM.walton+1+i*1.2));R(u,'lp1',TM.low_prices,.6);

  R(u,'wal2',SC[2][0]/K+.3);
  D2.forEach((d,i)=>{const a=TM.store_map+i*.08;rise(d,p(u,a,a+.4));d.setAttribute('class',u>=TM.walton_close+5.4+i*.04?'gain':'ink');L2[i].setAttribute('opacity',(.35*p(u,TM.walton_close+i*.02,TM.walton_close+i*.02+.5)).toFixed(2))});
  const r2=p(u,TM.walton_close,TM.walton_close+.8);$('ring2').setAttribute('r',(60+30*r2+5*Math.sin(t*3)).toFixed(1));$('ring2').setAttribute('opacity',r2);
  R(u,'cap2',TM.walton_close+.5,.6);

  R(u,'why3',SC[3][0]/K+.3);$('why3i').setAttribute('opacity',(1-.85*p(u,TM.successors+5.8,TM.successors+8)).toFixed(2));
  $('wal3').setAttribute('opacity',(1-p(u,TM.empty_chair,TM.empty_chair+1)).toFixed(2));
  S3.forEach((g,i)=>R(u,g,TM.successors+i*.3));I3.forEach((g,i)=>R(u,g,TM.successors+1.5+i*.6));
  R(u,'cap3',TM.successors+5.8,.6);

  const deg=6*p(u,TM.price_tag,TM.price_tag+2)+10*p(u,TM.scale,TM.scale+1.5),ra=deg*Math.PI/180,cx=300*Math.cos(ra),sy=300*Math.sin(ra);
  $('beam4').setAttribute('transform','rotate('+(-deg).toFixed(2)+' 560 340)');
  panL.setAttribute('transform','translate('+(560-cx).toFixed(1)+' '+(340+sy).toFixed(1)+')');panR.setAttribute('transform','translate('+(560+cx).toFixed(1)+' '+(340-sy).toFixed(1)+')');
  tag4.setAttribute('transform','translate(0 55) scale('+(.5+.5*p(u,TM.price_tag,TM.price_tag+2)).toFixed(3)+')');
  R(u,'cap4',TM.scale+.5);R(u,'nw0',TM.headlines);R(u,'nw1',TM.headlines+.7);R(u,'nw2',TM.headlines+5.4);

  DR('base5',p(u,TM.split_line,TM.split_line+.8));R(u,'spl5',TM.split_line+.6);
  DR('what5',p(u,TM.what_arrow,TM.what_arrow+2));$('what5').setAttribute('stroke-width',(8+7*p(u,TM.what_arrow+1.5,TM.what_arrow+3.5)).toFixed(1));R(u,'wl5',TM.what_arrow+1.5);
  const wq=p(u,TM.why_dot+1.5,TM.why_dot+4);DR('why5',p(u,TM.why_dot,TM.why_dot+2));$('why5').setAttribute('stroke-width',(8-5*wq).toFixed(1));$('why5').setAttribute('opacity',(1-.5*wq).toFixed(2));
  R(u,'yl5',TM.why_dot+1.5);R(u,'cap5',TM.why_dot+5,.6);

  R(u,'sub6',SC[6][0]/K+.3);R(u,'org6',TM.founder_icon);
  const fi=p(u,TM.founder_icon,TM.founder_icon+.6);$('glow6').setAttribute('r',(fi*(70+6*Math.sin(t*3))).toFixed(1));
  const mv=p(u,TM.org_chart,TM.org_chart+1.4);
  FL.forEach((g,i)=>{g.setAttribute('transform','translate(0 '+(250*mv).toFixed(1)+')');FN[i].setAttribute('d','M560 362L'+(260+i*100)+' '+(424+250*mv).toFixed(1));FN[i].setAttribute('opacity',(fi*(1-.8*mv)).toFixed(2))});
  MG.forEach((m,i)=>{const a=TM.org_chart+.8+m[1]*.4+i*.05;rise(m[0],.6*p(u,a,a+.4))});
  R(u,'fll6',TM.org_chart+1.2);R(u,'sh6',TM.spreadsheet);
  $('bs6').setAttribute('width',(220*p(u,TM.spreadsheet+.5,TM.spreadsheet+1.5)).toFixed(1));$('bc6').setAttribute('width',(160*p(u,TM.spreadsheet+1,TM.spreadsheet+2)).toFixed(1));
  R(u,'q6',TM.spreadsheet+3);R(u,'cap6',TM.spreadsheet+3.5,.6);

  R(u,'k0',TM.keeper);R(u,'k1',TM.sign_post);R(u,'k2',TM.successor_pick);R(u,'k3',TM.checklist);
  [0,1,2].forEach(i=>$('a7'+i).setAttribute('opacity',(.25+.75*Math.max(0,Math.sin(t*4-i))).toFixed(2)));
  const pk=p(u,TM.successor_pick+1.5,TM.successor_pick+2.5);C7[0].setAttribute('opacity',(1-.65*pk).toFixed(2));C7[2].setAttribute('opacity',(1-.65*pk).toFixed(2));DR('ck7',pk);
  DR('chk7',p(u,TM.checklist+.6,TM.checklist+1.4));R(u,'cap7',TM.checklist+1,.6);

  const s8=SC[8][0]/K;R(u,'ql',s8+.4);R(u,'spk8',s8+1);R(u,'qa',s8+3.8);R(u,'qb',s8+4.2);R(u,'qc',s8+4.6);
  const lv=.5+.5*Math.sin(t*1.5);[0,1,2].forEach(i=>$('w8'+i).setAttribute('opacity',cl(lv*3-i,.12,1).toFixed(2)));