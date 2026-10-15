const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
const ring=(g,cx,cy,r1,r2,n)=>{for(let i=0;i<n;i++){const a=i*2*Math.PI/n;mk('path',{d:'M'+(cx+r1*Math.cos(a)).toFixed(1)+' '+(cy+r1*Math.sin(a)).toFixed(1)+'L'+(cx+r2*Math.cos(a)).toFixed(1)+' '+(cy+r2*Math.sin(a)).toFixed(1),stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round'},g)}};
ring($('rays'),1310,380,128,158,10);
ring($('krays'),640,400,78,100,8);
const ARW=[420,480,540].map(y=>mk('path',{d:'M600 '+y+'h130M600 '+y+'l24-16M600 '+y+'l24 16',fill:'none',stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round'},$('atk')));
const AUD=[];for(let r=0;r<3;r++)for(let i=0;i<9;i++){const x=360+i*110+(r%2)*55,y=550+r*80,g=mk('g',{},$('aud'));fig(g,x,y,18,'ink');
  const c=mk('path',{d:'M'+(x-26)+' '+(y-26)+'l-10-10M'+(x+26)+' '+(y-26)+'l10-10M'+x+' '+(y-32)+'v-12',stroke:'var(--gain)','stroke-width':4,'stroke-linecap':'round'},g);AUD.push([g,c,y])}
const CO=[];for(let i=0;i<10;i++){const x=1070+(i%5)*40,y=636-Math.floor(i/5)*42;CO.push([mk('circle',{cx:x,cy:y,r:19,fill:'var(--gain)',stroke:'var(--ink)','stroke-width':3},$('coins')),y])}