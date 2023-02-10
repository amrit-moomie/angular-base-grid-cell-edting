import { Pipe, PipeTransform } from '@angular/core';
import { GridColumnType, IGridColumn } from '../hierarchical-grid/models';

/**
 * @hidden
 * @internal
 */
@Pipe({
  name: 'csIgxGridColumnHeaderClasses',
})
export class CsIgxGridColumnHeaderClassesPipe implements PipeTransform {
  constructor() {}
  transform(column: IGridColumn): string {
    if (!column) {
      return '';
    }
    switch (column.columnType) {
      case GridColumnType.Currency.toString(): {
        return 'igx-grid__th--number';
      }
      case GridColumnType.PercentEditor.toString(): {
        return 'igx-grid__th--number';
      }
      case GridColumnType.Boolean.toString(): {
        return 'cell-text-align-center';
      }
      default: {
        return '';
      }
    }
  }
}
