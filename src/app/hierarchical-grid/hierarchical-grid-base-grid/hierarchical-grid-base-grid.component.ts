import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  IGridCreatedEventArgs,
  IGridEditEventArgs,
  IgxGridBaseDirective,
  IgxHierarchicalGridComponent,
  IgxToastComponent,
  VerticalAlignment,
} from 'igniteui-angular';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RemoteService } from 'src/app/data/RemoteService';
import { GridColumnType, IGridColumn } from '../models';

@Component({
  selector: 'app-hierarchical-grid-editing-events',
  styleUrls: ['./hierarchical-grid-base-grid.component.scss'],
  templateUrl: 'hierarchical-grid-base-grid.component.html',
})
export class HGridBaseGridComponent implements OnInit, OnDestroy {
  constructor(private remoteService: RemoteService) {
    this.remoteService.urlBuilder = () => this.remoteService.url;
  }
  @ViewChild(IgxHierarchicalGridComponent, {
    read: IgxHierarchicalGridComponent,
    static: true,
  })
  public grid: IgxHierarchicalGridComponent;

  @ViewChild(IgxToastComponent, { read: IgxToastComponent, static: true })
  public toast: IgxToastComponent;

  public columns: IGridColumn[];

  private destroy$ = new Subject();

  public ngOnInit(): void {
    this.toast.positionSettings.verticalDirection = VerticalAlignment.Middle;

    this.grid.dataChanged.subscribe((x) => {
      console.log('data changed', x);
    });

    this.initColumns();
  }

  initColumns() {
    this.columns = [
      {
        field: 'CategoryID',
        header: 'CategoryID',
        editable: true,
        columnType: GridColumnType.Text,
        width: '100px',
        notMovable: true,
        pinned: true,
      },
      {
        field: 'ProductID',
        header: 'ProductID',
        editable: true,
        columnType: GridColumnType.Text,
        width: '100px',
        notMovable: true,
        pinned: true,
      },
      {
        field: 'ProductName',
        header: 'ProductName',
        editable: true,
        columnType: GridColumnType.Text,
        width: '100px',
        notMovable: true,
        pinned: true,
      },
    ];
  }
  public ngAfterViewInit(): void {
    this.remoteService.remoteData.subscribe((x) => {
      console.log('data in subscription:::', x);
      this.grid.data = x;
      this.grid.markForCheck();
      this.grid.cdr.detectChanges();
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  reloadData() {
    this.remoteService.getData();
  }

  columnInit(evt: any) {
    console.log(evt);
  }

  public formatter = (a) => a;

  public handleCellEdit(event: IGridEditEventArgs) {
    const today = new Date();
    const column = event.column;
    if (column.field === 'Debut') {
      if (event.newValue > today.getFullYear()) {
        this.toast.open('The debut date must be in the past!');
        event.cancel = true;
      }
    } else if (column.field === 'LaunchDate') {
      if (event.newValue > new Date()) {
        this.toast.open('The launch date must be in the past!');
        event.cancel = true;
      }
    }
  }

  public handleCreate(event: IGridCreatedEventArgs) {
    event.grid.cellEdit
      .pipe(takeUntil(this.destroy$))
      .subscribe((e) => this.handleCellEdit(e));
  }

  trackByField(index, column): string {
    return column.field;
  }
}
