const o=p(u,TM.open_door,TM.open_door+1.2);
  rise($('mega'),p(u,TM.megaphone,TM.megaphone+.5)*(1-.7*o));
  WV.forEach((w,i)=>w.setAttribute('opacity',(.25+.75*Math.abs(Math.sin(t*5-i*.9))).toFixed(2)));
  $('door').setAttribute('width',(170*(1-.85*o)).toFixed(1)); rise($('guest'),o);

  rise($('qs'),p(u,TM.two_questions,TM.two_questions+.5));
  rise($('tgt'),p(u,TM.target_person,TM.target_person+.5));
  rise($('pic'),p(u,TM.target_person+3,TM.target_person+3.5));
  rise($('evr'),p(u,TM.blank_face,TM.blank_face+.5));

  const dz=p(u,TM.destination,TM.destination+1.5);
  const ang=(1-dz)*(70*Math.sin(t*1.7)+25*Math.sin(t*4.3))+90*dz;
  $('needle').setAttribute('transform','rotate('+ang.toFixed(1)+' 340 520)');
  rise($('cmp'),p(u,TM.compass,TM.compass+.5)); rise($('flag'),p(u,TM.destination,TM.destination+.5));
  const al=p(u,TM.destination+4.5,TM.destination+5.5);
  rise($('chips2'),p(u,TM.destination+3.5,TM.destination+4));
  CP.forEach(([g,y],i)=>g.setAttribute('transform','rotate('+([-18,12,-9][i]*(1-al)).toFixed(1)+' 710 '+y+')'));
  $('arr2').setAttribute('opacity',al); rise($('one'),p(u,TM.destination+5,TM.destination+5.6));

  rise($('mbox'),p(u,TM.mailbox,TM.mailbox+.5));
  $('mflag').setAttribute('transform','rotate('+(180*(1-p(u,TM.mailbox+.6,TM.mailbox+1.4))).toFixed(1)+' 404 520)');
  rise($('trust'),p(u,TM.mailbox+.8,TM.mailbox+1.3));
  const dr=p(u,TM.junk_pile+.5,TM.junk_pile+3), rf=p(u,TM.raised_hand+.8,TM.raised_hand+2);
  $('tbar').setAttribute('width',(400*(.55-.5*dr+.3*rf)).toFixed(1));
  rise($('tburn'),p(u,TM.junk_pile+.8,TM.junk_pile+1.3));
  JK.forEach(([g,x,y,a],i)=>{const k=p(u,TM.junk_pile+i*.3,TM.junk_pile+i*.3+.5);g.setAttribute('transform','translate(0 '+(-260*(1-k)).toFixed(1)+') rotate('+a+' '+x+' '+y+')');g.setAttribute('opacity',k>0?1:0)});
  rise($('jl'),p(u,TM.junk_pile+1,TM.junk_pile+1.5));
  rise($('hand'),p(u,TM.raised_hand,TM.raised_hand+.5));
  $('arm').setAttribute('transform','rotate('+(150-130*p(u,TM.raised_hand+.3,TM.raised_hand+1.1)).toFixed(1)+' 1300 680)');
  rise($('yes'),p(u,TM.raised_hand+1,TM.raised_hand+1.5));

  [0,1,2].forEach(i=>rise($('f'+i),p(u,st(4)+.6+i*.2,st(4)+1.1+i*.2)));
  [TM.calendar,TM.name_tag,TM.puzzle_piece].forEach((a,i)=>rise($('c4'+i),p(u,a,a+.5)));
  const ak=p(u,TM.puzzle_piece+.4,TM.puzzle_piece+1.1);
  $('arw').setAttribute('transform','translate('+(90*(1-ak)).toFixed(1)+' '+(-72*(1-ak)).toFixed(1)+')'); $('arw').setAttribute('opacity',ak>0?1:0);

  rise($('chair'),p(u,TM.empty_chair,TM.empty_chair+.5));
  $('ghost').setAttribute('opacity',(p(u,TM.empty_chair,TM.empty_chair+.5)*(1-p(u,TM.empty_chair+2.6,TM.empty_chair+3.4))).toFixed(2));
  rise($('qm'),p(u,TM.empty_chair+2.8,TM.empty_chair+3.3));
  rise($('nl'),p(u,TM.inbox,TM.inbox+.5)); $('chk').setAttribute('opacity',p(u,TM.inbox+.8,TM.inbox+1.2));
  rise($('pp'),p(u,TM.inbox+3,TM.inbox+3.5));
  PR.forEach((g,i)=>g.setAttribute('opacity',p(u,TM.inbox+3.2+i*.12,TM.inbox+3.5+i*.12)));
  $('prx').setAttribute('opacity',p(u,TM.inbox+5,TM.inbox+5.4));
  rise($('notp'),p(u,TM.shrug,TM.shrug+.5));
  $('sarm').setAttribute('transform','translate(0 '+(-5*Math.abs(Math.sin(t*3))).toFixed(1)+')');

  // promise card, then the seal stamps it as kept
  rise($('pcard'),p(u,TM.handshake,TM.handshake+.5));
  const sk=p(u,TM.handshake+.6,TM.handshake+1.1), ssc=sk+.25*Math.sin(Math.PI*sk);
  $('pseal').setAttribute('opacity',sk>0?1:0);
  $('psealIn').setAttribute('transform','translate(430 510) scale('+ssc.toFixed(3)+') rotate('+(-30*(1-sk)).toFixed(1)+') translate(-430 -510)');
  [0,1,2].forEach(i=>rise($('k6'+i),p(u,TM.handshake+1.2+i*.5,TM.handshake+1.6+i*.5)));
  rise($('kl'),p(u,TM.handshake+2.4,TM.handshake+2.9));
  const cr=p(u,TM.cracked_brick+.4,TM.cracked_brick+1.6);
  BR.forEach(([b,r,c,cx,cy],i)=>{const k=p(u,TM.brick_wall+i*.22,TM.brick_wall+i*.22+.3);
    const dy=r>1?cr*(r-1)*3:0, rot=r>1?cr*(c-2)*(r-1)*.8:0;
    b.setAttribute('opacity',k); b.setAttribute('transform','translate(0 '+(dy-(1-k)*30).toFixed(1)+') rotate('+rot.toFixed(2)+' '+cx+' '+cy+')');
    if(i===7)b.style.fill=u>=TM.cracked_brick?'var(--loss)':'var(--ink)'});
  CRK.setAttribute('opacity',u>=TM.cracked_brick?1:0);
  rise($('brand'),p(u,TM.brick_wall+2.9,TM.brick_wall+3.5));

  rise($('cust'),p(u,TM.happy_customer,TM.happy_customer+.5));
  rise($('fr7'),p(u,TM.happy_customer+.6,TM.happy_customer+1.1));
  FR7.forEach((g,i)=>{const on=u>=TM.speech_bubble+1.2+i*.5;for(const e of g.children)e.setAttribute('class',on?'gain':'ink')});
  rise($('bub7'),p(u,TM.speech_bubble,TM.speech_bubble+.5));
  DOT.forEach((d,i)=>d.setAttribute('cy',(410-5*Math.abs(Math.sin(t*4-i*.7))).toFixed(1)));
  const rv=p(u,TM.ripple_rings,TM.ripple_rings+.5);
  RG.forEach((e,i)=>{const r=(t*.4+i/3)%1;e.setAttribute('rx',(60+460*r).toFixed(1));e.setAttribute('ry',(30+230*r).toFixed(1));e.setAttribute('opacity',(rv*(1-r)).toFixed(2))});
  rise($('earn'),p(u,TM.ripple_rings+4.6,TM.ripple_rings+5.2));

  const s8=st(8);
  rise($('qa'),p(u,s8+.4,s8+.9)); rise($('qb'),p(u,s8+.8,s8+1.3));
  rise($('qc'),p(u,s8+5.8,s8+6.3)); rise($('ch8'),p(u,s8+6.2,s8+6.7)); rise($('qd'),p(u,s8+6.8,s8+7.3));
  const k1=p(u,s8+1,s8+3), k2=p(u,s8+3,s8+4.8);
  $('w1').setAttribute('stroke-dashoffset',(180*(1-k1)).toFixed(1)); $('w2').setAttribute('stroke-dashoffset',(140*(1-k2)).toFixed(1));
  $('pcl').setAttribute('transform',k1<1?'translate('+(1230+180*k1).toFixed(1)+' 300)':'translate('+(1230+140*k2).toFixed(1)+' 350)');