import { ADD_TODO, DELETE_TASK, TOGGLE_TASK } from "./types";

const rootReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Date.now().toString(),
          title: action.payload.value,
          completed: false,
          category: action.payload.path.slice(1),
        },
      ];
    case TOGGLE_TASK:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case DELETE_TASK:
      return state.filter(todo => todo.id !== action.payload)
    default:
      return state;
  }
};

export { rootReducer };
