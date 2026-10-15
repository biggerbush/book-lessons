const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const ROWS=[];for(let i=0;i<80;i++){let d='';const y=250+i*7;for(let j=0;j<52;j++)d+='M'+(1040+j*7)+' '+y+'h5v5h-5z';ROWS.push(mk('path',{d:d,fill:'var(--line)'},$('rows')))}
let sg='';for(let i=1;i<12;i++)sg+='M160 '+(505+i*25)+'h220';for(let j=1;j<9;j++)sg+='M'+(160+j*24.4).toFixed(1)+' 505v300';
mk('path',{d:sg,class:'s-line','stroke-width':2},$('sheetg'));
fig($('auth'),220,320,34,'ink');
const IT=['See Japan','Learn the piano','Write a book','Start a business','Learn Spanish','Run a marathon','Build a cabin','Read the classics','Master cooking','Sail an ocean'].map((s,i)=>{const y=340+i*56,g=mk('g',{},$('items'));
  mk('rect',{x:730,y:y-26,width:28,height:28,rx:6,fill:'none',stroke:'var(--ink)','stroke-width':4},g);
  const tx=mk('text',{x:780,y:y,'font-size':30,class:'d5'},g);tx.textContent=s;return g});
fig($('shr'),600,330,36,'ink');
fig($('phil'),220,300,30,'ink');
const SQ=[];for(let y=210;y<760;y+=20)for(let x=1060;x<1340;x+=20){const cx=x+10,cy=y+10;let ok=(cx-1200)**2+(cy-280)**2<=6400;
  if(cy>380){const dx=Math.max(0,Math.abs(cx-1200)-40);ok=ok||cy>=480||dx*dx+(480-cy)**2<=10000}
  if(ok)SQ.push([mk('rect',{x:x+2,y:y+2,width:16,height:16,rx:3},$('sq')),(760-cy)/380])}
fig($('car'),300,330,34,'ink');
for(let i=0;i<9;i++){const a=Math.PI+i*Math.PI/8;mk('path',{d:'M'+(800+150*Math.cos(a)).toFixed(1)+' '+(150*Math.sin(a)).toFixed(1)+'L'+(800+210*Math.cos(a)).toFixed(1)+' '+(210*Math.sin(a)).toFixed(1),class:'s-gain','stroke-width':8,'stroke-linecap':'round'},$('rays'))}
const WK=[];for(let i=0;i<12;i++)WK.push(mk('rect',{x:140+i*110,y:650,width:70,height:70,rx:10,'stroke-width':5,stroke:'var(--ink)'},$('wk')));
for(let r=0;r<10;r++)for(let c=0;c<16;c++)if(!(r===5&&c===9))mk('rect',{x:1200+c*16,y:200+r*16,width:12,height:12,fill:'var(--line)'},$('mini'));
$('mini').appendChild($('ring'));$('mini').appendChild($('hot'));