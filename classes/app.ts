import {BinaryTree} from "./BinaryTree";
import {TreeNode} from "./BinaryTreeNode";
import {Output} from "./Output";


let forShow = new Output();
let bt = new BinaryTree();


bt.addToTree(5);
bt.addToTree(2);
bt.addToTree(6);
bt.addToTree(7);
bt.addToTree(11);
bt.addToTree(15);
bt.addToTree(10);
bt.deleteKey(11);

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