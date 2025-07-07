const healthTopics = [
  {
    id: "nutrition",
    title: "Nutrition",
    description: "Eating well after 40",
    articles: [
      {
        id: "nutrition1",
        title: "Am I getting enough vitamin D?",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
      {
        id: "nutrition2",
        title: "Vitamins and Minerals Guide",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
      {
        id: "nutrition3",
        title: "Healthy Eating for Seniors",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
    ],
  },
  {
    id: "weight-balance",
    title: "Weight Balance",
    description: "Maintaining a healthy weight",
    articles: [
      {
        id: "weight1",
        title: "Maintaining Healthy Weight",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
      {
        id: "weight2",
        title: "Portion Control Tips",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
      {
        id: "weight3",
        title: "Metabolism and Aging",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
    ],
  },
  {
    id: "physical-activity",
    title: "Physical Activity",
    description: "Exercises to stay active",
    articles: [
      {
        id: "activity1",
        title: "Safe Exercises for Seniors",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
      {
        id: "activity2",
        title: "Walking for Health",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
      {
        id: "activity3",
        title: "Chair Exercises",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
    ],
  },
  {
    id: "cancer-screening",
    title: "Cancer Screening",
    description: "Tests and early detection",
    articles: [
      {
        id: "cancer1",
        title: "Recommended Screenings by Age",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
      {
        id: "cancer2",
        title: "Early Detection Benefits",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
      {
        id: "cancer3",
        title: "Understanding Test Results",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
    ],
  },
  {
    id: "preventive-medicine",
    title: "Preventive Medicine",
    description: "Checkups and vaccinations",
    articles: [
      {
        id: "preventive1",
        title: "Annual Checkups Importance",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
      {
        id: "preventive2",
        title: "Vaccinations for Adults",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
      {
        id: "preventive3",
        title: "Managing Chronic Conditions",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
    ],
  },
  {
    id: "habit-correction",
    title: "Habit Correction",
    description: "Build better health habits",
    articles: [
      {
        id: "habit1",
        title: "Breaking Bad Health Habits",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
      {
        id: "habit2",
        title: "Building Healthy Routines",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
      {
        id: "habit3",
        title: "Smoking Cessation Tips",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
    ],
  },
  {
    id: "diabetes",
    title: "Diabetes",
    description: "Managing blood sugar",
    articles: [
      {
        id: "diabetes1",
        title: "Managing Type 2 Diabetes",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
      {
        id: "diabetes2",
        title: "Blood Sugar Monitoring",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
      {
        id: "diabetes3",
        title: "Diabetes-friendly Recipes",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
    ],
  },
  {
    id: "dementia",
    title: "Dementia",
    description: "Cognitive health after 40",
    articles: [
      {
        id: "dementia1",
        title: "Early Signs of Dementia",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
      {
        id: "dementia2",
        title: "Brain-healthy Activities",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
      {
        id: "dementia3",
        title: "Caring for Loved Ones with Dementia",
        summary:
          "Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough. Learn about the importance of vitamin D and how to ensure you're getting enough.",
      },
    ],
  },
];

export { healthTopics };
