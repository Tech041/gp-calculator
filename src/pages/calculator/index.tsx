"use client";
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Calculator = () => {
  const [data, setData] = useState<ReactNode>([]);
  const [englishGrade, setEnglishGrade] = useState<number>();
  const [englishCreditLoad, setEnglishCreditLoad] = useState<number>();
  const [mathsGrade, setMathsGrade] = useState<number>();
  const [mathsCreditLoad, setMathsCreditLoad] = useState<number>();
  const [biologyGrade, setBiologyGrade] = useState<number>();
  const [biologyCreditLoad, setBiologyCreditLoad] = useState<number>();
  const [chemistryGrade, setChemistryGrade] = useState<number>();
  const [chemistryCreditLoad, setChemistryCreditLoad] = useState<number>();
  const [physicsGrade, setPhysicsGrade] = useState<number>();
  const [physicsCreditLoad, setPhysicsCreditLoad] = useState<number>();
  const [geograpghyGrade, setGeographyGrade] = useState<number>();
  const [geographyCreditLoad, setGeographyCreditLoad] = useState<number>();
  const [economicsGrade, setEconomicsGrade] = useState<number>();
  const [economicsCreditLoad, setEconomicsCreditLoad] = useState<number>();
  const [agricultureGrade, setAgricultureGrade] = useState<number>();
  const [agricultureCreditLoad, setAgricultureCreditLoad] = useState<number>();
  const [historyGrade, setHistoryGrade] = useState<number>();
  const [historyCreditLoad, setHistroyCreditLoad] = useState<number>();
  const handleSubmit = () => {
    const gradeArr = [
      englishGrade,
      mathsGrade,
      chemistryGrade,
      economicsGrade,
      geograpghyGrade,
      biologyGrade,
      historyGrade,
      agricultureGrade,
      physicsGrade,
    ];
    const CreditArr = [
      englishCreditLoad,
      mathsCreditLoad,
      chemistryCreditLoad,
      economicsCreditLoad,
      geographyCreditLoad,
      biologyCreditLoad,
      historyCreditLoad,
      agricultureCreditLoad,
      physicsCreditLoad,
    ];

    const totalCredit = CreditArr.reduce((acc: number, curr) => acc + curr, 0);
    // console.log(totalCredit);

    const productOfGradeAndCreditLoad = CreditArr.map(
      (item, index) => item * gradeArr[index]
    );

    const sumProduct = productOfGradeAndCreditLoad.reduce(
      (ac, cr) => ac + cr,
      0
    );
    const calc = sumProduct / totalCredit;
    setData(calc);
    if (calc > 0) {
      toast.success(`Your CGPA is ${calc}`);
    }
  };

  return (
    <main className="">
      <div className=" pl-10 pt-4">
        <Link to={"/"}>
          <button className="text-xl font-bold text-blue-500">Back</button>
        </Link>{" "}
      </div>
      <div className="h-full w-full bg-gray-400 ">
        <p className="text-center pt-10 text-3xl font-bold text-white">
          Simple GP Calculator
        </p>
        <p className=" text-center  py-2">By Pharm Nelson</p>
        <div className="flex justify-evenly gap-18  my-10 text-white font-semibold text-2xl">
          <span className="">Subject</span>
          <span className="">Grade</span>
          <span className="">Credit Load</span>
        </div>
        <div className="parent flex items-center   justify-evenly ">
          <div className="flex  items-center w-20 ">
            <label htmlFor="subject" className="flex-1">
              English
            </label>
          </div>
          <div className="flex  flex-col items-center gap-4 w-20">
            <label htmlFor="grade" className=" flex-1">
              Grade
            </label>
            <input
              onChange={(e) => setEnglishGrade(parseInt(e.target.value))}
              type="number"
              id="grade"
              className="border-2 w-20 flex-1 "
            />
          </div>
          <div className="flex  items-center gap-4 w-20 flex-col">
            <label htmlFor="credit-load" className="flex-1">
              Load
            </label>
            <input
              onChange={(e) => setEnglishCreditLoad(parseInt(e.target.value))}
              type="number"
              id="credit-load"
              className="border-2 w-20 flex-1 "
            />
          </div>
        </div>
        <div className="parent flex items-center  justify-evenly my-10  ">
          <div className="flex  items-center w-20 ">
            <label htmlFor="subject" className="flex-1">
              Maths
            </label>
          </div>
          <div className="flex flex-col  items-center gap-4 w-20">
            <label htmlFor="grade" className="flex-1">
              Grade
            </label>
            <input
              onChange={(e) => setMathsGrade(parseInt(e.target.value))}
              type="number"
              id="grade"
              className="border-2 w-20  flex-1"
            />
          </div>
          <div className="flex flex-col  items-center gap-4 w-20">
            <label htmlFor="credit-load" className="flex-1">
              Load
            </label>
            <input
              onChange={(e) => setMathsCreditLoad(parseInt(e.target.value))}
              type="number"
              id="credit-load"
              className="border-2 w-20 flex-1 "
            />
          </div>
        </div>
        <div className="parent flex items-center  justify-evenly my-10  ">
          <div className="flex  items-center w-20 ">
            <label htmlFor="subject" className="flex-1">
              Biology
            </label>
          </div>
          <div className="flex flex-col  items-center gap-4 w-20">
            <label htmlFor="grade" className="flex-1">
              Grade
            </label>
            <input
              onChange={(e) => setBiologyGrade(parseInt(e.target.value))}
              type="number"
              id="grade"
              className="border-2 w-20  flex-1"
            />
          </div>
          <div className="flex flex-col  items-center gap-4 w-20">
            <label htmlFor="credit-load" className="flex-1">
              Load
            </label>
            <input
              onChange={(e) => setBiologyCreditLoad(parseInt(e.target.value))}
              type="number"
              id="credit-load"
              className="border-2 w-20 flex-1 "
            />
          </div>
        </div>
        <div className="parent flex items-center  justify-evenly my-10  ">
          <div className="flex  items-center w-20 ">
            <label htmlFor="subject" className="flex-1">
              Chemistry
            </label>
          </div>
          <div className="flex flex-col  items-center gap-4 w-20">
            <label htmlFor="grade" className="flex-1">
              Grade
            </label>
            <input
              onChange={(e) => setChemistryGrade(parseInt(e.target.value))}
              type="number"
              id="grade"
              className="border-2 w-20  flex-1"
            />
          </div>
          <div className="flex flex-col  items-center gap-4 w-20">
            <label htmlFor="credit-load" className="flex-1">
              Load
            </label>
            <input
              onChange={(e) => setChemistryCreditLoad(parseInt(e.target.value))}
              type="number"
              id="credit-load"
              className="border-2 w-20 flex-1 "
            />
          </div>
        </div>
        <div className="parent flex items-center  justify-evenly my-10  ">
          <div className="flex  items-center w-20 ">
            <label htmlFor="subject" className="flex-1">
              Geography
            </label>
          </div>
          <div className="flex flex-col  items-center gap-4 w-20">
            <label htmlFor="grade" className="flex-1">
              Grade
            </label>
            <input
              onChange={(e) => setGeographyGrade(parseInt(e.target.value))}
              type="number"
              id="grade"
              className="border-2 w-20  flex-1"
            />
          </div>
          <div className="flex flex-col  items-center gap-4 w-20">
            <label htmlFor="credit-load" className="flex-1">
              Load
            </label>
            <input
              onChange={(e) => setGeographyCreditLoad(parseInt(e.target.value))}
              type="number"
              id="credit-load"
              className="border-2 w-20 flex-1 "
            />
          </div>
        </div>
        <div className="parent flex items-center  justify-evenly my-10  ">
          <div className="flex  items-center w-20 ">
            <label htmlFor="subject" className="flex-1">
              Economics
            </label>
          </div>
          <div className="flex flex-col  items-center gap-4 w-20">
            <label htmlFor="grade" className="flex-1">
              Grade
            </label>
            <input
              onChange={(e) => setEconomicsGrade(parseInt(e.target.value))}
              type="number"
              id="grade"
              className="border-2 w-20  flex-1"
            />
          </div>
          <div className="flex flex-col  items-center gap-4 w-20">
            <label htmlFor="credit-load" className="flex-1">
              Load
            </label>
            <input
              onChange={(e) => setEconomicsCreditLoad(parseInt(e.target.value))}
              type="number"
              id="credit-load"
              className="border-2 w-20 flex-1 "
            />
          </div>
        </div>
        <div className="parent flex items-center  justify-evenly my-10  ">
          <div className="flex  items-center w-20 ">
            <label htmlFor="subject" className="flex-1">
              Agriculture
            </label>
          </div>
          <div className="flex flex-col  items-center gap-4 w-20">
            <label htmlFor="grade" className="flex-1">
              Grade
            </label>
            <input
              onChange={(e) => setAgricultureGrade(parseInt(e.target.value))}
              type="number"
              id="grade"
              className="border-2 w-20  flex-1"
            />
          </div>
          <div className="flex flex-col  items-center gap-4 w-20">
            <label htmlFor="credit-load" className="flex-1">
              Load
            </label>
            <input
              onChange={(e) =>
                setAgricultureCreditLoad(parseInt(e.target.value))
              }
              type="number"
              id="credit-load"
              className="border-2 w-20 flex-1 "
            />
          </div>
        </div>
        <div className="parent flex items-center  justify-evenly my-10  ">
          <div className="flex  items-center w-20 ">
            <label htmlFor="subject" className="flex-1">
              History
            </label>
          </div>
          <div className="flex flex-col  items-center gap-4 w-20">
            <label htmlFor="grade" className="flex-1">
              Grade
            </label>
            <input
              onChange={(e) => setHistoryGrade(parseInt(e.target.value))}
              type="number"
              id="grade"
              className="border-2 w-20  flex-1"
            />
          </div>
          <div className="flex flex-col  items-center gap-4 w-20">
            <label htmlFor="credit-load" className="flex-1">
              Load
            </label>
            <input
              onChange={(e) => setHistroyCreditLoad(parseInt(e.target.value))}
              type="number"
              id="credit-load"
              className="border-2 w-20 flex-1 "
            />
          </div>
        </div>
        <div className="parent flex items-center  justify-evenly my-10  ">
          <div className="flex  items-center w-20 ">
            <label htmlFor="subject" className="flex-1">
              Physics
            </label>
          </div>
          <div className="flex flex-col  items-center gap-4 w-20">
            <label htmlFor="grade" className="flex-1">
              Grade
            </label>
            <input
              onChange={(e) => setPhysicsGrade(parseInt(e.target.value))}
              type="number"
              id="grade"
              className="border-2 w-20  flex-1"
            />
          </div>
          <div className="flex flex-col  items-center gap-4 w-20">
            <label htmlFor="credit-load" className="flex-1">
              Load
            </label>
            <input
              onChange={(e) => setPhysicsCreditLoad(parseInt(e.target.value))}
              type="number"
              id="credit-load"
              className="border-2 w-20 flex-1 "
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="pb-3">Your CGPA is </span>
          <span className="">{data}</span>
        </div>
        <div className=" flex justify-center items-center ">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 py-2 px-4 text-white font-bold mt-5 mb-10"
          >
            Calculate{" "}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Calculator;
