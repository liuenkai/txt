const mianzeshengming = 
'网站免责声明'+"\n"+
'访问者在接受本网站服务之前，请务必仔细阅读本条款并同意本声明。访问者访问本网站的行为以及通过各类方式利用本网站的行为，都将被视作是对本声明全部内容的无异议的认可;如有异议，请立即跟本网站协商，并取得本网站的书面同意意见。'+"\n"+
'第一条访问者在从事与本网站相关的所有行为(包括但不限于访问浏览、利用、转载、宣传介绍)时，必须以善意且谨慎的态度行事;访问者不得故意或者过失的损害或者弱化本网站的各类合法权利与利益，不得利用本网站以任何方式直接或者间接的从事违反中国法律、国际公约以及社会公德的行为，且访问者应当恪守下述承诺：'+"\n"+
'1、传输和利用信息符合中国法律、国际公约的规定、符合公序良俗;'+"\n"+
'2、不将本网站以及与之相关的网络服务用作非法用途以及非正当用途;'+"\n"+
'3、不干扰和扰乱本网站以及与之相关的网络服务;'+"\n"+
'4、遵守与本网站以及与之相关的网络服务的协议、规定、程序和惯例等。'+"\n"+
'第二条本网站郑重提醒访问者：请在转载、上载或者下载有关作品时务必尊重该作品的版权、著作权;如果您发现有您未署名的作品，请立即和我们联系，我们会在第一时间加上您的署名或作相关处理。'+"\n"+
'第三条除我们另有明确说明或者中国法律有强制性规定外，本网站用户原创的作品，本网站及作者共同享有版权，其他网站及传统媒体如需使用，须取得本网站的书面授权，未经授权严禁转载或用于其它商业用途。'+"\n"+
'第四条本网站内容仅代表作者本人的观点，不代表本网站的观点和看法，与本网站立场无关，相关责任作者自负。'+"\n"+
'第五条本网站有权将在本网站内发表的作品用于其他用途，包括网站、电子杂志等，作品有附带版权声明者除外。'+"\n"+
'第六条未经常本网站和作者共同同意，其他任何机构不得以任何形式侵犯其作品著作权，包括但不限于：擅自复制、链接、非法使用或转载，或以任何方式建立作品镜像。'+"\n"+
'第七条本网站所刊载的各类形式(包括但不仅限于文字、图片、图表)的作品仅供参考使用，并不代表本网站同意其说法或描述，仅为提供更多信息，也不构成任何投资建议。对于访问者根据本网站提供的信息所做出的一切行为，除非另有明确的书面承诺文件，否则本网站不承担任何形式的责任。'+"\n"+
'第八条当本网站以链接形式推荐其他网站内容时，本网站并不对这些网站或资源的可用性负责，且不保证从这些网站获取的任何内容、产品、服务或其他材料的真实性、合法性，对于任何因使用或信赖从此类网站或资源上获取的内容、产品、服务或其他材料而造成(或声称造成)的任何直接或间接损失，本网站均不承担任何责任。'+"\n"+
'第九条访问者在本网站注册时提供的一些个人资料，本网站除您本人同意及第十条规定外不会将用户的任何资料以任何方式泄露给任何一方。'+"\n"+
'第十条当政府部门、司法机关等依照法定程序要求本网站披露个人资料时，本网站将根据执法单位之要求或为公共安全之目的提供个人资料。在此情况下之任何披露，本网站均得免责。'+"\n"+
'第十一条由于用户将个人密码告知他人或与他人共享注册账户，由此导致的任何个人资料泄露，本网站不负任何责任。'+"\n"+
'第十二条本网站有部分内容来自互联网，如无意中侵犯了哪个媒体、公司、企业或个人等的知识产权，请来电或致函告之，本网站将在规定时间内给予删除等相关处理，若有涉及版权费等问题，请及时提供相关证明等材料并与我们联系，通过友好协商公平公正原则处理纠纷。'+"\n"+
'第十二条以上声明内容的最终解释权归 https://txt.rth.app 网站所有。';

