import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";

export default function DatePickerComponent() {
  return (
    <div className="container mx-auto mt-8 w-[100vw]">
      <form className="max-w-md mx-auto p-4 bg-white">
        <h4 className="text-xl font-extralight mb-4 text-center">
          Choose the Dates That Define Your Adventure!
        </h4>
        <div date-rangepicker class="flex items-center">
          <div class="relative">
            <input
              name="start"
              type="date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date start"
            />
          </div>
          <span class="mx-4 text-gray-500">to</span>
          <div class="relative">
            <input
              name="end"
              type="date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date end"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
