export const RevenueCard = ({
    title,
    orderCount,
    amount
})=>{
    return(
        <div className='bg-white rounded shadow-md p-4'>
            <div className = 'text-gray-700 flex '>
                <div>
                    {title}
                </div>
                <div className = 'pt-1 ml-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>


            </div>
            <div className='flex justify-between pt-2'>

                <div className='font-semibold text-4xl  '>
                    ${amount}
                    
                </div>
                {
                    orderCount ? 
                    <div className='flex flex-col justify-center cursor-pointer underline font-medium'>
                        <div className='flex'>
                            <div className='text-blue-700 '>
                                {orderCount} order(s)
                            </div> 
                            <div className = 'flex flex-col justify-center pt-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>

                    </div> : null
                }

            </div>
        </div>
    )
}