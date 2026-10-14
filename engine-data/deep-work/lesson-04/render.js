const ph=p(u,TM.phone_line,TM.phone_line+1.6),py=600-200*ph;
$('t0ph').setAttribute('y',py.toFixed(1));$('t0ph').setAttribute('class',ph>.95?'loss':'ink');
$('t0arm').setAttribute('d','M1350 480L1412 '+(py+50).toFixed(1));
$('t0glow').setAttribute('cy',(py+38).toFixed(1));$('t0glow').setAttribute('r',(56+6*Math.sin(t*4)).toFixed(1));$('t0glow').setAttribute('opacity',(p(u,TM.phone_line+1.4,TM.phone_line+2)*(.5+.4*Math.sin(t*4))).toFixed(2));
rise($('t0foc'),p(u,TM.phone_line+6,TM.phone_line+6.5));$('t0bar').setAttribute('width',(300*(1-.8*p(u,TM.phone_line+6.5,TM.phone_line+9))).toFixed(1));

rise($('b1brain'),p(u,TM.brain_gym,TM.brain_gym+.5));rise($('b1trait'),p(u,TM.brain_gym+.6,TM.brain_gym+1.1));
$('b1strike').setAttribute('x2',(180+240*p(u,TM.brain_gym+2,TM.brain_gym+2.6)).toFixed(1));
rise($('b1db'),p(u,TM.dumbbell,TM.dumbbell+.5));
const gr=1+.1*p(u,TM.dumbbell+.5,TM.dumbbell+2)+(u>TM.dumbbell?.02*Math.sin(t*3):0);
b1in.setAttribute('transform','translate(300 450) scale('+gr.toFixed(3)+') translate(-300 -450)');
rise($('b1paths'),p(u,TM.two_paths,TM.two_paths+.5));
const dd=((t*.45)%1)*656;let bx,by;if(dd<210){bx=490+dd;by=450}else{const k=(dd-210)/446;bx=700+420*k;by=450+150*k}
$('b1dot').setAttribute('cx',bx.toFixed(1));$('b1dot').setAttribute('cy',by.toFixed(1));

rise($('n2res'),p(u,TM.researcher,TM.researcher+.5));rise($('n2fun'),p(u,TM.cluttered_desk,TM.cluttered_desk+.5));
ND.forEach(([e,x0],i)=>{const c=(t*.25+i/14)%1,y=230+560*c,xe=760+(x0-760)*.06,x=y<420?x0:y<560?x0+(xe-x0)*(y-420)/140:xe;e.setAttribute('cx',x.toFixed(1));e.setAttribute('cy',y.toFixed(1))});
rise($('n2brain'),p(u,TM.faded_spot,TM.faded_spot+.5));
SPK.forEach((e,i)=>{const a=i*.628,l=20+20*Math.abs(Math.sin(t*7+i*1.7)),c=Math.cos(a),s=Math.sin(a);e.setAttribute('x1',(1250+c*160).toFixed(1));e.setAttribute('y1',(450+s*130).toFixed(1));e.setAttribute('x2',(1250+c*(160+l)).toFixed(1));e.setAttribute('y2',(450+s*(130+l)).toFixed(1))});

rise($('i3clock'),p(u,TM.clock_tick,TM.clock_tick+.5));$('i3hand').setAttribute('transform','rotate('+(Math.floor(t)*30%360)+' 260 380)');
rise($('i3slots'),p(u,TM.clock_tick+.8,TM.clock_tick+1.3));
SL.forEach((e,i)=>e.setAttribute('opacity',p(u,TM.phone_glow+i*.3,TM.phone_glow+i*.3+.3)));
rise($('i3glow'),p(u,TM.phone_glow+3.5,TM.phone_glow+4));
rise($('i3door'),p(u,TM.locked_door,TM.locked_door+.5));
const bang=u>TM.locked_door+.8?Math.abs(Math.sin(t*4)):1;
$('i3mind').setAttribute('transform','translate('+(855-60*bang).toFixed(1)+' 0)');$('i3hit').setAttribute('opacity',bang<.25?1:0);

rise($('f4top'),p(u,TM.split_screen,TM.split_screen+.5));
$('f4x').setAttribute('x2',(110+1380*p(u,TM.split_screen+2.2,TM.split_screen+3)).toFixed(1));
rise($('f4bot'),p(u,TM.pause_sign,TM.pause_sign+.5));rise($('f4cal'),p(u,TM.calendar,TM.calendar+.5));

