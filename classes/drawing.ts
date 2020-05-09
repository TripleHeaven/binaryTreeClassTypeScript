import {TreeNode} from "./BinaryTreeNode";
export {Drawing};
class Drawing{
    canvas : HTMLCanvasElement;
    ctx : CanvasRenderingContext2D;
    constructor (canvas : HTMLCanvasElement){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

}