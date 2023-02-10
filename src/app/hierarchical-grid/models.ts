export enum GridColumnType {
  Text = 'string',
  // eslint-disable-next-line id-blacklist
  Boolean = 'boolean',
  // eslint-disable-next-line id-blacklist
  Number = 'number',
  Date = 'cs-date',
  DateTime = 'cs-dateTime',
  Time = 'cs-time',
  Currency = 'cs-currency',
  Link = 'cs-link',
  LinkModal = 'cs-link-modal',
  PercentEditor = 'cs-percentEditor',
  DropdownEditor = 'cs-dropdownEditor',
  State = 'cs-stateEditor',
  TagsEditor = 'cs-tagEditor',
  StatusEditor = 'cs-statusChip',
  MultiSelectEditor = 'multiselect',
}

export interface IGridColumn {
  field: string;
  header: string;
  columnType: GridColumnType;
  editable?: boolean;
  width?: string;
  hasSummary?: boolean;
  formatter?: any;
  dropDownSearchable?: boolean;
  min?: number; // for GridColumnType.Number
  max?: number; // for GridColumnType.Number
  minlength?: number; // for GridColumnType.Text
  maxlength?: number; // for GridColumnType.Text
  pinned?: boolean;
  notSortable?: boolean;
  notMovable?: boolean;
  notFilterable?: boolean;
  hideable?: boolean;
}
