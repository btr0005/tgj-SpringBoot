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
var member_1 = require('../members/member');
var StoryComponent = (function () {
    function StoryComponent() {
        this.submitted = false;
        this.new_text = "";
        this.word_count = 0;
        this.aestheticMode = false;
        this.charlie = new member_1.Member("Charlie", "#00AA00");
        this.dan = new member_1.Member("Dan", "#5566EE");
        this.story = new Story("My Story", "Once upon a time..", [
            new StoryUnit(this.charlie, "Once upon"),
            new StoryUnit(this.dan, "a time"),
            new StoryUnit(this.charlie, "there was"),
            new StoryUnit(this.dan, "a little"),
            new StoryUnit(this.charlie, "man named"),
            new StoryUnit(this.dan, "Dan Parker."),
        ], 3);
    }
    StoryComponent.prototype.onSubmit = function () { this.submitted = true; };
    StoryComponent.prototype.aestheticModeToggle = function () {
        if (this.aestheticMode) {
            this.aestheticMode = false;
        }
        else {
            this.aestheticMode = true;
        }
    };
    StoryComponent.prototype.isTextValid = function () {
        return (this.new_text.trim().split(" ").length == this.story.per_turn_word_limit);
    };
    StoryComponent.prototype.onKey = function (event) {
        // Do nothing if there is no per turn word limit set for this story
        if (this.story.per_turn_word_limit == -1)
            return;
        var words = event.target.value.split(" ");
        if (words.length > this.story.per_turn_word_limit) {
            words.pop();
            this.new_text = words.join(" ").trim() + " ";
        }
        else {
            this.new_text = words.join(" ");
        }
    };
    StoryComponent = __decorate([
        core_1.Component({
            selector: 'story-component',
            template: "\n\t\t\t\n\t\t\t\t<h3>{{story.name}}</h3>\n\t\t\t\t\n\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-xs\" \n\t\t\t\t\t\t(click)=\"this.aestheticModeToggle()\">Aesthetic Mode</button>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t  <div class=\"panel-body\" >\n\t\t\t\t\t\n\t\t\t\t\t\t<div *ngIf=\"!this.aestheticMode\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<font *ngFor=\"let item of story.text_units\" color=\"{{item.author.color}}\">{{item.text}} </font>\n\t\t\t\t\t\t\t\t<i>{{new_text}}</i>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"this.aestheticMode\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<font *ngFor=\"let item of story.text_units\" color=\"{{item.author.color}}\">{{item.text.split('').join(' ')}} </font>\n\t\t\t\t\t\t\t\t<i>{{new_text}}</i>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t  </div>\n\t\t\t\t</div>\t\t\t\t\n\t\t\t\t\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\">Name</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" \n\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t[(ngModel)]=\"story.name\" name=\"name\"\n\t\t\t\t\t\t\t#name=\"ngModel\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"2\" id=\"text\"\n\t\t\t\t\t\t\tname=\"text\"\n\t\t\t\t\t\t\t[(ngModel)]=\"new_text\" \n\t\t\t\t\t\t\t#text=\"ngModel\"\n\t\t\t\t\t\t\tplaceholder=\"Enter words..\"\n\t\t\t\t\t\t\trequired></textarea>\n\t\t\t\t\t</div>\t\t\n\t\t\t\t\t<div [hidden]=\"text.pristine\" *ngIf=\"!this.isTextValid()\" class=\"alert alert-warning\">\n\t\t\t\t\t\tYou must enter exactly {{story.per_turn_word_limit}} words!\n\t\t\t\t\t</div>\n\t\t\t\t\t<div align=\"right\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\t\t\t\n\t\t\t",
        }), 
        __metadata('design:paramtypes', [])
    ], StoryComponent);
    return StoryComponent;
}());
exports.StoryComponent = StoryComponent;
var Story = (function () {
    function Story(name, text, text_units, per_turn_word_limit) {
        this.name = name;
        this.text = text;
        this.text_units = text_units;
        this.per_turn_word_limit = per_turn_word_limit;
    }
    return Story;
}());
exports.Story = Story;
var StoryUnit = (function () {
    function StoryUnit(author, text) {
        this.author = author;
        this.text = text;
    }
    return StoryUnit;
}());
exports.StoryUnit = StoryUnit;
//# sourceMappingURL=story.component.js.map