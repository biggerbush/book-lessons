BM.forEach((b,i)=>{const a=TM.house_frame+i*.6;b.setAttribute('opacity',p(u,a,a+.5));if(i>0&&i<5)b.style.stroke=u>=TM.house_frame+5.8?'var(--gain)':''});

rise($('bat'),p(u,TM.battery,TM.battery+.5));
CELL.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.battery+.8+i*.5,TM.battery+1.1+i*.5)));
rise($('qm'),p(u,TM.battery+5.4,TM.battery+5.9)*(1-p(u,TM.arrow_out+2.9,TM.arrow_out+3.3)));
rise($('aro'),p(u,TM.arrow_out,TM.arrow_out+.5)); $('aroL').style.strokeDashoffset=(-t*40).toFixed(1);
rise($('mini'),p(u,TM.arrow_out+3,TM.arrow_out+3.6));

const PC=[TM.label_family,TM.label_friends,TM.label_work,TM.label_faith],sg=p(u,TM.label_faith+3.8,TM.label_faith+5.3);
rise($('roof'),p(u,TM.four_pillars,TM.four_pillars+.5)); rise($('base'),p(u,TM.four_pillars,TM.four_pillars+.5));
$('roofR').setAttribute('transform','rotate('+(3*sg).toFixed(2)+' 260 355)');
PL.forEach((r,i)=>{r.setAttribute('opacity',p(u,TM.four_pillars+.3+i*.2,TM.four_pillars+.7+i*.2));r.setAttribute('fill',u>=PC[i]?(i===3&&sg>0?'var(--loss)':'var(--gain)'):'var(--stage)');rise(LB[i],p(u,PC[i],PC[i]+.4))});
PL[3].setAttribute('y',(370+50*sg).toFixed(1)); PL[3].setAttribute('height',(320-50*sg).toFixed(1));
rise($('sag'),p(u,TM.label_faith+3.8,TM.label_faith+4.3));

rise($('fam'),p(u,TM.family_table,TM.family_table+.5)); rise($('chairs'),p(u,TM.two_chairs,TM.two_chairs+.5));
const hg=p(u,TM.heart_grow,TM.heart_grow+2.5),bo=p(u,TM.two_chairs+.8,TM.two_chairs+1.2)*(1-hg),sw=Math.sin(t*2.4)>0;
$('b0').setAttribute('opacity',(bo*(sw?1:.15)).toFixed(2)); $('b1').setAttribute('opacity',(bo*(sw?.15:1)).toFixed(2));
$('hrt').setAttribute('transform','translate(1140 470) scale('+(.2+.7*hg).toFixed(3)+')'); $('hrt').setAttribute('opacity',p(u,TM.heart_grow,TM.heart_grow+.4));
rise($('love'),p(u,TM.heart_grow+.6,TM.heart_grow+1.2));

rise($('dealP'),p(u,TM.handshake,TM.handshake+.5)); rise($('dealT'),p(u,TM.handshake+4.6,TM.handshake+5.1));
rise($('realP'),p(u,TM.hug,TM.hug+.5)); rise($('lad'),p(u,TM.ladder,TM.ladder+.5));
$('barM').setAttribute('width',(560*p(u,TM.ladder+.4,TM.ladder+2.2)).toFixed(1));
$('barF').setAttribute('width',(110*p(u,TM.ladder+2.6,TM.ladder+3.4)).toFixed(1));
rise($('lone'),p(u,TM.ladder+5.8,TM.ladder+6.3));

rise($('cal'),p(u,TM.calendar,TM.calendar+.5));
CC.forEach((c,i)=>{const k=BLK.indexOf(i),a=TM.calendar+2.9+k*.25;c.setAttribute('fill-opacity',k<0?0:p(u,a,a+.4))});
rise($('calT'),p(u,TM.calendar+2.9,TM.calendar+3.4));
rise($('cups'),p(u,TM.coffee_cups,TM.coffee_cups+.5)); rise($('ask'),p(u,TM.coffee_cups+.5,TM.coffee_cups+1));
ST.forEach((s,k)=>{const c=((t*.7+k*.37)%1);s.setAttribute('transform','translate(0 '+(-20*c).toFixed(1)+')');s.setAttribute('opacity',(1-c).toFixed(2))});

rise($('desk'),p(u,TM.desk,TM.desk+.5)); rise($('cTro'),p(u,TM.trophy,TM.trophy+.5)); rise($('cHelp'),p(u,TM.helping_hand,TM.helping_hand+.5));
$('hand').setAttribute('transform','translate(0 '+(6*Math.sin(t*2)).toFixed(1)+')');
rise($('pay'),p(u,TM.helping_hand+4.2,TM.helping_hand+4.7));
const px=p(u,TM.helping_hand+4.8,TM.helping_hand+5.3); $('payX').setAttribute('x2',(110+180*px).toFixed(1)); $('payX').setAttribute('y2',(815-120*px).toFixed(1)); $('payX').setAttribute('opacity',px>0?1:0);

rise($('sky'),p(u,TM.night_sky,TM.night_sky+.6));
SR.forEach((s,i)=>s.setAttribute('opacity',(.55+.45*Math.sin(t*2+i*1.7)).toFixed(2)));
rise($('w0'),p(u,TM.night_sky+5,TM.night_sky+5.5)); rise($('forest'),p(u,TM.forest_path,TM.forest_path+.6));
[1.2,2.6,4.2].forEach((d,i)=>rise($('w'+(i+1)),p(u,TM.forest_path+d,TM.forest_path+d+.4)));
rise($('shr'),p(u,TM.forest_path+6.5,TM.forest_path+7));

rise($('qa'),p(u,TM.checklist,TM.checklist+.5)); rise($('qb'),p(u,TM.checklist+.4,TM.checklist+.9));
rise($('ck'),p(u,TM.checklist+.6,TM.checklist+1.1));
CR.forEach(([g,c],i)=>{const a=TM.checklist+.9+i*.3;rise(g,p(u,a,a+.3));if(c)c.setAttribute('opacity',p(u,a+1.4,a+1.7))});
rise($('qc'),p(u,TM.checklist+3.8,TM.checklist+4.3)); rise($('pill'),p(u,TM.checklist+4.2,TM.checklist+4.7));