rise($('cash'),p(u,TM.cash_offer+.4,TM.cash_offer+.9)); rise($('pen'),p(u,TM.cash_offer+3.5,TM.cash_offer+4)); rise($('pick'),p(u,TM.cash_offer+8.2,TM.cash_offer+8.7));
$('pg').setAttribute('transform','translate(1290 572) scale('+(1+.05*Math.sin(t*3)).toFixed(3)+') translate(-1290 -572)');

rise($('cal'),p(u,TM.penny,TM.penny+.6));
cfCells.forEach((c,i)=>{const d=i+1,a=d<=5?TM.penny+1+(TM.day_five-TM.penny-1)*(d-1)/5:d<=20?TM.day_five+1+(TM.day_twenty-TM.day_five-1)*(d-6)/15:1e9,on=u>=a;
  c[0].setAttribute('fill',on?'var(--gain)':'var(--stage)'); c[0].setAttribute('stroke',on?'var(--gain)':'var(--line)'); c[1].style.fill=on?'var(--on-gain)':''});
rise($('g5'),p(u,TM.day_five,TM.day_five+.5)); $('v5').textContent=Math.round(16*p(u,TM.day_five,TM.day_five+1.2))+'¢';
rise($('g20'),p(u,TM.day_twenty,TM.day_twenty+.5)); $('v20').textContent='≈ $'+cfFmt(Math.round(100*p(u,TM.day_twenty,TM.day_twenty+1.4))*50);
rise($('bars'),p(u,TM.day_twenty+4.6,TM.day_twenty+5.1));

const cfE=cfExpo(200,760,1100,500,cl(lin(u,TM.rising_curve,TM.day_thirty_one+.8)));
$('cv').setAttribute('d',cfE[0]); $('tip').setAttribute('cx',cfE[1].toFixed(1)); $('tip').setAttribute('cy',cfE[2].toFixed(1));
rise($('big'),p(u,TM.day_thirty_one,TM.day_thirty_one+.5)); rise($('fin'),p(u,TM.day_thirty_one+5.3,TM.day_thirty_one+5.8)); rise($('qt'),p(u,TM.day_thirty_one+9.5,TM.day_thirty_one+10));

cfFr.forEach((f,i)=>{rise($('f'+i),p(u,TM.three_friends+i*.3,TM.three_friends+i*.3+.5)); const a=[TM.three_friends+4.5,TM.scott,TM.brad][i]; rise(f[1],p(u,a,a+.5));
  const c=i==1&&u>=TM.scott?'gain':i==2&&u>=TM.brad?'loss':'ink'; f[0].forEach(e=>e.setAttribute('class',c))});

const cfK4=p(u,TM.five_months,TM.five_months+2.5);
cfL4.forEach(l=>l[0].setAttribute('d','M160 470L'+(160+700*cfK4).toFixed(1)+' '+(470+l[1]*cfK4).toFixed(1)));
rise($('same'),p(u,TM.five_months,TM.five_months+.5)); rise($('tags'),p(u,TM.five_months+4.2,TM.five_months+4.7));
rise($('sign'),p(u,TM.quit_sign,TM.quit_sign+.5)); rise($('nore'),p(u,TM.quit_sign+.8,TM.quit_sign+1.3));

const cfK1=p(u,TM.month_31,TM.month_31+1.2),cfK2=p(u,TM.scale,TM.scale+1.2);
$('bs').setAttribute('height',(198*cfK1).toFixed(1)); $('bb').setAttribute('y',(520-198*cfK2).toFixed(1)); $('bb').setAttribute('height',(198*cfK2).toFixed(1));
rise($('ls'),p(u,TM.month_31,TM.month_31+.5)); $('vs').textContent='−'+Math.round(33*cfK1)+' lb';
rise($('lb'),p(u,TM.scale,TM.scale+.5)); $('vb').textContent='+'+Math.round(33*cfK2)+' lb';
rise($('ll'),p(u,TM.scale+2.2,TM.scale+2.7));
rise($('gap'),p(u,TM.gap_arrow,TM.gap_arrow+.5)); $('vg').textContent=Math.round(66*p(u,TM.gap_arrow,TM.gap_arrow+1.2))+' lb';
rise($('tiny5'),p(u,TM.gap_arrow+1.5,TM.gap_arrow+2));

cfB6[0].forEach((g,k)=>{const a=TM.formula+.6+k*1.4; rise(g,p(u,a,a+.5))});
cfB6[1].forEach((g,k)=>{const a=TM.reverse_arrow+[.8,1.6,2.4,3.8][k]; rise(g,p(u,a,a+.5))});
rise($('rev'),p(u,TM.reverse_arrow,TM.reverse_arrow+.5)); rise($('all6'),p(u,TM.reverse_arrow+4.5,TM.reverse_arrow+5));

const cfSw=u>=TM.single_moment+4.6;
cfBL.forEach((b,i)=>{const s=TM.future_self+.5+i*.06,k=p(u,s,s+.8),x=320+i*26,bad=i%3==1;
  b.setAttribute('x',(x+(820-x)*k).toFixed(1)); b.setAttribute('y',(640+(108-i*13)*k).toFixed(1));
  b.setAttribute('width',(20+120*k).toFixed(1)); b.setAttribute('height',(20-10*k).toFixed(1));
  b.setAttribute('fill',!cfSw?'var(--ink)':bad?'var(--loss)':'none'); b.setAttribute('stroke',cfSw&&!bad?'var(--gain)':'none');
  b.setAttribute('opacity',p(u,TM.single_moment+1+i*.08,TM.single_moment+1+i*.08+.3))});
rise($('mag'),p(u,TM.single_moment+.3,TM.single_moment+.8));
$('one7').setAttribute('transform','translate(210 580) scale('+(1+.08*Math.sin(t*3)).toFixed(3)+') translate(-210 -580)');
rise($('leg'),p(u,TM.single_moment+4.6,TM.single_moment+5.1));
rise($('arr7'),p(u,TM.future_self,TM.future_self+.6));
rise($('fut'),p(u,TM.future_self+1.5,TM.future_self+2)); rise($('tot'),p(u,TM.future_self+2.5,TM.future_self+3));

rise($('qa'),p(u,TM.your_penny,TM.your_penny+.5)); rise($('qb'),p(u,TM.your_penny+.4,TM.your_penny+.9)); rise($('qc'),p(u,TM.your_penny+.8,TM.your_penny+1.3));
rise($('tiny8'),p(u,TM.your_penny+5.4,TM.your_penny+5.9));
const cfE8=cfExpo(1180,820,280,120,p(u,TM.your_penny+5.4,TM.your_penny+8));
$('cv8').setAttribute('d',cfE8[0]); $('dot8').setAttribute('cx',cfE8[1].toFixed(1)); $('dot8').setAttribute('cy',cfE8[2].toFixed(1));