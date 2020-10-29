import { TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { PlanetaryApiService } from '../api/planetary-api.service';
import { PlanetaryService } from './planetary.service';

describe('PlanetaryService', () => {
  let sut: PlanetaryService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetaryService, MockProvider(PlanetaryApiService)],
    });
    sut = TestBed.inject(PlanetaryService);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  it('should get apod from api ', () => {
    const planetaryApiService = TestBed.inject(PlanetaryApiService);
    spyOn(planetaryApiService, 'getApod').and.returnValue(of());
    sut.getApod('2020-01-01');
    expect(planetaryApiService.getApod).toHaveBeenCalledWith('2020-01-01');
  });

  it('should get list apod from api ', () => {
    const planetaryApiService = TestBed.inject(PlanetaryApiService);
    spyOn(planetaryApiService, 'getApod').and.returnValue(of());
    sut.getApodList(new Date(2020, 10, 30), 3).subscribe((data) => {
      expect(data[0].date).toEqual('2020-10-30');
      expect(data[1].date).toEqual('2020-10-29');
      expect(data[2].date).toEqual('2020-10-28');
    });
    expect(planetaryApiService.getApod).toHaveBeenCalledTimes(3);
  });
});
