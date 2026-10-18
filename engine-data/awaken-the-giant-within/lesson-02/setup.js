const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v-${r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:cls},g)};
const scale=(g,cx,cy,arm,hang,labs,fs)=>{const bm=mk('g',{},g);mk('path',{d:`M${cx-arm} ${cy}H${cx+arm}`,class:'s-ink','stroke-width':8,'stroke-linecap':'round'},bm);mk('circle',{cx:cx,cy:cy,r:12,class:'ink'},g);
  const pans=[0,1].map(i=>{const pg=mk('g',{},g);mk('path',{d:`M0 0V${hang}`,class:'s-ink','stroke-width':4},pg);mk('path',{d:`M-60 ${hang}a60 34 0 0 0 120 0z`,class:i?'gain':'loss'},pg);
    const tx=mk('text',{x:0,y:hang+34+fs+26,'font-size':fs,'text-anchor':'middle',class:'m',style:i?'fill:var(--gain)':'fill:var(--loss)'},pg);tx.textContent=labs[i];return [pg,tx]});
  return {set(a){bm.setAttribute('transform',`rotate(${a.toFixed(2)} ${cx} ${cy})`);const r=a*Math.PI/180;pans.forEach(([pg],i)=>{const s=i?1:-1;pg.setAttribute('transform',`translate(${(cx+s*arm*Math.cos(r)).toFixed(1)} ${(cy+s*arm*Math.sin(r)).toFixed(1)})`)})},lab:pans.map(q=>q[1])}};
const S0=scale($('tscB'),1270,320,130,140,['PAIN','PLEASURE'],22);
const S7=scale($('balB'),1160,400,220,150,['OLD HABIT','NEW HABIT'],20);
for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);mk('path',{d:`M${1240+88*c} ${440+88*s}L${1240+118*c} ${440+118*s}`,class:'s-gain','stroke-width':8,'stroke-linecap':'round'},$('rays'))}
fig($('pr'),800,470,34,'ink');
[300,370,440].forEach(x=>fig($('twl'),x,440,24,'loss'));[1160,1230,1300].forEach(x=>fig($('twr'),x,440,24,'gain'));
const CHN=[860,920,980,1040].map((x,i)=>mk('ellipse',{cx:x,cy:450,rx:36,ry:i%2?12:20,fill:'none',class:'s-ink','stroke-width':7},$('chn')));
const CG=[];for(let i=0;i<9;i++)CG.push(mk('rect',{x:1196+(i%3)*40,y:374+Math.floor(i/3)*30,width:28,height:22,rx:4,fill:'var(--line)'},$('calg')));
fig($('mp'),230,440,30,'ink');fig($('rf'),440,450,26,'gain');
const WT=['HEALTH','MONEY','RELATIONSHIPS','PRIDE'].map((s,i)=>{const y=760-i*84,g=mk('g',{},$('wts'));
  mk('path',{d:`M800 ${y-72}h360l20 72H780z`,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5,'stroke-linejoin':'round'},g);
  const tx=mk('text',{x:980,y:y-26,'font-size':26,'text-anchor':'middle',class:'m',style:'fill:var(--ink)'},g);tx.textContent=s;return g});
for(let i=0;i<4;i++){const a=i*Math.PI/2+.4,c=Math.cos(a),s=Math.sin(a);mk('path',{d:`M${640+100*c} ${310+100*s}L${640+125*c} ${310+125*s}`,class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('spk'))}
const PL=(()=>{try{return $('pthG').getTotalLength()||900}catch(e){return 900}})();$('pthG').setAttribute('stroke-dasharray',PL);
const NB=[640,675,710,755,790].map((y,i)=>mk('path',{d:`M1232 ${y}H1388`,stroke:i<3?'var(--loss)':'var(--gain)','stroke-width':8,'stroke-linecap':'round','stroke-dasharray':156},$('nbl')));