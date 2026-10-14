rise($('tLone'),p(u,TM.lone_person,TM.lone_person+.6));
  TC.forEach((g,i)=>rise(g,p(u,TM.crowd+i*.2,TM.crowd+i*.2+.5)));

  const B=TM.thought_bubble,Q=TM.quote_card;
  rise($('qPw'),p(u,B,B+.5)); rise($('qBub'),p(u,B+.4,B+.9)); rise($('qQ'),p(u,B+3.4,B+3.9));
  rise($('qCard'),p(u,Q,Q+.6));
  const qy=p(u,Q+6.1,Q+6.7),qn=p(u,Q+9.9,Q+10.5); rise($('qY'),qy); rise($('qN'),qn);
  $('qP').setAttribute('transform','translate('+(30*qy-70*qn).toFixed(1)+' 0)');

  rise($('cTip'),p(u,TM.iceberg,TM.iceberg+.5)); rise($('cBase'),p(u,TM.iceberg+5.3,TM.iceberg+5.9));
  cards.forEach((g,i)=>{const a=TM.closet+i*1.5; rise(g,p(u,a,a+.5)); links[i].setAttribute('opacity',p(u,a,a+.5))});
  rise($('cCap'),p(u,TM.closet+6.2,TM.closet+6.8));

  const G=TM.two_groups;
  $('wA').setAttribute('stroke-dasharray',(1257*p(u,TM.circle,TM.circle+1.2)).toFixed(0)+' 1300');
  $('wA').style.stroke=u>=G+8?'var(--gain)':'var(--ink)';
  rise($('wAin'),p(u,TM.circle+.4,TM.circle+.9)); rise($('wOut'),p(u,TM.circle+2.2,TM.circle+2.7));
  rise($('wB'),p(u,G,G+.5)); rise($('wNorm'),p(u,G+1,G+1.5)); rise($('wNot'),p(u,G+4.6,G+5.1));
  $('wNotS').setAttribute('x2',(116+450*p(u,G+5.4,G+6)).toFixed(0)); rise($('wThis'),p(u,G+8,G+8.5));

  const S=TM.signpost,R=TM.ripple;
  rise($('nPost'),p(u,S,S+.5)); rise($('nOldW'),p(u,S,S+.5)); rise($('nGrp'),p(u,S+.6,S+1.1));
  const nn=p(u,S+5.8,S+6.4); rise($('nNew'),nn);
  const oldDim=nn>.5;
  $('nOldP').style.stroke=oldDim?'var(--line)':'var(--ink)';
  $('nOldT').style.fill=oldDim?'var(--muted)':'var(--ink)';
  ND.forEach(q=>q[0].setAttribute('class',u>=R+q[1]?'gain':'ink'));
  NR.forEach((c,k)=>{const ph=(Math.max(0,u-R)*.6+k*.5)%1; c.setAttribute('r',(20+180*ph).toFixed(1)); c.setAttribute('opacity',u>=R?((1-ph)*.8).toFixed(2):0)});
  rise($('nSync'),p(u,R+2,R+2.5));

  const F=TM.first_bin;
  HB.forEach((h,i)=>{const n=TM.neighborhood+i*.3,a=i==2?F:(i%2?F+4.5:TM.full_street);
    rise(h[0],p(u,n,n+.5)); rise(h[1],p(u,a,a+.5)); HW[i].style.fill=u>=a?'var(--gain)':'var(--stage)'});
  rise($('hTalk'),p(u,F+.8,F+1.3)); rise($('hCap'),p(u,TM.full_street+.4,TM.full_street+1));

  const w=12*Math.sin(t*2);
  $('lCloth').setAttribute('d','M764 256C820 '+(236+w).toFixed(1)+' 900 '+(276-w).toFixed(1)+' 964 256V370C900 '+(390-w).toFixed(1)+' 820 '+(350+w).toFixed(1)+' 764 370Z');
  rise($('lFlag'),p(u,TM.flag,TM.flag+.5)); rise($('lBox'),p(u,TM.flag+3,TM.flag+3.5));
  $('lArr').setAttribute('opacity',p(u,TM.flag+6,TM.flag+6.5)); rise($('lPeople'),p(u,TM.flag+6,TM.flag+6.6));
  rise($('lBadge'),p(u,TM.badge,TM.badge+.6));

  const N=TM.notebook;
  [N,N+2.5,N+6.2].forEach((a,i)=>{rise($('k'+i),p(u,a,a+.5)); $('kL'+i).setAttribute('width',(760*p(u,a+.4,a+1.6)).toFixed(0))});

  const M=TM.mirror;
  rise($('eMir'),p(u,M,M+.5)); $('eRef').setAttribute('opacity',(.75+.25*Math.sin(t*1.5)).toFixed(2));
  rise($('eA'),p(u,M+.2,M+.7)); rise($('eB'),p(u,M+1.8,M+2.3)); rise($('eC'),p(u,M+2.2,M+2.7)); rise($('eD'),p(u,M+2.6,M+3.1)); rise($('eLab'),p(u,M+3.2,M+3.7));