import data from "./sessionize";

export type Question = {
  id: number;
  question: String;
  questionType: "Checkbox" | "Short_Text" | "Web_address" | "File_upload";
  sort: number;
};

const boston = data.boston.questions as Question[];
const barcelona = data.barcelona.questions as Question[];

export default {
  boston,
  barcelona,
};
