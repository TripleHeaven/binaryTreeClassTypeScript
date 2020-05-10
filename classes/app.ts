import {BinaryTree} from "./BinaryTree";
import {TreeNode} from "./BinaryTreeNode";
import {Output} from "./Output";
import {taskConcordance} from "./taskConcordance";
import {Drawing} from "./drawing";

let forShow = new Output();
let forDrawing = new Drawing(document.getElementById("forDrawing"));
let bt = new BinaryTree(forDrawing);

document.getElementById("doInput").onclick = function concordance(){
    let ccrdnc = new taskConcordance("inputConc","outputConc");
    return null;
}

document.getElementById("draw").onclick = function draw(){
    bt.BFSDrawing();
    let positions = bt.BFSpos();
    let a = 5;
    
    forDrawing.drawingNodes(positions);
    return null;
}
document.getElementById("balance").onclick = function draw(){
    bt.balance(bt.root);
    return null;
}

bt.addToTree(5);
bt.addToTree(6);
bt.addToTree(7);
bt.addToTree(3);
bt.addToTree(4);
bt.addToTree(1);
bt.addToTree(8);
bt.addToTree(9);

bt.deleteKey(4);
bt.balance(bt.root);
let depth = bt.treeDepth(bt.root);
let lc = bt.leafCount();

bt.StraightTraversal();
bt.SimmetricalTraversal();
bt.BackOrderTraversal();
bt.BFS();


forShow.toShow("depth",depth);
forShow.toShow("leafcount", lc);
forShow.toShow("straightTraversal", bt.sts);
forShow.toShow("simmetricalTraversal",bt.sits);
forShow.toShow("backorderTraversal", bt.bots);
forShow.toShow("broadwidthTraversal", bt.bfsStr);