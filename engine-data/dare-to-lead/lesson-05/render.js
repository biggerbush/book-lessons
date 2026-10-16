const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  R('tpair',TM.two_words,.6);
  const cv=p(u,TM.two_words+1.5,TM.two_words+4);
  TD.forEach(d=>{d[0].setAttribute('cx',(d[1]+(d[3]-d[1])*cv).toFixed(1));d[0].setAttribute('cy',(d[2]+(400-d[2])*cv).toFixed(1));d[0].setAttribute('opacity',(.85*(1-cv)).toFixed(2))});

  R('poster',TM.wall_poster);
  const dim=1-.6*p(u,TM.tangled_map+5,TM.tangled_map+6);
  PW.forEach((e,i)=>{const a=TM.wall_poster+.3+i*.25;e.setAttribute('opacity',(p(u,a,a+.3)*dim).toFixed(2))});
  AR.forEach((g,i)=>{const a=TM.tangled_map+i*.15;g.setAttribute('opacity',p(u,a,a+.3).toFixed(2));g.setAttribute('transform','rotate('+(6*Math.sin(t*1.7+i)).toFixed(1)+' 1150 470)')});
  R('hub',TM.tangled_map); R('chooser',TM.tangled_map); R('nothing',TM.tangled_map+5,.6);

  const cut=p(u,TM.two_circles,TM.two_circles+.8);
  GW.forEach((e,i)=>{const a=TM.value_list+i*.12,kp=KEEP.includes(i);e.setAttribute('opacity',(p(u,a,a+.4)*(kp?1:1-.75*cut)).toFixed(2));e.style.fill=kp&&u>=TM.two_circles?'var(--gain)':''});
  CI.forEach((i,k)=>{const a=TM.circled_words+k*.4;rings[k].setAttribute('stroke-dashoffset',(1-p(u,a,a+.5)).toFixed(3));rings[k].setAttribute('opacity',(u>=a?1:0)*(KEEP.includes(i)?1:1-cut));rings[k].setAttribute('stroke-width',KEEP.includes(i)&&u>=TM.two_circles?9:6)});
  rise($('st1'),p(u,TM.circled_words,TM.circled_words+.5)*(1-p(u,TM.two_circles-.3,TM.two_circles+.1))); R('st2',TM.two_circles);

  const qs=[TM.question_one,TM.question_two,TM.filter_icon];
  qs.forEach((a,i)=>{R('q'+i,a);$('fl'+i).setAttribute('opacity',p(u,a+.3,a+.8).toFixed(2))});
  R('funnel',TM.question_one);
  const sh=p(u,TM.question_one,TM.question_one+.5),mv=p(u,TM.filter_icon+1,TM.filter_icon+2.5),sm=p(u,TM.filter_icon+4.1,TM.filter_icon+5.3);
  let si=0,oi=0;
  FD.forEach((d,i)=>{const s=ST[i];let x,y,r,o;
    if(s<0){const tx2=si?1260:1120;si++;x=d[1]+(tx2-d[1])*mv;y=d[2]+(700-d[2])*mv;r=12+18*mv;o=1;d[0].setAttribute('class',mv>0?'gain':'ink')}
    else{const f=p(u,qs[s]+.6,qs[s]+1.1),cx=oi%2?1260:1120,a=-.3+Math.floor(oi/2)*.85;oi++;o=1-.8*f;
      x=d[1]+(cx+50*Math.cos(a)-d[1])*sm;y=d[2]+(700+50*Math.sin(a)-d[2])*sm;r=12-3*sm;o=o+(.6-o)*sm}
    d[0].setAttribute('cx',x.toFixed(1));d[0].setAttribute('cy',y.toFixed(1));d[0].setAttribute('r',r.toFixed(1));d[0].setAttribute('opacity',(o*sh).toFixed(2))});
  R('fit',TM.filter_icon+4.1,.6);

  R('brene',TM.brene_figure); R('fc',TM.faith_courage); R('comp',TM.compass);
  const cs=p(u,TM.compass+1,TM.compass+3),ang=(1-cs)*(60*Math.sin(t*2.1)+25)+cs*3*Math.sin(t*1.2);
  $('needle').setAttribute('transform','rotate('+ang.toFixed(1)+' 1000 470)');
  const bz=p(u,TM.compass+7.8,TM.compass+8.6);
  NZ.forEach((e,i)=>{let d='';for(let x=1270;x<=1470;x+=20)d+=(x===1270?'M':'L')+x+' '+(300+i*64+8*Math.sin(x/17+t*3+i)).toFixed(1);e.setAttribute('d',d);e.setAttribute('opacity',(.5*bz).toFixed(2))});
  R('blur',TM.compass+7.8,.6);

  R('k0',TM.action_cards);
  CK.forEach((g,i)=>{const a=TM.action_cards+4.6+i*.6;rise(g,p(u,a,a+.4))});
  R('k1',TM.slippery_slope);
  const bc=(t%2.4)/2.4,be=bc*bc;
  $('ball').setAttribute('cx',(640+320*be+.631*22).toFixed(1)); $('ball').setAttribute('cy',(380+260*be-.776*22).toFixed(1)); $('ball').setAttribute('opacity',(bc<.85?1:1-(bc-.85)/.15).toFixed(2));
  R('k2',TM.memory_frame);

  R('meet',TM.tense_meeting); R('bub',TM.tense_meeting+1);
  $('tense').setAttribute('opacity',(p(u,TM.tense_meeting+1,TM.tense_meeting+1.5)*(.55+.45*Math.sin(t*7))).toFixed(2));
  R('scl',TM.scale);
  const ta=14*p(u,TM.scale+.8,TM.scale+2),cr=Math.cos(ta*Math.PI/180)*200,sr=Math.sin(ta*Math.PI/180)*200;
  $('beam').setAttribute('transform','rotate('+ta.toFixed(2)+' 1150 280)');
  $('panL').setAttribute('transform','translate('+(1150-cr).toFixed(1)+' '+(280-sr).toFixed(1)+')');
  $('panR').setAttribute('transform','translate('+(1150+cr).toFixed(1)+' '+(280+sr).toFixed(1)+')');
  R('tm',TM.team_circle);
  TP.forEach((g,i)=>{const a=TM.team_circle+.4+i*.25;rise(g,p(u,a,a+.4))});
  $('tline').setAttribute('opacity',p(u,TM.team_circle+2,TM.team_circle+2.6).toFixed(2));

  R('qa',TM.pen_paper); R('qb',TM.pen_paper+1.6); R('qc',TM.pen_paper+4.2); R('qm',TM.pen_paper+5); R('ppr',TM.pen_paper,.4);
  PB.forEach((b,i)=>{const a=TM.pen_paper+i*.12;b.setAttribute('opacity',(p(u,a,a+.3)*(K7.includes(i)?1:1-.6*p(u,TM.pen_paper+1.8,TM.pen_paper+2.4))).toFixed(2));b.setAttribute('fill',K7.includes(i)&&u>=TM.pen_paper+1.8?'var(--gain)':'var(--ink)')});
  R7.forEach((e,k)=>{const a=TM.pen_paper+1.6+k*.4;e.setAttribute('stroke-dashoffset',(1-p(u,a,a+.5)).toFixed(3));e.setAttribute('opacity',u>=a?1:0)});
  $('pen').setAttribute('transform','translate('+(1395+6*Math.sin(t*2)).toFixed(1)+' '+(640+4*Math.cos(t*2.6)).toFixed(1)+')');
  $('pen').setAttribute('opacity',p(u,TM.pen_paper,TM.pen_paper+.5).toFixed(2));