TR.forEach((c,i)=>{const f=(t*.5+i*.5)%1;c.setAttribute('r',(60+38*f).toFixed(1));c.setAttribute('opacity',(1-f).toFixed(2))});
TD.forEach((c,i)=>c.setAttribute('fill',t>1.5+i*.3?'var(--gain)':'var(--ink)'));

draw(BC,BL,p(u,TM.bell_curve,TM.bell_curve+1.6));
const T1=[TM.innovators,TM.early_adopter,TM.majority,TM.majority+.8,TM.majority+1.8];
A1.forEach((a,i)=>{const k=p(u,T1[i],T1[i]+.6);a.setAttribute('opacity',k);rise($('lb'+i),k)});

rise($('hrt'),p(u,TM.gut_heart,TM.gut_heart+.5));
$('hbeat').setAttribute('transform','translate(300 460) scale('+(1+.1*Math.pow(Math.abs(Math.sin(t*3.5)),6)).toFixed(3)+')');
rise($('gt0'),p(u,TM.gut_heart+.4,TM.gut_heart+.9)); rise($('gt1'),p(u,TM.gut_heart+3.4,TM.gut_heart+3.9));
rise($('queue'),p(u,TM.shop_queue,TM.shop_queue+.5));
QP.forEach((q,i)=>rise(q,p(u,TM.shop_queue+.3+i*.15,TM.shop_queue+.7+i*.15)));
$('qh').setAttribute('transform','rotate('+((t*90)%360).toFixed(1)+' 790 380)');
rise($('tag'),p(u,TM.price_tag,TM.price_tag+.5));
$('tagS').setAttribute('transform','rotate('+(4*Math.sin(t*2)).toFixed(2)+' 1250 450)');
rise($('pm2'),p(u,TM.price_tag+.6,TM.price_tag+1.1)); rise($('says'),p(u,TM.price_tag+2.4,TM.price_tag+3));

const s3=SC[3][0]/K,F=TM.percent_15+7.4;
rise($('bel3'),p(u,s3+.4,s3+.9)); rise($('maj3'),p(u,s3+.8,s3+1.3));
Q3.forEach((q,i)=>{const a=TM.hesitant+i*.15,b=F+i*.4;rise(q,p(u,a,a+.4)*(1-p(u,b,b+.4)))});
M3.forEach((m,i)=>m.setAttribute('fill',u>=F+i*.4?'var(--gain)':'var(--ink)'));
W3.forEach((w,i)=>w.setAttribute('opacity',u>=F-.4?(.3+.7*Math.abs(Math.sin(t*3-i))).toFixed(2):0));
$('bar3').setAttribute('width',(230*p(u,TM.percent_15+.3,TM.percent_15+1.8)).toFixed(1));
const fb=p(u,F,F+4); $('bar3b').setAttribute('width',(fb>0?40+1030*fb:0).toFixed(1));
rise($('band3'),p(u,TM.percent_15,TM.percent_15+.5)); rise($('pc3'),p(u,TM.percent_15+.4,TM.percent_15+1));

rise($('box4'),p(u,TM.tivo_box,TM.tivo_box+.5)); rise($('feat4'),p(u,TM.tivo_box+2.2,TM.tivo_box+2.7));
rise($('mk4'),p(u,TM.tv_feature,TM.tv_feature+.5)); draw(AR4,AL4,p(u,TM.tv_feature+.4,TM.tv_feature+1.4));
rise($('ah4'),p(u,TM.tv_feature+1.3,TM.tv_feature+1.6)); rise($('why4'),p(u,TM.tv_feature+5.8,TM.tv_feature+6.4));

rise($('ch5'),p(u,TM.empty_shelf,TM.empty_shelf+.5)); rise($('ppl5'),p(u,TM.empty_shelf+.3,TM.empty_shelf+.8));
rise($('cab5'),p(u,TM.cable_box,TM.cable_box+.5));
P5.forEach((q,i)=>{const k=p(u,TM.cable_box+.6+i*.2,TM.cable_box+2+i*.2);q.setAttribute('transform','translate('+(410*k).toFixed(1)+' 0)')});
rise($('star5'),p(u,TM.cable_box+5.8,TM.cable_box+6.4));

rise($('mega6'),p(u,TM.megaphone,TM.megaphone+.5)); rise($('snd6'),p(u,TM.megaphone+.4,TM.megaphone+.9));
rise($('bel6'),p(u,TM.megaphone+.8,TM.megaphone+1.3)); rise($('crowd6'),p(u,TM.megaphone+1,TM.megaphone+1.6));
rise($('hand6'),p(u,TM.megaphone+6.2,TM.megaphone+6.7)); rise($('why6'),p(u,TM.megaphone+6.2,TM.megaphone+6.7));
const r6=p(u,TM.ripple,TM.ripple+.5);
R6.forEach((e,i)=>{const f=(t*.35+i/3)%1;e.setAttribute('rx',(96+416*f).toFixed(1));e.setAttribute('ry',(48+176*f).toFixed(1));e.setAttribute('opacity',((1-f)*r6).toFixed(2))});
D6.forEach(([c,d])=>c.setAttribute('fill',u>=TM.ripple+.6+d*1.2?'var(--gain)':'var(--ink)'));
rise($('cap6'),p(u,TM.ripple+1,TM.ripple+1.6));

rise($('crd7'),p(u,TM.notebook,TM.notebook+.5)); rise($('ev7'),p(u,TM.notebook+.3,TM.notebook+.8));
draw($('stk7'),610,p(u,TM.notebook+1.2,TM.notebook+2));
rise($('nb7'),p(u,TM.notebook+2.6,TM.notebook+3.1)); rise($('q7'),p(u,TM.notebook+3,TM.notebook+3.5));
RW.forEach((g,i)=>rise(g,p(u,TM.circle_ten+i*.22,TM.circle_ten+i*.22+.4)));
rise($('ten7'),p(u,TM.circle_ten+2.4,TM.circle_ten+2.8)); draw($('tc7'),440,p(u,TM.circle_ten+2.4,TM.circle_ten+3.4));

const s8=SC[8][0]/K;
rise($('qa'),p(u,s8+.4,s8+.9)); rise($('qb'),p(u,s8+.8,s8+1.3)); rise($('qc'),p(u,s8+1.2,s8+1.7));
rise($('ml8'),p(u,s8+1.6,s8+2.1)); rise($('g8'),p(u,s8+2,s8+2.5));
G8.forEach((c,i)=>c.setAttribute('fill',u>=s8+2.6+i*.15?'var(--gain)':'var(--ink)'));