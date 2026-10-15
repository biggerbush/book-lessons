const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d)), S=(id,k,v)=>$(id).setAttribute(k,v);
  const b0=TM.boxer_glove; R('gloveW',b0); R('tgt',b0+.3); R('hk0',b0+.8);
  const c0=(t*1.5)%4,k0=Math.floor(c0),pu=Math.sin(Math.PI*(c0-k0));
  S('glove','transform',`translate(${(1370-(k0<3?40:110)*pu).toFixed(1)} 360)`);
  S('burst0','opacity',(k0==3&&pu>.7?1:0)*p(u,b0,b0+.5));

  R('ph1',TM.phone_feed);
  FD.forEach((g,i)=>{const y=((i*150-t*50)%600+600)%600;g.setAttribute('transform',`translate(0 ${(270+y).toFixed(1)})`);g.setAttribute('opacity',(cl(y/30)*cl((410-y)/30)).toFixed(2))});
  const sw=(t*.8)%1; S('thumb1','cx',400); S('thumb1','cy',(760-180*ease(cl(sw/.4))).toFixed(1));
  S('thumb1','opacity',(p(u,TM.phone_feed+.5,TM.phone_feed+1)*(1-cl((sw-.4)/.15))).toFixed(2));
  R('post1',TM.blurry_post); R('cal1L',TM.blurry_post+1.5,.6); R('cal1',TM.blurry_post+1.5,.6);
  const gs=p(u,TM.thumb_swipe,TM.thumb_swipe+.6); S('post1w','transform',`translate(0 ${(-40*gs).toFixed(1)})`); S('post1w','opacity',(1-.85*gs).toFixed(2));
  R('gone1',TM.thumb_swipe+.3);
  PL.forEach((g,i)=>{const a=TM.thumb_swipe+2.2+i*1.4;rise(g,p(u,a,a+.5))});

  R('bold2',TM.bold_image); R('stop2',TM.bold_image+1);
  FC.forEach((g,i)=>{const a=TM.eye_magnet+i*1.5;rise(g,p(u,a,a+.5))});
  const e2=TM.eye_magnet+7.3; R('eye2',e2); S('pup2','cx',(200+40*p(u,e2+.4,e2+1.2)).toFixed(1));

  R('mon3',TM.small_screen); R('arr3',TM.small_screen+.8); R('ph3',TM.small_screen+1.2);
  R('specks3',TM.tiny_words); R('lab3a',TM.tiny_words+.6);
  R('lab3b',TM.brand_logo); S('ring3','r',(18+4*Math.sin(t*4)).toFixed(1)); R('miss3',TM.brand_logo+7);

  R('one4',TM.one_message);
  [0,1,2].forEach(i=>R('ca'+i,TM.cluttered_ad+i*1.5)); R('q4',TM.cluttered_ad+4);
  S('clut4w','opacity',(1-.6*p(u,TM.clear_sign,TM.clear_sign+.6)).toFixed(2));
  R('sign4',TM.clear_sign); $('sgt4').textContent=SG[cl(Math.floor((u-TM.clear_sign)/2.2),0,2)];

  R('btn5',TM.link_button);
  const rc=(t%1.4)/1.4,re=14*rc; S('btnr5','x',1100-re); S('btnr5','y',650-re); S('btnr5','width',340+2*re); S('btnr5','height',100+2*re); S('btnr5','rx',50+re); S('btnr5','opacity',(1-rc).toFixed(2));
  R('maze5',TM.maze_path);
  const mq=p(u,TM.maze_path+.5,TM.maze_path+5)*4,mi=Math.min(Math.floor(mq),3),mf=mq-mi,A=MZ[mi],B=MZ[mi+1],fall=p(u,TM.maze_path+5,TM.maze_path+5.6);
  S('trav5','cx',(A[0]+(B[0]-A[0])*mf).toFixed(1)); S('trav5','cy',(A[1]+(B[1]-A[1])*mf+40*fall).toFixed(1)); S('trav5','opacity',u<TM.maze_path+.5?0:1-fall);
  R('quit5',TM.maze_path+5.2);
  R('short5',TM.short_path); const sx=190+900*p(u,TM.short_path+.2,TM.short_path+1.2); S('sl5','x2',sx.toFixed(1)); S('dot5','cx',sx.toFixed(1));

  R('phA6',TM.pocket_phone); R('thL6',TM.thumb_tap);
  const tc=(t%1.2)/1.2,th=p(u,TM.thumb_tap,TM.thumb_tap+.5),rr=tc>.25?(tc-.25)/.75:0;
  S('th6','cy',(800-70*Math.sin(Math.PI*cl(tc/.5))).toFixed(1)); S('th6','opacity',th);
  S('rip6','r',(20+90*rr).toFixed(1)); S('rip6','opacity',(th*(tc>.25?1-rr:0)).toFixed(2));
  R('mouse6',TM.thumb_tap+1.2); R('phB6',TM.awkward_page); R('drift6',TM.awkward_page+1);
  const dr=p(u,TM.awkward_page+2,TM.awkward_page+5); S('drift6m','transform',`translate(${(-140*dr).toFixed(1)} 0)`); S('drift6m','opacity',(1-dr).toFixed(2));

  R('ph7',TM.check_eye); R('lk7',TM.check_eye+.3); R('eye7',TM.check_eye+.8);
  const CT=[TM.check_brand,TM.check_words,TM.check_tap];
  CT.forEach((a,i)=>{rise(ROW[i],p(u,a,a+.5)); S('rg'+i,'opacity',p(u,a+.3,a+.8)); CK[i].setAttribute('opacity',p(u,a+1,a+1.4))});
  S('pup7','cy',500+(u>=CT[2]?12:u>=CT[1]?4:u>=CT[0]?-10:0));

  const s8=SC[8][0]/K; R('lbl8',s8+.4); R('sw8',s8+.6); S('hand8','opacity',p(u,s8+.6,s8+1.1));
  S('hand8','transform',`rotate(${((t%2)/2*360).toFixed(1)} 1340 640)`);
  R('qa',s8+4.6); R('qb',s8+5); R('qc',s8+5.4);