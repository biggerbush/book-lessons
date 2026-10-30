const k0=p(u,TM.title_wave,TM.title_wave+2.5);
TW.forEach((e,i)=>e.setAttribute('d',W(1080,1480,340+i*80,28*k0,t*2-i*.8)));
TR.forEach((c,i)=>{const x=1130+i*100;c.setAttribute('cx',x);c.setAttribute('cy',f1(wy(x,340,28*k0,t*2)-22));c.setAttribute('opacity',k0)});

rise($('hub'),p(u,TM.gpt_icon,TM.gpt_icon+.5));
BN.forEach(([l,g],i)=>{const a=TM.branches+i*.6;dr(l,p(u,a,a+.5));rise(g,p(u,a+.3,a+.8))});
rise($('brx'),p(u,TM.branches+2,TM.branches+2.6));
const k1=p(u,TM.wave_cluster,TM.wave_cluster+1.5);rise($('wc1'),p(u,TM.wave_cluster,TM.wave_cluster+.5));
const wl=W(880,1480,600,34*k1,t*1.6);$('wcl').setAttribute('d',wl);$('wcf').setAttribute('d',wl+'L1480 700L880 700Z');
WR.forEach((c,i)=>{const x=960+i*115;c.setAttribute('cx',x);c.setAttribute('cy',f1(wy(x,600,34*k1,t*1.6)-24))});

rise($('car'),p(u,TM.benz_car,TM.benz_car+.6));
$('wr').setAttribute('transform','rotate('+f1(t*40%360)+' 560 620)');$('wf').setAttribute('transform','rotate('+f1(t*64%360)+' 860 650)');
const vp=p(u,TM.benz_car+.5,TM.benz_car+1);
PF.forEach((c,i)=>{const k=(t*.4+i/4)%1;c.setAttribute('cx',f1(470-30*k));c.setAttribute('cy',f1(450-200*k));c.setAttribute('r',f1(10+20*k));c.setAttribute('opacity',((1-k)*vp).toFixed(2))});
rise($('crd'),p(u,TM.crowd_doubt,TM.crowd_doubt+.5));rise($('hrs'),p(u,TM.horse_cart,TM.horse_cart+.5));

rise($('fl'),p(u,TM.ford_line,TM.ford_line+.5));
BC.forEach((g,i)=>{const x=((i*150+t*70)%750)+60;g.setAttribute('transform','translate('+f1(x)+' 0)');g.setAttribute('opacity',(cl((x-120)/30)*cl((700-x)/30)).toFixed(2))});
$('stamp').setAttribute('y',f1(248+12*Math.abs(Math.sin(t*3))));
rise($('pd'),p(u,TM.price_drop,TM.price_drop+.5));dr($('pl'),p(u,TM.price_drop+.3,TM.price_drop+2.5));dr($('bl'),p(u,TM.price_drop+1,TM.price_drop+3.2));
rise($('cyc'),p(u,TM.cycle_arrow,TM.cycle_arrow+.5));CY.forEach((g,i)=>rise(g,p(u,TM.cycle_arrow+i*.5,TM.cycle_arrow+i*.5+.4)));
const ca=p(u,TM.cycle_arrow+1.5,TM.cycle_arrow+2);
CDOT.forEach((c,i)=>{const a=t*.9+i*2.094;c.setAttribute('cx',f1(1170+170*Math.cos(a)));c.setAttribute('cy',f1(530+170*Math.sin(a)));c.setAttribute('opacity',ca)});

rise($('ct'),p(u,TM.city_traffic,TM.city_traffic+.5));
CR.forEach((c,i)=>{const d=i%2?-1:1,x=((i*137+d*t*90)%700+700)%700+90;c.setAttribute('x',f1(x));c.setAttribute('opacity',(cl((x-120)/30)*cl((716-x)/30)*p(u,TM.city_traffic+i*.25,TM.city_traffic+i*.25+.3)).toFixed(2))});
rise($('eng'),p(u,TM.engine_parts,TM.engine_parts+.5));$('gear').setAttribute('transform','rotate('+f1(t*50%360)+' 1190 510)');
EP.forEach((g,i)=>rise(g,p(u,TM.engine_parts+.4+i*.5,TM.engine_parts+.8+i*.5)));
rise($('wm'),p(u,TM.world_map,TM.world_map+.5));GD.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.world_map+.3+i*.15,TM.world_map+.5+i*.15)));

