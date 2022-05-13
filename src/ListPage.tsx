import { useEffect, useState } from "react";
import { repository } from "./colorCodeRepository";
import { ColorCode } from "./colorCode";

export const ListPage = () => {
  const [colorCodes, setColorCodes] = useState<ColorCode[]>();
  useEffect(() => {
    repository.getAll().then((all) => setColorCodes(all));
  });
  return (
    <table className="table-auto w-full text-gray-600">
      <thead className="">
        <tr>
          <th className="px-4 py-2 font-normal">projectId</th>
          <th className="px-4 py-2 font-normal">code</th>
          <th className="px-4 py-2 font-normal"></th>
        </tr>
      </thead>
      {colorCodes?.map((colorCode) => {
        return (
          <>
            <tbody>
              <tr key={colorCode.key}>
                <td className="border border-x-0 px-4 py-2">
                  {colorCode.projectId}
                </td>
                <td className="border border-x-0 px-4 py-2">
                  {colorCode.code}
                </td>
                <td className="border border-x-0 px-4 py-2">
                  <button
                    className="text-blue-500 hover:text-blue-300"
                    type="button"
                    onClick={() => {
                      repository.deleteByProjectId(colorCode.projectId);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </>
        );
      })}
    </table>
  );
};
