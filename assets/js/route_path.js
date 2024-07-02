$(document).ready(function () {
  const BreadcrumbsDisplay = {
    // -- mypage
    mypage: "회원정보",
    mypage_my_order: "배송조회",
    mypage_my_order_cancel: "주문취소",
    mypage_my_order_detail: "",
    mypage_my_order_return: "주문반품",
    mypage_qna: "1:1문의",
    mypage_navLinks:"마이페이지",
    mypage_qna_create: "1:1문의작성",
    mypage_qna_view: "문의상세",
    mypage_withdrawal: "회원탈퇴",
    mypage_address: "배송지관리",
    mypage_favorite: "관심상품",
    mypage_point: "내 적립금",
    mypage_coupon: "내 쿠폰함",
    mypage_address_add: "배송지관리",

    // -- community
    community_notice: "공지사항",
    community_notice_view: "공지사항",
    community_qna_view: "자주하는질문",
    community_faq: "자주하는질문",
    community_qna: "상품문의",
    community_review: "상품후기",
    community_review_view: "",
    //
    brand_shop: "브랜드샵",
    center_company: "회사소개",
    center_guide: "이용안내",
    center_privacy: "개인정보처리방침",
    shopping_cart: "장바구니",
    member_mall_info: "입점안내",
    order_complete: "주문완료",
    order_delete: "",
    order_pay: "결제하기",
    order: "주문",
    postal_code_window: "",
    product_detail: "상품보기",
    product_list_category: "",
    product_list_category1: "",
    product_list: "상품목록",
    product_search_fan: "상품검색",
    product_search: "상품검색",
    store_company_form: "입점업체 정보 입력",
    store_company_terms: "입점업체 가입 약관",
    store_company: "입점업체",
  };
  // let breadcrumbsEl = document.querySelector(".title_container .menu span");
  let breadcrumbsEl = document.querySelector(".pc_hidden.breadcrumbsEl");
  console.log("breadcrumbsEl", breadcrumbsEl);
  if (breadcrumbsEl === null) return;

  let origin = breadcrumbsEl.textContent.split(">")[0].trim();
  let current = window.location.href
    .split("/")
    .slice(-1)[0]
    .replace(".html", "");

  breadcrumbsEl.textContent = `${origin} ${BreadcrumbsDisplay[current]}`;
});
