const L=TM.lightbulb;
  $('bulb0').style.fill=u>=L+.3?'var(--gain)':'var(--stage)';
  $('rays').setAttribute('opacity',(p(u,L+.3,L+.8)*(.7+.3*Math.sin(t*3))).toFixed(2));
  drw($('after'),p(u,L+5,L+6.5)); rise($('q0'),p(u,L+6,L+6.5)); rise($('flag0'),p(u,L+6.3,L+6.8));

  PL.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.idea_pile+i*.06,TM.idea_pile+i*.06+.3)));
  rise($('pileL'),p(u,TM.idea_pile+1,TM.idea_pile+1.5));
  $('dust').setAttribute('opacity',p(u,TM.idea_pile+1.5,TM.idea_pile+2.5));
  DU.forEach((d,i)=>d.setAttribute('cy',(400+((t*14+i*53)%380)).toFixed(1)));
  const S=TM.startups;
  SU.forEach((s,i)=>{rise(s[0],p(u,S+i*.3,S+i*.3+.4)); const f=p(u,S+10.8+i*.2,S+11.6+i*.2);
    s[1].setAttribute('transform','rotate('+(ANG[i]*f).toFixed(1)+' '+s[3]+' 700)'); s[2].setAttribute('stroke',f>.5?'var(--loss)':'var(--ink)')});
  rise($('gi'),p(u,S+6,S+6.6)); rise($('na'),p(u,S+10.8,S+11.4));

  rise($('card'),p(u,TM.motto_card,TM.motto_card+.6)); rise($('gearsG'),p(u,TM.gears,TM.gears+.5)); rise($('tang'),p(u,TM.tangled,TM.tangled+.5));
  GR.forEach(([g,q])=>g.setAttribute('transform','translate('+q[0]+' '+q[1]+') rotate('+(t*30*q[5]).toFixed(1)+')'));
  RP.forEach(([e,q],i)=>{const m=Math.sin(t*3+i*2)*14; e.setAttribute('d','M1170 650Q'+((1170+q[0])/2+m).toFixed(1)+' '+((650+q[1])/2-m).toFixed(1)+' '+q[0]+' '+q[1])});

  rise($('chip'),p(u,TM.intel_chip,TM.intel_chip+.5)); rise($('grove'),p(u,TM.andy_grove,TM.andy_grove+.5));
  rise($('gsys'),p(u,TM.andy_grove+.8,TM.andy_grove+1.4)); rise($('badge'),p(u,TM.okr_badge,TM.okr_badge+.6));

  const G=TM.garage_desk,F=TM.founders;
  rise($('gar'),p(u,G,G+.5)); rise($('desk'),p(u,G+.3,G+.8)); rise($('fnd'),p(u,F,F+.5)); rise($('fndT'),p(u,F+.3,F+.8));
  $('barI').setAttribute('width',(640*p(u,F+.6,F+1.8)).toFixed(1)); $('barS').setAttribute('width',(60*p(u,F+2,F+2.8)).toFixed(1));
  TD.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.small_team+i*.03,TM.small_team+i*.03+.3)));
  rise($('teamL'),p(u,TM.small_team+.8,TM.small_team+1.3));

  const P=TM.projector;
  rise($('proj'),p(u,P,P+.6)); rise($('aud'),p(u,P+.8,P+1.3)); rise($('obj'),p(u,P+5.4,P+5.9));
  KR.forEach(([r,w],i)=>r.setAttribute('width',(600*w*p(u,P+6+i*.4,P+7.2+i*.4)).toFixed(1)));
  $('look').setAttribute('opacity',p(u,P+7,P+7.6)*(.6+.4*Math.sin(t*4)));
  rise($('yes'),p(u,TM.handshake,TM.handshake+.5));

  const gc=p(u,TM.growth_line,TM.growth_line+3);
  rise($('axis'),p(u,TM.growth_line-.6,TM.growth_line)); drw($('gcurve'),gc);
  TG.forEach(([c,s])=>c.setAttribute('opacity',gc>=s-.02?1:0));
  rise($('tree'),p(u,TM.many_teams,TM.many_teams+.6)); rise($('root'),p(u,TM.many_teams,TM.many_teams+.6));
  LV.forEach((c,i)=>c.setAttribute('class',u>=TM.many_teams+1.5+i*.1?'gain':'ink'));
  rise($('deliv'),p(u,TM.many_teams+5.4,TM.many_teams+6));

  const M=TM.mirror,C=TM.checklist;
  rise($('isl'),p(u,M,M+.6)); rise($('gapT'),p(u,M+1,M+1.6)*(1-p(u,C,C+.5)));
  ST.forEach((g,i)=>rise(g,p(u,C+i*.4,C+i*.4+.4))); rise($('stL'),p(u,C+1.6,C+2.1));
  rise($('flag7'),p(u,C+4.6,C+5.1));
  const tv=p(u,C+5,C+7.5); $('trav').setAttribute('cx',(440+850*tv).toFixed(1)); $('trav').setAttribute('opacity',u>=C+5?1:0);
  $('trav').setAttribute('class',tv>=1?'gain':'ink');

  const Q=SC[8][0]/K;
  rise($('qa'),p(u,Q+.4,Q+.9)); rise($('qb'),p(u,Q+.8,Q+1.3)); rise($('box'),p(u,Q+1.2,Q+1.7));
  rise($('qc'),p(u,Q+4.6,Q+5.1)); rise($('qd'),p(u,Q+5.2,Q+5.7));
  drw($('tick'),p(u,Q+6,Q+6.8)); rise($('qm'),p(u,Q+6.6,Q+7.1));