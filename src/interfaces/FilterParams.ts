export interface ControlOption {
  text: string;
  value: string | number;
}

export interface FilterParam {
  id: string;
  type?: 'checkbox' | 'radio';
  title?: string;
  options?: ControlOption[];
}

export interface FilterValue {
  stopNumber?: number | number[];
  company?: string;
}
