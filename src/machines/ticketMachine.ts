import { createMachine, interpret } from 'xstate';
import { DATA_MACHINE_STATES } from '@/machines/constants/dataMachineStates';

export const ticketMachine = createMachine({
  id: 'ticketMachine',
  initial: 'iddle',
  states: {
    ...DATA_MACHINE_STATES,
  },
});

export const ticketMachineService = interpret(ticketMachine);
