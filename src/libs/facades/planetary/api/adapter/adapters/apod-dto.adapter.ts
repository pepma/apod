import { Injectable } from '@angular/core';
import { Adapter } from '@core/adapter';
import { ApodDTO, Apod, ApodTypeEnum } from '../../../model/planetary.model';


@Injectable({ providedIn: 'root' })
export class ApodDTOAdapter implements Adapter<ApodDTO, Apod> {
  adapt(data: ApodDTO): Apod {
    return {
      date: data.date,
      explanation: data.explanation,
      mediaType: data.media_type,
      title: data.title,
      url: data.url,
      type : ApodTypeEnum.NASA
    };
  }
}
