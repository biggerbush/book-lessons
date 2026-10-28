const k0=p(t,.5,8),sy=260+120*k0,sw=110*(390-sy)/154;
  $('sandT').setAttribute('points',(1340-sw).toFixed(1)+','+sy.toFixed(1)+' '+(1340+sw).toFixed(1)+','+sy.toFixed(1)+' 1340,388');
  $('sandB').setAttribute('points','1255,540 1425,540 1340,'+(540-100*k0).toFixed(1));
  $('stream').setAttribute('opacity',k0>0&&k0<1?1:0);
  rise($('hg'),p(u,TM.magic_number,TM.magic_number+.6));
  rise($('n10kG'),p(u,TM.magic_number+3.8,TM.magic_number+4.3)); $('n10k').textContent=vFmt(10000*p(u,TM.magic_number+3.8,TM.magic_number+5.3));

  rise($('acad'),p(u,TM.violin_school,TM.violin_school+.5));
  $('stuL').setAttribute('opacity',p(u,TM.violin_school+.6,TM.violin_school+1)*(1-p(u,TM.three_groups,TM.three_groups+.5)));
  vStu.forEach((s,i)=>{const a=TM.violin_school+.6+i*.08,m=p(u,TM.three_groups+i*.1,TM.three_groups+i*.1+1);
    s[0].setAttribute('transform','translate('+(s[2]+(s[4]-s[2])*m).toFixed(1)+' '+(s[3]+(s[5]-s[3])*m).toFixed(1)+')');
    s[0].setAttribute('opacity',p(u,a,a+.4)); s[1].forEach(e=>e.setAttribute('class',i<3&&m>.5?'gain':'ink'))});
  rise($('res'),p(u,TM.researcher,TM.researcher+.5)); rise($('grp'),p(u,TM.three_groups,TM.three_groups+.5));
  rise($('hrs'),p(u,TM.three_groups+5.3,TM.three_groups+5.8));

  rise($('age'),p(u,TM.start_age,TM.start_age+.5));
  [TM.bar_chart,TM.bar_chart+4.5,TM.bar_chart+7.1].forEach((a,i)=>{const b=vBars[i],k=p(u,a,a+1.2);
    b[1].setAttribute('y',(760-b[3]*k).toFixed(1)); b[1].setAttribute('height',(b[3]*k).toFixed(1));
    b[0].setAttribute('opacity',p(u,a,a+.3)); b[2].setAttribute('opacity',p(u,a+.8,a+1.2))});
  vBars[0][2].textContent=vFmt(10000*p(u,TM.bar_chart,TM.bar_chart+1.2));

  rise($('cA'),p(u,TM.naturals,TM.naturals+.5)); rise($('xA'),p(u,TM.naturals+2,TM.naturals+2.4));
  rise($('cB'),p(u,TM.grinders,TM.grinders+.5)); rise($('xB'),p(u,TM.grinders+2,TM.grinders+2.4));
  vSteps.forEach((g,k)=>rise(g,p(u,TM.staircase+k*.6,TM.staircase+k*.6+.4)));
  const sc=Math.min(5,6*p(u,TM.staircase+.4,TM.staircase+4)),kk=Math.round(sc);
  vClm.setAttribute('transform','translate('+(762+sc*125).toFixed(1)+' '+(830-(kk+1)*36-68)+')'); vClm.setAttribute('opacity',p(u,TM.staircase,TM.staircase+.4));
  rise($('mk3'),p(u,TM.staircase+.8,TM.staircase+1.4));

  rise($('club'),p(u,TM.hamburg_club,TM.hamburg_club+.5));
  vBand.forEach((g,i)=>g.setAttribute('transform','translate(0 '+(-6*Math.abs(Math.sin(t*4+i))).toFixed(1)+')'));
  rise($('clk'),p(u,TM.night_clock,TM.night_clock+.5));
  const ck=p(u,TM.night_clock+.4,TM.night_clock+2.4),an=ck*240*Math.PI/180,hx=(920+80*Math.sin(an)).toFixed(1),hy=(380-80*Math.cos(an)).toFixed(1);
  $('sect').setAttribute('d',ck>0?'M920 380L920 300A80 80 0 '+(ck>.75?1:0)+' 1 '+hx+' '+hy+'Z':'M920 380');
  $('hand').setAttribute('x2',hx); $('hand').setAttribute('y2',hy);
  rise($('wk'),p(u,TM.night_clock+2.4,TM.night_clock+2.8));
  vDays.forEach((d,i)=>d.setAttribute('fill',u>=TM.night_clock+2.6+i*.3?'var(--gain)':'var(--stage)'));
  rise($('cntG'),p(u,TM.concert_count,TM.concert_count+.5)); $('cnt').textContent=vFmt(1200*p(u,TM.concert_count,TM.concert_count+1.6));
  rise($('scr'),p(u,TM.concert_count+4.2,TM.concert_count+4.8));

  rise($('sch'),p(u,TM.lakeside,TM.lakeside+.5)); rise($('teen'),p(u,TM.lakeside+.8,TM.lakeside+1.3));
  rise($('term'),p(u,TM.terminal,TM.terminal+.5)); rise($('tlab'),p(u,TM.terminal+1,TM.terminal+1.5));
  vCode.forEach((c,i)=>c.setAttribute('width',(vCW[i]*p(u,TM.code_screen+i*.6,TM.code_screen+i*.6+.6)).toFixed(1)));
  $('cur').setAttribute('opacity',u>=TM.code_screen&&Math.sin(t*6)>0?1:0);
  rise($('moon'),p(u,TM.code_screen+2,TM.code_screen+2.5));

  rise($('door'),p(u,TM.open_door,TM.open_door+.5)); rise($('soloW'),p(u,TM.open_door+.3,TM.open_door+.8));
  rise($('blk'),p(u,TM.time_money,TM.time_money+.5));
  [0,1,2].forEach(i=>rise($('h'+i),p(u,TM.helping_hand+i*.7,TM.helping_hand+i*.7+.4)));
  const op=p(u,TM.helping_hand+2,TM.helping_hand+3.2);
  $('panel').setAttribute('width',(232-210*op).toFixed(1)); $('knob').setAttribute('opacity',op<.4?1:0);
  vSolo.setAttribute('transform','translate('+(190+190*p(u,TM.helping_hand+3.2,TM.helping_hand+4.5)).toFixed(1)+' 650)');
  rise($('ex'),p(u,TM.helping_hand+4.9,TM.helping_hand+5.5));

  rise($('p0'),p(u,TM.tally_marks,TM.tally_marks+.5));
  vTal.forEach((m,j)=>m.setAttribute('opacity',u>=TM.tally_marks+.4+j*.03?1:0));
  rise($('p1'),p(u,TM.calendar,TM.calendar+.5));
  vCells.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+.6+i*.1?'var(--gain)':'var(--stage)'));
  rise($('p2'),p(u,TM.gift_box,TM.gift_box+.5));
  const lf=p(u,TM.gift_box+1,TM.gift_box+2); $('lid').setAttribute('transform','translate(0 '+(-150*lf).toFixed(1)+')'); $('lid').setAttribute('opacity',1-lf);
  $('gclk').setAttribute('transform','translate(0 '+(150*(1-p(u,TM.gift_box+1.6,TM.gift_box+2.6))).toFixed(1)+')');

  rise($('qa'),p(u,TM.question_mark,TM.question_mark+.5)); rise($('qb'),p(u,TM.question_mark+.4,TM.question_mark+.9)); rise($('qc'),p(u,TM.question_mark+.8,TM.question_mark+1.3));
  rise($('q2'),p(u,TM.question_mark+5.3,TM.question_mark+5.8)); rise($('hg8'),p(u,TM.question_mark+1.2,TM.question_mark+1.7));
  const ang=180*Math.floor(t/4)+180*ease(cl((t%4)-3)); $('hg8r').setAttribute('transform','translate(1370 720) rotate('+ang.toFixed(1)+') scale(.5)');