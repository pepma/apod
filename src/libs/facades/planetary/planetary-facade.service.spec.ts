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
    mockProperty(planetaryStateService, 'list$', of([]));
    const observerSpy = subscribeSpyTo(sut.list$);
    expect(observerSpy.getLastValue()).toEqual([]);
  });

  it('should return has items to false', () => {
    mockProperty(planetaryStateService, 'list', []);
    expect(sut.hasItems).toEqual(false);
  });

  it('should return has items to true', () => {
    mockProperty(planetaryStateService, 'list', [{}]);
    expect(sut.hasItems).toEqual(true);
  });
});
