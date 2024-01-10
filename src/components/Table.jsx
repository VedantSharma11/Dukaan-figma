import React from 'react';

const Table = () => {
  return (
    <>
      <table className="w-full border-collapse ">
        <thead className="bg-gray-200 ">
          <tr>
            <th className="py-2 px-4 text-[14px] text-left text-gray-600">Order ID</th>
            <th className="py-2 px-4 text-[14px] text-left text-gray-600">Status</th>
            <th className="py-2 px-4 text-[14px] text-left text-gray-600">Transaction ID</th>
            <th className="py-2 px-4 text-[14px] text-left text-gray-600">Refund state</th>
            <th className="py-2 px-4 text-[14px] text-right text-gray-600">Order amount</th>
          </tr>
        </thead>
        <tbody className='text-[13px] text-gray-600 font-semibold'>
          <tr className="border-t">
            <td className="py-2 px-4 text-sky-600">#281209</td>
            <td className="py-2 px-4 text-gray-700">🟢 Successful</td>
            <td className="py-2 px-4">1323232343</td>
            <td className="py-2 px-4">Today, 8:45 PM</td>
            <td className="py-2 px-4 text-right text-gray-700">₹ 1,125.00</td>
          </tr>
          <tr className="border-t">
            <td className="py-2 px-4 text-sky-600">#281209</td>
            <td className="py-2 px-4 text-gray-700">🟢 Successful</td>
            <td className="py-2 px-4">1323232343</td>
            <td className="py-2 px-4">Yesterday, 3:00 PM</td>
            <td className="py-2 px-4 text-right text-gray-700">₹ 1,125.00</td>
          </tr>
          <tr className="border-t">
            <td className="py-2 px-4 text-sky-600">#281209</td>
            <td className="py-2 px-4 text-gray-700">🟢 Successful</td>
            <td className="py-2 px-4">1323232343</td>
            <td className="py-2 px-4">12 July 2023, 3:00 PM</td>
            <td className="py-2 px-4 text-right text-gray-700">₹ 1,125.00</td>
          </tr>
          <tr className="border-t">
            <td className="py-2 px-4 text-sky-600">#281209</td>
            <td className="py-2 px-4 text-gray-700">🟢 Successful</td>
            <td className="py-2 px-4">1323232343</td>
            <td className="py-2 px-4">12 July 2023, 3:00 PM</td>
            <td className="py-2 px-4 text-right text-gray-700">₹ 1,125.00</td>
          </tr>
          <tr className="border-t">
            <td className="py-2 px-4 text-sky-600">#281209</td>
            <td className="py-2 px-4 text-gray-700">🟢 Successful</td>
            <td className="py-2 px-4">1323232343</td>
            <td className="py-2 px-4">12 July 2023, 3:00 PM</td>
            <td className="py-2 px-4 text-right text-gray-700">₹ 1,125.00</td>
          </tr>
          <tr className="border-t">
            <td className="py-2 px-4 text-sky-600">#281209</td>
            <td className="py-2 px-4 text-gray-700">🟢 Successful</td>
            <td className="py-2 px-4">1323234343</td>
            <td className="py-2 px-4">12 July 2023, 3:00 PM</td>
            <td className="py-2 px-4 text-right text-gray-700">₹ 1,125.00</td>
          </tr>
          <tr className="border-t">
            <td className="py-2 px-4 text-sky-600">#281209</td>
            <td className="py-2 px-4 text-gray-700">🟢 Successful</td>
            <td className="py-2 px-4">1323234343</td>
            <td className="py-2 px-4">12 July 2023, 3:00 PM</td>
            <td className="py-2 px-4 text-right text-gray-700">₹ 1,125.00</td>
          </tr>
          <tr className="border-t">
            <td className="py-2 px-4 text-sky-600">#281209</td>
            <td className="py-2 px-4 text-gray-700">🟢 Successful</td>
            <td className="py-2 px-4">1323232343</td>
            <td className="py-2 px-4">12 July 2023, 3:00 PM</td>
            <td className="py-2 px-4 text-right text-gray-700">₹ 1,125.00</td>
          </tr>
          <tr className="border-t">
            <td className="py-2 px-4 text-sky-600">#281209</td>
            <td className="py-2 px-4 text-gray-700">🟢 Successful</td>
            <td className="py-2 px-4">1323232343</td>
            <td className="py-2 px-4">12 July 2023, 3:00 PM</td>
            <td className="py-2 px-4 text-right text-gray-700">₹ 1,125.00</td>
          </tr>
          <tr className="border-t">
            <td className="py-2 px-4 text-sky-600">#281209</td>
            <td className="py-2 px-4 text-gray-700">🟢 Successful</td>
            <td className="py-2 px-4">1323232343</td>
            <td className="py-2 px-4">12 July 2023, 3:00 PM</td>
            <td className="py-2 px-4 text-right text-gray-700">₹ 1,125.00</td>
          </tr>
          <tr className="border-t">
            <td className="py-2 px-4 text-sky-600">#281209</td>
            <td className="py-2 px-4 text-gray-700">🟢 Successful</td>
            <td className="py-2 px-4">1323232343</td>
            <td className="py-2 px-4">12 July 2023, 3:00 PM</td>
            <td className="py-2 px-4 text-right text-gray-700">₹ 1,125.00</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
