const sh=TM.seed_hand;rise($('bub0'),p(u,sh,sh+.5));
$('seed0').setAttribute('cy',(390+255*p(u,sh+.8,sh+2)).toFixed(1));$('seed0').setAttribute('opacity',p(u,sh+.6,sh+.9));
$('spr0').setAttribute('transform','translate(1330 650) scale('+p(u,sh+2,sh+3.5).toFixed(3)+') rotate('+(4*Math.sin(t*1.5)).toFixed(1)+')');
rise($('ag0'),p(u,sh+5.4,sh+5.9));

const mw=TM.magic_wand;rise($('wnd'),p(u,mw,mw+.5));$('star').setAttribute('transform','rotate('+(t*30%360).toFixed(1)+' 405 382)');rise($('w2'),p(u,mw+4.6,mw+5.1));
const om=p(u,TM.open_mouth,TM.open_mouth+.5);rise($('spk'),om);ARC.forEach((a,i)=>a.setAttribute('opacity',(om*(.55+.45*Math.sin(t*4-i*1.2))).toFixed(2)));
const fs=TM.fertile_soil;rise($('mind'),p(u,fs,fs+.5));MS.forEach((s,i)=>s.setAttribute('opacity',p(u,fs+1+i*.3,fs+1.3+i*.3)));

const dc=TM.dictionary;rise($('dic'),p(u,dc,dc+.5));rise($('nrel'),p(u,dc+3,dc+3.5));$('nrs').setAttribute('x2',(112+533*p(u,dc+4,dc+4.6)).toFixed(1));
const ab=TM.arrow_back;rise($('meg'),p(u,ab-.6,ab));rise($('sinl'),p(u,ab,ab+.5));const bk=p(u,ab+.3,ab+1.8);dr($('boom'),bk);$('ah').setAttribute('opacity',bk>=.98?1:0);rise($('nev'),p(u,ab+3.8,ab+4.4));

const mt=TM.mother_tired,gs=TM.girl_singing,an=TM.angry_bubble,st=u>=an+4.6;
rise($('mom'),p(u,mt,mt+.5));$('ache').setAttribute('opacity',p(u,mt+.6,mt+1));$('ache').setAttribute('transform','translate(0 '+(3*Math.sin(t*9)).toFixed(1)+')');
rise($('kid'),p(u,gs,gs+.5));col(KID,st?'muted':'gain');
NT.forEach((n,i)=>{const c=(t*.6+i/3)%1;n.setAttribute('transform','translate('+(1150+20*Math.sin(c*6+i)).toFixed(1)+' '+(500-200*c).toFixed(1)+')');n.setAttribute('opacity',(u>=gs+.5&&!st?Math.sin(c*Math.PI):0).toFixed(2))});
rise($('ugly'),p(u,an,an+.4));rise($('blv'),p(u,an+4.6,an+5.1));

const tr=TM.tree_roots;$('fb').setAttribute('opacity',(1-.8*p(u,tr-3,tr-2)).toFixed(2));rise($('forg'),p(u,tr-2.6,tr-2.1));
RT.forEach((r,i)=>dr(r,p(u,tr+i*.2,tr+1.5+i*.2)));rise($('agr'),p(u,tr+1,tr+1.5));
const gw=TM.grown_woman;rise($('wom'),p(u,gw,gw+.5));rise($('once'),p(u,gw+5.4,gw+6));

rise($('pc'),p(u,TM.computer,TM.computer+.5));$('vir').setAttribute('transform','translate(260 345) rotate('+(t*40%360).toFixed(1)+')');
const vs=TM.virus_spread,sp=TM.stop_hand;rise($('ppl'),p(u,vs-.4,vs));
PP.forEach((g,i)=>col(g,i<4&&u>=vs+i*.8+.4?'loss':i==4?(u>=sp?'gain':'ink'):i>4?'muted':'ink'));
LN.forEach((l,i)=>dr(l,p(u,vs+i*.8-.4,vs+i*.8+.4)));
rise($('stp'),p(u,sp,sp+.5));rise($('harm'),p(u,sp-4.2,sp-3.7));rise($('gst'),p(u,sp+.6,sp+1.1));

rise($('mir'),p(u,TM.mirror,TM.mirror+.5));const iv=TM.inner_voice;rise($('ib0'),p(u,iv,iv+.4));rise($('ib1'),p(u,iv+1.4,iv+1.8));
const wp=TM.weed_patch;WD.forEach((w,i)=>{const k=p(u,wp+i*.15,wp+1.4+i*.15)*(.8+.1*((i*7)%3));w.setAttribute('transform','translate('+(660+i*95)+' 700) scale(1 '+k.toFixed(3)+')')});rise($('wl'),p(u,wp+1.5,wp+2));

const wc=TM.watering_can;rise($('can'),p(u,wc,wc+.5));const tl=p(u,wc+.6,wc+1.4);$('cant').setAttribute('transform','rotate('+(18*tl).toFixed(1)+' 380 415)');
DP.forEach((d,i)=>{const c=(t*1.2+i/5)%1;d.setAttribute('cx',(650+6*Math.sin(i*2)).toFixed(1));d.setAttribute('cy',(420+260*c).toFixed(1));d.setAttribute('opacity',tl>=1?1:0)});
rise($('sub7'),p(u,wc+3.7,wc+4.2));
const fb=TM.flower_bloom;$('fl').setAttribute('transform','translate(780 680) scale('+p(u,fb,fb+1.5).toFixed(3)+')');
rise($('cf'),p(u,fb+1,fb+1.5));rise($('tr'),p(u,fb+1.5,fb+2));rise($('io'),p(u,fb+2.4,fb+2.9));

const nb=TM.notebook;rise($('ch0'),p(u,nb,nb+.5));rise($('nb'),p(u,nb+.3,nb+.8));TL.forEach((m,i)=>m.setAttribute('opacity',u>=nb+1+i*.4?1:0));
const q=nb+5;rise($('qp'),p(u,q,q+.5));rise($('qa'),p(u,q+.4,q+.9));rise($('qb'),p(u,q+.8,q+1.3));
$('spr8').setAttribute('transform','translate(1310 742) scale('+(.7*p(u,q+1,q+2)).toFixed(3)+')');