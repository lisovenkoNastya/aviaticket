import { createMachine, interpret } from 'xstate';
import DATA_MACHINE_CONFIG from './generic/dataMachineConfig.json';

export const ticketMachine = createMachine({
  id: 'ticketMachine',
  ...DATA_MACHINE_CONFIG,
});

export const ticketMachineService = interpret(ticketMachine);
