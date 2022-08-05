# 원티드 프리온보딩 챌린지 프론트엔드 코스

안녕하세요. 2년차 프론트엔드 개발자입니다.

## 프로젝트 실행

```bash
> yarn start
```
```env, .env.local
REACT_APP_API_URL=http://localhost:8080
```

## 프로젝트 소개

React, Javascript로 작성하였습니다.

AuthContext와 TodoContext를 만들어 토큰과 Todo 데이터를 전역으로 관리하고 있습니다.

Todo 페이지의 경우 생성, 업데이트, 보기 컴포넌트를 하나로 해결하였고 `isEdit`이나 `id`값에 따라 적절한 컴포넌트로 변경하였습니다.

API 호출의 경우 fetch 함수를 사용하여 호출하였습니다.
