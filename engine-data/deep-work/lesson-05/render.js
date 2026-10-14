AP.forEach((a,i)=>{const k=p(u,TM.title_phone+.2+i*.12,TM.title_phone+.5+i*.12),d=i===4?1:1-.75*p(u,TM.title_phone+5.4,TM.title_phone+6.2);a.setAttribute('opacity',(k*d).toFixed(2))});

const o=p(u,TM.open_door,TM.open_door+1),x2=340-110*o;$('leaf').setAttribute('points','140,260 '+x2+','+(260+40*o)+' '+x2+','+(640-40*o)+' 140,640');
rise($('dlab'),p(u,TM.open_door+.6,TM.open_door+1.1));
rise($('card'),p(u,TM.sign_up,TM.sign_up+.5));rise($('cr1'),p(u,TM.sign_up+1,TM.sign_up+1.4));rise($('cr2'),p(u,TM.sign_up+2,TM.sign_up+2.4));
rise($('benef'),p(u,TM.sign_up+1,TM.sign_up+1.5));rise($('lblB'),p(u,TM.sign_up+1,TM.sign_up+1.5));
[0,1,2].forEach(i=>rise($('cb'+i),p(u,TM.scale_tipped+i*.3,TM.scale_tipped+i*.3+.4)));rise($('lblC'),p(u,TM.scale_tipped,TM.scale_tipped+.5));
const an=(-6+18*p(u,TM.scale_tipped+.6,TM.scale_tipped+1.8))*Math.PI/180,dx=220*Math.cos(an),dy=220*Math.sin(an),bl=$('beamL');
bl.setAttribute('x1',(1160-dx).toFixed(1));bl.setAttribute('y1',(320-dy).toFixed(1));bl.setAttribute('x2',(1160+dx).toFixed(1));bl.setAttribute('y2',(320+dy).toFixed(1));
$('panL').setAttribute('transform','translate('+(1160-dx).toFixed(1)+' '+(320-dy).toFixed(1)+')');$('panR').setAttribute('transform','translate('+(1160+dx).toFixed(1)+' '+(320+dy).toFixed(1)+')');
rise($('anyb'),p(u,TM.scale_tipped+5.4,TM.scale_tipped+6));

rise($('box2'),p(u,TM.toolbox,TM.toolbox+.5));$('tbx').setAttribute('opacity',(1-.7*p(u,TM.workbench,TM.workbench+1)).toFixed(2));
rise($('ww'),p(u,TM.woodworker,TM.woodworker+.5));rise($('bench'),p(u,TM.workbench,TM.workbench+.5));
[0,1,2].forEach(i=>rise($('pt'+i),p(u,TM.workbench+.4+i*.4,TM.workbench+.8+i*.4)));rise($('craft'),p(u,TM.workbench+1.8,TM.workbench+2.4));

rise($('farm'),p(u,TM.farmer,TM.farmer+.5));rise($('baler'),p(u,TM.hay_baler,TM.hay_baler+.5));rise($('calc'),p(u,TM.calculator,TM.calculator+.5));
$('barM').setAttribute('width',(520*p(u,TM.calculator+.4,TM.calculator+1.6)).toFixed(1));$('barB').setAttribute('width',(300*p(u,TM.calculator+1.6,TM.calculator+2.8)).toFixed(1));
rise($('cheap'),p(u,TM.calculator+3,TM.calculator+3.5));rise($('sale'),p(u,TM.for_sale,TM.for_sale+.5));
$('saleR').setAttribute('transform','rotate('+(3*Math.sin(t*2)).toFixed(2)+' 580 354)');rise($('some'),p(u,TM.for_sale+1.2,TM.for_sale+1.8));

rise($('fl0'),p(u,TM.goal_flags,TM.goal_flags+.5));rise($('fl1'),p(u,TM.goal_flags+.8,TM.goal_flags+1.3));
for(let c=0;c<2;c++)for(let j=0;j<3;j++){const a=TM.activity_list+c*1.5+j*.4;rise($('ac'+c+j),p(u,a,a+.4))}
rise($('tool'),p(u,TM.magnifier,TM.magnifier+.5));
const mk4=p(u,TM.magnifier+.4,TM.magnifier+4);
$('mag').setAttribute('transform','translate('+(1100+70*mk4+8*Math.sin(t*1.6)).toFixed(1)+' '+(500-80*Math.cos(mk4*Math.PI*3)).toFixed(1)+')');
$('mag').setAttribute('opacity',cl((u-TM.magnifier)*2).toFixed(2));rise($('hold'),p(u,TM.magnifier+1.2,TM.magnifier+1.8));

