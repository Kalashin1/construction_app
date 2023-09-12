const CartItem = () => {
  return (
    <div className="group flex items-center justify-between space-x-3 my-2">
      <div className="flex items-center space-x-4">
        <div className="relative flex">
          <img src="images/800x600.png" className="mask is-star h-11 w-11 origin-center object-cover" alt="image" />

          <div className="absolute right-0 top-0 -m-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full border border-white bg-slate-200 px-1 text-tiny+ font-medium leading-none text-slate-800 dark:border-navy-700 dark:bg-navy-450 dark:text-white">
            2
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-1">
            <p className="line-clamp-1 font-medium text-slate-700 dark:text-navy-100">
              Roast beef
            </p>
            <button className="btn h-6 w-6 rounded-full p-0 opacity-0 hover:bg-slate-300/20 focus:bg-slate-300/20 focus:opacity-100 active:bg-slate-300/25 group-hover:opacity-100 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
              <i className="fas fa-pen-to-square" />
            </button>
          </div>
          <p className="text-xs+ text-slate-400 dark:text-navy-300">
            Lorem ipsum dolor sit.
          </p>
        </div>
      </div>
      <p className="font-inter font-semibold">$12.00</p>
    </div>
  )
}


type CartProps = {
  closeCart: (...args: unknown[]) => void;
}
const Cart = ({
  closeCart
}: CartProps) => {
  return (
    <div className="card mt-5 p-4 pb-6 sm:p-5">
      {[0, 1, 2, 3, 4].map(() => (<CartItem />))}
      <div className="bg-white md:hidden h-14
       w-full"></div>
      <div className="my-4 h-px bg-slate-200 dark:bg-navy-500"></div>
      <div className="space-y-2 font-inter">
        <div className="flex justify-between text-slate-600 dark:text-navy-100">
          <p>Subtotal</p>
          <p className="font-medium tracking-wide">55.00$</p>
        </div>
        <div className="flex justify-between text-xs+">
          <p>Tax</p>
          <p className="font-medium tracking-wide">5.00$</p>
        </div>
        <div className="flex justify-between text-base font-medium text-primary dark:text-accent-light">
          <p>Total</p>
          <p>60.00$</p>
        </div>
      </div>
      <button className="btn mt-5 h-11 justify-between bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
        onClick={closeCart}
      >
        <span>Checkout</span>
        <span>$88.00</span>
      </button>
    </div>
  );
};

export default Cart;

