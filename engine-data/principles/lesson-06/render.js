const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  R('mtg',TM.meeting_room);
  WV.forEach((w,i)=>w.setAttribute('opacity',(p(u,TM.meeting_room+.4,TM.meeting_room+1)*(.35+.65*Math.abs(Math.sin(t*3-i*.8)))).toFixed(2)));
  R('loudx',TM.meeting_room+4.2);

  R('hA',TM.brain_pair);R('hB',TM.brain_pair+.3);R('bp',TM.big_picture);R('dl',TM.detail_lens);R('yy',TM.detail_lens+4.6);
  $('mg').setAttribute('transform','translate('+(10*Math.sin(t*1.2)).toFixed(1)+' '+(6*Math.cos(t*1.5)).toFixed(1)+')');

  R('voters',TM.ballot_box);R('box',TM.ballot_box);
  cards.forEach((c,i)=>{const a=TM.ballot_box+.5+i*.4,k=p(u,a,a+.7);c.setAttribute('x',(VX[i]-15+(345-VX[i])*k).toFixed(1));c.setAttribute('y',(384+112*k).toFixed(1));c.setAttribute('opacity',u<a||k>=1?0:1)});
  R('ign',TM.ballot_box+3.4);
  R('scl',TM.scale);R('sub2',TM.scale+.3);
  const an=(12*p(u,TM.scale+.5,TM.scale+2)+.8*Math.sin(t*2)*p(u,TM.scale+2,TM.scale+3))*Math.PI/180,bc=Math.cos(an)*280,bs=Math.sin(an)*280;
  const bm=$('beam');bm.setAttribute('x1',(1100-bc).toFixed(1));bm.setAttribute('y1',(420+bs).toFixed(1));bm.setAttribute('x2',(1100+bc).toFixed(1));bm.setAttribute('y2',(420-bs).toFixed(1));
  $('panL').setAttribute('transform','translate('+(1100-bc).toFixed(1)+' '+(420+bs).toFixed(1)+')');
  $('panR').setAttribute('transform','translate('+(1100+bc).toFixed(1)+' '+(420-bs).toFixed(1)+')');

  R('c1',TM.trophy_three);TR.forEach((g,i)=>{const a=TM.trophy_three+.5+i*.5;rise(g,p(u,a,a+.4))});
  R('c2',TM.chain_links);LN.forEach((l,i)=>l.setAttribute('opacity',p(u,TM.chain_links+.4+i*.3,TM.chain_links+.7+i*.3)));
  R('luck',TM.chain_links+5.4);R('theo',TM.chain_links+9.6);

  R('pat',TM.doctor_desk);R('clip',TM.doctor_desk+.6);R('docs',TM.three_doctors);
  const hu=p(u,TM.phone_call+5,TM.phone_call+5.6);
  [0,1,2].forEach(i=>{const a=TM.three_doctors+.6+i*.4;rise($('bb'+i),p(u,a,a+.4)*(i==1?1:1-.65*hu))});
  $('bbr1').style.fill=hu>.5?'var(--gain)':'var(--stage)';$('bbr1').style.stroke=hu>.5?'var(--gain)':'var(--ink)';$('bbt1').style.fill=hu>.5?'var(--on-gain)':'var(--ink)';
  $('talk').setAttribute('opacity',p(u,TM.phone_call,TM.phone_call+.8));$('talk').setAttribute('stroke-dashoffset',(-t*30).toFixed(0));
  R('probe',TM.phone_call+.4);R('arw',TM.phone_call+10);R('okk',TM.phone_call+10.4);

  R('mir',TM.mirror);R('quote',TM.mirror+2.6);R('argue',TM.question_mark);
  $('xs').setAttribute('opacity',p(u,TM.question_mark+.4,TM.question_mark+.8));R('ask',TM.question_mark+.6);

  R('p0',TM.student_desk);R('p1',TM.equal_chairs);R('p2',TM.small_voice);R('chk',TM.small_voice+2);

  R('adv',TM.three_chairs);R('dec',TM.three_chairs+.6);
  WHY.forEach((w,i)=>{const a=TM.three_chairs+5.8+i*.4;rise(w,p(u,a,a+.4))});
  const wk=p(u,TM.three_chairs+9.5,TM.three_chairs+11);R('wts',TM.three_chairs+9.5);
  BAR.forEach((b,i)=>b.setAttribute('width',(260*WT[i]*wk).toFixed(1)));LNS.forEach(l=>l.setAttribute('opacity',wk));

  R('ql',TM.open_door);R('door',TM.open_door);
  const o=p(u,TM.open_door+.4,TM.open_door+1.9),dx=(1440-110*o).toFixed(1);
  $('leaf').setAttribute('points','1260,300 '+dx+','+(300+30*o).toFixed(1)+' '+dx+','+(700-30*o).toFixed(1)+' 1260,700');
  R('q1',TM.open_door+4.1);R('q2',TM.open_door+4.5);R('q3',TM.open_door+4.9);R('qm',TM.open_door+5.5);