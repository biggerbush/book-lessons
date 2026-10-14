const c0=TM.coin,bet=u>=c0+5.7;
rise($('coinW'),p(u,c0,c0+.4));
$('coin').setAttribute('transform','translate(1340 340) scale('+(bet?1:Math.cos(t*5)).toFixed(3)+' 1)');
$('cointx').textContent=bet?'?':'$';
rise($('cT'),p(u,c0+1.8,c0+2.3));rise($('cH'),p(u,c0+4,c0+4.5));rise($('bet'),p(u,c0+5.7,c0+6.2));

CR.forEach((g,i)=>rise(g,p(u,TM.crowd+i*.12,TM.crowd+i*.12+.4)));rise($('crl'),p(u,TM.crowd+1,TM.crowd+1.5));
rise($('sc'),p(u,TM.scale,TM.scale+.5));
const q=TM.question_mark,lv=p(u,q+5.8,q+6.8),th=-12*p(u,TM.scale+.5,TM.scale+1.5)*(1-lv),an=th*Math.PI/180,bx=Math.cos(an)*230,by=Math.sin(an)*230;
$('beam').setAttribute('transform','translate(1100 320) rotate('+th.toFixed(2)+')');
$('panL').setAttribute('transform','translate('+(1100-bx).toFixed(1)+' '+(320-by).toFixed(1)+')');
$('panR').setAttribute('transform','translate('+(1100+bx).toFixed(1)+' '+(320+by).toFixed(1)+')');
$('wtR').textContent=u<q?'+$150':u<q+5.8?'+$?':'+$'+Math.round(150+50*lv);
rise($('qm'),p(u,q,q+.5));rise($('cap1'),p(u,q+5.8,q+6.4));

const tf=TM.two_faces,g1=p(u,tf+1.8,tf+2.8),g2=p(u,tf+2.6,tf+4.2);
rise($('f0'),p(u,tf,tf+.4));rise($('f1'),p(u,tf+.4,tf+.8));
$('bg').setAttribute('width',(420*g1).toFixed(1));$('xg').setAttribute('x',(320+420*g1).toFixed(1));$('xg').setAttribute('opacity',g1);
$('bl').setAttribute('width',(840*g2).toFixed(1));$('xl').setAttribute('x',(320+840*g2).toFixed(1));$('xl').setAttribute('opacity',g2);
rise($('quote'),p(u,TM.quote_card,TM.quote_card+.6));

const yd=TM.yesterday,fe=u>=yd+7.7;
rise($('jk'),p(u,TM.jack,TM.jack+.5));rise($('jl'),p(u,TM.jack+1.5,TM.jack+2));
rise($('td'),p(u,TM.jill,TM.jill+.6));rise($('yd'),p(u,yd,yd+.6));
rise($('eq'),p(u,yd+4.6,yd+5.1));$('eq').textContent=u>=yd+6.3?'≠':'=?';
rise($('fk'),p(u,yd+7.7,yd+8.2));rise($('fl'),p(u,yd+8.3,yd+8.8));
JK.forEach(e=>e.setAttribute('fill',fe?'var(--gain)':'var(--ink)'));JL.forEach(e=>e.setAttribute('fill',fe?'var(--loss)':'var(--ink)'));

const rl=TM.ref_line,ar=p(u,TM.arrows,TM.arrows+1.2);
rise($('nl'),p(u,rl,rl+.6));rise($('end'),p(u,rl+5.3,rl+5.9));rise($('arr'),p(u,TM.arrows,TM.arrows+.4));
$('aJ').setAttribute('x2',(320+470*ar).toFixed(1));$('hJ').setAttribute('transform','translate('+(320+480*ar).toFixed(1)+' 440)');
$('aL').setAttribute('x2',(1280-470*ar).toFixed(1));$('hL').setAttribute('transform','translate('+(1280-480*ar).toFixed(1)+' 610) scale(-1 1)');
rise($('albl'),p(u,TM.arrows+1.2,TM.arrows+1.7));rise($('same'),p(u,TM.arrows+6.2,TM.arrows+6.8));

const ss=TM.small_step,bs=TM.big_step,cv=p(u,TM.curve+.3,TM.curve+2.3);
rise($('st1'),p(u,ss+2.6,ss+3.1));$('b1').setAttribute('width',(440*p(u,ss+3,ss+4)).toFixed(1));
rise($('st2'),p(u,bs,bs+.5));$('b2').setAttribute('width',(140*p(u,bs+.8,bs+1.8)).toFixed(1));
rise($('axes'),p(u,TM.curve,TM.curve+.5));$('curveP').setAttribute('stroke-dasharray',cv.toFixed(3)+' 1');$('curveP').setAttribute('opacity',cv>0?1:0);
rise($('cap5'),p(u,TM.curve+1.5,TM.curve+2.1));

rise($('then'),p(u,TM.shield,TM.shield+.6));$('thr').setAttribute('transform','translate('+(8*Math.sin(t*4)).toFixed(1)+' 0)');
rise($('now'),p(u,TM.stuck,TM.stuck+.6));$('ring').setAttribute('stroke-dashoffset',(t*20).toFixed(1));
CK.forEach((g,i)=>rise(g,p(u,TM.stuck+3+i*.8,TM.stuck+3.4+i*.8)));

const n=Math.floor(100*p(u,TM.many_coins,TM.many_coins+5));
rise($('coins'),p(u,TM.stack,TM.stack+.6));
CO.forEach((c,i)=>{const on=i<n;c[0].setAttribute('fill',on?(c[1]?'var(--gain)':'var(--loss)'):'var(--stage)');c[0].setAttribute('stroke',on?'none':(i===0&&u>=TM.stack?'var(--gain)':'var(--line)'))});
let cp='M720 560';for(let i=1;i<=n;i++)cp+='L'+(720+i*7.6).toFixed(1)+' '+(560-CUM[i]*9.3).toFixed(1);
$('cum').setAttribute('d',cp);rise($('chart'),p(u,TM.many_coins,TM.many_coins+.5));
rise($('ahead'),p(u,TM.many_coins+5,TM.many_coins+5.5));rise($('mantra'),p(u,TM.mantra,TM.mantra+.6));

const yr=TM.your_risk;
rise($('ya'),p(u,yr,yr+.6));rise($('qa'),p(u,yr+1.6,yr+2.1));rise($('qb'),p(u,yr+2,yr+2.5));rise($('qc'),p(u,yr+2.4,yr+2.9));
// grid card appears with the single amber risk, then the other 99 fill in around it
rise($('dgrid'),p(u,yr+.3,yr+.8));
DT.forEach((d,i)=>{const a=i===HI?yr+.4:yr+1+i*.015;d.setAttribute('opacity',p(u,a,a+.3).toFixed(3))});
HIR.setAttribute('opacity',p(u,yr+.4,yr+.8).toFixed(3));HIR.setAttribute('r',(20+4*Math.abs(Math.sin(t*2.5))).toFixed(1));
rise($('g100'),p(u,yr+2.8,yr+3.3));