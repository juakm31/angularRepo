import { Injectable } from '@angular/core';
import { GitSearchUser } from './git-search-user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitSearchUserService {
  cachedValues: Array<{
    [query: string]: GitSearchUser
  }> = [];
  constructor(private http: HttpClient) { }

  gitSearchUser = (query:string):Promise<GitSearchUser> => {
    let promise = new Promise<GitSearchUser>((resolve,reject)=>{
      if(this.cachedValues[query]){
        resolve(this.cachedValues[query]);
      }else{
        this.http.get('https://api.github.com/search/users?q='+query).toPromise().then((response)=>{
          resolve(response as GitSearchUser)
        },(error)=>{
          reject(error);
        })
      }
    })
    return promise
  }
}
