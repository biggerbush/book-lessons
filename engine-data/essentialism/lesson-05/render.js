const fv=p(u,TM.title_card,TM.title_card+.6); rise($('fun'),fv);
  const ph=(t*.6)%4, fj=Math.floor(ph), ff=ph-fj, isY=fj==3;
  let bx=1290, by=190+110*cl(ff/.35), bo=cl(ff/.08);
  if(!isY){const b=cl((ff-.35)/.4),dir=fj%2?1:-1; bx+=dir*170*b; by-=120*b; bo*=1-b}
  else{by+=350*cl((ff-.35)/.45); bo*=1-cl((ff-.9)/.1)}
  FB.setAttribute('class',isY?'gain':'loss'); FB.setAttribute('cx',bx.toFixed(1)); FB.setAttribute('cy',by.toFixed(1)); FB.setAttribute('opacity',(bo*fv).toFixed(2));

  rise($('door1'),p(u,TM.open_door,TM.open_door+.5)); rise($('cal1'),p(u,TM.open_door+1,TM.open_door+1.5));
  C1.forEach((g,i)=>{const a=TM.pile_tasks+i*.18;rise(g,p(u,a,a+.3))});
  const gr=p(u,TM.pile_tasks+4,TM.pile_tasks+4.5); rise($('great1'),gr);
  $('great1w').setAttribute('transform','translate('+(-24*Math.abs(Math.sin(t*3))*gr).toFixed(1)+' 0)');
  rise($('noroom'),p(u,TM.pile_tasks+4.6,TM.pile_tasks+5.1));

  rise($('siv'),p(u,TM.derek_sivers,TM.derek_sivers+.5)); rise($('bub2'),p(u,TM.speech_bubble,TM.speech_bubble+.5));
  rise($('notyes'),p(u,TM.speech_bubble+5.8,TM.speech_bubble+6.3));
  rise($('cA'),p(u,TM.thumbs_split,TM.thumbs_split+.5)); rise($('cB'),p(u,TM.thumbs_split+.8,TM.thumbs_split+1.3));

  rise($('bar3'),p(u,TM.score_dial,TM.score_dial+.6)); rise($('crit'),p(u,TM.score_dial+5,TM.score_dial+5.5));
  rise($('tick3'),p(u,TM.scale_100,TM.scale_100+.5));
  const zz=p(u,TM.zero_stamp+.3,TM.zero_stamp+1.2);
  MK.forEach(([o,g,c,s],i)=>{const a=TM.scale_100+.6+i*.4;rise(o,p(u,a,a+.4));const x0=200+1200*s,z=i<2?zz:0;
    g.setAttribute('transform','translate('+(x0+(200+i*100-x0)*z).toFixed(1)+' 370)');c.setAttribute('class',i==2?'gain':z>0?'loss':'ink')});
  rise($('rule3'),p(u,TM.zero_stamp,TM.zero_stamp+.5)); rise($('stamp3'),p(u,TM.zero_stamp+1,TM.zero_stamp+1.3));

  const cs=p(u,TM.clear_sky,TM.clear_sky+.8), stt=u>=TM.maybe_cloud+5;
  rise($('lf4'),p(u,TM.tight_rope,TM.tight_rope+.5));
  const jd=stt?5*Math.sin(t*9):0; $('lfig4').setAttribute('transform','translate('+jd.toFixed(1)+' 0)');
  OP4.forEach(([g,s],i)=>{const a=TM.maybe_cloud+i*.4,k=p(u,a,a+.4);rise(g,k);s.setAttribute('opacity',k.toFixed(2));s.setAttribute('x1',(440+jd).toFixed(1));
    s.setAttribute('stroke',stt?'var(--loss)':'var(--muted)');s.setAttribute('stroke-width',stt?5:3);s.setAttribute('stroke-dasharray',stt?'none':'8 8')});
  rise($('st4a'),p(u,TM.maybe_cloud+5,TM.maybe_cloud+5.6)*(1-cs));
  rise($('rt4'),p(u,TM.clear_sky,TM.clear_sky+.5)); rise($('nb4'),p(u,TM.clear_sky+.6,TM.clear_sky+1.1));
  const wk=p(u,TM.clear_sky+.4,TM.clear_sky+2.4);
  $('wk4').setAttribute('transform','translate('+(220*wk).toFixed(1)+' '+(-5*Math.abs(Math.sin(t*7))*(wk>0&&wk<1?1:0)).toFixed(1)+')');
  rise($('st4b'),p(u,TM.clear_sky+.4,TM.clear_sky+1));

  OF.forEach((g,i)=>{const a=TM.job_offers+i*.4;rise(g,p(u,a,a+.4))});
  rise($('ge5'),p(u,TM.job_offers+5,TM.job_offers+5.5)); rise($('pad5'),p(u,TM.notepad,TM.notepad+.5));
  PL.forEach((l,i)=>{const k=p(u,TM.notepad+.8+i*.9,TM.notepad+1.6+i*.9);l.setAttribute('x2',(990+370*k).toFixed(1));l.setAttribute('opacity',k>0?1:0)});

  const s6=SC[6][0]/K;
  rise($('hd6'),p(u,s6+.4,s6+.9)); rise($('st6'),p(u,TM.star_list,TM.star_list+.5)); rise($('rs6'),p(u,TM.check_marks,TM.check_marks+.5));
  const sl=p(u,TM.short_list,TM.short_list+.6);
  R6.forEach(([o,g,mm,res],r)=>{rise(g,p(u,s6+.6+r*.2,s6+1.1+r*.2));
    mm.forEach((e,j)=>{const a=TM.check_marks+r*1.3+j*.15;e.setAttribute('opacity',p(u,a,a+.25))});
    const ra=TM.check_marks+r*1.3+1;rise(res,p(u,ra,ra+.4));o.setAttribute('opacity',r<2?(1-.65*sl).toFixed(2):1)});
  rise($('hl6'),sl); rise($('sl6'),p(u,TM.short_list+.5,TM.short_list+1.1));

  const s7=SC[7][0]/K;
  C7.forEach((c,i)=>{const a=TM.golden_chance+i*.12;c.setAttribute('opacity',(p(u,s7,s7+.4)*(1-p(u,a,a+.3))).toFixed(2))});
  rise($('gold7'),p(u,TM.golden_chance+2.4,TM.golden_chance+3));
  rise($('mny7'),p(u,TM.full_effort,TM.full_effort+.5)); rise($('few7'),p(u,TM.full_effort+1.2,TM.full_effort+1.6));
  const fk=p(u,TM.full_effort+1.5,TM.full_effort+2.5);
  $('fb0').setAttribute('height',(360*fk).toFixed(1)); $('fb0').setAttribute('y',(700-360*fk).toFixed(1));
  $('fb1').setAttribute('height',(300*fk).toFixed(1)); $('fb1').setAttribute('y',(700-300*fk).toFixed(1));
  rise($('ef7'),p(u,TM.full_effort+3,TM.full_effort+3.6));

  rise($('qa'),p(u,TM.pen_paper,TM.pen_paper+.5)); rise($('qb'),p(u,TM.pen_paper+.4,TM.pen_paper+.9));
  rise($('qc'),p(u,TM.pen_paper+5.8,TM.pen_paper+6.3)); rise($('paper8'),p(u,TM.pen_paper+.8,TM.pen_paper+1.3));
  const lo=u>=TM.pen_paper+5.8; $('sc8').textContent=lo?'< 90':'?'; $('sc8').style.fill=lo?'var(--loss)':'var(--ink)';