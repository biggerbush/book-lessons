rise($('fgr'),p(u,TM.forager,TM.forager+.6)); rise($('q0'),p(u,TM.forager+3.4,TM.forager+3.9));
  $('sun').setAttribute('r',(44+4*Math.sin(t*1.5)).toFixed(1));

  rise($('cave'),p(u,TM.cave_family,TM.cave_family+.6)); rise($('farr'),p(u,TM.farm_arrow,TM.farm_arrow+.6)); rise($('harq'),p(u,TM.farm_arrow+4.6,TM.farm_arrow+5.2));

  rise($('hd'),p(u,S(2)+.1,S(2)+.6)); rise($('map'),p(u,TM.mental_map+.4,TM.mental_map+1)); rise($('mush'),p(u,TM.mushrooms,TM.mushrooms+.5));
  rise($('trk'),p(u,TM.animal_track,TM.animal_track+.5)); rise($('sea'),p(u,TM.animal_track+1.2,TM.animal_track+1.7)); rise($('knf'),p(u,TM.animal_track+2.8,TM.animal_track+3.3));
  rise($('dep'),p(u,TM.animal_track+5.3,TM.animal_track+5.9));
  $('seaD').setAttribute('cx',(1300+80*Math.cos(t*.8)).toFixed(1)); $('seaD').setAttribute('cy',(330+80*Math.sin(t*.8)).toFixed(1));

  rise($('w0'),p(u,TM.toolkit-.4,TM.toolkit)); S0.forEach((s,i)=>s.setAttribute('opacity',p(u,TM.toolkit+.3+i*.3,TM.toolkit+.6+i*.3)));
  rise($('w1'),p(u,TM.specialist,TM.specialist+.5)); S1[0].setAttribute('fill',u>=TM.specialist+.8?'var(--gain)':'var(--line)');
  $('exs').setAttribute('opacity',p(u,TM.specialist+1.6,TM.specialist+2.2)); rise($('wide'),p(u,TM.specialist+6.2,TM.specialist+6.8));

  rise($('plate'),p(u,TM.berry_basket-.5,TM.berry_basket));
  const ff=p(u,TM.food_circle+3.8,TM.food_circle+4.4);
  FD.forEach((g,i)=>{const k=p(u,TM.berry_basket+i*.6,TM.berry_basket+i*.6+.4); rise(g,i?k:k*(1-.7*ff))});
  FX.setAttribute('opacity',ff); RG.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.food_circle+i*.06,TM.food_circle+i*.06+.3)));
  rise($('fb'),p(u,TM.food_circle+3.8,TM.food_circle+4.4)); rise($('bowl'),p(u,TM.rice_bowl,TM.rice_bowl+.6));

  rise($('clk'),p(u,TM.clock-.3,TM.clock+.2)); rise($('brs'),p(u,TM.clock+.3,TM.clock+.8));
  $('hh').setAttribute('transform','rotate('+(t*20%360).toFixed(1)+' 300 400)'); $('mh').setAttribute('transform','rotate('+(t*120%360).toFixed(1)+' 300 400)');
  $('bf').setAttribute('width',(240*p(u,TM.clock+.8,TM.clock+2)).toFixed(1)); $('bm').setAttribute('width',(480*p(u,TM.clock+.8,TM.clock+2.6)).toFixed(1));
  rise($('kal'),p(u,TM.kalahari,TM.kalahari+.6)); rise($('wk'),p(u,TM.week_chart,TM.week_chart+.5));
  const hk=p(u,TM.week_chart+.2,TM.week_chart+1.6); $('hrs').textContent=Math.round(35*hk)+'–'+Math.round(45*hk);
  DY.forEach((g,i)=>g.setAttribute('opacity',p(u,TM.week_chart+3+i*.25,TM.week_chart+3.3+i*.25)));

  rise($('bandP'),p(u,TM.small_band,TM.small_band+.5)); $('band').setAttribute('transform','translate('+(40*Math.sin(t*.8)).toFixed(1)+' 0)');
  rise($('vilP'),p(u,TM.sick_village,TM.sick_village+.5));
  GM.forEach((c,i)=>{c.setAttribute('opacity',p(u,TM.sick_village+.8+i*.15,TM.sick_village+1+i*.15)); c.setAttribute('r',(9+3*Math.sin(t*3+i)).toFixed(1))});
  rise($('few'),p(u,TM.sick_village+4.6,TM.sick_village+5.2));

  rise($('sto'),p(u,TM.storm,TM.storm+.5)); rise($('bab'),p(u,TM.baby,TM.baby+.5)); rise($('scl'),p(u,TM.scale,TM.scale+.5));
  [0,1,2].forEach(i=>rise($('wt'+i),p(u,TM.scale+.6+i*.5,TM.scale+1+i*.5)));
  const ang=-12*p(u,TM.scale+1.6,TM.scale+3), ra=ang*Math.PI/180, cx=300*Math.cos(ra), cy=300*Math.sin(ra);
  $('beam').setAttribute('transform','rotate('+ang.toFixed(2)+' 1060 300)');
  $('panL').setAttribute('transform','translate('+(1060-cx).toFixed(1)+' '+(300-cy).toFixed(1)+')');
  $('panR').setAttribute('transform','translate('+(1060+cx).toFixed(1)+' '+(300+cy).toFixed(1)+')');
  rise($('bet'),p(u,TM.scale+3,TM.scale+3.6));

  rise($('qa'),p(u,S(8)+.3,S(8)+.8)); rise($('qb'),p(u,S(8)+.7,S(8)+1.2)); rise($('qc'),p(u,S(8)+1.1,S(8)+1.6));
  rise($('qd'),p(u,S(8)+5,S(8)+5.5)); rise($('sky'),p(u,S(8)+5.4,S(8)+6));
  SS.forEach((c,i)=>c.setAttribute('r',(10+3*Math.sin(t*2+i*1.3)).toFixed(1)));