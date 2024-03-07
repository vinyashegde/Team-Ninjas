// Hero.js
import React from 'react';

const Hero = () => {
    return (
        <div className="bg-[#e0f2fe]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="pt-10 pb-12 text-center">
                    <h1 className="text-4xl font-extrabold text-[#0c4a6e] sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Everything you need to crack your
                    </h1>
                    <h2 className="text-4xl font-extrabold text-[#0c4a6e] sm:text-5xl sm:tracking-tight lg:text-6xl mt-2">
                        Next Tech Interview
                    </h2>
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 mt-8 bg-[#22c55e] text-white py-3 px-8 rounded-md shadow-lg hover:bg-[#16a34a]">
                        Get Started for free
                    </button>
                </div>

                {/* Big Image */}
                <div className="text-center">
                    <img
                        alt="Big Image"
                        className="max-w-full h-auto mx-auto"
                        src="https://cdni.iconscout.com/illustration/premium/thumb/job-placement-service-5597307-4660053.png?f=webp"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center pb-12">
                    {/* Card 1 */}
                    <div className="rounded-lg border shadow-sm w-full bg-[#312e81] text-white" data-v0-t="card">
                        <div className="p-6">
                            <div className="flex flex-col items-center justify-center p-4">
                                <img
                                    alt="Practice Problems"
                                    className="w-full h-auto"
                                    height="200"
                                    src="https://cdni.iconscout.com/illustration/premium/thumb/online-course-3611287-3119295.png?f=webp"  // Updated URL
                                    style={{
                                        aspectRatio: "350/200",
                                        objectFit: "cover",
                                    }}
                                    width="350"
                                />
                                <h3 className="text-lg font-semibold">Practice Problems</h3>
                                <p className="mt-1 text-sm">Sharpen your coding skills with tailored challenges</p>
                                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 mt-4 bg-[#4f46e5] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#4338ca]">
                                    Practice Problems
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-lg border shadow-sm w-full bg-[#ca8a04] text-white" data-v0-t="card">
                        <div className="p-6">
                            <div className="flex flex-col items-center justify-center p-4">
                                <img
                                    alt="Fast Track Courses"
                                    className="w-full h-auto"
                                    height="200"
                                    src="https://static.vecteezy.com/system/resources/thumbnails/010/869/731/small/online-education-concept-illustration-digital-classroom-online-teaching-metaphors-free-png.png"  // Updated URL
                                    style={{
                                        aspectRatio: "350/200",
                                        objectFit: "cover",
                                    }}
                                    width="350"
                                />
                                <h3 className="text-lg font-semibold">Fast Track Courses</h3>
                                <p className="mt-1 text-sm">Accelerate your learning with expert-led courses</p>
                                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 mt-4 bg-[#eab308] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#c19a00]">
                                    Fast Track Courses
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-lg border shadow-sm w-full bg-[#065f46] text-white" data-v0-t="card">
                        <div className="p-6">
                            <div className="flex flex-col items-center justify-center p-4">
                                <img
                                    alt="Interview Prep"
                                    className="w-full h-auto"
                                    height="200"
                                    src="https://www.buddyboss.com/wp-content/uploads/2023/03/Why-You-Should-Create-An-Online-Course-1.png"  // Updated URL
                                    style={{
                                        aspectRatio: "350/200",
                                        objectFit: "cover",
                                    }}
                                    width="350"
                                />
                                <h3 className="text-lg font-semibold">Interview Prep</h3>
                                <p className="mt-1 text-sm">Master the interview process with our comprehensive guide</p>
                                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 mt-4 bg-[#10b981] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#059669]">
                                    Interview Prep
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
