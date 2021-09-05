import { TestBed } from '@angular/core/testing';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { mockProperty } from '@test/mock-property';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { PlanetaryFacadeService } from './planetary-facade.service';
import { PlanetaryService } from './services/planetary.service';
import { PlanetaryStateService } from './state/planetary-state.service';

describe('PlanetaryFacadeService', () => {
  let sut: PlanetaryFacadeService;
  let planetaryService: PlanetaryService;
  let planetaryStateService: PlanetaryStateService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetaryFacadeService, MockProvider(PlanetaryService), MockProvider(PlanetaryStateService)],
    });
    sut = TestBed.inject(PlanetaryFacadeService);
    planetaryService = TestBed.inject(PlanetaryService);
    planetaryStateService = TestBed.inject(PlanetaryStateService);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  it('should get all list', () => {
    spyOn(planetaryService, 'getApodList').and.returnValue(of([]));
    spyOn(planetaryStateService, 'setApodList');
    sut.getAll(new Date(2020, 10, 20), 5);
    expect(planetaryService.getApodList).toHaveBeenCalled();
    expect(planetaryStateService.setApodList).toHaveBeenCalled();
  });

  it('should get list from state', () => {
    mockProperty(planetaryStateService, 'list$', of([{ date: '2021/01/01' },{ date: '2020/01/01' }, { date: '2022/01/01' }]));
    const observerSpy = subscribeSpyTo(sut.list$);
    expect(observerSpy.getLastValue()).toEqual([{ date: '2020/01/01' },{ date: '2021/01/01' }, { date: '2022/01/01' }]);
  });

  it('should remove from state', () => {
    spyOn(planetaryStateService, 'removeApod');
    sut.remove({});
    expect(planetaryStateService.removeApod).toHaveBeenCalled();
  });

  it('should add from state', () => {
    spyOn(planetaryStateService, 'addApod');
    sut.add({});
    expect(planetaryStateService.addApod).toHaveBeenCalled();
  });

  it('should hasItems from state', () => {
    mockProperty(planetaryStateService, 'hasItems', true);
    expect(sut.hasItems).toEqual(true);
  });
});
