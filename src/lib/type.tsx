interface Option {
  id: string;
  text: string;
}

interface SingleSelectionQuestion {
  type: "single_selection";  // Literal type
  question: string;
  options: Option[];
  correctAnswer: string;
}

interface MultipleSelectionQuestion {
  type: "multiple_selection";  // Literal type
  question: string;
  options: Option[];
  correctAnswers: string[];
}

export type Question = SingleSelectionQuestion | MultipleSelectionQuestion;
