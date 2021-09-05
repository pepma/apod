import { TestBed, waitForAsync } from '@angular/core/testing';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { StorageMap } from '@ngx-pwa/local-storage';
import { MockProviders } from 'ng-mocks';
import { of } from 'rxjs';
import { ApodTypeEnum } from '../model/planetary.model';
import { PlanetaryStateService } from './planetary-state.service';

describe('PlanetaryStateService', () => {
  let sut: PlanetaryStateService;
  let storageMap: StorageMap;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetaryStateService, MockProviders(StorageMap)],
    });
    sut = TestBed.inject(PlanetaryStateService);
    storageMap = TestBed.inject(StorageMap);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  it('should set list into state when not exist user list ', () => {
    spyOn(storageMap, 'watch').and.returnValue(of(undefined));
    sut.setApodList([{ title: 'title' }]);
    const observerSpy = subscribeSpyTo(sut.list$);
    expect(observerSpy.getLastValue()[0].title).toEqual('title');
  });

  it('should set list into state when exist user list ', () => {
    spyOn(storageMap, 'watch').and.returnValue(of([]));
    sut.setApodList([{ title: 'title' }]);
    const observerSpy = subscribeSpyTo(sut.list$);
    expect(observerSpy.getLastValue()[0].title).toEqual('title');
    expect(sut.hasItems).toEqual(true);
  });

  it(
    'should add user apod ',
    waitForAsync(() => {
      spyOn(storageMap, 'get').and.returnValue(of([]));
      spyOn(storageMap, 'set').and.returnValue(of(null));
      sut.addApod({ title: 'title' });
      expect(storageMap.set).toHaveBeenCalled();
    })
  );

  it(
    'should add user apod without items',
    waitForAsync(() => {
      spyOn(storageMap, 'get').and.returnValue(of(undefined));
      spyOn(storageMap, 'set').and.returnValue(of(null));
      sut.addApod({ title: 'title' });
      expect(storageMap.set).toHaveBeenCalled();
    })
  );

  it(
    'should remove user apod when has items',
    waitForAsync(() => {
      spyOn(storageMap, 'get').and.returnValue(of([{ title: 'remove', date: '2021/01/01', type: ApodTypeEnum.USER }]));
      spyOn(storageMap, 'set').and.returnValue(of(null));
      sut.removeApod({ title: 'remove', date: '2021/01/01', type: ApodTypeEnum.USER });
      expect(storageMap.set).toHaveBeenCalledWith('userList', []);
    })
  );

  it(
    'should remove user apod when not has items',
    waitForAsync(() => {
      spyOn(storageMap, 'get').and.returnValue(of(undefined));
      spyOn(storageMap, 'set').and.returnValue(of(null));
      sut.removeApod({ title: 'remove', date: '2021/01/01', type: ApodTypeEnum.USER });
      expect(storageMap.set).toHaveBeenCalledWith('userList', []);
    })
  );
});
