const tk=p(u,TM.trophy,TM.trophy+1.8),th=360*tk;hb($('tbar'),720,th);
$('troph').setAttribute('transform','translate(1412 '+(712-th+4*Math.sin(t*2)).toFixed(1)+')');$('troph').setAttribute('opacity',p(u,TM.trophy+.8,TM.trophy+1.3));
T0.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.trophy+i*.12,TM.trophy+i*.12+.4)));
rise($('tnote'),p(u,TM.trophy+4.6,TM.trophy+5.1));

rise($('bp'),p(u,TM.bell_curve-.3,TM.bell_curve+.3));
BB.forEach((r,i)=>hb(r,680,BH(i)*p(u,TM.bell_curve+i*.06,TM.bell_curve+i*.06+.6)));
$('bcur').style.strokeDashoffset=(1-p(u,TM.bell_curve+1.2,TM.bell_curve+2.6)).toFixed(3);
rise($('pp'),p(u,TM.power_curve-.3,TM.power_curve+.3));
const tw=u>=TM.power_curve+4.2,lt=u>=TM.long_tail;
PB.forEach((r,i)=>{hb(r,680,PH(i)*p(u,TM.power_curve+i*.08,TM.power_curve+i*.08+.7));r.setAttribute('class',tw&&i<2?'gain':'ink');r.setAttribute('opacity',lt&&i>=4?(.5+.4*Math.abs(Math.sin(t*2+i*.4))).toFixed(2):1)});
rise($('ptxt'),p(u,TM.power_curve+4.2,TM.power_curve+4.7));
rise($('tail'),p(u,TM.long_tail,TM.long_tail+.5));

rise($('jar'),p(u,TM.fund_jar,TM.fund_jar+.5));
$('flow').setAttribute('opacity',p(u,TM.portfolio,TM.portfolio+.4));$('flow').style.strokeDashoffset=(-t*30).toFixed(1);
rise($('pl2'),p(u,TM.portfolio,TM.portfolio+.5));
const fg=p(u,TM.facebook_bar,TM.facebook_bar+1.4);
PO.forEach((r,i)=>{const a=TM.portfolio+.3+i*.1,k=p(u,a,a+.4);hb(r,700,(i==2?30+390*fg:POH[i])*k)});
$('fbl').setAttribute('y',(682-30-390*fg).toFixed(1));$('fbl').setAttribute('opacity',p(u,TM.facebook_bar+.4,TM.facebook_bar+.9));
rise($('oth'),p(u,TM.facebook_bar+2.2,TM.facebook_bar+2.7));hb($('othr'),700,260*p(u,TM.facebook_bar+2.4,TM.facebook_bar+3.4));
rise($('fbt'),p(u,TM.facebook_bar+3.2,TM.facebook_bar+3.8));

hb($('palr'),720,300*p(u,TM.palantir_bar,TM.palantir_bar+1.2));rise($('pall'),p(u,TM.palantir_bar,TM.palantir_bar+.5));
rise($('rest3'),p(u,TM.palantir_bar+5,TM.palantir_bar+5.5));hb($('restr'),720,200*p(u,TM.palantir_bar+5.2,TM.palantir_bar+6.2));
TY.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.tiny_bars+i*.08,TM.tiny_bars+i*.08+.3)));
rise($('tinyl'),p(u,TM.tiny_bars+.8,TM.tiny_bars+1.4));

rise($('card'),p(u,TM.magnifier-.4,TM.magnifier+.1));
hb($('cbar'),602,60+206*p(u,TM.checkmark,TM.checkmark+1.6));
$('mag').setAttribute('transform','translate('+(360+30*Math.sin(t*1.2)).toFixed(1)+' '+(470+14*Math.sin(t*1.7)).toFixed(1)+')');$('mag').setAttribute('opacity',p(u,TM.magnifier,TM.magnifier+.5));
rise($('chk'),p(u,TM.checkmark+1.6,TM.checkmark+2.1));
rise($('spray'),p(u,TM.spray_can,TM.spray_can+.5));
SB.forEach((r,i)=>{const a=TM.spray_can+.4+i*.07;hb(r,600,SBH(i)*p(u,a,a+.4))});
rise($('xmk'),p(u,TM.spray_can+2.4,TM.spray_can+2.9));
rise($('few'),p(u,TM.spray_can+3.5,TM.spray_can+4.1));

