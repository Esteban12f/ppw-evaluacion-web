import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { rxResource } from '@angular/core/rxjs-interop';
import { PaisesService } from '../../../services/paises.service';
import { Hero } from '../../hero/hero';
import { CardComponent } from '../../card/card';
import { Welcome } from '../../../models/paises.interface';

@Component({
  selector: 'app-paises-vhome-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, Hero, CardComponent],
  templateUrl: './paises-home-page.html'
})
export class PaisesHomePageComponent {
  private paisesService = inject(PaisesService);

  paisesResource = rxResource<Welcome[], unknown>({
    stream: () => this.paisesService.getPaises()
  });
}


