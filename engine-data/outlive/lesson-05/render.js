rise($('elder'),p(u,TM.old_self,TM.old_self+.6));
  const ky=76-136*p(u,TM.old_self+1.4,TM.old_self+3.8);
  $('kid').setAttribute('transform','translate(0 '+ky.toFixed(1)+')');
  $('arm0').setAttribute('d','M1185 500L1312 '+(610+ky).toFixed(0));
  rise($('yes'),p(u,TM.old_self+5.4,TM.old_self+5.9));

  rise($('ath'),p(u,TM.athlete,TM.athlete+.5)); rise($('ten0'),p(u,TM.athlete+.8,TM.athlete+1.3));
  rise($('cd'),p(u,TM.athlete+4.2,TM.athlete+4.7));
  cards.forEach(([g,r,tx],i)=>{rise(g,p(u,TM.athlete+.8+i*.15,TM.athlete+1.2+i*.15));const on=u>=TM.event_list+.5+i*.35;
    r.setAttribute('fill',on?'var(--gain)':'var(--stage)');r.setAttribute('stroke',on?'var(--gain)':'var(--ink)');tx.style.fill=on?'var(--on-gain)':'var(--ink)'});
  rise($('ten'),p(u,TM.event_list,TM.event_list+.6));

  rise($('ev0'),p(u,TM.stairs,TM.stairs+.5));
  rise($('ev1'),p(u,TM.groceries,TM.groceries+.5));
  rise($('ev2'),p(u,TM.suitcase,TM.suitcase+.5));
  rise($('ev3'),p(u,TM.floor_rise,TM.floor_rise+.5));
  const st=Math.floor((t*1.5)%4); $('climb').setAttribute('cx',192+60*st); $('climb').setAttribute('cy',470-55*st);
  $('bags').setAttribute('transform','translate(0 '+(6*Math.sin(t*4)).toFixed(1)+')');
  $('case').setAttribute('transform','translate(0 '+(-145*ease(cl(((t*.4)%1)/.6))).toFixed(1)+')');
  rise($('mine'),p(u,TM.floor_rise+5.4,TM.floor_rise+6));

  rise($('catch'),p(u,TM.decline_line-1.7,TM.decline_line-1.2));
  $('tgt').setAttribute('opacity',p(u,TM.decline_line,TM.decline_line+.6));
  $('dl').setAttribute('stroke-dashoffset',(810*(1-p(u,TM.decline_line,TM.decline_line+2))).toFixed(1));
  rise($('pts'),p(u,TM.decline_line+4.2,TM.decline_line+4.7)); rise($('lt'),p(u,TM.decline_line+4.4,TM.decline_line+4.9));
  $('gl').setAttribute('stroke-dashoffset',(800*(1-p(u,TM.heavy_box,TM.heavy_box+2))).toFixed(1));
  $('band').setAttribute('opacity',p(u,TM.heavy_box+1.8,TM.heavy_box+2.4));
  $('brace').setAttribute('opacity',p(u,TM.heavy_box+2,TM.heavy_box+2.4)); rise($('hb'),p(u,TM.heavy_box+2.2,TM.heavy_box+2.7));

  rise($('gk'),p(u,TM.toddler,TM.toddler+.5)); rise($('lifter'),p(u,TM.toddler+4.6,TM.toddler+5.1)); rise($('more'),p(u,TM.toddler+4.8,TM.toddler+5.3));
  PL.forEach((e,j)=>{const a=TM.toddler+5+(j>>1)*.3;e.setAttribute('opacity',p(u,a,a+.3))});
  rise($('back'),p(u,TM.arrow_back,TM.arrow_back+.6)); $('arw').setAttribute('stroke-dashoffset',(-(t*40)%24).toFixed(1));

  rise($('p0'),p(u,TM.grip_hand,TM.grip_hand+.5)); rise($('p1'),p(u,TM.dead_hang,TM.dead_hang+.5)); rise($('p2'),p(u,TM.farmer_carry,TM.farmer_carry+.5));
  const fs=1+.05*Math.sin(t*5); $('fist').setAttribute('transform','translate(350 445) scale('+fs.toFixed(3)+') translate(-350 -445)');
  $('hang').setAttribute('transform','rotate('+(2*Math.sin(t*1.5)).toFixed(2)+' 800 340)');
  $('ring').setAttribute('stroke-dashoffset',(213.6*(1-(t*.25)%1)).toFixed(1));
  const ls=18*Math.sin(t*4); FL.setAttribute('d','M1250 479L'+(1250-ls).toFixed(1)+' 640M1270 479L'+(1270+ls).toFixed(1)+' 640');

  rise($('alone'),p(u,TM.balance-2.2,TM.balance-1.7)); rise($('bal'),p(u,TM.balance,TM.balance+.5));
  $('sway').setAttribute('transform','rotate('+(3*Math.sin(t*1.6)).toFixed(2)+' 440 640)');
  rise($('fallg'),p(u,TM.falling,TM.falling+.5));
  $('tip').setAttribute('transform','rotate('+(55*p(u,TM.falling+.6,TM.falling+1.4)).toFixed(1)+' 1100 640)');
  rise($('mat'),p(u,TM.falling+3,TM.falling+3.6));

  rise($('tr'),p(u,TM.trainee,TM.trainee+.5)); rise($('flag'),p(u,TM.trainee+1,TM.trainee+1.5));
  const td=p(u,TM.trainee+1.2,TM.trainee+1.8); TD.forEach((c,i)=>{c.setAttribute('cx',(320+(i*175+t*60)%1040).toFixed(1));c.setAttribute('opacity',td)});
  [0,1,2].forEach(i=>rise($('mv'+i),p(u,TM.barbell+i*.6,TM.barbell+i*.6+.5)));
  rise($('jar'),p(u,TM.barbell+5,TM.barbell+5.5)); rise($('dep'),p(u,TM.barbell+5,TM.barbell+5.6));
  CO.forEach((c,i)=>{const a=TM.barbell+5.4+i*.35;rise(c,p(u,a,a+.3))});

  rise($('qa'),p(u,TM.notepad,TM.notepad+.5)); rise($('qb'),p(u,TM.notepad+.4,TM.notepad+.9));
  rise($('pad'),p(u,TM.notepad+.2,TM.notepad+.7));
  TK.forEach((k,i)=>k.setAttribute('opacity',p(u,TM.notepad+1+i*.6,TM.notepad+1.3+i*.6)));
  rise($('qc'),p(u,TM.notepad+4.2,TM.notepad+4.7)); rise($('qd'),p(u,TM.notepad+4.6,TM.notepad+5.1)); rise($('qm'),p(u,TM.notepad+5.2,TM.notepad+5.7));