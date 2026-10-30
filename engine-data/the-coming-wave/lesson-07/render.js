rise($('rope0'),p(u,TM.tightrope,TM.tightrope+.6)); rise($('walker'),p(u,TM.tightrope+.4,TM.tightrope+1));
const sw=Math.sin(t*1.6)*(3+5*p(u,TM.tightrope+5.8,TM.tightrope+7));
wk.setAttribute('transform','translate(1330 365) rotate('+sw.toFixed(2)+')');

rise($('wand'),p(u,TM.magic_wand,TM.magic_wand+.5)); $('wandx').setAttribute('opacity',p(u,TM.magic_wand+3,TM.magic_wand+3.6));
const H=TM.circles+6.2;
RR.forEach((c,i)=>{c.setAttribute('opacity',p(u,TM.circles+i*.3,TM.circles+i*.3+.4)); c.setAttribute('stroke',u>=H?'var(--gain)':'var(--line)')});
rise($('core'),p(u,TM.circles,TM.circles+.4));
SPK.forEach((s,i)=>{const a=i*Math.PI/4+.2,k=(t*.3+i*.37)%1;let r=60+260*k,o=1-lin(k,.8,1);if(u>=H){r=Math.min(r,RAD[i%5]-14);o=1}
  s.setAttribute('cx',(1120+r*Math.cos(a)).toFixed(1)); s.setAttribute('cy',(480+r*Math.sin(a)).toFixed(1)); s.setAttribute('opacity',u>=TM.circles+1?o:0)});
rise($('hold'),p(u,H,H+.6));

rise($('lab'),p(u,TM.engineer,TM.engineer+.5));
const A=TM.engineer+5.8; rise($('bars'),p(u,A,A+.5)); const bh=400*p(u,A+.3,A+2.3);
$('bigbar').setAttribute('y',(700-bh).toFixed(1)); $('bigbar').setAttribute('height',bh.toFixed(1));
const N=TM.magnifier-4.9; rise($('shield'),p(u,N,N+.5)); rise($('safe'),p(u,N+.2,N+.7));
rise($('audit'),p(u,TM.magnifier,TM.magnifier+.5));
const lx=1265+95*Math.sin(t*.9),ly=540+25*Math.sin(t*1.7); $('lens').setAttribute('transform','translate('+lx.toFixed(1)+' '+ly.toFixed(1)+')');
CEL.forEach((c,i)=>{const cx=1165+(i%4)*80,cy=495+Math.floor(i/4)*90; c.setAttribute('fill',u>=TM.magnifier&&Math.hypot(cx-lx,cy-ly)<70?'var(--gain)':'var(--line)')});

rise($('chip'),p(u,TM.microchip,TM.microchip+.5));
FAB.forEach((g,i)=>rise(g,p(u,TM.factory+i*.3,TM.factory+i*.3+.4))); rise($('fabT'),p(u,TM.factory+.9,TM.factory+1.4));
$('ar1').setAttribute('opacity',p(u,TM.factory,TM.factory+.5)); $('ar2').setAttribute('opacity',p(u,TM.hourglass,TM.hourglass+.5));
rise($('hg'),p(u,TM.hourglass,TM.hourglass+.5));
const f=p(u,TM.hourglass+.5,TM.hourglass+7.5),L=340+120*f,h=100*(460-L)/160,B=620-80*f,h2=100*(B-460)/160;
$('sandT').setAttribute('points',(1300-h).toFixed(1)+','+L.toFixed(1)+' '+(1300+h).toFixed(1)+','+L.toFixed(1)+' 1300,460');
$('sandB').setAttribute('points','1206,616 1394,616 '+(1300+h2).toFixed(1)+','+B.toFixed(1)+' '+(1300-h2).toFixed(1)+','+B.toFixed(1));
$('sandS').setAttribute('d','M1300 460V'+B.toFixed(1)); $('sandS').setAttribute('opacity',f>0&&f<1?1:0);
rise($('exp'),p(u,TM.hourglass+2,TM.hourglass+2.6));

