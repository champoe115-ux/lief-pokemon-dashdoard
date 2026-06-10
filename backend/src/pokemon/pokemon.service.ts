import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PokemonService {
  private readonly pokeApiUrl = 'https://pokeapi.co/api/v2';

  async getPokemon(name: string) {
    const res = await fetch(`${this.pokeApiUrl}/pokemon/${name.toLowerCase()}`);
    if (!res.ok) throw new NotFoundException(`Pokemon "${name}" not found`);

    const data = await res.json();
    return {
      name: data.name,
      types: data.types.map((t: any) => t.type.name),
      weight: data.weight,
      abilities: data.abilities.map((a: any) => a.ability.name),
    };
  }

  async getAbilities(name: string) {
    const res = await fetch(`${this.pokeApiUrl}/pokemon/${name.toLowerCase()}`);
    if (!res.ok) throw new NotFoundException(`Pokemon "${name}" not found`);

    const data = await res.json();
    return {
      name: data.name,
      abilities: data.abilities.map((a: any) => a.ability.name),
    };
  }

  async getRandom() {
    const id = Math.floor(Math.random() * 898) + 1;
    const res = await fetch(`${this.pokeApiUrl}/pokemon/${id}`);
    const data = await res.json();
    return {
      name: data.name,
      types: data.types.map((t: any) => t.type.name),
      weight: data.weight,
      abilities: data.abilities.map((a: any) => a.ability.name),
    };
  }
}
