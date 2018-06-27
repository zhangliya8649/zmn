<?php

$callback = $_REQUEST['callback'];

// Create the output object.
$output = array(
	'htmltop' => '<form id="zmn_from" name="feedback" method="post" enctype="multipart/form-data" action="http://www.zmnedu.com/e/enews/index.php">
	<input type="hidden" value="AddFeedback" name="enews">
	<input type="hidden" id="ecmsfrom" name="ecmsfrom" value="">
    <input type="hidden" id="cmsbid" name="bid" value="5">
	<dl>', 
	'htmlbottom' => '<dt><a href="javascript:;" class="form_btn">提交申请</a></dt>
	</dl>
	<input type="hidden" value="" id="zmn_time" name="zmn_time">
	<input type="hidden" value="来源渠道" id="zmn_websource" name="zmn_websource">
	<input type="hidden" value="本科最强学霸_本科留学活动_pc" id="zmn_resource" name="zmn_resource">
</form>',
	'ddlist' => array(
		'dd_zmn_name' => '<dd class="dd_zmn_name"><label>姓名</label><input type="text" value="" id="zmn_name" name="title"></dd>',
		'dd_zmn_tel' => '<dd class="dd_zmn_tel"><label>电话</label><input type="text" value="" id="zmn_tel" name="zmn_tel"></dd>',
		'dd_zmn_qq' => '<dd class="dd_zmn_qq"><label>QQ</label><input type="text" value="" id="zmn_qq" name="zmn_qq"></dd>',
		'dd_zmn_weixin' => '<dd class="dd_zmn_weixin"><label>微信</label><input type="text" value="" id="zmn_weixin" name="zmn_weixin"></dd>',
		'dd_zmn_email' => '<dd class="dd_zmn_email"><label>邮箱</label><input type="text" value="" id="zmn_email" name="zmn_email"></dd>',
		'dd_zmn_code' => '<dd class="dd_zmn_code"><label>邮编</label><input type="text" value="" id="zmn_code" name="zmn_code"></dd>',
		'dd_zmn_address' => '<dd class="dd_zmn_address"><label>地址</label><input type="text" value="" id="zmn_address" name="zmn_address"></dd>',
		'dd_zmn_area' => '<dd class="dd_zmn_area"><label>地区</label><input type="text" value="" id="zmn_area" name="zmn_area"></dd>',
		'dd_zmn_city' => '<dd class="dd_zmn_city"><label>城市</label><input type="text" value="" id="zmn_city" name="zmn_city"></dd>',
		'dd_zmn_age' => '<dd class="dd_zmn_age"><label>年龄</label><input type="text" value="" id="zmn_age" name="zmn_age"></dd>',
		'dd_zmn_birthday' => '<dd class="dd_zmn_birthday"><label>生日</label><input type="text" value="" id="zmn_birthday" name="zmn_birthday"></dd>',
		'dd_zmn_card' => '<dd class="dd_zmn_card"><label>学生身份证号</label><input type="text" value="" id="zmn_card" name="zmn_card"></dd>',
		'dd_zmn_pname' => '<dd class="dd_zmn_pname"><label>家长姓名</label><input type="text" value="" id="zmn_pname" name="zmn_pname"></dd>',
		'dd_zmn_ptel' => '<dd class="dd_zmn_ptel"><label>家长电话</label><input type="text" value="" id="zmn_ptel" name="zmn_ptel"></dd>',
		'dd_zmn_pcard' => '<dd class="dd_zmn_professional"><label>家长身份证号</label><input type="text" value="" id="zmn_pcard" name="zmn_pcard"></dd>',
		'dd_zmn_professional' => '<dd class="dd_zmn_professional"><label>就读专业</label><input type="text" value="" id="zmn_professional" name="zmn_professional"></dd>',
		'dd_zmn_grade' => '<dd class="dd_zmn_grade"><label>年级</label><input type="text" value="" id="zmn_grade" name="zmn_grade"></dd>',
		'dd_zmn_zdschool' => '<dd class="dd_zmn_zdschool"><label>在读年级</label><select name="zmn_zdschool" id="zmn_zdschool"><option>小一</option><option>小二</option><option>小三</option><option>小四</option><option>小五</option><option>小六</option><option>初一</option><option>初二</option><option>初三</option><option>高一</option><option selected="selected">高二</option><option>高三</option><option>大一</option><option>大二</option><option>大三</option><option>研一</option><option>研二</option><option>研三</option></select></dd>',
		'dd_zmn_zdschool1' => '<dd class="dd_zmn_zdschool1"><label>在读年级</label><select name="zmn_zdschool1" id="zmn_zdschool1"><option selected="selected" id="one">年级</option><option>小一</option><option>小二</option><option>小三</option><option>小四</option><option>小五</option><option>小六</option><option>初一</option><option>初二</option><option>初三</option><option>高一</option><option>高二</option><option>高三</option><option>大一</option><option>大二</option><option>大三</option><option>研一</option><option>研二</option><option>研三</option></select></dd>',
		'dd_zmn_pk' => '<dd class="dd_zmn_pk"><label>选择路线</label><select name="zmn_pk" id="zmn_pk"><option selected="selected" id="one">选择路线</option><option>SAT洛杉矶陪考团</option><option>SAT纽约陪考团</option><option>SAT香港陪考团（北京出发）</option><option>SAT香港陪考团（深圳出发）</option><option>SAT新加坡陪考团</option><option>香港ACT四天陪考团</option><option>香港ACT三天陪考团</option></select></dd>',
		'dd_zmn_school' => '<dd class="dd_zmn_school"><label>就读学校</label><input type="text" value="" id="zmn_school" name="zmn_school"></dd>',
		'dd_zmn_bytime' => '<dd class="dd_zmn_bytime"><label>毕业时间</label><input type="text" value="" id="zmn_bytime" name="zmn_bytime"></dd>',
		'dd_zmn_tarprofess' => '<dd class="dd_zmn_tarprofess"><label>目标专业</label><input type="text" value="" id="zmn_tarprofess" name="zmn_tarprofess"></dd>',
		'dd_zmn_tarschool' => '<dd class="dd_zmn_tarschool"><label>目标院校</label><input type="text" value="" id="zmn_tarschool" name="zmn_tarschool"></dd>',
		'dd_zmn_evegpa' => '<dd class="dd_zmn_evegpa"><label>平均成绩GPA</label><input type="text" value="" id="zmn_evegpa" name="zmn_evegpa"></dd>',
		'dd_zmn_gpa' => '<dd class="dd_zmn_gpa"><label>GPA</label><input type="text" value="" id="zmn_gpa" name="zmn_gpa"></dd>',
		'dd_zmn_act' => '<dd class="dd_zmn_act"><label>ACT</label><input type="text" value="" id="zmn_act" name="zmn_act"></dd>',
		'dd_zmn_ssat' => '<dd class="dd_zmn_ssat"><label>SSAT</label><input type="text" value="" id="zmn_ssat" name="zmn_ssat"></dd>',
		'dd_zmn_sat' => '<dd class="dd_zmn_sat"><label>SAT</label><input type="text" value="" id="zmn_sat" name="zmn_sat"></dd>',
		'dd_zmn_toefl' => '<dd class="dd_zmn_toefl"><label>托福</label><input type="text" value="" id="zmn_toefl" name="zmn_toefl"></dd>',
		'dd_zmn_ielts' => '<dd class="dd_zmn_ielts"><label>雅思</label><input type="text" value="" id="zmn_ielts" name="zmn_ielts"></dd>',
		'dd_zmn_gre' => '<dd class="dd_zmn_gre"><label>GRE</label><input type="text" value="" id="zmn_gre" name="zmn_gre"></dd>',
		'dd_zmn_gamnt' => '<dd class="dd_zmn_gamnt"><label>GAMNT</label><input type="text" value="" id="zmn_gamnt" name="zmn_gamnt"></dd>',
		'dd_zmn_book' => '<dd class="dd_zmn_book"><label>书名</label><input type="text" value="" id="zmn_book" name="zmn_book"></dd>',
		'dd_zmn_object' => '<dd class="dd_zmn_object"><label>项目</label><input type="text" value="" id="zmn_object" name="zmn_object"></dd>',
		'dd_zmn_lingqu' => '<dd class="dd_zmn_lingqu"><strong>领取方式：</strong><label id="kd"><input type="radio" value="快递邮寄（邮费为自付）" checked="true" id="zmn_lingqu1" name="zmn_lingqu"><strong>快递邮寄（邮费为自付）</strong></label><label id
	="zf"><input type="radio" value="选择分公司上门自取" id="zmn_lingqu2"  name="zmn_lingqu"><strong>选择分公司上门自取</strong><span id="smzq"></span></label></dd>',
		'dd_zmn_orsat' => '<dd class="dd_zmn_orsat"><strong>参加新SAT考试:</strong><label><input type="radio" value="半年内" id="zmn_orsat1" name="zmn_orsat">半年内</label><label><input type="radio" value="一年内" id="zmn_orsat2"  name="zmn_orsat">一年内</label><label><input type="radio" value="不参加" id="zmn_orsat3"  name="zmn_orsat">不参加</label></dd>',
		'dd_zmn_orkspx' => '<dd class="dd_zmn_orkspx"><strong>参加考试培训:</strong><label><input type="radio" value="半年内" id="zmn_orkspx1" name="zmn_orkspx">半年内</label><label><input type="radio" value="一年内" id="zmn_orkspx2"  name="zmn_orkspx">一年内</label><label><input type="radio" value="不参加" id="zmn_orkspx3"  name="zmn_orkspx">不参加</label></dd>',
		'dd_zmn_sqtime_sel' => '<dd class="dd_zmn_sqtime_sel"><label>计划申请时间:</label><select name="zmn_sqtime_sel" id="zmn_sqtime_sel"><option selected="selected">计划申请时间</option><option>1个月之内</option><option>3个月之内</option><option>半年之内</option><option>暂无计划</option></select></dd>',

		'dd_zmn_sqtime_sel1' => '<dd class="dd_zmn_sqtime_sel1"><label>计划申请时间:</label><select name="zmn_sqtime_sel1" id="zmn_sqtime_sel1"><option selected>计划申请时间</option><option>1个月之内</option><option>3个月之内</option><option>半年之内</option><option>暂无计划</option></select></dd>',

		'dd_zmn_orks_sel' => '<dd class="dd_zmn_orks_sel"><label>参加过何种考试:</label><select name="zmn_orks_sel" id="zmn_orks_sel"><option selected="selected" id="one">参加过何种考试</option><option>SAT</option><option>托福</option><option>GRE</option><option>SSAT</option><option>没参加过任何考试</option></select></dd>',
		'dd_zmn_ksfs' => '<dd class="dd_zmn_ksfs"><label>考试分数</label><input type="text" value="" id="zmn_ksfs" name="zmn_ksfs"></dd>',
		'dd_zmn_kstime' => '<dd class="dd_zmn_kstime"><label>计划考试时间</label><select name="zmn_kstime" id="zmn_kstime"><option>计划考试时间</option><option>1个月之内</option><option>3个月之内</option><option>半年之内</option><option>暂无计划</option></select></dd>',
		'dd_zmn_xueli' => '<dd class="dd_zmn_xueli"><label>学历</label><select name="zmn_xueli" id="zmn_xueli"><option>学历</option><option>本科</option><option>研究生</option><option>博士</option><option>其他</option></select></dd>',
		'dd_zmn_ruxue' => '<dd class="dd_zmn_ruxue"><label>入学时间</label><input type="text" value="" id="zmn_ruxue" name="zmn_ruxue"></dd>',
		'dd_zmn_school1' => '<dd class="dd_zmn_school1"><label>本科学历</label><input type="text" value="" id="zmn_school1" name="zmn_school1"></dd>',
		'dd_zmn_professional1' => '<dd class="dd_zmn_professional1"><label>本科专业</label><input type="text" value="" id="zmn_professional1" name="zmn_professional1"></dd>',
		'dd_zmn_ruxue1' => '<dd class="dd_zmn_ruxue1"><label>本科入学时间</label><input type="text" value="" id="zmn_ruxue1" name="zmn_ruxue1"></dd>',
		'dd_zmn_school2' => '<dd class="dd_zmn_school2"><label>研究生学历</label><input type="text" value="" id="zmn_school2" name="zmn_school2"></dd>',
		'dd_zmn_professional2' => '<dd class="dd_zmn_professional2"><label>研究生专业</label><input type="text" value="" id="zmn_professional2" name="zmn_professional2"></dd>',
		'dd_zmn_ruxue2' => '<dd class="dd_zmn_ruxue2"><label>研究生入学时间</label><input type="text" value="" id="zmn_ruxue2" name="zmn_ruxue2"></dd>',
		'dd_zmn_school3' => '<dd class="dd_zmn_school3"><label>博士学历</label><input type="text" value="" id="zmn_school3" name="zmn_school3"></dd>',
		'dd_zmn_professional3' => '<dd class="dd_zmn_professional3"><label>博士专业</label><input type="text" value="" id="zmn_professional3" name="zmn_professional3"></dd>',
		'dd_zmn_ruxue3' => '<dd class="dd_zmn_ruxue3"><label>博士入学时间</label><input type="text" value="" id="zmn_ruxue3" name="zmn_ruxue3"></dd>',
		'dd_zmn_cjks' => '<dd class="dd_zmn_cjks"><label>参加过何种英文考试</label><select name="zmn_cjks" id="zmn_cjks"><option>参加过何种英文考试</option><option>IELTS</option><option>TOEFL</option><option>SAT</option><option>GRE</option><option>四级</option><option>六级</option><option>无</option></select></dd>',
		'dd_zmn_kyjl' => '<dd class="dd_zmn_kyjl"><label>科研项目经历</label><select name="zmn_kyjl" id="zmn_kyjl"><option>科研项目经历</option><option>科研项目经历0次</option><option>科研项目经历1次</option><option>科研项目经历2次</option><option>科研项目经历3次</option></select></dd>',
		'dd_zmn_jingli1' => '<dd class="dd_zmn_jingli1"><label>参加时间</label><input type="text" value="" id="zmn_jingli1" name="zmn_jingli1"></dd>',
		'dd_zmn_jingli1_3' => '<dd class="dd_zmn_jingli1_3"><label>经历描述</label><input type="text" value="" id="zmn_jingli1_3" name="zmn_jingli1_3"></dd>',
		'dd_zmn_jingli2' => '<dd class="dd_zmn_jingli2"><label>参加时间</label><input type="text" value="" id="zmn_jingli2" name="zmn_jingli2"></dd>',
		'dd_zmn_jingli2_3' => '<dd class="dd_zmn_jingli2_3"><label>经历描述</label><input type="text" value="" id="zmn_jingli2_3" name="zmn_jingli2_3"></dd>',
		'dd_zmn_jingli3' => '<dd class="dd_zmn_jingli3"><label>参加时间</label><input type="text" value="" id="zmn_jingli3" name="zmn_jingli3"></dd>',
		'dd_zmn_jingli3_3' => '<dd class="dd_zmn_jingli3_3"><label>经历描述</label><input type="text" value="" id="zmn_jingli3_3" name="zmn_jingli3_3"></dd>',
		'dd_zmn_bcxx' => '<dd class="dd_zmn_bcxx"><label>补充学术信息</label><input type="text" value="" id="zmn_bcxx" name="zmn_bcxx"></dd>',
		'dd_zmn_xsgg' => '<dd class="dd_zmn_xsgg"><label>学术规划</label><input type="text" value="" id="zmn_xsgg" name="zmn_xsgg"></dd>',
		'dd_zmn_zymb' => '<dd class="dd_zmn_zymb"><label>职业目标</label><input type="text" value="" id="zmn_zymb" name="zmn_zymb"></dd>',
		'dd_zmn_bmlb' => '<dd class="dd_zmn_bmlb"><label>报名类别</label><select name="zmn_bmlb" id="zmn_bmlb"><option>报名类别</option><option>教授分享入场券</option><option>入场券+商科分会场演讲券</option><option>入场券+物理分会场演讲券</option><option>入场券+生物分会场演讲券</option></select></dd>',
		'dd_zmn_sqsjmc' => '<dd class="dd_zmn_sqsjmc"><label>申请书籍名称</label><select name="zmn_sqsjmc" id="zmn_sqsjmc" class="left select1 cs-select cs-skin-border"><option>申请书籍名称</option><option>《留学去美国》</option><option>《上最好的高中》</option><option>《美国研究生及本科转学》
</option><option>《转学去美国》</option></select></dd>',
		'dd_zmn_nld' => '<dd class="dd_zmn_nld"><label>申请书籍名称</label><select name="zmn_nld" id="zmn_nld" class="left select2 cs-select cs-skin-border"><option>学生年龄</option><option>15-17岁</option><option>18-20岁</option><option>21-25岁</option><option>25岁以上</option></select></dd>',
//		新填讲座场次字段
		'dd_zmn_jzcc' => '<dd class="dd_zmn_jzcc"><label>讲座场次</label><select name="zmn_jzcc" id="zmn_jzcc"><option>北京场</option><option>深圳第一场</option><option>深圳第二场</option><option>深圳第三场</option><option>广州场</option><option>昆明第一场</option><option>昆明第二场</option><option>武汉场</option><option>沈阳场</option></select></dd>',


		)

	);

//start output
if ($callback) {
    header('Content-Type: text/javascript');
    echo $callback . '(' . json_encode($output) . ');';
} else {
    header('Content-Type: application/x-json');
    echo json_encode($output);
}


?>