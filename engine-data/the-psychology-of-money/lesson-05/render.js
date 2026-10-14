const k0=p(t,TM.fancy_car,TM.fancy_car+1.6);$('tcar').setAttribute('transform',`translate(${(1620-500*k0).toFixed(1)} 420)`);
rise($('tq'),p(u,TM.fancy_car+4.2,TM.fancy_car+4.8));

rise($('hotel'),p(u,TM.young_morgan,TM.young_morgan+.5));rise($('valet'),p(u,TM.young_morgan+.6,TM.young_morgan+1.1));
V.forEach((g,i)=>{const a=TM.ferrari_keys+i*.5,k=p(u,a,a+1);g.setAttribute('transform',`translate(${(790+360*i+300*(1-k)).toFixed(1)} 650) scale(.95)`);g.setAttribute('opacity',k)});
rise($('keys'),p(u,TM.ferrari_keys+.8,TM.ferrari_keys+1.3));rise($('clab'),p(u,TM.ferrari_keys+1,TM.ferrari_keys+1.5));
rise($('adm'),p(u,TM.admiration,TM.admiration+.5));

rise($('s2car'),p(u,SC[2][0]/K+.3,SC[2][0]/K+.8));rise($('magw'),p(u,TM.magnifier,TM.magnifier+.5));
const mg=p(u,TM.magnifier+.3,TM.magnifier+2.5);$('mag').setAttribute('transform',`translate(${(260+200*mg+14*Math.sin(t*2)).toFixed(1)} 565)`);
rise($('modest'),p(u,TM.magnifier+1.5,TM.magnifier+2));rise($('wallet'),p(u,TM.empty_wallet,TM.empty_wallet+.5));
const cw=u>=TM.empty_wallet+.6;CO.forEach((c,i)=>{const f=(t*.5+i/4)%1;c.setAttribute('cx',(770-200*f).toFixed(1));c.setAttribute('cy',(480+80*f-50*Math.sin(Math.PI*f)).toFixed(1));c.setAttribute('opacity',cw?(1-f).toFixed(2):0)});
rise($('tag'),p(u,TM.price_tag,TM.price_tag+.5));rise($('lesson2'),p(u,TM.price_tag+1.2,TM.price_tag+1.8));

rise($('colR'),p(u,TM.two_people,TM.two_people+.5));rise($('colW'),p(u,TM.two_people+.4,TM.two_people+.9));
rise($('chk'),p(u,TM.paycheck,TM.paycheck+.5));['b0','b1','b2'].forEach((id,i)=>{const a=TM.paycheck+1.5+i*.6;rise($(id),p(u,a,a+.4))});
rise($('vault'),p(u,TM.vault,TM.vault+.5));$('dial').setAttribute('transform',`rotate(${(u>=TM.vault?t*40:0).toFixed(1)} 1250 500)`);
rise($('cush'),p(u,TM.vault+5.3,TM.vault+5.9));

rise($('mic'),p(u,TM.microphone,TM.microphone+.5));NT.forEach((g,i)=>g.setAttribute('transform',`translate(0 ${(8*Math.sin(t*2.4+i*2)).toFixed(1)})`));
rise($('court'),p(u,TM.courtroom,TM.courtroom+.5));
const gs=u>=TM.courtroom+.5?Math.pow(Math.abs(Math.sin(t*2.5)),4):0;$('gavel').setAttribute('transform',`rotate(${(-22*(1-gs)).toFixed(1)} 640 450)`);
BG.forEach((g,i)=>{const a=TM.shopping_bags+i*.4;rise(g,p(u,a,a+.4))});rise($('bl'),p(u,TM.shopping_bags+1,TM.shopping_bags+1.4));
rise($('quote'),p(u,TM.shopping_bags+1,TM.shopping_bags+1.6));

