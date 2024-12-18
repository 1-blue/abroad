import { authApis } from "./auth";
import { meApis } from "./me";
import { qnaApis } from "./qna";
import { qnaCommentApis } from "./qna/comment";
import { videoApis } from "./video";
import { videoCommentApis } from "./video/comment";

export * from "./auth";
export * from "./me";
export * from "./qna";
export * from "./qna/comment";
export * from "./video";
export * from "./video/comment";

export const apis = {
  auth: authApis,
  me: meApis,
  qna: {
    ...qnaApis,
    comment: qnaCommentApis,
  },
  video: {
    ...videoApis,
    comment: videoCommentApis,
  },
};