rise($('n5pad'),p(u,TM.notepad,TM.notepad+.5));rise($('n5list'),p(u,TM.hourglass,TM.hourglass+.5));
[0,1,2].forEach(i=>rise($('n5l'+i),p(u,TM.hourglass+.6+i*.6,TM.hourglass+1+i*.6)));
rise($('n5hg'),p(u,TM.hourglass,TM.hourglass+.5));
const sk=p(u,TM.hourglass+.5,TM.hourglass+4.5),yt=330+120*sk,ht=70-60*(yt-290)/160,yb=610-110*sk,hb=10+60*(yb-450)/160;
$('n5st').setAttribute('points',(740-ht)+','+yt+' '+(740+ht)+','+yt+' 750,450 730,450');
$('n5sb').setAttribute('points','672,608 808,608 '+(740+hb)+','+yb+' '+(740-hb)+','+yb);
$('n5sr').setAttribute('y2',yb.toFixed(1));$('n5sr').setAttribute('opacity',sk>0&&sk<1?1:0);
rise($('n5home'),p(u,TM.home_couch,TM.home_couch+.5));

rise($('w6path'),p(u,TM.walking_path,TM.walking_path+.5));
const ws=.04+.88*lin(u,TM.walking_path,SC[6][1]/K);
wk.setAttribute('transform','translate('+bz(ws,120,500,900,1480).toFixed(1)+' '+(bz(ws,760,640,820,700)-4*Math.abs(Math.sin(t*5))).toFixed(1)+')');
rise($('w6bulb'),p(u,TM.light_bulb,TM.light_bulb+.5));[0,1,2].forEach(i=>rise($('w6l'+i),p(u,TM.light_bulb+1+i*.5,TM.light_bulb+1.4+i*.5)));
rise($('w6back'),p(u,TM.arrow_back,TM.arrow_back+.5));
const we=u-TM.arrow_back,wc=((we%2.5)+2.5)%2.5/2.5,wd=wc<.5?ease(wc/.5):1-ease((wc-.5)/.5);
$('w6dot').setAttribute('cx',(870+280*wd).toFixed(1));$('w6dot').setAttribute('cy',(330-60*wd).toFixed(1));$('w6dot').setAttribute('opacity',we>0?1:0);
const nr=Math.min(5,Math.floor(Math.max(0,we)/2.5));RP.forEach((e,i)=>e.setAttribute('fill',i<nr?'var(--gain)':'var(--line)'));

rise($('r7ted'),p(u,TM.roosevelt,TM.roosevelt+.5));BR.forEach((e,i)=>e.setAttribute('opacity',p(u,TM.roosevelt+2+i*.4,TM.roosevelt+2.4+i*.4)));
rise($('r7sw'),p(u,TM.stopwatch,TM.stopwatch+.5));
const ha=u>TM.stopwatch+1?90*((((u-TM.stopwatch-1)%3)+3)%3)/3:0;$('r7hand').setAttribute('transform','rotate('+ha.toFixed(1)+' 800 430)');
rise($('r7race'),p(u,TM.stopwatch+4,TM.stopwatch+4.5));$('r7run').setAttribute('cx',(1010+370*((t*.4)%1)).toFixed(1));
rise($('r7flag'),p(u,TM.finish_flag,TM.finish_flag+.5));rise($('r7end'),p(u,TM.finish_flag+.3,TM.finish_flag+.8));
$('r7bar').setAttribute('width',(860*p(u,TM.finish_flag+.8,TM.finish_flag+2.5)).toFixed(1));

rise($('qa'),p(u,TM.pocket,TM.pocket+.5));rise($('qb'),p(u,TM.pocket+.4,TM.pocket+.9));rise($('qc'),p(u,TM.pocket+.8,TM.pocket+1.3));
$('c8ph').setAttribute('y',(220+160*p(u,TM.pocket+1.4,TM.pocket+2.6)).toFixed(1));
rise($('c8tag'),p(u,TM.pocket+5.4,TM.pocket+6));$('c8bar').setAttribute('width',(600*p(u,TM.pocket+5.8,TM.pocket+9)).toFixed(1));