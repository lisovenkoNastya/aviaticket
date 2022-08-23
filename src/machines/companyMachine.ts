import { createMachine, interpret } from 'xstate';
import DATA_MACHINE_CONFIG from './generic/dataMachineConfig.json';

export const companyMachine = createMachine({
  id: 'companyMachine',
  ...DATA_MACHINE_CONFIG,
});

export const companyMachineService = interpret(companyMachine);
