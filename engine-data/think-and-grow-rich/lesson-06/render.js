$('shaft').setAttribute('height',(300*p(u,TM.pickaxe,TM.pickaxe+4)).toFixed(1));
$('pick').setAttribute('transform','translate(1220 290) rotate('+(18*Math.sin(t*5)).toFixed(1)+')');
rise($('tf0'),p(u,TM.pickaxe+4,TM.pickaxe+4.6));

const wk=p(u,TM.uncle,TM.uncle+4);
$('unc').setAttribute('transform','translate('+(200+560*wk).toFixed(1)+' '+(wk>0&&wk<1?-6*Math.abs(Math.sin(t*9)):0).toFixed(1)+')');
$('unc').setAttribute('opacity',p(u,TM.uncle,TM.uncle+.4));
rise($('west'),p(u,TM.uncle,TM.uncle+.5));
rise($('claim'),p(u,TM.claim,TM.claim+.5));
$('hole').setAttribute('height',(150*p(u,TM.claim+.5,TM.claim+2.6)).toFixed(1));
rise($('ore'),p(u,TM.claim+3,TM.claim+3.5));
rise($('mach'),p(u,TM.machinery,TM.machinery+.6));

rise($('home'),p(u,TM.hometown,TM.hometown+.5));
$('planks').setAttribute('opacity',(p(u,TM.hometown,TM.hometown+.5)*(1-p(u,TM.neighbors+4.5,TM.neighbors+5))).toFixed(2));
NB.forEach((g,i)=>rise(g,p(u,TM.neighbors+i*.3,TM.neighbors+i*.3+.4)));
rise($('bag'),p(u,TM.neighbors+.4,TM.neighbors+.9));
CO.forEach(([x,c],i)=>{const k=p(u,TM.neighbors+1+i*.4,TM.neighbors+2+i*.4);c.setAttribute('cx',(x+(820-x)*k).toFixed(1));c.setAttribute('cy',(380+95*k-90*Math.sin(Math.PI*k)).toFixed(1));c.setAttribute('opacity',k>0&&k<1?1:0)});
rise($('pair'),p(u,TM.neighbors+4.5,TM.neighbors+5));
const ck=p(u,TM.ore_cart,TM.ore_cart+2.5);
$('cart').setAttribute('transform','translate('+(1380-180*ck).toFixed(1)+' 690)');$('cart').setAttribute('opacity',p(u,TM.ore_cart,TM.ore_cart+.4));
rise($('rich'),p(u,TM.ore_cart+1,TM.ore_cart+1.6));

const tw=480+160*p(u,TM.vein,TM.vein+1.2)+360*p(u,TM.empty_rock,TM.empty_rock+3);
$('tun').setAttribute('width',tw.toFixed(1));
$('drill').setAttribute('transform','translate('+(120+tw+(u<TM.empty_rock+3.4?2*Math.sin(t*30):0)).toFixed(1)+' 430)');
rise($('gone'),p(u,TM.vein+1.7,TM.vein+2.2));rise($('bare'),p(u,TM.empty_rock+.6,TM.empty_rock+1.1));rise($('quit'),p(u,TM.empty_rock+3.4,TM.empty_rock+3.9));
$('mc').setAttribute('transform','translate('+(260+440*p(u,TM.junk_man+.6,TM.junk_man+2.6)).toFixed(1)+' 788)');$('mc').setAttribute('opacity',p(u,TM.junk_man,TM.junk_man+.4));
rise($('jm'),p(u,TM.junk_man+.3,TM.junk_man+.8));rise($('sold'),p(u,TM.junk_man+1,TM.junk_man+1.6));

rise($('eng'),p(u,TM.engineer,TM.engineer+.5));rise($('flt'),p(u,TM.fault_line,TM.fault_line+.5));
$('shf').setAttribute('opacity',p(u,TM.fault_line+1.5,TM.fault_line+2.2));
rise($('tf'),p(u,TM.three_feet,TM.three_feet+.5));rise($('mil'),p(u,TM.millions,TM.millions+.6));
CN.forEach(([c,d])=>c.setAttribute('opacity',u>=TM.millions+.4+d?1:0));

