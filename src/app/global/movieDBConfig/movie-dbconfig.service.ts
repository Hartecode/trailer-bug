import { Injectable } from '@angular/core';
import { MovieDB, movieDBConfig } from '../../../config/config';

@Injectable({
  providedIn: 'root'
})
export class MovieDBConfigService {
  public apiConfig: MovieDB = movieDBConfig;
}
