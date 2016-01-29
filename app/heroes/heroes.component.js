System.register(['angular2/core', 'angular2/router', '../herodetails/hero-detail.component', '../services/hero.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hero_detail_component_1, hero_service_1;
    var HeroesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroesComponent = (function () {
                function HeroesComponent(_heroService, _router) {
                    this._heroService = _heroService;
                    this._router = _router;
                }
                HeroesComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    //this.heroes = this._heroService.getHeroes();
                    this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                };
                HeroesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroesComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
                };
                HeroesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-heroes',
                        styles: ["\n      .selected {\n        background-color: #CFD8DC !important;\n        color: white;\n      }\n      .heroes {\n        margin: 0 0 2em 0;\n        list-style-type: none;\n        padding: 0;\n        width: 10em;\n      }\n      .heroes li {\n        cursor: pointer;\n        position: relative;\n        left: 0;\n        background-color: #EEE;\n        margin: .5em;\n        padding: .3em 0em;\n        height: 1.6em;\n        border-radius: 4px;\n      }\n      .heroes li.selected:hover {\n        color: white;\n      }\n      .heroes li:hover {\n        color: #607D8B;\n        background-color: #EEE;\n        left: .1em;\n      }\n      .heroes .text {\n        position: relative;\n        top: -3px;\n      }\n      .heroes .badge {\n        display: inline-block;\n        font-size: small;\n        color: white;\n        padding: 0.8em 0.7em 0em 0.7em;\n        background-color: #607D8B;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -4px;\n        height: 1.8em;\n        margin-right: .8em;\n        border-radius: 4px 0px 0px 4px;\n      }\n       button {\n\t\t  font-family: Arial;\n\t\t  background-color: #eee;\n\t\t  border: none;\n\t\t  padding: 5px 10px;\n\t\t  border-radius: 4px;\n\t\t  cursor: pointer;\n\t\t  cursor: hand;\n\t\t}\n\t\tbutton:hover {\n\t\t  background-color: #cfd8dc;\n\t\t}\n    "],
                        template: "\n\t\t\t\t<h2>My Heroes</h2>\n\t\t\t    <ul class=\"heroes\">\n\t\t\t      <li  *ngFor=\"#hero of heroes\" (click)=\"onSelect(hero)\"\n\t\t\t      \t[class.selected]=\"hero===selectedHero\">\n\t\t\t         <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n\t\t\t      </li>\n\t\t\t    </ul>\n\t\t\t\t<div *ngIf=\"selectedHero\">\n\t\t\t\t    <h2>{{selectedHero.name | uppercase}} is my hero</h2>\n\t\t\t\t    <button (click)=\"gotoDetail()\">View Details</button>\n\t\t\t\t</div>\n\t\t\t    \n\t\t\t    ",
                        directives: [hero_detail_component_1.HeroDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
                ], HeroesComponent);
                return HeroesComponent;
            })();
            exports_1("HeroesComponent", HeroesComponent);
        }
    }
});
//# sourceMappingURL=heroes.component.js.map