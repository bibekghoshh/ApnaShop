import React from 'react'

const CheckoutSteps = ({active}) => {
  return (
    
    <div className='flex justify-center w-full'>
        <div className="w-[90%] 800px:w-[50%] flex items-center flex-wrap">
               <div className=''>
                <div className="">
                       <span className="">1.Shipping</span>
                </div>
                <div className={`${
                    active > 1 ? "w-[30px] 800px:w-[70px] h-[4px] !bg-[#f63b60]"
                    : "w-[30px] 800px:w-[70px] h-[4px] !bg-[#FDE1E6]"
                }`} />
               </div>

               <div className="">
                <div className={`${active > 1 ? `` : ` !bg-[#FDE1E6]`}`}>
                    <span className={`${active > 1 ? `` : ` !text-[#f63b60]`}`}>
                        2.Payment
                    </span>
                </div>
               </div>

               <div className="">
               <div className={`${
                    active > 3 ? "w-[30px] 800px:w-[70px] h-[4px] !bg-[#f63b60]"
                    : "w-[30px] 800px:w-[70px] h-[4px] !bg-[#FDE1E6]"
                }`} />
                <div className={`${active > 2 ? `$` : ` !bg-[#FDE1E6]`}`}>
                    <span className={`${active > 2 ? `` : ` !text-[#f63b60]`}`}>
                        3.Success
                    </span>
                </div>
               </div>
        </div>
    </div>
  )
}

export default CheckoutSteps;