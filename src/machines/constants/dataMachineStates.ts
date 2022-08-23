const DATA_MACHINE_STATES = {
  iddle: {
    on: { LOAD_DATA: 'loading' },
  },
  loading: {
    on: {
      DATA_LOADED: 'ready',
      FAIL: 'failure',
    },
  },
  ready: {
    on: {
      LOAD_DATA: 'loading',
    },
  },
  failure: {
    on: { LOAD_DATA: 'loading' },
  },
};

export { DATA_MACHINE_STATES };
