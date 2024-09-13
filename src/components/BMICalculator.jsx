import React, { useState } from "react";

const BMICalculator = () => {
  const [hght, setHght] = useState("");
  const [wght, setWght] = useState("");
  const [bmi, setBmi] = useState(null);

  const handleHght = (e) => {
    setHght(e.target.value);
  };

  const handleWght = (e) => {
    setWght(e.target.value);
  };

  const handleCalculate = (e) => {
    e.preventDefault();

    if (hght > 0 && wght > 0) {
      const heightInMeters = hght / 100;
      const calculatedBmi = (wght / (heightInMeters * heightInMeters)).toFixed(
        2
      );

      setBmi(calculatedBmi);
    }

    setHght("");
    setWght("");
  };

  return (
    <section className="bg-gray-100 bg-cover bg-center font-sans">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-3xl font-bold text-gray-900"
        >
          XERO<span className=" text-primary-600">BMI</span>
        </a>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              BMI Calculator
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleCalculate}>
              <div>
                <label
                  htmlFor="height"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your height (cm)
                </label>
                <input
                  type="number"
                  name="height"
                  id="height"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter your height"
                  required
                  value={hght}
                  onChange={handleHght}
                />
              </div>
              <div>
                <label
                  htmlFor="weight"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your weight (kg)
                </label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter your weight"
                  required
                  value={wght}
                  onChange={handleWght}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Calculate BMI
              </button>
            </form>

            {bmi && (
              <div className="mt-6 text-center">
                <h2 className="text-xl font-bold text-gray-900">
                  Your BMI is: {bmi}
                </h2>
                <p className="text-gray-700">
                  {bmi < 18.5 && "You are underweight."}
                  {bmi >= 18.5 && bmi < 24.9 && "You are normal weight."}
                  {bmi >= 25 && bmi < 29.9 && "You are overweight."}
                  {bmi >= 30 && "You are obese."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
