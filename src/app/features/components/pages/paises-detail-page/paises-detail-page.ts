import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap, of, tap, map } from 'rxjs';
import { PaisesService } from '../../../services/paises.service';
import { PaisesCacheService } from '../../../services/paises-cache.service';

@Component({
  selector: 'app-paises-detail-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
  templateUrl: './paises-detail-page.html'
})
export class PaisesDetailPageComponent {
  private route = inject(ActivatedRoute);
  private paisesService = inject(PaisesService);
  private cacheService = inject(PaisesCacheService);

  private paisObservable$ = this.route.params.pipe(
    switchMap(params => {
      const countryName = params['name'];
      if (!countryName) return of(null);

      const cachedData = this.cacheService.get(countryName);
      if (cachedData) return of(cachedData);

      return this.paisesService.getPaisByName(countryName).pipe(
        map(responseArray => responseArray[0] || null),
        tap(pais => { if (pais) this.cacheService.save(pais); })
      );
    })
  );
  paisSignal = toSignal(this.paisObservable$, { initialValue: null });
}


