const T0=TM.title_card;
TH.forEach((h,i)=>{rise(h[0],p(u,T0+i*.3,T0+i*.3+.5));h[1].setAttribute('fill',u>=T0+3.2?'var(--gain)':'var(--stage)')});
$('ring').setAttribute('stroke-dashoffset',(692*(1-p(u,T0+1.4,T0+3.2))).toFixed(1));
rise($('tkid'),p(u,T0+3.2,T0+3.8));

const L=TM.lonely_kid,D=TM.domino_row,G=TM.group_hands,up=p(u,G,G+1),off=1-p(u,G,G+.6);
const solved=u>=G+.3;
KD.forEach((k,i)=>{rise(k[0],p(u,L+i*.15,L+i*.15+.4));k[1].setAttribute('opacity',((i===6?p(u,L+5.4,L+5.8):1)*off).toFixed(2));
  k[2].forEach(e=>e.setAttribute('class',(solved||i===6)?'gain':'ink'))});
rise($('lone'),p(u,L+1,L+1.5)*(1-p(u,L+5.1,L+5.4)));
rise($('givein'),p(u,L+5.4,L+5.9)*(1-p(u,G,G+.4)));
rise($('alltog'),p(u,G+.4,G+.9));
const gp=p(u,G+1.2,G+1.8);
DM.forEach((d,i)=>{const a=62*p(u,D+.6+i*.22,D+.95+i*.22)*(1-up),gap=(i===4||i===5);d.setAttribute('transform','rotate('+a.toFixed(1)+' '+(230+i*120)+' 700)');
  d.setAttribute('fill',u<G?'var(--ink)':(gap&&gp>0?'var(--line)':'var(--gain)'));d.setAttribute('opacity',(p(u,D,D+.4)*(gap?1-.7*gp:1)).toFixed(2))});
rise($('dcap'),p(u,D+.4,D+.9));rise($('link'),p(u,G+.8,G+1.3));$('railmid').setAttribute('opacity',(1-gp).toFixed(2));
rise($('opn'),p(u,G+1.6,G+2.1));rise($('gcap'),p(u,G+1,G+1.6));

const F=TM.flip_phone;rise($('smart'),p(u,F,F+.5));rise($('age14'),p(u,F+1.5,F+2));rise($('flip'),p(u,F+5,F+5.5));
const P=TM.pledge_sheet;rise($('sheet'),p(u,P,P+.5));SG.forEach((g,i)=>rise(g,p(u,P+1+i*.6,P+1.4+i*.6)));

const C=TM.calendar_16,w3=p(u,C+.8,C+8);rise($('cal'),p(u,C,C+.5));
$('kid3').setAttribute('transform','translate('+(160+920*w3).toFixed(1)+' 630) scale('+(.7+.4*w3).toFixed(3)+')');
$('kid3').setAttribute('opacity',p(u,C+.3,C+.8));K3.forEach(e=>e.setAttribute('class',w3>=1?'gain':'ink'));
rise($('pub'),p(u,C+4.2,C+4.8));rise($('wait'),p(u,C+5.5,C+6.1));rise($('idc'),p(u,TM.age_check,TM.age_check+.5));

const LW=TM.locker_wall;rise($('lockers'),p(u,LW,LW+.5));
PH.forEach((ph,i)=>{const a=LW+5.4+i*.35,k=p(u,a,a+.6);ph.setAttribute('y',(690-270*k).toFixed(1));ph.setAttribute('opacity',k>=1?0:p(u,LW+.5,LW+1));LK[i].setAttribute('fill',k>=1?'var(--gain)':'var(--line)')});
rise($('lkcap'),p(u,LW+5.4,LW+6));
const LT=TM.lunch_table;rise($('lunch'),p(u,LT,LT+.5));
BB.forEach((b,i)=>b.setAttribute('opacity',(p(u,LT+.8+i*.4,LT+1.2+i*.4)*(.55+.45*Math.abs(Math.sin(t*1.6+i*1.3)))).toFixed(2)));
rise($('nosc'),p(u,LT+2.5,LT+3));rise($('lucap'),p(u,LT+3,LT+3.6));

const O=TM.open_gate;rise($('half2'),p(u,O,O+.5));rise($('gateW'),p(u,O,O+.5));
$('gate').setAttribute('transform','translate(909 0) scale('+(1-.88*p(u,O+1,O+2.2)).toFixed(3)+' 1) translate(-909 0)');
$('kid5').setAttribute('transform','translate('+(760+440*p(u,O+2,O+4.5)).toFixed(1)+' 600)');$('kid5').setAttribute('opacity',p(u,O+.5,O+1));
rise($('half1'),p(u,O+6.1,O+6.6));$('plus5').setAttribute('opacity',p(u,O+6.4,O+6.9));rise($('hf'),p(u,O+6.6,O+7.1));
rise($('toys'),p(u,O+10.3,O+10.8));rise($('rich'),p(u,O+10.5,O+11.1));$('ball').setAttribute('cy',(585-60*Math.abs(Math.sin(t*3))).toFixed(1));

const DG=TM.dog_leash;rise($('t0'),p(u,DG+.3,DG+.8));rise($('t1'),p(u,DG+8.3,DG+8.8));rise($('t2'),p(u,DG+9.6,DG+10.1));
$('tail').setAttribute('transform','rotate('+(20*Math.sin(t*8)).toFixed(1)+' 300 440)');
const PF=TM.proud_face;rise($('proud'),p(u,PF,PF+.5));rise($('exp'),p(u,PF+1.5,PF+2));rise($('can'),p(u,PF+2.5,PF+3));
$('canb').setAttribute('width',(900*p(u,PF+2.8,PF+4.5)).toFixed(1));
ST.forEach((s,i)=>s.setAttribute('opacity',(.4+.6*Math.abs(Math.sin(t*2+i))).toFixed(2)));

const SM=TM.street_map,PG=TM.playground;
H7.forEach((h,i)=>{rise(h[0],p(u,SM+i*.15,SM+i*.15+.4));h[1].setAttribute('fill',u>=SM+1.8+i*.25?'var(--gain)':'var(--stage)')});
rise($('park'),p(u,PG,PG+.5));
KS.forEach((c,i)=>{const q=H7[i][2],k=p(u,PG+.6+i*.2,PG+2+i*.2);c.setAttribute('cx',(q[0]+(PK[i][0]-q[0])*k).toFixed(1));c.setAttribute('cy',(q[1]+80+(PK[i][1]-q[1]-80)*k).toFixed(1));c.setAttribute('opacity',p(u,PG+.4,PG+.8))});
rise($('pcap'),p(u,PG+2.5,PG+3.1));

const Q=TM.phone_call;rise($('qa'),p(u,Q,Q+.5));rise($('qb'),p(u,Q+.4,Q+.9));rise($('qc'),p(u,Q+.8,Q+1.3));rise($('call'),p(u,Q+1.2,Q+1.7));
WV.forEach((w,i)=>w.setAttribute('opacity',(.25+.75*Math.max(0,Math.sin(t*3-i*.9))).toFixed(2)));