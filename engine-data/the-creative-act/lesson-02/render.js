const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
const ch=TM.catching_hand,ci=p(u,ch+1,ch+2.6);
$('tidea').setAttribute('cy',(230+420*ci).toFixed(1));$('tidea').setAttribute('opacity',p(u,ch,ch+.5));
const tk0=p(u,ch+5.8,ch+6.6);TD.forEach(([e,x,y],i)=>{e.setAttribute('cx',(x+12*Math.sin(t*.7+i)).toFixed(1));e.setAttribute('cy',(y+10*Math.cos(t*.9+i*1.3)).toFixed(1));e.setAttribute('opacity',tk0)});

const fb=TM.floating_bits;
R('cloud',TM.cloud_source,.6);
BITS.forEach((g,i)=>{const k=p(u,fb+i*.5,fb+i*.5+.5);g.setAttribute('opacity',k);g.setAttribute('transform','translate('+(BX[i]+10*Math.sin(t*.6+i*1.7)).toFixed(1)+' '+(BY[i]+8*Math.cos(t*.8+i)+(1-k)*20).toFixed(1)+')')});
R('srcN',fb+4.6);R('srcA',fb+8);R('rcv',fb+8);R('srcB',fb+10.9);
const rv=p(u,fb+10.9,fb+11.5),rf=(t*.6)%1;$('rarr').setAttribute('opacity',rv);
$('rdot').setAttribute('cx',(960+310*rf).toFixed(1));$('rdot').setAttribute('cy',(420+100*rf*rf).toFixed(1));$('rdot').setAttribute('opacity',(rv*(rf<.9?1:0)).toFixed(2));
RC.forEach(e=>e.setAttribute('class',rv>0?'gain':'ink'));

R('ant',TM.antenna,.6);waveR(WV,400,360,30,170,t,p(u,TM.radio_waves,TM.radio_waves+.6));
R('anA',TM.radio_waves+3.4);R('anB',TM.radio_waves+6.4);
const td=TM.tuning_dial,tn=p(u,td+.4,td+2.4);R('tune',td);R('anT',td+.4);
$('needle').setAttribute('transform','translate('+(780+460*tn).toFixed(1)+' 0)');$('needle').style.stroke=tn>=1?'var(--gain)':'var(--ink)';
$('knob').setAttribute('transform','rotate('+(tn*270).toFixed(1)+' 460 710)');
let pt='';for(let x=720;x<=1440;x+=8)pt+=x+','+(690+30*(.3+.7*tn)*Math.sin(x/40-t*4)+(1-tn)*(20*Math.sin(x*.73+t*19)+12*Math.sin(x*1.9-t*13))).toFixed(1)+' ';
$('trace').setAttribute('points',pt);$('trace').style.stroke=tn>=1?'var(--gain)':'var(--muted)';

const cf=TM.clenched_fist,L=cf+9.2,calm=p(u,cf+13,cf+13.6),nz=p(u,TM.static_lines,TM.static_lines+1)*(1-p(u,L,L+1.2));
rise($('fist'),p(u,cf,cf+.5)*(1-p(u,L,L+.6)));rise($('ohand'),p(u,L,L+.6));
let sp='';for(let x=620;x<=1440;x+=8)sp+=x+','+(430+(25+25*calm)*Math.sin(x/45-t*3)+nz*(40*Math.sin(x*.61+t*21)+25*Math.sin(x*1.7-t*15))).toFixed(1)+' ';
$('sig').setAttribute('points',sp);$('sig').setAttribute('opacity',p(u,cf,cf+.5));$('sig').style.stroke=nz>.3?'var(--loss)':calm>.5?'var(--gain)':'var(--ink)';
[0,1,2].forEach(i=>{const a=TM.static_lines+.4*i;rise($('stc'+i),p(u,a,a+.4)*(1-p(u,L,L+.6)))});
R('stA',L);R('stB',cf+13);

