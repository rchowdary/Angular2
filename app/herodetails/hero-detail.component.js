System.register(['angular2/core', 'angular2/router', '../services/hero.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hero_service_1;
    var HeroDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent(_heroService, _routeParams) {
                    this._heroService = _heroService;
                    this._routeParams = _routeParams;
                }
                HeroDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this.hero) {
                        var id = +this._routeParams.get('id');
                        this._heroService.getHero(id).then(function (hero) { return _this.hero = hero; });
                    }
                };
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-hero-detail',
                        template: "\n\t\t\t\t  <div *ngIf=\"hero\">\n\t\t\t\t    <h2>{{hero.name}} details!</h2>\n\t\t\t\t    <div><label>id: </label>{{hero.id}}</div>\n\t\t\t\t    <div>\n\t\t\t\t      <label>name: </label>\n\t\t\t\t      <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n\t\t\t\t    </div>\n\t\t\t\t  </div>\n\t\t\t\t  <button [routerLink]=\"['Heroes']\">Heroes</button>\n\t\t\t\t",
                        styles: ["\n\t\t\tlabel {\n\t\t\t  display: inline-block;\n\t\t\t  width: 3em;\n\t\t\t  margin: .5em 0;\n\t\t\t  color: #607D8B;\n\t\t\t  font-weight: bold;\n\t\t\t}\n\t\t\tinput {\n\t\t\t  height: 2em;\n\t\t\t  font-size: 1em;\n\t\t\t  padding-left: .4em;\n\t\t\t}\n\t\t\tbutton {\n\t\t\t  margin-top: 20px;\n\t\t\t  font-family: Arial;\n\t\t\t  background-color: #eee;\n\t\t\t  border: none;\n\t\t\t  padding: 5px 10px;\n\t\t\t  border-radius: 4px;\n\t\t\t  cursor: pointer; cursor: hand;\n\t\t\t}\n\t\t\tbutton:hover {\n\t\t\t  background-color: #cfd8dc;\n\t\t\t}\n\t\t"],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        inputs: ['hero']
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.RouteParams])
                ], HeroDetailComponent);
                return HeroDetailComponent;
            })();
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
//# sourceMappingURL=hero-detail.component.js.map