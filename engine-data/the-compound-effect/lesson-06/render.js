const dop=p(u,TM.brain_door+.6,TM.brain_door+1.6);
  rise($('hd'),p(u,TM.brain_door,TM.brain_door+.6)); $('door').setAttribute('width',(76-62*dop).toFixed(1));
  IN.forEach((c,i)=>{const k=(t*.35+i/4)%1;c.setAttribute('cx',(1470-170*k).toFixed(1));c.setAttribute('cy',340+i*18);c.setAttribute('opacity',(dop*Math.min(1,(1-k)*4)).toFixed(2))});

  rise($('pc'),p(u,TM.computer,TM.computer+.5)); rise($('arr1'),p(u,TM.computer+2,TM.computer+2.5)); rise($('outh'),p(u,TM.computer+5,TM.computer+5.5));
  const al=u>=TM.alarm_bell, wr=u>=TM.alarm_bell+5;
  CD.forEach((c,i)=>{const a=TM.tv_screen+i*.6;rise(c[0],p(u,a,a+.4));c[1].setAttribute('stroke',i===0&&al?'var(--loss)':'var(--ink)')});
  PK.forEach((q,i)=>{const k=(t*.25+i/6)%1;q.setAttribute('x',(410+770*k).toFixed(1));q.setAttribute('fill',al&&i%2===0?'var(--loss)':'var(--muted)');q.setAttribute('opacity',p(u,TM.tv_screen+1,TM.tv_screen+1.5))});
  rise($('bell'),p(u,TM.alarm_bell,TM.alarm_bell+.5)); $('bellI').setAttribute('transform','rotate('+(al?10*Math.sin(t*9):0).toFixed(1)+' 190 690)');
  rise($('worst'),p(u,TM.alarm_bell+5,TM.alarm_bell+5.5));
  $('bub').setAttribute('fill',wr?'var(--loss)':'var(--stage)'); $('bubt').textContent=wr?'!':'?'; $('bubt').style.fill=wr?'var(--stage)':'var(--ink)';

  rise($('car'),p(u,TM.car,TM.car+.5)); $('carI').setAttribute('transform','translate(0 '+(2*Math.sin(t*12)).toFixed(1)+')');
  $('rd').setAttribute('stroke-dashoffset',(t*120%70).toFixed(1));
  rise($('uni'),p(u,TM.headphones,TM.headphones+.5)); rise($('lsn'),p(u,TM.headphones+4,TM.headphones+4.6));
  rise($('cal'),p(u,TM.calendar,TM.calendar+.5)); CL.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+.5+i*.07?'var(--gain)':'var(--line)'));

  FD.forEach((g,i)=>{const a=TM.friends_group+i*.2;rise(g,p(u,a,a+.4))});
  FL.forEach(l=>{l.setAttribute('opacity',p(u,TM.friends_group+2.6,TM.friends_group+3.2));l.setAttribute('stroke-dashoffset',(22-(t*30)%22).toFixed(1))});
  rise($('res'),p(u,TM.researcher,TM.researcher+.5)); rise($('pie'),p(u,TM.pie_chart,TM.pie_chart+.5));
  const pk=p(u,TM.pie_chart+.4,TM.pie_chart+2.2), pa=.95*pk*2*Math.PI;
  $('wedge').setAttribute('d',pk<.001?'':'M1060 520L1060 370A150 150 0 '+(pa>Math.PI?1:0)+' 1 '+(1060+150*Math.sin(pa)).toFixed(1)+' '+(520-150*Math.cos(pa)).toFixed(1)+'Z');
  $('pct').textContent=Math.round(95*pk)+'%';

  RW.forEach((r,i)=>{const a=TM.contact_list+i*.25;rise(r[0],p(u,a,a+.4));const b=i<2?TM.stopwatch+.5+i*.3:i<4?TM.stopwatch+3.4+(i-2)*.3:TM.exit_sign;rise(r[3],p(u,b,b+.4))});
  const ex=p(u,TM.exit_sign,TM.exit_sign+.8); RW[4][1].setAttribute('opacity',(1-.6*ex).toFixed(2)); RW[4][2].setAttribute('fill',ex>0?'var(--loss)':'var(--ink)');
  rise($('sw'),p(u,TM.stopwatch,TM.stopwatch+.5)); $('swh').setAttribute('transform','rotate('+(t*90%360).toFixed(1)+' 990 420)');
  rise($('ex'),p(u,TM.exit_sign,TM.exit_sign+.5)); rise($('mt'),p(u,TM.mentor,TM.mentor+.6));

  rise($('roomL'),p(u,TM.messy_room,TM.messy_room+.5)); rise($('lab0'),p(u,TM.messy_room+4,TM.messy_room+4.5));
  rise($('roomR'),p(u,TM.clear_desk,TM.clear_desk+.5)); rise($('lab1'),p(u,TM.clear_desk+1,TM.clear_desk+1.5));
  RG.forEach((g,j)=>{const on=j?p(u,TM.clear_desk+.5,TM.clear_desk+1):p(u,TM.messy_room+4,TM.messy_room+4.5);
    g.forEach((c,k)=>{const f=(t*.5+k/3)%1;c.setAttribute('r',(16+56*f).toFixed(1));c.setAttribute('opacity',((1-f)*on).toFixed(2))})});

  DR.forEach((g,i)=>{const a=TM.drip+i*1.2;rise(g,p(u,a,a+.4))});
  ST.forEach(s=>{s.setAttribute('opacity',p(u,TM.river,TM.river+.6));s.setAttribute('stroke-dashoffset',((-t*40)%32).toFixed(1))});
  rise($('riv'),p(u,TM.river+.8,TM.river+1.3)); $('rfl').setAttribute('stroke-dashoffset',((-t*60)%44).toFixed(1));
  rise($('fork'),p(u,TM.river+5,TM.river+5.5)); rise($('dir'),p(u,TM.river+5.6,TM.river+6.1));

  // challenge: each item gets its own illustrated action
  [0,1,2].forEach(i=>{const a=TM.checklist+i*2.2;rise($('ck'+i),p(u,a,a+.5));rise($('ic'+i),p(u,a,a+.5));$('ckm'+i).setAttribute('stroke-dashoffset',(90*(1-p(u,a+.6,a+1.2))).toFixed(1))});
  const c0=TM.checklist, c1=TM.checklist+2.2, c2=TM.checklist+4.4;
  $('ix0a').setAttribute('stroke-dashoffset',(150*(1-p(u,c0+.6,c0+1))).toFixed(1));
  $('ix0b').setAttribute('stroke-dashoffset',(150*(1-p(u,c0+.9,c0+1.3))).toFixed(1));
  const mv=p(u,c1+.5,c1+1.4); $('you7').setAttribute('transform','translate('+(70*mv).toFixed(1)+' 0)');
  $('spark').setAttribute('opacity',(mv>=1?.6+.4*Math.sin(t*5):0).toFixed(2));
  const cc=p(u,c2+.5,c2+1.3); CLT.forEach((r,i)=>r.setAttribute('opacity',(1-p(u,c2+.5+i*.12,c2+.9+i*.12)).toFixed(2)));
  rise($('plant'),p(u,c2+1.1,c2+1.6)); $('clut').setAttribute('transform','translate('+(40*cc).toFixed(1)+' 0)');
  rise($('notice'),p(u,TM.checklist+7.4,TM.checklist+8));