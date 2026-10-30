PS.forEach((g,i)=>drop(g,p(u,TM.seed_pile+i*.05,TM.seed_pile+i*.05+.4),160));
const gk=p(u,TM.seed_pile+5.8,TM.seed_pile+6.4);$('glow').setAttribute('opacity',gk);$('glow').setAttribute('r',(24+6*Math.sin(t*3)).toFixed(1));

rise($('bed'),p(u,TM.garden_bed,TM.garden_bed+.5));rise($('packet'),p(u,TM.seed_packet,TM.seed_packet+.5));
BS.forEach((g,i)=>{const a=TM.seed_packet+.4+i*.25;drop(g,p(u,a,a+.35),140)});
rise($('collect'),p(u,TM.seed_packet+5.8,TM.seed_packet+6.4));
CH1.forEach((g,i)=>{const a=TM.seed_packet+9.5+i*.5;rise(g,p(u,a,a+.4))});

rise($('cseed'),p(u,SC[2][0]/K+.3,SC[2][0]/K+.9));
ICG.forEach((g,i)=>{const a=i<3?TM.melody_note+i*1.5:TM.thought_cloud+(i-3)*1.2;rise(g,p(u,a,a+.5))});
rise($('plain'),p(u,TM.thought_cloud+4.5,TM.thought_cloud+5.1));

rise($('cards'),p(u,SC[3][0]/K+.3,SC[3][0]/K+.9));
const sq=p(u,TM.red_pen+2.6,TM.red_pen+3.4);let pi=0;const SW=TW+8,SX0=TX0-4;
CD.forEach((c,i)=>{const a=TM.red_pen+.3+i*.55,k=p(u,a,a+.45);if(u>=a)pi=i;c.st.setAttribute('x2',(SX0+SW*k).toFixed(1));
  c.r.setAttribute('height',(80-44*sq).toFixed(1));c.r.setAttribute('y',(c.cy-40+22*sq).toFixed(1));c.rk.setAttribute('opacity',sq);
  c.sd.setAttribute('transform','translate(236 '+c.cy+') scale(1 '+(1-.55*sq).toFixed(3)+') translate(-236 '+(-c.cy)+')');
  c.g.setAttribute('opacity',(1-.2*sq).toFixed(2))});
const pk=p(u,TM.red_pen+.3+pi*.55,TM.red_pen+.75+pi*.55);
$('pen').setAttribute('transform','translate('+(SX0+SW*pk).toFixed(1)+' '+CD[pi].cy+')');
$('pen').setAttribute('opacity',(p(u,TM.red_pen,TM.red_pen+.3)*(1-p(u,TM.red_pen+2.6,TM.red_pen+3))).toFixed(2));
rise($('sq3'),p(u,TM.red_pen+2.5,TM.red_pen+3));rise($('rts'),sq);
PL.forEach(q=>{const k=p(u,TM.tiny_sprout+.3,TM.tiny_sprout+(q.big?3.5:2));grow(q.st,700,q.h,k);q.cr.setAttribute('cy',(700-q.h*k).toFixed(1));q.cr.setAttribute('r',((q.big?40:22)*k).toFixed(1))});
rise($('later'),p(u,TM.tiny_sprout+6.6,TM.tiny_sprout+7.2));

rise($('eye'),p(u,TM.question_mark,TM.question_mark+.5));$('pupil').setAttribute('cx',(1330+30*Math.sin(t*1.5)).toFixed(1));
const wc=TM.watering_can,cx=210+800*lin(u,wc+.5,wc+4.5),pour=u>wc+.5&&u<wc+4.8;
$('can').setAttribute('opacity',p(u,wc,wc+.5));$('canb').setAttribute('transform','translate('+cx.toFixed(1)+' 300)');
DR.forEach((d,j)=>{const y=18+((t*160+j*40)%100);d.setAttribute('y1',y.toFixed(1));d.setAttribute('y2',(y+12).toFixed(1));d.setAttribute('opacity',pour?1:0)});
SP4.forEach((s,i)=>{const a=wc+.5+4*cl((s.x-331)/800),k=p(u,a,a+1.5),y=640-s.h*k;grow(s.st,640,s.h,k);s.lf.setAttribute('transform','translate(0 '+y.toFixed(1)+')');s.lf.setAttribute('opacity',k);
  s.q.setAttribute('opacity',(p(u,TM.question_mark+i*.2,TM.question_mark+i*.2+.4)*(1-k)).toFixed(2))});
