export const numberFormatter = (num: number | string, digit?: number) => {
    const number = Number(num);
    if (isNaN(number)) return "N/A";
    return num !== undefined && num !== null
      ? Number(num).toLocaleString(undefined, {
        minimumFractionDigits: digit,
        maximumFractionDigits: digit,
      })
      : "N/A";
  };
  