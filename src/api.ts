// ItemNewAll : 신간 전체 리스트
// ItemNewSpecial : 주목할 만한 신간 리스트
// ItemEditorChoice : 편집자 추천 리스트
// (카테고리로만 조회 가능 - 국내도서/음반/외서만 지원)
// Bestseller : 베스트셀러
// BlogBest : 블로거 베스트셀러 (국내도서만 조회 가능

import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";
import { ILogInForm } from "./components/LoginModal";
import { ISignUpForm } from "./components/SignUpModal";

const BASE_PATH = "https://api-backend-2022.herokuapp.com";
// const BASE_PATH = "http://localhost:4000";

export async function refreshTokens() {
  return await fetch(`${BASE_PATH}/users/test`).then((response) =>
    response.json()
  );
}

export async function blogList() {
  return await fetch(`${BASE_PATH}/api/v1/blogList`).then((response) =>
    response.json()
  );
}
export async function blogDetail(id: any) {
  const postId = id.queryKey[1];

  return await fetch(`${BASE_PATH}/api/v1/blog/${postId}`).then((response) =>
    response.json()
  );
}

export async function bestSeller() {
  return await fetch(`${BASE_PATH}/api/v1/bestseller`).then((response) =>
    response.json()
  );
}
export async function bestSellerMonth() {
  return await fetch(`${BASE_PATH}/api/v1/bestsellerlastmonth`).then(
    (response) => response.json()
  );
}

export async function bestSellerYear() {
  return await fetch(`${BASE_PATH}/api/v1/bestsellerlastyear`).then(
    (response) => response.json()
  );
}

export async function itemNewAll() {
  return await fetch(`${BASE_PATH}/api/v1/itemNewAll`).then((response) =>
    response.json()
  );
}

export async function itemNewSpecial() {
  return await fetch(`${BASE_PATH}/api/v1/itemNewSpecial`).then((response) =>
    response.json()
  );
}

export async function itemEditorChoice() {
  return await fetch(`${BASE_PATH}/api/v1/itemEditorChoice`).then((response) =>
    response.json()
  );
}

export async function blogBest() {
  return await fetch(`${BASE_PATH}/api/v1/blogBest`).then((response) =>
    response.json()
  );
}

export async function bookDetail(ctx: QueryFunctionContext) {
  const isbn = ctx.queryKey[1];
  return await fetch(`${BASE_PATH}/api/v1/book/${isbn}`).then((response) =>
    response.json()
  );
}

export async function inBound() {
  return await fetch(`${BASE_PATH}/api/v1/inbound`).then((response) =>
    response.json()
  );
}

export async function outBound() {
  return await fetch(`${BASE_PATH}/api/v1/outbound`).then((response) =>
    response.json()
  );
}
export async function music() {
  return await fetch(`${BASE_PATH}/api/v1/music`).then((response) =>
    response.json()
  );
}
export async function dvd() {
  return await fetch(`${BASE_PATH}/api/v1/dvd`).then((response) =>
    response.json()
  );
}
export async function used() {
  return await fetch(`${BASE_PATH}/api/v1/used`).then((response) =>
    response.json()
  );
}
export async function eBook() {
  return await fetch(`${BASE_PATH}/api/v1/eBook`).then((response) =>
    response.json()
  );
}

export async function search(term: any) {
  return await fetch(
    `${BASE_PATH}/api/v1/search?term=${term.queryKey[1]}`
  ).then((response) => response.json());
}

export async function usernameSignUp({
  username,
  email,
  password,
  password2,
}: ISignUpForm) {
  return await fetch(`${BASE_PATH}/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
      password2,
    }),
  }).then((response) => response.json);
}

// export async function usernameLogIn({ username, password }: ILogInForm) {
//   try {
//     await axios.post(`${BASE_PATH}/users/login`, {
//       username,
//       password,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function usernameLogIn({ username, password }: ILogInForm) {
  return await fetch(`${BASE_PATH}/users/login`, {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((response) => response.json);
}
