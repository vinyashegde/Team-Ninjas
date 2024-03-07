import React from 'react';

const JobListings = () => {
  return (
    <div className="bg-blue-300">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center font-awesome bg-blue-600 p-6 mb-2 rounded-lg">Available Jobs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Job Listing 1 */}
          <div className="job-listing bg-white shadow-md rounded-lg overflow-hidden flex flex-col p-6">
            {/* Job Title and Company */}
            <div className="flex items-center mb-2">
              <h2 className="text-xl font-bold text-gray-800">Cashier</h2>
              <div className="text-sm text-gray-500 ml-2">
                <span className="mr-2"><i className="fas fa-star text-yellow-400"></i> 3.357 Reviews</span>
                <span>Kohinoor Televideo</span>
              </div>
            </div>
            {/* Job Description */}
            <p className="text-gray-700 mb-4">
              Handling different types of transactions. Processes credit and debit cards, handles cash, ...
            </p>
            {/* Job Details and Apply Button */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                1-2 Yrs - Not disclosed - Mumbai, Chembur
              </span>
              <button className="px-3 py-2 text-sm font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700">
                Apply
              </button>
            </div>
          </div>

          {/* Job Listing 2 */}
          <div className="job-listing bg-white shadow-md rounded-lg overflow-hidden flex flex-col p-6">
            {/* Job Title and Company */}
            <div className="flex items-center mb-2">
              <h2 className="text-xl font-bold text-gray-800">java developer</h2>
              <div className="text-sm text-gray-500 ml-2">
                <span className="mr-2"><i className="fas fa-star text-yellow-400"></i> 4.1 (6567 Reviews)</span>
                <span>Shriram Finance Ltd.</span>
              </div>
            </div>
            {/* Job Requirements */}
            <ul className="list-disc ml-4 mb-4 text-gray-700">
              <li>Good Communication skills.</li>
              <li>Good Business Promotion skills.</li>
              <li>Good interpersonal skills.</li>
            </ul>
            {/* Job Details and Apply Button */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                3-8 Yrs - 4-9 Lacs PA - Borivali, Andheri, Ch...
              </span>
              <button className="px-3 py-2 text-sm font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700">
                Apply
              </button>
            </div>
          </div>

          <div class="job-listing bg-white shadow-md rounded-lg overflow-hidden flex flex-col p-6">
        <div class="flex items-center mb-2">
          <h2 class="text-xl font-bold text-gray-800">Bank manager</h2>
          <div class="text-sm text-gray-500 ml-2">
            <span class="mr-2"><i class="fas fa-star text-yellow-400"></i> 3.357 Reviews</span>
            <span>Kohinoor Televideo</span>
          </div>
        </div>
        <p class="text-gray-700 mb-4">
          Handling different types of transactions. Processes credit and debit cards, handles cash, ...
        </p>
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-500">
            1-2 Yrs - Not disclosed - Mumbai, Chembur
          </span>
          <button class="px-3 py-2 text-sm font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700">
            Apply
          </button>
        </div>
      </div>

      <div class="job-listing bg-white shadow-md rounded-lg overflow-hidden flex flex-col p-6">
        <div class="flex items-center mb-2">
          <h2 class="text-xl font-bold text-gray-800">Branch Manager</h2>
          <div class="text-sm text-gray-500 ml-2">
            <span class="mr-2"><i class="fas fa-star text-yellow-400"></i> 4.1 (6567 Reviews)</span>
            <span>Shriram Finance Ltd.</span>
          </div>
        </div>
        <ul class="list-disc ml-4 mb-4 text-gray-700">
          <li>Good Communication skills.</li>
          <li>Good Business Promotion skills.</li>
          <li>Good interpersonal skills.</li>
        </ul>
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-500">
            3-8 Yrs - 4-9 Lacs PA - Borivali, Andheri, Ch...
          </span>
          <button class="px-3 py-2 text-sm font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700">
            Apply
          </button>
        </div>
      </div>

      <div class="job-listing bg-white shadow-md rounded-lg overflow-hidden flex flex-col p-6">
        <div class="flex items-center mb-2">
          <h2 class="text-xl font-bold text-gray-800">Web developer</h2>
          <div class="text-sm text-gray-500 ml-2">
            <span class="mr-2"><i class="fas fa-star text-yellow-400"></i> 3.357 Reviews</span>
            <span>Kohinoor Televideo</span>
          </div>
        </div>
        <p class="text-gray-700 mb-4">
          Handling different types of transactions. Processes credit and debit cards, handles cash, ...
        </p>
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-500">
            1-2 Yrs - Not disclosed - Mumbai, Chembur
          </span>
          <button class="px-3 py-2 text-sm font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700">
            Apply
          </button>
        </div>
      </div>

      <div class="job-listing bg-white shadow-md rounded-lg overflow-hidden flex flex-col p-6">
        <div class="flex items-center mb-2">
          <h2 class="text-xl font-bold text-gray-800">ios developer</h2>
          <div class="text-sm text-gray-500 ml-2">
            <span class="mr-2"><i class="fas fa-star text-yellow-400"></i> 4.1 (6567 Reviews)</span>
            <span>Shriram Finance Ltd.</span>
          </div>
        </div>
        <ul class="list-disc ml-4 mb-4 text-gray-700">
          <li>Good Communication skills.</li>
          <li>Good Business Promotion skills.</li>
          <li>Good interpersonal skills.</li>
        </ul>
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-500">
            3-8 Yrs - 4-9 Lacs PA - Borivali, Andheri, Ch...
          </span>
          <button class="px-3 py-2 text-sm font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700">
            Apply
          </button>
        </div>
      </div>


      <div class="job-listing bg-white shadow-md rounded-lg overflow-hidden flex flex-col p-6">
        <div class="flex items-center mb-2">
          <h2 class="text-xl font-bold text-gray-800">Charted Acountant</h2>
          <div class="text-sm text-gray-500 ml-2">
            <span class="mr-2"><i class="fas fa-star text-yellow-400"></i> 3.357 Reviews</span>
            <span>Kohinoor Televideo</span>
          </div>
        </div>
        <p class="text-gray-700 mb-4">
          Handling different types of transactions. Processes credit and debit cards, handles cash, ...
        </p>
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-500">
            1-2 Yrs - Not disclosed - Mumbai, Chembur
          </span>
          <button class="px-3 py-2 text-sm font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700">
            Apply
          </button>
        </div>
      </div>


      <div class="job-listing bg-white shadow-md rounded-lg overflow-hidden flex flex-col p-6">
        <div class="flex items-center mb-2">
            
          <h2 class="text-xl font-bold text-gray-800"></h2>
          <div class="text-sm text-gray-500 ml-2">
            <span class="mr-2"><i class="fas fa-star text-yellow-400"></i> 4.1 (6567 Reviews)</span>
            <span>Shriram Finance Ltd.</span>
          </div>
        </div>
        <ul class="list-disc ml-4 mb-4 text-gray-700">
          <li>Good Communication skills.</li>
          <li>Good Business Promotion skills.</li>
          <li>Good interpersonal skills.</li>
        </ul>
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-500">
            3-8 Yrs - 4-9 Lacs PA - Borivali, Andheri, Ch...
          </span>
          <button class="px-3 py-2 text-sm font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700">
            Apply
          </button>
        </div>
      </div>

          
        </div>

      </div>
    </div>
  );
}

export default JobListings;
