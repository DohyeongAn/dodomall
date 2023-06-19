$(document).ready(function () {
  //메뉴 사이드 바 이벤트
  $("#menu_bar > ul > li").on("click", function () {
    // 하위 메뉴를 토글합니다.
    $(this).children("ul").slideToggle(500);

    // i 태그를 90도 회전하는 토글 기능을 추가합니다.
    $(this).find("i").toggleClass("fa-rotate-90");

    // 토글된 상태에서 부모 a 요소의 색상과 font-size를 변경합니다.
    if ($(this).find("i").hasClass("fa-rotate-90")) {
      $(this).find("> a").css({
        color: "orange",
        "font-size": "16px",
      });
    } else {
      $(this).find("> a").css({
        color: "",
        "font-size": "",
      }); // 기본 스타일로 변경하려면 빈 문자열로 설정합니다.
    }
  });

  // 메뉴 선택 이벤트
  $("nav > a").on("click", function () {
    // 현재 클릭된 요소를 제외한 다른 nav 요소의 자식인 a 요소에서 chosenav 클래스를 제거합니다.
    $("nav > a").not(this).removeClass("chosenav");

    if ($(this).hasClass("chosenav")) {
      // 이미 chosenav 클래스를 가지고 있는 경우, 클래스를 제거합니다.
      $(this).removeClass("chosenav");
    } else {
      // chosenav 클래스를 추가합니다.
      $(this).addClass("chosenav");
    }
  });
  //모달 스크립트 이벤트
  $("#modal1").on("click", function () {
    $("#exampleModal").modal("show");
  });
  $("#modal2").on("click", function () {
    $("#exampleModal2").modal("show");
  });

  //국가 이름 생성 유효성 검사 이벤트

  $("#table_btn_right_wrap button[type='button']").on("click", function () {
    if (".needs-validation input[value='']") {
      $("#main_section form").addClass("was-validated");
    }
  });
});
