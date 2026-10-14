T0.forEach((g,i)=>{const a=TM.title_card+.8+i*1.1,k=p(u,a,a+.8);g.setAttribute('opacity',(1-k).toFixed(2));g.setAttribute('transform',`translate(${((i<2?-1:1)*30*k).toFixed(1)} ${(30*k).toFixed(1)})`)});
const c0=p(u,TM.title_card+5,TM.title_card+5.6);core0.setAttribute('opacity',c0);halo0.setAttribute('opacity',(c0*(.6+.4*Math.sin(t*3))).toFixed(2));halo0.setAttribute('r',(20+5*Math.sin(t*3)).toFixed(1));

rise($('vh'),p(u,TM.vienna,TM.vienna+.5));rise($('trk'),p(u,TM.train,TM.train+.5));
$('trn').setAttribute('transform',`translate(${(300*p(u,TM.train+.5,TM.train+4.5)).toFixed(1)} 0)`);
rise($('gt'),p(u,TM.train+2.5,TM.train+3));
VP.slice(1).forEach((g,i)=>{const a=TM.gate+.5+i*.8;g.setAttribute('opacity',(1-.85*p(u,a,a+.6)).toFixed(2))});
$('hpath').setAttribute('opacity',(1-.7*p(u,TM.gate+3,TM.gate+4)).toFixed(2));

rise(ms,p(u,TM.coat,TM.coat+.5));ML.forEach((l,i)=>l.setAttribute('opacity',p(u,TM.coat+5+i*.3,TM.coat+5.3+i*.3)));
rise($('mtxt'),p(u,TM.coat+5,TM.coat+5.5)*(1-p(u,TM.pile,TM.pile+.4)));
const k2=p(u,TM.pile+.3,TM.pile+2);$('coat').setAttribute('transform',`translate(${(440+700*k2).toFixed(1)} ${(260+210*k2).toFixed(1)}) scale(${(1-.55*k2).toFixed(3)})`);
rise($('pile'),p(u,TM.pile,TM.pile+.5));$('ghost').setAttribute('opacity',p(u,TM.pile+1.5,TM.pile+2));rise($('gone'),p(u,TM.pile+1.8,TM.pile+2.3));

const cj=p(u,TM.clothes+.3,TM.clothes+1.3);$('jk').setAttribute('transform',`translate(0 ${(80*cj).toFixed(1)})`);$('jk').setAttribute('opacity',(1-cj).toFixed(2));
const rk=p(u,TM.razor,TM.razor+1.6);$('rz').setAttribute('transform',`translate(${(320+160*rk).toFixed(1)} 300)`);$('rz').setAttribute('opacity',rk>0&&rk<1?1:0);$('hair').setAttribute('opacity',(1-rk).toFixed(2));
const nb=u>=TM.number;$('tagt').textContent=nb?'No. _ _ _':'V. FRANKL';$('tagr').setAttribute('stroke',nb?'var(--loss)':'var(--ink)');
[TM.clothes,TM.clothes+1,TM.razor,TM.number].forEach((a,i)=>{rise($('w'+i),p(u,a-.2,a+.3));$('k'+i).setAttribute('x2',(754+WS[i]*p(u,a+.6,a+1.1)).toFixed(1))});
rise($('w4'),p(u,TM.number+1,TM.number+1.5));rise($('naked'),p(u,TM.number+3.8,TM.number+4.4));

rise($('fl'),p(u,TM.family,TM.family+.5));
FAM.forEach((f,i)=>{const k=p(u,TM.family+1.5+i*.4,TM.family+2.3+i*.4);f[0].setAttribute('transform',`translate(${(40*k).toFixed(1)} 0)`);f[0].setAttribute('opacity',(1-.6*k).toFixed(2));f[1].setAttribute('opacity',k)});
$('tie').setAttribute('stroke-dasharray',u>=TM.family+1.5?'8 14':'none');$('tie').setAttribute('opacity',u>=TM.family+1.5?.4:1);
rise($('sup'),p(u,TM.family+2.5,TM.family+3));
PIL.forEach((g,i)=>{const a=TM.empty_chair+i*.8,k=p(u,a,a+.6);g.setAttribute('transform',`translate(0 ${(100*k).toFixed(1)})`);g.setAttribute('opacity',(1-k).toFixed(2))});
$('plat').setAttribute('transform',`translate(0 ${(6*Math.sin(t*1.5)*p(u,TM.empty_chair+3,TM.empty_chair+4)).toFixed(1)})`);
const ck=p(u,TM.empty_chair+4.6,TM.empty_chair+5.2);$('core4').setAttribute('opacity',ck);$('core4').setAttribute('r',(20+5*ck*Math.sin(t*3)).toFixed(1));rise($('keep'),ck);
rise($('grd'),ck);const rc=.5-.5*Math.cos(t*2.2),lx=800+250*rc,rx=1440-250*rc;
AL.setAttribute('d',`M800 415Q${((800+lx)/2).toFixed(1)} 380 ${lx.toFixed(1)} 400`);HL.setAttribute('cx',lx.toFixed(1));HL.setAttribute('cy',400);
AR.setAttribute('d',`M1440 415Q${((1440+rx)/2).toFixed(1)} 380 ${rx.toFixed(1)} 400`);HR.setAttribute('cx',rx.toFixed(1));HR.setAttribute('cy',400);
$('shield4').setAttribute('opacity',(ck*(.35+.65*rc)).toFixed(2));

