import dashboardImg from '../assets/dashboardImg.png';

export default function MainContent(){
    return(
        <>
        <div className="h-3/4 w-11/12 lg:w-3/4 p-4 flex max-lg:flex-col pt-24 gap-2">
            <div className="w-full text-center self-center">
            <h1 className="whitespace-nowrap text-3xl sm:text-3xl md:text-5xl font-bold text-slate-700">Your Money, Organized.</h1>
            <p className=' mt-8 text-sm text-justify sm:text-lg  mx-auto bg-white p-2 md:p-4 rounded-xl shadow-2xl md:w-3/4'>Budget Planner helps you take control of your finances with ease. Track your income and expenses, set budgets, and visualize where your money goes — all in one intuitive dashboard.
            <span className='font-bold'> Access our services <a href="" className='text-teal-600 underline underline-offset-4'>here</a></span></p>
            </div>
            <div className="w-full">
                <img src={dashboardImg} className=" h-64 w-72  sm:h-72 sm:w-80 lg:min-h-96 lg:min-w-full mx-auto shadow-2xl max-lg:mt-4 rounded-lg" alt="some image"/>
            </div>
        </div>
 
        </>
    )
}