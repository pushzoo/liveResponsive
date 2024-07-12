// Noto Sans CJK KR CDN
var koreanFont = new FontFace('Noto Sans CJK KR', 'url(https://cdn.jsdelivr.net/npm/noto-sans-cjk-kr@latest/fonts/NotoSansCJKkr-Regular.otf)');
koreanFont.load().then(function(loadedFont) {
  document.fonts.add(loadedFont);
  document.body.style.fontFamily = "'Noto Sans CJK KR'";
});
// mobile menu = 사이트 네비게이션 열기함수
// openNav() - myNav를 너비 100%설정 <열기>
// closeNav() - myNav를 너비 0%설정 <닫기>

// 자바스크립트문법
// function openNav(){
//   document.getElementById("myNav").style.width = "100%"
// }

// function closeNav(){
//   document.getElementById("myNav").style.width = "0%"
// }

//jQuery문법
// function openNav(){
//   $("#myNav").css("width","100%");
// }

// function closeNav(){
//   $("#myNav").css("width","0%");
// }

function toggleMenu() {
  var $myNav = $('#myNav');// 메뉴 감싸는 전체 컨테이너 변수저장
  if ($myNav.css("width") == "0px") { // 만약 가로사이즈가 0이면, 
    $('.toggle-container').addClass('active'); // 토글 버튼에 액티브 클래스 추가하고, 
    $myNav.css("width", "100%"); // 메뉴 너비 100%로 열기 
  } else { // 그렇지 않으면
    $('.toggle-container').removeClass('active'); // 액티브 클래스 제거하고
    $myNav.css("width", "0%"); // 메뉴 너비 0으로 설정후 메뉴 닫기
  }
}

//jQuery
$(function(){
  // raylerPopup
  $(".layerPopup").on("click", function(){
    $(".popup, .bg").fadeIn();
  });

  $(".close").on("click", function(){
    $(".popup, .bg").fadeOut();
  });
});