import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { Apod, ApodTypeEnum } from '../model/planetary.model';

@Injectable({ providedIn: 'root' })
export class PlanetaryStateService {
  private KEY_STORAGE_USER_LIST = 'userList';

  private _bsList$ = new BehaviorSubject<Apod[]>([]);

  private userList: Apod[] = [];
  private get bslist(): Apod[] {
    return this._bsList$.value;
  }

  get hasItems(): boolean {
    return !!this.userList.length || !!this.bslist.length;
  }


  get list$(): Observable<Apod[]> {
    return combineLatest([
      this._bsList$.asObservable(),
      this.storage.watch(this.KEY_STORAGE_USER_LIST) as Observable<Apod[]>,
    ]).pipe(
      map(([list, userList]) => {
        return list.concat(userList === undefined ? [] : userList);
      })
    );
  }
  constructor(private storage: StorageMap) {}

  setApodList(data: Apod[]): void {
    this._bsList$.next(data);
  }

  addApod(item: Apod): void {
    this.storage
      .get(this.KEY_STORAGE_USER_LIST)
      .pipe(
        map((currentList: Apod[]) => (currentList ? currentList : [])),
        map((currentList: Apod[]) => [...currentList, item]),
        tap((newList) => (this.userList = newList)),
        mergeMap((newList) => this.storage.set(this.KEY_STORAGE_USER_LIST, newList))
      )
      .subscribe();
  }

  removeApod(item: Apod): void {
    this.storage
      .get(this.KEY_STORAGE_USER_LIST)
      .pipe(
        map((currentList: Apod[]) => (currentList ? currentList : [])),
        map((currentList: Apod[]) => currentList.filter((f) => f.type === ApodTypeEnum.USER && f.date !== item.date)),
        tap((newList) => (this.userList = newList)),
        mergeMap((newList) => this.storage.set(this.KEY_STORAGE_USER_LIST, newList))
      )
      .subscribe();
  }
}
