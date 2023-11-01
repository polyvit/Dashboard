const ADD_POSITIONS = "ADD_POSITIONS";

const positionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POSITIONS: {
      return action.positions;
    }
    default: {
      return state;
    }
  }
};

export const addPositions = (positions) => ({ type: ADD_POSITIONS, positions });

export default positionReducer;