rise($('bld'),p(u,TM.builder,TM.builder+.5)); const w=p(u,TM.builder+1,TM.builder+3);
BG.setAttribute('transform','translate('+(170+170*w).toFixed(1)+' 0)'); BP.forEach(e=>e.style.fill=w>.5?'var(--gain)':'var(--muted)'); BB.setAttribute('opacity',1-w);
BL.forEach((b,i)=>rise(b,p(u,TM.builder+2.6+i*.4,TM.builder+3+i*.4))); rise($('bcap'),p(u,TM.builder+1,TM.builder+1.6));
const ag=-12*(1-p(u,TM.balance+1.5,TM.balance+3))*Math.PI/180;
[-1,1].forEach((s,i)=>{const ex=1120+s*160*Math.cos(ag),ey=360+s*160*Math.sin(ag);
  $('beam').setAttribute(i?'x2':'x1',ex.toFixed(1)); $('beam').setAttribute(i?'y2':'y1',ey.toFixed(1)); PAN[i].setAttribute('transform','translate('+ex.toFixed(1)+' '+ey.toFixed(1)+')')});
rise($('scale'),p(u,TM.balance,TM.balance+.5)); rise($('bcap2'),p(u,TM.balance+1.5,TM.balance+2.1));

rise($('cap'),p(u,TM.capitol,TM.capitol+.5));
rise($('ally'),p(u,TM.handshake,TM.handshake+.5)); rise($('shake'),p(u,TM.handshake+1.2,TM.handshake+1.7));
let wv='M600 450'; for(let x=600;x<=980;x+=20)wv+='L'+x+' '+(450+14*Math.sin(x/30-t*3)).toFixed(1); $('wave5').setAttribute('d',wv);
rise($('nuke'),p(u,TM.warhead,TM.warhead+.5)); rise($('lock'),p(u,TM.warhead+1.2,TM.warhead+1.7));

rise($('plane'),p(u,TM.airplane,TM.airplane+.5));
PLN.setAttribute('transform','translate('+(330+8*Math.sin(t*.7)).toFixed(1)+' '+(300+6*Math.sin(t*1.3)).toFixed(1)+') scale(1.6)');
rise($('bbox'),p(u,TM.black_box,TM.black_box+.5)); rise($('share'),p(u,TM.black_box+2.5,TM.black_box+3.1));
const C6=TM.black_box+7; rise($('chart'),p(u,C6,C6+.5));
$('curve6').setAttribute('stroke-dashoffset',(1-p(u,C6+.3,C6+2)).toFixed(3)); $('curve6').setAttribute('opacity',u>=C6+.3?1:0);
rise($('admit'),p(u,TM.black_box+10.8,TM.black_box+11.4));

rise($('crowd'),p(u,TM.crowd,TM.crowd+.5)); rise($('ccap'),p(u,TM.crowd+.6,TM.crowd+1.1));
CR.forEach((g,i)=>g.setAttribute('transform','translate(0 '+(5*Math.sin(t*3+i)).toFixed(1)+')'));
rise($('stk'),p(u,TM.stack,TM.stack+.5)); SLB.forEach((g,i)=>rise(g,p(u,TM.stack+i*.25,TM.stack+i*.25+.4)));
const M=TM.stack+5.4; rise($('miss'),p(u,M,M+.6));
THR.forEach((c,j)=>{const k=(((u-M)*.35+j*.33)%1+1)%1,sx=760+TS[j]*105-14;
  c.setAttribute('cx',(690+(sx-690)*Math.min(1,k*1.5)).toFixed(1)); c.setAttribute('opacity',u<M?0:1-lin(k,.85,1))});

rise($('qa'),p(u,TM.mirror,TM.mirror+.5)); rise($('qb'),p(u,TM.mirror+.4,TM.mirror+.9)); rise($('qc'),p(u,TM.mirror+1.2,TM.mirror+1.7));
const Q=TM.mirror+5.8; rise($('qd'),p(u,Q,Q+.6)); rise($('qr'),p(u,TM.mirror,TM.mirror+.6));
const qi=u>=Q?2:Math.floor(t)%4;
QR.forEach((c,i)=>{c.setAttribute('stroke',i===qi?'var(--gain)':'var(--line)'); c.setAttribute('stroke-width',i===qi?(u>=Q?14+4*Math.sin(t*4):14).toFixed(1):8)});