import { toRgb } from "./colorCode";
import { repository } from "./colorCodeRepository";

const getGcpHeader = () =>
  (document.querySelector("[md-theme=platform-bar]") as HTMLElement | null) ||
  (document.querySelector(".cfc-platform-bar-blue") as HTMLElement | null);

const getCurrentprojectId = () => {
  const queryString = window.location.search.substring(1);
  const queries = queryString.split("&");
  const projectIdQuery = queries.find((query) => query.includes("project"));
  return projectIdQuery?.split("=")[1];
};

(async () => {
  const projectId = getCurrentprojectId();
  if (!projectId) return;
  const code = await repository.findByProjectId(projectId);
  if (!code) return;
  getGcpHeader()!.style.backgroundColor = `rgb(${toRgb(code).red},${
    toRgb(code).green
  },${toRgb(code).blue})`;
})();

export {};
