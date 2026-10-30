P0.forEach((w,i)=>{const a=TM.plate+i*.3;w.setAttribute('opacity',(p(u,a,a+.4)*(i==2?1-.85*p(u,TM.plate+3.4,TM.plate+4):1)).toFixed(2))});
  rise($('hungry'),p(u,TM.plate+3.6,TM.plate+4.1));

  BW.forEach((b,i)=>{const a=TM.three_bowls+i*.4,c=TM.labels+i*.5,d=TM.labels+2.6+i*.3;rise(b[0],p(u,a,a+.5));rise(b[1],p(u,c,c+.4));rise(b[2],p(u,d,d+.4))});
  rise($('bal'),p(u,TM.labels+2.6,TM.labels+3.1));
  $('beam').setAttribute('transform','rotate('+(8*Math.sin(t*2.5)*(1-p(u,TM.labels+3,TM.labels+5.5))).toFixed(2)+' 800 720)');

  const bq=TM.lone_snack+3;
  rise($('left2'),p(u,TM.lone_snack,TM.lone_snack+.5));
  $('burst').setAttribute('opacity',(p(u,bq,bq+.2)*(1-p(u,bq+.8,bq+1.6))).toFixed(2));
  rise($('gone'),p(u,bq+1.4,bq+1.9));
  rise($('right2'),p(u,TM.shared_meal,TM.shared_meal+.5));
  PP.forEach((g,i)=>{const a=TM.shared_meal+.3+i*.3;rise(g,p(u,a,a+.4))});
  rise($('memory'),p(u,TM.shared_meal+3.7,TM.shared_meal+4.2));

  rise($('mtn'),p(u,TM.mountain,TM.mountain+.6));
  const cq=p(u,TM.climber,TM.climber+5),cp=TR.getPointAtLength(TL*cq),arr=p(u,TM.climber+5,TM.climber+5.5);
  $('climber').setAttribute('cx',cp.x.toFixed(1));$('climber').setAttribute('cy',cp.y.toFixed(1));$('climber').setAttribute('opacity',p(u,TM.climber-.3,TM.climber+.2));
  rise($('flag3'),arr);
  RG.forEach((c,i)=>{const f=(t*.6+i/3)%1;c.setAttribute('r',(30+50*f).toFixed(1));c.setAttribute('opacity',((1-f)*arr).toFixed(2))});
  rise($('noeff'),p(u,TM.climber+5.8,TM.climber+6.3));

  rise($('chart'),p(u,TM.treadmill,TM.treadmill+.5)); rise($('mill'),p(u,TM.treadmill,TM.treadmill+.5));
  const xm=160+280*p(u,TM.treadmill+3.3,TM.treadmill+6)+320*p(u,TM.new_goal,TM.new_goal+4);
  let cd='M160 580';for(let x=164;x<=xm;x+=4){let y=580;[260,460,640].forEach(g=>{if(x>=g)y-=260*Math.exp(-(x-g)/45)});cd+='L'+x+' '+y.toFixed(1)}
  $('curve').setAttribute('d',cd);
  rise($('fg'),p(u,TM.treadmill+3.3,TM.treadmill+3.8)); rise($('sa'),p(u,TM.treadmill+5,TM.treadmill+5.5));
  $('belt').setAttribute('stroke-dashoffset',((t*100)%32).toFixed(1));
  const sw=30*Math.sin(t*8);
  $('leg0').setAttribute('d','M1112 584L'+(1120+sw).toFixed(1)+' 688'); $('leg1').setAttribute('d','M1128 584L'+(1120-sw).toFixed(1)+' 688');
  rise($('goal4w'),p(u,TM.new_goal,TM.new_goal+.5));
  $('goal4').setAttribute('transform','translate('+(1250+12*Math.sin(t*1.5)).toFixed(1)+' 688)');

  rise($('frac'),p(u,TM.fraction,TM.fraction+.5));
  const wv=p(u,TM.fraction+2.6,TM.fraction+3.1); rise($('hw'),wv);
  const nH=12*p(u,TM.haves_pile,TM.haves_pile+5), nW=3+9*p(u,TM.haves_pile+7,TM.haves_pile+9.5);
  HB.forEach((h,k)=>h.setAttribute('opacity',cl(nH-k).toFixed(2)));
  WB.forEach((w,k)=>w.setAttribute('opacity',(cl(nW-k)*wv).toFixed(2)));
  rise($('fast'),p(u,TM.haves_pile+7,TM.haves_pile+7.5));

  rise($('f6'),p(u,TM.scissors,TM.scissors+.5));
  const ct=p(u,TM.scissors+3.8,TM.scissors+5), sn=3+14*Math.abs(Math.sin(t*5))*(1-ct);
  $('bl0').setAttribute('transform','rotate('+sn.toFixed(1)+')'); $('bl1').setAttribute('transform','rotate('+(-sn).toFixed(1)+')');
  $('cutln').setAttribute('opacity',(p(u,TM.scissors+3.2,TM.scissors+3.7)*(1-.6*ct)).toFixed(2));
  // cut wants drop away and vanish completely; only the dashed outline stays, aligned in the same slot
  $('cut').setAttribute('transform','translate(0 '+(30*ct).toFixed(1)+')'); $('cut').setAttribute('opacity',(1-ct).toFixed(2));
  $('ghost').setAttribute('opacity',ct.toFixed(2));
  $('meter').setAttribute('width',(480*(.5+.5*ct)).toFixed(1));
  WL.forEach((w,i)=>{const a=TM.wants_list+i*.25;rise(w,p(u,a,a+.4));if(i>2)w.style.fill=u>=TM.wants_list+3.6?'var(--gain)':'var(--ink)'});
  SK.forEach((s,i)=>{const a=TM.wants_list+1.5+i*.6;s.setAttribute('stroke-dashoffset',(LS[i]*(1-p(u,a,a+.5))).toFixed(1))});
  rise($('beats'),p(u,TM.wants_list+5,TM.wants_list+5.5));

  rise($('cmp'),p(u,TM.compass,TM.compass+.5));
  $('needle').setAttribute('transform','rotate('+((1-p(u,TM.compass,TM.compass+3))*90*Math.sin(t*5)).toFixed(1)+' 400 450)');
  rise($('sense'),p(u,TM.compass+2.2,TM.compass+2.7));
  const sq=p(u,TM.hard_days,TM.hard_days+3.5);
  ST.setAttribute('stroke-dashoffset',(SL*(1-sq)).toFixed(1));
  SB.forEach(b=>b[1].setAttribute('opacity',sq>=b[0]?1:0)); STAR.setAttribute('opacity',sq>=.99?1:0);
  rise($('lbl7'),p(u,TM.hard_days+1,TM.hard_days+1.5));
  rise($('mix'),p(u,TM.balanced_plate,TM.balanced_plate+.5));
  P7.forEach((w,i)=>{const a=TM.balanced_plate+.4+i*.3;w.setAttribute('opacity',p(u,a,a+.4).toFixed(2))});

  rise($('qa'),p(u,TM.pen_paper,TM.pen_paper+.5)); rise($('qb'),p(u,TM.pen_paper+.4,TM.pen_paper+.9)); rise($('qc'),p(u,TM.pen_paper+.8,TM.pen_paper+1.3));
  rise($('paper'),p(u,TM.pen_paper,TM.pen_paper+.5));
  const wq=p(u,TM.pen_paper+1,TM.pen_paper+3), xq=p(u,TM.pen_paper+5.7,TM.pen_paper+6.3);
  $('wline').setAttribute('stroke-dashoffset',(WLn*(1-wq)).toFixed(1)); $('xline').setAttribute('stroke-dashoffset',(196*(1-xq)).toFixed(1));
  $('pen').setAttribute('transform','translate('+(1230+180*wq+20*xq).toFixed(1)+' 510)'); $('pen').setAttribute('opacity',p(u,TM.pen_paper+.6,TM.pen_paper+1).toFixed(2));
  rise($('watch'),p(u,TM.pen_paper+5.7,TM.pen_paper+6.2));