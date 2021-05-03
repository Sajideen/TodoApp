const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        data:[
          ...state.data,
          {
            data: action.data,
            id: action.id,
          },
        ],
      };
    case "DEL_TASK":
      const todos = state.data.filter((todo)=> todo.id !== action.id)
      return {
        ...state,
        data: todos,
      };
      case "EDIT TASK":
        const edit = state.data.filter((todo)=> todo.id === action.id)
        return{
          ...state,
          data:[
            ...state.data,
            {
              data:edit.data,
            }
          ]
        }
    default:
      return state;
  }
};
export default reducer;
