import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG, CurrencyMaskModule } from 'ng2-currency-mask';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: false,
  decimal: ",",
  precision: 0,
  prefix: "",
  suffix: "",
  thousands: "."
};

const LIST_MODULES = [
  NzLayoutModule,
  NzMenuModule,
  NzBreadCrumbModule,
  NzButtonModule,
  NzCardModule,
  NzTableModule,
  NzToolTipModule,
  NzPopconfirmModule,
  NzListModule,
  NzFormModule,
  NzSelectModule,
  NzPaginationModule,
  NzMessageModule,
  NzIconModule,
  NzSpinModule,
  NzInputModule,
  NzPageHeaderModule,
  CurrencyMaskModule,
]

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    ...LIST_MODULES
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
})
export class ComponentsModule { }
