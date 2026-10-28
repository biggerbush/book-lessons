rise($('boyW'),p(u,TM.poor_kid,TM.poor_kid+.5));
let h=0;TB.forEach((g,i)=>{const a=TM.poor_kid+5.8+i*.5,k=p(u,a,a+.4);rise(g,k);h+=k});
BOY.setAttribute('transform','translate(1310 '+(760-70*h).toFixed(1)+')');

rise($('h0'),p(u,TM.joe_flom,TM.joe_flom+.5));rise($('h1'),p(u,TM.harvard,TM.harvard+.5));rise($('h2'),p(u,TM.skadden,TM.skadden+.5));
$('jd').setAttribute('cx',(300+500*p(u,TM.harvard,TM.harvard+1.2)+500*p(u,TM.skadden,TM.skadden+1.2)).toFixed(1));
$('jd').setAttribute('opacity',p(u,TM.joe_flom,TM.joe_flom+.5));
const th=100+280*p(u,TM.skadden+.4,TM.skadden+2.4),tt=640-th;$('tw').setAttribute('y',tt.toFixed(1));$('tw').setAttribute('height',th.toFixed(1));
WN.forEach(w=>w[0].setAttribute('opacity',w[1]-10>tt?1:0));

rise($('firm'),p(u,TM.firm_doors,TM.firm_doors+.5));
const dw=37*p(u,TM.firm_doors+1,TM.firm_doors+2);$('dl').setAttribute('width',dw.toFixed(1));$('dr').setAttribute('width',dw.toFixed(1));$('dr').setAttribute('x',(437-dw).toFixed(1));
rise($('fw'),p(u,TM.firm_doors+.6,TM.firm_doors+1.1));
$('fl').setAttribute('transform','translate('+(800+230*p(u,TM.small_office+.4,TM.small_office+1.8)).toFixed(1)+' 650)');
rise($('off'),p(u,TM.small_office,TM.small_office+.5));
PA.forEach((g,i)=>{const a=TM.small_office+1.6+i*.6,k=p(u,a,a+.8),sx=1420,sy=520,ex=PS[i][0],ey=PS[i][1];
  const x=sx+(ex-sx)*k,y=sy+(ey-sy)*k-30*Math.sin(Math.PI*k);
  g.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+')');g.setAttribute('opacity',p(u,a,a+.25).toFixed(2))});
rise($('bad'),p(u,TM.small_office+6.6,TM.small_office+7.1));

rise($('c3a'),p(u,TM.takeover,TM.takeover+.5));
const ma=.15+.45*Math.abs(Math.sin(t*4)),mx=(300+80*Math.cos(ma)).toFixed(1),my=80*Math.sin(ma);
$('pm').setAttribute('d','M300 420L'+mx+' '+(420-my).toFixed(1)+'A80 80 0 1 0 '+mx+' '+(420+my).toFixed(1)+'Z');
rise($('o1'),p(u,TM.takeover+1,TM.takeover+1.5));rise($('o2'),p(u,TM.takeover+5,TM.takeover+5.5));
rise($('c3b'),p(u,TM.takeover+5,TM.takeover+5.5));
BR.forEach((r,i)=>{const a=i<2?TM.takeover+5.4+i*.3:TM.boom_chart+(i-2)*.5,hh=BH[i]*p(u,a,a+1.2);r.setAttribute('y',(650-hh).toFixed(1));r.setAttribute('height',hh.toFixed(1))});
rise($('exp'),p(u,TM.boom_chart+1.6,TM.boom_chart+2.1));rise($('need'),p(u,TM.boom_chart+.6,TM.boom_chart+1.2));

const bp=p(u,SC[4][0]+.5,TM.birth_dip+1.8);let pts='';for(let y=1915;y<=1915+30*bp+.001;y+=.5)pts+=BX(y).toFixed(1)+','+BY(y).toFixed(1)+' ';
$('bl').setAttribute('points',pts);
rise($('band'),p(u,TM.birth_dip,TM.birth_dip+.5));rise($('mk4'),p(u,TM.small_class,TM.small_class+.5));
rise($('room'),p(u,TM.small_class+.4,TM.small_class+.9));ST.forEach((g,i)=>{const a=TM.small_class+.9+i*.3;rise(g,p(u,a,a+.4))});
rise($('rr'),p(u,TM.small_class+2.6,TM.small_class+3.2));

$('nd').setAttribute('d','M560 470V'+(512+14*Math.sin(t*12)).toFixed(1));$('sti').setAttribute('stroke-dashoffset',(-t*30).toFixed(1));
rise($('mach'),p(u,TM.sewing,TM.sewing+.5));rise($('par'),p(u,TM.sewing+6.5,TM.sewing+7));
rise($('shop'),p(u,TM.shop_family-.2,TM.shop_family+.4));CH.forEach((g,i)=>{const a=TM.shop_family+1+i*.8;rise(g,p(u,a,a+.4))});

[0,1,2].forEach(i=>rise($('cd'+i),p(u,TM.three_keys+i*.3,TM.three_keys+i*.3+.5)));
rise($('k0'),p(u,TM.puzzle,TM.puzzle+.5));rise($('k1'),p(u,TM.key,TM.key+.5));rise($('k2'),p(u,TM.ladder,TM.ladder+.5));
const pk=70*(1-p(u,TM.puzzle+.5,TM.puzzle+1.5));PZ.setAttribute('transform','translate('+pk.toFixed(1)+' '+pk.toFixed(1)+')');
$('ky').setAttribute('transform','rotate('+(8*Math.sin(t*2)).toFixed(1)+' 800 420)');
CO.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.ladder+.4+i*.3,TM.ladder+.7+i*.3)));

rise($('kt'),p(u,TM.dinner_table,TM.dinner_table+.5));rise($('arw'),p(u,TM.dinner_table+4.6,TM.dinner_table+5.1));rise($('ad'),p(u,TM.dinner_table+5.2,TM.dinner_table+5.7));
SB.forEach((g,i)=>{const a=TM.stack_luck+i*.6;rise(g,p(u,a,a+.4))});
rise($('sf'),p(u,TM.stack_luck+1.8,TM.stack_luck+2.3));rise($('mys'),p(u,TM.stack_luck+2.4,TM.stack_luck+3));

const s8=SC[8][0];
rise($('qa'),p(u,s8+.3,s8+.8));rise($('qb'),p(u,s8+.7,s8+1.2));rise($('qc'),p(u,s8+1.1,s8+1.6));rise($('sqs'),p(u,s8+1.6,s8+2.1));
rise($('q8m'),p(u,s8+6.2,s8+6.7));$('sq3').setAttribute('fill-opacity',p(u,s8+7,s8+8).toFixed(2));