rise($('dby'),p(u,TM.darby,TM.darby+.5));rise($('th'),p(u,TM.darby+1,TM.darby+1.5));rise($('pol'),p(u,TM.insurance,TM.insurance+.5));
CU.forEach(([g,b],i)=>{const a=TM.insurance+2.6+i*.6;rise(g,p(u,TM.insurance+.4+i*.2,TM.insurance+.8+i*.2));b.setAttribute('opacity',(p(u,a,a+.3)*(1-.65*p(u,a+.8,a+1.2))).toFixed(2))});
rise($('every'),p(u,TM.insurance+3,TM.insurance+3.6));
const gk=p(u,TM.trophy,TM.trophy+.9);
$('goL').setAttribute('x2',(960+232*gk).toFixed(1));$('goL').setAttribute('opacity',gk>0?1:0);
$('goH').setAttribute('opacity',p(u,TM.trophy+.8,TM.trophy+1));
rise($('goT'),p(u,TM.trophy+.3,TM.trophy+.8));
rise($('tro'),p(u,TM.trophy+.6,TM.trophy+1.2));

rise($('bar'),p(u,TM.defeat,TM.defeat+.5));rise($('win'),p(u,TM.crowd,TM.crowd+.5));
const late=u>=TM.crowd+7.4;
DT.forEach(([c,sx,fx,fy,k,w],i)=>{const q=p(u,TM.crowd+.5+i*.3,TM.crowd+3.5+i*.3),s=k*q,f=Math.floor(s),fr=s-f;
  const y=766-80*Math.min(k,f+(fr>.6?(fr-.6)/.4:0))-(766-80*k-fy)*q;
  c.setAttribute('cx',(sx+(fx-sx)*q).toFixed(1));c.setAttribute('cy',y.toFixed(1));c.setAttribute('opacity',p(u,TM.crowd,TM.crowd+.5));c.setAttribute('class',late?(w?'gain':'loss'):'ink')});
rise($('most'),p(u,TM.crowd+7.4,TM.crowd+8));

rise($('sw'),p(u,TM.stopwatch,TM.stopwatch+.5));$('hand').setAttribute('transform','rotate('+((t*180)%360).toFixed(1)+' 260 430)');
rise($('rA'),p(u,TM.two_paths,TM.two_paths+.4));rise($('rB'),p(u,TM.two_paths+5.8,TM.two_paths+6.2));
const BT=[[0,.6],[.6,3],[5.8,8.8],[8.8,9.3]];
BR.forEach(([r,tx,w],i)=>{const k=p(u,TM.two_paths+BT[i][0],TM.two_paths+BT[i][1]);r.setAttribute('width',(w*k).toFixed(1));r.setAttribute('opacity',k>0?1:0);tx.setAttribute('opacity',k>.5?1:0)});
rise($('anc'),p(u,TM.anchor,TM.anchor+.5));rise($('firm'),p(u,TM.anchor+.5,TM.anchor+1.1));

rise($('qa'),p(u,TM.shovel,TM.shovel+.5));rise($('qb'),p(u,TM.shovel+.4,TM.shovel+.9));rise($('qc'),p(u,TM.shovel+3.8,TM.shovel+4.3));rise($('ql'),p(u,TM.shovel+4.4,TM.shovel+4.9));
$('hl8').setAttribute('height',(40+80*p(u,TM.shovel+4,TM.shovel+6.5)).toFixed(1));
$('shv').setAttribute('transform','translate(0 '+(24*Math.abs(Math.sin(t*3))).toFixed(1)+')');
$('nug').setAttribute('r',(20+3*Math.sin(t*4)).toFixed(1));