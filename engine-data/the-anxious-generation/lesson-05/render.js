const R=(e,a,d=.5)=>rise(typeof e=='string'?$(e):e,p(u,a,a+d));
  const D=(e,k)=>$(e).setAttribute('stroke-dashoffset',(1-k).toFixed(3));

  R('tgirl',TM.phone_girl);R('tphone',TM.phone_girl+.4);
  const g0=TM.phone_girl+5.8;$('tgrid').setAttribute('opacity',p(u,g0,g0+.6));
  TH.forEach((h,i)=>{const c=(t*.4+i/3)%1;h.setAttribute('transform','translate('+(1300+i*50)+' '+(220-100*c).toFixed(1)+')');h.setAttribute('opacity',(u>=g0?1-c:0).toFixed(2))});

  const L=TM.two_lines;R('chart',L-.3);D('lb',p(u,L,L+3));D('lg',.43*p(u,L,L+3)+.57*p(u,L+5.8,L+7.6));
  R('lbt',L+2.5);R('lgt',L+7.2);R('hosp',TM.hospital);

  const C=TM.two_circles;R('cA',C);R('cB',C+3);
  const gm=p(u,C+7.5,C+9);$('gcm').setAttribute('cx',(640+220*gm).toFixed(1));$('gcm').setAttribute('opacity',p(u,C+7,C+7.4));
  R('lean',C+7.5);$('cBc').style.stroke=u>=C+8.5?'var(--gain)':'';
  const hk=p(u,TM.hook,TM.hook+.6);$('hk').setAttribute('opacity',hk);$('hk').setAttribute('transform','translate(0 '+(-60*(1-hk)).toFixed(1)+')');
  R('hh',TM.hook);$('hh').setAttribute('class',u>=TM.hook+2.5?'loss':'gain');R('agst',TM.hook+2.5);

  R('ph3',TM.insta_feed-.4);FD.forEach((g,i)=>R(g,TM.insta_feed+i*.4));R('flt',TM.filter_face);
  const F2=TM.filter_face+3;R('cmp',F2);TL.forEach((e,i)=>e.setAttribute('opacity',p(u,F2+i*.02,F2+i*.02+.2)));
  R('sb',TM.scoreboard);HT.forEach((e,i)=>e.setAttribute('opacity',p(u,TM.scoreboard+.4+i*.08,TM.scoreboard+.6+i*.08)));

  const Q=TM.leaked_slide;R('slide',Q);R('stamp',Q+1.5);R('quo',Q+5.3);SF[0].setAttribute('class',u>=Q+5.8?'loss':'ink');
  const H=TM.company_hq;R('hq',H);$('hw').setAttribute('opacity',p(u,H+.5,H+.9));$('lnk').setAttribute('opacity',p(u,H+.8,H+1.3));R('knw',H+.8);

  const Y=TM.schoolyard;R('boys',Y);R('girls5',Y+2.6);R('wsp',TM.whisper);R('wrd',TM.whisper+.5);
  OUT.setAttribute('opacity',(1-.6*p(u,TM.whisper+1.2,TM.whisper+2)).toFixed(2));
  R('gc',TM.group_chat);GH.setAttribute('opacity',(.6+.4*Math.sin(t*4)).toFixed(2));R('home',TM.group_chat+7.8);
  $('hand').setAttribute('transform','rotate('+(t*120%360).toFixed(1)+' 340 770)');

  R('rip',TM.ripples);RG.forEach((c,i)=>{const k=(t*.5+i/3)%1;c.setAttribute('r',(8+46*k).toFixed(1));c.setAttribute('opacity',(1-k).toFixed(2))});
  const N=TM.network_web;R('net',N);R('netl',N+1);
  NC.forEach((c,i)=>c.setAttribute('fill',u>=N+.6+ND[i].d/250*3?'var(--loss)':'var(--muted)'));
  R('str',TM.stranger_msg);
  EV.forEach((e,i)=>{const k=(t*.45+i/3)%1;e.setAttribute('transform','translate('+(1270+100*k).toFixed(1)+' '+(330+110*k).toFixed(1)+')');
    e.setAttribute('opacity',u>=TM.stranger_msg+.6?(k<.85?1:(1-k)/.15).toFixed(2):0)});

  const V=TM.conversation;R('k0',V);R('bq',V+.6);R('ba',V+2.6);R('k1',TM.photo_reveal);
  const dv=p(u,TM.photo_reveal+.8,TM.photo_reveal+3),dx=650+300*dv;
  $('dv').setAttribute('d','M'+dx.toFixed(1)+' 260V560');$('fov').setAttribute('x',dx.toFixed(1));$('fov').setAttribute('width',(950-dx).toFixed(1));
  $('kn1').setAttribute('cx',(900-200*dv).toFixed(1));$('kn2').setAttribute('cx',(860-160*dv).toFixed(1));
  R('k2',TM.park_bench);$('bh').setAttribute('transform','translate(1240 380) scale('+(1+.12*Math.abs(Math.sin(t*2.5))).toFixed(3)+')');

  const M=TM.question_mark;R('qmk',M);R('qm',M+.3);R('qa',M+3);R('qb',M+3.4);R('qc',M+3.8);
  $('qq').setAttribute('transform','translate(0 '+(8*Math.sin(t*2)).toFixed(1)+')');