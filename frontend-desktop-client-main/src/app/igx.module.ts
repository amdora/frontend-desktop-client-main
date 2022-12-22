import { NgModule } from '@angular/core';
import {
  IgxAvatarModule,
  IgxFilterModule,
  IgxIconModule,
  IgxListModule,
  IgxInputGroupModule,
  IgxButtonGroupModule,
  IgxRippleModule,
  IgxSliderModule,
  IgxCarouselModule,
} from 'igniteui-angular';

@NgModule({
  exports: [
    IgxAvatarModule,
    IgxFilterModule,
    IgxIconModule,
    IgxListModule,
    IgxInputGroupModule,
    IgxButtonGroupModule,
    IgxRippleModule,
    IgxSliderModule,
    IgxCarouselModule,
  ],
})
export class IgxModule {}
