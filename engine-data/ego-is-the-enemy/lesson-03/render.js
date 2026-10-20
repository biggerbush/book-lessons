const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
const wp=p(u,TM.fork_road,TM.fork_road+3);$('walker').setAttribute('cy',(800-200*wp).toFixed(1));
const f0=u>=TM.fork_road+3.8;$('bL').style.stroke=f0?'var(--loss)':'var(--line)';$('bR').style.stroke=f0?'var(--gain)':'var(--line)';R('lb0',TM.fork_road+3.8);

R('jet1',TM.fighter_jet);$('jetb').setAttribute('transform','translate(0 '+(8*Math.sin(t*1.6)).toFixed(1)+')');
R('bp',TM.blueprint);R('clash1',TM.blueprint+5.4);$('bolt1').setAttribute('opacity',(.6+.4*Math.sin(t*9)).toFixed(2));

R('boyd2',TM.young_officer);R('off2',TM.young_officer);R('door2',TM.office_door);
$('dpanel').setAttribute('width',(200-164*p(u,TM.office_door+.3,TM.office_door+1.3)).toFixed(1));
$('offm2').setAttribute('transform','translate('+(300+480*p(u,TM.office_door+.8,TM.office_door+3)).toFixed(1)+' 0)');
const ts=u>=TM.office_door+7;st2.setAttribute('opacity',ts?(.4+.6*Math.abs(Math.sin(t*4))).toFixed(2):1);R('test2',TM.office_door+7);

R('boyd3',SC[3][0]/K+.4);R('board3',TM.two_paths);
$('pa3').style.strokeDashoffset=1-p(u,TM.two_paths+.3,TM.two_paths+1);
['pb3','pc3'].forEach(k=>$(k).style.strokeDashoffset=1-p(u,TM.two_paths+1,TM.two_paths+2));
R('lb3',TM.two_paths+1.8);R('bub3',TM.speech_bubble);R('ans3',TM.speech_bubble+6.1);

R('med4',TM.medals);R('work4',TM.medals+.5);R('lad4',TM.ladder);R('lab4',TM.ladder+2);
R4.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.ladder+i*.2,TM.ladder+i*.2+.3)));
R('clm4',TM.ladder);$('clmm4').setAttribute('transform','translate(0 '+(670-440*p(u,TM.ladder+.5,TM.ladder+5)).toFixed(1)+')');
const cm=u>=TM.ladder+6.1;$('wk4in').setAttribute('opacity',cm?.3:1);$('wrect').setAttribute('stroke-dasharray',cm?'12 10':'none');
R('cmp4',TM.ladder+6.1);R('many4',TM.ladder+10.7);

R('do5',TM.toolbox);B5.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.toolbox+.4+i*.25,TM.toolbox+.7+i*.25)));
R('boss5',TM.frown_boss);[0,1,2].forEach(i=>R('ls'+i,TM.frown_boss+i*1.2));
R('chk5',TM.frown_boss+4.2);R('fth5',TM.frown_boss+4.2);

R('bdg6',TM.colonel_badge);R('rc6',TM.ripple);
const rv=p(u,TM.ripple,TM.ripple+.5);RP.forEach((c,i)=>{const k=(t*.4+i/3)%1;c.setAttribute('r',(30+230*k).toFixed(1));c.setAttribute('opacity',((1-k)*rv).toFixed(2))});
ND.forEach((n,i)=>{const a=TM.ripple+.3+i*.3;n.setAttribute('fill',u>=a?'var(--gain)':'var(--line)');n.setAttribute('opacity',rv)});
R('mat6',TM.ripple+5.8);

R('mir7',TM.mirror);SK.forEach((s,i)=>s.setAttribute('opacity',(.3+.7*Math.abs(Math.sin(t*2+i))).toFixed(2)));
R('cmp7',TM.compass);const sw=p(u,TM.compass+5.4,TM.compass+6.6);
$('ndl7').setAttribute('transform','translate(1100 420) rotate('+(-90+180*sw+(1-sw)*15*Math.sin(t*3)).toFixed(1)+')');
R('pur7',TM.compass+5.4);R('eas7',TM.compass+9.6);

const S8=SC[8][0]/K;R('qa',S8+.3);R('qb',S8+.7);R('qc',S8+1.1);R('fk8',S8+1.6);R('wr8',S8+5.8);