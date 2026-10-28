TH.forEach((h,i)=>rise(h,p(u,TM.roseto_town+.5+i*.4,TM.roseto_town+.9+i*.4)));
  rise($('tHeart'),p(u,TM.roseto_town+7,TM.roseto_town+7.5));
  $('tHP').setAttribute('transform','translate(1220 230) scale('+(.4*beat(t)).toFixed(3)+')');

  rise($('wolf'),p(u,TM.doctor_wolf,TM.doctor_wolf+.5)); rise($('bub1'),p(u,TM.doctor_wolf+2,TM.doctor_wolf+2.5));
  rise($('hearts'),p(u,TM.heart_icon,TM.heart_icon+.5));
  $('rHeart').setAttribute('transform','translate(940 420) scale('+(.6*beat(t)).toFixed(3)+')');
  rise($('italy'),p(u,TM.italy_map,TM.italy_map+.5));
  if(RTL){const pt=RT.getPointAtLength(RTL*p(u,TM.italy_map+.6,TM.italy_map+2.6));$('ship').setAttribute('cx',pt.x.toFixed(1));$('ship').setAttribute('cy',pt.y.toFixed(1))}
  rise($('why'),p(u,TM.heart_icon+3,TM.heart_icon+3.6));

  rise($('sub2'),p(u,TM.chart_deaths-3.4,TM.chart_deaths-2.9)); rise($('chart'),p(u,TM.chart_deaths,TM.chart_deaths+.5));
  const bg=p(u,TM.chart_deaths+.4,TM.chart_deaths+1.6),ha=330*bg,hb=14*bg;
  $('barA').setAttribute('y',(680-ha).toFixed(1)); $('barA').setAttribute('height',ha.toFixed(1));
  $('barB').setAttribute('y',(680-hb).toFixed(1)); $('barB').setAttribute('height',hb.toFixed(1));
  [0,1,2].forEach(i=>rise($('risk'+i),p(u,TM.frying_pan+i*1.2,TM.frying_pan+i*1.2+.5)));
  $('needle').setAttribute('transform','rotate('+(-60+110*p(u,TM.frying_pan+2.6,TM.frying_pan+3.4)+4*Math.sin(t*3)).toFixed(1)+' 1390 395)');
  rise($('sick'),p(u,TM.frying_pan+5.3,TM.frying_pan+5.9));

  rise($('tree'),p(u,TM.family_tree,TM.family_tree+.5));
  const bad=u>=TM.relatives+4.2;
  RLK.forEach((l,j)=>l.setAttribute('opacity',p(u,TM.relatives+j*.3,TM.relatives+j*.3+.6)));
  REL.forEach((c,j)=>{rise(c,p(u,TM.relatives+.3+j*.3,TM.relatives+.8+j*.3));c.setAttribute('class',bad?'loss':'gain')});
  rise($('relNo'),p(u,TM.relatives+4.2,TM.relatives+4.7)); rise($('blood'),p(u,TM.relatives+7.6,TM.relatives+8.2));

  rise($('land'),p(u,TM.nearby_towns-3,TM.nearby_towns-2.4)); rise($('bars'),p(u,TM.nearby_towns,TM.nearby_towns+.4));
  [200,24,200].forEach((h,i)=>{const v=h*p(u,TM.nearby_towns+.3,TM.nearby_towns+1.5);$('bar'+i).setAttribute('y',(530-v).toFixed(1));$('bar'+i).setAttribute('height',v.toFixed(1))});
  rise($('same'),p(u,TM.same_hills,TM.same_hills+.5)); rise($('concl'),p(u,TM.same_hills+4.2,TM.same_hills+4.8));

  rise($('p0'),p(u,TM.street_chat,TM.street_chat+.5)); rise($('p1'),p(u,TM.three_gens,TM.three_gens+.5)); rise($('p2'),p(u,TM.church,TM.church+.5));
  DT.forEach((d,i)=>d.setAttribute('opacity',Math.sin(t*4-i*.9)>0?1:.3));
  let sd='';[320,350].forEach((x,k)=>{sd+='M'+x+' 585';for(let y=580;y>=555;y-=5)sd+='L'+(x+5*Math.sin(y/5+t*3+k)).toFixed(1)+' '+y});$('steam').setAttribute('d',sd);
  G3.forEach((g,i)=>rise(g,p(u,TM.three_gens+.4+i*.4,TM.three_gens+.8+i*.4)));
  CL.forEach((l,i)=>l.setAttribute('opacity',p(u,TM.church+.5+i*.12,TM.church+.9+i*.12)));

  rise($('clubs'),p(u,TM.civic_clubs,TM.civic_clubs+.5));
  $('n22').textContent=Math.round(22*p(u,TM.civic_clubs+.3,TM.civic_clubs+2.6));
  WC.forEach((c,i)=>rise(c,p(u,TM.civic_clubs+.3+i*.1,TM.civic_clubs+.6+i*.1)));
  $('chords').setAttribute('opacity',p(u,TM.civic_clubs+2.6,TM.civic_clubs+3.4));
  rise($('eq'),p(u,TM.equal_houses,TM.equal_houses+.5));
  const sy=1.6-.6*p(u,TM.equal_houses+.8,TM.equal_houses+2); BIG.setAttribute('transform','translate(0 680) scale(1 '+sy.toFixed(3)+') translate(0 -680)');
  const bf=TM.equal_houses+4.5; $('shield').setAttribute('opacity',p(u,bf,bf+.6)); $('stress').setAttribute('opacity',p(u,bf+.4,bf+1));
  const kc=(t*.8)%1,bo=kc<.5?ease(kc/.5):1-ease((kc-.5)/.5);
  AR.forEach((a,i)=>a.setAttribute('d',arr((2*i+1)*Math.PI/4,300-34*bo)));
  rise($('buffer'),p(u,bf+.8,bf+1.4));

  const z=p(u,TM.zoom_out,TM.zoom_out+1.4),sc=2.6-1.6*z,fl=(a,b)=>Math.round(a+(b-a)*z);
  $('vf').setAttribute('d',vfd(fl(600,180),fl(240,220),fl(1000,1420),fl(700,740)));
  $('vf').setAttribute('opacity',p(u,TM.lone_figure,TM.lone_figure+.5));
  rise($('me'),p(u,TM.lone_figure,TM.lone_figure+.5));
  $('zw').setAttribute('transform','translate(800 460) scale('+sc.toFixed(3)+') translate(-800 -460)');
  $('comm').setAttribute('opacity',p(u,TM.zoom_out+1,TM.zoom_out+1.6));
  rise($('oneL'),p(u,TM.lone_figure+.6,TM.lone_figure+1.1)*(1-p(u,TM.zoom_out,TM.zoom_out+.4)));
  rise($('lensL'),p(u,TM.zoom_out+5.7,TM.zoom_out+6.2)); rise($('shape'),p(u,TM.zoom_out+9.1,TM.zoom_out+9.7));

  const s8=SC[8][0]/K;
  rise($('qa'),p(u,s8+.3,s8+.8)); rise($('qb'),p(u,s8+.7,s8+1.2)); rise($('qc'),p(u,s8+1.2,s8+1.7));
  rise($('call'),p(u,TM.phone_call,TM.phone_call+.5)); $('thr').setAttribute('stroke-dashoffset',(-t*30).toFixed(1));