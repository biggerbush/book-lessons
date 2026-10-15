rise($('tcan'),p(u,TM.paint_can,TM.paint_can+.6));
rise($('tbub'),p(u,TM.paint_can+6.6,TM.paint_can+7.1));
$('tw').setAttribute('opacity',(.35+.65*Math.abs(Math.sin(t*2))).toFixed(2));

rise($('dict'),p(u,TM.dictionary,TM.dictionary+.5)); rise($('dfn'),p(u,TM.dictionary+3,TM.dictionary+3.5));
rise($('fr1'),p(u,TM.two_friends,TM.two_friends+.5)); rise($('bub1'),p(u,TM.two_friends+2.5,TM.two_friends+3));
const sb=u>=TM.speech_bubble; $('bp1').style.fill=sb?'var(--gain)':'var(--stage)'; $('bp1').style.stroke=sb?'var(--gain)':'var(--ink)'; $('bt1').style.fill=sb?'var(--on-gain)':'var(--ink)';
rise($('lbl1'),p(u,TM.speech_bubble,TM.speech_bubble+.5)); rise($('nob'),p(u,TM.speech_bubble+4.5,TM.speech_bubble+5));

rise($('mcan'),p(u,TM.metal_can,TM.metal_can+.5)); rise($('c20'),p(u,TM.metal_can+.5,TM.metal_can+1));
rise($('sdr'),p(u,TM.screwdriver,TM.screwdriver+.5)); rise($('c21'),p(u,TM.screwdriver+.5,TM.screwdriver+1));
$('lidE').setAttribute('transform','rotate('+(-7*p(u,TM.screwdriver+.6,TM.screwdriver+1.4)).toFixed(2)+' 800 400)');
const dk=p(u,TM.screwdriver+1.5,TM.screwdriver+4.5); DR.forEach(d=>{d[0].setAttribute('d','M'+d[1]+' 440V'+(440+d[2]*dk).toFixed(1)); d[0].setAttribute('opacity',dk>0?1:0)});
rise($('whd'),p(u,TM.wire_handle,TM.wire_handle+.5)); rise($('c22'),p(u,TM.wire_handle+.5,TM.wire_handle+1));
$('ouch').setAttribute('opacity',(.3+.7*Math.abs(Math.sin(t*3))).toFixed(2));

rise($('ghost'),p(u,TM.dutch_boy,TM.dutch_boy+.5)); rise($('jug'),p(u,TM.dutch_boy+.4,TM.dutch_boy+1));
$('hdl').style.stroke=u>=TM.plastic_jug?'var(--gain)':'var(--ink)';
rise($('f0'),p(u,TM.plastic_jug+.3,TM.plastic_jug+.8)); rise($('f1'),p(u,TM.plastic_jug+.9,TM.plastic_jug+1.4));
const ck=p(u,TM.screw_lid,TM.screw_lid+1.2); $('cap').setAttribute('transform','translate(0 '+(-36*ck).toFixed(1)+') rotate('+(-12*ck).toFixed(1)+' 655 280)');
rise($('f2'),p(u,TM.screw_lid+.3,TM.screw_lid+.8)); rise($('f3'),p(u,TM.screw_lid+1.6,TM.screw_lid+2.1));
rise($('same3'),p(u,TM.screw_lid+6.2,TM.screw_lid+6.7));

rise($('cust'),p(u,TM.customer,TM.customer+.5)); $('exc').setAttribute('opacity',(p(u,TM.customer+1,TM.customer+1.4)*(.5+.5*Math.abs(Math.sin(t*3)))).toFixed(2));
rise($('shelf'),p(u,TM.store_shelf,TM.store_shelf+.5));
const nn=3+27*p(u,TM.store_shelf+.6,TM.store_shelf+4); SLT.forEach(s=>{const k=cl(nn-s[2]); s[1].setAttribute('opacity',k.toFixed(2)); s[0].setAttribute('opacity',(1-k).toFixed(2))});
rise($('more'),p(u,TM.store_shelf+3,TM.store_shelf+3.5)); rise($('expl'),p(u,TM.store_shelf+6.2,TM.store_shelf+6.7));

[0,1,2].forEach(i=>rise($('ob'+i),p(u,TM.old_timeline+i*.7,TM.old_timeline+i*.7+.5)));
rise($('new5'),p(u,TM.new_timeline,TM.new_timeline+.4)); $('bar5').setAttribute('width',(1080*p(u,TM.new_timeline,TM.new_timeline+1.5)).toFixed(1));
$('bt5').setAttribute('opacity',p(u,TM.new_timeline+1.3,TM.new_timeline+1.8));
rise($('spr5'),p(u,TM.new_timeline+5.4,TM.new_timeline+5.9));
RG.forEach((c,i)=>{const f=((t*.5+i/3)%1); c.setAttribute('r',(40+80*f).toFixed(1)); c.setAttribute('opacity',(1-f).toFixed(2))});
D5.forEach((d,i)=>{const a=TM.new_timeline+6+i*.3; d.setAttribute('opacity',p(u,a,a+.3)); d.setAttribute('class',u>=a+.3?'gain':'ink')});
rise($('spr5t'),p(u,TM.new_timeline+5.6,TM.new_timeline+6.2));

rise($('mag'),p(u,TM.magnifier,TM.magnifier+.5));
$('magI').setAttribute('transform','translate('+(14*Math.sin(t*1.2)).toFixed(1)+' '+(10*Math.sin(t*1.7)).toFixed(1)+')');
rise($('pp6'),p(u,TM.magnifier+3.8,TM.magnifier+4.3));
rise($('cd1'),p(u,TM.sentence_card,TM.sentence_card+.5)); rise($('cd2'),p(u,TM.spark,TM.spark+.5));
const lk=p(u,TM.spark+.3,TM.spark+1.1); $('frd').setAttribute('transform','rotate('+(-12*lk).toFixed(2)+' 1380 606)');
$('spk').setAttribute('opacity',(lk*(.5+.5*Math.abs(Math.sin(t*4)))).toFixed(2));

rise($('p0'),p(u,TM.your_product,TM.your_product+.5)); rise($('p1'),p(u,TM.notepad,TM.notepad+.5));
PL.forEach((l,i)=>{const k=p(u,TM.notepad+.8+i*.8,TM.notepad+1.6+i*.8); l[0].setAttribute('d','M710 '+l[2]+'h'+(l[1]*k).toFixed(1)); l[0].setAttribute('opacity',k>0?1:0)});
rise($('p2'),p(u,TM.pencil_edit,TM.pencil_edit+.5));
$('sstk').setAttribute('x2',(1216+108*p(u,TM.pencil_edit+.6,TM.pencil_edit+1.2)).toFixed(1));
const pk=p(u,TM.pencil_edit+1,TM.pencil_edit+3); $('pen3').setAttribute('transform','translate('+(1200+140*pk).toFixed(1)+' '+(560-14*Math.abs(Math.sin(pk*12))).toFixed(1)+')');
$('cube3').style.fill=u>=TM.pencil_edit+2?'var(--gain)':'var(--stage)';
rise($('rep7'),p(u,TM.pencil_edit+3,TM.pencil_edit+3.5));

rise($('qa'),p(u,TM.question_mark,TM.question_mark+.5)); rise($('qb'),p(u,TM.question_mark+.4,TM.question_mark+.9)); rise($('qc'),p(u,TM.question_mark+.8,TM.question_mark+1.3));
rise($('qbub'),p(u,TM.question_mark+1.3,TM.question_mark+1.9));