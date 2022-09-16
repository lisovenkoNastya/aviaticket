const DATA_MACHINE_STATES = {
  iddle: {
    on: { LOAD_DATA: 'loading' },
  },
  loading: {
    on: {
      DATA_LOADED: 'ready',
      FAIL: 'failure',
      RESET: 'iddle',
    },
  },
  ready: {
    on: {
      LOAD_DATA: 'loading',
      RESET: 'iddle',
    },
  },
  failure: {
    on: {
      LOAD_DATA: 'loading',
      RESET: 'iddle',
    },
  },
};

export { DATA_MACHINE_STATES };
