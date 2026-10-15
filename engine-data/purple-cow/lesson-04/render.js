const B=TM.brown_cow;
  COW.forEach((g,i)=>rise(g,p(u,B+i*.15,B+i*.15+.5)));
  BDG.forEach((g,i)=>rise(g,p(u,B+6.6+i*.15,B+7+i*.15)));
  $('herd').setAttribute('opacity',(1-.55*p(u,B+8,B+9.5)).toFixed(2));
  rise($('ig'),p(u,B+8,B+8.5));

  rise($('scl'),p(u,TM.scale,TM.scale+.5)); rise($('arc'),p(u,TM.scale+5.4,TM.scale+5.9));
  rise($('qcard'),p(u,TM.quote_card,TM.quote_card+.5)); rise($('bx0'),p(u,TM.quote_card+4.2,TM.quote_card+4.7));
  CMP.forEach((g,i)=>rise(g,p(u,TM.quote_card+4.6+i*.3,TM.quote_card+4.9+i*.3)));
  rise($('bx1'),p(u,TM.quote_card+6.7,TM.quote_card+7.2));

  const yw=p(u,TM.yawn,TM.yawn+1);
  rise($('shp'),p(u,TM.shopper,TM.shopper+.5)); rise($('lst'),p(u,TM.shopper+3.7,TM.shopper+4.2));
  CK.forEach((c,i)=>rise(c,p(u,TM.checkmarks+i*.8,TM.checkmarks+i*.8+.4)));
  rise($('tst'),p(u,TM.checkmarks+4.2,TM.checkmarks+4.7));
  $('toast').setAttribute('y',(480-90*p(u,TM.checkmarks+5,TM.checkmarks+5.5)).toFixed(1));
  $('lsti').setAttribute('opacity',(1-.55*yw).toFixed(2)); $('tsti').setAttribute('opacity',(1-.55*yw).toFixed(2));
  rise($('zz'),yw*(.7+.3*Math.sin(t*2))); rise($('bg2'),p(u,TM.yawn+.4,TM.yawn+.9));

  rise($('shelves'),p(u,TM.paint_aisle,TM.paint_aisle+.5));
  CAN.forEach((c,i)=>{const a=TM.metal_cans+i*.08;rise(c[0],p(u,a,a+.4));c[1].setAttribute('opacity',p(u,TM.metal_cans+5.4+i*.05,TM.metal_cans+5.8+i*.05))});
  $('cans').setAttribute('opacity',(1-.25*p(u,TM.metal_cans+9.2,TM.metal_cans+10)).toFixed(2));
  rise($('nr'),p(u,TM.metal_cans+9.2,TM.metal_cans+9.7));

  const S=TM.screwdriver,pr=p(u,S+.8,S+2)*(1+.15*Math.sin(t*3)*(u>S+2?1:0));
  rise($('bigcan'),p(u,S-.2,S+.3)); rise($('scr'),p(u,S+.4,S+.8));
  $('scri').setAttribute('transform','translate(620 406) rotate('+(-(25+15*pr)).toFixed(1)+')');
  $('lid').setAttribute('transform','translate(0 '+(-14*pr).toFixed(1)+')');
  DR.forEach(([q,e],i)=>{const k=p(u,TM.drips+i*.4,TM.drips+i*.4+2);const y=q[3]+(q[4]-q[3])*k;
    e.setAttribute('d','M'+q[0]+' '+q[1]+'Q'+q[2]+' '+(q[1]+8)+' '+q[2]+' '+q[3]+'V'+y.toFixed(0));e.setAttribute('opacity',k>0?1:0)});
  $('pud1').setAttribute('rx',(90*p(u,TM.drips+1.8,TM.drips+3.2)).toFixed(1));
  $('pud0').setAttribute('rx',(70*p(u,TM.drips+2.2,TM.drips+3.6)).toFixed(1));
  rise($('h0'),p(u,S+.4,S+.9)); rise($('h1'),p(u,TM.drips,TM.drips+.5)); rise($('acc'),p(u,TM.drips+4.5,TM.drips+5.1));

  rise($('old'),p(u,TM.dutch_boy,TM.dutch_boy+.5)); rise($('arr'),p(u,TM.dutch_boy+.6,TM.dutch_boy+1.1));
  rise($('jug'),p(u,TM.plastic_jug,TM.plastic_jug+.6));
  [0,1,2].forEach(i=>{const a=TM.plastic_jug+1.5+i*1.2;rise($('cl'+i),p(u,a,a+.4))});
  rise($('store'),p(u,TM.store_shelf,TM.store_shelf+.5));
  BUB.forEach((g,i)=>rise(g,p(u,TM.store_shelf+.6+i*.3,TM.store_shelf+1+i*.3)));
  rise($('still'),p(u,TM.store_shelf+6.6,TM.store_shelf+7.1)); rise($('made'),p(u,TM.store_shelf+9.6,TM.store_shelf+10.1));

  rise($('lad'),p(u,TM.ladder,TM.ladder+.5)); rise($('stl'),p(u,TM.ladder+.6,TM.ladder+1.1)); rise($('topl'),p(u,TM.ladder+1.4,TM.ladder+1.9));
  CRW.forEach((g,i)=>{const a=TM.ladder+4.2+i*.04;rise(g,p(u,a,a+.4))});
  rise($('youG'),p(u,TM.crowd,TM.crowd+.5)); rise($('nolook'),p(u,TM.crowd+.6,TM.crowd+1.1));

  rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
  [0,1,2].forEach(i=>{const a=TM.notebook+3.4+i*1.2;rise($('it'+i),p(u,a,a+.4))});
  ARS.forEach((e,i)=>e.setAttribute('opacity',p(u,TM.lightbulb+i*.2,TM.lightbulb+i*.2+.4)));
  rise($('bulb'),p(u,TM.lightbulb,TM.lightbulb+.5));
  const rs=1+.04*Math.sin(t*3);
  $('rays').setAttribute('opacity',p(u,TM.lightbulb+.3,TM.lightbulb+.8));
  $('rays').setAttribute('transform','translate(1150 400) scale('+rs.toFixed(3)+') translate(-1150 -400)');
  rise($('chance'),p(u,TM.lightbulb+.6,TM.lightbulb+1.1));

  ['qa','qb','qc','qd'].forEach((id,i)=>rise($(id),p(u,TM.question+i*.4,TM.question+i*.4+.5)));
  rise($('endl'),p(u,TM.question+2.2,TM.question+2.7));
  rise($('endcow'),p(u,TM.question+1.8,TM.question+2.3)*(.9+.1*Math.sin(t*2)));