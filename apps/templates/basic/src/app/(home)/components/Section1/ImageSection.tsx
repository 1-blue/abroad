import Image from "next/image";

const ImageSection: React.FC = () => {
  return (
    <section className="relative left-1/2 right-1/2 -mx-[calc(50vw-0.5rem+1px)] w-[calc(100vw-1rem+1px)]">
      <figure className="relative h-[250px] lg:h-[633px]">
        <Image
          src="/images/main.png"
          alt="메인 이미지"
          fill
          priority
          className="object-cover"
        />
      </figure>
      <div className="absolute inset-0 flex flex-col items-center gap-0.5 bg-black/50 lg:gap-3">
        <h1 className="mt-4 text-center text-4xl text-white lg:mt-16 lg:text-7xl">
          <span className="font-extralight">You Always Win</span>
        </h1>
        <h5 className="text-xl text-white lg:text-3xl">
          <span>Baek Jeong Hyun</span>
        </h5>
      </div>
    </section>
  );
};

export default ImageSection;
