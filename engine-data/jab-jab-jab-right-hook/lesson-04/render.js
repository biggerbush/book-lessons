rise($('ph0'),p(u,TM.phone_feed,TM.phone_feed+.6));
const no=p(u,TM.phone_feed+4.6,TM.phone_feed+5.1); C0[1].setAttribute('opacity',(1-.75*no).toFixed(2)); rise($('nope'),no);

rise($('stkL'),p(u,TM.gatekeeper,TM.gatekeeper+.5)); rise($('gate'),p(u,TM.gatekeeper+.4,TM.gatekeeper+1)); rise($('fans1'),p(u,TM.gatekeeper+1,TM.gatekeeper+1.6));
const hd=p(u,TM.post_stack+6.2,TM.post_stack+7.6);
P1.forEach(([g,x,y,s],i)=>{const a=TM.post_stack+i*.12,o=p(u,a,a+.3);g.setAttribute('opacity',(o*(s<0?1-.8*hd:1)).toFixed(2));
  if(s>=0)g.setAttribute('transform','translate('+((940-x)*hd).toFixed(1)+' '+((380+s*80-y)*hd).toFixed(1)+')')});
rise($('hide1'),p(u,TM.post_stack+6.8,TM.post_stack+7.4));

[0,1,2].forEach(i=>rise($('pf'+i),p(u,TM.edgerank+i*.4,TM.edgerank+i*.4+.5)));
rise($('pd0'),p(u,TM.affinity,TM.affinity+.5)); AF.forEach((a,k)=>a.setAttribute('opacity',p(u,TM.affinity+.5+k*.35,TM.affinity+.8+k*.35)));
rise($('pd1'),p(u,TM.weight,TM.weight+.5));
const ag=.26*p(u,TM.weight+1,TM.weight+2.2),bc=Math.cos(ag)*130,bs=Math.sin(ag)*130;
SB.setAttribute('x1',800-bc);SB.setAttribute('y1',520-bs);SB.setAttribute('x2',800+bc);SB.setAttribute('y2',520+bs);
PAN[0].setAttribute('transform','translate('+(800-bc).toFixed(1)+' '+(580-bs).toFixed(1)+')');PAN[1].setAttribute('transform','translate('+(800+bc).toFixed(1)+' '+(580+bs).toFixed(1)+')');
rise($('pd2'),p(u,TM.clock,TM.clock+.5)); const cr=u>TM.clock?u-TM.clock:0;
$('hm').setAttribute('transform','rotate('+((cr*240)%360).toFixed(1)+' 1260 500)'); $('hh').setAttribute('transform','rotate('+((cr*20)%360).toFixed(1)+' 1260 500)');

rise($('sbTl'),p(u,TM.snowball,TM.snowball+.5));
TOPC.forEach((c,i)=>{const a=i?TM.snowball+4.2+i*.6:TM.snowball+.4;rise(c,p(u,a,a+.4))});
rise($('sbTr'),p(u,TM.snowball+7.4,TM.snowball+7.9));
rise($('sbBl'),p(u,TM.shrinking,TM.shrinking+.5));
BOTC.forEach((c,i)=>{const a=TM.shrinking+.3+i*.5;rise(c,p(u,a,a+.4))});
rise($('sbBr'),p(u,TM.shrinking+2.8,TM.shrinking+3.3)); rise($('behind'),p(u,TM.shrinking+3.4,TM.shrinking+4));

rise($('bb'),p(u,TM.billboard,TM.billboard+.6)); rise($('ph4'),p(u,TM.billboard+2.5,TM.billboard+3.1));
const sp=u>TM.scroll_past?((u-TM.scroll_past)*140)%110:0;
AD.forEach((g,i)=>{const y=255+i*110-sp;g.setAttribute('transform','translate(0 '+y.toFixed(1)+')');g.setAttribute('opacity',(cl((y-240)/15)*cl((690-y-80)/20)).toFixed(2))});
rise($('swipe'),p(u,TM.scroll_past,TM.scroll_past+.5)); rise($('ch4'),p(u,TM.scroll_past+1,TM.scroll_past+1.5));
$('rch').setAttribute('stroke-dashoffset',(1-p(u,TM.scroll_past+1.5,TM.scroll_past+4)).toFixed(3));
rise($('bad'),p(u,TM.scroll_past+5.8,TM.scroll_past+6.4)); rise($('cost'),p(u,TM.scroll_past+8.4,TM.scroll_past+9));

