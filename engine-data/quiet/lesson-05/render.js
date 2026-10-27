const hb=TM.gold_trophy;
rise($('troph'),p(u,hb,hb+.6));
rays.forEach((r,i)=>r.setAttribute('opacity',(p(u,hb+6.6+i*.12,hb+7+i*.12)*(.6+.4*Math.sin(t*3+i))).toFixed(2)));

const bg=p(u,TM.brain_glow,TM.brain_glow+.6);
brain.forEach(c=>c.setAttribute('fill',bg>.5?'var(--gain)':'var(--muted)'));
glow.forEach((c,i)=>{const k=(t*.6+i/3)%1;c.setAttribute('r',(150+80*k).toFixed(1));c.setAttribute('opacity',(bg*(1-k)).toFixed(2))});
rise($('dopa'),p(u,TM.dopamine_spark,TM.dopamine_spark+.5));
$('spark').setAttribute('opacity',(.75+.25*Math.sin(t*5)).toFixed(2));
const pc=TM.party_crowd;rise($('party'),p(u,pc,pc+.5));
$('barE').setAttribute('width',(500*p(u,pc+.4,pc+1.6)+6*Math.sin(t*7)*p(u,pc+1.6,pc+2)).toFixed(1));
$('barI').setAttribute('width',(220*p(u,pc+.6,pc+1.8)).toFixed(1));
prz.forEach((g,i)=>rise(g,p(u,pc+2+i*.8,pc+2.5+i*.8)));

const gp=TM.gas_pedal,bp=TM.brake_pedal;
rise($('gasP'),p(u,gp,gp+.5));rise($('brkP'),p(u,bp,bp+.5));rise($('warn2'),p(u,bp,bp+.5));
const cx2=300+520*p(u,gp+.3,gp+3.2)+260*p(u,bp+.3,bp+2.5);
car.setAttribute('transform','translate('+cx2.toFixed(1)+' 406)');
const mv=(u>gp+.3&&u<gp+3.2)||(u>bp+.3&&u<bp+2.5);
spd.setAttribute('opacity',mv?(.5+.5*Math.sin(t*20)).toFixed(2):0);
$('gasR').setAttribute('y',(500+16*p(u,gp+.2,gp+.5)*(1-p(u,bp,bp+.3))).toFixed(1));
$('brkR').setAttribute('y',(580+16*p(u,bp,bp+.3)).toFixed(1));
rise($('both'),p(u,bp+5,bp+5.6));

const wl=TM.win_lose_sign,rm=TM.running_man;
rise($('deck'),p(u,TM.card_deck,TM.card_deck+.5));rise($('chartL'),p(u,wl,wl+.4));
cards.forEach((g,i)=>rise(g,p(u,wl+i*.45,wl+i*.45+.3)));
const pr3=part(PT,cl((u-wl)/.45,0,10));$('pline').setAttribute('points',pr3[0]);
runr.setAttribute('transform','translate('+pr3[1][0].toFixed(1)+' '+pr3[1][1].toFixed(1)+')');runr.setAttribute('opacity',p(u,rm,rm+.4));
const ph=Math.sin(t*12)*14;
limbs.setAttribute('d','M0 -50L4 -24M4 -24L'+(4+ph).toFixed(1)+' 0M4 -24L'+(4-ph).toFixed(1)+' 0M2 -42L'+(-ph).toFixed(1)+' -30M2 -42L'+ph.toFixed(1)+' -30');
rise($('chase'),p(u,rm+.5,rm+1.1));

const pb=TM.pause_button,tc=TM.thought_cloud,sp=tc+5.3,pk=(t*.8)%1;
rise($('pz'),p(u,pb,pb+.5));
$('pzR').setAttribute('r',(130+30*pk).toFixed(1));$('pzR').setAttribute('opacity',(p(u,pb,pb+.5)*(1-pk)).toFixed(2));
rise($('thinker'),p(u,pb+.6,pb+1.1));rise($('think'),p(u,tc,tc+.6));rise($('adj'),p(u,tc+2.5,tc+3));
rise($('stkL'),p(u,sp-.4,sp));
stA.forEach((c,j)=>c.setAttribute('opacity',p(u,sp+j*.35,sp+j*.35+.2)));
stB.forEach((c,j)=>c.setAttribute('opacity',p(u,sp+j*.35,sp+j*.35+.2)));
rise($('quit4'),p(u,sp+1.3,sp+1.8));rise($('cap4'),p(u,sp+2.4,sp+3));

