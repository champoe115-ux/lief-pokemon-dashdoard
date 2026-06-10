import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get('random')
  getRandom() {
    return this.pokemonService.getRandom();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':name')
  getPokemon(@Param('name') name: string) {
    return this.pokemonService.getPokemon(name);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':name/ability')
  getAbilities(@Param('name') name: string) {
    return this.pokemonService.getAbilities(name);
  }
}
