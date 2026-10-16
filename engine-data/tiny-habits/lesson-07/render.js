grow($('tpl'),1300,470,.15+1.85*p(u,TM.seed+.2,TM.seed+3),3*Math.sin(t*1.5));

grow($('sp1'),300,640,.3+1.9*p(u,TM.sprout,TM.sprout+2.5),2*Math.sin(t*1.3));
rise($('sub1'),p(u,TM.sprout+2.2,TM.sprout+2.7));
$('arr1').setAttribute('opacity',p(u,TM.two_paths,TM.two_paths+.5));
rise($('lbt'),p(u,TM.two_paths+.8,TM.two_paths+1.3));
TD.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.two_paths+1+i*.25,TM.two_paths+1.3+i*.25)));
rise($('lbb'),p(u,TM.two_paths+3,TM.two_paths+3.5));
BD.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.two_paths+3.3+i*.4,TM.two_paths+3.7+i*.4)));
rise($('nat'),p(u,TM.two_paths+6.6,TM.two_paths+7.2));

rise($('card'),p(u,TM.bathroom,TM.bathroom+.5)); rise($('rc2'),p(u,TM.bathroom+2.5,TM.bathroom+3));
rise($('fig'),p(u,TM.pushup,TM.pushup+.5)); rise($('x2'),p(u,TM.pushup+.4,TM.pushup+.9));
const ph=u>=TM.pushup?.5-.5*Math.cos(t*3.2):0, ys=500+50*ph, strong=u>=TM.strong_arms;
$('phd').setAttribute('cx',918); $('phd').setAttribute('cy',(ys-18).toFixed(1)); $('phd').setAttribute('class',strong?'gain':'ink');
$('pbody').setAttribute('d','M960 '+ys.toFixed(1)+'L1290 604'); $('pbody').setAttribute('class',strong?'s-gain':'s-ink');
$('parm').setAttribute('d','M960 '+ys.toFixed(1)+'L992 '+((ys+612)/2).toFixed(1)+'L960 612'); $('parm').setAttribute('class',strong?'s-gain':'s-ink');
rise($('blbl'),p(u,TM.strong_arms,TM.strong_arms+.5));
BR.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.strong_arms+.4+i*.15,TM.strong_arms+.7+i*.15)));

const rv=p(u,TM.ripple,TM.ripple+.6);
RG.forEach((c,i)=>{const r=60+((t*50+i*52.5)%210);c.setAttribute('r',r.toFixed(1));c.setAttribute('opacity',(rv*(1-(r-60)/210)).toFixed(2))});
rise($('core'),rv); rise($('ican'),p(u,TM.ripple+1.4,TM.ripple+2));
BL.forEach((g,i)=>rise(g,p(u,TM.stack+i*1.1,TM.stack+i*1.1+.5)));

rise($('kng'),p(u,TM.knot+2.5,TM.knot+3.1));
const pl=p(u,TM.pull_hard,TM.pull_hard+.8)-p(u,TM.strand,TM.strand+.8), st=p(u,TM.strand+.5,TM.strand+2);
around($('kn'),800,470,1-.3*pl+.12*st);
$('pullL').setAttribute('transform','translate('+(-70*pl).toFixed(1)+' 0)'); $('pullR').setAttribute('transform','translate('+(70*pl).toFixed(1)+' 0)');
rise($('tight'),pl);
$('loose').setAttribute('stroke-dashoffset',(800*(1-st)).toFixed(1)); $('loose').setAttribute('opacity',st>0?1:0);
rise($('easy'),p(u,TM.strand+1,TM.strand+1.6));

rise($('pots5'),p(u,TM.seedlings,TM.seedlings+.5));
SD.forEach((g,i)=>grow(g,PX[i],640,.2+1.2*p(u,TM.seedlings+3+i*.6,TM.seedlings+4+i*.6),2*Math.sin(t*1.4+i)));
rise($('lbl5'),p(u,TM.seedlings+3,TM.seedlings+3.5)); rise($('old5'),p(u,TM.seedlings+3.5,TM.seedlings+4));
rise($('tro'),p(u,TM.trophy,TM.trophy+.5)); $('arr5').setAttribute('opacity',p(u,TM.trophy+1.5,TM.trophy+2));

rise($('bed'),p(u,TM.phone_bed,TM.phone_bed+.5));
rise($('ph6'),p(u,TM.phone_bed+.3,TM.phone_bed+.8)*(1-p(u,TM.charger,TM.charger+.6)));
$('glw').setAttribute('opacity',(.5+.5*Math.sin(t*5)).toFixed(2));
rise($('zz'),p(u,TM.charger+1,TM.charger+1.6)); rise($('fm'),p(u,TM.phone_bed+3.8,TM.phone_bed+4.4));
rise($('cd0'),p(u,TM.charger,TM.charger+.5)); rise($('cd1'),p(u,TM.locked_box,TM.locked_box+.5)); rise($('cd2'),p(u,TM.dial_down,TM.dial_down+.5));
$('ndl').setAttribute('transform','rotate('+(50-100*p(u,TM.dial_down+.5,TM.dial_down+1.8)).toFixed(1)+' 820 650)');

const sk=p(u,TM.open_book,TM.open_book+1);
rise($('pb'),p(u,TM.swap_arrows,TM.swap_arrows+.5)); rise($('oc'),p(u,TM.swap_arrows,TM.swap_arrows+.5));
$('ocm').setAttribute('transform','translate(0 '+(240*sk).toFixed(1)+')'); $('ocm').setAttribute('opacity',(1-.65*sk).toFixed(2));
rise($('swp'),p(u,TM.swap_arrows+.5,TM.swap_arrows+1)); rise($('nc'),p(u,TM.swap_arrows+3,TM.swap_arrows+3.5));
$('ncm').setAttribute('transform','translate(0 '+(240*(1-sk)).toFixed(1)+')');
rise($('bk'),p(u,TM.open_book,TM.open_book+.5)); rise($('same'),p(u,TM.open_book+1.5,TM.open_book+2.1));

rise($('qa'),p(u,TM.mirror,TM.mirror+.5)); rise($('qb'),p(u,TM.mirror+3.4,TM.mirror+3.9)); rise($('qc'),p(u,TM.mirror+4.4,TM.mirror+4.9));
rise($('g8'),p(u,TM.mirror+1,TM.mirror+1.6));
const gp=p(u,TM.mirror+5.5,TM.mirror+7); around($('pr8'),1300,740,1+.5*gp); $('pr8').setAttribute('opacity',(1-gp).toFixed(2));
$('k8').setAttribute('transform','rotate('+(4*Math.sin(t*1.2)).toFixed(2)+' 1300 740)');