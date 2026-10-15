fire(F0,660,t,1);
rise(E('xff0'),p(u,TM.firefighter,TM.firefighter+.6));
E('xffb').setAttribute('transform',`translate(0 ${(5*Math.sin(t*9)).toFixed(1)})`);
const sw=26*Math.sin(t*9);E('xffl').setAttribute('d',`M1325 543L${(1325+sw).toFixed(0)} 640M1355 543L${(1355-sw).toFixed(0)} 640`);
rise(E('xffq'),p(u,TM.firefighter+5.8,TM.firefighter+6.3));

rise(E('xforest'),p(u,TM.forest_fire,TM.forest_fire+.6));fire(F1,700,t,.6+.4*p(u,TM.forest_fire,TM.radio_order+4));
rise(E('xflag'),p(u,TM.forest_fire+1,TM.forest_fire+1.5));rise(E('xrun1'),p(u,TM.forest_fire+.5,TM.forest_fire+1));
const rx=740+120*p(u,TM.forest_fire,TM.radio_order+4),lw=u>=TM.backpack?4:9,s1w=24*Math.sin(t*lw);
E('xrunner').setAttribute('transform',`translate(${rx.toFixed(1)} ${(-3*Math.abs(Math.sin(t*lw))).toFixed(1)})`);
E('xrlegs').setAttribute('d',`M-14 588L${(-14+s1w).toFixed(0)} 700M14 588L${(14-s1w).toFixed(0)} 700`);
rise(E('xpack'),p(u,TM.backpack,TM.backpack+.5));rise(E('xrbub'),p(u,TM.radio_order,TM.radio_order+.5));

rise(E('xlp'),p(u,TM.karl_weick,TM.karl_weick+.6));rise(E('xnoteq'),p(u,TM.karl_weick+3,TM.karl_weick+3.5));
rise(E('xbadge'),p(u,TM.id_badge,TM.id_badge+.6));rise(E('xgiveup'),p(u,TM.id_badge+2.5,TM.id_badge+3.1));
rise(E('xmind'),p(u,TM.mind_toolbox,TM.mind_toolbox+.6));

rise(E('xrocket'),p(u,TM.rocket,TM.rocket+.6));rise(E('xrule'),p(u,TM.rocket+1.5,TM.rocket+2.1));
rise(E('xsnow'),p(u,TM.cold_photo,TM.cold_photo+.6));rise(E('xeng'),p(u,TM.cold_photo,TM.cold_photo+.5));rise(E('xphotoW'),p(u,TM.cold_photo+.6,TM.cold_photo+1.1));
const k1=p(u,TM.cold_photo+2,TM.cold_photo+3.5),k2=p(u,TM.dismissed,TM.dismissed+1);
E('xphoto').setAttribute('transform',`translate(${(220*(k1-k2)).toFixed(1)} 0)`);E('xphoto').setAttribute('opacity',(1-.6*k2).toFixed(2));
rise(E('xstamp'),p(u,TM.dismissed+.8,TM.dismissed+1.2));rise(E('xhand'),p(u,TM.dismissed+2,TM.dismissed+2.6));

DT.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.forecasts+i*.03,TM.forecasts+i*.03+.3)));
rise(E('xdotl'),p(u,TM.forecasts+.5,TM.forecasts+1));
rise(E('xhog'),p(u,TM.hedgehog,TM.hedgehog+.6));rise(E('xidea'),p(u,TM.hedgehog+1.5,TM.hedgehog+2.1));
rise(E('xsc4'),p(u,TM.bad_scores,TM.bad_scores+.5));const h4=80*p(u,TM.bad_scores+.3,TM.bad_scores+1.3);
E('xhb4').setAttribute('y',(640-h4).toFixed(1));E('xhb4').setAttribute('height',h4.toFixed(1));
rise(E('xnorescue'),p(u,TM.bad_scores+2.5,TM.bad_scores+3.1));

