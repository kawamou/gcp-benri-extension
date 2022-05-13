import { useState } from "react";
import { repository } from "./colorCodeRepository";
import "react-tabs/style/react-tabs.css";

export const EditPage = () => {
  const [projectId, setProjectId] = useState("foo-project");
  const [colorCode, setColorCode] = useState("FFFFFF");

  const handleOnChangeProjectId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectId(e.target.value);
  };

  const handleOnChangeColorCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorCode(e.target.value);
  };

  const handleOnSubmit = () => {
    if (!projectId || !colorCode) return;
    console.log("new!");
    repository.save({
      key: new Date().getTime(),
      projectId: projectId,
      code: colorCode,
    });
    setProjectId("");
    setColorCode("");
  };
  return (
    <div className="w-full mx-auto">
      <form
        className="w-full"
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit();
        }}
      >
        <div className="flex items-center mb-2">
          <div className="w-1/3">
            <label
              className="block text-gray-600 mb-0 pr-4"
              htmlFor="Project Id"
            >
              Project
            </label>
          </div>
          <div className="w-2/3">
            <input
              id=""
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={projectId}
              onChange={(e) => {
                handleOnChangeProjectId(e);
              }}
            />
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/3">
            <label
              className="block text-gray-600 mb-0 pr-4"
              htmlFor="Project Id"
            >
              Code
            </label>
          </div>
          <div className="w-2/3">
            <input
              id=""
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={colorCode}
              onChange={(e) => {
                handleOnChangeColorCode(e);
              }}
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1/3"></div>
          <div className="w-2/3">
            <button
              type="button"
              value="submit"
              className="shadow bg-blue-500 hover:bg-blue-300 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded"
              onClick={(e) => {
                e.preventDefault();
                handleOnSubmit();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