rise($('pcarw'),p(u,TM.driver_wave,TM.driver_wave+.5));$('arm').setAttribute('transform',`rotate(${(12*Math.sin(t*6)).toFixed(1)} 1072 593)`);
rise($('onl'),p(u,TM.driver_wave+.6,TM.driver_wave+1.1));rise($('cloud'),p(u,TM.thought_cloud,TM.thought_cloud+.5));
const mr=u>=TM.mirror;$('mdrv').setAttribute('class',mr?'gain':'ink');$('mdrv').setAttribute('r',mr?12:9);$('ctxt').textContent=mr?'ME, IN THAT SEAT':'THE DRIVER?';
rise($('others'),p(u,TM.mirror+5.8,TM.mirror+6.3));rise($('irony'),p(u,TM.mirror+6.2,TM.mirror+6.8));

rise($('crw'),p(u,TM.crowd,TM.crowd+.5));$('mfill').setAttribute('width',(36*p(u,TM.crowd+.6,TM.crowd+1.6)).toFixed(1));
rise($('shake'),p(u,TM.handshake,TM.handshake+.5));rise($('stars'),p(u,TM.handshake+.8,TM.handshake+1.3));
ST.forEach((s,i)=>s.setAttribute('transform',`translate(0 ${(-8*Math.sin(t*2+i)).toFixed(1)})`));
rise($('saw'),p(u,TM.seesaw,TM.seesaw+.5));const ks=p(u,TM.seesaw+.6,TM.seesaw+2);
$('beam').setAttribute('transform',`rotate(${(-9*ks).toFixed(2)} 800 756)`);CS.forEach((c,i)=>c.setAttribute('opacity',i<6-Math.round(4*ks)?1:0));

rise($('cart'),p(u,TM.savings_jar,TM.savings_jar+.5));rise($('jar'),p(u,TM.savings_jar+.4,TM.savings_jar+.9));
rise($('xx'),p(u,TM.skipped_cart,TM.skipped_cart+.4));
// finite coin drops: arc over the lid, fall into the jar, vanish; all done well before the scene ends
const FA=TM.skipped_cart+.5, FB=Math.min(TM.growth_line+2, SC[7][1]/K-2.5), FN=Math.max(0,Math.floor((FB-FA)/.5));
FL.forEach((c,i)=>{let k=-1;if(u>=FA&&FN>0){k=Math.min(FN-1,Math.floor((u-FA)/.5));while(k>=0&&k%3!==i)k--}
  let op=0,x=380,y=470;
  if(k>=0){const f=(u-FA-k*.5)/1.2;if(f>=0&&f<1){
    if(f<.55){const q=f/.55;x=380+330*q;y=470-190*q-120*Math.sin(Math.PI*q)}
    else{const q=(f-.55)/.45;x=710;y=280+280*q*q}
    op=f>.85?(1-f)/.15:1}}
  c.setAttribute('cx',x.toFixed(1));c.setAttribute('cy',y.toFixed(1));c.setAttribute('opacity',op.toFixed(2))});
const jh=210*p(u,TM.skipped_cart+.5,TM.growth_line+3);$('jfill').setAttribute('height',jh.toFixed(1));$('jfill').setAttribute('y',(608-jh).toFixed(1));
rise($('chart'),p(u,TM.growth_line,TM.growth_line+.5));const gn=p(u,TM.growth_line+.3,TM.growth_line+2.8);let gp='';
for(let j=0;j<=40;j++){const q=j/40;if(q>gn&&j>1)break;gp+=(930+520*q).toFixed(1)+','+(600-280*(Math.exp(2.2*q)-1)/(Math.exp(2.2)-1)).toFixed(1)+' '}$('gl').setAttribute('points',gp);
rise($('inv'),p(u,TM.growth_line+1.5,TM.growth_line+2.1));

rise($('qa'),p(u,TM.question_mark,TM.question_mark+.5));rise($('qb'),p(u,TM.question_mark+.4,TM.question_mark+.9));rise($('qc'),p(u,TM.question_mark+.8,TM.question_mark+1.3));
rise($('eye'),p(u,TM.question_mark+1.2,TM.question_mark+1.7));$('pup').setAttribute('cx',(1320+40*Math.sin(t*1.5)).toFixed(1));
$('slash').setAttribute('opacity',p(u,TM.question_mark+3.8,TM.question_mark+4.3));rise($('sk'),p(u,TM.question_mark+3.8,TM.question_mark+4.4));