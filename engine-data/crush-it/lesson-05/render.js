const R=(id,a,d=.5)=>rise(typeof id=='string'?$(id):id,p(u,a,a+d));

plats.forEach((g,i)=>R(g,TM.stage+i*.3));
const PH=1.6,f0=(t%PH)/PH,i0=Math.floor(t/PH)%3,j0=(i0+1)%3,k0=ease(cl((f0-.6)/.4));
$('hop').setAttribute('transform',`translate(${(PX[i0]+(PX[j0]-PX[i0])*k0).toFixed(1)} ${(PT[i0]+(PT[j0]-PT[i0])*k0-50*Math.sin(Math.PI*k0)).toFixed(1)})`);
$('hop').setAttribute('opacity',p(t,TM.stage+1,TM.stage+1.5));
R('qm',TM.stage+4.6);

R('me',TM.crossroads); R('roads',TM.crossroads+.6,.8);
doors.forEach((g,i)=>R(g,TM.three_doors+i*.4));
R('fit',TM.three_doors+3.8);
const hi=u>=TM.three_doors+3.8?Math.floor(t/1.2)%3:-1;
doorR.forEach((r,i)=>r.setAttribute('stroke',i==hi?'var(--gain)':'var(--ink)'));

R('writer',TM.keyboard); R('kb',TM.keyboard+.3);
const kk=(Math.floor(t*7)*13)%36;
keys.forEach((k,i)=>k.setAttribute('fill',u>=TM.keyboard+.5&&i==kk?'var(--gain)':'var(--line)'));
R('br',TM.blog_page); posts.forEach((g,i)=>R(g,TM.blog_page+.6+i*1.2));
fl.forEach((c,i)=>{const f=(t*.8+i/5)%1;c.setAttribute('cx',(630+170*f).toFixed(1));c.setAttribute('cy',(560-150*f).toFixed(1));c.setAttribute('opacity',u>=TM.blog_page?Math.sin(Math.PI*f).toFixed(2):0)});
R('nocam',TM.blog_page+3); R('shr',TM.share_icon); R('sharetx',TM.share_icon+.3);

R('pod',TM.microphone); R('vid',TM.camera); R('heavy',TM.camera+5);
$('wv0').setAttribute('opacity',(.5+.5*Math.sin(t*4)).toFixed(2)); $('wv1').setAttribute('opacity',(.5+.5*Math.sin(t*4-1.2)).toFixed(2));
$('rec3').setAttribute('opacity',Math.sin(t*5)>0?1:.2); $('rec4').setAttribute('opacity',Math.sin(t*5)>0?1:.2);

R('gary',TM.wine_bottle); R('loud',TM.wine_bottle+.4);
$('loud').setAttribute('transform',`translate(${(3*Math.sin(t*9)).toFixed(1)} 0)`);
R('set',TM.film_set); R('cam4',TM.film_set+.4); R('bucket',TM.spit_bucket);
drops.forEach((c,i)=>{const f=((t*.7)+i*.08)%1,q=1-f;c.setAttribute('cx',(q*q*1040+2*q*f*1250+f*f*1390).toFixed(1));c.setAttribute('cy',(q*q*495+2*q*f*360+f*f*665).toFixed(1));c.setAttribute('opacity',u>=TM.spit_bucket+.4&&f<.92?1:0)});
R('sell',TM.spit_bucket+5.4);

R('bulbG',TM.lightbulb);
$('bulb').style.fill=u>=TM.lightbulb+.4?'var(--gain)':'var(--stage)';
$('rays').setAttribute('opacity',(p(u,TM.lightbulb+.4,TM.lightbulb+.9)*(.6+.4*Math.sin(t*3))).toFixed(2));
cards.forEach((g,i)=>R(g,TM.note_card+i*.9));
R('ret',TM.note_card+5.4); $('retA').setAttribute('transform',`rotate(${(t*60%360).toFixed(1)} 1380 720)`);

R('cal',TM.calendar);
checks.forEach((g,i)=>R(g,TM.stack+i*.8,.3));
tiles.forEach((g,i)=>R(g,TM.stack+i*.33,.3));
R('mom',TM.stack+5.4); $('momP').style.strokeDashoffset=(1-p(u,TM.stack+5.6,TM.stack+7.2)).toFixed(3);
R('sched',TM.stack+10.4);

R('house',TM.hub_house);
spokes.forEach((g,i)=>R(g,TM.arrows+i*.3));
// dots travel home along the shaft only (behind the arrowhead), fading in and out at the ends
backs.forEach((b,i)=>{const f=(t*.45+i/6)%1,d0=b[3]-104,d1=136,d=d0-(d0-d1)*f;b[0].setAttribute('cx',(800+b[1]*d).toFixed(1));b[0].setAttribute('cy',(470+b[2]*d).toFixed(1));b[0].setAttribute('opacity',u>=TM.arrows+5.8?Math.sin(Math.PI*f).toFixed(2):0)});
R('door',TM.arrows+5.8);

const q0=SC[8][0]/K;
R('qa',q0+.3); R('qb',q0+.7); R('qc',q0+1.2); R('qi',q0+.6); R('qd',q0+4.6);
rings.forEach((c,i)=>c.setAttribute('stroke',u>=q0+4.6&&Math.floor(t/1)%3==i?'var(--gain)':'var(--ink)'));