rise($('tpost'),p(t,.3,.9));
  TB.forEach((b,i)=>{rise(b[0],p(t,1.1+i*.4,1.5+i*.4));const a=t>=2.9+i*.35;[b[1],b[2]].forEach(e=>{e.setAttribute('fill',a?'var(--gain)':'var(--stage)');e.setAttribute('stroke',a?'var(--gain)':'var(--ink)')})});

  rise($('vid'),p(u,TM.video_screen,TM.video_screen+.5));$('vprog').setAttribute('x2',(150+580*((t*.05)%1)).toFixed(1));
  RW.forEach((g,i)=>rise(g,p(u,TM.comment_list+i*.4,TM.comment_list+i*.4+.4)));
  const gl=TM.comment_list+3;$('glance').setAttribute('opacity',(p(u,gl,gl+.4)*(1-p(u,TM.gary_laptop,TM.gary_laptop+.4))).toFixed(2));
  rise($('gary'),p(u,TM.gary_laptop,TM.gary_laptop+.5));const an=TM.gary_laptop+1.8;rise($('ans1'),p(u,an,an+.4));
  BD.forEach((b,i)=>rise(b,p(u,an+i*.25,an+i*.25+.3)));

  rise($('msgs'),p(u,TM.reply_arrows-.4,TM.reply_arrows));
  MS.forEach((m,i)=>{const a=TM.reply_arrows+.4+i*.4;m[0].setAttribute('stroke',u>=a?'var(--gain)':'var(--ink)');m[1].setAttribute('opacity',p(u,a,a+.3))});
  rise($('clk'),p(u,TM.clock,TM.clock+.5));const ck=p(u,TM.clock,TM.clock+4.5);
  $('mh').setAttribute('transform','rotate('+(ck*2160).toFixed(1)+' 1150 420)');$('hh').setAttribute('transform','rotate('+(ck*180).toFixed(1)+' 1150 420)');
  rise($('moon'),p(u,TM.clock+2,TM.clock+2.5));rise($('inef'),p(u,TM.clock+5,TM.clock+5.5));rise($('oppo'),p(u,TM.clock+6.4,TM.clock+6.9));

  rise($('cb'),p(u,TM.viewer,TM.viewer+.5));rise($('rb'),p(u,TM.viewer+2.4,TM.viewer+2.9));
  rise($('hrtg'),p(u,TM.heart_icon,TM.heart_icon+.5));$('hrt').setAttribute('transform','translate(300 330) scale('+(1+.08*Math.abs(Math.sin(t*3))).toFixed(3)+')');
  rise($('seen'),p(u,TM.heart_icon+3.4,TM.heart_icon+3.9));rise($('parr'),p(u,TM.friend_tag,TM.friend_tag+.5));
  PL.forEach((g,i)=>rise(g,p(u,TM.friend_tag+i*1.6,TM.friend_tag+i*1.6+.5)));
  const fan=u>=TM.friend_tag+5.8;VW.forEach(e=>e.setAttribute('class',fan?'gain':'ink'));rise($('fan'),p(u,TM.friend_tag+5.8,TM.friend_tag+6.4));

  const s4=TM.forum_board-3.4;rise($('page'),p(u,s4,s4+.5));
  rise($('fb'),p(u,TM.forum_board,TM.forum_board+.5));$('l1').setAttribute('opacity',p(u,TM.forum_board,TM.forum_board+.6));
  rise(FRW[3],p(u,TM.forum_board+2.5,TM.forum_board+3));
  rise($('gl'),p(u,TM.search_glass,TM.search_glass+.5));$('l2').setAttribute('opacity',p(u,TM.search_glass,TM.search_glass+.6));
  TW.forEach((w,i)=>{const a=TM.search_glass+.6+i*.3;rise(w[0],p(u,a,a+.3));const h=u>=a+2;w[1].setAttribute('fill',h?'var(--gain)':'var(--stage)');w[1].setAttribute('stroke',h?'var(--gain)':'var(--ink)')});
  const ns=TM.search_glass+5.4;rise($('nsg'),p(u,ns,ns+.4));const sk=p(u,ns+1,ns+1.5);
  $('nsl').setAttribute('x2',(112+(NW.v+16)*sk).toFixed(1));$('nsl').setAttribute('opacity',sk>0?1:0);rise($('bu'),p(u,ns+1.8,ns+2.3));

  GF.forEach((g,i)=>rise(g,p(u,TM.gift_box+i*.5,TM.gift_box+i*.5+.4)));
  GL.forEach((g,i)=>{const a=TM.gift_box+5+i*1.4;rise(g,p(u,a,a+.4))});
  rise($('garr'),p(u,TM.trust_meter,TM.trust_meter+.5));const th=384*p(u,TM.trust_meter,TM.trust_meter+3);
  $('tf').setAttribute('y',(642-th).toFixed(1));$('tf').setAttribute('height',th.toFixed(1));
  rise($('back'),p(u,TM.trust_meter+3.3,TM.trust_meter+3.9));rise($('offer'),p(u,TM.trust_meter+3.6,TM.trust_meter+4.2));

  rise($('skp'),p(u,TM.skeptic,TM.skeptic+.5));rise($('skb'),p(u,TM.skeptic+.6,TM.skeptic+1.1));rise($('ans'),p(u,TM.skeptic+2.9,TM.skeptic+3.4));
  rise($('near'),p(u,TM.small_group,TM.small_group+.6));const og=TM.small_group+4.6;rise($('outer'),p(u,og,og+.4));
  OD.forEach((d,i)=>d.setAttribute('opacity',p(u,og+i*.08,og+i*.08+.3)));rise($('grow'),p(u,og,og+.6));

  rise($('aud'),p(u,TM.crowd,TM.crowd+.5));rise($('com'),p(u,TM.circle,TM.circle+.5));
  LN.forEach((l,i)=>l.setAttribute('opacity',(p(u,TM.circle+.4+i*.04,TM.circle+.7+i*.04)*(.45+.35*Math.sin(t*2+i))).toFixed(2)));
  rise($('diff'),p(u,TM.circle+3.8,TM.circle+4.4));rise($('built'),p(u,TM.circle+9.2,TM.circle+9.8));

  const s8=SC[8][0]/K;rise($('cg'),p(u,s8+.2,s8+.7));rise($('qa'),p(u,s8+.4,s8+.9));rise($('qb'),p(u,s8+.9,s8+1.4));
  rise($('qc'),p(u,s8+3.8,s8+4.3));rise($('qd'),p(u,s8+4.3,s8+4.8));rise($('ql'),p(u,s8+5,s8+5.5));