export const getDayOfWeek = (date: string) => {
  const day = new Date(date).getDay();
  return days[day] || "Invalid Date";
};

const days = [
  "SUN",
  "MON",
  "TUE",
  "WES",
  "THU",
  "FRI",
  "SAT",
];
