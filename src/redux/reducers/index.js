const initialState = {
    SWAPI_DATA: false
}
 
const reducer = (state = initialState, action) => {
    switch (action.type) {
       case 'CALLED_SWAPI':
          return { ...state, SWAPI_DATA: 'true' };
       default:
          return state;
     }
  };

  export default reducer;