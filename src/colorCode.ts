export type Rgb = {
  red: string;
  green: string;
  blue: string;
};

export type ColorCode = {
  key: number;
  projectId: string;
  code: string;
};

export const toRgb = (colorCode: ColorCode): Rgb => {
  const red = parseInt(colorCode.code.substring(0, 2), 16);
  const green = parseInt(colorCode.code.substring(2, 4), 16);
  const blue = parseInt(colorCode.code.substring(4, 6), 16);
  const rgb: Rgb = {
    red: red.toString(),
    green: green.toString(),
    blue: blue.toString(),
  };
  return rgb;
};

export const newColorCode = (
  key: number,
  projectId: string,
  code: string
): ColorCode => {
  return { key: key, projectId: projectId, code: code };
};
