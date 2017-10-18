import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ConvertToSpacesPipe } from './convert-to-spaces/convert-to-spaces.pipe';
import { StarComponent } from './star/star.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConvertToSpacesPipe,
    StarComponent
  ],
  exports: [
    CommonModule,
    ConvertToSpacesPipe,
    FormsModule,
    StarComponent
  ]
})
export class SharedModule { }
