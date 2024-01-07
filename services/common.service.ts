export const classList = {

  red: [
    "bg-red-50",
    "bg-red-100",
    "bg-red-200",
    "bg-red-400",
    "bg-red-500",
    "bg-red-600",
    "bg-red-700",
    "bg-red-800",
    "bg-red-900",
    "bg-red-950",
  ],

  
  romdom : [
    "#fef2f2",
    "#fee2e2",
    "#fecaca",
    "#fca5a5",
    "#f87171",
    "#ef4444",
    "#dc2626",
    "#b91c1c",
    "#991b1b",
    "#7f1d1d",
    "#450a0a",
  ]
};

export const getRamDomClass = (list : any) => {
  return list?.[Math.floor(Math.random() * list.length)];
};
