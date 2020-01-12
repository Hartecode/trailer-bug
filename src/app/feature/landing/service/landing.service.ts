import { Injectable } from '@angular/core';
import { MovieDBConfigService } from '../../../global/movieDBConfig/movie-dbconfig.service';
import { MovieDB } from '../../../../config/config';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  private movieApiConfig: MovieDB = this.movieDBService.apiConfig;

  constructor(private movieDBService: MovieDBConfigService) { }
}
