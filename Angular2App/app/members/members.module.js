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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var members_routing_module_1 = require('./members-routing.module');
var join_component_1 = require('./join.component');
var memberlist_component_1 = require('./memberlist.component');
var members_service_1 = require('./members.service');
var MembersModule = (function () {
    function MembersModule() {
    }
    MembersModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                members_routing_module_1.MemberRoutingModule
            ],
            declarations: [
                join_component_1.JoinComponent,
                memberlist_component_1.MemberListComponent
            ],
            providers: [
                members_service_1.MembersService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MembersModule);
    return MembersModule;
}());
exports.MembersModule = MembersModule;
//# sourceMappingURL=members.module.js.map