// stay open: the empty cup keeps receiving (stays empty), the full cup overflows
const ec=TM.empty_cup;R('oph',TM.open_hands,.6);R('cup1',ec);R('cup2',ec+3.3);R('opT',ec+3.8);
const on1=u>=ec+.5,f1=(t*.7)%1,fall=cl(f1/.85),sk=cl((f1-.85)/.15);
$('drop1').setAttribute('cy',(240+(654-240)*fall*fall).toFixed(1));$('drop1').setAttribute('opacity',on1&&f1<.85?1:0);
$('splash').setAttribute('rx',(14+36*sk).toFixed(1));$('splash').setAttribute('ry',(5+5*sk).toFixed(1));
$('splash').setAttribute('opacity',(on1&&f1>=.85?1-sk:0).toFixed(2));
const f2=(t*.7+.5)%1,g2=f2<.6?0:(f2-.6)/.4;
$('drop2').setAttribute('cx',(1220+120*g2).toFixed(1));$('drop2').setAttribute('cy',(f2<.6?240+160*(f2/.6)*(f2/.6):400-80*g2+200*g2*g2).toFixed(1));
$('drop2').setAttribute('opacity',(u>=ec+3.6?1-g2:0).toFixed(2));

const tp=TM.two_people,m=p(u,tp+4.9,tp+6.7);R('bulbW',TM.lightbulb,.6);
$('bulb').setAttribute('transform','translate('+(800+400*m).toFixed(1)+' '+(340+130*m+6*Math.sin(t*2)).toFixed(1)+')');
R('ppl',tp);$('arL').setAttribute('opacity',(p(u,tp,tp+.6)*(1-.8*m)).toFixed(2));$('arR').setAttribute('opacity',p(u,tp+.3,tp+.9));
$('pL').setAttribute('opacity',(1-.6*m).toFixed(2));P1.forEach(e=>e.setAttribute('class',m>=1?'gain':'ink'));
R('lbL',tp+4.9);R('lbR',tp+6.7);

const nbc=TM.notebook,nk=p(u,nbc+.6,nbc+1.6);R('nb',nbc,.6);
$('nbdot').setAttribute('cx',(860-280*nk).toFixed(1));$('nbdot').setAttribute('cy',(270+25*nk).toFixed(1));$('nbdot').setAttribute('opacity',p(u,nbc+.4,nbc+.8));
[0,1,2].forEach(i=>{const a=nbc+4.5+i*1.2;R('sl'+i,a,.4);$('sc'+i).setAttribute('stroke-dashoffset',(1-p(u,a,a+1)).toFixed(3))});
const ck=TM.clock,fd=1-p(u,ck+.8,ck+4);R('clk',ck);R('actT',ck+.6);
$('hand').setAttribute('transform','rotate('+(720*p(u,ck+.3,ck+4)).toFixed(1)+' 1120 450)');
BR.forEach((b,i)=>b.setAttribute('opacity',(.12+.88*cl(fd*4-i)).toFixed(2)));

const fe=TM.feather,s7=SC[7][0]/K,lf=p(u,fe+1,fe+2.6);
R('lpP',s7+.1);$('wt').setAttribute('opacity',(p(u,s7+.1,s7+.6)*(1-lf)).toFixed(2));$('wt').setAttribute('transform','translate(0 '+(-60*lf).toFixed(1)+')');
R('fthW',fe);$('fth').setAttribute('transform','translate('+(1300+60*Math.sin(t*1.3)).toFixed(1)+' '+(260+340*lin(u,fe,fe+9)).toFixed(1)+') rotate('+(25*Math.sin(t*1.3)).toFixed(1)+')');
R('lgW',fe+3.7);$('lgS').setAttribute('x2',(772+270*p(u,fe+4.6,fe+5.3)).toFixed(1));
const sb=TM.signal_bars;R('sbW',sb);R('lpA',sb+.4);R('suW',sb+5);
SB.forEach((b,i)=>b.setAttribute('fill',u>=sb+.4+i*.4?'var(--gain)':'var(--line)'));
SU.forEach((c,i)=>c.setAttribute('fill',u>=sb+5.4+i*.3?'var(--gain)':'var(--line)'));

const S8=SC[8][0]/K;R('cant',S8+.2);R('qm',S8+.4);R('qa',S8+5);R('qb',S8+5.4);waveR(CW,1360,610,24,100,t,1);