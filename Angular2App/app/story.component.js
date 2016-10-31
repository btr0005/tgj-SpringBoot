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
var StoryComponent = (function () {
    function StoryComponent() {
        this.submitted = false;
        this.new_text = "";
        this.story = new Story("My Story", "Once upon a time..", 0);
    }
    StoryComponent.prototype.onSubmit = function () { this.submitted = true; };
    StoryComponent = __decorate([
        core_1.Component({
            selector: 'story-component',
            template: "\n\t\t\t\n\t\t\t\t<h3>{{story.name}}</h3>\n\t\t\t\t\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t  <div class=\"panel-body\" >\n\t\t\t\t\t<p>\n\t\t\t\t\t\t{{story.text}} <i>{{new_text}}</i>\n\t\t\t\t\t</p>\n\t\t\t\t  </div>\n\t\t\t\t</div>\t\t\t\t\n\t\t\t\t\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\">Name</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" \n\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t[(ngModel)]=\"story.name\" name=\"name\"\n\t\t\t\t\t\t\t#name=\"ngModel\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"2\" id=\"text\"\n\t\t\t\t\t\t\tname=\"text\"\n\t\t\t\t\t\t\t[(ngModel)]=\"new_text\" \n\t\t\t\t\t\t\t#text=\"ngModel\"\n\t\t\t\t\t\t\tplaceholder=\"Enter words..\"\n\t\t\t\t\t\t\trequired></textarea>\n\t\t\t\t\t</div>\t\t\t\t \n\t\t\t\t\t<div align=\"right\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t",
        }), 
        __metadata('design:paramtypes', [])
    ], StoryComponent);
    return StoryComponent;
}());
exports.StoryComponent = StoryComponent;
var Story = (function () {
    function Story(name, text, turn_word_limit) {
        this.name = name;
        this.text = text;
        this.turn_word_limit = turn_word_limit;
    }
    return Story;
}());
exports.Story = Story;
//# sourceMappingURL=story.component.js.map