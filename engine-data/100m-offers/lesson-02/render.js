const F=TM.food_stands;rise($('stands'),p(u,F,F+.5));Q.forEach((g,i)=>rise(g,p(u,F+.8+i*.35,F+1.2+i*.35)));rise($('t0l'),p(u,F+5.4,F+6));

rise($('pod'),p(u,TM.ranking_podium,TM.ranking_podium+.5));rise($('lab1'),p(u,TM.market_trophy,TM.market_trophy+.5));
const O=TM.offer_medal;rise($('lab2'),p(u,O,O+.5));rise($('lab3'),p(u,O+1.2,O+1.7));rise($('wrong'),p(u,O+4.9,O+5.5));rise($('obs'),p(u,O+9.1,O+9.7));

const B=TM.burning_house;rise($('face'),p(u,TM.worried_face,TM.worried_face+.5));rise($('house'),p(u,B,B+.5));
FL.forEach(([e,x,y],i)=>e.setAttribute('transform','translate('+x+' '+y+') scale('+(1+.08*Math.sin(t*9+i*2)).toFixed(3)+' '+(1+.14*Math.sin(t*7+i)).toFixed(3)+') translate('+(-x)+' '+(-y)+')'));
rise($('moon'),p(u,B+3.4,B+3.9));rise($('night'),p(u,B+3.4,B+4));rise($('cmp'),p(u,B+7.6,B+8.2));

const E=TM.empty_wallet,W=TM.full_wallet;rise($('ew'),p(u,E,E+.5));rise($('ewl'),p(u,E+2.6,E+3.1));CP.forEach((g,i)=>rise(g,p(u,E+7.6+i*.5,E+8+i*.5)));
rise($('fw'),p(u,W,W+.5));$('bills').setAttribute('transform','translate(0 '+(80*(1-p(u,W+.3,W+1.2))).toFixed(1)+')');

const T=TM.target_board,M=TM.meeting_group,ak=p(u,T+.4,T+1);rise($('tg'),p(u,T,T+.5));
$('arw').setAttribute('transform','translate('+(180*(1-ak)).toFixed(1)+' '+(-180*(1-ak)).toFixed(1)+')');$('arw').setAttribute('opacity',cl(ak*3));
CL.forEach((g,i)=>rise(g,p(u,M+i*.6,M+i*.6+.5)));rise($('hang'),p(u,M+4.6,M+5.2));rise($('find'),p(u,M+9.5,M+10.1));

const R=TM.rising_arrow,S=TM.sinking_boat;rise($('gr'),p(u,R,R+.5));$('cur').setAttribute('stroke-dashoffset',(-t*40).toFixed(1));
const ku=.1+.75*p(u,R+2.5,R+5.5);$('boatU').setAttribute('transform','translate('+(180+540*ku).toFixed(1)+' '+(700-360*ku).toFixed(1)+') rotate(-33.7)');$('boatU').setAttribute('opacity',p(u,R,R+.5));
rise($('sh'),p(u,S,S+.5));const kd=.05+.6*p(u,S+.3,S+3.3),sk=p(u,S+3.3,S+4.8);
$('boatD').setAttribute('transform','translate('+(900+540*kd).toFixed(1)+' '+(340+360*kd+70*sk).toFixed(1)+') rotate('+(33.7+20*sk).toFixed(1)+')');$('boatD').setAttribute('opacity',(p(u,S,S+.5)*(1-sk)).toFixed(2));

const Z=TM.zoom_lens,N=TM.narrow_slice,zo=u>=Z;MC.forEach((m,i)=>rise(m[0],p(u,TM.three_circles+i*.6,TM.three_circles+i*.6+.5)));
MC[0][1].setAttribute('fill',zo?'var(--gain)':'var(--stage)');MC[0][1].setAttribute('stroke',zo?'var(--gain)':'var(--ink)');MC[0][2].style.fill=zo?'var(--gain)':'';
rise($('lens'),p(u,Z,Z+.5));rise($('n0'),p(u,Z+.6,Z+1.1));rise($('n1'),p(u,N,N+.5));rise($('n2'),p(u,N+1.4,N+1.9));rise($('small'),p(u,N+5.4,N+6));

const G=TM.gym_owner,D=TM.deep_roots;rise($('gym'),p(u,G,G+.5));rise($('hop'),p(u,G+3.8,G+4.3));rise($('tree'),p(u,D,D+.5));
RT.forEach((r,i)=>r.setAttribute('stroke-dashoffset',(1-p(u,D+.4+i*.2,D+1.6+i*.2)).toFixed(3)));rise($('rlab'),p(u,D+1.5,D+2));
rise($('chain'),p(u,D+5,D+5.5));CHN.forEach((c,i)=>{const on=u>=D+5.4+i*.6;c.setAttribute('fill',on?'var(--gain)':'var(--stage)');c.setAttribute('stroke',on?'var(--gain)':'var(--ink)')});

const C=TM.checklist;rise($('ck'),p(u,C,C+.5));BR.forEach((b,i)=>b.setAttribute('width',(260*LV[i]*p(u,C+.4+i*.3,C+1.4+i*.3)).toFixed(1)));
rise($('qa'),p(u,C+4.2,C+4.7));rise($('qb'),p(u,C+4.6,C+5.1));rise($('qc'),p(u,C+5,C+5.5));