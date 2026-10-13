const e=TM.split_city;
  rise($('city'),p(u,e,e+.6)); $('crash').setAttribute('stroke-dashoffset',(430*(1-p(u,e+.3,e+1.8))).toFixed(1)); rise($('dis'),p(u,e+.8,e+1.3));
  const sb=p(u,e+3.4,e+4); BL.forEach((b,i)=>{if(i>2)b.style.fill=sb>.5?'var(--gain)':'var(--stage)'}); rise($('sale'),sb);

  rise($('dice'),p(u,TM.dice,TM.dice+.5)); $('nolk').setAttribute('stroke-dashoffset',(420*(1-p(u,TM.dice+3.8,TM.dice+4.4))).toFixed(1));
  rise($('bulb'),p(u,TM.light_bulb,TM.light_bulb+.5)); const lb=p(u,TM.light_bulb+1,TM.light_bulb+1.6);
  $('bulbC').style.fill=lb>.5?'var(--gain)':'var(--stage)'; $('rays').setAttribute('opacity',(lb*(.7+.3*Math.sin(t*4))).toFixed(2));
  rise($('vault'),p(u,TM.brain_vault,TM.brain_vault+.5)); rise($('quote'),p(u,TM.brain_vault+.8,TM.brain_vault+1.4));

  CD.forEach((g,i)=>{const a=TM.toolbox+i*1.2; rise(g,p(u,a,a+.5))});
  BK.forEach((g,i)=>{const a=TM.book_stack+i*.8; rise(g,p(u,a,a+.5))});
  rise($('blind'),p(u,TM.blind_fold,TM.blind_fold+.5));
  $('deal').setAttribute('opacity',(p(u,TM.blind_fold+1,TM.blind_fold+1.6)*(.3+.15*Math.sin(t*2))).toFixed(2));

  rise($('town'),p(u,TM.desert_town,TM.desert_town+.6));
  const pt=TM.price_tag; HS.forEach(h=>h.setAttribute('stroke',u>=pt?'var(--loss)':'var(--ink)'));
  rise($('tag'),p(u,pt,pt+.5)); $('pstrike').setAttribute('x2',(896+280*p(u,pt+.4,pt+.9)).toFixed(1));
  $('pval').textContent='$'+(Math.round((100000-25000*p(u,pt+.6,pt+2))/500)*500).toLocaleString('en-US');
  const wc=TM.worried_crowd; rise($('crowd3'),p(u,wc,wc+.5)); CR.setAttribute('transform','translate('+(160*p(u,wc+.5,wc+2.5)).toFixed(1)+' 0)');

  rise($('ct'),p(u,TM.courthouse,TM.courthouse+.5));
  [TM.cheap_house,TM.sold_sign,TM.handshake].forEach((a,i)=>AR[i].setAttribute('opacity',p(u,a-.4,a)));
  rise($('ch'),p(u,TM.cheap_house,TM.cheap_house+.5)); rise($('sold'),p(u,TM.sold_sign,TM.sold_sign+.5)); rise($('hs'),p(u,TM.handshake,TM.handshake+.5));

  const tp=TM.two_people; rise($('chart5'),p(u,tp,tp+.5)); rise($('nb'),p(u,tp+.4,tp+.9)); rise($('him'),p(u,tp+.8,tp+1.3));
  rise($('cloud'),p(u,TM.fear_cloud,TM.fear_cloud+.5)); rise($('ice'),p(u,TM.fear_cloud+3,TM.fear_cloud+3.5));
  rise($('map5'),p(u,TM.treasure_map,TM.treasure_map+.6));

  const od=TM.open_door,sw=TM.stopwatch; rise($('door'),p(u,od,od+.5));
  const o=(.5-.5*Math.cos(t*1.6))*p(u,od,od+.5)*(1-p(u,sw+1,sw+2)); $('dpanel').setAttribute('width',(220*(1-.8*o)).toFixed(1));
  rise($('ready'),p(u,TM.wallet_ready,TM.wallet_ready+.5)); rise($('watch'),p(u,sw,sw+.5));
  $('whand').setAttribute('transform','rotate('+(360*p(u,sw,sw+3)).toFixed(1)+' 1200 460)');
  TG.forEach((g,i)=>g.setAttribute('opacity',1-p(u,sw+.6+i*.7,sw+1.1+i*.7))); rise($('gone'),p(u,sw+1.5,sw+2.1));

  rise($('news'),p(u,TM.newspaper,TM.newspaper+.5)); rise($('note'),p(u,TM.notebook,TM.notebook+.5));
  RW.forEach((g,i)=>g.setAttribute('opacity',p(u,TM.notebook+.4+i*.8,TM.notebook+.8+i*.8)));
  rise($('attn'),p(u,TM.notebook+5.8,TM.notebook+6.4));
  const mg=TM.magnifier,f=p(u,mg+.8,mg+1.8); rise($('mag'),p(u,mg,mg+.5));
  $('lens7').setAttribute('transform','translate('+(1230+150*Math.cos(t*.9)*(1-f)).toFixed(1)+' '+(360+110*f+60*Math.sin(t*1.3)*(1-f)).toFixed(1)+')');
  MH[4].setAttribute('fill',f>.9?'var(--gain)':'none'); MH[4].setAttribute('stroke',f>.9?'var(--gain)':'var(--muted)');

  const q=TM.question_mark; rise($('qw'),p(u,q,q+.5)); rise($('qa'),p(u,q,q+.5)); rise($('qm'),p(u,q+.3,q+.8));
  rise($('qb'),p(u,q+.6,q+1.1)); rise($('qc'),p(u,q+1.2,q+1.7)); rise($('qd'),p(u,q+6,q+6.6));