function yidong_sb(o, x, y, event) {  //鼠标定位赋值函数
	var posX = 0, posY = 0;
	var e = window.event;  
	if (e.pageX || e.pageY) {  //获取鼠标指针的当前坐标值
		posX = e.pageX;
		posY = e.pageY;
	} else if (e.clientX || e.clientY) {
		posX = event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
		posY = event.clientY + document.documentElement.scrollTop + document.body.scrollTop;
	}
	o.style.position = "absolute";
	o.style.top = (posY + y) + "px";
	o.style.left = (posX + x) + "px";
}

function jiazai_jiemian(){
	var blur = document.getElementById('container');
	blur.classList.toggle('active');
	var popup = document.getElementById('jiazai');
	popup.classList.toggle('jiazai_jiemian');
	return true;
}
function xiangmu_shezhi_chongmingming_jiemian(){
	document.getElementById('xiangmu-shezhi-chongmingming-input').value = this.xiangmu_name[this.xiangmu_kaiqi_shangyici_id];
	var popup = document.getElementById('xiangmu-shezhi-chongmingming');
	popup.classList.toggle('xiangmu_shezhi_chongmingming');
	return true;
}
function xiangmu_shezhi_chongmingming_queding(){
	this.xiangmu_name[this.xiangmu_kaiqi_shangyici_id] = document.getElementById('xiangmu-shezhi-chongmingming-input').value;
	document.getElementsByClassName('wendang-biaoti')[0].innerHTML = document.getElementById('xiangmu-shezhi-chongmingming-input').value;
	document.getElementsByClassName('wendang-biaoti')[0].title = document.getElementById('xiangmu-shezhi-chongmingming-input').value;
	document.getElementsByClassName('txt-neirong-zuoce-xiangmu-span')[this.xiangmu_kaiqi_shangyici_id-1].innerHTML = document.getElementById('xiangmu-shezhi-chongmingming-input').value;
	xiangmu_shezhi_chongmingming_jiemian();
	return true;
}
var xiangmu_shezhi_sf = true;
function xiangmu_shezhi_guanbi(){
	setTimeout(()=>{xiangmu_shezhi_guanbi_dengdai()}, 100);
}
function xiangmu_shezhi_guanbi_dengdai(){
	if(!this.xiangmu_shezhi_sf){
		var popup = document.getElementById('xiangmu-shezhi');
		popup.classList.toggle('xiangmu_shezhi');
		this.xiangmu_shezhi_sf = true;
		return this.xiangmu_shezhi_sf;
	}
}
function xiangmu_shezhi(){
	if(this.xiangmu_shezhi_sf){
		var popup = document.getElementById('xiangmu-shezhi');
		yidong_sb(popup, 10, 20, event);
		popup.style.left = '110px';
		popup.classList.toggle('xiangmu_shezhi');
		setTimeout(()=>{xiangmu_shezhi_sf = false;}, 100);
	}
	return true;
}

function toggle_caidan(){
	var popup = document.getElementById('txt-dingbulan-caidan-neirong');
	popup.classList.toggle('caidan');
}
document.addEventListener("mousedown",this.xiangmu_shezhi_guanbi);

function wendang_xianshi(){
	if(document.body.clientWidth > 500){
		wendang_xianshi_yes();
	}else{
		wendang_xianshi_no();
	}
}
function wendang_xianshi_yes(){
	let txt_neirong_zuoce_div = document.getElementsByClassName('txt-neirong-zuoce')[0];
	txt_neirong_zuoce_div.style.width = 150 + 'px';
}
function wendang_xianshi_no(){
	let txt_neirong_zuoce_div = document.getElementsByClassName('txt-neirong-zuoce')[0];
	txt_neirong_zuoce_div.style.width = 0 + 'px';
}
window.addEventListener("load",wendang_xianshi);
window.addEventListener("resize",wendang_xianshi);
function wendang_xianshi_xiangfan(){
	if(parseInt(document.getElementsByClassName('txt-neirong-zuoce')[0].style.width) > 0){
		wendang_xianshi_no();
	}else{
		wendang_xianshi_yes();
	}
}

