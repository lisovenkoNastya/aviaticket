import { createMachine, interpret } from 'xstate';
import { DATA_MACHINE_STATES } from '@/machines/constants/dataMachineStates';

export const companyMachine = createMachine({
  id: 'companyMachine',
  initial: 'iddle',
  states: DATA_MACHINE_STATES,
});

export const companyMachineService = interpret(companyMachine);
