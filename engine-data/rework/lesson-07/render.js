rise($('t_box'),p(u,TM.ship_box,TM.ship_box+.5));
rise($('t_pad'),p(u,TM.ship_box,TM.ship_box+.5));
const lf=p(u,TM.ship_box+1.5,TM.ship_box+3);
$('t_lift').setAttribute('transform','translate(0 '+(-90*lf-6*lf*Math.sin(t*2)).toFixed(1)+')');
$('t_trail').setAttribute('opacity',lf);
$('t_trail').style.strokeDashoffset=(t*40).toFixed(1);

rise($('wb'),p(u,TM.workbench,TM.workbench+.5));
rise($('clk'),p(u,TM.clock_wall,TM.clock_wall+.5));
tw.forEach((g,i)=>rise(g,p(u,TM.clock_wall+.4+i*.8,TM.clock_wall+.8+i*.8)));
const sp=p(u,TM.clock_wall,TM.clock_wall+4);
$('h_min').setAttribute('transform','rotate('+(sp*2160).toFixed(1)+' 860 400)');
$('h_hr').setAttribute('transform','rotate('+(60+sp*180).toFixed(1)+' 860 400)');
rise($('store'),p(u,TM.empty_store,TM.empty_store+.5));
const L=TM.empty_store+4.2;
$('launch_arc').setAttribute('opacity',p(u,L,L+.5));$('launch_arc').style.strokeDashoffset=(-t*30).toFixed(1);
rise($('launch_t'),p(u,L,L+.6));

rise($('c_bc'),p(u,TM.basecamp_logo,TM.basecamp_logo+.5));
rise($('c_cal'),p(u,TM.calendar,TM.calendar+.5));
cells.forEach((c,i)=>c.setAttribute('fill',u>=TM.calendar+.6+i*.08?(i===29?'var(--gain)':'var(--line)'):'var(--stage)'));
rise($('cal_l'),p(u,TM.calendar+3,TM.calendar+3.5));
rise($('c_code'),p(u,TM.code_screen,TM.code_screen+.5));
CL.forEach(([r,w],i)=>r.setAttribute('width',(w*p(u,TM.code_screen+.4+i*.4,TM.code_screen+.9+i*.4)).toFixed(1)));
rise($('b_fb'),p(u,TM.code_screen+5,TM.code_screen+5.6));

rise($('sf'),p(u,TM.ladder,TM.ladder+.4));
$('lad').style.strokeDashoffset=1-p(u,TM.ladder,TM.ladder+2.2);
rise($('lad_t'),p(u,TM.ladder+.8,TM.ladder+1.3));
$('fix').style.strokeDashoffset=1-p(u,TM.simple_fix,TM.simple_fix+.8);
rise($('fix_t'),p(u,TM.simple_fix+.5,TM.simple_fix+1));
rise($('q3'),p(u,TM.simple_fix+5,TM.simple_fix+5.6));
rise($('imp'),p(u,TM.simple_fix+9.6,TM.simple_fix+10.1));
rise($('users'),p(u,TM.simple_fix+9.6,TM.simple_fix+10.1));

rise($('desk'),p(u,TM.late_desk,TM.late_desk+.5));
rise($('trophy'),p(u,TM.trophy,TM.trophy+.5));
rise($('quote'),p(u,TM.trophy+3,TM.trophy+3.6));
$('t_x').style.strokeDashoffset=1-p(u,TM.trophy+3.2,TM.trophy+3.9);
rise($('mess'),p(u,TM.mess_pile,TM.mess_pile+.5));
rise($('guilt'),p(u,TM.mess_pile+2.5,TM.mess_pile+3));

rise($('pillow'),p(u,TM.pillow,TM.pillow+.5));
$('zz').setAttribute('transform','translate(0 '+(-10*Math.sin(t*1.6)).toFixed(1)+')');
$('zz').setAttribute('opacity',(.6+.4*Math.sin(t*1.6)).toFixed(2));
rise($('grumpy'),p(u,TM.grumpy_face,TM.grumpy_face+.5));
rise($('bulb'),p(u,TM.light_bulb,TM.light_bulb+.5));
$('rays').setAttribute('opacity',(.55+.45*Math.sin(t*3)).toFixed(2));
rise($('rest_t'),p(u,TM.light_bulb+1,TM.light_bulb+1.6));

rise($('list'),p(u,TM.long_list,TM.long_list+.5));
rise($('arr'),p(u,TM.small_chunks,TM.small_chunks+.4));
rise($('chunk_l'),p(u,TM.small_chunks,TM.small_chunks+.5));
cards.forEach(([g,c],i)=>{rise(g,p(u,TM.small_chunks+.3+i*.4,TM.small_chunks+.7+i*.4));c.style.strokeDashoffset=1-p(u,TM.check_marks+i*.7,TM.check_marks+i*.7+.4)});
rise($('mom'),p(u,TM.check_marks,TM.check_marks+.4));
$('mbar').setAttribute('width',(860*p(u,TM.check_marks,TM.check_marks+3.5)).toFixed(1));
rise($('mom_t'),p(u,TM.check_marks+3,TM.check_marks+3.6));

$('road').style.strokeDashoffset=1-p(u,TM.steady_path,TM.steady_path+2);
rise($('ships'),p(u,TM.steady_path+1,TM.steady_path+1.6));
rise($('pk'),p(u,TM.light_pack,TM.light_pack+.5));
rise($('walkerW'),p(u,TM.light_pack,TM.light_pack+.5));
const wx=160+940*p(u,TM.light_pack,TM.light_pack+4.5);
$('walker').setAttribute('transform','translate('+wx.toFixed(1)+' '+(PY(wx)-75-3*Math.abs(Math.sin(t*5))).toFixed(1)+')');
rise($('team'),p(u,TM.calm_team,TM.calm_team+.5));
rise($('calm_t'),p(u,TM.calm_team+.4,TM.calm_team+1));

const S8=SC[8][0]/K;
rise($('qa'),p(u,S8+.5,S8+1));rise($('qb'),p(u,S8+.9,S8+1.4));rise($('qc'),p(u,S8+1.3,S8+1.8));
rise($('q_sub'),p(u,S8+5.6,S8+6.1));rise($('fin'),p(u,S8+5.6,S8+6.1));
$('fin_a').setAttribute('transform','translate(0 '+(-8*Math.abs(Math.sin(t*2))).toFixed(1)+')');