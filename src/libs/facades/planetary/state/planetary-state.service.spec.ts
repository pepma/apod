import { TestBed } from '@angular/core/testing';
import { subscribeSpyTo } from '@hirez_io/observer-spy';

import { PlanetaryStateService } from './planetary-state.service';

describe('PlanetaryStateService', () => {
  let sut: PlanetaryStateService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetaryStateService],
    });
    sut = TestBed.inject(PlanetaryStateService);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  it('should set list into state ', () => {
    sut.setApodList([{ title: 'title' }]);
    const observerSpy = subscribeSpyTo(sut.list$);
    expect(observerSpy.getLastValue()[0].title).toEqual('title');
    expect(sut.list[0].title).toEqual('title');
  });
});
