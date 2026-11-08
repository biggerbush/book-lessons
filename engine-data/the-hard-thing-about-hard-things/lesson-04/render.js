const R=(e,c,d=.5)=>rise(typeof e=='string'?$(e):e,p(u,c,c+d));

DK.forEach((g,i)=>{const a=TM.empty_desk+1+i*.25;g.setAttribute('opacity',[1,3,5,7].includes(i)?(1-.85*p(u,a,a+.5)).toFixed(2):1)});
R('sub0',TM.empty_desk+6.4);

$('cline').style.strokeDashoffset=(1-p(u,TM.dotcom_crash,TM.dotcom_crash+3)).toFixed(3);
const bk=p(u,TM.dotcom_crash+1.9,TM.dotcom_crash+2.4);$('bub').setAttribute('r',(26+34*bk).toFixed(1));$('bub').setAttribute('opacity',(p(u,TM.dotcom_crash+.6,TM.dotcom_crash+1.2)*(1-bk)).toFixed(2));
R('staff',TM.dotcom_crash+.4);
ST.forEach((g,i)=>{const j=LV.indexOf(i);if(j>=0){const a=TM.ben+.8+j*.25,k=p(u,a,a+.4);g.setAttribute('fill',k>0?'var(--loss)':'var(--ink)');g.setAttribute('opacity',(1-.7*k).toFixed(2))}else g.setAttribute('fill',u>=TM.survivors?'var(--gain)':'var(--ink)')});
R('benl',TM.ben);R('judge',TM.survivors+.4);

R('refl',TM.mirror);R('rush',TM.mirror+4.2);R('nox',TM.heart);
$('sun').setAttribute('opacity',(1-.6*p(u,TM.heart,TM.heart+.5)).toFixed(2));
R('hrt',TM.heart+.3);R('pres',TM.heart+1.2);
$('hb').setAttribute('transform','translate(820 560) scale('+(1+.07*Math.abs(Math.sin(t*3))).toFixed(3)+')');

CAL.forEach((c,i)=>c.setAttribute('fill',i==0&&u>=TM.calendar?'var(--gain)':(i>0&&i<14&&u>=TM.leak+i*.2?'var(--loss)':'var(--stage)')));
R('go',TM.calendar);R('wait',TM.leak);R('bld',TM.leak);
DR.forEach((d,i)=>{const c=(t*.8+i/3)%1;d.setAttribute('cy',(600+110*c).toFixed(1));d.setAttribute('opacity',(u>=TM.leak+.5?1-c:0).toFixed(2))});
R('cloud',TM.rumour_cloud);R('worried',TM.rumour_cloud+.4);R('guess',TM.rumour_cloud+1.5);
WR.forEach((g,i)=>g.setAttribute('transform','translate(0 '+(4*Math.sin(t*5+i*2)).toFixed(1)+')'));

const ak=p(u,TM.missed_target,TM.missed_target+.6);$('arw').setAttribute('transform','translate('+(120*(1-ak)).toFixed(1)+' '+(-60*(1-ak)).toFixed(1)+')');$('arw').setAttribute('opacity',ak.toFixed(2));
R('missd',TM.missed_target+.6);R('notp',TM.missed_target+3.8);
const sk=p(u,TM.missed_target+4.6,TM.missed_target+5.2);$('stk').setAttribute('x2',(632+370*sk).toFixed(1));$('stk').setAttribute('opacity',sk>0?1:0);
R('lead1',TM.missed_target+5.2);R('pod',TM.podium);R('aud',TM.podium+.6);R('clear',TM.podium+1.4);

R('pL',TM.manager);R('pR',TM.hr_folder);R('cruel',TM.hr_folder+5.4);
DT.forEach((d,i)=>d.setAttribute('opacity',(.4+.6*Math.abs(Math.sin(t*2-i*.6))).toFixed(2)));
TK.forEach((g,i)=>R(g,TM.training+i*1.6));

const dk=p(u,TM.open_door,TM.open_door+1);$('door').setAttribute('width',(212-180*dk).toFixed(1));
LDR.setAttribute('transform','translate('+(310+410*p(u,TM.open_door+.6,TM.open_door+2.2)).toFixed(1)+' 0)');
R('lvrg',TM.open_door+1.2);R('others',TM.open_door+1.6);
R('shake',TM.handshake);R('thx',TM.handshake+.8);R('mat',TM.handshake+6.6);

const ck=p(u,TM.cracked_bridge,TM.cracked_bridge+.8),gk=p(u,TM.cracked_bridge+1.2,TM.cracked_bridge+2.5);
SV.forEach(s=>{R(s[1],TM.watching_eyes);s[2].setAttribute('cx',(s[3]+12-24*ck+2*Math.sin(t*1.5)).toFixed(1));s[0].setAttribute('transform','translate('+(-60*gk).toFixed(1)+' 0)');s[0].setAttribute('opacity',(1-.5*gk).toFixed(2))});
R('brg',TM.trust_bridge,.8);
['bl','br'].forEach((id,i)=>{$(id).setAttribute('transform','rotate('+((i?-22:22)*ck).toFixed(1)+' '+(i?1140:460)+' 563)');$(id).setAttribute('fill',ck>0?'var(--loss)':'var(--gain)')});
$('trl').textContent=ck>0?'TRUST CRACKS':'TRUST';$('trl').style.fill=ck>0?'var(--loss)':'var(--gain)';
rise($('tA'),p(u,TM.trust_bridge+.6,TM.trust_bridge+1.1)*(1-p(u,TM.cracked_bridge,TM.cracked_bridge+.4)));
R('tB',TM.cracked_bridge+.5);R('exit',TM.cracked_bridge+.8);

const s8=SC[8][0]/K;R('think',s8+.3);R('env',s8+.8);
$('envb').setAttribute('transform','translate(0 '+(8*Math.sin(t*1.6)).toFixed(1)+')');
R('qa',s8+5);R('qb',s8+5.4);R('qc',s8+5.8);