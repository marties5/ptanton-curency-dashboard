import { Question } from "@/lib/type";
export const questions: Question[] = [
  {
    type: "single_selection",
    question: "Manakah dari berikut ini yang merupakan bilangan prima?",
    options: [
      { id: "A", text: "9" },
      { id: "B", text: "12" },
      { id: "C", text: "7" },
      { id: "D", text: "15" },
      { id: "E", text: "1" },
    ],
    correctAnswer: "C",
  },
  {
    type: "multiple_selection",
    question:
      "Pilihlah planet-planet yang termasuk dalam planet luar di tata surya:",
    options: [
      { id: "A", text: "Mars" },
      { id: "B", text: "Jupiter" },
      { id: "C", text: "Saturnus" },
      { id: "D", text: "Venus" },
      { id: "E", text: "Uranus" },
    ],
    correctAnswers: ["B", "C", "E"],
  },
  {
    type: "single_selection",
    question: "Siapa penulis novel 'Laskar Pelangi'?",
    options: [
      { id: "A", text: "Andrea Hirata" },
      { id: "B", text: "Pramoedya Ananta Toer" },
      { id: "C", text: "Tere Liye" },
      { id: "D", text: "Dewi Lestari" },
      { id: "E", text: "Sapardi Djoko Damono" },
    ],
    correctAnswer: "A",
  },
  {
    type: "multiple_selection",
    question: "Pilihlah hewan-hewan yang termasuk mamalia:",
    options: [
      { id: "A", text: "Ikan Hiu" },
      { id: "B", text: "Kucing" },
      { id: "C", text: "Burung Elang" },
      { id: "D", text: "Gajah" },
      { id: "E", text: "Kanguru" },
    ],
    correctAnswers: ["B", "D", "E"],
  },
  {
    type: "single_selection",
    question: "Apa ibukota dari Jepang?",
    options: [
      { id: "A", text: "Kyoto" },
      { id: "B", text: "Osaka" },
      { id: "C", text: "Tokyo" },
      { id: "D", text: "Nagoya" },
      { id: "E", text: "Hiroshima" },
    ],
    correctAnswer: "C",
  },
  {
    type: "multiple_selection",
    question: "Manakah dari berikut ini yang merupakan bahasa pemrograman?",
    options: [
      { id: "A", text: "Python" },
      { id: "B", text: "HTML" },
      { id: "C", text: "React" },
      { id: "D", text: "C++" },
      { id: "E", text: "CSS" },
    ],
    correctAnswers: ["A", "D"],
  },
  {
    type: "single_selection",
    question: "Siapakah Presiden pertama Indonesia?",
    options: [
      { id: "A", text: "Soekarno" },
      { id: "B", text: "Soeharto" },
      { id: "C", text: "Megawati Soekarnoputri" },
      { id: "D", text: "BJ Habibie" },
      { id: "E", text: "Joko Widodo" },
    ],
    correctAnswer: "A",
  },
  {
    type: "multiple_selection",
    question: "Pilihlah unsur-unsur kimia yang merupakan logam:",
    options: [
      { id: "A", text: "Besi" },
      { id: "B", text: "Oksigen" },
      { id: "C", text: "Perak" },
      { id: "D", text: "Karbon" },
      { id: "E", text: "Emas" },
    ],
    correctAnswers: ["A", "C", "E"],
  },
  {
    type: "single_selection",
    question: "Apa nama alat musik tradisional dari Jawa Barat?",
    options: [
      { id: "A", text: "Angklung" },
      { id: "B", text: "Gamelan" },
      { id: "C", text: "Sasando" },
      { id: "D", text: "Kolintang" },
      { id: "E", text: "Tifa" },
    ],
    correctAnswer: "A",
  },
  {
    type: "multiple_selection",
    question: "Pilihlah negara-negara yang terletak di Benua Afrika:",
    options: [
      { id: "A", text: "Nigeria" },
      { id: "B", text: "Brazil" },
      { id: "C", text: "Mesir" },
      { id: "D", text: "Kenya" },
      { id: "E", text: "Argentina" },
    ],
    correctAnswers: ["A", "C", "D"],
  },
];
