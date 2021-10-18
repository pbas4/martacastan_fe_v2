import React, { createContext, useReducer, useContext } from 'react';

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

// Reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    case 'CURSOR_TYPE': {
      return {
        ...state,
        cursorType: action.cursorType,
      };
    }
    case 'DISPLAY_SECTION': {
      return {
        ...state,
        displaySection: {
          isLanding: action.displaySection.isLanding,
          sectionName: action.displaySection.sectionName,
        },
      };
    }
    case 'PRESELECT_PROJ_REQUEST': {
      return {
        ...state,
        preselectedProject: true,
      };
    }
    case 'PRESELECT_PROJ_REMOVE': {
      return {
        ...state,
        preselectedProject: false,
      };
    }
    case 'SELECT_PROJECT': {
      return {
        ...state,
        selectedProject: action.selectedProject,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

// Provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    cursorType: false,
    cursorStyles: ['pointer', 'hovered', 'locked', 'white'],
    displaySection: {
      isLanding: true,
      sectionName: 'landing',
    },
    preselectedProject: false,
    selectedProject: null,
  });

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

// custom hooks for when we want to use our global state
export const useGlobalStateContext = () => useContext(GlobalStateContext);

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
