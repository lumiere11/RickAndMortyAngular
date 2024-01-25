import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment';
import { Character, CharacterResponse } from '../interfaces/character.interface';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient: HttpClient) { }
  searchCharacters(query ="", page=1){
    return this.httpClient.get<CharacterResponse>(
      `${enviroment.baseUrlApi}/?name=${query}&page${page}`
    );
  }
  getDetails(id: number){
    return this.httpClient.get<Character>(`${enviroment.baseUrlApi}/${id}`);
  }
}