const sc=TM.stock_chart,bt=TM.bold_trader;
rise($('ax5'),p(u,sc,sc+.4));
$('up5').setAttribute('points',part(P5,8*p(u,sc+.3,sc+2.5))[0]);
$('dn5').setAttribute('points',part(D5,2*p(u,sc+2.8,sc+3.4))[0]);
rise($('y08'),p(u,sc+3.2,sc+3.7));
rise($('trader'),p(u,bt,bt+.5));rise($('big5'),p(u,bt+.6,bt+1.1));rise($('quiet5'),p(u,bt+.3,bt+.8));
rise($('qbub5'),p(u,bt+.9,bt+1.4)*(1-.6*p(u,bt+3,bt+3.6)));
rise($('cap5'),p(u,bt+3,bt+3.6));

const bd=TM.buffett_desk,tb=TM.tech_bubble,fl=TM.falling_line;
rise($('buf'),p(u,bd,bd+.5));rise($('aud6'),p(u,tb,tb+.5));rise($('ax6'),p(u,tb,tb+.4));rise($('warnB'),p(u,tb+1.5,tb+2));
const gr=p(u,tb+.4,tb+4),popk=p(u,fl,fl+.25),br=Math.max(0,(20+120*gr+3*Math.sin(t*4))*(1-popk));
$('tl6').setAttribute('points',part(P6,5*gr)[0]);
$('balC').setAttribute('r',br.toFixed(1));$('balC').setAttribute('cy',(540-br).toFixed(1));$('balC').setAttribute('opacity',gr>0?1:0);
$('pop6').setAttribute('opacity',(popk*(1-p(u,fl+.3,fl+1.2))).toFixed(2));
$('fl6').setAttribute('points',part(F6,4*p(u,fl+.2,fl+1.6))[0]);
rise($('oot6'),p(u,fl,fl+.5));
aud.forEach((c,i)=>c.setAttribute('fill',u>=fl+1.6+i*.1?'var(--gain)':'var(--muted)'));
rise($('right6'),p(u,fl+1.6,fl+2.2));

const tt=TM.team_table,sb=TM.scale_balance,rh=TM.raised_hand;
rise($('team7'),p(u,tt,tt+.5));rise($('quiet7'),p(u,tt+.3,tt+.8));rise($('scl7'),p(u,tt+.6,tt+1.1));
const ang=12*(1-p(u,sb,sb+2.5))+(u<sb?2*Math.sin(t*2):0),ar=ang*Math.PI/180,ca=Math.cos(ar),sa=Math.sin(ar);
$('beam7').setAttribute('transform','rotate('+ang.toFixed(2)+' 450 300)');
pL.setAttribute('transform','translate('+(450-200*ca).toFixed(1)+' '+(300-200*sa).toFixed(1)+')');
pR.setAttribute('transform','translate('+(450+200*ca).toFixed(1)+' '+(300+200*sa).toFixed(1)+')');
$('beam7').style.stroke=u>=sb+2.5?'var(--gain)':'var(--ink)';
rise($('hand7'),p(u,rh,rh+.5));rise($('cap7'),p(u,rh+.8,rh+1.4));

const s8=SC[8][0]/K;
rise($('pre8'),p(u,s8+.4,s8+1));rise($('pz8'),p(u,s8+1,s8+1.6));
rise($('q8a'),p(u,s8+5.8,s8+6.3));rise($('q8b'),p(u,s8+6.2,s8+6.7));rise($('q8c'),p(u,s8+6.6,s8+7.1));