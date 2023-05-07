export const datas = [
  {
    task: "Attend meeting at NIHI",
    createdon: "2023-04-07 03:00 ",
    completedon: "2023-04-12 03:12",
    done: true,
  },
  {
    task: "Go to gym.",
    createdon: "2023-04-16 02:00 ",
    completedon: "2023-04-12 03:12",
    done: true,
  },
  {
    task: "Send invoice to Mike on Tuesday by 8 pm.",
    createdon: "2023-04-12 04:00 ",
    completedon: "",
    done: false,
  },
];

export default function getDatas() {
  return datas;
}
