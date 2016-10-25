"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var members_service_1 = require('./members.service');
var AppComponent = (function () {
    function AppComponent(membersService) {
        this.membersService = membersService;
        this.title = 'Join Club';
        this.member = {
            id: 1,
            name: 'Chort',
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getMessage();
    };
    AppComponent.prototype.getMessage = function () {
        var _this = this;
        this.membersService.tellMe("David")
            .subscribe(function (data) { return _this.message = data.name; }, function (error) { return console.log("Error HTTP GET Service"); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t\t\t<h1>{{title}}</h1>\n\t\t\t<h2>{{member.name}} details!</h2>\n\t\t\t<div><label>id: </label>{{member.id}}</div>\n\t\t\t<div>\n\t\t\t\t<label>name: </label>\n\t\t\t\t<input [(ngModel)]=\"member.name\" placeholder=\"name\">\n\t\t\t</div>\n\t\t\tmessage: {{message}}\n\t\t\t",
            providers: [members_service_1.MembersService]
        }), 
        __metadata('design:paramtypes', [members_service_1.MembersService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Member = (function () {
    function Member() {
    }
    return Member;
}());
exports.Member = Member;
//# sourceMappingURL=app.component.js.map