import { Injectable } from '@angular/core';
import { Welcome } from '../models/paises.interface';

@Injectable({ providedIn: 'root' })
export class PaisesCacheService {
  private readonly storageKey = 'paises-api-cache-v1';

  get(nameCommon: string): Welcome | null {
    const cacheMap = this.loadMap();
    return cacheMap[nameCommon] ?? null;
  }

  save(pais: Welcome): void {
    const cacheMap = this.loadMap();
    cacheMap[pais.name.common] = pais;
    localStorage.setItem(this.storageKey, JSON.stringify(cacheMap));
  }

  private loadMap(): Record<string, Welcome> {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : {};
  }
}

