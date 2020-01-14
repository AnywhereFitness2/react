import {
  ADD_CLASS,
  SCHEDULE_CLASS,
  UNSCHEDULE_CLASS,
  DELETE_CLASS,
  ADD_USER,
  REMOVE_USER
} from "../actions/index";

const initialState = {
  classes: [
    {
      className: "CrossFit Monday",
      classType: "CrossFit",
      startTime: "12:45",
      durationMinutes: 45,
      intensity: "high",
      location: "The Crossworks",
      maxClassSize: 10,
      clients: ["Roy"],
      date: "2020-1-13",
      instructor: "Logan K.",
      id: 1
    },
    {
      className: "Yoga Tuesday",
      classType: "Yoga",
      startTime: "10:15",
      durationMinutes: 30,
      intensity: "low",
      location: "Studio Los Feliz",
      maxClassSize: 5,
      clients: ["Stephen", "Mark", "Tristan", "Jordan"],
      date: "2020-1-14",
      instructor: "Anabella S.",
      id: 2
    },
    {
      className: "Splits Training III",
      classType: "Flexibility",
      startTime: "17:30",
      durationMinutes: 90,
      intensity: "high",
      location: "Panacea Yoga Studio",
      maxClassSize: 15,
      clients: [
        "Jeremy",
        "Stephanie",
        "Alice",
        "Tiffany",
        "Carlos",
        "Andy",
        "Alexandera",
        "Irene",
        "Amber"
      ],
      date: "2020-1-11",
      instructor: "Jessica N.",
      id: 3
    },
    {
      className: "Intro to Flexibility",
      classType: "Flexibility",
      startTime: "20:00",
      durationMinutes: 45,
      intensity: "low",
      location: "Community Center",
      maxClassSize: 20,
      clients: ["Javier", "Michelle", "Tony", "Michael", "Bella", "Brenna"],
      date: "2020-1-9",
      instructor: "Thomas P.",
      id: 4
    },
    {
      className: "5K Training",
      classType: "Running",
      startTime: "6:45",
      durationMinutes: 75,
      intensity: "medium",
      location: "Garden Park",
      maxClassSize: 20,
      clients: ["Summer", "Alondra", "Giovanni", "Alex", "Brianne", "Steffi"],
      date: "2020-1-9",
      instructor: "Autumn W.",
      id: 5
    },
    {
      className: "Bouldering",
      classType: "Climbing",
      startTime: "19:45",
      durationMinutes: 90,
      intensity: "medium",
      location: "The Rock Studio",
      maxClassSize: 15,
      clients: ["Antonio", "Felipe", "Iris", "Naomi"],
      date: "2020-1-10",
      instructor: "William T.",
      id: 6
    },
    {
      className: "Pilates I",
      classType: "Flexibility",
      startTime: "15:15",
      durationMinutes: 75,
      intensity: "low",
      location: "Panacea Yoga Studio",
      maxClassSize: 15,
      clients: ["Ashley", "Frances", "Tomas"],
      date: "2020-1-15",
      instructor: "Sofia S.",
      id: 7
    },
    {
      className: "Marathon Training",
      classType: "Running",
      startTime: "12:00",
      durationMinutes: 60,
      intensity: "high",
      location: "The Rock Studio",
      maxClassSize: 10,
      clients: ["Haley", "Justin", "Ramon", "Austin"],
      date: "2020-1-10",
      instructor: "Serena F.",
      id: 8
    },
    {
      className: "Asana Yoga",
      classType: "Yoga",
      startTime: "21:00",
      durationMinutes: 60,
      intensity: "medium",
      location: "Panacea Yoga Studio",
      maxClassSize: 10,
      clients: ["Steve", "Melanie"],
      date: "2020-1-10",
      instructor: "Katie Q.",
      id: 9
    },
    {
      className: "Lead Climbing I",
      classType: "Climbing",
      startTime: "18:15",
      durationMinutes: 90,
      intensity: "high",
      location: "The Rock Studio",
      maxClassSize: 5,
      clients: ["Jenna", "Britt"],
      date: "2020-1-15",
      instructor: "Mallory U.",
      id: 7
    },
    {
      className: "5K to 10K",
      classType: "Running",
      startTime: "13:00",
      durationMinutes: 60,
      intensity: "high",
      location: "Angel Park",
      maxClassSize: 25,
      clients: ["Nancy", "Alfred", "Marcus", "Marianne"],
      date: "2020-1-10",
      instructor: "Francis A.",
      id: 8
    },
    {
      className: "Hatha Yoga",
      classType: "Yoga",
      startTime: "5:00",
      durationMinutes: 70,
      intensity: "medium",
      location: "Studio Los Feliz",
      maxClassSize: 15,
      clients: ["Rachel", "Rebecca"],
      date: "2020-1-15",
      instructor: "Leo R.",
      id: 9
    }
  ],
  user: ""
};

export const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLASS:
      return {
        ...state,
        classes: [...state.classes, action.payload]
      };

    case SCHEDULE_CLASS:
      return {
        ...state,
        scheduledClasses: [...state.scheduledClasses, action.payload],
        classes: [
          ...state.classes.filter((item, index) => {
            return item !== action.payload;
          })
        ]
      };
    case UNSCHEDULE_CLASS:
      return {
        ...state,
        scheduledClasses: [
          ...state.scheduledClasses.filter((item, index) => {
            return item !== action.payload;
          })
        ],
        classes: [...state.classes, action.payload]
      };
    case DELETE_CLASS:
      return {
        ...state,
        classes: state.classes.filter(c => c.id !== action.payload)
      };

    case ADD_USER:
      return {
        ...state,
        user: action.payload
      };
    case REMOVE_USER:
      return {
        ...state,
        user: ""
      };
    default:
      return state;
  }
};
