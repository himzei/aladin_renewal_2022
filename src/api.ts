// ItemNewAll : 신간 전체 리스트
// ItemNewSpecial : 주목할 만한 신간 리스트
// ItemEditorChoice : 편집자 추천 리스트
// (카테고리로만 조회 가능 - 국내도서/음반/외서만 지원)
// Bestseller : 베스트셀러
// BlogBest : 블로거 베스트셀러 (국내도서만 조회 가능

import { QueryFunctionContext } from "@tanstack/react-query";

const BASE_PATH = "http://localhost:4000/api/v1";

export async function bestSeller() {
  return await fetch(`${BASE_PATH}/bestseller`).then((response) =>
    response.json()
  );
}

export async function itemNewAll() {
  return await fetch(`${BASE_PATH}/itemNewAll`).then((response) =>
    response.json()
  );
}

export async function itemNewSpecial() {
  return await fetch(`${BASE_PATH}/itemNewSpecial`).then((response) =>
    response.json()
  );
}

export async function itemEditorChoice() {
  return await fetch(`${BASE_PATH}/itemEditorChoice`).then((response) =>
    response.json()
  );
}

export async function blogBest() {
  return await fetch(`${BASE_PATH}/blogBest`).then((response) =>
    response.json()
  );
}

export async function bookDetail(ctx: QueryFunctionContext) {
  const isbn = ctx.queryKey[1];
  return await fetch(`${BASE_PATH}/book/${isbn}`).then((response) =>
    response.json()
  );
}

export async function inBound() {
  return await fetch(`${BASE_PATH}/inbound`).then((response) =>
    response.json()
  );
}

export async function outBound() {
  return await fetch(`${BASE_PATH}/outbound`).then((response) =>
    response.json()
  );
}
export async function music() {
  return await fetch(`${BASE_PATH}/music`).then((response) => response.json());
}
export async function dvd() {
  return await fetch(`${BASE_PATH}/dvd`).then((response) => response.json());
}
export async function used() {
  return await fetch(`${BASE_PATH}/used`).then((response) => response.json());
}
export async function eBook() {
  return await fetch(`${BASE_PATH}/eBook`).then((response) => response.json());
}
