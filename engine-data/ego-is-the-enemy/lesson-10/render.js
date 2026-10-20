const a0=TM.scoreboard,y0=p(u,a0+2.6,a0+3.2);
rise($('sb'),p(u,a0,a0+.5)); $('fan0').setAttribute('opacity',(p(u,a0+.4,a0+.9)*(1-.65*y0)).toFixed(2));
$('byou').setAttribute('fill',y0>.5?'var(--gain)':'var(--stage)'); $('byou').setAttribute('stroke',y0>.5?'var(--gain)':'var(--ink)');
$('ck0').setAttribute('opacity',y0); $('lyou').style.fill=y0>.5?'var(--gain)':''; $('bcrowd').setAttribute('opacity',1-.6*y0); $('qcrowd').setAttribute('opacity',1-.7*y0);

const cw=TM.cycle_wheel,al=TM.arrow_loop; rise($('whl'),p(u,cw,cw+.5)); ND.forEach((g,i)=>rise(g,p(u,cw+2+i*1.1,cw+2.5+i*1.1)));
const rk=p(u,al,al+2.2); $('ring').setAttribute('stroke-dashoffset',(1257*(1-rk)).toFixed(1));
const ra=-Math.PI/2+2*Math.PI*rk+Math.max(0,u-al-2.2)*1.5;
$('runner').setAttribute('transform','translate('+(520+200*Math.cos(ra)).toFixed(1)+' '+(500+200*Math.sin(ra)).toFixed(1)+') rotate('+(ra*180/Math.PI+90).toFixed(1)+')'); $('runner').setAttribute('opacity',p(u,al,al+.3));
const ck=TM.climber,cp=along(p(u,ck+.4,ck+3.2)); rise($('clm'),p(u,ck,ck+.5)); $('clb').setAttribute('cx',cp[0].toFixed(1)); $('clb').setAttribute('cy',(cp[1]-24).toFixed(1)); $('clb').setAttribute('opacity',p(u,ck,ck+.5));

const cr=TM.crowd,tr=TM.trophy; CR2.forEach((g,i)=>rise(g,p(u,cr+i*.2,cr+.5+i*.2))); CH2.forEach((g,i)=>rise(g,p(u,tr+i*.5,tr+.5+i*.5)));
rise($('arw2'),p(u,tr+2,tr+2.5)); rise($('meter'),p(u,tr+2,tr+2.5)); rise($('luck'),p(u,tr+3.4,tr+3.9));
const ek=p(u,tr+7.1,tr+7.6),sw=Math.sin(u*1.6)*ek,jt=8*Math.sin(u*9)*p(u,tr+3.4,tr+4)*(1-ek),h=Math.max(0,180*p(u,tr+2,tr+3)+140*sw+jt);
$('bar2').setAttribute('y',(632-h).toFixed(1)); $('bar2').setAttribute('height',h.toFixed(1));
rise($('ego2'),ek); $('bal').setAttribute('r',(75+35*sw).toFixed(1)); $('egot').textContent=Math.cos(u*1.6)>0?'SWELLS':'SULKS';

const co=TM.coach,gf=TM.game_film; rise($('board3'),p(u,co,co+.5)); rise($('coach3'),p(u,co+.6,co+1.1)); rise($('film'),p(u,gf,gf+.5));
ER.forEach((e,i)=>{e.setAttribute('opacity',p(u,gf+1.5+i*.8,gf+1.9+i*.8)); e.setAttribute('r',(44+4*Math.sin(t*4+i)).toFixed(1))});
const sk=p(u,gf+6.9,gf+7.6); $('st3').setAttribute('x2',(150+240*sk).toFixed(1)); $('win3').setAttribute('fill-opacity',1-.5*sk); rise($('std3'),p(u,gf+11.9,gf+12.5));

const ss=TM.split_screen,lw=TM.lucky_win,hl=TM.honest_loss; rise($('pan'),p(u,ss,ss+.5)); rise($('pl'),p(u,lw,lw+.5)); rise($('pr'),p(u,hl,hl+.5));
$('barL').setAttribute('width',(110*p(u,lw+.6,lw+1.4)).toFixed(1)); $('barR').setAttribute('width',(560*p(u,hl+.6,hl+1.8)).toFixed(1));

const iv=TM.investor,tc=TM.two_cards,mm=p(u,tc+9.2,tc+9.8); rise($('buf'),p(u,iv,iv+.5)); rise($('outer'),p(u,iv+1,iv+1.5)); rise($('inner'),p(u,iv+1.5,iv+2));
$('outerW').setAttribute('opacity',(1-.32*mm).toFixed(2)); rise($('oc'),p(u,tc,tc+.5)); rise($('ic'),p(u,tc+4.2,tc+4.7));
ICK.forEach((c,i)=>c.setAttribute('opacity',p(u,tc+4.8+i*.4,tc+5.1+i*.4))); rise($('most'),mm);

const c6=TM.checklist,sd=TM.sweat_drop,hs=TM.handshake; rise($('card6'),p(u,c6,c6+.5)); rise($('r1'),p(u,sd,sd+.5)); rise($('r2'),p(u,hs,hs+.5));
$('ck1').setAttribute('stroke-dashoffset',(100*(1-p(u,sd+.8,sd+1.3))).toFixed(1)); $('ck2').setAttribute('stroke-dashoffset',(100*(1-p(u,hs+.8,hs+1.3))).toFixed(1)); rise($('guard'),p(u,hs+4.1,hs+4.6));

const nb=TM.notebook,el=TM.evening_lamp; rise($('days'),p(u,nb,nb+.5)); DK.forEach((c,i)=>c.setAttribute('opacity',p(u,nb+1+i*1.4,nb+1.4+i*1.4)));
rise($('lamp'),p(u,el,el+.5)); $('cone').setAttribute('fill-opacity',(.22*p(u,el+.4,el+1)).toFixed(2));
rise($('tmr'),p(u,el+4.5,el+5.1)); $('sun').setAttribute('cy',(610-50*p(u,el+4.8,el+6)).toFixed(1));

const pc=TM.pencil; rise($('qa'),p(u,pc,pc+.5)); rise($('qb'),p(u,pc+.4,pc+.9)); rise($('qc'),p(u,pc+4.9,pc+5.4)); rise($('rows8'),p(u,pc+.6,pc+1)); rise($('pen8'),p(u,pc+.6,pc+1));
let px=960,py=RY[0]-10; LN.forEach((l,i)=>{const k=p(u,pc+1+i,pc+1.8+i),x=960+RL[i]*k; l.setAttribute('d','M960 '+(RY[i]-10)+'H'+(x+1).toFixed(1)); if(u>=pc+1+i){px=x;py=RY[i]-10}});
$('penW').setAttribute('transform','translate('+px.toFixed(1)+' '+py+')'); BK.forEach((b,i)=>b.setAttribute('opacity',p(u,pc+4.9+i*.3,pc+5.2+i*.3)));