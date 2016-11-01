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
var member_1 = require('./member');
var JoinComponent = (function () {
    function JoinComponent() {
        this.submitted = false;
        this.member = new member_1.Member("New User", "#000000");
    }
    JoinComponent.prototype.onSubmit = function () { this.submitted = true; };
    JoinComponent.prototype.newMember = function () {
        console.log("New Member: " + this.member.name);
    };
    JoinComponent = __decorate([
        core_1.Component({
            selector: 'join-component',
            template: "\n\t\t\t\n\t\t\t\t<h3>Become a Member</h3>\n\t\t\t\t\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t  <div class=\"panel-body\" >\n\t\t\t\t\t<h4 [style.color]=\"member.color\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-user\"></span>\n\t\t\t\t\t\t{{member.name}}\n\t\t\t\t\t</h4>\n\t\t\t\t  </div>\n\t\t\t\t</div>\t\t\t\t\n\t\t\t\t\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\">Name</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" \n\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t[(ngModel)]=\"member.name\" name=\"name\"\n\t\t\t\t\t\t\t#name=\"ngModel\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"color\">Favorite Color</label>\n\t\t\t\t\t\t<input type=\"color\" class=\"form-control\" id=\"color\" \n\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t[(ngModel)]=\"member.color\" name=\"color\"\n\t\t\t\t\t\t\t#color=\"ngModel\">\n\t\t\t\t\t</div>\n\t\t\t\t \n\t\t\t\t\t<div align=\"right\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\"\n\t\t\t\t\t\t\t\t(click)=\"newMember()\">Join</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t",
        }), 
        __metadata('design:paramtypes', [])
    ], JoinComponent);
    return JoinComponent;
}());
exports.JoinComponent = JoinComponent;
//# sourceMappingURL=join.component.js.map