const b5=SC[5][0]/K,bk=p(u,TM.broken_coin,TM.broken_coin+.8);rise($('coin'),p(u,b5+.5,b5+1));
[-1,1].forEach((s,i)=>{const e=$('ch'+i);e.setAttribute('transform','translate('+(24*s*bk).toFixed(1)+' '+(10*bk).toFixed(1)+') rotate('+(8*s*bk).toFixed(1)+' 300 460)');e.setAttribute('opacity',(1-.5*bk).toFixed(2))});
rise($('dang'),p(u,TM.broken_coin+.4,TM.broken_coin+.9));hb($('actb'),720,140+320*p(u,TM.broken_coin+1.4,TM.broken_coin+3));
const rk=p(u,TM.rocket+.6,TM.rocket+2.6);rise($('rgt'),p(u,TM.rocket,TM.rocket+.5));
$('rock').setAttribute('transform','translate(1280 '+(680-300*rk+(rk>0&&rk<1?3*Math.sin(t*9):0)).toFixed(1)+')');
$('flame').setAttribute('transform','scale(1 '+(1+.3*Math.sin(t*14)).toFixed(2)+')');
rise($('brk'),p(u,TM.rocket+2.8,TM.rocket+3.4));

rise($('me'),p(u,TM.person,TM.person+.5));rise($('cpl'),p(u,TM.career_paths,TM.career_paths+.5));
const pick=u>=TM.one_path,wk=p(u,TM.one_path+.6,TM.one_path+3.2);
PT.forEach((q,i)=>{const k=p(u,TM.career_paths+i*.15,TM.career_paths+i*.15+.5),on=pick&&i==2,o=(k*(pick&&!on?.25:1)).toFixed(2);
  q[0].setAttribute('opacity',o);q[1].setAttribute('opacity',o);q[0].setAttribute('stroke',on?'var(--gain)':'var(--muted)');q[0].setAttribute('stroke-width',on?8:4);q[0].setAttribute('stroke-dasharray',on?'none':'10 10');q[1].setAttribute('fill',on?'var(--gain)':'var(--stage)')});
const WL=PT[2][0].getTotalLength(),wp=PT[2][0].getPointAtLength(WL*wk);
$('walker').setAttribute('cx',wp.x.toFixed(1));$('walker').setAttribute('cy',wp.y.toFixed(1));$('walker').setAttribute('opacity',pick?1:0);
rise($('one'),p(u,TM.one_path+.4,TM.one_path+1));

rise($('mega'),p(u,TM.megaphone,TM.megaphone+.5));
const sp=u>=TM.spotlight;
CR.forEach(([g,r,w,tx],i)=>{const a=TM.channels+i*.3;rise(g,p(u,a,a+.4));r.setAttribute('width',(w*p(u,a+.2,a+(i==2?2.2:1))).toFixed(1));r.setAttribute('opacity',sp&&i!=2?.3:1);tx.style.fill=sp&&i==2?'var(--gain)':'var(--muted)'});
$('beam').setAttribute('opacity',(p(u,TM.spotlight,TM.spotlight+.6)*(.8+.2*Math.sin(t*3))).toFixed(2));
rise($('pour'),p(u,TM.spotlight+.8,TM.spotlight+1.4));

const b8=SC[8][0]/K;
rise($('qa'),p(u,b8+.4,b8+.9));rise($('qb'),p(u,b8+.8,b8+1.3));rise($('qc'),p(u,b8+1.2,b8+1.7));
rise($('qg'),p(u,b8+1.4,b8+1.9));hb($('qt'),760,160*p(u,b8+1.8,b8+3.2));
rise($('qd'),p(u,b8+6.6,b8+7.2));