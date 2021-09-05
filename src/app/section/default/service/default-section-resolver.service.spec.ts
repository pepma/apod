import { waitForAsync } from '@angular/core/testing';
import { PlanetaryFacadeService } from '@facades/planetary';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { mockProperty } from '@test/mock-property';
import { of } from 'rxjs';
import { DefaultSectionResolverService } from './default-section-resolver.service';

describe('DefaultSectionResolverService', () => {
  let spectator: SpectatorService<DefaultSectionResolverService>;
  const createService = createServiceFactory({
    service: DefaultSectionResolverService,
    mocks: [PlanetaryFacadeService],
  });

  beforeEach(() => (spectator = createService()));

  it('should exits', () => {
    expect(spectator.service).toBeTruthy();
  });

  it(
    'should resolve when has items in memmory',
    waitForAsync(() => {
      const planetaryFacadeService = spectator.inject(PlanetaryFacadeService);
      mockProperty(planetaryFacadeService, 'hasItems', true);
      spectator.service.resolve();
      expect(planetaryFacadeService.getAll).not.toHaveBeenCalled();
    })
  );

  it(
    'should resolve when call getAll',
    waitForAsync(() => {
      const planetaryFacadeService = spectator.inject(PlanetaryFacadeService);
      mockProperty(planetaryFacadeService, 'hasItems', false);
      mockProperty(planetaryFacadeService, 'list$', of([{}]));
      spectator.service.resolve();
      expect(planetaryFacadeService.getAll).toHaveBeenCalled();
    })
  );
});