function caidan_yangshi(){
	let beijing_yanse = document.getElementsByClassName('txt-dingbulan-caidan-neirong-xiang_input')[0].value; 
	let ziti_yanse = document.getElementsByClassName('txt-dingbulan-caidan-neirong-xiang_input')[1].value;
	let ziti_daxiao = document.getElementsByClassName('txt-dingbulan-caidan-neirong-xiang_input')[2].value;
	document.getElementsByClassName('txt-neirong-yuoce')[0].style.backgroundColor = beijing_yanse ; 
	document.querySelector('body').style.backgroundColor = beijing_yanse ; 
	document.getElementsByClassName('txt-neirong-yuoce')[0].style.color = ziti_yanse ; 
	document.getElementsByClassName('txt-neirong-yuoce')[0].style.fontSize = ziti_daxiao; 
}
window.addEventListener("load",caidan_yangshi);
window.addEventListener("input",caidan_yangshi);
function xiangmu_shuaxin(){
	for ( let i = 1 ;i < document.getElementsByClassName('txt-neirong-zuoce-xiangmu').length; i++) {
		document.getElementsByClassName('txt-neirong-zuoce-xiangmu')[i].id = i;
		document.getElementsByClassName('txt-neirong-zuoce-xiangmu')[i].onclick = Function('if(' + i +'!= xiangmu_kaiqi_shangyici_id){xiangmu_xianshi(this.id);jiazai_jiemian();setTimeout(()=>{xiangmu_kaiqi(' + i + ',true)}, 500);} ;');
	}
}

var xiangmu_shuaxin_i = 0;
var xiangmu_name = new Array ();
var xiangmu_neirong = new Array ();
var xiangmu_lujing = new Array ();
function tianjia_xiangmu(name,neirong,lujing){
	xiangmu_shuaxin_i++;
	xiangmu_name[xiangmu_shuaxin_i] = name;
	xiangmu_neirong[xiangmu_shuaxin_i] = neirong;
	xiangmu_lujing[xiangmu_shuaxin_i] = lujing;
	let xiangmu_div = '<div class="txt-neirong-zuoce-xiangmu"' + 'id="' + xiangmu_shuaxin_i +'"' + 
	'onclick="' + 
	'if(' + xiangmu_shuaxin_i + ' != xiangmu_kaiqi_shangyici_id){' +
	'xiangmu_xianshi(id);jiazai_jiemian();setTimeout(()=>{xiangmu_kaiqi(' + xiangmu_shuaxin_i +',true)}, 500);}"' 
	+ '>' + '<span class="txt-neirong-zuoce-xiangmu-span">' + name + '</span>' + '</div>' ;
	document.getElementsByClassName("txt-neirong-zuoce")[0].innerHTML += xiangmu_div;
	xiangmu_shuaxin();
}

function xiangmu_shezhi_daochu_a(id){
	let blob = new Blob([xiangmu_neirong[id]], {type: "text/plain;charset=utf-8"});
	const windowURL = window.URL || window.webkitURL;
	let wenjianSrc = windowURL.createObjectURL(blob);
	document.getElementsByClassName("xiangmu-shezhi-daochu-a")[0].download = xiangmu_name[id];
	document.getElementsByClassName("xiangmu-shezhi-daochu-a")[0].href = wenjianSrc;
}
function xiangmu_kaiqi_shezhi(id,sf){
	let box = document.getElementsByClassName('txt-neirong-zuoce-xiangmu')[id];
	let box_string= '<div class="txt-neirong-zuoce-xiangmu-shezhi-tubiao-div" onclick="xiangmu_shezhi()"><img class="txt-neirong-zuoce-xiangmu-shezhi-tubiao" src="IMG/xiangmu_shezhi (2).svg" alt=""></div>';
	if(sf){
		box.innerHTML += box_string;
	}else{
		box.innerHTML = '<span class="txt-neirong-zuoce-xiangmu-span">' + xiangmu_name[id] + '</span>';
	}
}
window.onload = function() {
	document.getElementsByClassName("xiangmu-shezhi-daochu-a")[0].onclick = function() {
		xiangmu_shezhi_daochu_a(xiangmu_kaiqi_shangyici_id);
	}
}

