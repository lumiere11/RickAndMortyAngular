import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { Character } from '@app/shared/interfaces/character.interface';
import { CharacterService } from '@app/shared/services/character.service';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  info: { next: string } = {
    next: '',
  };
  private pageNum = 1;
  private query = '';
  private hideScrollHeight = 200;
  private showScrollHeight = 500;
  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.onUrlChange();
  }
  ngOnInit(): void {
    this.getCharactersByQuery();
  }
  private onUrlChange(){
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd )
    ).subscribe(() => {
      this.characters = [];
      this.pageNum = 1;
      this.getCharactersByQuery()
    })
  }
  private getCharactersByQuery() {
    this.route.queryParams.pipe(
     take(1)
    ).subscribe((params: any) => {
      console.log(params);
      this.query = params['q']
      this.getData()
    })
  }
  private getData() {
    this.characterService
      .searchCharacters(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe((res) => {
        if (res?.results?.length > 0) {
          const { info, results } = res;
          this.characters = results;
          this.info = info;
        }
      });
  }
}
