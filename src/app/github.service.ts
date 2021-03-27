import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment.prod';
import { RepoModel } from './Models/RepoModel';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GithubService {

  private baseUrl: string = environment.baseUrl;
  public httpHeaders: HttpHeaders = new HttpHeaders

  constructor(
    public httpClient: HttpClient
  ) {
    this.httpHeaders.append("x-github-media-type", "github.v3");
   }

   public repos: RepoModel[];

   public GetMyRepos() : Observable<RepoModel[]>{

    var result = this.httpClient.get<RepoModel[]>(`${ this.baseUrl }/users/florintatu/repos?type=owner`, { headers: this.httpHeaders })
    .pipe(
    );

    return result;
   }
}