rise($('gp'),p(u,TM.gutenberg,TM.gutenberg+.6));
const py=410+60*Math.abs(Math.sin(t*1.5)),hc=50*Math.cos(t*1.5);$('plat').setAttribute('y',f1(py));$('scr').setAttribute('y2',f1(py));
$('hdl').setAttribute('x1',f1(290-hc));$('hdl').setAttribute('x2',f1(290+hc));
rise($('eu'),p(u,TM.press_spread,TM.press_spread+.5));
ED.forEach((e,i)=>{const a=TM.press_spread+.3+i*.14;e.setAttribute('opacity',p(u,a,a+.25));if(EL[i])EL[i].setAttribute('opacity',(.7*p(u,a-.1,a+.2)).toFixed(2))});
rise($('pr'),p(u,TM.press_spread+2.4,TM.press_spread+2.9));dr($('pra'),p(u,TM.press_spread+2.7,TM.press_spread+4.2));$('prh').setAttribute('opacity',p(u,TM.press_spread+4,TM.press_spread+4.3));
rise($('bk'),p(u,TM.book_stack,TM.book_stack+.5));rise($('bk2'),p(u,TM.book_stack+1.2,TM.book_stack+1.8));

rise($('qc6'),p(u,TM.quote_card,TM.quote_card+.6));rise($('ban'),p(u,TM.ban_sign,TM.ban_sign+.5));
FQ.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.ban_sign+.4+i*.2,TM.ban_sign+.6+i*.2)));
const fpk=p(u,TM.ban_sign+1.6,TM.ban_sign+2.1);
FP.forEach((c,i)=>{const fr=(t*.15+i*.5)%1,x=1220+240*fr;c.setAttribute('cx',f1(x));c.setAttribute('opacity',(fpk*cl(fr*8)*cl((1-fr)*8)).toFixed(2))});
rise($('dem'),p(u,TM.demand_arrow,TM.demand_arrow+.5));dr($('dar'),p(u,TM.demand_arrow+.3,TM.demand_arrow+1));

rise($('ey'),p(u,TM.eye_glass,TM.eye_glass+.5));$('pup').setAttribute('cx',f1(1360+10*Math.sin(t*1.5)));
const sk=p(u,TM.eye_glass+1.5,TM.eye_glass+2.1);$('stk').setAttribute('x2',f1(112+420*sk));$('stk').setAttribute('opacity',sk>0?1:0);
rise($('ey2'),p(u,TM.eye_glass+2.2,TM.eye_glass+2.8));
['k0','k1','k2'].forEach((id,i)=>rise($(id),p(u,TM.clock_face+i*1.2,TM.clock_face+i*1.2+.5)));
$('hm').setAttribute('transform','rotate('+f1(t*240%360)+' 340 510)');$('hh').setAttribute('transform','rotate('+f1(t*20%360)+' 340 510)');
rise($('chk'),p(u,TM.checklist,TM.checklist+.5));dr($('tick'),p(u,TM.checklist+.8,TM.checklist+1.3));

rise($('qa'),p(u,TM.your_tool,TM.your_tool+.5));rise($('qb'),p(u,TM.your_tool+.4,TM.your_tool+.9));
rise($('qc'),p(u,TM.your_tool+5,TM.your_tool+5.6));rise($('qlab'),p(u,TM.your_tool+1,TM.your_tool+1.5));
$('qw').setAttribute('d',W(1100,1460,770,18,t*2));$('qr').setAttribute('cx',1280);$('qr').setAttribute('cy',f1(wy(1280,770,18,t*2)-22));