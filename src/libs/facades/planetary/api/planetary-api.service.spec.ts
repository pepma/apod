import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ApodDTO } from '../model/planetary.model';
import { PLANETARY_CONFIG_TOKEN } from '../planetary.token';
import { PlanetaryApiService } from './planetary-api.service';

describe('PlanetaryApiService', () => {
  let sut: PlanetaryApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlanetaryApiService,
        {
          provide: PLANETARY_CONFIG_TOKEN,
          useValue: {
            urlApod: 'http:/test.com/nasa',
            daysToShow: 1,
            apiKey: '1234567890',
          },
        },
      ],
      imports: [HttpClientTestingModule],
    });
    sut = TestBed.inject(PlanetaryApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  it('should get Apod', () => {
    const mockResponse: ApodDTO = {
      title: 'title',
      url: 'http://test.com/image',
    };
    sut.getApod('2020-10-10').subscribe((response) => {
      expect(response.url).toEqual('http://test.com/image');
      expect(response.title).toEqual('title');
    });
    const url = `http:/test.com/nasa?api_key=1234567890&date=2020-10-10`;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

});
