const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  R('cL',TM.two_chairs);R('cR',TM.two_chairs+.6);R('tbl',TM.two_chairs+1.2);R('both',TM.two_chairs+5.4);
  $('pR').setAttribute('transform','translate(0 '+(3*Math.sin(t*5)).toFixed(1)+')');

  R('gP',TM.couple);R('eP',TM.couple+.5);
  const bo=p(u,TM.armchair+3.8,TM.armchair+4.3);rise($('hrt'),p(u,TM.couple+1,TM.couple+1.5)*(1-bo));
  $('bolt').setAttribute('opacity',(bo*(.75+.25*Math.sin(t*8))).toFixed(2));
  R('party',TM.party_invite);R('gl',TM.party_invite);R('arm',TM.armchair);R('el',TM.armchair);

  R('gP2',TM.thought_cloud);R('cloud',TM.thought_cloud+.3);
  const rj=p(u,TM.thought_cloud+3.8,TM.thought_cloud+4.3);$('cq').setAttribute('opacity',1-rj);rise($('rej'),rj);
  R('eP2',TM.battery);R('bat',TM.battery);$('batF').setAttribute('width',(176*p(u,TM.battery+.5,TM.battery+2.5)).toFixed(1));
  R('bal',TM.balance);const an=-12*(1-p(u,TM.balance+.4,TM.balance+1.8)),ar=an*Math.PI/180;
  $('beam').setAttribute('transform','rotate('+an.toFixed(2)+' 800 420)');
  $('panL').setAttribute('transform','translate('+(800-200*Math.cos(ar)).toFixed(1)+' '+(420-200*Math.sin(ar)).toFixed(1)+')');
  $('panR').setAttribute('transform','translate('+(800+200*Math.cos(ar)).toFixed(1)+' '+(420+200*Math.sin(ar)).toFixed(1)+')');
  R('mid',TM.balance+1.6);

  R('xP',TM.two_voices);R('iP',TM.two_voices+.4);R('loud',TM.two_voices+3.4);R('fine',TM.two_voices+5.4);
  $('loudP').setAttribute('transform','translate(540 420) scale('+(1+.04*Math.sin(t*9)).toFixed(3)+') translate(-540 -420)');
  R('soft',TM.soft_speech);R('cold',TM.soft_speech+1.2);R('over',TM.soft_speech+2.4);
  BR.forEach((b,i)=>{const h=(30+i*20)*(.85+.15*Math.sin(t*5+i));b.setAttribute('y',(620-h).toFixed(1));b.setAttribute('height',h.toFixed(1))});
  R('conv',TM.soft_speech+4.6);

  R('open',TM.open_office);$('noise').setAttribute('opacity',(.4+.6*Math.abs(Math.sin(t*3))).toFixed(2));
  R('rooms',TM.quiet_room);R('note',TM.note_pad);
  NL.forEach((l,i)=>l.setAttribute('opacity',p(u,TM.note_pad+.6+i*.3,TM.note_pad+.9+i*.3)));R('bulb',TM.note_pad+2.6);

  R('grp',TM.school_desk);R('study',TM.book_stack);
  BK.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.book_stack+.4+i*.3,TM.book_stack+.7+i*.3)));
  R('teach',TM.teacher);R('thkG',TM.teacher+1.6);

  R('kidW',TM.child);rise($('tag'),p(u,TM.child+.5,TM.child+1)*(1-p(u,TM.stepping_stone,TM.stepping_stone+.5)));
  $('tagS').setAttribute('x2',(140+160*p(u,TM.child+2,TM.child+2.6)).toFixed(1));
  STN.forEach((s,i)=>rise(s,p(u,TM.stepping_stone+i*.2,TM.stepping_stone+.4+i*.2)));R('stepL',TM.stepping_stone);
  const hq=p(u,TM.stepping_stone+1,TM.stepping_stone+5.4)*6,hk=Math.min(5,Math.floor(hq)),hf=hq-hk;
  const kx=KX[hk]+(KX[hk+1]-KX[hk])*hf,ky=KY[hk]+(KY[hk+1]-KY[hk])*hf-60*Math.sin(Math.PI*hf);
  $('kid').setAttribute('transform','translate('+kx.toFixed(1)+' '+ky.toFixed(1)+')');
  R('scope',TM.telescope);STR.forEach((s,i)=>s.setAttribute('opacity',(.5+.5*Math.abs(Math.sin(t*2+i))).toFixed(2)));

  $('saw').setAttribute('transform','rotate('+(10*(1-p(u,TM.seesaw+.5,TM.seesaw+2))).toFixed(2)+' 440 690)');
  R('team',TM.team_circle);const bt=u>=TM.team_circle+5.3;
  MB.forEach((c,i)=>{c.setAttribute('opacity',p(u,TM.team_circle+i*.15,TM.team_circle+.3+i*.15));c.setAttribute('r',(26+(bt?3*Math.sin(t*3+i):0)).toFixed(1))});
  R('tl',TM.team_circle+1);R('core',TM.team_circle+5.3);

  R('qa',TM.calendar);R('qb',TM.calendar+.4);R('qc',TM.calendar+.8);R('cal',TM.calendar+1.4);
  R('q2',TM.calendar+5.4);R('day',TM.calendar+5.8);