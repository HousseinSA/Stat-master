import React from "react";

const ExampleComponent = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-4">
      {/* Header */}
      <header className="w-full bg-gray-800 px-6 py-4 text-white">
        <h1 className="text-2xl font-bold">Your Website</h1>
        <div className="mt-2 flex justify-end">
          <button className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white">
            Button 1
          </button>
          <button className="rounded-md bg-green-500 px-4 py-2 text-white">
            Button 2
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-4 flex flex-grow">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-200 p-4">
          <h2 className="text-lg font-semibold">Sidebar</h2>
          <ul className="mt-2">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </aside>kj

        {/* Main Content Area */}
        <section className="w-full flex-grow bg-gray-100 p-4">
          <h2 className="mb-4 text-xl font-semibold">Main Content</h2>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              {/* Table Head */}
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Header 1
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Header 2
                  </th>
                  {/* Add more headers as needed */}
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">Data 1</td>
                  <td className="whitespace-nowrap px-6 py-4">Data 2</td>
                  {/* Add more data cells as needed */}
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ExampleComponent;
