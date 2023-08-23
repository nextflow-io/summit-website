import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';

import useMediaQuery from '../hooks/useMediaQuery';
import PropTypes from '../utils/PropTypes';

const LayoutStateContext = createContext();
export const LayoutDispatchContext = createContext();

const getActiveEventFromPath = (path) => {
  if (path.includes('/boston/')) {
    return 'boston';
  }

  return 'barcelona';
};

function layoutReducer(state, action) {
  switch (action.type) {
    case 'setActiveEvent': {
      return { ...state, activeEvent: action.payload.activeEvent }
    }
    case 'openMenu': {
      return { ...state, menuOpen: true };
    }
    case 'closeMenu': {
      return { ...state, menuOpen: false };
    }
    case 'toggleMenu': {
      return { ...state, menuOpen: !state.menuOpen };
    }
    case 'changeScreenSize': {
      return {
        ...state,
        menuOpen: false,
        isSmallScreen: action.payload.isSmallScreen,
        isMediumScreen: action.payload.isMediumScreen,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const useLayoutState = () => {
  const state = useContext(LayoutStateContext);

  if (state === undefined) {
    throw new Error('useLayoutState must be used within a LayoutProvider');
  }

  return state;
};

const useLayoutActions = () => {
  const dispatch = useContext(LayoutDispatchContext);

  if (dispatch === undefined) {
    throw new Error('useLayoutActions must be used within a LayoutProvider');
  }

  return {
    closeMenu: () => dispatch({ type: 'closeMenu' }),
    openMenu: () => dispatch({ type: 'openMenu' }),
    toggleMenu: () => dispatch({ type: 'toggleMenu' }),
  };
};

const useScrollTo = (targetRef, scrollOffset = -100) => {
  const scrollTo = useCallback(() => {
    if (!targetRef.current) {
      return;
    }

    const element = targetRef.current;
    const top = element.getBoundingClientRect().top + window.scrollY + scrollOffset;

    window.scrollTo({ top, behavior: 'smooth' });
  }, [targetRef, scrollOffset]);

  return scrollTo;
};

const LayoutProvider = ({ location, children }) => {
  const [state, dispatch] = useReducer(layoutReducer, {
    activeEvent: getActiveEventFromPath(location.pathname),
    menuOpen: false,
    isSmallScreen: false,
    isMediumScreen: false,
  });

  const isSmallScreen = useMediaQuery('(max-width: 576px)');
  const isMediumScreen = useMediaQuery('(max-width: 1023px)');

  useEffect(() => {
    dispatch({ type: 'changeScreenSize', payload: { isSmallScreen, isMediumScreen } });
  }, [isSmallScreen, isMediumScreen]);

  useEffect(() => {
    dispatch({ type: 'setActiveEvent', payload: { activeEvent: getActiveEventFromPath(location.pathname) } });
  }, [location.pathname])

  return (
    <LayoutDispatchContext.Provider value={dispatch}>
      <LayoutStateContext.Provider value={state}>
        {children}
      </LayoutStateContext.Provider>
    </LayoutDispatchContext.Provider>
  );
};

LayoutProvider.propTypes = {
  children: PropTypes.node,
  location: PropTypes.location.isRequired,
};

LayoutProvider.defaultProps = {
  children: null,
};

const LayoutConsumer = ({ children }) => {
  const state = useLayoutState();
  const actions = useLayoutActions();

  return children({ ...state, ...actions });
};

LayoutConsumer.propTypes = { children: PropTypes.func.isRequired };

export {
  LayoutConsumer,
  LayoutProvider,
  useLayoutActions,
  useLayoutState,
  useScrollTo,
};
