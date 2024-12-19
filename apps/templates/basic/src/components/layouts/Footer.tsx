import PrivacyDialogButton from "#/components/common/PrivacyDialogButton";

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 border-t border-zinc-200">
      <article className="mx-auto flex max-w-screen-xl flex-col gap-4 p-8 text-xs">
        <section className="flex items-center gap-4">
          <span>이용약관</span>
          <PrivacyDialogButton />
        </section>

        <section className="flex flex-col">
          <span>규정 | 대표이사 백정현</span>
          <span>본사: 경기도 성남시 분당구 판교역로 192번길 16, 806호</span>
          <span>강남지사: 서울시 강남구 영동대로 510, 삼성빌딩 401호</span>
        </section>

        <section>
          <span>Copyright ⓒ 2024 규정 All rights reserved.</span>
        </section>
      </article>
    </footer>
  );
};

export default Footer;
