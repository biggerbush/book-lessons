const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
  R('ball',TM.crystal_ball,.6);
  MI.forEach((c,i)=>{const a=t*1.2+i*2.1;c.setAttribute('cx',(1300+50*Math.cos(a)).toFixed(1));c.setAttribute('cy',(420+40*Math.sin(a*1.3)).toFixed(1))});
  $('bq').setAttribute('opacity',p(u,TM.crystal_ball+1,TM.crystal_ball+1.8).toFixed(2));
  $('bx').setAttribute('stroke-dashoffset',(330*(1-p(u,TM.crystal_ball+3,TM.crystal_ball+3.6))).toFixed(1));

  R('fc',TM.forecaster); R('cal',TM.calendar);
  $('real').setAttribute('stroke-dashoffset',(260*(1-p(u,TM.calendar+.8,TM.calendar+2.2))).toFixed(1));
  const ev=p(u,TM.calendar+.6,TM.calendar+1.2)*(1+(u>TM.calendar+1.2?.12*Math.abs(Math.sin(t*3)):0));
  $('ev').setAttribute('transform','translate(1282 495) scale('+ev.toFixed(3)+') translate(-1282 -495)');
  R('hard',TM.calendar+4.2,.6);

  R('qL',TM.question_mark);
  const fl=p(u,TM.question_mark+1.2,TM.question_mark+2.2);
  $('flip').setAttribute('transform','translate(800 325) scale('+Math.cos(2*Math.PI*fl).toFixed(3)+' 1)');
  $('qm').style.fill=fl>.5?'var(--gain)':'var(--muted)';
  R('qR',TM.question_mark+2.6); R('tl',TM.timeline); R('rel',TM.timeline+.8,.6);
  CG.forEach((c,i)=>c.setAttribute('transform','translate(0 '+(30*Math.sin(t*1.3+i*1.7)).toFixed(1)+')'));

  R('bzg',TM.bezos);
  AS.forEach((g,i)=>{const a=TM.bezos+4.2+i*.5;rise(g,p(u,a,a+.4))});
  R('nob',TM.bezos+9.9,.6);
  R('cart',TM.shopping_cart); R('tg0',TM.shopping_cart+1.5); R('tg1',TM.shopping_cart+2.5);
  R('eff',TM.shopping_cart+5.4,.6); R('never',TM.shopping_cart+5.9,.6);
  ED.forEach((d,i)=>d.setAttribute('cx',(830+((t*80+i*40)%110)).toFixed(1)));

  R('mk0',TM.old_market); R('mk1',TM.modern_phone);
  $('neq').setAttribute('opacity',p(u,TM.modern_phone+3.8,TM.modern_phone+4.3).toFixed(2));
  $('eq').setAttribute('opacity',p(u,TM.two_faces,TM.two_faces+.5).toFixed(2));
  const ek=u<TM.two_faces?-1:Math.floor((u-TM.two_faces)/1.7)%3;
  FM.forEach(m=>m.setAttribute('d',MO[ek+1]));
  R('emo',TM.two_faces); $('emo').textContent=EMO[Math.max(ek,0)];
  R('cost',TM.two_faces+5.4,.6);

  TR.forEach(([g,b,ds,y],i)=>{const a=[TM.greed_fear,TM.greed_fear+1.2,TM.storyteller,TM.storyteller+2.5][i];rise(g,p(u,a,a+.4));
    const k=p(u,a,a+1.2);b.setAttribute('d','M400 '+y+'H'+(400+1040*k).toFixed(1));ds.forEach((d,j)=>d.setAttribute('opacity',k*1040>=160+j*260?1:0))});
  R('eras',TM.greed_fear);
  const tk=p(u,TM.storyteller+5.8,TM.storyteller+7.6);let td='M400 720';
  for(let f=.025;f<=tk+1e-6;f+=.025)td+='L'+(400+1040*f).toFixed(1)+' '+(720-480*f*f*f).toFixed(1);
  $('tech').setAttribute('d',td); R('techl',TM.storyteller+7.2); R('barely',TM.storyteller+6.4,.6);

  R('mp',TM.map); R('bb',TM.map+5);
  let w='';for(let x=600;x<=1100;x+=10)w+=(x===600?'M':'L')+x+' '+(430-100*Math.sin((x-600)/80+t*1.2)).toFixed(1);
  $('wv').setAttribute('d',w);
  R('th',TM.thermometer);
  const lv=u<TM.thermometer+.6?.15:.25+.7*Math.pow(Math.abs(Math.sin(t*1.4)),3),mh=300*lv;
  $('merc').setAttribute('y',(560-mh).toFixed(1)); $('merc').setAttribute('height',(mh+40).toFixed(1));
  R('anc',TM.anchor,.6); $('ancI').setAttribute('transform','translate(0 '+(4*Math.sin(t*2)).toFixed(1)+')');

  R('nb',TM.notebook); R('c1',TM.notebook+2.1); R('c2',TM.two_columns);
  L1.forEach((r,i)=>{const a=TM.notebook+2.5+i*.4;r.setAttribute('width',(W1[i]*p(u,a,a+.5)).toFixed(1))});
  L2.forEach((r,i)=>{const a=TM.two_columns+.5+i*.4;r.setAttribute('width',(W2[i]*p(u,a,a+.5)).toFixed(1))});
  $('hl').setAttribute('opacity',p(u,TM.two_columns+5.4,TM.two_columns+5.9).toFixed(2)); R('lean',TM.two_columns+5.4,.6);

  R('qa',TM.mirror); R('qb',TM.mirror+.4); R('qc',TM.mirror+.8); R('mir',TM.mirror+.4,.6); R('qd',TM.mirror+7,.6);
  $('glint').setAttribute('opacity',(.3+.7*Math.abs(Math.sin(t*1.5))).toFixed(2));