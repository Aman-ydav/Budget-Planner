import React from 'react';


const Login = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-center mb-6">
                    <div className="flex justify-center items-center gap-2 text-2xl font-bold text-green-600">
                        <i className="fas fa-wallet"></i>
                        <span>Budget Planner</span>
                    </div>
                    <h1 className="text-2xl font-semibold mt-4">Login to Manage Your Finances</h1>
                    <p className="text-sm text-gray-500 mt-2">Track your expenses and reach your savings goals</p>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">E-mail</label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full outline-none bg-transparent"
                            />
                            <i className="fas fa-envelope text-gray-400 ml-2"></i>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Username</label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="w-full outline-none bg-transparent"
                            />
                            <i className="fas fa-user text-gray-400 ml-2"></i>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full outline-none bg-transparent"
                            />
                            <i className="fas fa-lock text-gray-400 ml-2"></i>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Confirm Password</label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                            <input
                                type="password"
                                placeholder="Confirm your password"
                                className="w-full outline-none bg-transparent"
                            />
                            <i className="fas fa-lock text-gray-400 ml-2"></i>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition duration-200"
                    >
                        Create Account
                    </button>

                    <div className="text-sm text-center mt-4">
                        <span>Already have an account? </span>
                        <a
                            href="/login"
                            className="text-green-600 hover:underline"
                        >
                            Sign In
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

