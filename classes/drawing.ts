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
    
    drawingNodes(positions : Array<any>){
        for (let i = 0 ; i < positions.length ; i++){
            this.ctx.fillStyle = "white";
            let width = 5;
            this.ctx.fillRect(positions[i][0], positions[i][1], width,width);
        }
    
    }
}