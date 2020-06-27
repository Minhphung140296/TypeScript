var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Menu = /** @class */ (function () {
    function Menu(item_list, total_pages) {
        this.item = item_list;
        this.pages = total_pages;
    }
    Menu.prototype.List = function () {
        console.log("Our menu for today");
        for (var i = 0; i < this.item.length; i++) {
            console.log(this.item[i]);
        }
    };
    return Menu;
}());
var saturdayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);
saturdayMenu.List();
var HappyMeal = /** @class */ (function (_super) {
    __extends(HappyMeal, _super);
    function HappyMeal(item_list, total_pages) {
        return _super.call(this, item_list, total_pages) || this;
    }
    HappyMeal.prototype.List = function () {
        console.log("Our special menu for children");
        for (var i = 0; i < this.item.length; i++) {
            console.log(this.item[i]);
        }
    };
    return HappyMeal;
}(Menu));
var Menu_for_children = new HappyMeal(["Candy", "Drink", "Toy"], 1);
Menu_for_children.List();