rise($('fc'),p(u,TM.friend_post,TM.friend_post+.6)); rise($('yc'),p(u,TM.friend_post+1,TM.friend_post+1.6));
rise($('ck0'),p(u,TM.friend_post+6.2,TM.friend_post+6.7)); rise($('lf'),p(u,TM.laugh_face,TM.laugh_face+.5)); rise($('ck1'),p(u,TM.laugh_face+.4,TM.laugh_face+.9));
rise($('ck2'),p(u,TM.short_text,TM.short_text+.5)); const sh=p(u,TM.short_text+.5,TM.short_text+1.3);
$('tb1').setAttribute('width',(500-280*sh).toFixed(1)); $('tb2').setAttribute('opacity',(1-sh).toFixed(2));

COINS.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.coins+i*.2,TM.coins+i*.2+.3))); rise($('coins'),p(u,TM.coins,TM.coins+.4));
$('carr').setAttribute('opacity',p(u,TM.coins+1.8,TM.coins+2.4));
rise($('mega'),p(u,TM.coins+5.8,TM.coins+6.4)); rise($('bor'),p(u,TM.coins+5.8,TM.coins+6.3)); rise($('borx'),p(u,TM.coins+6.6,TM.coins+7));
rise($('lov'),p(u,TM.megaphone,TM.megaphone+.5));
WV.forEach((w,k)=>w.setAttribute('opacity',(p(u,TM.megaphone+.4+k*.2,TM.megaphone+.7+k*.2)*(.35+.65*Math.abs(Math.sin(t*3-k)))).toFixed(2)));
CR.forEach((g,i)=>g.setAttribute('opacity',p(u,TM.megaphone+.8+i*.06,TM.megaphone+1.1+i*.06)));

const rk=p(u,TM.ranked_list,TM.ranked_list+1.4),tp=u>=TM.ranked_list+5.4;
TL.forEach(([g,r,tx],i)=>{const a=TM.your_posts+i*.12,q=RK.indexOf(i),x0=140+(i%5)*110,y0=240+Math.floor(i/5)*110,y1=236+q*60,s=1-.4*rk,h=tp&&q<3;
  g.setAttribute('transform','translate('+(x0+(140-x0)*rk).toFixed(1)+' '+(y0+(y1-y0)*rk).toFixed(1)+') scale('+s.toFixed(3)+')');g.setAttribute('opacity',p(u,a,a+.3));
  r.setAttribute('fill',h?'var(--gain)':'var(--stage)');r.setAttribute('stroke',h?'var(--gain)':'var(--ink)');tx.style.fill=h?'var(--on-gain)':''});
BR.forEach((b,r)=>b.setAttribute('width',(BL[r]*p(u,TM.ranked_list+1.2+r*.08,TM.ranked_list+1.8+r*.08)).toFixed(1)));
rise($('more7'),p(u,TM.ranked_list+5.4,TM.ranked_list+6));
rise($('loop7'),p(u,TM.repeat_loop,TM.repeat_loop+.5)); $('lp').setAttribute('transform','rotate('+(u>TM.repeat_loop?((u-TM.repeat_loop)*90)%360:0).toFixed(1)+' 1290 330)');
WB.forEach((b,i)=>{const h=(60+i*36)*p(u,TM.repeat_loop+.6+i*.3,TM.repeat_loop+1.1+i*.3);b.setAttribute('height',h.toFixed(1));b.setAttribute('y',(760-h).toFixed(1))});

const S8=SC[8][0]/K;
rise($('qa'),p(u,S8+.3,S8+.8)); rise($('qb'),p(u,S8+.7,S8+1.2)); rise($('qc'),p(u,S8+1.1,S8+1.6));
rise($('q8p'),p(u,S8+.5,S8+1.1)); rise($('q8m'),p(u,S8+4.9,S8+5.5)); $('q8r').setAttribute('opacity',(.3+.7*Math.abs(Math.sin(t*2.5))).toFixed(2));