const rv=(id,a)=>rise($(id),p(u,a,a+.5));
const z0=SC[1][0]/K, r0=p(u,z0-4.4,z0-3.2);
QB.forEach((g,i)=>{const k=p(u,TM.worried_face+.3+i*.4,TM.worried_face+.8+i*.4);g.setAttribute('opacity',(k*(1-r0)).toFixed(2));g.setAttribute('transform','translate(0 '+(-(1-k)*12-r0*80+4*Math.sin(t*2+i)).toFixed(1)+')')});
Y0.forEach(e=>e.setAttribute('class',r0>.5?'gain':'ink'));

rv('you1',SC[1][0]/K+.1); rv('jury',TM.jury_box); $('th1').setAttribute('opacity',p(u,TM.jury_box+.3,TM.jury_box+.8));
JR.forEach((j,i)=>{const a=TM.jury_box+.4+i*.12;rise(j.g,p(u,a,a+.3));j.c.forEach(e=>e.setAttribute('class',u>=TM.gavel+.4+i*.1?'loss':'ink'))});
rv('gav',TM.gavel); $('gavh').setAttribute('transform','rotate('+(u>=TM.gavel+.3?28*Math.abs(Math.sin(t*3)):20).toFixed(1)+' 1300 230)');
rv('dec1',fr(TM.gavel,SC[2][0]/K,.4));

rv('lap',TM.laptop); rv('lbl2',TM.laptop+.2); const pz=p(u,TM.pause_button,TM.pause_button+.5); rise($('pz'),pz); $('bulb').setAttribute('opacity',(1-.7*pz).toFixed(2));
rv('cld',TM.thought_cloud); rv('cq0',TM.thought_cloud+.6); rv('cq1',TM.thought_cloud+2.4);
const yp=12*p(u,TM.pause_button+.6,TM.pause_button+4); YR.forEach((r,i)=>r.setAttribute('fill',yp>i+.5?'var(--loss)':'var(--line)')); rv('yrw',TM.pause_button+.4);

const s3=SC[3][0]/K; rv('pt3',s3+.2); rv('you3',s3+.4);
['pa','pb'].forEach((id,i)=>$(id).setAttribute('opacity',p(u,TM.split_paths+i*.4,TM.split_paths+i*.4+.5)));
rv('ba3',TM.split_paths+.5); rv('bb3',TM.split_paths+.9);
JD.forEach((g,i)=>rise(g,p(u,TM.split_paths+2+i*.2,TM.split_paths+2.4+i*.2))); rv('je3',TM.split_paths+3.4);
rv('mir',TM.mirror); [0,1,2].forEach(i=>rv('mm'+i,TM.mirror+1+i*.8));
rv('wx',fr(TM.mirror,SC[4][0]/K,.56));
RN.forEach((l,i)=>{const k=(t*1.5+i*.37)%1;l.setAttribute('transform','translate(0 '+(k*6).toFixed(1)+')');l.setAttribute('opacity',(1-k).toFixed(2))});

const a4=TM.speech_bubble,b4=TM.open_door; rv('bub4',a4); rv('oth4',a4+.6); rv('t4a',fr(a4,b4,.47)); rv('t4b',fr(a4,b4,.73)); rv('door',b4);
const dk=p(u,b4+.2,b4+1),wk=p(u,b4+.8,b4+2.6),dw=480+150*(1-.8*dk);
$('leaf').setAttribute('points','480,470 '+dw.toFixed(1)+','+(470+18*dk).toFixed(1)+' '+dw.toFixed(1)+','+(720-18*dk).toFixed(1)+' 480,720');
$('w4').setAttribute('transform','translate('+(355*wk).toFixed(1)+' '+(-6*Math.abs(Math.sin(wk*Math.PI*4))).toFixed(1)+')'); rv('cap4',b4+1);

rv('g5',TM.empty_tank); const th=Math.PI*p(u,TM.empty_tank+.4,TM.empty_tank+2.5)-.04*Math.sin(t*6);
$('nd5').setAttribute('x2',(330+130*Math.cos(th)).toFixed(1)); $('nd5').setAttribute('y2',(480-130*Math.sin(th)).toFixed(1));
rv('gp5w',TM.empty_tank+.6); const gc=(t*.3)%1,gx=1000+380*ease(cl(gc/.8));
$('gp5').setAttribute('transform','translate('+gx.toFixed(1)+' 400)'); $('gp5').setAttribute('opacity',(gc>.9?1-(gc-.9)/.1:1).toFixed(2));
$('ball5').setAttribute('cx',(820+(gx-1000)*.75).toFixed(1));
CR.forEach((g,i)=>{const a=TM.crowd+(i<4?0:1.6)+(i%4)*.15;rise(g,p(u,a,a+.4))}); rv('lp5',TM.crowd+.5); rv('ld5',TM.crowd+2.1);
rv('st5',fr(TM.crowd,SC[6][0]/K,.47));

rv('cp6',TM.compass); const d6=fr(TM.compass,TM.first_step,.5),sp=p(u,d6-.4,d6+.8);
$('nd6').setAttribute('transform','translate(330 470) rotate('+((1-sp)*(120*Math.sin(t*2.3)+60*Math.sin(t*5.1))).toFixed(1)+')'); rv('dec6',d6);
rv('st6',TM.first_step); [.3,2,4].forEach((a,i)=>rv('sl'+i,TM.first_step+a));
const sv=p(u,TM.first_step+2,TM.first_step+2.6)+p(u,TM.first_step+4,TM.first_step+4.6);
$('cl6').setAttribute('transform','translate('+(775+sv*270).toFixed(1)+' '+(508-sv*120-30*Math.sin((sv%1)*Math.PI)).toFixed(1)+')');
rv('cl6w',TM.first_step+.2); rv('vl6',fr(TM.first_step,SC[7][0]/K,.57));

rv('bgw7',TM.backpack); const bk=p(u,TM.backpack+1.6,TM.backpack+2.6);
$('bg7').setAttribute('transform','translate('+(470+90*bk).toFixed(1)+' '+(470+60*bk).toFixed(1)+')'); P7.forEach(e=>e.setAttribute('class',bk>.5?'gain':'ink'));
const sk=p(u,TM.sunrise,TM.sunrise+2); $('sun7').setAttribute('transform','translate(0 '+(90*(1-sk)).toFixed(1)+')'); $('sun7').setAttribute('opacity',sk.toFixed(2));
$('ry7').setAttribute('transform','rotate('+((t*10)%360).toFixed(1)+' 1150 470)');
rv('en7',TM.sunrise+.8); rv('nm7',fr(TM.sunrise,SC[8][0]/K,.52));

rv('qa',TM.sticky_note); rv('qb',TM.sticky_note+.4); rv('qc',TM.sticky_note+.8); rv('sk8',TM.sticky_note+1.2);
rv('mc8',TM.sticky_note+4.8); $('ck8').setAttribute('opacity',p(u,TM.sticky_note+5.4,TM.sticky_note+5.8));