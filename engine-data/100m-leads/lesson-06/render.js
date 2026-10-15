const R=(e,a,d=.5)=>rise(typeof e=='string'?$(e):e,p(u,a,a+d));
  R('tfig',TM.title_coin);R('tcw',TM.title_coin+.4);
  {const q=(t*.5)%2,s=Math.floor(q),f=ease(q-s);$('tcoin').setAttribute('transform','translate('+(TX[s]+(TX[s+1]-TX[s])*f).toFixed(1)+' '+(430-70*Math.sin(Math.PI*f)).toFixed(1)+')')}

  R('k0',TM.hourglass);R('k1',TM.coin_stack);R('k2',TM.crowd);$('sand').style.strokeDashoffset=(-t*40).toFixed(1);
  CO.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.coin_stack+.3+i*.2,TM.coin_stack+.6+i*.2)));
  CR.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.crowd+.3+i*.04,TM.crowd+.6+i*.04)));

  R('fau',TM.faucet);$('strm').setAttribute('height',(120*p(u,TM.faucet+.4,TM.faucet+1.2)).toFixed(1));R('bkt',TM.leaky_bucket);
  DR.forEach((d,i)=>{const c=(t*.8+i*.33)%1;d.setAttribute('cy',(690+62*c).toFixed(1));d.setAttribute('opacity',u>=TM.leaky_bucket?(1-c).toFixed(2):0)});
  $('bank').setAttribute('width',(480-360*p(u,TM.leaky_bucket+.5,TM.leaky_bucket+4)).toFixed(1));
  R('neg',TM.leaky_bucket+.6);R('key',TM.leaky_bucket+5.8);R('qq',TM.leaky_bucket+8.3);

  R('rc',TM.ad_receipt);$('cac').textContent='$'+Math.round(100*p(u,TM.ad_receipt+.3,TM.ad_receipt+1.5));R('tag3',TM.ad_receipt+4.6);
  {const h1=300*p(u,TM.ad_receipt+4.6,TM.ad_receipt+5.6),h2=360*p(u,TM.profit_bar+.5,TM.profit_bar+2.5);
  $('bar1').setAttribute('y',(700-h1).toFixed(1));$('bar1').setAttribute('height',h1.toFixed(1));$('bar2').setAttribute('y',(700-h2).toFixed(1));$('bar2').setAttribute('height',h2.toFixed(1))}
  R('b1l',TM.ad_receipt+5);R('b2l',TM.profit_bar);R('be3',TM.profit_bar+2.5);

  R('cal',TM.calendar);CE.forEach((c,i)=>{const on=u>=TM.calendar+.6+i*.1;c[0].setAttribute('fill',on?'var(--gain)':'var(--stage)');c[1].style.fill=on?'var(--on-gain)':''});
  R('calL',TM.calendar+3.6);
  [TM.calendar+1,TM.second_buyer,TM.chain_link,TM.chain_link+.6].forEach((a,i)=>R(BY[i],a));
  [TM.second_buyer+.4,TM.chain_link+.3,TM.chain_link+.9].forEach((a,i)=>{const w=AW[i];R(w[0],a);w[1].setAttribute('cy',(448-3*Math.sin(t*3+i*1.2)).toFixed(1))});
  R('ftx',TM.chain_link+1.4);R('fsav',TM.chain_link+2);

  R('bud',TM.upsell_box);[0,1,2].forEach(i=>R('bx'+i,TM.upsell_box+4.1+i*.4));R('bxl',TM.upsell_box+5.4);R('chx',TM.upsell_box+.6);
  $('fast').style.strokeDashoffset=1-p(u,TM.cash_arrow,TM.cash_arrow+1.5);R('mk5',TM.cash_arrow+1.4);R('leg5',TM.cash_arrow+.3);

  [TM.megaphone,TM.gift_tag,TM.click_button].forEach((a,i)=>{R('sec'+i,a);R('co'+i,a+.3)});
  $('cur').setAttribute('transform','translate(0 '+(6*Math.sin(t*4)).toFixed(1)+')');

  {const j=p(u,TM.split_screen+2.5,TM.split_screen+3.2);TI.forEach((q,i)=>{R(q[0],TM.split_screen+i*.15,.4);
    if(i==7){q[2].setAttribute('stroke',j>.5?'var(--gain)':'var(--ink)');q[2].setAttribute('stroke-width',j>.5?8:4);q[3].setAttribute('opacity',j)}else q[1].setAttribute('opacity',1-.7*j)})}
  R('t7l',TM.split_screen+3);R('dial',TM.volume_dial);R('lnk',TM.volume_dial+.3);
  {const da=-135+245*p(u,TM.volume_dial+.6,TM.volume_dial+3);$('ptr').setAttribute('transform','rotate('+da.toFixed(1)+' 1180 440)');TK.forEach((k,i)=>k.setAttribute('stroke',-135+i*27<=da+1?'var(--gain)':'var(--line)'))}
  AT.forEach((c,i)=>R(c,TM.volume_dial+5.4+i*.1,.3));R('att',TM.volume_dial+6);

  R('qa',TM.calculator);R('qb',TM.calculator+.4);R('qc',TM.calculator+.8);R('calc',TM.calculator+1.2);R('gap8',TM.calculator+7);
  $('cscr').textContent=Math.floor(t*2)%2?'$_':'$';