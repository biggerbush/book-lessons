const r0=p(u,TM.stage,TM.stage+.6),f0=p(u,TM.stage+5.8,TM.stage+6.5);
rise($('cty'),r0);rise($('dots'),r0);rise($('flw'),f0);
const k0=Math.floor(t*.7)%6,q0=fr(t*.7);
mv($('pA'),cA(k0),cA(6),q0);mv($('pB'),cB(k0),cB((k0+1)%6),q0);$('pA').setAttribute('opacity',f0);$('pB').setAttribute('opacity',f0);

rise($('pan'),p(u,TM.two_maps,TM.two_maps+.6));rise($('hubG'),p(u,TM.hub,TM.hub+.6));rise($('webG'),p(u,TM.web,TM.web+.6));
hP.forEach((c,i)=>mv(c,HN[i],[450,480],fr(t*.5+i*.37)));
wP.forEach((c,i)=>{const e=WE[(i*5)%WE.length],f=fr(t*.4+i/6);mv(c,i%2?e[0]:e[1],i%2?e[1]:e[0],f)});

rise($('pal'),p(u,TM.palace,TM.palace+.6));
const g2=p(u,TM.gate,TM.gate+.6);
PX.forEach((x,i)=>{const a=[x,566],b=[800,440],bl=i%2==1;mv(HR[i],a,b,fr(t*.4+i*.23));mv(HO[i],b,a,fr(t*.4+i*.23+.5));
  HL[i].setAttribute('opacity',bl?1-.8*g2:1);HO[i].setAttribute('opacity',bl?1-g2:1)});
rise($('gt'),g2);rise($('risk'),p(u,TM.gate+5,TM.gate+5.6));

nG.forEach((g,i)=>rise(g,p(u,rt3(i),rt3(i)+.4)));
eL.forEach((l,k)=>{const a=Math.max(rt3(E3[k][0]),rt3(E3[k][1]))+.3;l.setAttribute('opacity',p(u,a,a+.4))});
rise($('byp'),p(u,TM.newspaper+.6,TM.newspaper+1.1));
P3.forEach((c,i)=>{const e=E3[i*2],f=fr(t*.35+i*.25);mv(c,[N3[e[0]][1],N3[e[0]][2]],[N3[e[1]][1],N3[e[1]][2]],f);c.setAttribute('opacity',p(u,TM.courthouse+2.8,TM.courthouse+3.2))});
rise($('noisy'),p(u,TM.courthouse+5.4,TM.courthouse+6));

const ar=u>=TM.director+4.2;
HP.forEach((h,i)=>{const s=i==DI?TM.director:TM.director+1+((i*7)%24)*.08,sit=p(u,s,s+.4),cp=u>=TM.clapping&&sit<.5,w=Math.abs(Math.sin(t*9+i));
  rise(h[0],p(u,TM.hall+i*.03,TM.hall+i*.03+.4));
  h[1].setAttribute('transform','translate(0 '+(30*sit-(cp?3*w:0)).toFixed(1)+')');h[3].setAttribute('opacity',cp?(.3+.7*w).toFixed(2):0);
  if(i==DI)h[2].childNodes.forEach(n=>n.setAttribute('class',ar?'loss':sit>0?'gain':'ink'))});
rise($('ban'),p(u,TM.clapping,TM.clapping+.5));rise($('dare'),p(u,TM.clapping+1,TM.clapping+1.5));
rise($('cage'),p(u,TM.director+4.2,TM.director+4.7));rise($('arr'),p(u,TM.director+4.2,TM.director+4.8));

