rise($('fistg'),p(u,TM.fist,TM.fist+.6));
const fq=Math.max(0,Math.sin(t*1.8));
$('fist').setAttribute('transform','translate('+(2*Math.sin(t*23)*fq).toFixed(1)+' '+(10*fq).toFixed(1)+')');

rise($('park'),p(u,TM.ballpark,TM.ballpark+.6)); rise($('first'),p(u,TM.ballpark+6.2,TM.ballpark+6.8));
CR.forEach((g,i)=>rise(g,p(u,TM.crowd+i*.4,TM.crowd+i*.4+.5))); rise($('failt'),p(u,TM.crowd+1.4,TM.crowd+2));

rise($('rk'),p(u,TM.rickey,TM.rickey+.5)); rise($('jr'),p(u,TM.rickey+.4,TM.rickey+.9)); rise($('ask'),p(u,TM.rickey+4.6,TM.rickey+5.1));
const hs=p(u,TM.handshake,TM.handshake+1.2), xl=430+355*hs, xr=1170-355*hs;
$('armL').setAttribute('x2',xl.toFixed(1)); $('hL').setAttribute('cx',xl.toFixed(1)); $('armR').setAttribute('x2',xr.toFixed(1)); $('hR').setAttribute('cx',xr.toFixed(1));
$('glow').setAttribute('opacity',hs>=1?1:0); $('glow').setAttribute('r',(40+6*Math.sin(t*3)).toFixed(1));
rise($('shake'),p(u,TM.handshake,TM.handshake+.4)); rise($('quote'),p(u,TM.handshake+.6,TM.handshake+1.2)); rise($('kept'),p(u,TM.handshake+5.4,TM.handshake+6));

rise($('rb'),p(u,TM.insults-.6,TM.insults)); rise($('dug'),p(u,TM.insults,TM.insults+.5));
BB.forEach((g,i)=>{const a=TM.insults+.5+i*.5; rise(g,p(u,a,a+.4)*(.85+.15*Math.abs(Math.sin(t*4+i))))});
const bp=p(u,TM.baseball,TM.baseball+.8), bx=1400-530*bp, by=340+95*bp, bo=u>=TM.baseball?1:0;
$('ball').setAttribute('cx',bx.toFixed(1)); $('ball').setAttribute('cy',by.toFixed(1)); $('ball').setAttribute('opacity',bo);
$('trail').setAttribute('x2',bx.toFixed(1)); $('trail').setAttribute('y2',by.toFixed(1)); $('trail').setAttribute('opacity',bo);
rise($('balll'),p(u,TM.baseball,TM.baseball+.5));
rise($('clg'),p(u,TM.spikes,TM.spikes+.4)); $('clmv').setAttribute('transform','translate('+(150*(1-p(u,TM.spikes,TM.spikes+1))).toFixed(1)+' 0)');
rise($('inst'),p(u,TM.spikes+3.7,TM.spikes+4.3)); $('instR').setAttribute('r',(150+8*Math.sin(t*5)).toFixed(1));

const sa=-.15+.35*p(u,TM.open_door+.4,TM.open_door+2), ca=Math.cos(sa)*260, sn=Math.sin(sa)*260;
$('beam').setAttribute('transform','rotate('+(sa*180/Math.PI).toFixed(2)+' 500 320)');
$('panL').setAttribute('transform','translate('+(500-ca).toFixed(1)+' '+(320-sn).toFixed(1)+')');
$('panR').setAttribute('transform','translate('+(500+ca).toFixed(1)+' '+(320+sn).toFixed(1)+')');
rise($('scl'),p(u,TM.scale,TM.scale+.5)); rise($('exc'),p(u,TM.scale+.6,TM.scale+1.2));
rise($('door'),p(u,TM.open_door,TM.open_door+.5));
const dw=240-180*p(u,TM.open_door+.4,TM.open_door+2), dd=(1-dw/240)*20;
$('leaf').setAttribute('points','1060,280 '+(1060+dw).toFixed(1)+','+(280-dd).toFixed(1)+' '+(1060+dw).toFixed(1)+','+(680+dd).toFixed(1)+' 1060,680');
rise($('ans'),p(u,TM.open_door+5,TM.open_door+5.6));

