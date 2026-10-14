const h=TM.hook_speaker;
rise($('spk'),p(u,h,h+.6)); rise($('hear'),p(u,h+1.5,h+2.1)); rise($('who'),p(u,h+5.4,h+5.9));

rise($('fig'),p(u,TM.stick_figure,TM.stick_figure+.5));
BDg.forEach((g,i)=>{const a=TM.id_badges+i*.6;rise(g,p(u,a,a+.4));BLn[i].setAttribute('opacity',p(u,a,a+.4))});
rise($('sid'),p(u,TM.id_badges+4.6,TM.id_badges+5.2)); rise($('one'),p(u,TM.id_badges+10.3,TM.id_badges+10.9));

const m=TM.message_arrow, at=m+9.1, atk=u>=at;
rise($('src'),p(u,TM.filter_lens-.3,TM.filter_lens+.2)); rise($('lens2'),p(u,TM.filter_lens,TM.filter_lens+.6));
const mx=320+520*p(u,m,m+2)+140*p(u,m+5.7,m+6.7)-360*p(u,at,at+1);
$('msg').setAttribute('transform','translate('+mx.toFixed(1)+' 470)'); $('msg').setAttribute('opacity',p(u,m,m+.3));
rise($('ask'),p(u,m+1,m+1.6)); rise($('arg'),p(u,m+5.7,m+6.3));
$('scale2').setAttribute('transform','rotate('+(atk?0:4*Math.sin(t*1.6)).toFixed(2)+' 1250 428)');
$('lensE').setAttribute('stroke',atk?'var(--loss)':'var(--gain)'); $('lensE').setAttribute('fill',atk?'var(--loss)':'var(--gain)');
rise($('shield'),p(u,at,at+.4)); rise($('def'),p(u,at+.6,at+1.2));

const f=TM.fact_sheet, dg=u>=f+8.4;
rise($('room'),p(u,TM.clinic_room,TM.clinic_room+.5));
PP.forEach((r,i)=>{const a=f+i*.25,k=p(u,a,a+.5),ty=572-i*32;
  r.setAttribute('x',(470+270*k).toFixed(1)); r.setAttribute('y',(440+(ty-440)*k-120*Math.sin(Math.PI*k)).toFixed(1));
  r.setAttribute('opacity',k>0?1:0); r.setAttribute('stroke',dg?'var(--loss)':'var(--ink)')});
rise($('bf'),p(u,f+.8,f+1.4)); rise($('atk'),p(u,f+2.2,f+2.7)); rise($('dig'),p(u,f+8.4,f+8.9));
setC(PA,u>=f+2.2?'loss':'ink');

const q=TM.question_cloud, tr=q+5;
rise($('dseat'),p(u,TM.doctor_chair,TM.doctor_chair+.5)); rise($('qa4'),p(u,q,q+.5)); rise($('qb4'),p(u,q+1.6,q+2.1));
rise($('obs'),p(u,tr,tr+.4)); $('obsS').setAttribute('x2',(1040+160*p(u,tr+.6,tr+1.1)).toFixed(1));
rise($('prot'),p(u,tr+1,tr+1.6)); setC(P4,u>=tr+1?'gain':'ink');

const b=TM.bridge;
rise($('sb'),p(u,TM.shared_badge,TM.shared_badge+.5)); $('sbl').setAttribute('opacity',p(u,TM.shared_badge+2.6,TM.shared_badge+3.2));
$('br').setAttribute('stroke-dashoffset',(1-p(u,b,b+1.2)).toFixed(3));
FC.forEach((r,i)=>{const s=cl((u-b-1.2-i*.5)/1.4),x=(1-s)*(1-s)*360+2*s*(1-s)*800+s*s*1240,y=(1-s)*(1-s)*600+2*s*(1-s)*760+s*s*600;
  r.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+')'); r.setAttribute('opacity',s>0&&s<1?1:0)});
rise($('ok5'),p(u,b+2.8,b+3.3)); rise($('land'),p(u,b+1,b+1.6));

const sp=TM.spotlight, mbt=TM.many_badges;
rise($('lamp'),p(u,sp,sp+.6)); rise($('pb'),p(u,sp+.8,sp+1.3)); rise($('qt'),p(u,sp+4.6,sp+5.2));
rise($('oth'),p(u,mbt,mbt+.5)); MB.forEach((g,i)=>{const a=mbt+.4+i*.4;rise(g,p(u,a,a+.4))}); rise($('nj'),p(u,mbt+2.4,mbt+3));

const v=TM.venn_circles, vk=p(u,v,v+3.5);
$('vA').setAttribute('transform','translate('+(500+200*vk).toFixed(1)+' 0)'); $('vB').setAttribute('transform','translate('+(1100-200*vk).toFixed(1)+' 0)');
[0,1,2].forEach(i=>{const a=v+3.8+i*1.4;rise($('ov'+i),p(u,a,a+.4))});
rise($('small'),p(u,v+9.6,v+10.2)); rise($('hs'),p(u,TM.handshake,TM.handshake+.5)); rise($('hsT'),p(u,TM.handshake+.4,TM.handshake+1));

const c=SC[8][0]/K, ck=p(u,c+1.6,c+3);
rise($('c1'),p(u,c+.3,c+.8)); rise($('c2'),p(u,c+.7,c+1.2)); rise($('c3'),p(u,c+1.1,c+1.6)); rise($('c4'),p(u,c+5.3,c+5.9));
rise($('c5'),p(u,c+1.6,c+2.1)); $('c5a').setAttribute('cx',(1210+40*ck).toFixed(1)); $('c5b').setAttribute('cx',(1390-40*ck).toFixed(1));