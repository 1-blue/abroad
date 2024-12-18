declare namespace NodeJS {
  interface ProcessEnv {
    /** 실행 환경 */
    readonly NODE_ENV: "development" | "production" | "test";

    /** 서버 엔드포인트 */
    readonly NEXT_PUBLIC_SERVER_URL: string;
    /** 클라이언트 엔드포인트 */
    readonly NEXT_PUBLIC_CLIENT_URL: string;
    /** MSW 모드 */
    readonly NEXT_PUBLIC_MSW_MODE: "enabled" | "disabled";
  }
}
