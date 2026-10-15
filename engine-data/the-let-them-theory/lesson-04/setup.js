const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);return mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const cloud=(g,x,y,s)=>{[[-40,10,30],[0,-8,40],[42,8,30]].forEach(c=>mk('circle',{cx:x+c[0]*s,cy:y+c[1]*s,r:c[2]*s,class:'loss'},g));mk('rect',{x:x-70*s,y:y+8*s,width:140*s,height:30*s,rx:15*s,class:'loss'},g)};
fig($('tthem'),1120,300,30,'ink'); cloud($('tcl'),1120,212,.8); fig($('tyin'),1380,300,30,'gain');
fig($('frb'),420,440,40,'loss'); fig($('yob'),1140,440,40,'ink');
const W1=['SORRY…','BUT I…','WHAT IF…'].map((s,i)=>{const g=mk('g',{},$('wds'));mk('rect',{x:1220,y:240+i*60,width:220,height:46,rx:23,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);const tx=mk('text',{x:1330,y:271+i*60,'font-size':22,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return g});
fig($('todb'),240,520,24,'ink'); fig($('adb'),500,440,40,'ink');
fig($('thb'),460,470,36,'ink'); cloud($('tcd'),548,404,.55); fig($('me3'),1140,470,36,'gain');
// feeling labels: one row centred under the 'theirs' ring (centre x=460), clear of the caption
const W3=['DISAPPOINTED','ANNOYED','UPSET'].map((s,i)=>{const tx=mk('text',{x:[336,513,637][i],y:770,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--loss)'},$('wd3'));tx.textContent=s;return tx});
for(let r=0;r<4;r++)for(let c=0;c<7;c++)if(!(r===2&&c===4))mk('circle',{cx:150+c*44,cy:345+r*45,r:9,fill:'var(--line)'},$('calg'));
const hday=mk('circle',{cx:326,cy:435,r:16,class:'gain'},$('calg'));
const PW=[30,55,80].map(r=>mk('path',{d:'M810 '+(400-r)+'a'+r+' '+r+' 0 0 1 0 '+2*r,fill:'none',stroke:'var(--loss)','stroke-width':5,'stroke-linecap':'round'},$('pwv')));
fig($('y4a'),1200,420,44,'ink'); fig($('y4b'),1200,420,44,'gain'); cloud($('gclc'),1200,268,1);
fig($('mirb'),340,440,36,'gain'); fig($('c6y'),190,410,30,'ink');
[950,1250].forEach(x=>fig($('adsb'),x,430,44,'ink'));
// challenge steps
fig($('st1f'),300,660,24,'ink'); cloud($('st1f'),340,606,.4); fig($('st2f'),720,660,24,'gain');
const at=(el,k)=>el.getPointAtLength(el.getTotalLength()*k);