import { Carousel, CarouselContent, CarouselItem } from "@abroad/ui";

const books = [
  { path: "/images/books/1.png" },
  { path: "/images/books/2.png" },
  { path: "/images/books/3.png" },
  { path: "/images/books/4.png" },
  { path: "/images/books/5.png" },
];

const BookCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-5xl lg:mx-auto"
    >
      <CarouselContent className="mx-20 lg:mx-0">
        {books.map((book) => (
          <CarouselItem
            key={book.path}
            className="relative basis-1/2 lg:basis-1/3"
          >
            <figure className="group relative">
              <img src={book.path} alt="교재 이미지" />
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default BookCarousel;
