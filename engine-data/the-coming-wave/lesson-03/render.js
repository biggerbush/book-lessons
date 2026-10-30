let wd='';for(let x=120;x<=1480;x+=20)wd+=(x===120?'M':'L')+x+' '+WY(x,t).toFixed(1);
$('w0').setAttribute('d',wd);$('w0').setAttribute('opacity',p(u,TM.wave_title,TM.wave_title+.8));
TD.forEach((c,i)=>{const x=300+i*200,a=TM.wave_title+2.6+i*.4;c.setAttribute('cy',(WY(x,t)-26).toFixed(1));c.setAttribute('opacity',p(u,a,a+.4))});

rise($('train'),p(u,TM.old_tools,TM.old_tools+.5));
TG.forEach((g,i)=>{const a=TM.old_tools+2.6+i*1.4;rise(g,p(u,a,a+.4))});
const bk=TM.four_boxes-4.4;
KS.forEach((l,i)=>l.setAttribute('x2',(740+KW[i]*p(u,bk+i*.4,bk+i*.4+.4)).toFixed(1)));
rise($('brk'),p(u,bk,bk+.5));
BX.forEach((g,i)=>{const a=TM.four_boxes+i*.8;rise(g,p(u,a,a+.4))});

rise($('drone'),p(u,TM.small_drone,TM.small_drone+.5));
rise($('map'),p(u,TM.ukraine_map,TM.ukraine_map+.5));rise($('army'),p(u,TM.ukraine_map+.6,TM.ukraine_map+1.1));
$('plank').setAttribute('transform','rotate('+(8*p(u,TM.ukraine_map+1,TM.ukraine_map+2)-16*p(u,TM.seesaw,TM.seesaw+1.2)).toFixed(2)+' 700 700)');
rise($('wt'),p(u,TM.seesaw+1,TM.seesaw+1.6));

rise($('ch0'),p(u,TM.speed_line,TM.speed_line+.5));
draw($('cc'),LC,p(u,TM.speed_line+.4,TM.speed_line+1.8));
rise($('dna'),p(u,TM.dna_strand,TM.dna_strand+.5));
draw($('dc'),LD,p(u,TM.dna_strand+.6,TM.dna_strand+2.4));
rise($('bp'),p(u,TM.blueprint,TM.blueprint+.5));
$('ver').textContent='v'+(1+Math.floor(8*p(u,TM.blueprint+.5,TM.blueprint+5)));
$('nv').setAttribute('width',(340*p(u,TM.blueprint+1,TM.blueprint+4)).toFixed(1));
$('rl').setAttribute('width',(70*p(u,TM.blueprint+1,TM.blueprint+4)).toFixed(1));

rise($('kn'),p(u,TM.swiss_knife,TM.swiss_knife+.5));
BL.forEach((b,i)=>{const a=TM.swiss_knife+.4+i*.3;b.setAttribute('transform','rotate('+(ANG[i]*p(u,a,a+.6)).toFixed(1)+' 190 490)')});
rise($('ai'),p(u,TM.molecule,TM.molecule+.5));rise($('med'),p(u,TM.molecule+1,TM.molecule+1.5));
rise($('tox'),p(u,TM.molecule+4.5,TM.molecule+5));rise($('pois'),p(u,TM.skull_flask,TM.skull_flask+.5));
PD.forEach((d,i)=>{const a=TM.skull_flask+.4+i*.05;d.setAttribute('opacity',p(u,a,a+.2))});
rise($('same'),p(u,TM.skull_flask+5,TM.skull_flask+5.6));

rise($('board'),p(u,TM.go_board,TM.go_board+.5));
const k37=p(u,TM.move_37,TM.move_37+.5),rp=(t*1.2)%1;
rise($('m37'),k37);$('ring').setAttribute('r',(22+26*rp).toFixed(1));$('ring').setAttribute('opacity',((1-rp)*k37).toFixed(2));
rise($('ex'),p(u,TM.move_37+1,TM.move_37+1.5));
const ok=u>=TM.move_37+6.2;BT.forEach(e=>{e.textContent=ok?'!':'?';e.style.fill=ok?'var(--gain)':'var(--ink)'});BR.forEach(r=>r.setAttribute('stroke',ok?'var(--gain)':'var(--ink)'));
rise($('bril'),p(u,TM.move_37+6.2,TM.move_37+6.7));rise($('expl'),p(u,TM.move_37+8,TM.move_37+8.6));
rise($('ctl'),p(u,TM.robot_hand,TM.robot_hand+.5));
const kc=p(u,TM.robot_hand+.6,TM.robot_hand+3);
$('hb').setAttribute('width',(460*(1-.75*kc)).toFixed(1));$('mb').setAttribute('width',(460*(.2+.75*kc)).toFixed(1));

ST.forEach((g,i)=>{const a=TM.stacked_traits+i*1.2;rise(g,p(u,a,a+.5))});
rise($('fence'),p(u,TM.leaky_fence,TM.leaky_fence+.5));
const kl=p(u,TM.leaky_fence+1.5,TM.leaky_fence+2.5);
LK.forEach(d=>{const s=TM.leaky_fence+1.5+d.o*.1,k=p(u,s,s+.9);d.e.setAttribute('cx',(1000+(d.x-1000)*k).toFixed(1));d.e.setAttribute('opacity',cl(k*6).toFixed(2))});
rise($('slip'),kl);rise($('old'),p(u,TM.leaky_fence+3,TM.leaky_fence+3.6));

rise($('tool'),p(u,TM.magnifier,TM.magnifier+.5));rise($('mgw'),p(u,TM.magnifier+.5,TM.magnifier+1));
$('mg').setAttribute('transform','translate('+(280+60*Math.sin(t*.9)).toFixed(1)+' '+(470+30*Math.cos(t*1.3)).toFixed(1)+')');
CD.forEach((g,i)=>{const a=TM.four_question+i*1.6;rise(g,p(u,a,a+.5))});

rise($('qa'),p(u,TM.question_mark,TM.question_mark+.5));rise($('qb'),p(u,TM.question_mark+.4,TM.question_mark+.9));
rise($('qc'),p(u,TM.question_mark+3.4,TM.question_mark+3.9));rise($('qd'),p(u,TM.question_mark+5,TM.question_mark+5.5));
rise($('qm'),p(u,TM.question_mark+.2,TM.question_mark+.8));$('qr').setAttribute('r',(100+6*Math.sin(t*3)).toFixed(1));