import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TradeInterface } from '../../../../types';
import { getAllTrades } from '../../profie/trades/components/helper';
import { NotificationComponent, notify } from '../../components/notification/toast';

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

const SlideItem = ({ item }: {
  item: string;
}) => (
  <div className="flex flex-col items-center rounded-lg px-2 py-4 bg-white shadow-md m-2 md:m-4 dark:border-navy-700 dark:bg-navy-800" >
    <img className="w-12" src="/images/100x100.png" alt="image" />
    <h3 className="line-clamp-1 pt-2 font-medium tracking-wide text-xs
    ">
      {item}
    </h3>
  </div>
)
const Categories = () => {
  const [trades, setTrades] = useState<TradeInterface[]>([])

  useEffect(() => {
    const setUp = async () => {
      const [error, _trades] = await getAllTrades();
      if (error) {
        notify(
          (<NotificationComponent message='Error fetching trades' />),
          {
            className: 'bg-red-400 text-white'
          })

        console.log(error)
      }

      if (_trades) {
        setTrades(_trades)
      }
    }

    setUp()
  }, [])
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

        {trades && trades.map((trade, i) => (
          <SlideItem
            item={trade.name}
            key={i}
          />
        ))}
      </Carousel>;
    </div>
  );
};

export default Categories;