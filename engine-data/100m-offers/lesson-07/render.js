const k0=p(u,TM.title_card,TM.title_card+.6); rise($('t0card'),k0);
const cu=p(u,TM.title_card+1,TM.title_card+2.4); $('t0cur').setAttribute('transform','translate('+(1520-160*cu).toFixed(1)+' '+(760-340*cu).toFixed(1)+')'); $('t0cur').setAttribute('opacity',k0);
const sy=1+.05*Math.sin(t*3)*cu; $('t0yes').setAttribute('transform','translate(1315 400) scale('+sy.toFixed(3)+') translate(-1315 -400)');
strk('t0no',1286,58,p(u,TM.title_card+5.8,TM.title_card+6.4));

rise(GY[0],p(u,TM.gym_sign,TM.gym_sign+.5));
for(let i=1;i<4;i++){const a=TM.rival_gyms+(i-1)*.4;rise(GY[i],p(u,a,a+.5))}
const win=u>=TM.price_tags+2;
TG.forEach((q,i)=>{const a=TM.price_tags+i*.3;rise(q[0],p(u,a,a+.4));if(win&&i!==2)q[0].setAttribute('opacity',.35);q[1].setAttribute('stroke',win&&i===2?'var(--gain)':'var(--ink)')});
rise($('win1'),p(u,TM.price_tags+2,TM.price_tags+2.5)); rise($('hz'),p(u,TM.price_tags+4.5,TM.price_tags+5.1));

const c2=p(u,TM.busy_person,TM.busy_person+.8), f2=p(u,TM.busy_person+3.4,TM.busy_person+4);
CR.forEach((c,i)=>{const ch=i===15;c.setAttribute('opacity',(c2*(ch?1:1-.7*f2)).toFixed(2));c.setAttribute('fill',ch&&f2>0?'var(--gain)':'var(--muted)');if(ch)c.setAttribute('r',(16+6*f2).toFixed(1))});
$('link2').setAttribute('opacity',f2); rise($('pers2'),f2); rise($('need2'),p(u,TM.busy_person+4,TM.busy_person+4.6));
rise($('clk'),p(u,TM.urgent_clock,TM.urgent_clock+.5)); rise($('urg'),p(u,TM.urgent_clock+.4,TM.urgent_clock+.9));
$('mh').setAttribute('transform','rotate('+((t*240)%360).toFixed(1)+' 1060 650)'); $('hh').setAttribute('transform','rotate('+((t*20)%360).toFixed(1)+' 1060 650)');

const s3=SC[3][0]/K; rise($('rate3'),p(u,s3+.4,s3+.9));
rise($('p3bar'),p(u,TM.high_price,TM.high_price+.4));
const H=160+300*p(u,TM.high_price+.3,TM.high_price+1.6); $('bar2').setAttribute('y',(760-H).toFixed(1)); $('bar2').setAttribute('height',H.toFixed(1));
SG.forEach((g,i)=>{const a=TM.high_price+4.9+i*.8;rise(g,p(u,a,a+.4))});
CM.forEach((g,i)=>{const a=TM.committed+i*.4;rise(g,p(u,a,a+.4))}); rise($('cmtT'),p(u,TM.committed+1.4,TM.committed+1.9));

const s4=SC[4][0]/K; rise($('eq'),p(u,s4+.3,s4+.8));
const a4=p(u,TM.dream_goal,TM.dream_goal+.6), b4=p(u,TM.proof_people,TM.proof_people+.6), c4=p(u,TM.fast_track+.3,TM.fast_track+1.6);
rise($('nA'),a4); rise($('nB'),b4); ['dA','dB'].forEach(id=>$(id).setAttribute('width',(440-260*c4).toFixed(1)));
const vh=484*(.15+.25*a4+.25*b4+.35*c4); $('vfill').setAttribute('y',(752-vh).toFixed(1)); $('vfill').setAttribute('height',vh.toFixed(1));

rise($('h5a'),p(u,TM.obstacle_list,TM.obstacle_list+.5));
OBG.forEach((q,i)=>{const a=TM.obstacle_list+3.3+i*1.8;rise(q[0],p(u,a,a+.5));q[1].setAttribute('stroke-opacity',u>=TM.solution_stack+i*1.5+.4?.35:1)});
rise($('h5b'),p(u,TM.solution_stack-.2,TM.solution_stack+.3));
SOG.forEach((g,i)=>{const a=TM.solution_stack+i*1.5;rise(g,p(u,a,a+.5))});
$('prog').setAttribute('opacity',p(u,TM.solution_stack+6.6,TM.solution_stack+7.2)); rise($('prog2'),p(u,TM.solution_stack+6.9,TM.solution_stack+7.5));

rise($('e0'),p(u,TM.guarantee,TM.guarantee+.5));
const rx=180+290*p(u,TM.guarantee+1.5,TM.guarantee+3); $('risk').setAttribute('cx',rx.toFixed(1)); $('riskT').setAttribute('x',rx.toFixed(1));
rise($('e1'),p(u,TM.limited_spots,TM.limited_spots+.5));
SE.forEach((s,i)=>s.setAttribute('fill',i<10&&u>=TM.limited_spots+.6+i*.25?'var(--gain)':'var(--stage)'));
rise($('cal6'),p(u,TM.limited_spots+3.2,TM.limited_spots+3.7));
rise($('e2'),p(u,TM.catchy_name,TM.catchy_name+.5)); strk('nmS',1120,300,p(u,TM.catchy_name+1,TM.catchy_name+1.6)); rise($('pill6'),p(u,TM.catchy_name+1.6,TM.catchy_name+2.2));

rise($('same7'),p(u,TM.no_compare,TM.no_compare+.6)); rise($('uniq'),p(u,TM.no_compare+1.2,TM.no_compare+1.8)); rise($('neq7'),p(u,TM.no_compare+1.8,TM.no_compare+2.3));
rise($('nl7'),p(u,TM.no_compare+4.6,TM.no_compare+5.1)); rise($('quote7'),p(u,TM.no_compare+8.8,TM.no_compare+9.4));
C7.forEach((q,i)=>{const a=TM.order_arrows+i*.6;rise(q[0],p(u,a,a+.4));q[1].setAttribute('stroke',u>=a+.4?'var(--gain)':'var(--ink)')});

rise($('lbl8'),p(u,TM.your_offer,TM.your_offer+.5));
const hi=Math.floor(t/1.2)%5;
C8.forEach((q,i)=>{const a=TM.your_offer+i*.3,on=hi===i;rise(q[0],p(u,a,a+.4));q[1].setAttribute('fill',on?'var(--gain)':'var(--stage)');q[1].setAttribute('stroke',on?'var(--gain)':'var(--ink)');q[2].style.fill=on?'var(--on-gain)':''});
rise($('q8a'),p(u,TM.your_offer+5,TM.your_offer+5.5)); rise($('q8b'),p(u,TM.your_offer+5.4,TM.your_offer+5.9)); rise($('q8c'),p(u,TM.your_offer+5.8,TM.your_offer+6.3));