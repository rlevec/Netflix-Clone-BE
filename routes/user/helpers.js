export const handleDateObject = () => {
  let dateObj = new Date();

  const monthsEng = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthsHr = [
    "Siječanj",
    "Veljača",
    "Ožujak",
    "Travanj",
    "Svibanj",
    "Lipanj",
    "Srpanj",
    "Kolovoz",
    "Rujan",
    "Listopad",
    "Studeni",
    "Prosinac",
  ];

  let year = dateObj.getFullYear();

  let month = parseInt(("0" + (dateObj.getMonth() + 1)).slice(-2));

  const dayOfMonth = dateObj?.getDate();

  let handleMonthTitle = () => {
    return {
      monthTitleEng: monthsEng[month - 1],
      monthTitleHr: monthsHr[month - 1],
    };
  };

  return { month, year, monthTitle: handleMonthTitle(), dayOfMonth };
};


export const profileGameNames = [
  {
    id: 0,
    name: "Flavio_111",
  },
  {
    id: 1,
    name: "Dzovani_222",
  },
  {
    id: 1,
    name: "Ramzes_333",
  },
  {
    id: 3,
    name: "Ladislav_444",
  },
  {
    id: 4,
    name: "Sudoper_555",
  },
];