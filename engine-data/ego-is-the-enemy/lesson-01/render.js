const sf=p(u,TM.shadow_figure,TM.shadow_figure+1.5);
$('shadow').setAttribute('opacity',sf);
$('shadow').setAttribute('transform','translate('+(14*Math.sin(t*1.2)).toFixed(1)+' '+(30*(1-sf)).toFixed(1)+')');

rise($('def'),p(u,TM.mirror,TM.mirror+.5)); rise($('mir'),p(u,TM.mirror+.4,TM.mirror+.9));
const pf=p(u,TM.puffed_chest,TM.puffed_chest+1.2), sc=1+.35*pf+.02*pf*Math.sin(t*3);
$('refl').setAttribute('transform','translate(640 520) scale('+sc.toFixed(3)+') translate(-640 -520)');
BB.forEach((b,i)=>rise(b,p(u,TM.puffed_chest+i*1.4,TM.puffed_chest+i*1.4+.5)));
rise($('blind'),p(u,TM.blindfold,TM.blindfold+.5)); rise($('blcap'),p(u,TM.blindfold+.4,TM.blindfold+1));

rise($('crowd'),p(u,TM.crowd,TM.crowd+.5)); rise($('loud'),p(u,TM.crowd+.8,TM.crowd+1.2));
SPK.forEach((c,i)=>{const a=TM.small_spark+i*.2,k=p(u,a,a+.4);c.setAttribute('opacity',k);c.setAttribute('r',(9+3*k*Math.sin(t*4+i)).toFixed(1))});
const mm=(TM.small_spark+TM.stoic_bust)/2; rise($('mom'),p(u,mm,mm+.5));
rise($('stoic'),p(u,TM.stoic_bust,TM.stoic_bust+.6));

const k1=p(u,TM.college_door,TM.college_door+1.2),k2=p(u,TM.office_tower,TM.office_tower+1.8);
$('ryan').setAttribute('transform','translate('+(220+350*k1+510*k2).toFixed(1)+' '+(651-440*k2).toFixed(1)+')');
$('ryan').setAttribute('opacity',p(u,TM.young_ryan,TM.young_ryan+.5));
rise($('door'),p(u,TM.college_door,TM.college_door+.5)); rise($('tower'),p(u,TM.office_tower,TM.office_tower+.5));
$('climb').setAttribute('opacity',p(u,TM.college_door,TM.college_door+.8));
const pr=TM.office_tower+(TM.falling_star-TM.office_tower)*.6;
PR.forEach((s,i)=>s.setAttribute('opacity',p(u,pr+i*.25,pr+i*.25+.4)*(.75+.25*Math.sin(t*3+i))));
rise($('prcap'),p(u,pr,pr+.5));

const fs=p(u,TM.falling_star,TM.falling_star+1.6),fx=240+180*fs,fy=260+340*fs;
$('fsg').setAttribute('transform','translate('+fx.toFixed(1)+' '+fy.toFixed(1)+') rotate('+(200*fs).toFixed(1)+')');
$('fsg').setAttribute('opacity',p(u,TM.falling_star,TM.falling_star+.3));
$('trail').setAttribute('x2',fx.toFixed(1)); $('trail').setAttribute('y2',fy.toFixed(1));
rise($('crown'),p(u,TM.broken_crown,TM.broken_crown+.4));
const bk=p(u,TM.broken_crown+.5,TM.broken_crown+1.5);
$('crL').setAttribute('transform','translate('+(-30*bk)+' '+(10*bk)+') rotate('+(-14*bk)+' 720 540)');
$('crR').setAttribute('transform','translate('+(30*bk)+' '+(10*bk)+') rotate('+(14*bk)+' 880 540)');
rise($('lost'),p(u,TM.broken_crown+1,TM.broken_crown+1.5));
rise($('tired'),p(u,TM.tired_ryan,TM.tired_ryan+.5));
$('scrib').setAttribute('transform','translate('+(6*Math.sin(t*5)).toFixed(1)+' 0)');
const eg=TM.tired_ryan+(TM.ladder-TM.tired_ryan)*.5; rise($('egocap'),p(u,eg,eg+.6));

