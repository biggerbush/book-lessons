XS.forEach((x,i)=>x.setAttribute('opacity',p(u,TM.failed_list+.6+i*.5,TM.failed_list+.9+i*.5)));
rise($('tag'),p(u,TM.failed_list+4.2,TM.failed_list+4.7));

rise($('b0'),p(u,TM.big_goal,TM.big_goal+.5));
$('a0').setAttribute('opacity',p(u,TM.slump-.4,TM.slump));
rise($('b1'),p(u,TM.slump,TM.slump+.5));
$('slp').setAttribute('stroke-dashoffset',(340*(1-p(u,TM.slump+.3,TM.slump+1.6))).toFixed(1));
$('a1').setAttribute('opacity',p(u,TM.mirror-.4,TM.mirror));
rise($('b2'),p(u,TM.mirror,TM.mirror+.5));
rise($('ret'),p(u,TM.mirror+4.1,TM.mirror+4.7));

rise($('sci'),p(u,TM.scientist,TM.scientist+.5));
rise($('weak'),p(u,TM.scientist+3.4,TM.scientist+4));
const wk=p(u,TM.wave_line,TM.wave_line+2.5);let wd='';
for(let x=560;x<=560+880*wk;x+=8)wd+=(x===560?'M':'L')+x+' '+(480-150*Math.sin((x-560)/90-t*1.5)).toFixed(1);
$('wv').setAttribute('d',wd);
rise($('hi'),p(u,TM.wave_line+6.6,TM.wave_line+7.1));rise($('lo'),p(u,TM.wave_line+7,TM.wave_line+7.5));

rise($('kn'),p(u,TM.salad,TM.salad+.5));
rise($('fr'),p(u,TM.fries,TM.fries+.5));
rise($('fade'),p(u,TM.fries+4.2,TM.fries+4.8));
$('bub').setAttribute('opacity',(1-.6*p(u,TM.fries+4.2,TM.fries+6)).toFixed(2));

rise($('dr'),p(u,TM.sticky_door,TM.sticky_door+.5));
const o=p(u,TM.toolbox+.6,TM.toolbox+1.8),dw=232*(1-.75*o);
$('dp').setAttribute('x',(936-dw).toFixed(1));$('dp').setAttribute('width',dw.toFixed(1));
$('dp').style.fill=u>=TM.toolbox+.6?'var(--gain)':'var(--line)';
$('dk').setAttribute('cx',(966-dw).toFixed(1));
$('jam').setAttribute('opacity',(p(u,TM.sticky_door+.6,TM.sticky_door+1)*(1-o)).toFixed(2));
const stuck=u>=TM.sticky_door&&u<TM.toolbox+.6;
PG.setAttribute('transform','translate('+(stuck?4*Math.sin(t*30):0).toFixed(1)+' 0)');
rise($('na'),p(u,TM.sticky_door+4.6,TM.sticky_door+5.1));
rise($('tb'),p(u,TM.toolbox,TM.toolbox+.5));
rise($('same'),p(u,TM.toolbox+2.2,TM.toolbox+2.8));

rise($('pl'),p(u,TM.bathroom,TM.bathroom+.5));
$('plx').setAttribute('opacity',p(u,TM.bathroom+1.5,TM.bathroom+2));
rise($('ba'),p(u,TM.bathroom+4.6,TM.bathroom+5.1));
$('ar1').setAttribute('opacity',p(u,TM.pushup-.4,TM.pushup));
rise($('pf'),p(u,TM.pushup,TM.pushup+.5));
const pk=u>=TM.pushup?(1-Math.cos(t*4))/2:0,ys=440+55*pk;
PB.setAttribute('d','M790 520L960 '+ys.toFixed(1));PA.setAttribute('d','M960 '+ys.toFixed(1)+'V524');
PH.setAttribute('cx',985);PH.setAttribute('cy',(ys-14).toFixed(1));
rise($('ch'),p(u,TM.pushup+1,TM.pushup+1.5));
BR.forEach((b,i)=>{const h=HB[i]*(i?p(u,TM.counter+i*.5,TM.counter+i*.5+.5):1);b.setAttribute('y',(520-h).toFixed(1));b.setAttribute('height',h.toFixed(1))});
rise($('dzl'),p(u,TM.counter+3,TM.counter+3.5));
rise($('dz'),p(u,TM.counter+5,TM.counter+5.6));

rise($('fc'),p(u,TM.heart,TM.heart+.5));
rise($('hr'),p(u,TM.heart+.3,TM.heart+.8));
$('hp').setAttribute('transform','translate(1420 330) scale('+(1+.06*Math.abs(Math.sin(t*3))).toFixed(3)+')');
rise($('sh'),p(u,TM.heart+.5,TM.heart+1));
const sm=u>=TM.smile;
$('mo').setAttribute('d',sm?'M270 515q70 60 140 0':'M270 545q70-50 140 0');
$('mo').style.stroke=sm?'var(--gain)':'var(--loss)';
$('fl').textContent=sm?'EXPERIMENTING':'JUDGING';$('fl').style.fill=sm?'var(--gain)':'var(--muted)';
rise($('st'),p(u,TM.heart+3.8,TM.heart+4.4));
CK.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.heart+4.2+i*.4,TM.heart+4.5+i*.4)*(.4+.6*p(u,TM.smile+3.8+i*.5,TM.smile+4.2+i*.5))));
rise($('cf'),p(u,TM.smile+3.8,TM.smile+4.4));

rise($('bp'),p(u,TM.blueprint,TM.blueprint+.6));
const pc=p(u,TM.pencil+.6,TM.pencil+1.8),gw=440-260*pc,fx=u>=TM.pencil+.6;
$('gb').setAttribute('width',gw.toFixed(1));
$('gb').style.fill=fx?'var(--gain)':'var(--stage)';$('gb').style.stroke=fx?'var(--gain)':'var(--loss)';
$('gt').style.fill=fx?'var(--on-gain)':'var(--ink)';
$('tbig').textContent=fx?'SMALLER':'TOO BIG?';$('tbig').style.fill=fx?'var(--gain)':'var(--loss)';
rise($('ann'),p(u,TM.question+5,TM.question+5.5));
rise($('pen'),p(u,TM.pencil,TM.pencil+.4));
$('pn').setAttribute('transform','translate('+(174+gw).toFixed(1)+' 424)');
$('tg').setAttribute('opacity',p(u,TM.pencil+1.5,TM.pencil+2));
rise($('qq'),p(u,TM.question,TM.question+.5));
let ww=420;try{const v=$('wq').getComputedTextLength();if(v>0)ww=v}catch(e){}
strike('wqs',ww,p(u,TM.question+1.2,TM.question+1.8));
rise($('adj'),p(u,TM.pencil+.6,TM.pencil+1.2));

const s8=SC[8][0]/K;
rise($('z0'),p(u,s8+.4,s8+.9));
rise($('qa'),p(u,TM.paper,TM.paper+.5));rise($('qb'),p(u,TM.paper+.4,TM.paper+.9));rise($('qc'),p(u,TM.paper+.8,TM.paper+1.3));
rise($('pp'),p(u,TM.paper,TM.paper+.5));
[0,1,2].forEach(i=>$('w'+i).setAttribute('stroke-dashoffset',(160*(1-p(u,TM.paper+.8+i*.5,TM.paper+1.2+i*.5))).toFixed(1)));