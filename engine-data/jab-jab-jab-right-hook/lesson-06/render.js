const S=(e,a,d)=>rise(typeof e==='string'?$(e):e,p(u,a,a+(d||.5)));

  S('t_img',TM.title_card);
  $('t_words').setAttribute('opacity',(1-.7*p(u,TM.title_card+3.4,TM.title_card+4.4)).toFixed(2));
  const hk=p(u,TM.title_card+3.4,TM.title_card+4);
  $('t_heart').setAttribute('transform','translate(1330 650) scale('+(1.6*hk*(1+.08*Math.sin(t*5))).toFixed(3)+')');

  S('feed',TM.scroll_thumb); S('s1arr',TM.scroll_thumb+.3);
  const off=160*Math.max(0,u-TM.scroll_thumb);
  FD.forEach((r,i)=>{const y=260+((i*150-off)%750+750)%750; r.setAttribute('y',y.toFixed(1)); r.setAttribute('opacity',(cl((y-250)/40)*cl((700-y)/40)).toFixed(2))});
  S('stk',TM.stock_photo);
  const sk=p(u,TM.stock_photo+1.2,TM.stock_photo+1.8);
  $('stkIn').setAttribute('opacity',(1-.6*sk).toFixed(2)); rise($('skip'),sk);
  S('bold',TM.bold_image); S('tix',TM.bold_image+1.5); S('w2nd',TM.bold_image+5.4,.6);

  S('board2',TM.pinboard); S('c2s',TM.pinboard+1);
  C2.forEach((g,i)=>S(g,TM.wedding_dress+i*.9));
  S('plan',TM.wedding_dress+4.9);
  $('dot2').setAttribute('cx',(1000+440*p(u,TM.wedding_dress+5.4,TM.wedding_dress+7)).toFixed(1));
  S('save',TM.wedding_dress+8.3); S('svtx',TM.wedding_dress+8.8);

  S('pin3',TM.pin_link);
  $('lk3').setAttribute('x2',(430+550*p(u,TM.pin_link+.5,TM.pin_link+1.7)).toFixed(1));
  S('ch3',TM.pin_link+1); S('web3',TM.pin_link+1.4);
  S('bag3',TM.shopping_bag); S('brk3',TM.broken_chain);

  S('cam4',TM.camera);
  const fk=p(u,TM.camera+.6,TM.camera+1.4);
  $('fl4').setAttribute('r',(80+140*fk).toFixed(1)); $('fl4').setAttribute('opacity',(fk>0&&fk<1?1-fk:0).toFixed(2));
  S('ph4',TM.camera+5); S('flt4',TM.camera+5.6);
  S('cap4',TM.no_link); S('ring4',TM.no_link+3.8);
  H4.forEach((h,i)=>{const ph=(t*.5+i*.25)%1; h.setAttribute('transform','translate('+(1110+i*80)+' '+(660-120*ph).toFixed(1)+') scale(1.2)'); h.setAttribute('opacity',Math.sin(Math.PI*ph).toFixed(2))});

  S('hs5',TM.hashtag_sign); S('sb5',TM.search_bar);
  $('q5').textContent=Q5.slice(0,Math.round(Q5.length*p(u,TM.search_bar+.3,TM.search_bar+1.8)));
  R5.forEach((g,i)=>S(g,TM.search_bar+1.8+i*.15));
  S('gal5',TM.empty_gallery); S('gtx5',TM.empty_gallery+.5); S('ppl5',TM.empty_gallery+1);
  $('ppl5i').setAttribute('transform','translate('+(12*Math.sin(t*1.2)).toFixed(1)+' 0)');

  S('gif6',TM.gif_loop);
  $('ball6').setAttribute('cy',(470-200*Math.abs(Math.sin(t*3))).toFixed(1));
  const df=Math.floor(t*3)%4; DT6.forEach((c,i)=>c.setAttribute('fill',i===df?'var(--gain)':'var(--line)'));
  S('fans6',TM.reblog_arrows); S('arcs6',TM.reblog_arrows+.4);
  const rk=Math.max(0,u-TM.reblog_arrows-.8)*.9, sg=Math.floor(rk)%4, fr=ease(rk-Math.floor(rk));
  const a0=XF[sg]+30,a1=XF[sg+1]-30, cx=qb(a0,(a0+a1)/2,a1,fr), cy=qb(350,270,350,fr)-26;
  $('card6').setAttribute('x',(cx-18).toFixed(1)); $('card6').setAttribute('y',(cy-18).toFixed(1));
  $('card6').setAttribute('opacity',p(u,TM.reblog_arrows+.6,TM.reblog_arrows+1).toFixed(2));
  const hv=u>=TM.reblog_arrows+.8?(fr<.5?sg:sg+1):-1;
  FN.forEach((f,i)=>f.forEach(e=>e.setAttribute('fill',i===hv?'var(--gain)':'var(--ink)')));
  S('mg6',TM.megaphone_x); S('mx6',TM.megaphone_x+.8); S('mtx6',TM.megaphone_x+1.2);

  P7.forEach((g,i)=>S(g,TM.three_phones+i*.3));
  EX7.forEach((e,i)=>S(e,TM.three_phones+1.6+i*1.4));
  CUP[2].setAttribute('transform','rotate('+(12*Math.sin(t*4)).toFixed(1)+' 1280 385)');
  RL.forEach((g,i)=>S(g,TM.rule_dial+i*.5));
  CK.forEach((g,i)=>S(g,TM.rule_dial+4.5+i*.3));
  S('wel7',TM.rule_dial+4.5,.6);

  const s8=SC[8][0]/K;
  S('qa',s8+.5); S('tl8',s8+1); S('qb',s8+4); S('qc',s8+4.4); S('qd',s8+4.8);