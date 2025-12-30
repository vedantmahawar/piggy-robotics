export type Brand = {
  image: string;
  link: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ComparisonData = {
  features: string[];
  competitors: {
    name: string;
    highlighted: boolean;
    values: (string | boolean)[];
  }[];
};

export const comparisonData = {
  features: [
    "Price",
    "First Prototype Development Time",
    "Actuator Type",
    "Hand Degrees of Freedom",
    "Size of Team",
  ],
  competitors: [
    {
      name: "Piggy Robotics",
      highlighted: true,
      values: ["<$1000", "1 month", "Artifical muscles", "22", "16"],
    },
    // Tesla
    {
      name: "Competitor A",
      highlighted: false,
      values: ["$25,000", "6 months", "Electric actuators", "22", false],
    },
    // Neo
    {
      name: "Competitor B",
      highlighted: false,
      values: ["$20,000", false, "Electric actuators", "22", "250"],
    },
    // Figure
    {
      name: "Competitor C",
      highlighted: false,
      values: ["$42,000", "12 months", "Electric actuators", "20", "360"],
    },
  ],
};
