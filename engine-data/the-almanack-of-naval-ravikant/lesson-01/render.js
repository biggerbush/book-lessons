const sw=Math.max(.05,Math.abs(Math.cos(t*2.2)));
  $('spin').setAttribute('transform','scale('+sw.toFixed(3)+' 1)');
  rise($('coin'),p(u,TM.title_coin,TM.title_coin+.6)); rise($('steps'),p(u,TM.title_coin+.4,TM.title_coin+1));

  rise($('naval'),p(u,TM.naval,TM.naval+.5));
  rise($('tw'),p(u,TM.tweet_thread,TM.tweet_thread+.4));
  cards.forEach((c,i)=>{const a=TM.tweet_thread+i*.5;rise(c,p(u,a,a+.4))});
  rise($('ladderG'),p(u,TM.ladder,TM.ladder+.5));
  $('climb').setAttribute('cy',(700-420*p(u,TM.ladder+.5,TM.ladder+4)).toFixed(1));

  J.forEach((g,i)=>{const a=TM.three_jars+i*.4;rise(g,p(u,a,a+.5))});
  rise($('q3'),p(u,TM.three_jars+.8,TM.three_jars+1.3));
  rise($('bill'),p(u,TM.money_bill,TM.money_bill+.5)); rise($('sub0'),p(u,TM.money_bill+.4,TM.money_bill+.9));
  $('billM').setAttribute('transform','translate('+(14*Math.sin(t*2)).toFixed(1)+' 0)');
  rise($('crownG'),p(u,TM.crown,TM.crown+.5)); rise($('sub1'),p(u,TM.crown+.4,TM.crown+.9)); rise($('sub2'),p(u,TM.crown+2,TM.crown+2.5));

  rise($('moonG'),p(u,TM.moon,TM.moon+.6)); $('zz').setAttribute('y',(540-10*Math.abs(Math.sin(t*1.5))).toFixed(1));
  rise($('factG'),p(u,TM.factory,TM.factory+.5));
  BX.forEach((b,i)=>{const k=(t*.4+i/4)%1;b.setAttribute('x',(556+k*110).toFixed(1));b.setAttribute('opacity',(k<.8?1:(1-k)/.2).toFixed(2))});
  rise($('lapG'),p(u,TM.laptop,TM.laptop+.5));
  DT.forEach((d,i)=>d.setAttribute('fill',u>=TM.laptop&&((u-TM.laptop)*3)%18>i?'var(--gain)':'var(--line)'));
  rise($('seek'),p(u,TM.clock-5.3,TM.clock-4.7));

  const tw=Math.max(0,Math.min(u,TM.stop_sign)-TM.clock);
  $('minH').setAttribute('transform','rotate('+(tw*120).toFixed(1)+' 300 430)'); $('hrH').setAttribute('transform','rotate('+(tw*10).toFixed(1)+' 300 430)');
  rise($('clockG'),p(u,TM.clock,TM.clock+.5));
  CN.forEach((c,i)=>{const a=TM.clock+.4+i*.45;c.setAttribute('opacity',u>=a&&a<TM.stop_sign?1:0)});
  rise($('stopG'),p(u,TM.stop_sign,TM.stop_sign+.4));
  rise($('never'),p(u,TM.stop_sign+3.3,TM.stop_sign+3.9));
  rise($('pieW'),p(u,TM.pie_slice,TM.pie_slice+.5));
  $('pieS').setAttribute('transform','translate(1170 430) scale('+(.8+.35*p(u,TM.pie_slice+.6,TM.pie_slice+4)).toFixed(3)+')');

  rise($('sawG'),p(u,TM.seesaw,TM.seesaw+.5));
  $('plank').setAttribute('transform','rotate('+(14*p(u,TM.seesaw+2,TM.seesaw+3)).toFixed(2)+' 400 600)');
  rise($('rr'),p(u,TM.seesaw+2,TM.seesaw+2.5));
  rise($('gpie'),p(u,TM.growing_pie,TM.growing_pie+.5));
  $('gpS').setAttribute('transform','translate(1150 470) scale('+(.9+.8*p(u,TM.growing_pie+.3,TM.growing_pie+3)).toFixed(3)+')');
  rise($('win'),p(u,TM.growing_pie+1.8,TM.growing_pie+2.3));
  $('ppl').setAttribute('transform','translate(0 '+(-24*p(u,TM.handshake,TM.handshake+1.2)).toFixed(1)+')');
  rise($('lift'),p(u,TM.handshake,TM.handshake+.6)); rise($('ups'),p(u,TM.handshake+5,TM.handshake+5.5));

  rise($('gift'),p(u,TM.gift_box,TM.gift_box+.5));
  rise($('mapG'),p(u,TM.map,TM.map+.5)); $('route').setAttribute('opacity',p(u,TM.map+.4,TM.map+2));
  $('route').setAttribute('stroke-dashoffset',(-t*20).toFixed(1));
  PN.forEach((g,i)=>{const a=TM.map+.6+i*.7;rise(g,p(u,a,a+.4))});
  rise($('stu'),p(u,TM.student,TM.student+.5)); $('skill').setAttribute('width',(312*p(u,TM.student+.4,TM.student+3.8)).toFixed(1));

  rise($('nb'),p(u,TM.notebook,TM.notebook+.6));
  $('div').setAttribute('y2',(240+540*p(u,TM.split_page,TM.split_page+1)).toFixed(1));
  rise($('hL'),p(u,TM.split_page+.4,TM.split_page+.9));
  RL.forEach((g,i)=>{const a=TM.split_page+1+i*.7;rise(g,p(u,a,a+.4))});
  rise($('hR'),p(u,TM.split_page+5.3,TM.split_page+5.9));
  rise($('sd'),p(u,TM.seedling,TM.seedling+.4));
  $('sdS').setAttribute('transform','translate(1090 720) scale('+(.2+.8*p(u,TM.seedling,TM.seedling+1.6)).toFixed(3)+') translate(-1090 -720)');

  ['qa','qb','qc','qd'].forEach((k,i)=>rise($(k),p(u,TM.question+i*.4,TM.question+i*.4+.5)));
  rise($('qlab'),p(u,TM.question+1.8,TM.question+2.3)); rise($('qpie'),p(u,TM.question+1.4,TM.question+1.9));
  $('qsl').setAttribute('transform','rotate('+(t*20%360).toFixed(1)+' 1340 640)');