// ego wants revenge: slight hits, then the fork
rise($('prvg'),p(u,TM.mirror-.4,TM.mirror+.1)); rise($('youg'),p(u,TM.mirror,TM.mirror+.5)); rise($('sl'),p(u,TM.mirror+.3,TM.mirror+.6));
const sx=290+258*p(u,TM.mirror+.3,TM.mirror+1);
$('slL').setAttribute('x2',(sx-4).toFixed(1)); $('slH').setAttribute('transform','translate('+sx.toFixed(1)+' 400)');
$('hit').setAttribute('opacity',(p(u,TM.mirror+1,TM.mirror+1.2)*(.6+.4*Math.abs(Math.sin(t*6)))).toFixed(2));
const eg=p(u,TM.mirror+1,TM.mirror+1.6)*(1-p(u,TM.puppet,TM.puppet+.5)), es=.6+.4*eg+.04*Math.sin(t*6);
$('egog').setAttribute('opacity',eg.toFixed(2)); $('egog').setAttribute('transform','translate(600 400) scale('+es.toFixed(3)+') translate(-600 -400)');
rise($('prove'),p(u,TM.mirror+5.7,TM.mirror+6.2)*(1-p(u,TM.puppet,TM.puppet+.5)));
rise($('pupg'),p(u,TM.puppet,TM.puppet+.5));
$('strs').setAttribute('opacity',p(u,TM.puppet+.3,TM.puppet+.8).toFixed(2));
rise($('resg'),p(u,TM.puppet+5,TM.puppet+5.5));
$('pzd').setAttribute('r',(44+3*Math.sin(t*3)).toFixed(1));
rise($('rest'),p(u,TM.puppet+5.4,TM.puppet+6));

rise($('fury'),p(u,TM.bat,TM.bat+.5)); CP.forEach((g,i)=>{const a=TM.bat+.5+i*.5; rise(g,p(u,a,a+.4))});
rise($('wallg'),p(u,TM.legacy,TM.legacy+.5));
BR.forEach(([e,r])=>{const a=TM.legacy+1+(7-r)*.12, k=p(u,a,a+.6); e.setAttribute('transform','translate(0 '+(k*60).toFixed(1)+')'); e.setAttribute('opacity',(1-k).toFixed(2))});
$('thru').setAttribute('transform','translate('+(6*Math.sin(t*2)).toFixed(1)+' 0)');
rise($('wlab'),p(u,TM.legacy+2,TM.legacy+2.5));
rise($('row1'),p(u,TM.legacy+6.2,TM.legacy+6.7)); $('barP').setAttribute('width',(200*p(u,TM.legacy+6.4,TM.legacy+7.2)).toFixed(1));
rise($('row2'),p(u,TM.legacy+8.4,TM.legacy+8.9)); $('barH').setAttribute('width',(860*p(u,TM.legacy+8.6,TM.legacy+10)).toFixed(1));

rise($('inbx'),p(u,TM.inbox,TM.inbox+.5)); IB.forEach((g,i)=>{const a=TM.inbox+.8+i*1.2; rise(g,p(u,a,a+.4))});
rise($('pz'),p(u,TM.balance,TM.balance+.5)); rise($('arw'),p(u,TM.balance+.4,TM.balance+.9));
rise($('goal'),p(u,TM.balance+.8,TM.balance+1.3)); rise($('pride'),p(u,TM.balance+1.2,TM.balance+1.7));
$('prx').setAttribute('opacity',p(u,TM.balance+3.5,TM.balance+4));
rise($('work'),p(u,TM.balance+5.4,TM.balance+6));

rise($('chal'),p(u,TM.calendar,TM.calendar+.5)); rise($('cal'),p(u,TM.calendar+.4,TM.calendar+.9));
$('dayArc').setAttribute('stroke-dashoffset',(377*(1-p(u,TM.calendar+.8,TM.calendar+4))).toFixed(1));
rise($('q1'),p(u,TM.calendar+5,TM.calendar+5.5)); rise($('q2'),p(u,TM.calendar+5.4,TM.calendar+5.9)); rise($('q3'),p(u,TM.calendar+5.8,TM.calendar+6.3));