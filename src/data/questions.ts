import data from "./sessionize";

export type Question = {
  id: number;
  question: String;
  questionType: "Checkbox" | "Short_Text" | "Web_address" | "File_upload";
  sort: number;
};

export default data.questions as Question[];
