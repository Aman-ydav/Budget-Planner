export default function NavigationBar() {
  return (
    <nav className="w-11/12 mx-auto min-h-24 flex justify-between py-8 fixed top-0 left-0 right-0 ">
      <div className="flex items-center gap-2 justify-between ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 lg:hidden text-teal-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <h1 className="font-bold text-xl lg:text-3xl text-teal-600">
          BudgetBee
        </h1>
      </div>
      <div className="max-lg:hidden">
        <ul className="flex justify-around gap-4 text-teal-600">
            <li className="hover:text-white p-2 hover:bg-teal-600 hover:rounded-sm  transition-colors delay-75">Home</li>
            <li className="hover:text-white p-2 hover:bg-teal-600 hover:rounded-sm  transition-colors delay-75">Services</li>
            <li className="hover:text-white p-2 hover:bg-teal-600 hover:rounded-sm  transition-colors delay-75">LogIn</li>
            <li className="text-white p-2 bg-teal-600 rounded-sm font-medium transition-colors delay-75">Sign Up</li>
        </ul>
      </div>
    </nav>
  );
}