rise($('bh'),p(u,TM.scale_balance,TM.scale_balance+.5));
const hh=320*p(u,TM.scale_balance+.3,TM.scale_balance+1.5),xh=130*p(u,TM.scale_balance+2.5,TM.scale_balance+3.7);
$('hBar').setAttribute('y',660-hh);$('hBar').setAttribute('height',hh);$('xBar').setAttribute('y',660-xh);$('xBar').setAttribute('height',xh);
$('pie').setAttribute('d',pie(1-.65*p(u,TM.clock_drain+.5,TM.clock_drain+4)));
NB.forEach((n,i)=>{const k=p(u,TM.clock_drain+i*.3,TM.clock_drain+i*.3+.4),w=6*Math.sin(t*3+i);n[0].setAttribute('opacity',k.toFixed(2));n[0].setAttribute('transform','translate('+(w*Math.cos(n[1])).toFixed(1)+' '+(w*Math.sin(n[1])).toFixed(1)+')')});
rise($('chk'),p(u,TM.check_cross,TM.check_cross+.5));rise($('win'),p(u,TM.check_cross+.6,TM.check_cross+1.2));

rise($('cal'),p(u,TM.calendar_30,TM.calendar_30+.5));rise($('app6'),p(u,TM.calendar_30+.6,TM.calendar_30+1.1));
CE.forEach((c,i)=>c.setAttribute('fill',u>=TM.logout+.5+i*.16?'var(--gain)':'var(--stage)'));
const lg=u>=TM.logout;$('appI').setAttribute('stroke-dasharray',lg?'14 10':'none');$('app6').setAttribute('opacity',lg?.5:1);
rise($('lo'),p(u,TM.logout,TM.logout+.5));rise($('n60'),p(u,TM.logout+1.5,TM.logout+2));rise($('n61'),p(u,TM.logout+2.5,TM.logout+3));

rise($('q1'),p(u,TM.question_one,TM.question_one+.5));rise($('no1'),p(u,TM.question_one+3,TM.question_one+3.4));
rise($('q2'),p(u,TM.question_two,TM.question_two+.5));rise($('no2'),p(u,TM.question_two+2.5,TM.question_two+2.9));
rise($('bin'),p(u,TM.trash_bin,TM.trash_bin+.5));
const fl=p(u,TM.trash_bin+.6,TM.trash_bin+1.6),lo=Math.sin(Math.PI*cl(fl*1.2));
$('fall').setAttribute('y',(200+300*fl).toFixed(1));$('fall').setAttribute('opacity',u>=TM.trash_bin+.5?1:0);
$('lid').setAttribute('transform','rotate('+(-30*lo).toFixed(1)+' 1060 372)');
rise($('quitg'),p(u,TM.trash_bin+1.6,TM.trash_bin+2.1));rise($('unc'),p(u,TM.trash_bin+4.2,TM.trash_bin+4.8));

const b8=SC[8][0]/K;rise($('c0'),p(u,b8+.4,b8+.9));
rise($('bal8'),p(u,b8+.8,b8+1.4));
rise($('qa'),p(u,b8+4.6,b8+5.1));rise($('qb'),p(u,b8+5,b8+5.5));rise($('qc'),p(u,b8+5.4,b8+5.9));rise($('qd'),p(u,b8+5.8,b8+6.3));
rise($('lb8a'),p(u,b8+5,b8+5.5));rise($('lb8b'),p(u,b8+5.8,b8+6.3));rise($('cg'),p(u,b8+6.4,b8+7));
const a8=(11*Math.sin(t*1.3)*p(u,b8+1.2,b8+2.2))*Math.PI/180,ex=170*Math.cos(a8),ey=170*Math.sin(a8),bm=$('beam8');
bm.setAttribute('x1',(1240-ex).toFixed(1));bm.setAttribute('y1',(380-ey).toFixed(1));bm.setAttribute('x2',(1240+ex).toFixed(1));bm.setAttribute('y2',(380+ey).toFixed(1));
$('pl8').setAttribute('transform','translate('+(1240-ex).toFixed(1)+' '+(380-ey).toFixed(1)+')');$('pr8').setAttribute('transform','translate('+(1240+ex).toFixed(1)+' '+(380+ey).toFixed(1)+')');