var xiangmu_kaiqi_shangyici_id = -1;
function xiangmu_xianshi(id){
	if(xiangmu_kaiqi_shangyici_id != -1){
		var shangyici_popup = document.getElementsByClassName('txt-neirong-zuoce-xiangmu')[xiangmu_kaiqi_shangyici_id];
		shangyici_popup.classList.toggle('kaiqi');
		xiangmu_kaiqi_shezhi(xiangmu_kaiqi_shangyici_id,false);
	}
	xiangmu_kaiqi_shezhi(id,true);
	var popup = document.getElementsByClassName('txt-neirong-zuoce-xiangmu')[id];
	popup.classList.toggle('kaiqi');
	xiangmu_kaiqi_shangyici_id = id;
	return true;
}
function xiangmu_shanchu(){
	xiangmu_name.splice(this.xiangmu_kaiqi_shangyici_id,1) ;
	xiangmu_neirong.splice(this.xiangmu_kaiqi_shangyici_id,1);
	xiangmu_lujing.splice(this.xiangmu_kaiqi_shangyici_id,1) ;
	document.getElementsByClassName('txt-neirong-zuoce-xiangmu')[this.xiangmu_kaiqi_shangyici_id].remove();
	document.getElementsByClassName('wendang-biaoti')[0].innerHTML = '';
	document.getElementsByClassName('wendang-biaoti')[0].title = '';
	document.getElementsByClassName("txt-neirong-yuoce")[0].innerHTML = ''
	this.xiangmu_kaiqi_shangyici_id = -1;
	xiangmu_shuaxin();
	xiangmu_shuaxin_i--;
}

function xiangmu_kaiqi(id,sf){
		if(xiangmu_biaoti(xiangmu_name[id])){
			if(daoru_txt(xiangmu_neirong[id])){
				if(sf){
					jiazai_jiemian();
				}
			}
		}
}
function jiazai_jiemian_sf(sf){
	if(sf){
		jiazai_jiemian();
	}
}
function xiangmu_biaoti(biaoti){
	document.getElementsByClassName('wendang-biaoti')[0].innerHTML = biaoti;
	document.getElementsByClassName('wendang-biaoti')[0].title = biaoti;
	return true;
}

function daoru_txt(result){
	document.getElementsByClassName("txt-neirong-yuoce")[0].innerHTML = result;
	// document.getElementsByClassName("txt-neirong-yuoce")[0].innerHTML = '';
	// for ( let i = 0 ; i < result.length ; i++) {
	// 	document.getElementsByClassName("txt-neirong-yuoce")[0].innerHTML += result.charAt(i);
	// }
	return true;
}

let neirong;
function shangchuan_txt(el){
	var reader = new FileReader();
	var fileUploader = document.getElementById("txt-neirong-zuoce-xiangmu-input-houtai");
	reader.readAsText(fileUploader.files[0],"UTF-8");
	console.log(reader);
	console.log(fileUploader.files[0]);
	xiangmu_biaoti(fileUploader.files[0].name);
	reader.onload = function() {
		tianjia_xiangmu(fileUploader.files[0].name,reader.result,fileUploader.files[0].name);
		daoru_txt(reader.result);
		xiangmu_xianshi(xiangmu_shuaxin_i);
		jiazai_jiemian();
	}
}
function xiangmu_daoru_txt(){
	var reader = new FileReader();
	var fileUploader = document.getElementById("xiangmu-shezhi-input-houtai");
	reader.readAsText(fileUploader.files[0],"UTF-8");
	xiangmu_biaoti(fileUploader.files[0].name);
	reader.onload = function() {
		xiangmu_name[xiangmu_kaiqi_shangyici_id] = fileUploader.files[0].name;
		xiangmu_neirong[xiangmu_kaiqi_shangyici_id] = reader.result;
		xiangmu_lujing[xiangmu_kaiqi_shangyici_id] = fileUploader.files[0].name;
		document.getElementsByClassName('txt-neirong-zuoce-xiangmu-span')[xiangmu_kaiqi_shangyici_id-1].innerHTML = fileUploader.files[0].name;
		daoru_txt(reader.result);
		jiazai_jiemian();
	}
}

//禁用滚动条
function wz_gundong_no(){
	document.body.parentNode.style.overflowY="hidden";//隐藏且禁用
	wz_xianshi_daxiao_zishiying();
}
//停止禁用滚动条
function wz_gundong_yes() {
	document.body.parentNode.style.overflowY="scroll"; //显示且可用
	wz_xianshi_daxiao_zishiying();	
}
// }