import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero} from '../model/hero';
import {HeroDetailComponent} from '../herodetails/hero-detail.component';
import {HeroService} from '../services/hero.service';

@Component({
	selector: 'my-heroes',
	styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 10em;
      }
      .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0em;
        height: 1.6em;
        border-radius: 4px;
      }
      .heroes li.selected:hover {
        color: white;
      }
      .heroes li:hover {
        color: #607D8B;
        background-color: #EEE;
        left: .1em;
      }
      .heroes .text {
        position: relative;
        top: -3px;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0em 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0px 0px 4px;
      }
       button {
		  font-family: Arial;
		  background-color: #eee;
		  border: none;
		  padding: 5px 10px;
		  border-radius: 4px;
		  cursor: pointer;
		  cursor: hand;
		}
		button:hover {
		  background-color: #cfd8dc;
		}
    `],
	template: `
				<h2>My Heroes</h2>
			    <ul class="heroes">
			      <li  *ngFor="#hero of heroes" (click)="onSelect(hero)"
			      	[class.selected]="hero===selectedHero">
			         <span class="badge">{{hero.id}}</span> {{hero.name}}
			      </li>
			    </ul>
				<div *ngIf="selectedHero">
				    <h2>{{selectedHero.name | uppercase}} is my hero</h2>
				    <button (click)="gotoDetail()">View Details</button>
				</div>
			    
			    `,
	directives: [HeroDetailComponent]
	
})

export class HeroesComponent implements OnInit {
	//public title = 'Tour of Heroes';	
	public heroes;
	public selectedHero: Hero;
	constructor(private _heroService: HeroService, private _router: Router) { } 
	onSelect(hero: Hero) { this.selectedHero = hero; }

	getHeroes() {
		//this.heroes = this._heroService.getHeroes();
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit() {
		this.getHeroes();
	}

	gotoDetail() {
		this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
	}
// dont use new HeroService() instead use the injection into constructor
//    Our component has to know how to create a HeroService.If we ever change the HeroService constructor, we'll have to find every place we create the service and fix it. Running around patching code is error prone and adds to the test burden.

  //  We create a new service each time we use "new". What if the service should cache heroes and share that cache with others? We couldn't do that.

//We're locking the AppComponent into a specific implementation of the HeroService. It will be hard to switch implementations for different scenarios. Can we operate offline? Will we need different mocked versions under test? Not easy.

}

