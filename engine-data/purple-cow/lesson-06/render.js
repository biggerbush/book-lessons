rise($('snz0'),p(u,TM.title_cow,TM.title_cow+.6));
A0.forEach((a,i)=>a.setAttribute('opacity',(u<TM.title_cow+.6?0:.25+.75*Math.max(0,Math.sin(t*3-i*.8))).toFixed(2)));
T0.forEach(([e,dx,dy])=>e.setAttribute('class',u>TM.title_cow+1.5+dx/60+dy/120?'gain':'ink'));

CV1.setAttribute('stroke-dashoffset',(1-p(u,TM.bell_curve,TM.bell_curve+1.6)).toFixed(3));
rise(L1,p(u,TM.left_edge,TM.left_edge+.5)); rise($('le1'),p(u,TM.left_edge+.3,TM.left_edge+.8));
rise(M1,p(u,TM.big_middle,TM.big_middle+.5)); rise($('bm1'),p(u,TM.big_middle+.3,TM.big_middle+.8));

const s2=SC[2][0]/K;
rise($('mega'),p(u,s2+.3,s2+.8)); rise($('crowd2'),p(u,s2+.8,s2+1.3)); $('aim').setAttribute('opacity',p(u,s2+1.6,s2+2.2));
rise($('wall2'),p(u,TM.wall,TM.wall+.5)); rise($('wl2'),p(u,TM.wall+.4,TM.wall+.9));
const ab=p(u,TM.ad_bounce,TM.ad_bounce+.4);
AD.forEach((a,i)=>{const c=((t*.5+i/4)%1+1)%1;let x,y=485+(i-1.5)*28,o=1;if(c<.6)x=350+566*(c/.6);else{const k=(c-.6)/.4;x=916-260*k;y+=160*k*k;o=1-k}a.setAttribute('x',x.toFixed(1));a.setAttribute('y',y.toFixed(1));a.setAttribute('opacity',(o*ab).toFixed(2))});
rise($('bnc2'),p(u,TM.ad_bounce,TM.ad_bounce+.5));

rise($('snz3'),p(u,TM.sneezer,TM.sneezer+.5));
rise($('cld'),p(u,TM.sneeze_cloud,TM.sneeze_cloud+.4));
const cs=1+.06*Math.sin(t*4); $('cldi').setAttribute('transform','translate(480 415) scale('+cs.toFixed(3)+') translate(-480 -415)');
T3.forEach((g,i)=>{const a=TM.sneeze_cloud+.8+i*.9; rise(g,p(u,a,a+.4))});
const a3=TM.sneeze_cloud+6.2; rise($('mk3'),p(u,a3-.6,a3-.1));
D3.forEach(([e,d])=>e.setAttribute('class',u>a3+d/180?'gain':'ink'));
rise($('cold3'),p(u,a3+.5,a3+1));

rise($('bdg'),p(u,TM.otaku_badge,TM.otaku_badge+.5)); rise($('pr4'),p(u,TM.otaku_badge+.6,TM.otaku_badge+1.1));
rise($('shf'),p(u,TM.shelf-.3,TM.shelf+.2)); B4.forEach((g,i)=>rise(g,p(u,TM.shelf+i*.08,TM.shelf+i*.08+.3)));
const f4=TM.shelf+6.5; setC(P4,u>=f4?'gain':'ink'); rise($('fan4'),p(u,f4,f4+.5)); rise($('ff4'),p(u,f4+.3,f4+.8));

rise($('bp5'),p(u,TM.blueprint,TM.blueprint+.5)); rise($('few5'),p(u,TM.blueprint+2,TM.blueprint+2.5));
rise($('mg5'),p(u,TM.magnifier,TM.magnifier+.5));
[0,1,2].forEach(i=>{const a=TM.magnifier+1.2+i*1; rise($('st'+i),p(u,a,a+.4))});
$('grin5').setAttribute('opacity',p(u,TM.magnifier+2.2,TM.magnifier+2.6));
rise($('ef5'),p(u,TM.edge_feature,TM.edge_feature+.5));
const es=1+.1*Math.abs(Math.sin(t*3)); $('ef5i').setAttribute('transform','translate(600 380) scale('+es.toFixed(3)+') translate(-600 -380)');
rise($('et5'),p(u,TM.edge_feature+.4,TM.edge_feature+.9));

rise($('arr6'),p(u,TM.arrow_flow,TM.arrow_flow+.6)); AR6.forEach(a=>a.setAttribute('stroke-dashoffset',(-t*40).toFixed(1)));
rise($('cr6'),p(u,TM.arrow_flow+1,TM.arrow_flow+1.5));
CR6.forEach(([f,c])=>setC(f,u>TM.crowd+.4+c*.35?'gain':'ink'));
rise($('frd6'),p(u,TM.crowd,TM.crowd+.5)); rise($('ig6'),p(u,TM.crowd+4.6,TM.crowd+5.1));
rise($('cow6'),p(u,TM.crowd+8.8,TM.crowd+9.3)); rise($('nn6'),p(u,TM.crowd+9.2,TM.crowd+9.7));

rise($('map7'),p(u,TM.map_pin,TM.map_pin+.5));
P7.forEach((g,i)=>{const a=TM.map_pin+.6+i*1.1; rise(g,p(u,a,a+.4))});
rise($('nl7'),p(u,TM.name_list,TM.name_list+.5));
R7.forEach(([e,w],i)=>e.setAttribute('width',(w*p(u,TM.name_list+.6+i*.5,TM.name_list+1+i*.5)).toFixed(1)));
rise($('gift7'),p(u,TM.gift_box,TM.gift_box+.5));
$('lid7').setAttribute('transform','translate(0 '+(-14*Math.abs(Math.sin(t*3))).toFixed(1)+')');
$('spk7').setAttribute('opacity',(.3+.7*Math.abs(Math.sin(t*3))).toFixed(2));
rise($('q7'),p(u,TM.gift_box+.8,TM.gift_box+1.3));

const s8=SC[8][0]/K;
rise($('qa'),p(u,s8+.3,s8+.8)); rise($('qb'),p(u,s8+.7,s8+1.2)); rise($('qc'),p(u,s8+1.1,s8+1.6));
rise($('ten8'),p(u,s8+1.6,s8+2.1)); rise($('wr8'),p(u,s8+6.2,s8+6.7));
TEN.forEach((e,i)=>e.setAttribute('class',u>s8+6.6+i*.3?'gain':'ink'));