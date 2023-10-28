/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useEffect, useContext, useState } from "react";
import { getUserNotification } from "../helper/notifications";
import { UserAuthContext } from "../../../App";
import { INotification } from "../../../types";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 2,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1200, min: 560 },
    items: 1,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 560, min: 0 },
    items: 1,
    slidesToSlide: 3,
  }
};


const LeftSide = () => (
  <div className="col-span-12 mb-6 flex flex-col px-[var(--margin-x)] transition-all duration-[.25s] lg:col-span-3 lg:pr-0">
    <h2 className="line-clamp-1 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100 lg:text-xl">
      Needs Attention
    </h2>
  </div>
)


const NotificationItem = () => (
  <div className="card shrink-0 space-y-9 rounded-xl p-4 sm:px-2 mx-2">
    <div className="flex items-center justify-between space-x-2">
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <img className="mask is-squircle" src="images/100x100.png" alt="image" />
        </div>
        <div>
          <p className="line-clamp-1 font-medium text-slate-700 dark:text-navy-100">
            Balde Ibrahim
          </p>
          <p className="text-xs text-slate-400 dark:text-navy-300">
            Employee
          </p>
        </div>
      </div>
      
    </div>
    <div className="flex justify-between space-x-2">
      <div>
        <p className="text-xs+">Sells</p>

        <p className="mt-3 grow">
          Please attend to the following notifications as they are quite urgent.
        </p>
      </div>
    </div>
    {/* <div className="grow">
      <div className="flex w-full space-x-1">
        <div data-tooltip="Phone Calls" className="h-2 w-4/12 rounded-full bg-primary dark:bg-accent"></div>
        <div data-tooltip="Chats Messages" className="h-2 w-3/12 rounded-full bg-success"></div>
        <div data-tooltip="Emails" className="h-2 w-5/12 rounded-full bg-info"></div>
      </div>
      <div className="mt-2 flex flex-wrap">
        <div className="mb-1 mr-4 inline-flex items-center space-x-2 font-inter">
          <div className="h-2 w-2 rounded-full bg-primary dark:bg-accent"></div>
          <div className="flex space-x-1 text-xs leading-6">
            <span className="font-medium text-slate-700 dark:text-navy-100">Calls</span>
            <span>33%</span>
          </div>
        </div>
        <div className="mb-1 mr-4 inline-flex items-center space-x-2 font-inter">
          <div className="h-2 w-2 rounded-full bg-success"></div>
          <div className="flex space-x-1 text-xs">
            <span className="font-medium text-slate-700 dark:text-navy-100">Chat Messages</span>
            <span>17%</span>
          </div>
        </div>
        <div className="mb-1 inline-flex items-center space-x-2 font-inter">
          <div className="h-2 w-2 rounded-full bg-info"></div>
          <div className="flex space-x-1 text-xs">
            <span className="font-medium text-slate-700 dark:text-navy-100">Emails</span>
            <span>50%</span>
          </div>
        </div>
      </div>
    </div> */}

  </div>
)

const RightSide = () => {
  const { user } = useContext(UserAuthContext)
  const [notifications, setNotifications] = useState<INotification[] | null>(null)

  useEffect(() => {
    const setUp = async () => {
      console.log("user", user)
      const [error, _notifications] = await getUserNotification(user?._id!);
      if (error) {
        console.log(error)
      }

      if (_notifications) {
        setNotifications(_notifications.filter((notification) => notification.type !== 'Auth'));
        console.log("dashboard notifications", _notifications.filter((notification) => notification.type !== 'Auth'));
      }

    }

    setUp()
  }, [user])


  console.log(notifications)
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      responsive={responsive}// means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div className="mx-2 grid grid-cols-4">
        {notifications && notifications.map((_, index) => (
          <NotificationItem key={index} />
        ))}
      </div>
    </Carousel>
  )
}

const DashboardNotification = () => {
  return (
    <div className="mt-4 gap-4 bg-slate-150 py-5 dark:bg-navy-800 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default DashboardNotification;