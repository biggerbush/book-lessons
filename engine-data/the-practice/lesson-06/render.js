const pb=p(u,TM.unfinished,TM.unfinished+3);
$('pbar').setAttribute('width',(252*pb+(pb>=1?4*Math.sin(t*3):0)).toFixed(1));
rise($('almost'),p(u,TM.unfinished+1,TM.unfinished+1.6)); rise($('q0'),p(u,TM.unfinished+7.8,TM.unfinished+8.4));

const cv=p(u,TM.polish_cloth,TM.polish_cloth+.5), iv=p(u,TM.locked_door+4.6,TM.locked_door+5.4);
rise($('clothW'),cv);
$('cloth').setAttribute('transform','translate('+(390+70*Math.cos(t*3)).toFixed(1)+' '+(470+60*Math.sin(t*3)).toFixed(1)+') rotate('+(15*Math.sin(t*3)).toFixed(1)+')');
SPK.forEach((s,i)=>s.setAttribute('opacity',(cv*(1-iv)*(.3+.7*Math.abs(Math.sin(t*2.5+i)))).toFixed(2)));
$('page').setAttribute('opacity',(1-.75*iv).toFixed(2));
rise($('lock'),p(u,TM.locked_door,TM.locked_door+.5)); rise($('inv'),iv);

rise($('am'),p(u,TM.amateur,TM.amateur+.5)); rise($('pro'),p(u,TM.professional,TM.professional+.5));
$('cloud2').setAttribute('stroke-dashoffset',(t*12).toFixed(1));
RAIN.forEach(r=>r.setAttribute('stroke-dashoffset',(-t*40).toFixed(1)));
STK.forEach((s,i)=>{const a=TM.professional+1+i*.8;s.setAttribute('opacity',p(u,a,a+.3))});
rise($('nt'),p(u,TM.professional+6.5,TM.professional+7)); rise($('cm'),p(u,TM.professional+9.5,TM.professional+10));

rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
$('calc').setAttribute('stroke-dashoffset',(100*(1-p(u,TM.calendar+.8,TM.calendar+1.8))).toFixed(1));
const bk=p(u,TM.ship_box,TM.ship_box+2.5);
$('box').setAttribute('transform','translate('+(700+560*bk).toFixed(1)+' 540)');
$('box').setAttribute('opacity',(p(u,TM.calendar+2,TM.calendar+2.5)*(1-lin(bk,.8,1))).toFixed(2));
rise($('shipW'),p(u,TM.ship_box+4.2,TM.ship_box+4.8)); rise($('hope'),p(u,TM.ship_box+6,TM.ship_box+6.6));

rise($('brw'),p(u,TM.blog_post,TM.blog_post+.5));
const sp=u>=TM.stack_posts;
TL.forEach((r,i)=>{const a=TM.blog_post+1+i*.1;r.setAttribute('opacity',(p(u,a,a+.3)*(sp&&TH[i]==2?.3:1)).toFixed(2));
  r.setAttribute('fill',sp?(TH[i]==0?'var(--gain)':TH[i]==2?'var(--muted)':'var(--ink)'):'var(--ink)')});
rise($('brief'),p(u,TM.blog_post+7.8,TM.blog_post+8.3)); rise($('leg'),p(u,TM.stack_posts,TM.stack_posts+.5));
rise($('flow'),p(u,TM.stack_posts+2.6,TM.stack_posts+3.2));

rise($('rul'),p(u,TM.ruler,TM.ruler+.5)); rise($('markW'),p(u,TM.ruler+.3,TM.ruler+.7));
$('mark').setAttribute('transform','translate('+(140+940*p(u,TM.ruler+.4,TM.ruler+2)).toFixed(1)+' 0)');
rise($('c51'),p(u,TM.ruler+3.4,TM.ruler+3.9)); rise($('c52'),p(u,TM.checklist,TM.checklist+.5));
[0,1].forEach(i=>$('ck'+i).setAttribute('stroke-dashoffset',(100*(1-p(u,TM.checklist+.8+i*1.2,TM.checklist+1.3+i*1.2))).toFixed(1)));
rise($('c53'),p(u,TM.wedding_toast,TM.wedding_toast+.5));

BR.forEach((b,i)=>{const h=280*p(u,TM.skilled_hands+i*.4,TM.skilled_hands+1+i*.4);b.setAttribute('y',(640-h).toFixed(1));b.setAttribute('height',h.toFixed(1))});
rise($('mon'),p(u,TM.skilled_hands+3.7,TM.skilled_hands+4.1));
MO.forEach((m,i)=>{const a=TM.skilled_hands+3.7+i*.04;m.setAttribute('opacity',p(u,a,a+.3))});
rise($('mstrike'),p(u,TM.skilled_hands+5.6,TM.skilled_hands+6.1));
rise($('door6'),p(u,TM.open_door-1,TM.open_door-.5));
const od=p(u,TM.open_door,TM.open_door+.8), xr=1380-230*od;
$('panel6').setAttribute('d','M1200 300L'+xr.toFixed(1)+' '+(300+25*od).toFixed(1)+'V'+(640-25*od).toFixed(1)+'L1200 640z');
const pk=u>=TM.open_door+.6?(((u-TM.open_door-.6)%2.4)+2.4)%2.4/2.4:0;
$('plane').setAttribute('transform','translate('+(1290+150*pk).toFixed(1)+' '+(500-240*pk).toFixed(1)+')');
$('planeW').setAttribute('opacity',(u>=TM.open_door+.6?1-lin(pk,.75,1):0).toFixed(2));
rise($('lt6'),p(u,TM.open_door+.4,TM.open_door+1));

rise($('c71'),p(u,TM.project_card,TM.project_card+.5)); rise($('c72'),p(u,TM.red_circle,TM.red_circle+.5));
$('rc').setAttribute('stroke-dashoffset',(100*(1-p(u,TM.red_circle+.6,TM.red_circle+1.6))).toFixed(1));
rise($('c73'),p(u,TM.red_circle+3,TM.red_circle+3.5));
NL.forEach((r,i)=>r.setAttribute('width',([300,260,200][i]*p(u,TM.red_circle+3.5+i*.6,TM.red_circle+4.1+i*.6)).toFixed(1)));
rise($('honor'),p(u,TM.red_circle+7,TM.red_circle+7.6));

['l1','l2','l3','l4'].forEach((id,i)=>rise($(id),p(u,TM.friday_flag+i*.4,TM.friday_flag+i*.4+.5)));
rise($('flag'),p(u,TM.friday_flag+1.6,TM.friday_flag+2.2));
let fd='M1324 260';for(let x=1324;x<=1464;x+=10)fd+='L'+x+' '+(260+8*Math.sin(x/25-t*3)*(x-1324)/140).toFixed(1);
for(let x=1464;x>=1324;x-=10)fd+='L'+x+' '+(360+8*Math.sin(x/25-t*3)*(x-1324)/140).toFixed(1);
$('fl').setAttribute('d',fd+'Z');