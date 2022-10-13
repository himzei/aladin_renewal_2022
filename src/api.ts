const TTB_KEY = "ttbhimzei1056002";

// ItemNewAll : 신간 전체 리스트
// ItemNewSpecial : 주목할 만한 신간 리스트
// ItemEditorChoice : 편집자 추천 리스트
// (카테고리로만 조회 가능 - 국내도서/음반/외서만 지원)
// Bestseller : 베스트셀러
// BlogBest : 블로거 베스트셀러 (국내도서만 조회 가능

const QUERY_TYPE = "ItemNewAll";
const BASE_URL = "http://www.aladin.co.kr/ttb/api/ItemList.aspx";
const BASE_PATH = `${BASE_URL}?ttbkey=${TTB_KEY}&QueryType=${QUERY_TYPE}&MaxResults=10&start=1&SearchTarget=Book&output=JS&Version=20131101`;

export function getBooks() {
  return fetch(`${BASE_PATH}`).then((response) => response.json());
}
