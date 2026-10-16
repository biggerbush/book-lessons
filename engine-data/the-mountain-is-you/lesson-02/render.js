rise($('door'),p(u,TM.locked_door,TM.locked_door+.5)); rise($('lock'),p(u,TM.locked_door+1,TM.locked_door+1.5));
$('lockr').setAttribute('transform','rotate('+(6*Math.sin(t*2)).toFixed(2)+' 1320 394)');
rise($('t0lab'),p(u,TM.locked_door+5.4,TM.locked_door+6));

const S1=TM.stuck_person,R=TM.tangled_rope;
rise($('goal'),p(u,S1,S1+.5)); rise($('walker'),p(u,S1+.3,S1+.8)); tr(wk,820-360*p(u,S1+1.5,S1+6),0);
draw($('rope'),p(u,R,R+1.5));
TG.forEach((g,i)=>rise(g,p(u,R+.8+i,R+1.3+i)));
const dif=p(u,R+5,R+5.6); $('rope').setAttribute('opacity',(1-.65*dif).toFixed(2));
rise($('diff'),dif);

let wv='M120 440';for(let x=120;x<=1480;x+=40)wv+='L'+x+' '+(440+6*Math.sin(x/60+t*2)).toFixed(1);$('sea').setAttribute('d',wv);
rise($('berg'),p(u,TM.iceberg,TM.iceberg+.5)); rise($('hand'),p(u,TM.hidden_hand,TM.hidden_hand+.6));
$('needo').setAttribute('r',(36+4*Math.sin(t*3)).toFixed(1)); rise($('work'),p(u,TM.hidden_hand+7,TM.hidden_hand+7.6));

rise($('n0'),p(u,TM.shield,TM.shield+.5)); rise($('n1'),p(u,TM.old_armchair,TM.old_armchair+.5)); rise($('n2'),p(u,TM.watching_eyes,TM.watching_eyes+.5));
$('chair').setAttribute('transform','rotate('+(3*Math.sin(t*1.5)).toFixed(2)+' 800 540)');
PU.forEach(([c,x,y])=>{c.setAttribute('cx',(x+(1260-x)*.12+4*Math.sin(t*1.7)).toFixed(1));c.setAttribute('cy',y+8)});

const A=TM.two_hearts,W2=TM.closed_window;
rise($('lover'),p(u,A,A+.5)); rise($('other'),p(u,A+.3,A+.8)); tr(lv,690-310*p(u,A+2.5,A+5.5),0);
const hs=(1+1.2*p(u,A+1,A+3)-.6*p(u,W2,W2+1))*(1+.04*Math.sin(t*4));
tr($('heart'),850,380,hs); $('heart').setAttribute('opacity',p(u,A+.5,A+1).toFixed(2));
rise($('win'),p(u,W2,W2+.4)); const sw=86*p(u,W2+.3,W2+1.2); SH[0].setAttribute('width',sw.toFixed(1)); SH[1].setAttribute('width',sw.toFixed(1)); SH[1].setAttribute('x',(696-sw).toFixed(1));
rise($('rand'),p(u,W2,W2+.5)); rise($('prot'),p(u,W2+2.1,W2+2.7)); rise($('safe'),p(u,W2+7.5,W2+8));

const F=TM.tug_of_war,C=TM.ceiling_line;
rise($('tug'),p(u,F,F+.5)); tr($('tugm'),10*Math.sin(t*3),0);
rise($('outl'),p(u,F+3.8,F+4.4));
DR.forEach((c,i)=>{const k=(t*.8+i/3)%1;c.setAttribute('cy',(740+60*k).toFixed(1));c.setAttribute('opacity',(u>F+4.6?1-k:0).toFixed(2))});
rise($('ceil'),p(u,C,C+.5)); draw($('life'),p(u,C+1,C+4)); rise($('pb'),p(u,C+4,C+4.5));

const M=TM.magnifier,N=TM.notebook;
rise($('oldq'),p(u,M,M+.4)); $('qs').setAttribute('x2',(112+340*p(u,M+.8,M+1.4)).toFixed(1)); $('qs').setAttribute('opacity',u>M+.8?1:0);
rise($('newq'),p(u,M+1.4,M+2)); rise($('mag'),p(u,M+2,M+2.5));
const lk=p(u,M+2.5,M+4.5); tr($('lensg'),400+(1-lk)*150*Math.sin(t*1.3),620+(1-lk)*50*Math.cos(t*1.1));
rise($('hid'),p(u,M+4.5,M+5));
rise($('nb'),p(u,N-.3,N+.2)); draw($('scr0'),p(u,N+.5,N+2.5)); rise($('l2'),p(u,N+3,N+3.5)); draw($('scr1'),p(u,N+3.5,N+5.5)); rise($('pill'),p(u,N+7,N+7.6));

const P=TM.new_path,Q=TM.small_step;
$('oldp').setAttribute('opacity',(1-.7*p(u,P+1,P+2)).toFixed(2)); draw($('newp'),p(u,P+.5,P+2));
ST.forEach((s,i)=>rise(s,p(u,Q+i*.4,Q+i*.4+.4))); rise($('stl'),p(u,Q+.5,Q+1));
const sp=4*p(u,Q+2,Q+6),si=Math.min(4,Math.floor(sp)),fr=sp-si;
rise($('climber'),p(u,Q+1.5,Q+2)); tr(cg,790+140*sp,640-50*(si+fr)-20*Math.sin(Math.PI*fr));
rise($('met'),p(u,Q+6.2,Q+6.8));

rise($('mir'),p(u,TM.mirror,TM.mirror+.5)); tr($('refl'),0,3*Math.sin(t*2));
rise($('qa'),p(u,TM.mirror+.3,TM.mirror+.8)); rise($('qb'),p(u,TM.mirror+3.4,TM.mirror+3.9)); rise($('qc'),p(u,TM.mirror+3.9,TM.mirror+4.4)); rise($('ql'),p(u,TM.mirror+5,TM.mirror+5.6));