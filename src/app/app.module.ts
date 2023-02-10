import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { IgxHierarchicalGridModule, IgxToastModule } from 'igniteui-angular';
import { IgxPreventDocumentScrollModule } from './directives/prevent-scroll.directive';
import { RemoteService } from './data/RemoteService';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CsIgxGridColumnHeaderTitlePipe } from './pipes/cs-grid-column-header-title-pipe';
import { CsIgxGridColumnFormatterPipe } from './pipes/cs-grid-column-formatter-pipe';
import { CsIgxGridColumnHeaderClassesPipe } from './pipes/cs-grid-column-header-classes-pipe';
import { CsIgxGridColumnCellClassesPipe } from './pipes/cs-grid-column-cell-classes-pipe';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { HGridBaseGridComponent } from './hierarchical-grid/hierarchical-grid-base-grid/hierarchical-grid-base-grid.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HGridBaseGridComponent,
    CsIgxGridColumnHeaderTitlePipe,
    CsIgxGridColumnFormatterPipe,
    CsIgxGridColumnHeaderClassesPipe,
    CsIgxGridColumnCellClassesPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxPreventDocumentScrollModule,
    IgxHierarchicalGridModule,
    IgxToastModule,
    HttpClientModule,
  ],
  providers: [
    CurrencyPipe,
    PercentPipe,
    RemoteService,
    CsIgxGridColumnHeaderTitlePipe,
    CsIgxGridColumnFormatterPipe,
    CsIgxGridColumnHeaderClassesPipe,
    CsIgxGridColumnCellClassesPipe,
  ],
  entryComponents: [],
  schemas: [],
})
export class AppModule {}
