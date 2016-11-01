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
var MemberListComponent = (function () {
    function MemberListComponent(memberService) {
        this.members = memberService.getMembers();
    }
    MemberListComponent.prototype.ngOnInit = function () {
        this.getMembers();
    };
    MemberListComponent.prototype.getMembers = function () {
        return this.members;
    };
    MemberListComponent = __decorate([
        core_1.Component({
            selector: 'member-list',
            template: "\t\t\t\t\n\t\t\t\t<ul class=\"list-group text-center\" *ngFor=\"let member of members; let i = index;\">\n\t\t\t\t\t<li class=\"list-group-item\" [style.color]=\"member.color\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-user\"></span>\n\t\t\t\t\t\t<strong>{{member.name}}</strong>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t  "
        }), 
        __metadata('design:paramtypes', [members_service_1.MembersService])
    ], MemberListComponent);
    return MemberListComponent;
}());
exports.MemberListComponent = MemberListComponent;
//# sourceMappingURL=memberlist.component.js.map