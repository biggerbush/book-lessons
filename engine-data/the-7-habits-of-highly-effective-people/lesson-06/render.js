const A=TM.title_card,rp=p(u,A+3,A+3.5);
rise($('tb1'),p(u,A,A+.5)); rise($('tb2'),rp);
arcs.forEach((a,k)=>a.setAttribute('opacity',((.35+.65*Math.max(0,Math.sin(t*3-k*.9)))*(1-.8*rp)).toFixed(2)));

const E=TM.eye_doctor,G=TM.glasses,B=TM.blurry_view,gp=p(u,G,G+1.6);
rise($('g1p'),p(u,E,E+.5)); rise($('chart'),p(u,E+.5,E+1)); rise($('cmp'),p(u,E+1,E+1.5)*(1-.7*gp));
$('gls').setAttribute('transform','translate('+(380+520*gp).toFixed(1)+' '+(410-60*Math.sin(Math.PI*gp)).toFixed(1)+')');
const tw=mid(G,B,.5); rise($('try'),p(u,tw,tw+.5));
const bl=p(u,B,B+1);
ghost.forEach((g,i)=>{
  g.setAttribute('fill-opacity',(1-.55*bl).toFixed(2));
  g.style.fill=bl>.5?'var(--loss)':'';
  g.setAttribute('letter-spacing',(bl*(4+i)).toFixed(1));
  g.setAttribute('transform','translate('+(bl*4*Math.sin(t*2.3+i)).toFixed(1)+' '+(bl*3*Math.cos(t*1.7+i)).toFixed(1)+')');
});
rise($('lw'),bl); rise($('fit'),p(u,B+1.5,B+2));

const P2=TM.two_people,O=TM.own_story,wv=p(u,P2+.6,P2+1.1),os=u>=O;
rise($('g2p'),p(u,P2,P2+.5)); rise($('sp2'),wv);
W2.forEach((w,i)=>{const x=400+((t*110+i*86)%600);w.setAttribute('x',x.toFixed(1));w.setAttribute('fill',os&&x>740?'var(--loss)':'var(--gain)');w.setAttribute('opacity',(wv*Math.max(0,Math.min(1,(x-400)/40,(1000-x)/40))).toFixed(2))});
rise($('thk'),p(u,TM.speech_bubble,TM.speech_bubble+.5));
TY.forEach((l,i)=>l.setAttribute('x2',(990+TW[i]*(u>=TM.speech_bubble?((t*.5+i*.33)%1):0)).toFixed(1)));
rise($('fun'),p(u,O,O+.5)); rise($('flt'),p(u,O+1,O+1.6));
const rx=p(u,O+2.5,O+4); $('rx').setAttribute('transform','translate('+(-240*rx).toFixed(1)+' 0)'); $('rx').setAttribute('opacity',p(u,O+2.2,O+2.6));

const LI=TM.level_ignore,LE=TM.level_empathy,LT=[LI,mid(LI,LE,.24),mid(LI,LE,.54),mid(LI,LE,.78),LE];
rise($('lad0'),p(u,TM.ladder,TM.ladder+.5));
let cy3=RG[0]; rungs.forEach((g,i)=>{rise(g,p(u,LT[i],LT[i]+.5)); if(i)cy3+=(RG[i]-RG[i-1])*p(u,LT[i],LT[i]+.6)});
$('clb').setAttribute('cy',(cy3-34).toFixed(1)); $('clb').setAttribute('opacity',p(u,LI,LI+.5));
rise($('frm'),p(u,LE+1,LE+1.6));

const F=TM.four_icons,V=TM.advice_arrow,CT=[mid(F,V,.5),mid(F,V,.75),V,V+2.7];
cards.forEach((c,i)=>{c[0].setAttribute('opacity',p(u,F,F+.6)); rise(c[1],p(u,CT[i],CT[i]+.5)); c[0].setAttribute('stroke',u>=V+5.4?'var(--loss)':u>=CT[i]?'var(--ink)':'var(--line)'); c[0].setAttribute('stroke-dasharray',u>=CT[i]?'none':'10 10')});
arr.setAttribute('transform','translate('+(u>=V?14*Math.sin(t*4):0).toFixed(1)+' 0)');
rise($('mys'),p(u,F+.6,F+1.1)); rise($('none'),p(u,V+5.4,V+6));

const S=TM.teen_son,Wd=TM.worried_dad,C=TM.calm_dad,wp=p(u,Wd,Wd+.5),cp=p(u,C,C+.5);
rise($('g5p'),p(u,S-.3,S+.2)); rise($('sb'),p(u,S+.5,S+1));
dad.forEach(e=>e.setAttribute('class',u>=C?'gain':u>=Wd?'loss':'ink'));
rise($('wb'),wp*(1-cp)); rise($('cb'),cp);
ARW.forEach((a,k)=>{a.setAttribute('transform','translate('+(560+(t*220+k*130)%360).toFixed(1)+' 0)');a.setAttribute('opacity',(wp*(1-cp)).toFixed(2))});
const sh=p(u,Wd+2.5,Wd+3)*(1-cp); $('shd').setAttribute('opacity',sh); rise($('ph1'),sh);
WV.forEach((w,k)=>w.setAttribute('opacity',(p(u,C+1,C+1.5)*(.3+.7*Math.max(0,Math.sin(t*3-k)))).toFixed(2)));
rise($('ph2'),p(u,C+5.4,C+6));

const D=TM.doctor_desk,Q=TM.quote_card,R=TM.air_tank;
rise($('dx'),p(u,D,D+.5)); rise($('px'),p(u,D+1.5,D+2)); rise($('qt'),p(u,Q,Q+.6)); rise($('tank'),p(u,R,R+.5));
const lvh=400*p(u,R+1,R+5)+(u>=R+5?4*Math.sin(t*2):0); $('lvl').setAttribute('y',(680-lvh).toFixed(1)); $('lvl').setAttribute('height',Math.max(0,lvh).toFixed(1));
rise($('ue'),p(u,R+2,R+2.6));

const dy=200*Math.sin(.3*(1-p(u,TM.scales+1,TM.scales+2.5)));
rise($('scl'),p(u,TM.scales,TM.scales+.5));
$('beam').setAttribute('y1',(300+dy).toFixed(1)); $('beam').setAttribute('y2',(300-dy).toFixed(1));
pans.forEach((g,i)=>g.setAttribute('transform','translate('+(i?610:210)+' '+(300+(i?-dy:dy)).toFixed(1)+')'));
const PL=TM.three_pillars; rise($('roof'),p(u,PL,PL+.5)); pil.forEach((g,i)=>rise(g,p(u,PL+i*1.8,PL+i*1.8+.5))); rise($('share'),p(u,PL+6.6,PL+7.2));

const M=TM.mirror;
rise($('qa'),p(u,M,M+.5)); rise($('qb'),p(u,M+.4,M+.9)); rise($('qm'),p(u,M+.8,M+1.3));
rise($('m0'),p(u,M+1.4,M+1.9)); rise($('m1'),p(u,M+2.4,M+2.9)); rise($('m2'),p(u,M+5.4,M+5.9));