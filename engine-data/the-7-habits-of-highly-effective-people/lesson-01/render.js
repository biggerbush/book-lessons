rise($('specs'),p(u,TM.glasses,TM.glasses+.8)); $('sun0').setAttribute('cy',(370+6*Math.sin(t*2)).toFixed(1));

SPN.forEach((s,i)=>{const a=TM.book_stack+i*.08,o=i<18;s.setAttribute('opacity',p(u,a,a+.3));
  s.setAttribute('fill',o?(u>=TM.old_books+i*.05?'var(--gain)':'var(--line)'):(u>=TM.new_books+(i-18)*.1?'var(--loss)':'var(--line)'));
  s.setAttribute('fill-opacity',o?1:(1-.75*p(u,TM.new_books+5.8,TM.new_books+7)).toFixed(2))});
rise($('tl'),p(u,TM.book_stack+1,TM.book_stack+1.5)); rise($('ch1'),p(u,TM.old_books,TM.old_books+.5));
rise($('pe1'),p(u,TM.new_books,TM.new_books+.5)); rise($('last1'),p(u,TM.new_books+5.8,TM.new_books+6.4));

rise($('map'),p(u,TM.city_map,TM.city_map+.6));
$('strk').setAttribute('x2',(146+214*p(u,TM.detroit_label,TM.detroit_label+.5)).toFixed(1));
rise($('stamp'),p(u,TM.detroit_label+.4,TM.detroit_label+.9));
rise($('row1'),p(u,TM.runner,TM.runner+.5));
const ra=t*(1.5+3*p(u,TM.runner,TM.runner+2)); $('rnr').setAttribute('cx',(1140+240*Math.cos(ra)).toFixed(1)); $('rnr').setAttribute('cy',(390+50*Math.sin(ra)).toFixed(1));
rise($('row2'),p(u,TM.runner+4.5,TM.runner+5)); rise($('para'),p(u,TM.runner+8.7,TM.runner+9.3));

rise($('car'),p(u,TM.subway_car,TM.subway_car+.6)); rise($('dad'),p(u,TM.father,TM.father+.5));
rise($('kids'),p(u,TM.father+.5,TM.father+1));
KID.forEach((k,i)=>k.setAttribute('transform','translate('+(KX[i]+20*Math.sin(t*(1.6+i*.4)+i*2)).toFixed(1)+' '+(-12*Math.abs(Math.sin(t*5+i))).toFixed(1)+')'));
rise($('shut'),p(u,TM.father+5.4,TM.father+6));
const ck=360*5*p(u,TM.clock-1.5,TM.clock+1)+t*6; $('mh').setAttribute('transform','rotate('+ck.toFixed(1)+' 800 310)'); $('hh').setAttribute('transform','rotate('+(ck/12).toFixed(1)+' 800 310)');
rise($('ask'),p(u,TM.clock+1,TM.clock+1.5));

rise($('hosp'),p(u,TM.hospital,TM.hospital+.5)); rise($('irr'),p(u,TM.hospital+.6,TM.hospital+1.1));
rise($('hg'),p(u,TM.hospital+.6,TM.hospital+1.1)); rise($('died'),p(u,TM.hospital+5.4,TM.hospital+6));
const hb=1.5*(1+.06*Math.pow(Math.abs(Math.sin(t*3.5)),6)); $('hrt').setAttribute('transform','scale('+hb.toFixed(3)+')');
$('hrt').style.fill=u>=TM.heart?'var(--gain)':'var(--loss)';
rise($('comp'),p(u,TM.heart,TM.heart+.5)); rise($('same1'),p(u,TM.heart+2.6,TM.heart+3.1)); rise($('same2'),p(u,TM.heart+5.1,TM.heart+5.7));

rise($('fam'),p(u,TM.son,TM.son+.5)); rise($('plant'),p(u,TM.son+1,TM.son+1.5));
rise($('cheer'),p(u,TM.cheer_sign,TM.cheer_sign+.5));
rise($('nc'),p(u,TM.cheer_sign+1.5,TM.cheer_sign+2)*(1-p(u,TM.growing_plant,TM.growing_plant+.4)));
rise($('lens5'),p(u,TM.cheer_sign+3.3,TM.cheer_sign+3.8));
const cap=u>=TM.growing_plant; $('lt5').textContent=cap?'CAPABLE':'INADEQUATE'; $('lt5').style.fill=cap?'var(--gain)':'var(--loss)';
$('lc5').setAttribute('stroke',cap?'var(--gain)':'var(--loss)'); $('son').setAttribute('fill',cap?'var(--gain)':'var(--ink)');
const gp=p(u,TM.growing_plant,TM.growing_plant+3.5),H=40+270*gp; $('stem').setAttribute('d','M1220 700V'+(700-H).toFixed(1));
LF.forEach((l,i)=>l.setAttribute('opacity',cl((H-[80,150,220,290][i])/20)));
$('bloom').setAttribute('cy',(700-H).toFixed(1)); $('bloom').setAttribute('opacity',p(u,TM.growing_plant+3,TM.growing_plant+3.6));
rise($('thr'),p(u,TM.growing_plant+.5,TM.growing_plant+1));

rise($('ring0'),p(u,TM.mirror,TM.mirror+.5)); rise(LG[0],p(u,TM.mirror+.3,TM.mirror+.8));
rise($('ring1'),p(u,TM.arrow_out,TM.arrow_out+.5)); rise(LG[1],p(u,TM.arrow_out+.3,TM.arrow_out+.8));
rise($('ring2'),p(u,TM.arrow_out+.6,TM.arrow_out+1.1)); rise(LG[2],p(u,TM.arrow_out+.9,TM.arrow_out+1.4));
const ph=(t*.8)%1; ARW.forEach((a,i)=>a.setAttribute('transform','rotate('+i*60+' 560 500) translate('+(ph*20).toFixed(1)+' 0)'));
$('arw').setAttribute('opacity',(p(u,TM.arrow_out+1,TM.arrow_out+1.5)*(1-.6*ph)).toFixed(2));
rise($('quote'),p(u,TM.arrow_out+4.2,TM.arrow_out+4.8));

rise($('k0'),p(u,TM.person,TM.person+.5)); rise($('k1'),p(u,TM.question,TM.question+.5)); rise($('k2'),p(u,TM.new_lens,TM.new_lens+.5));
$('qm').setAttribute('y',(468+6*Math.sin(t*3)).toFixed(1));

rise($('qa'),p(u,TM.map_pin,TM.map_pin+.5)); rise($('qb'),p(u,TM.map_pin+.4,TM.map_pin+.9)); rise($('qc'),p(u,TM.map_pin+.8,TM.map_pin+1.3));
const pd=p(u,TM.map_pin+1.4,TM.map_pin+2.2); rise($('pinW'),pd); $('pin').setAttribute('transform','translate(0 '+(-(1-pd)*40).toFixed(1)+')');