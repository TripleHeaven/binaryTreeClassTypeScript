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

    return null;
}


bt.addToTree(5);
/*
bt.addToTree(2);
bt.addToTree(6);
bt.addToTree(7);
bt.addToTree(11);
bt.addToTree(15);
bt.addToTree(10);
*/
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