const h5=u>=TM.warning+2.9,a5=p(u,TM.ruler_alone,TM.ruler_alone+.6);
B5.forEach((b,i)=>{rise(b[0],p(u,TM.warning+i*.3,TM.warning+i*.3+.4));b[2].textContent=h5?'…':'!';b[1].setAttribute('stroke',h5?'var(--muted)':'var(--loss)');b[2].style.fill=h5?'var(--muted)':'var(--loss)'});
K5.forEach(k=>k.setAttribute('opacity',1-.8*a5));
const f5=fr(t*.3)*3,sg=Math.min(2,Math.floor(f5));mv($('msg5'),CH5[sg],CH5[sg+1],f5-sg);$('msg5').setAttribute('opacity',((1-a5)*p(u,TM.warning,TM.warning+.4)).toFixed(2));
$('ring5').setAttribute('opacity',a5);rise($('lone'),a5);
rise($('ch5'),p(u,TM.famine,TM.famine+.5));$('real5').setAttribute('stroke-dashoffset',(1-p(u,TM.famine+.5,TM.famine+3)).toFixed(3));
rise($('mil'),p(u,TM.famine+6.2,TM.famine+6.8));

// scene 6
rise($('bal'),p(u,TM.ballot,TM.ballot+.5));
T6.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.ballot+.3+i*.12,TM.ballot+.6+i*.12).toFixed(2)));
$('bp').setAttribute('transform','translate(0 '+(150*p(u,TM.ballot+1.2,TM.ballot+2)).toFixed(1)+')');
rise($('net6'),p(u,TM.ballot+1.5,TM.ballot+2.1));
const w6=p(u,TM.strongman+.8,TM.strongman+2);
rise($('lead6'),p(u,TM.strongman,TM.strongman+.5));
E6.forEach(e=>e.setAttribute('opacity',(1-.88*w6).toFixed(2)));
$('cut6').setAttribute('opacity',w6.toFixed(2));
const sp=p(u,TM.strongman+1.2,TM.strongman+2.4);S6.forEach(e=>e.setAttribute('stroke-dashoffset',(1-sp).toFixed(3)));
ND6.forEach((c,i)=>{c.style.fill=w6>.5?(CUT6.includes(i)?'var(--muted)':'var(--ink)'):'var(--gain)'});
$('lc6').style.fill=w6>.5?'var(--muted)':'var(--ink)';$('lp6').style.fill=w6>.5?'var(--muted)':'var(--ink)';
rise($('sm6'),p(u,TM.strongman,TM.strongman+.5));rise($('sh6'),p(u,TM.shield,TM.shield+.6));

const fx=p(u,TM.repair+2,TM.repair+2.6),e7=p(u,TM.repair,TM.repair+.5);
A7.forEach((a,i)=>{rise(a[0],p(u,TM.argument+i*.15,TM.argument+i*.15+.4));a[1].setAttribute('transform','rotate('+((1-fx)*6*Math.sin(t*5+i*2)).toFixed(1)+' '+a[2]+' 540)')});
rise($('er7'),e7);
R7.forEach((r,k)=>{const f=fr(t*.5+k/3);r.setAttribute('r',(40+80*f).toFixed(1));r.setAttribute('opacity',((1-f)*(1-fx)*e7).toFixed(2))});
L7.forEach((l,i)=>l.setAttribute('opacity',p(u,TM.repair+.8+i*.1,TM.repair+1.2+i*.1)));
$('ec7').setAttribute('class',fx>.5?'gain':'loss');$('ex7').setAttribute('opacity',1-fx);$('ok7').setAttribute('opacity',fx);
rise($('fx7'),p(u,TM.repair+3,TM.repair+3.6));

rise($('qa'),p(u,TM.workplace,TM.workplace+.5));rise($('qb'),p(u,TM.workplace+.4,TM.workplace+.9));rise($('qc'),p(u,TM.workplace+.8,TM.workplace+1.3));
const g8=p(u,TM.workplace+1.3,TM.workplace+1.8);rise($('g8'),g8);
const b8=fr(t*.4),bx=(1-b8)*(1-b8)*1090+2*(1-b8)*b8*1220+b8*b8*1350,by=(1-b8)*(1-b8)*540+2*(1-b8)*b8*440+b8*b8*490;
$('bm8').setAttribute('transform','translate('+bx.toFixed(1)+' '+by.toFixed(1)+')');$('bm8').setAttribute('opacity',(g8*Math.min(1,(1-b8)*6)).toFixed(2));
rise($('tk'),p(u,TM.workplace+5.4,TM.workplace+6));