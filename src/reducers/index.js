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
      className: "CrossFit Heights",
      classType: "CrossFit",
      startTime: "1700",
      durationMinutes: 45,
      intensity: "high",
      location: "Heights High",
      maxClassSize: 15,
      clients: ["Andre", "Sue", "Mike"],
      date: "2020-1-13",
      instructor: "Salem S.",
      id: 1
    },
    {
      className: "Thrill Yoga",
      classType: "Yoga",
      startTime: "1115",
      durationMinutes: 30,
      intensity: "low",
      location: "Studio 1",
      maxClassSize: 7,
      clients: ["Stephen", "Mark", "Tristan", "Jordan"],
      date: "2020-1-14",
      instructor: "Claire F.",
      id: 2
    },
    {
      className: "Spartan Training",
      classType: "Obstacle Training",
      startTime: "1700",
      durationMinutes: 60,
      intensity: "high",
      location: "Forest Hills Park",
      maxClassSize: 20,
      clients: ["Javier", "Michelle", "Tony", "Michael", "Bella", "Brenna"],
      date: "2020-1-9",
      instructor: "Thomas P.",
      id: 3
    },
    {
      className: "5K Training",
      classType: "Running",
      startTime: "6:45",
      durationMinutes: 75,
      intensity: "medium",
      location: "G0rden Park",
      maxClassSize: 20,
      clients: ["Summer", "Alondra", "Giovanni", "Alex", "Brianne", "Steffi"],
      date: "2020-1-9",
      instructor: "Autumn W.",
      id: 4
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
