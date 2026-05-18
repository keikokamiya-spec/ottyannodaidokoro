// JavaScript Document

/* --------------------------------------------------------------------------------------
 　スマホの振り分け用ボタン
--------------------------------------------------------------------------------------- */

$(function (){
	var sortSelect       = 1, //選択振り分けは「0」を。自動振り分けは「1」を入力
		fontColor        = '#fff', //文字色
		borderColor      = '#b51e23', //ボーダーの色
		Gradation_top    = '#b51e23', //グラデーション上部の色
		Gradation_bottom = '#b51e23', //グラデーション下部の色
		font             = '"游明朝体", "Yu Mincho", YuMincho,"ヒラギノ明朝 Pro W3","Hiragino Mincho Pro","HGS明朝E","ＭＳ Ｐ明朝",serif',
		//font             = '"Yu Gothic", YuGothic,"ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro","メイリオ",Meiryo,"Osaka","ＭＳ Ｐゴシック","MS PGothic",sans-serif',
		current_URL      = location.href, //現在のURL取得
		sp_URL = current_URL.substr(0, current_URL.lastIndexOf("/")) + "/sp" + current_URL.substring(current_URL.lastIndexOf("/")); //スマホのURLに変換
	
	// iPhoneまたは、Androidの場合は振り分けを判断
	if (document.referrer.indexOf('契約ドメイン') == -1 && ((navigator.userAgent.indexOf('iPhone') > 0 && 
	navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 
	0)) {
		
		if (sortSelect === 0) {
			sp_alert();
			sp_Btn();
		} else if(sortSelect === 1) {
			sp_Btn();
		} 
	}
	
	function sp_alert() {
		if ("https://" + location.host + "/" == current_URL ) {
			if(confirm('スマートフォン用のサイト表示しますか？\n（キャンセルの場合はＰＣサイトを表示します。)')) location.href = sp_URL;
		}		
	}
	
	function sp_Btn() {
		//スマホ閲覧時スマホサイト誘導ボタンのCSS
		$("body").before('<style type="text/css">#sp_botan a{position:relative;top:0;left:0;width:100%;z-index: 100000000000;border:1px ' + borderColor + ' solid;padding:25px 0;text-align:center;font-size:32px;color:' + fontColor + ';display:block;text-decoration:none;font-family:' + font + ';, serif;background: #4a4759;background: -moz-linear-gradient(top,  ' + Gradation_top + ' 1%, ' + Gradation_bottom + ' 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(1%,' + Gradation_top +'), color-stop(100%,' + Gradation_bottom + '));background: -webkit-linear-gradient(top,  ' + Gradation_top + ' 1%,' + Gradation_top + ' 100%);background: -o-linear-gradient(top,  ' + Gradation_top +' 1%,' + Gradation_bottom + ' 100%);background: -ms-linear-gradient(top,  ' + Gradation_top + ' 1%,' + Gradation_bottom +' 100%);background: linear-gradient(to bottom,  ' + Gradation_top + ' 1%,' + Gradation_bottom + ' 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="' + Gradation_top +'", endColorstr="' + Gradation_bottom + '",GradientType=0 );}</style>');
		
		//スマホ閲覧時スマホサイト誘導ボタンの出力
		$("body").prepend('<p id="sp_botan"><a href="' + sp_URL +'">スマートフォンサイトはこちら</a></p>');
	}
});