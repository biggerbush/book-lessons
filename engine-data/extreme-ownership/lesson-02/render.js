rise($('tcrew'),p(u,TM.title_crew,TM.title_crew+.6));
  [0,1].forEach(k=>$('tb'+k).setAttribute('transform','translate(0 '+(5*Math.sin(t*2+k*2)).toFixed(1)+')'));
  rise($('tlab'),p(u,TM.title_crew+5.8,TM.title_crew+6.4));

  let w='M120 860V770';for(let x=120;x<=1480;x+=40)w+='L'+x+' '+(775+8*Math.sin(x/50+t*2)).toFixed(1);$('sea').setAttribute('d',w+'L1480 860Z');
  rise($('beachg'),p(u,TM.beach,TM.beach+.6));
  rise($('crew1'),p(u,TM.boat_crews,TM.boat_crews+.5));rise($('c7lab'),p(u,TM.boat_crews,TM.boat_crews+.5));
  rise($('hboat'),p(u,TM.heavy_boat,TM.heavy_boat+.5));
  const mv=u>=TM.heavy_boat?6*Math.sin(t*4):0;
  $('march').setAttribute('transform','translate('+(260*p(u,TM.heavy_boat+.5,TM.ranking)).toFixed(1)+' '+mv.toFixed(1)+')');
  rise($('rankg'),p(u,TM.ranking,TM.ranking+.5));
  RB.forEach((r,i)=>r.setAttribute('width',(RW[i]*p(u,TM.ranking+.3+i*.2,TM.ranking+.9+i*.2)).toFixed(1)));

  trace($('l2'),Y2,7*p(u,TM.crew_two,TM.crew_two+3));trace($('l6'),Y6,7*p(u,TM.crew_six,TM.crew_six+3));
  rise($('lab2'),p(u,TM.crew_two,TM.crew_two+.5));rise($('lab6'),p(u,TM.crew_six,TM.crew_six+.5));
  rise($('rest'),p(u,TM.reward,TM.reward+.5));$('zz').setAttribute('opacity',(.55+.45*Math.sin(t*3)).toFixed(2));
  rise($('hurt'),p(u,TM.reward+1.5,TM.reward+2.1));

  rise($('ld2'),p(u,TM.leader_two,TM.leader_two+.5));rise($('ld6'),p(u,TM.leader_six,TM.leader_six+.5));
  $('blame').setAttribute('opacity',p(u,TM.leader_six+1,TM.leader_six+1.6));
  rise($('bub6'),p(u,TM.leader_six+5,TM.leader_six+5.5));

  rise($('inst'),p(u,TM.instructors,TM.instructors+.5));rise($('arrs'),p(u,TM.swap_arrows,TM.swap_arrows+.5));
  const s=p(u,TM.swap_arrows+.8,TM.swap_arrows+3);
  L2.setAttribute('transform','translate('+(420+760*s).toFixed(1)+' '+(380-480*s*(1-s)).toFixed(1)+')');
  L6.setAttribute('transform','translate('+(1180-760*s).toFixed(1)+' 380)');
  rise($('same'),p(u,TM.swap_arrows+4.6,TM.swap_arrows+5.2));rise($('stay'),p(u,TM.swap_arrows+7.6,TM.swap_arrows+8.2));

  rise($('pod1'),p(u,TM.trophy,TM.trophy+.6));
  $('cup').setAttribute('transform','translate(0 '+(u>=TM.trophy?-6*Math.abs(Math.sin(t*3)):0).toFixed(1)+')');
  rise($('pod2'),p(u,TM.second_place,TM.second_place+.6));rise($('sec2'),p(u,TM.second_place+.5,TM.second_place+1.1));
  $('spot').setAttribute('opacity',p(u,TM.spotlight,TM.spotlight+.8));
  rise($('same6'),p(u,TM.spotlight,TM.spotlight+.5));rise($('onlyl'),p(u,TM.spotlight+5,TM.spotlight+5.6));

  const b1=p(u,TM.low_bar,TM.low_bar+1.2),b2=p(u,TM.team_pull+.5,TM.team_pull+2.5),by=320+260*b1-290*b2;
  rise($('sbarg'),p(u,TM.standard_bar,TM.standard_bar+.5));
  $('sbar').setAttribute('y',by.toFixed(1));$('sbar').setAttribute('class',b2>0?'gain':b1>0?'loss':'ink');
  $('sbl').setAttribute('y',(by-16).toFixed(1));$('sbl').textContent=b2>0?'HIGHER STANDARD':b1>0?'NEW NORMAL':'THE STANDARD';
  const ro=p(u,TM.team_pull,TM.team_pull+.5);ROPE.forEach(r=>{r.setAttribute('y2',(by+16).toFixed(1));r.setAttribute('opacity',ro)});
  rise($('quote'),p(u,TM.tolerate_sign,TM.tolerate_sign+.6));
  rise($('lowc'),p(u,TM.low_bar,TM.low_bar+.5));rise($('pullc'),p(u,TM.team_pull,TM.team_pull+.5));

  rise($('mir'),p(u,TM.mirror,TM.mirror+.6));
  rise($('clip'),p(u,TM.clipboard,TM.clipboard+.5));rise($('askq'),p(u,TM.clipboard+.6,TM.clipboard+1.2));
  rise($('stp'),p(u,TM.steps_up,TM.steps_up+.5));
  [0,1,2].forEach(i=>rise($('st'+i),p(u,TM.steps_up+.4+i*1.2,TM.steps_up+.9+i*1.2)));
  const cs=3*p(u,TM.steps_up+.4,TM.steps_up+4),ci=Math.min(2,Math.floor(cs)),cf=cs-ci,A=CP[ci],B=CP[ci+1];
  $('clm').setAttribute('cx',(A[0]+(B[0]-A[0])*cf).toFixed(1));$('clm').setAttribute('cy',(A[1]+(B[1]-A[1])*cf-40*Math.sin(Math.PI*cf)).toFixed(1));
  $('clm').setAttribute('opacity',p(u,TM.steps_up,TM.steps_up+.5));

  rise($('qt'),p(u,TM.question_mark,TM.question_mark+.5));rise($('qm'),p(u,TM.question_mark,TM.question_mark+.5));
  $('qbar').setAttribute('y',(600-260*p(u,TM.question_mark+.5,TM.question_mark+2.5)+4*Math.sin(t*2)).toFixed(1));
  rise($('qa'),p(u,TM.question_mark+4,TM.question_mark+4.5));rise($('qb'),p(u,TM.question_mark+4.4,TM.question_mark+4.9));rise($('qc'),p(u,TM.question_mark+4.8,TM.question_mark+5.3));