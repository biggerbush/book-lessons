const q0=TM.question_mark;
$('ring').setAttribute('transform','rotate('+(t*10%360).toFixed(1)+' 1320 390)');
rise($('qm'),p(u,q0,q0+.5)*(1-p(u,q0+6.6,q0+7.1))); rise($('ck0'),p(u,q0+6.7,q0+7.3));

rise($('ex'),p(u,TM.expert,TM.expert+.5)); rise($('ch'),p(u,TM.empty_chair,TM.empty_chair+.5)); rise($('gl'),p(u,TM.glowing_idea,TM.glowing_idea+.5));
RY.forEach((r,i)=>r.setAttribute('opacity',(.5+.5*Math.sin(t*3+i)).toFixed(2))); rise($('g1t'),p(u,TM.glowing_idea+1,TM.glowing_idea+1.6));

rise($('jb'),p(u,TM.jury_box,TM.jury_box+.5));
const ts=TM.two_scales; rise($('cA'),p(u,ts,ts+.5)); rise($('cB'),p(u,ts+.4,ts+.9)); rise($('sa'),p(u,ts+.8,ts+1.3)); rise($('vd'),p(u,ts+1.6,ts+2.1));
rise($('tb'),p(u,TM.toothbrush,TM.toothbrush+.5));

const tl=TM.tilted_scale; rise($('sc'),p(u,tl,tl+.5));
const ang=12*p(u,tl+.8,tl+2.4)+1.2*Math.sin(t*2)*p(u,tl+2.4,tl+3),rd=ang*Math.PI/180,cx=220*Math.cos(rd),cy=220*Math.sin(rd);
$('beam').setAttribute('transform','rotate('+ang.toFixed(2)+' 460 320)');
$('panL').setAttribute('transform','translate('+(460-cx).toFixed(1)+' '+(320-cy).toFixed(1)+')'); $('panR').setAttribute('transform','translate('+(460+cx).toFixed(1)+' '+(320+cy).toFixed(1)+')');
rise($('lean'),p(u,tl+2,tl+2.6)); rise($('mg'),p(u,TM.magnifier,TM.magnifier+.5)); rise($('vg'),p(u,TM.magnifier+5,TM.magnifier+5.6));

const sp=TM.spreadsheet; CR.forEach((g,i)=>rise(g,p(u,sp+i*.12,sp+i*.12+.4)));
const fk=p(u,sp+1,sp+1.5); FL.forEach((f,i)=>{const c=(t*.5+i/4)%1;f.setAttribute('x',(630+c*330).toFixed(1));f.setAttribute('opacity',(Math.sin(c*Math.PI)*fk).toFixed(2))});
rise($('ht'),p(u,sp+1,sp+1.5)); $('hp').setAttribute('transform','translate(790 480) scale('+(1+.05*Math.pow(Math.abs(Math.sin(t*2)),6)).toFixed(3)+')');
rise($('ru'),p(u,TM.ruler,TM.ruler+.5)); rise($('tr'),p(u,TM.ruler+1.6,TM.ruler+2.2));

rise($('bk'),p(u,TM.metal_bucket,TM.metal_bucket+.5));
$('bb1').setAttribute('cy',(250+434*p(u,TM.single_bb,TM.single_bb+.8)).toFixed(1)); $('bb1').setAttribute('opacity',u>=TM.single_bb?1:0);
rise($('l1'),p(u,TM.single_bb+.6,TM.single_bb+1.1));
const av=TM.bb_avalanche; BB.forEach((b,i)=>{const a=av+i*5/N,k=p(u,a,a+.35);b[0].setAttribute('cx',(500+(b[1]-500)*k).toFixed(1));b[0].setAttribute('cy',(250+(b[2]-250)*k).toFixed(1));b[0].setAttribute('opacity',u>=a?1:0)});
$('wv').setAttribute('opacity',(u>=av&&u<av+5.5?.3+.7*Math.abs(Math.sin(t*9)):0).toFixed(2));
rise($('l2'),p(u,av+.4,av+.9)); rise($('hr'),p(u,av+6.1,av+6.7));

rise($('db'),p(u,TM.debate_stage,TM.debate_stage+.5)); rise($('nx'),p(u,TM.debate_stage+1.5,TM.debate_stage+2));
rise($('qq'),p(u,TM.mirror,TM.mirror+.6));
const nd=TM.nodding_crowd; CK.forEach((g,i)=>rise(g,p(u,nd+i*.3,nd+i*.3+.4)));
CW.forEach((g,i)=>g.setAttribute('transform','translate(0 '+(u>=nd?4*Math.sin(t*5+i):0).toFixed(1)+')'));
rise($('chk'),p(u,nd,nd+.5)); rise($('own'),p(u,nd+1.5,nd+2.1));

[TM.checklist,TM.small_object,TM.invitation].forEach((a,i)=>{rise(TK[i][0],p(u,a,a+.5));TK[i][1].setAttribute('opacity',p(u,a+.6,a+1));rise($('ic'+i),p(u,a+.3,a+.8))});
const sh=p(u,TM.small_object+.8,TM.small_object+1.8),sz=80-50*sh; $('big').setAttribute('x',(1290-sz/2).toFixed(1)); $('big').setAttribute('y',(480-sz/2).toFixed(1)); $('big').setAttribute('width',sz.toFixed(1)); $('big').setAttribute('height',sz.toFixed(1));

const oh=TM.open_hand; rise($('qa'),p(u,oh,oh+.5)); rise($('qb'),p(u,oh+.4,oh+.9)); rise($('qc'),p(u,oh+.8,oh+1.3));
rise($('hd'),p(u,oh+1.2,oh+1.8)); rise($('qd'),p(u,oh+6.2,oh+6.8)); rise($('rg2'),p(u,oh+6.4,oh+7));