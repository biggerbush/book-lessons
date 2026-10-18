rise($('tbub'),p(u,TM.talking_head,TM.talking_head+.5));
const amp=.3+.7*p(u,TM.talking_head+6.2,TM.talking_head+7.5);
TB.forEach((r,i)=>{const h=16+76*amp*(.5+.5*Math.sin(t*5+i*1.3));r.setAttribute('y',(360-h).toFixed(1));r.setAttribute('height',h.toFixed(1))});

rise($('mt'),p(u,TM.meeting_table,TM.meeting_table+.5));
H1.setAttribute('class',u>=TM.red_face?'loss':'ink');rise($('rf'),p(u,TM.red_face,TM.red_face+.4));
let e1='',e2='';for(let x=360;x<=640;x+=4){const k=((x+t*300)%70+70)%70;e1+=x+','+(770-(k<30?0:k<36?(k-30)*6:k<44?36-(k-36)*9:k<50?-36+(k-44)*6:0)).toFixed(1)+' ';e2+=(x+600)+','+(770+8*Math.sin(x/30+t*2)).toFixed(1)+' '}
$('ecg1').setAttribute('points',e1);$('ecg2').setAttribute('points',e2);
rise($('cb'),p(u,TM.calm_friend,TM.calm_friend+.4));rise($('calm'),p(u,TM.calm_friend+6.2,TM.calm_friend+6.8));
H2.setAttribute('class',u>=TM.calm_friend+6.2?'gain':'ink');

rise($('tag'),p(u,TM.label_maker,TM.label_maker+.5));rise($('kn'),p(u,TM.volume_knob,TM.volume_knob+.5));
const ve=p(u,TM.volume_knob+4.1,TM.volume_knob+5.1),vi=p(u,TM.volume_knob+8.3,TM.volume_knob+9.3),v=.5+.5*ve-.85*vi;
$('ptr').setAttribute('transform','rotate('+(-135+270*v).toFixed(1)+' 330 550)');
$('feel').setAttribute('r',(40+180*v+4*Math.sin(t*9)*ve*(1-vi)).toFixed(1));
$('tagt').textContent=u>=TM.volume_knob+8.3?'A LITTLE IRRITATED':u>=TM.volume_knob+4.1?'ENRAGED':'HOW DO YOU FEEL?';

BB.forEach((g,i)=>rise(g,p(u,TM.word_bubbles+i*.4,TM.word_bubbles+i*.4+.4)));
rise($('same3'),p(u,TM.word_bubbles+2.6,TM.word_bubbles+3.2));
rise($('storm'),p(u,TM.storm_cloud,TM.storm_cloud+.6));rise($('sb'),p(u,TM.storm_cloud+.4,TM.storm_cloud+1));
const fl=(t%2.4)<.18?6:0;$('bolt').setAttribute('transform','translate(0 '+fl+')');
RN.forEach((r,i)=>{const y=480+((t*160+i*53)%130);r.setAttribute('d','M'+RX[i]+' '+y.toFixed(1)+'l-6 26')});
rise($('w3'),p(u,TM.storm_cloud+5.4,TM.storm_cloud+6));

rise($('fd4'),p(u,TM.dial_down,TM.dial_down+.5));KN4.setAttribute('y',(270+390*p(u,TM.dial_down+.4,TM.dial_down+1.8)).toFixed(1));
[[TM.tired_person,250],[TM.cooling_face,190]].forEach(([a,w],i)=>{rise($('r'+(i+1)),p(u,a,a+.4));strike('sk'+(i+1),w,p(u,a+1,a+1.6));rise($('n'+(i+1)),p(u,a+1.4,a+2))});
const bk=p(u,TM.tired_person+1.6,TM.tired_person+2.8);$('batf').setAttribute('width',(14+96*bk).toFixed(1));$('batf').setAttribute('fill',bk>0?'var(--gain)':'var(--loss)');
const cf=u>=TM.cooling_face+1.4;$('face').setAttribute('fill',cf?'var(--gain)':'var(--loss)');
$('mouth').setAttribute('d',u>=TM.cooling_face+4.2?'M165 558q25 26 50 0':cf?'M165 566h50':'M165 572q25-20 50 0');
rise($('mild'),p(u,TM.cooling_face+4.2,TM.cooling_face+4.8));

rise($('fd5'),p(u,TM.dial_up,TM.dial_up+.5));KN5.setAttribute('y',(660-390*p(u,TM.dial_up+.4,TM.dial_up+1.8)).toFixed(1));
rise($('ask'),p(u,TM.thumbs_up,TM.thumbs_up+.4));
BARS.forEach((b,i)=>{const a=i?TM.star_burst+(i-1)*.8:TM.thumbs_up+.6,k=p(u,a,a+1);rise(b.g,p(u,a,a+.3));b.r.setAttribute('y',(720-b.h*k).toFixed(1));b.r.setAttribute('height',(b.h*k).toFixed(1));
  if(b.s)b.s.setAttribute('transform','translate('+b.x+' '+(660-b.h*k).toFixed(1)+') rotate('+(t*40%360).toFixed(1)+') scale('+k.toFixed(2)+')')});
rise($('big5'),p(u,TM.star_burst+5,TM.star_burst+5.6));

rise($('ev'),p(u,TM.brain_icon,TM.brain_icon+.5));rise($('brain'),p(u,TM.brain_icon+.4,TM.brain_icon+.9));
rise($('pth'),p(u,TM.two_paths,TM.two_paths+.5));
for(let j=0;j<2;j++)for(let i=0;i<3;i++){const a=TM.two_paths+.3+i*.5+j*.2;rise($('pb'+j+i),p(u,a,a+.4))}
rise($('same6'),p(u,TM.two_paths+3.3,TM.two_paths+3.8));$('evr').setAttribute('stroke',u>=TM.two_paths+3.3?'var(--gain)':'var(--ink)');
rise($('loud'),p(u,TM.two_paths+5.5,TM.two_paths+6.1));

rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
NBR.forEach((g,i)=>{const a=TM.swap_arrows+i*.6;rise(g,p(u,a,a+.4))});
rise($('stk'),p(u,TM.sticky_note,TM.sticky_note+.5));rise($('aloud'),p(u,TM.sticky_note+4.6,TM.sticky_note+5.2));
WV.forEach((w,i)=>w.setAttribute('opacity',(.5+.5*Math.sin(t*5-i)).toFixed(2)));

const Q=TM.question_mark;
rise($('qa'),p(u,Q,Q+.5));rise($('qb'),p(u,Q+.4,Q+.9));
rise($('slot'),p(u,Q+.6,Q+1.1));
const oin=p(u,Q+.8,Q+1.3),omv=p(u,Q+2.2,Q+3);
strike('ostk',200,p(u,Q+1.5,Q+2.1));
$('otag').setAttribute('opacity',(oin*(1-.55*omv)).toFixed(2));
$('otag').setAttribute('transform','translate(0 '+(-230*omv).toFixed(1)+')');
$('rlab').setAttribute('opacity',p(u,Q+2.8,Q+3.3).toFixed(2));
rise($('qc'),p(u,Q+3,Q+3.6));
const nin=p(u,Q+3,Q+3.9);
$('ntag').setAttribute('opacity',nin.toFixed(2));
$('ntag').setAttribute('transform','translate(0 '+(220*(1-nin)+(nin>=1?4*Math.sin(t*2):0)).toFixed(1)+')');