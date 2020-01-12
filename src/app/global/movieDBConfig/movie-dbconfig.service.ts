import { Injectable } from '@angular/core';
import { movieDBConfig, MovieDB } from '../../../config/config';

@Injectable({
  providedIn: 'root'
})
export class MovieDBConfigService {
  public apiConfig: MovieDB = movieDBConfig;
}
