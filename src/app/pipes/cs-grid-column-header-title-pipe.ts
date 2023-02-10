import { Pipe, PipeTransform } from '@angular/core';
import { GridColumnType, IGridColumn } from '../hierarchical-grid/models';

/**
 * @hidden
 * @internal
 */
@Pipe({
  name: 'csIgxGridColumnHeaderTitle',
})
export class CsIgxGridColumnHeaderTitlePipe implements PipeTransform {
  constructor() {}
  transform(column: IGridColumn): string {
    if (!column) {
      return '';
    }
    switch (column.columnType) {
      case GridColumnType.PercentEditor.toString(): {
        return column.header + ' ' + '(%)';
      }
      case GridColumnType.Currency.toString(): {
        return column.header + ' ' + '($)';
      }
      default: {
        return column.header;
      }
    }
  }
}
