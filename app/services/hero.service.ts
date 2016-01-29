
import {HEROES} from './mock-heroes';
import {Hero} from '../model/hero';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}
	
	getHero(id: number) {
		return Promise.resolve(HEROES).then(
			heroes => heroes.filter(h => h.id === id)[0]
		);
	}

	getHeroesSlowly() {
		return new Promise<Hero[]>(resolve =>
			setTimeout(() => resolve(HEROES), 2000) // 2 seconds
		);
	}
}