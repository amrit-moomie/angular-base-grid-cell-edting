import { CurrencyPipe, PercentPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { GridColumnType, IGridColumn } from '../hierarchical-grid/models';

/**
 * @hidden
 * @internal
 */
@Pipe({
  name: 'csIgxGridColumnFormatter',
})
export class CsIgxGridColumnFormatterPipe implements PipeTransform {
  constructor(
    private readonly percentPipe: PercentPipe,
    private readonly currencyPipe: CurrencyPipe
  ) {}

  transform(column: IGridColumn): any {
    if (!column) {
      return '';
    }
    switch (column.columnType) {
      case GridColumnType.PercentEditor.toString(): {
        return (_: any) => this.percentPipe.transform(_).replace('%', '');
      }
      case GridColumnType.Currency.toString(): {
        return (_: any) => this.currencyPipe.transform(_);
      }
      default: {
        return column.formatter;
      }
    }
  }
}
