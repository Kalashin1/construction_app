import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 560 },
    items: 4,
    slidesToSlide: 4,
  },
  mobile: {
    breakpoint: { max: 560, min: 0 },
    items: 3,
    slidesToSlide: 3,
  }
};

const categories = [
  'Plumbery',
  'Paint',
  'Power',
  'Floor',
  'Furniture',
  'Masonry',
  'Kitchen'
]

const SlideItem = ({item}: {
  item: string;
}) => (
  <div className="flex flex-col items-center rounded-lg px-2 py-4 bg-white shadow-md m-2 md:m-4" >
    <img className="w-12" src="images/100x100.png" alt="image" />
    <h3 className="line-clamp-1 pt-2 font-medium tracking-wide text-xs
    ">
      {item}
    </h3>
  </div>
)
const Categories = () => {
  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}// means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >

        {categories.map((c) => (
          <SlideItem
            item={c}
            key={c}
          />
        ))}
      </Carousel>;
    </div>
  );
};

export default Categories;