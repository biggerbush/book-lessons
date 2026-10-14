R(T0,u,TM.marketer,.6); R(T1,u,TM.marketer+1.4);
const sw=p(u,TM.marketer+4.2,TM.marketer+4.8); ASM.forEach(e=>e.setAttribute('opacity',1-sw)); REAL.forEach(e=>e.setAttribute('opacity',sw));

R('mir',u,TM.mirror); R('them',u,TM.other_person); R('cl1',u,TM.thought_cloud); R('cl2',u,TM.thought_cloud+.8);
R('gap',u,TM.thought_cloud+2); R('n1',u,TM.thought_cloud+5.4); R('n2',u,TM.thought_cloud+7.9);

R('drl',u,TM.drill); R('shop',u,TM.hardware_shop); CH2.forEach((c,i)=>R(c,u,TM.hardware_shop+1.2+i*.9));
R('cust',u,TM.hole); R('hb',u,TM.hole+.8); $('dx').setAttribute('opacity',(.6*p(u,TM.hole+.5,TM.hole+1)).toFixed(2));
$('holeC').setAttribute('class',u>=TM.hole+3?'gain':'ink'); R('cap2',u,TM.hole+3);

const r3=[SC[3][0]/K+.2,TM.shelf+1.5,TM.tidy_room,TM.proud_face]; let dep=0;
RW.forEach((g,i)=>{R(g,u,r3[i],.6); if(i)dep+=p(u,r3[i]-.3,r3[i]+.5)});
$('shaft').setAttribute('d','M200 230V'+(290+140*dep).toFixed(1));

R('gl',u,TM.glasses); WC.forEach((c,i)=>R(c,u,TM.glasses+2.6+i*.8));
R('pitchG',u,TM.two_people); R('pa',u,TM.two_people+.2); R('pb',u,TM.two_people+.4); R('bA',u,TM.two_people+2); R('bB',u,TM.two_people+2.5);
$('wallL').setAttribute('opacity',p(u,TM.filter,TM.filter+.5)); R('fcap',u,TM.filter+.5);
const on=p(u,TM.two_people+.8,TM.two_people+1.3), fl=u>=TM.filter;
DT.forEach((d,i)=>{const f=((t*.5+(i%3)/3)%1+1)%1; let x,o=on*(f<.1?f/.1:1);
  if(i<3){x=700-330*f; o*=f>.9?(1-f)/.1:1}
  else if(!fl){x=900+330*f; o*=f>.9?(1-f)/.1:1}
  else if(f<.6){x=900+310*f/.6}else{x=1210-220*(f-.6)/.4; o*=1-(f-.6)/.4}
  d.setAttribute('cx',x.toFixed(1)); d.setAttribute('opacity',o.toFixed(2)); d.setAttribute('class',i<3?'gain':fl?'loss':'ink')});

R('lp',u,TM.debate); R('nox',u,TM.debate+5); R('rp',u,TM.puzzle_piece);
$('pmove').setAttribute('transform','translate(0 '+(-130*(1-p(u,TM.puzzle_piece+4.6,TM.puzzle_piece+5.6))).toFixed(1)+')');
R('mcap',u,TM.puzzle_piece+5.6);

R('drl6',u,TM.two_buyers); R('rent',u,TM.two_buyers+.6); R('home',u,TM.two_buyers+.9); R('arr6',u,TM.two_buyers+1.2);
R('cR',u,TM.renter); R('sR',u,TM.renter+4.2); R('cH',u,TM.homeowner); R('sH',u,TM.homeowner+5.8);

R('nb',u,TM.notebook); R('lis',u,TM.notebook+1); R('qm',u,TM.question_mark);
QC.forEach((c,i)=>R(c,u,TM.question_mark+.6+i*1.8));
const a7=TM.question_mark+6.2; R('qlinks',u,a7); R('ys',u,a7+.4); R('cap7',u,a7+.6);
NL.forEach((l,i)=>l.setAttribute('stroke',u>=a7+.4+i*.15?'var(--gain)':'var(--line)'));
$('qm').firstChild.setAttribute('y',(400+6*Math.sin(t*2)).toFixed(1));

['qa','qb','qc'].forEach((id,i)=>R(id,u,TM.pitch_card+i*.4)); R('crdG',u,TM.pitch_card+1.4);
CB.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.pitch_card+2.5+i*.8,TM.pitch_card+2.9+i*.8)));
R('qd',u,TM.pitch_card+7); $('crdR').setAttribute('stroke',u>=TM.pitch_card+7?'var(--gain)':'var(--ink)');