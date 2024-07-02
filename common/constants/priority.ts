import PriorityEnum from "@enums/priority.enum";

const priorityList = [
  {
    type: PriorityEnum.HIGHT,
    text: "Haute",
    background: "#FFCDD2",
    foreground: "#D32F2F"
  },
  {
    type: PriorityEnum.MEDIUM,
    text: "Moyen",
    background: "#FFF9C4", 
    foreground: "#FBC02D"
  },
  {
    type: PriorityEnum.LOW,
    text: "Basse",
    background: "#C8E6C9", 
    foreground: "#388E3C"
  },
  {
    type: PriorityEnum.URGENT,
    text: "Urgent",
    background: "#FFC8C9", 
    foreground: "#D32F2F"
  }
];

export default priorityList;
