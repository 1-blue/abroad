## 필요한 것
1. `Node.js` 18 이상

## 설치

```bash
npm install
```

## 실행

```bash
npm dev
```

## 환경변수
> 최상위 폴더에 `.env` 파일을 생성

딱히 숨겨야할것 없어서 올림

```env
NEXT_PUBLIC_SERVER_URL=http://localhost:8001
NEXT_PUBLIC_CLIENT_URL=http://localhost:8000

# 모킹 활성화
# NEXT_PUBLIC_MSW_MODE=enabled

# 모킹 비활성화
NEXT_PUBLIC_MSW_MODE=disabled
```


1. Postman으로 문서화
( HTTP STATUS Code 별로 응답값 문서화, 성공과 실패시 메시지 통일  )
