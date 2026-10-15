R('mirFig',u,TM.title_mirror,.8);
const sp=.6+.4*Math.sin(t*2.4);$('spk').setAttribute('transform','translate(1450 250) scale('+sp.toFixed(3)+')');$('spk').setAttribute('opacity',p(u,TM.title_mirror+.6,TM.title_mirror+1.2));

P1.forEach((g,i)=>{const a=i<2?TM.brand_label+i*.5:TM.office_worker;R(g,u,a)});
R('ego',u,TM.office_worker+3.4);$('egoS').setAttribute('x2',(136+168*p(u,TM.office_worker+4,TM.office_worker+4.6)).toFixed(1));
R('known',u,TM.office_worker+5.6);R('lap',u,TM.laptop_glow);
$('glow').setAttribute('r',(200+12*Math.sin(t*2)).toFixed(1));$('glow').setAttribute('opacity',p(u,TM.laptop_glow+.4,TM.laptop_glow+1.2));

R('shp',u,TM.shopper);R('corp',u,TM.shopper+1.8);R('sel',u,TM.shopper+2.6);
DR('armA',p(u,TM.handshake,TM.handshake+.8));DR('armB',p(u,TM.handshake,TM.handshake+.8));
R('chk',u,TM.handshake+.8);R('easy',u,TM.handshake+3.4,.6);

R('btl',u,TM.wine_bottle);R('cam',u,TM.video_camera);R('tv',u,TM.video_camera+.6);
$('rec').setAttribute('opacity',Math.sin(t*5)>0?1:.2);
EP.forEach((e,i)=>e.setAttribute('fill',u>=TM.video_camera+6.2+i*.5?'var(--gain)':'var(--line)'));
CR.forEach((g,i)=>{R(g,u,TM.video_camera+6.2+i*.12,.3);g.setAttribute('fill',u>=TM.viewer_crowd+i*.05?'var(--gain)':'var(--ink)')});
R('crl',u,TM.video_camera+6.2);R('trl',u,TM.viewer_crowd);

R('gry',u,TM.shop_door);R('shop',u,TM.shop_door+.3);R('tar',u,TM.shop_door+.8);
$('door').style.fill=u>=TM.shop_door+1.4?'var(--gain)':'var(--stage)';
R('bub',u,TM.shop_door+3.4);
const sb=u>=TM.shop_door+6.4;$('sign').style.fill=sb?'var(--gain)':'var(--stage)';$('signT').style.fill=sb?'var(--on-gain)':'';
R('chart',u,TM.shop_door+3.4);
BR.forEach((b,i)=>{const h=(50+i*55)*p(u,TM.shop_door+3.8+i*.4,TM.shop_door+4.6+i*.4)+60*p(u,TM.sales_arrow,TM.sales_arrow+1.2)*(i/4);b.setAttribute('height',h.toFixed(1));b.setAttribute('y',(640-h).toFixed(1))});
const sk=p(u,TM.sales_arrow,TM.sales_arrow+1.2);DR('sarr',sk);$('sdot').setAttribute('opacity',sk>.95?1:0);

R('suit',u,TM.suitcase);$('jobIc').setAttribute('opacity',(1-.8*p(u,TM.suitcase+2.2,TM.suitcase+3)).toFixed(2));
CH5.forEach((g,i)=>R(g,u,i<2?TM.suitcase+2.6+i*.4:TM.suitcase+7.6+(i-2)*.4));
R('darr',u,TM.open_doors);
LV.forEach((l,i)=>{R('dr'+i,u,TM.open_doors+i*.4);const x=960+i*300,k=p(u,TM.open_doors+.5+i*.6,TM.open_doors+1.5+i*.6),w=180*(1-.65*k);
  l.setAttribute('points',x+',320 '+(x+w).toFixed(1)+','+(320+30*k).toFixed(1)+' '+(x+w).toFixed(1)+','+(620-30*k).toFixed(1)+' '+x+',620')});

R('tag',u,TM.name_tag);R('dom',u,TM.domain_badge);R('garr',u,TM.domain_badge+2);
TL.forEach((g,i)=>R(g,u,TM.domain_badge+2+i*.4));CK.forEach((c,i)=>R(c,u,TM.username_grid+i*.15,.3));R('find',u,TM.username_grid+.6,.6);

FP.forEach((g,i)=>R(g,u,TM.footprints+i*.4,.3));
$('cons').setAttribute('opacity',p(u,TM.footprints+5.4,TM.footprints+6.2));R('consL',u,TM.footprints+5.4);
R('scale',u,TM.scale_balance);R('asset',u,TM.scale_balance+.6);
const bk=p(u,TM.scale_balance+4.2,TM.scale_balance+5.2),ba=.06*Math.sin(t*1.5)*(1-bk)-.16*bk,cx=220*Math.cos(ba),cy=220*Math.sin(ba);
$('beam').setAttribute('x1',(1170-cx).toFixed(1));$('beam').setAttribute('y1',(330-cy).toFixed(1));$('beam').setAttribute('x2',(1170+cx).toFixed(1));$('beam').setAttribute('y2',(330+cy).toFixed(1));
PN[0].setAttribute('transform','translate('+(1170-cx).toFixed(1)+' '+(330-cy).toFixed(1)+')');PN[1].setAttribute('transform','translate('+(1170+cx).toFixed(1)+' '+(330+cy).toFixed(1)+')');
R('ask',u,TM.scale_balance+4.2,.6);

// closing: browser card with search, results, stranger's eye
R('brw',u,TM.search_bar);const nm='Your Name';$('stxt').textContent=nm.slice(0,Math.round(nm.length*p(u,TM.search_bar+.3,TM.search_bar+1.5)))+(Math.sin(t*6)>0?'|':'');
R('qa',u,TM.search_bar+.4);R('qb',u,TM.search_bar+.8);R('qc',u,TM.search_bar+1.2);
RS.forEach((r,i)=>R(r[0],u,TM.search_bar+1.6+i*.35,.4));
R('eye',u,TM.search_bar+2.6);$('pup').setAttribute('cx',(1020+5*Math.sin(t*1.5)).toFixed(1));
const cl8=u>=TM.search_bar+5.4;RS[0][1].setAttribute('fill',cl8?'var(--gain)':'var(--line)');RS[0][2].setAttribute('fill',cl8?'var(--gain)':'var(--line)');
R('rck',u,TM.search_bar+5.6,.4);R('qm',u,TM.search_bar+5.4,.6);