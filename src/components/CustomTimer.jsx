import React, { useState } from "react";

function CustomTimer() {
  const [formData, setFormData] = useState({
    workDuration: "",
    breakDuration: "",
    totalCycles: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleForm(e) {
    e.preventDefault();
    if (formData.workDuration && formData.breakDuration) {
      window.location = `/custom?work=${formData.workDuration}?break=${
        formData.breakDuration
      }?cycle=${formData.totalCycles ? formData.totalCycles : 5}`;
      exit();
    }
    alert(
      "Sorry! You need to provide both BreakDuration and WorkDuration before submitting"
    );
  }

  return (
    <>
      <div className="w-full flex flex-col items-center gap-5 py-10">
        <div className="text-center font-semibold">
          <h1 className="text-2xl md:text-4xl text-slate-300">Use Custom</h1>
          <p className="text-xs md:text-base italic text-slate-400">
            Set up a custom timer of you choice
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-y-2 gap-x-5 justify-center">
          <form
            className="w-full max-w-sm flex flex-col items-center gap-3 bg-gray-700/30 p-5 rounded"
            onSubmit={handleForm}
          >
            <label htmlFor="workDuration"></label>
            <input
              className="w-full bg-gray-700 px-5 py-3 rounded outline-none"
              type="number"
              id="workDuration"
              name="workDuration"
              placeholder="Working Duration (in minutes)"
              min={1}
              max={180}
              required
              value={formData.workDuration}
              onChange={handleChange}
            ></input>
            <label htmlFor="breakDuration"></label>
            <input
              className="w-full bg-gray-700 px-5 py-3 rounded outline-none"
              type="number"
              id="breakDuration"
              name="breakDuration"
              placeholder="Breaks Duration (in minutes)"
              min={1}
              max={60}
              required
              value={formData.breakDuration}
              onChange={handleChange}
            ></input>
            <label htmlFor="totalCycles"></label>
            <input
              className="w-full bg-gray-700 px-5 py-3 rounded outline-none"
              type="number"
              id="totalCycles"
              name="totalCycles"
              placeholder="No. Of Cycles (Optional)"
              min={1}
              max={100}
              value={formData.totalCycles}
              onChange={handleChange}
            ></input>
            <button
              className="w-full mt-2 px-8 py-2 bg-blue-700 hover:bg-blue-700/80 rounded cursor-pointer font-semibold"
              type="submit"
            >
              Let's Start
            </button>
          </form>
          <div className="w-full max-w-sm flex flex-col gap-3 bg-gray-700/30 p-5 text-sm text-slate-400 cursor-default rounded">
            <h3 className="text-xl">Note:</h3>
            <p>
              1. <span className="font-semibold">Working Duration</span> is the
              maximum time you can work continuously in one sitting.
            </p>
            <p>
              2. <span className="font-semibold">Breaks Duration</span> as name
              suggests is the duration of a break.
            </p>
            <p>
              3. <span className="font-semibold">No. Of Cycles</span> are the
              total number of sittings you want to complete your work.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomTimer;