rise(E('xfoxg'),p(u,TM.fox,TM.fox+.6));IDX.forEach((g,i)=>rise(g,p(u,TM.fox+.6+i*.3,TM.fox+.9+i*.3)));
rise(E('xscl'),p(u,TM.scales,TM.scales+.6));
const th=12*Math.sin(t*1.1)*p(u,TM.scales+.5,TM.scales+1.5),ca=150*Math.cos(th*Math.PI/180),sa=150*Math.sin(th*Math.PI/180);
E('xbeam').setAttribute('transform',`rotate(${th.toFixed(2)} 830 300)`);
E('xpanL').setAttribute('transform',`translate(${(830-ca).toFixed(1)} ${(300-sa).toFixed(1)})`);
E('xpanR').setAttribute('transform',`translate(${(830+ca).toFixed(1)} ${(300+sa).toFixed(1)})`);
rise(E('xtrophy'),p(u,TM.trophy,TM.trophy+.5));const h5=260*p(u,TM.trophy+.3,TM.trophy+1.5);
E('xfb5').setAttribute('y',(640-h5).toFixed(1));E('xfb5').setAttribute('height',h5.toFixed(1));
rise(E('xcup'),p(u,TM.trophy+1.4,TM.trophy+1.9));rise(E('xbetter'),p(u,TM.trophy+.8,TM.trophy+1.4));

rise(E('xlab'),p(u,TM.scientist,TM.scientist+.6));rise(E('xart'),p(u,TM.paintbrush,TM.paintbrush+.5));
['xpa0','xpa1'].forEach((id,i)=>{const k=p(u,TM.paintbrush+.6+i*.8,TM.paintbrush+1.8+i*.8);E(id).setAttribute('stroke-dashoffset',1-k);E(id).setAttribute('opacity',k>0?1:0)});
rise(E('xnobel'),p(u,TM.paintbrush+2,TM.paintbrush+2.6));rise(E('xplay'),p(u,TM.playground,TM.playground+.6));
const kx=1240+30*Math.sin(t*1.3),ky=340+14*Math.cos(t*1.7);
E('xkite').setAttribute('transform',`translate(${kx.toFixed(1)} ${ky.toFixed(1)}) rotate(${(10*Math.sin(t*1.3)).toFixed(1)})`);
E('xkstr').setAttribute('d',`M1345 640Q1400 520 ${kx.toFixed(1)} ${(ky+60).toFixed(1)}`);
rise(E('xloose'),p(u,TM.playground+1,TM.playground+1.6));

[TM.question_mark,TM.open_door,TM.new_hobby].forEach((a,i)=>rise(E('xk'+i),p(u,a,a+.6)));
E('xwr').setAttribute('transform',`rotate(${(8*Math.sin(t*2)).toFixed(1)} 290 450)`);
const dk=p(u,TM.open_door+.6,TM.open_door+1.8),dw=140*(1-.75*dk),dy=30*dk;
E('xleaf').setAttribute('points',`730,300 ${(730+dw).toFixed(1)},${(300-dy).toFixed(1)} ${(730+dw).toFixed(1)},${(530+dy).toFixed(1)} 730,530`);
E('xstem7').setAttribute('stroke-dashoffset',1-p(u,TM.new_hobby+.6,TM.new_hobby+1.6));rise(E('xlv7'),p(u,TM.new_hobby+1.4,TM.new_hobby+1.9));

const q0=SC[8][0]/K;
rise(E('xqa'),p(u,q0+.5,q0+1));rise(E('xqb'),p(u,q0+.9,q0+1.4));rise(E('xqc'),p(u,q0+1.3,q0+1.8));
rise(E('xsetw'),p(u,q0+.8,q0+1.4));rise(E('xqd'),p(u,q0+5.8,q0+6.4));
const wk=p(u,q0+6,q0+7.2);E('xsetwi').setAttribute('transform',`translate(0 ${(-150*(1-wk)).toFixed(1)}) rotate(${(-25*(1-wk)).toFixed(1)} 1320 740)`);