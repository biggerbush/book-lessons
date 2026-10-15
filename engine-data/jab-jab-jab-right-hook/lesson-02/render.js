const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
R('card0',TM.title_card);
const ck=p(u,TM.title_card+1.4,TM.title_card+2);CHP.forEach((c,i)=>c.setAttribute('opacity',(ck*(.35+.65*Math.abs(Math.sin(t*3+i)))).toFixed(2)));
R('pin0',TM.title_card+4.6);$('card0r').style.stroke=u>=TM.title_card+4.6?'var(--loss)':'var(--ink)';

R('gary',TM.gary);R('q1',TM.crown_quote);R('q2',TM.crown_quote+1.4);R('frame1',TM.crown_quote+4.2);
$('fitB').setAttribute('transform',`translate(${(500*(1-p(u,TM.crown_quote+4.6,TM.crown_quote+5.8))).toFixed(1)} 0)`);
R('fitT',TM.crown_quote+5.9);

R('roomL',TM.party_room);R('roomR',TM.library_room);
NT.forEach((g,i)=>g.setAttribute('transform',`translate(0 ${(8*Math.sin(t*4+i*1.7)).toFixed(1)})`));
const wg=u>=TM.library_room+4.2;$('pLr').style.stroke=wg?'var(--loss)':'var(--line)';$('pRr').style.stroke=wg?'var(--loss)':'var(--line)';
R('bx0',TM.library_room+4.2);R('bx1',TM.library_room+4.5);R('wr',TM.library_room+5);

HO.forEach((h,i)=>rise(h[0],p(u,TM.platform_row+i*.5,TM.platform_row+i*.5+.5)));
[[0,TM.facebook_icon],[2,TM.pinterest_icon]].forEach(([i,a])=>{HO[i][1].style.stroke=u>=a?'var(--gain)':'var(--ink)';R('e'+i,a+.3)});
R('mk0',TM.pinterest_icon+5.3);R('mk2',TM.pinterest_icon+5.8);R('same3',TM.pinterest_icon+6.3);

R('src4',TM.copy_button);R('btn',TM.copy_button+.3);
const cp=p(u,TM.copy_button+.8,TM.copy_button+1.8);CP.forEach((c,i)=>{const o=16*(3-i)*cp;c.setAttribute('transform',`translate(${o.toFixed(1)} ${o.toFixed(1)})`);c.setAttribute('opacity',cp.toFixed(2))});
R('arr4',TM.cut_off_tweet);R('tw',TM.cut_off_tweet+.3);R('cut',TM.cut_off_tweet+2);
R('rdr',TM.cut_off_tweet+6.6);R('lazy',TM.cut_off_tweet+7.2);

R('bg5',TM.chameleon);
const cx=250+350*p(u,TM.chameleon+1,TM.chameleon+4.5),cc=cx<440?'var(--loss)':'var(--gain)';
CM.setAttribute('transform',`translate(${cx.toFixed(1)} ${(442+3*Math.sin(t*2)).toFixed(1)})`);CM.setAttribute('opacity',p(u,TM.chameleon+.3,TM.chameleon+.8).toFixed(2));
cB.style.fill=cc;cH.style.fill=cc;cT.style.stroke=cc;
TG.forEach((g,i)=>rise(g,p(u,TM.chameleon+5.8+i*.5,TM.chameleon+6.3+i*.5)));
R('phone',TM.native_post);$('np').style.fill=u>=TM.native_post+.6?'var(--gain)':'var(--line)';
R('nat',TM.native_post+1);R('treat',TM.native_post+1.6);

R('core',TM.story_core);$('coreC').setAttribute('r',(100+4*Math.sin(t*2.5)).toFixed(1));
R('l1',TM.short_shape);R('sh1',TM.short_shape+.3);R('l2',TM.photo_shape);R('sh2',TM.photo_shape+.3);R('loc',TM.photo_shape+5);

R('clip',TM.checklist);R('ck1',TM.checklist+.3);$('tk1').setAttribute('opacity',p(u,TM.checklist+3,TM.checklist+3.4).toFixed(2));
R('ck2',TM.checklist+5.8);$('tk2').setAttribute('opacity',p(u,TM.thumbs_up-.6,TM.thumbs_up-.2).toFixed(2));
R('thumb',TM.thumbs_up);$('thumbI').setAttribute('transform',`rotate(${(4*Math.sin(t*3)).toFixed(2)} 1160 560)`);R('ctx',TM.thumbs_up+.6);

const s8=SC[8][0]/K;R('qa',s8+.4);R('tv0',s8+.8);R('qb',TM.two_versions);R('qc',TM.two_versions+.4);R('tv1',TM.two_versions+.9);R('qd',TM.two_versions+1.5);