import { useEffect, useState, useMemo } from "react";
import { getUserFromToken } from "../../../../../helper/user";
import { useNavigate } from "react-router-dom";
import { SCREENS } from "../../../../../../../navigation/constants";
import { User } from "../../../../../../../types";
import { CreateEmployeeAccountModal } from "./create-employee-modal";
import EmployeesComponent from "./employee";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 2,
    slidesToSlide: 6,
  },
  tablet: {
    breakpoint: { max: 1200, min: 560 },
    items: 1,
    slidesToSlide: 4,
  },
  mobile: {
    breakpoint: { max: 560, min: 0 },
    items: 1,
    slidesToSlide: 3,
  }
};  


const EmployeesOverview = () => {
  const navigate = useNavigate();
  const token = useMemo(() => sessionStorage.getItem('userToken'), []);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const setUp = async () => {
      const abCnt = new AbortController();
      const [err, _user] = await getUserFromToken(token!, abCnt);
      if (!_user || err) {
        navigate(SCREENS.LOGIN)
      }

      if (_user) {
        setUser(_user);
      }
    }

    setUp()
  }, [navigate, token]);

  const [showModal, updateShowModal] = useState(false)
  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:border-navy-700 dark:bg-navy-800 dark:text-white">
      <div className="flex justify-between flex-row items-center my-4">
        <h3 className="text-md font-bold">
          <span className="mr-4">
            <i className="fas fa-users" />
          </span>
          Employees
        </h3>

        <button
          className="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          onClick={() => updateShowModal(true)}
        >
          Create Employee
        </button>
      </div>

      {/* <div className="grid md:grid-cols-2 md:gap-4 justify-between"> */}
      {user && user.employees && (
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
          {user.employees.map((emp) => (
            <div className="mx-2">
              <EmployeesComponent
                owner_id={user._id!}
                employeeId={emp.id!}
              />
            </div>
          ))}
        </Carousel>
      )}
      {/* </div> */}
      {showModal && user && user._id && (<CreateEmployeeAccountModal
        setUser={setUser}
        closeModal={() => updateShowModal(false)}
        owner_id={user?._id}
      />)}
    </div>
  )
}

export default EmployeesOverview;