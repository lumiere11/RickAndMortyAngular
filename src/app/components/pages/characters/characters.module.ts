import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CharacterDetailsComponent, CharacterListComponent],
  imports: [CommonModule, RouterModule],
  exports: [CharacterDetailsComponent, CharacterListComponent],
})
export class CharactersModule {}
