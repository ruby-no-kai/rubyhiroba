/* Author:

*/


// 最初に変数をまとめて定義
var google_btn, twitter_btn, facebook_btn, hatena_btn;

// google (ボタン作成サイトから、コピペするとシングルクオートなので注意)
google_btn =
  '<div class="g-plus btn" data-action="share" data-annotation="none"></div>'
  + '<script>window.___gcfg={lang:"en"};(function(){var po=document.createElement("script");po.type="text/javascript";po.async=true;po.src="https://apis.google.com/js/plusone.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(po,s);})();<\/script>';

// はてな
hatena_btn =
  '<div class="htbtn btn"><a href="//b.hatena.ne.jp/entry/http://rubyhiroba.org" class="hatena-bookmark-button" data-hatena-bookmark-title="<?php the_title(); ?>" data-hatena-bookmark-layout="standard" title="このエントリーをはてなブックマークに追加"><img src="//b.st-hatena.com/images/entry-button/button-only.gif" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a></div>'
  + '<script type="text/javascript" src="//b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"><\/script>';

// Twitter
twitter_btn =
  '<div class="twbtn btn"><a class="twitter-share-button" data-hashtags="rubyhiroba" data-url="http://rubyhiroba.org/" data-via="rubyhiroba" href="https://twitter.com/share">ツイート</a></div>'
  + '<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");<\/script>';

// Facebook
facebook_btn =
  '<div class="fbbtn btn"><iframe src="//www.facebook.com/plugins/like.php?href=http://rubyhiroba.org&amp;send=false&amp;layout=button_count&amp;width=100&amp;show_faces=true&amp;action=like&amp;colorscheme=light&amp;font=arial&amp;height=35&amp;appId=202396756503689" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100px; height:21px;" allowTransparency="true"></iframe></div>';

var sns_append_height = $('html').height() * 3 / 5;
$(window).bind('scroll.sns, load.sns', function(){
  if($(this).scrollTop() + $(this).height() > sns_append_height){
    // <div id="snsbox"></div>の中に出現させる、読み込む
    $('#snsbox').append(twitter_btn + facebook_btn + hatena_btn + google_btn);
    // 読み込んだらこのイベントのみを破棄(他イベントに影響を与えない)
    $(this).unbind('scroll.sns, load.sns');
  }
});

$(".footer-menu-gnav-contents").click(function () {
  $(".footer-menu-contents").toggle();
});








