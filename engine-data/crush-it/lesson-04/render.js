const R=(id,a)=>rise($(id),p(u,a,a+.5));
const k0=p(u,TM.mask+2.5,TM.mask+4),tm=$('tmask');
tm.setAttribute('transform','translate('+(160*k0).toFixed(1)+' '+(300*k0).toFixed(1)+') rotate('+(50*k0).toFixed(1)+' 1300 353)');tm.setAttribute('opacity',(1-k0).toFixed(2));
$('tring').setAttribute('opacity',p(u,TM.mask+6,TM.mask+6.8));$('tring').setAttribute('stroke-dashoffset',(-t*20).toFixed(1));

R('crit',TM.critic);R('glass',TM.wine_glass);R('view',TM.viewer);
$('viewf').setAttribute('transform','translate('+(50*p(u,TM.viewer+.6,TM.viewer+1.6)).toFixed(1)+' 0)');

R('cam',TM.camera);$('rec').setAttribute('opacity',Math.sin(t*5)>0?1:.2);
R('gary',TM.gary);$('garyb').setAttribute('transform','translate(0 '+(u>=TM.gary?-10*Math.abs(Math.sin(t*6)):0).toFixed(1)+')');
[TM.gary+1,TM.gary+5.4,TM.gary+9.9].forEach((a,i)=>R('ch'+i,a));

R('bk',TM.bucket);R('fb',TM.football);
$('fbi').setAttribute('transform','translate(740 '+(330-14*Math.abs(Math.sin(t*3))).toFixed(1)+') rotate(-25)');
[0,1,2].forEach(i=>R('v'+i,TM.football+.3+i*.6));R('vg',TM.football+3);R('msg3',TM.football+3);

R('scr',SC[4][0]/K+.3);R('aud',TM.audience);
HT.forEach((h,i)=>{const c=(t*.45+i*.27)%1;h.setAttribute('transform','translate('+HX[i]+' '+(505-200*c).toFixed(1)+') scale(1.2)');h.setAttribute('opacity',u>=TM.heart?Math.sin(Math.PI*c).toFixed(2):0)});
EP.forEach((g,i)=>rise(g,p(u,TM.heart+.4+i*.6,TM.heart+.9+i*.6)));R('eplab',TM.heart+.4);
R('lp',TM.heart+4.6);R('trust',TM.heart+8.8);

R('msk',TM.studio);R('bat1',TM.studio+.5);
$('bf1').setAttribute('width',(396*(1-.8*p(u,TM.studio+1,TM.tired_face+2.5))).toFixed(1));
['ck0','ck1'].forEach((c,i)=>$(c).setAttribute('stroke-dashoffset',(1-p(u,TM.cracks+i*.6,TM.cracks+1.2+i*.6)).toFixed(3)));
const sg=p(u,TM.tired_face,TM.tired_face+1);$('smile').setAttribute('d','M430 540Q500 '+(590-90*sg).toFixed(1)+' 570 540');
DR.forEach((d,i)=>{const c=(t*.7+i/3)%1;d.setAttribute('cx',[345,655,360][i]);d.setAttribute('cy',(400+160*c).toFixed(1));d.setAttribute('opacity',u>=TM.tired_face?(1-c).toFixed(2):0)});
R('bat2',TM.tired_face+3.8);R('cost',TM.tired_face+4.2);

R('you6',SC[6][0]/K+.3);R('cl',TM.split_crowd);R('cr',TM.split_crowd);
const kl=p(u,TM.split_crowd+1,TM.split_crowd+2);$('crowdL').setAttribute('transform','translate('+(-40*kl).toFixed(1)+' 0)');$('crowdL').setAttribute('opacity',(1-.6*kl).toFixed(2));
R('ok6',TM.split_crowd+3.8);
CR.forEach((f,i)=>f.forEach(e=>e.setAttribute('class',u>=TM.fans+i*.3?'gain':'ink')));
$('lines').setAttribute('opacity',p(u,TM.fans,TM.fans+.8));R('labR',TM.fans);R('loved',TM.fans+5.7);

R('pn0',TM.notebook);$('nbl').setAttribute('stroke-dashoffset',(1-p(u,TM.notebook+.4,TM.notebook+2)).toFixed(3));
R('pn1',TM.phone);[0,1,2].forEach(i=>$('dt'+i).setAttribute('cy',(332-6*Math.max(0,Math.sin(t*6-i))).toFixed(1)));
R('pn2',TM.spark);$('starg').setAttribute('transform','rotate('+(t*20%360).toFixed(1)+' 1273 440)');
R('cp',TM.spark+3.8);

R('mir',TM.mirror);R('lk8',TM.mirror);
RF.forEach(e=>e.setAttribute('class',u>=TM.mirror+3?'gain':'ink'));
$('refl').setAttribute('transform','translate('+(6*Math.sin(t*1.5)).toFixed(1)+' 0)');
['qa','qb','qc'].forEach((q,i)=>R(q,TM.mirror+3+i*.4));