rise($('stages'),p(u,TM.ladder,TM.ladder+.5)); rise($('lad'),p(u,TM.ladder+.3,TM.ladder+.8));
const as=(TM.ladder+TM.map_pin)/2;
rise($('dream'),p(u,as,as+.6)); rise($('asc'),p(u,as+.5,as+1)); rise($('skip'),p(u,as+1,as+1.5));
rise($('pin'),p(u,TM.map_pin,TM.map_pin+.5)); $('pinb').setAttribute('transform','translate(0 '+(6*Math.sin(t*2.5)).toFixed(1)+')');
rise($('here'),p(u,TM.map_pin+.6,TM.map_pin+1.1));

rise($('troph'),p(u,TM.trophy,TM.trophy+.5)); rise($('rules'),p(u,TM.trophy+1,TM.trophy+1.5));
$('rstrike').setAttribute('stroke-dashoffset',(380*(1-p(u,TM.trophy+2,TM.trophy+2.6))).toFixed(1));
rise($('tgt'),p(u,TM.trophy+3,TM.trophy+3.5));
const bl=p(u,TM.blur_target,TM.blur_target+1.5);
[1,2].forEach(k=>{const s=k===1?1:-1;TG[k].setAttribute('opacity',(.45*bl).toFixed(2));TG[k].setAttribute('transform','translate('+(s*bl*(18+6*Math.sin(t*2+k))).toFixed(1)+' '+(s*bl*(-10+5*Math.cos(t*1.7))).toFixed(1)+')')});
LO.forEach((g,i)=>rise(g,p(u,TM.blur_target+i*1.2,TM.blur_target+i*1.2+.5)));

rise($('cloud'),p(u,TM.rain_cloud,TM.rain_cloud+.5)); $('rain').setAttribute('opacity',p(u,TM.rain_cloud+.3,TM.rain_cloud+.8));
RN.forEach((r,i)=>{const o=(t*120+i*17)%50;r.setAttribute('d','M'+(290+i*32)+' '+(370+o).toFixed(1)+'v14')});
rise($('unfair'),p(u,TM.rain_cloud+1,TM.rain_cloud+1.5));
rise($('blame'),p(u,TM.pointing_hand,TM.pointing_hand+.5));
$('fp').setAttribute('transform','translate(0 '+(40*p(u,TM.pointing_hand+1.5,TM.pointing_hand+3)).toFixed(1)+')');
rise($('pity'),p(u,TM.pointing_hand+1.5,TM.pointing_hand+2));
rise($('cyc'),p(u,TM.circle_arrows,TM.circle_arrows+.6));
const ea=-Math.PI/2+t*.9; EGD.setAttribute('transform','translate('+(1150+190*Math.cos(ea)).toFixed(1)+' '+(500+190*Math.sin(ea)).toFixed(1)+')');
rise($('never'),p(u,TM.circle_arrows+1.5,TM.circle_arrows+2.1));

const q0=SC[8][0]/K+.3;
rise($('qa'),p(u,q0,q0+.5)); rise($('qb'),p(u,q0+.4,q0+.9)); rise($('qc'),p(u,q0+.8,q0+1.3));
rise($('nb'),p(u,TM.notebook,TM.notebook+.5)); rise($('nlab'),p(u,TM.notebook+.3,TM.notebook+.8));
let px=1150,py=666; NL.forEach((l,i)=>{const a=TM.notebook+.6+i*.8,k=p(u,a,a+.8);l.setAttribute('x2',(1150+240*k).toFixed(1));if(k>0){px=1150+240*k;py=666+i*40}});
$('pen').setAttribute('transform','translate('+px.toFixed(1)+' '+(py-2*Math.abs(Math.sin(t*9))).toFixed(1)+')');