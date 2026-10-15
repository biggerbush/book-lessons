const a0=TM.megaphone;
  rise($('mega'),p(u,a0,a0+.5)); rise($('crowd0'),p(u,a0+.3,a0+.9));
  WV.forEach((w,i)=>{const k=(t*.9+i/3)%1;w.setAttribute('transform','translate('+(k*50).toFixed(1)+' 0)');w.setAttribute('opacity',((1-k)*p(u,a0+.4,a0+1)).toFixed(2))});
  CB.forEach((g,i)=>rise(g,p(u,a0+5.4+i*.3,a0+5.9+i*.3)));

  rise($('room'),p(u,TM.party_room,TM.party_room+.5));
  BL.forEach((b,i)=>b.setAttribute('opacity',(.55+.45*Math.sin(t*3+i)).toFixed(2)));
  GR.forEach((g,i)=>{const a=TM.small_groups+i*.5;rise(g,p(u,a,a+.5))});
  rise($('guest'),p(u,TM.loud_guest,TM.loud_guest+.5));
  const sb1=1+.06*Math.abs(Math.sin(t*6)); $('bub1').setAttribute('transform','translate(1320 370) scale('+sb1.toFixed(3)+') translate(-1320 -370)');
  rise($('ign'),p(u,TM.loud_guest+1.6,TM.loud_guest+2.1));

  NB.forEach((g,i)=>{const a=TM.notice_board+i*.5;rise(g,p(u,a,a+.5))});
  rise($('feedw'),p(u,TM.silent_feed,TM.silent_feed+.5));
  const sk=p(u,TM.silent_feed+.6,TM.silent_feed+3.5);
  FP.forEach((c,i)=>{c[0].setAttribute('transform','translate(0 '+(sk*(40+i*10)).toFixed(1)+')');c[1].setAttribute('opacity',(1-.65*sk).toFixed(2))});
  rise($('pw'),p(u,TM.silent_feed+5,TM.silent_feed+5.6));
  rise($('lr0'),p(u,TM.silent_feed+5.5,TM.silent_feed+6)); rise($('lr1'),p(u,TM.silent_feed+6,TM.silent_feed+6.5));

  rise($('sb'),p(u,TM.search_bar,TM.search_bar+.5));
  const kn=u<TM.keyword_tags?0:Math.floor((u-TM.keyword_tags)/1.8), ks=KS[kn%3], k0=u<TM.keyword_tags?TM.search_bar+.6:TM.keyword_tags+kn*1.8;
  $('qtxt').textContent=ks.slice(0,Math.round(ks.length*p(u,k0,k0+1)));
  KT.forEach((g,i)=>{const a=TM.keyword_tags+i*.3;rise(g,p(u,a,a+.4))});
  CV.forEach((c,i)=>{const a=TM.keyword_tags+1+i*.4;rise(c[0],p(u,a,a+.5));c[2].setAttribute('r',(7+3*Math.abs(Math.sin(t*3+i))).toFixed(1))});
  CV[1][1].setAttribute('stroke',u>=TM.speech_bubble?'var(--gain)':'var(--line)');
  rise($('door'),p(u,TM.speech_bubble,TM.speech_bubble+.5));

  rise($('brand'),p(u,TM.reply_arrow,TM.reply_arrow+.5)); rise($('rarr'),p(u,TM.reply_arrow+.2,TM.reply_arrow+.7));
  const gs=p(u,TM.reply_arrow+.6,TM.reply_arrow+2.6), gx=(1-gs)*(1-gs)*350+2*(1-gs)*gs*800+gs*gs*1270, gy=(1-gs)*(1-gs)*330+2*(1-gs)*gs*170+gs*gs*320;
  $('gift').setAttribute('transform','translate('+gx.toFixed(1)+' '+(gy-34).toFixed(1)+')');
  $('gift').setAttribute('opacity',u<TM.reply_arrow+.6?0:(1-p(u,TM.reply_arrow+2.6,TM.reply_arrow+3.1)).toFixed(2));
  const sm=u>=TM.smiling_user; UP.forEach(e=>e.setAttribute('class',sm?'gain':'ink'));
  rise($('smile'),p(u,TM.smiling_user,TM.smiling_user+.4)); rise($('noticed'),p(u,TM.smiling_user+.5,TM.smiling_user+1));
  TL.setAttribute('opacity',p(u,TM.thread_chain,TM.thread_chain+.5));
  TH.forEach((r,i)=>{const a=TM.thread_chain+i*.55;rise(r,p(u,a,a+.4))});
  rise($('heart4'),p(u,TM.thread_chain+4,TM.thread_chain+4.5));

  rise($('tl'),p(u,TM.trend_list,TM.trend_list+.5));
  TR.forEach((r,i)=>{const a=TM.trend_list+.3+i*.25;rise(r[0],p(u,a,a+.4))});
  const hi=u>=TM.trend_list+2; TR[2][1].setAttribute('fill',hi?'var(--gain)':'var(--stage)'); TR[2][1].setAttribute('stroke',hi?'var(--gain)':'var(--line)'); TR[2][2].style.fill=hi?'var(--on-gain)':'';
  rise($('bel'),p(u,TM.trend_list+2,TM.trend_list+2.4));
  rise($('hs'),p(u,TM.hashtag_sign,TM.hashtag_sign+.5));
  const gk=p(u,TM.hashtag_sign+.4,TM.hashtag_sign+2.2);
  PP.forEach(q=>{const R=280-105*gk;q[1].setAttribute('cx',(1000+R*Math.cos(q[0])).toFixed(1));q[1].setAttribute('cy',(440+R*Math.sin(q[0])).toFixed(1));q[1].setAttribute('opacity',gk.toFixed(2))});
  rise($('c50'),p(u,TM.hashtag_sign+6.1,TM.hashtag_sign+6.6)); rise($('c51'),p(u,TM.hashtag_sign+6.7,TM.hashtag_sign+7.2));

  rise($('std'),p(u,TM.dark_stadium,TM.dark_stadium+.5));
  const dk=u>=TM.dark_stadium+1.5;
  LM.forEach(l=>{l[0].setAttribute('fill',dk?'var(--line)':'var(--gain)');l[1].setAttribute('opacity',dk?0:1)});
  $('field').setAttribute('fill-opacity',dk?.08:.35);
  rise($('lo'),p(u,TM.dark_stadium+1.6,TM.dark_stadium+2.1));
  rise($('tw'),p(u,TM.oreo_tweet,TM.oreo_tweet+.5));
  RT.forEach((q,i)=>{const k=p(u,TM.retweet_wave+i*.08,TM.retweet_wave+i*.08+.6);q[2].setAttribute('cx',(1200+(q[0]-1200)*k).toFixed(1));q[2].setAttribute('cy',(440+(q[1]-440)*k).toFixed(1));q[2].setAttribute('opacity',k.toFixed(2))});
  rise($('mil'),p(u,TM.retweet_wave+1,TM.retweet_wave+1.6));

  rise($('sw'),p(u,TM.stopwatch,TM.stopwatch+.5));
  $('hand').setAttribute('transform','rotate('+((t*180)%360).toFixed(1)+' 300 430)');
  HB.forEach((b,i)=>{const a=TM.stopwatch+1+i*.25;rise(b,p(u,a,a+.4))});
  rise($('hl'),p(u,TM.stopwatch+3,TM.stopwatch+3.5));
  rise($('fit'),p(u,TM.thumbs_check,TM.thumbs_check+.4));
  FT.forEach((g,i)=>{const a=TM.thumbs_check+.4+i*.6;rise(g,p(u,a,a+.4))});
  rise($('q70'),p(u,TM.thumbs_check+6.2,TM.thumbs_check+6.7)); rise($('q7b'),p(u,TM.thumbs_check+6.6,TM.thumbs_check+7)); rise($('q71'),p(u,TM.thumbs_check+6.9,TM.thumbs_check+7.4));

  rise($('ph'),p(u,TM.phone_search,TM.phone_search+.5)); rise($('todo'),p(u,TM.phone_search+.3,TM.phone_search+.8));
  RB.forEach((g,i)=>{const a=TM.phone_search+1.5+i*.7;rise(g,p(u,a,a+.4))});
  rise($('qa'),p(u,TM.phone_search+6.6,TM.phone_search+7.1)); rise($('qb'),p(u,TM.phone_search+7,TM.phone_search+7.5));