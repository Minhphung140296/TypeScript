class Menu {
    item: Array<string>;
    pages: number;

    constructor(item_list: Array<string>, total_pages: number){
        this.item = item_list;
        this.pages = total_pages;
    }

    List():void{
        console.log("Our menu for today");
        for(var i=0;i<this.item.length;i++){
            console.log(this.item[i]);
        }
    }
}
var saturdayMenu = new Menu(["pancakes","waffles","orange juice"],1);

saturdayMenu.List();

class HappyMeal extends Menu{
    constructor(item_list: Array<string>, total_pages: number){
        super(item_list,total_pages);
    }
    List():void{
        console.log("Our special menu for children");
        for(var i=0;i<this.item.length;i++){
            console.log(this.item[i]);
        }
    }
}
var Menu_for_children = new HappyMeal(["Candy","Drink","Toy"],1);

Menu_for_children.List();