BB.forEach((g,i)=>rise(g,p(u,TM.mind+.4+i*.7,TM.mind+.9+i*.7)));
rise($('mem'),p(u,TM.home_door,TM.home_door+.5));
const kk=p(u,TM.home_door+.8,TM.home_door+2.4),kr=p(u,TM.home_door+2.4,TM.home_door+3);
$('key').setAttribute('transform',`translate(${(1260-158*kk).toFixed(1)} ${(600-120*kk).toFixed(1)}) rotate(${(90*kr).toFixed(1)})`);
$('door5').setAttribute('stroke',kr>=1?'var(--gain)':'var(--ink)');
const lk=u>=TM.home_door+4;$('bulb').setAttribute('fill',lk?'var(--gain)':'var(--stage)');$('rays').setAttribute('opacity',lk?1:0);$('tog').setAttribute('y',lk?446:472);
const wk=p(u,TM.home_door+7,TM.home_door+7.6);$('warm').setAttribute('opacity',(wk*(.7+.3*Math.sin(t*2))).toFixed(2));
CF.forEach((c,i)=>{c[0].setAttribute('opacity',wk);c[0].setAttribute('cy',(c[1]+8*Math.sin(t*1.5+i)).toFixed(1))});rise($('kw'),wk);

rise($('hut'),p(u,TM.soup_bowls,TM.soup_bowls+.5));
$('sit').setAttribute('opacity',(p(u,TM.soup_bowls+.3,TM.soup_bowls+.9)*(1-.7*p(u,TM.clouds,TM.clouds+.8))).toFixed(2));
rise($('msg'),p(u,TM.sunset,TM.sunset+.4));$('door6').setAttribute('stroke',u>=TM.sunset?'var(--gain)':'var(--ink)');
rise($('arw'),p(u,TM.sunset+.8,TM.sunset+1.4));rise($('sky'),p(u,TM.sunset+.4,TM.sunset+1));
$('sung').setAttribute('transform',`translate(1200 ${(470+130*p(u,TM.sunset,TM.clouds+5)).toFixed(1)})`);$('srays').setAttribute('opacity',p(u,TM.clouds,TM.clouds+.6));
CL.forEach((g,i)=>{const on=u>=TM.clouds+i*.4;g.setAttribute('fill',on?'var(--gain)':'var(--line)');g.setAttribute('fill-opacity',on?(.55+.2*Math.sin(t*2+i)).toFixed(2):1)});
rise($('wat'),p(u,TM.clouds,TM.clouds+.6));rise($('quo'),p(u,TM.clouds+2,TM.clouds+2.6));

rise($('fg7'),p(u,TM.delicate,TM.delicate+.5));rise($('inner'),p(u,TM.delicate+6.2,TM.delicate+7));$('ring2').setAttribute('r',(120+4*Math.sin(t*2)).toFixed(1));
rise($('chest'),p(u,TM.treasure,TM.treasure+.5));rise($('own'),p(u,TM.treasure+.8,TM.treasure+1.4));
const m7=p(u,TM.treasure+7,TM.treasure+7.6);MO.forEach((c,i)=>{const ph=(t*.5+i/6)%1;c.setAttribute('cy',(240+230*ph).toFixed(1));c.setAttribute('opacity',m7)});rise($('sav'),m7);

rise($('nb'),p(u,TM.notebook,TM.notebook+.5));rise($('tip'),p(u,TM.notebook+.3,TM.notebook+.8));
$('drop').setAttribute('cy',(380+185*p(u,TM.notebook+.8,TM.notebook+1.8)).toFixed(1));
rise($('qa'),p(u,TM.notebook+4.2,TM.notebook+4.7));rise($('qb'),p(u,TM.notebook+4.6,TM.notebook+5.1));rise($('qc'),p(u,TM.notebook+5,TM.notebook+5.5));