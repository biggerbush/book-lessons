const R=(e,a,d=.5)=>rise(typeof e=='string'?$(e):e,p(u,a,a+d));
$('heart0').setAttribute('transform','translate(1310 360) scale('+(1.6+.15*Math.sin(t*4)).toFixed(3)+')');
$('heart0').setAttribute('opacity',p(u,TM.friend_smile,TM.friend_smile+.6));
R('b1',TM.friend_smile+.4);R('b2',TM.friend_smile+5);

R('room',TM.party_room);R('rep',TM.hostess);R('hst',TM.hostess+2.5);R('bag',TM.shopping_bag);R('rule',TM.attractive_man-5);

R('man',TM.attractive_man);
$('halo').setAttribute('opacity',p(u,TM.halo,TM.halo+.5));$('halo').setAttribute('cy',(300+4*Math.sin(t*2)).toFixed(1));
TR.forEach((g,i)=>R(g,TM.halo+.6+i*.5));R('gl',TM.halo+3);
R('crt0',TM.courtroom);R('crt1',TM.courtroom+2);
const bk=(t%1.6)/1.6;$('blt').setAttribute('y',(360+80*bk).toFixed(1));$('blt').setAttribute('opacity',(1-bk).toFixed(2));
$('gav').setAttribute('transform','rotate('+(-20*Math.max(0,Math.sin(t*3))).toFixed(1)+' 1325 560)');

R('pr3',TM.two_mirrors);$('mir').setAttribute('opacity',p(u,TM.two_mirrors,TM.two_mirrors+.5));
P3[1].setAttribute('fill',u>=TM.matching_shirt?Gn:I);
R('stp',TM.matching_shirt);TG.forEach((e,i)=>R(e,TM.matching_shirt+.5+i*.6));
R('car',TM.camping_gear);R('slr3',TM.camping_gear+.5);R('tent',TM.camping_gear+1.2);R('bub3',TM.camping_gear+3);

R('joe',TM.joe_girard);R('card',TM.greeting_card);R('cus',TM.greeting_card+1);
EN.forEach((g,i)=>R(g,TM.greeting_card+.5+i*.35,.3));
R('lyt',TM.like_you_text);HR.forEach((h,i)=>h.setAttribute('opacity',p(u,TM.like_you_text+1+i*.2,TM.like_you_text+1.4+i*.2)));
R('prs',TM.like_you_text+3.4);

R('grp',TM.summer_camp);
const ck=p(u,TM.summer_camp+2.2,TM.summer_camp+3.2),rk=p(u,TM.rival_groups+.5,TM.rival_groups+2.5),sh=60*ck+180*rk;
$('gA').setAttribute('transform','translate('+sh.toFixed(1)+' 0)');$('gB').setAttribute('transform','translate('+(-sh).toFixed(1)+' 0)');
const gf=rk>.6?Gn:Ls;$('gA').setAttribute('fill',gf);$('gB').setAttribute('fill',gf);
$('bolt').setAttribute('opacity',(p(u,TM.summer_camp+.5,TM.summer_camp+1)*(1-p(u,TM.rival_groups,TM.rival_groups+.5))).toFixed(2));
R('ctl',TM.summer_camp+2.2);R('goal',TM.rival_groups);$('rope').setAttribute('opacity',p(u,TM.rival_groups+2.3,TM.rival_groups+2.8));
R('bad',TM.good_cop);R('good',TM.good_cop+1.5);

R('map',TM.weather_map);$('rain').setAttribute('stroke-dashoffset',(-t*60).toFixed(1));
R('ang',TM.angry_viewer);R('tx1',TM.angry_viewer+2.5);
R('cel',TM.celeb_product);$('ph').setAttribute('opacity',p(u,TM.celeb_product+1.5,TM.celeb_product+2));R('tx2',TM.celeb_product+2.5);

SR.forEach((g,i)=>R(g,TM.alarm_bell+i*.4));R('tmb',TM.alarm_bell+3);
R('clk',TM.clock);const ha=(-90+90*p(u,TM.clock+.2,TM.clock+1.2))*Math.PI/180;
$('hand').setAttribute('d','M640 400L'+(640+80*Math.cos(ha)).toFixed(1)+' '+(400+80*Math.sin(ha)).toFixed(1));
R('bar',TM.clock+.4);const bh=248*p(u,TM.clock+.6,TM.clock+1.4);
$('barf').setAttribute('y',(516-bh).toFixed(1));$('barf').setAttribute('height',bh.toFixed(1));$('barf').setAttribute('fill',bh>200?Ls:Gn);
R('bellW',TM.clock+2);$('bellg').setAttribute('transform','rotate('+(u>=TM.clock+2?14*Math.sin(t*16):0).toFixed(1)+' 1080 320)');
R('car7',TM.car_vs_seller);R('slrW',TM.car_vs_seller);
$('slr').setAttribute('transform','translate('+(500-240*p(u,TM.car_vs_seller+1,TM.car_vs_seller+2.5)).toFixed(1)+' 0)');
R('cut',TM.car_vs_seller+1);R('jdg',TM.car_vs_seller+2);

R('fc',TM.thinking_face);R('fm',TM.thinking_face+.6);
R('qa',TM.thinking_face+5.4);R('qb',TM.thinking_face+5.8);R('qc',TM.thinking_face+6.2);