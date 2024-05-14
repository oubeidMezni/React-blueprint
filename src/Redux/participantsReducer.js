const initialState = {
  participants: [],
};
export const ParticipantsReducers = (state = initialState, action) => {
  switch (action.type) {
    case "AddParticipant":
      const newParticipants = state.participants;
      newParticipants.push(action.payload);
      console.log(newParticipants,action.payload)
      return { ...state, participants: newParticipants };
    default:
      return state;
  }
};
