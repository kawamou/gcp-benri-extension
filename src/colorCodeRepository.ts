import { ColorCode } from "./colorCode";

export const repository = {
  async getAll(): Promise<ColorCode[]> {
    const value = await chrome.storage.sync.get("colorCode");
    return value.colorCode ?? [];
  },
  async findByProjectId(projectId: string): Promise<ColorCode | undefined> {
    const all = await this.getAll();
    console.log(all);
    return all.find((data) => data.projectId === projectId);
  },
  async save(newColorCode: ColorCode): Promise<void> {
    const all = await this.getAll();
    if (
      all.filter((colorCode) => colorCode.projectId == newColorCode.projectId)
        .length > 0
    ) {
      return;
    }
    const newAll = [newColorCode, ...all];
    chrome.storage.sync.set({ colorCode: newAll });
  },
  async deleteByProjectId(projectId: string) {
    const all = await this.getAll();
    const newAll = all.filter((colorCode) => colorCode.projectId !== projectId);
    chrome.storage.sync.set({ colorCode: newAll });
  },
};
