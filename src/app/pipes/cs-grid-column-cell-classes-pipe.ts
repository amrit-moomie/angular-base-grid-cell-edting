/* eslint-disable @typescript-eslint/naming-convention */
import { Pipe, PipeTransform } from '@angular/core';
import { GridColumnType, IGridColumn } from '../hierarchical-grid/models';

/**
 * @hidden
 * @internal
 */
@Pipe({
  name: 'csIgxGridColumnCellClasses',
})
export class CsIgxGridColumnCellClassesPipe implements PipeTransform {
  csGridNumberCellClass = { 'cs-grid__td--number': true };
  csGridBooleanCellClass = { 'cs-grid__td--boolean': true };
  csGridStatusCellClass = { 'cs-grid__td--status': true };
  csGridNumberHeaderClass = { 'igx-grid__th--number': true };

  transform(column: IGridColumn): any {
    if (!column) {
      return '';
    }
    switch (column.columnType) {
      case GridColumnType.Currency.toString(): {
        return this.csGridNumberCellClass;
      }
      case GridColumnType.PercentEditor.toString(): {
        return this.csGridNumberCellClass;
      }
      case GridColumnType.Boolean.toString(): {
        return this.csGridBooleanCellClass;
      }
      case GridColumnType.StatusEditor.toString(): {
        return this.csGridStatusCellClass;
      }
      default: {
        break;
      }
    }
  }
}