rise($('only'),p(u,wc+5,wc+5.6));

rise($('nb'),p(u,TM.notebook,TM.notebook+.5));$('arr5').setAttribute('opacity',p(u,TM.notebook+1,TM.notebook+1.5));
rise($('jar'),p(u,TM.seed_jar-.4,TM.seed_jar));
JS.forEach((g,i)=>{const a=TM.seed_jar+i*.12;drop(g,p(u,a,a+.35),120)});
rise($('qq'),p(u,TM.seed_jar+3.8,TM.seed_jar+4.3));
grow($('jstem'),330,100,p(u,TM.seed_jar+6.4,TM.seed_jar+7.6));rise($('jleaf'),p(u,TM.seed_jar+7.2,TM.seed_jar+7.7));
rise($('more'),p(u,TM.seed_jar+6.4,TM.seed_jar+7));

rise($('cal'),p(u,TM.calendar,TM.calendar+.5));rise($('shelfg'),p(u,TM.shelf,TM.shelf+.5));
const ss=TM.shelf,mk6=p(u,ss+.6,ss+2),seas=u>=ss+5.8;
$('mseed').setAttribute('opacity',p(u,ss+.2,ss+.6));
$('mseed').setAttribute('transform','translate('+(350+730*mk6).toFixed(1)+' '+(690-112*mk6-120*Math.sin(Math.PI*mk6)).toFixed(1)+')');
DY.forEach((d,i)=>d.setAttribute('fill',u>=ss+1+i*.22?'var(--muted)':'var(--stage)'));
$('calt').textContent=u<ss+1.5?'TODAY':seas?'ITS SEASON':'MONTHS LATER';
$('calh').setAttribute('fill',seas?'var(--gain)':'var(--ink)');$('calt').style.fill=seas?'var(--on-gain)':'var(--stage)';
const lk=p(u,ss+5.8,ss+6.4);LIDS[1].setAttribute('transform','translate(0 '+(-40*lk).toFixed(1)+')');LIDS[1].setAttribute('opacity',(1-lk).toFixed(2));
grow($('wstem'),570,260,p(u,ss+6.2,ss+7.6));rise($('wleaf'),p(u,ss+7.2,ss+7.7));rise($('season'),p(u,ss+5.8,ss+6.4));

rise($('tmr'),p(u,TM.timer,TM.timer+.5));$('arc').setAttribute('stroke-dashoffset',(942*(1-p(u,TM.timer+.3,TM.timer+6))).toFixed(1));
L7.forEach((l,i)=>{const a=TM.timer+.6+i*.7;l.setAttribute('opacity',p(u,a,a+.3))});
rise($('tags'),p(u,TM.timer+6.2,TM.timer+6.7));rise($('nox'),p(u,TM.cross_out,TM.cross_out+.5));
rise($('wait'),p(u,TM.cross_out+1.4,TM.cross_out+1.9));
D7.forEach((d,i)=>d.setAttribute('fill',u>=TM.cross_out+1.8+i*.6?'var(--gain)':'var(--stage)'));
const pick=u>=TM.cross_out+4.2;L7[5].setAttribute('fill',pick?'var(--gain)':'var(--ink)');$('pick7').setAttribute('opacity',pick?1:0);

rise($('qa'),p(u,TM.open_hand,TM.open_hand+.5));rise($('qb'),p(u,TM.open_hand+.4,TM.open_hand+.9));
const hk=p(u,TM.open_hand+.8,TM.open_hand+1.3),hout=p(u,TM.open_hand+4.3,TM.open_hand+4.9);
$('hand').setAttribute('opacity',(hk*(1-hout)).toFixed(3));
$('hand').setAttribute('transform','translate('+(40*(1-hk)+60*hout).toFixed(1)+' '+(-10*(1-hk)).toFixed(1)+')');
rise($('plant8'),p(u,TM.open_hand+2.9,TM.open_hand+3.4));
const tk=p(u,TM.open_hand+3.2,TM.open_hand+4.2);
$('tseed').setAttribute('opacity',hk);
$('tseed').setAttribute('transform','translate('+(1268+22*tk).toFixed(1)+' '+(572+92*tk).toFixed(1)+')');
grow($('tstem'),668,78,p(u,TM.open_hand+4.4,TM.open_hand+5.2));rise($('tleaf'),p(u,TM.open_hand+5,TM.open_hand+5.5));