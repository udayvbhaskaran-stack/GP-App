import { useState, useCallback } from 'react';

const STORAGE_KEY = 'lli_progress';

interface ProgressState {
  completedScenarios: string[];
  discoveredConcepts: string[];
  preTestCompleted: boolean;
  postTestCompleted: boolean;
  preTestScore: number | null;
  postTestScore: number | null;
  preConfidence: number | null;
  postConfidence: number | null;
  feedbackSubmitted: boolean;
}

const defaultState: ProgressState = {
  completedScenarios: [],
  discoveredConcepts: [],
  preTestCompleted: false,
  postTestCompleted: false,
  preTestScore: null,
  postTestScore: null,
  preConfidence: null,
  postConfidence: null,
  feedbackSubmitted: false,
};

function loadState(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...defaultState, ...JSON.parse(raw) };
  } catch {
    // ignore
  }
  return defaultState;
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(loadState);

  const save = useCallback((newState: ProgressState) => {
    setState(newState);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    } catch {
      // ignore
    }
  }, []);

  const completeScenario = useCallback(
    (scenarioId: string, conceptIds: string[]) => {
      const newState: ProgressState = {
        ...state,
        completedScenarios: state.completedScenarios.includes(scenarioId)
          ? state.completedScenarios
          : [...state.completedScenarios, scenarioId],
        discoveredConcepts: [
          ...new Set([...state.discoveredConcepts, ...conceptIds]),
        ],
      };
      save(newState);
    },
    [state, save]
  );

  const setPreTestResult = useCallback(
    (score: number, confidence: number) => {
      save({ ...state, preTestCompleted: true, preTestScore: score, preConfidence: confidence });
    },
    [state, save]
  );

  const setPostTestResult = useCallback(
    (score: number, confidence: number) => {
      save({ ...state, postTestCompleted: true, postTestScore: score, postConfidence: confidence });
    },
    [state, save]
  );

  const setFeedbackSubmitted = useCallback(() => {
    save({ ...state, feedbackSubmitted: true });
  }, [state, save]);

  const reset = useCallback(() => {
    save(defaultState);
  }, [save]);

  return {
    ...state,
    completeScenario,
    setPreTestResult,
    setPostTestResult,
    setFeedbackSubmitted,
    reset,
  };
}
