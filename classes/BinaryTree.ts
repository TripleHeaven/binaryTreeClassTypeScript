import {TreeNode} from "./BinaryTreeNode";
export {BinaryTree};
class BinaryTree<T> {
    // Property to hold a reference to the root node of the tree
    private _root: TreeNode<T>;
    // Straight Traversal String
    private _sts = "";
    public get sts(): string {
      return this._sts;
    }
    // Simmetrical Traversal String
    private _sits = "";
    public get sits() : string {
      return this._sits;
    }
    // Back order Traversal String
    private _bots = "";
    public get bots() : string {
      return this._bots;
    }
    // Broad Width Traversal String
    private _bfsStr = "";
    public get bfsStr () : string {
      return this._bfsStr;
    }
    // method for adding to a string
    strAppend (str : string, v : string, separator="") : string{
      return str+separator+v;
    }
    SimmetricalTraversal(node = this._root) : boolean{
      if (node == null){
        return false;
      }
      else{
        let l = (node.left != null) ? this.SimmetricalTraversal(node.left) : false;
        this._sits = this.strAppend(this.sits, node.value.toString(), " ");
        let r = (node.right != null) ? this.SimmetricalTraversal(node.right) : false;
      }
    }
    StraightTraversal(node = this._root) : boolean{
      if (node==null){
        return false;
      }
      else{
        this._sts = this.strAppend(this.sts,node.value.toString(), " ");
        let l = (node.left!= null) ? this.StraightTraversal(node.left) : false;
        let r = (node.right!= null) ? this.StraightTraversal(node.right) : false;
      }
    }
    BackOrderTraversal (node = this._root) : boolean {
      if (node == null){
        return false;
      }
      else{
        let l = (node.left != null) ? this.BackOrderTraversal(node.left) : false;
        let r = (node.right != null) ? this.BackOrderTraversal(node.right) : false;
        this._bots = this.strAppend(this.bots, node.value.toString(), " ");
      }
    }
    BFS (node = this._root) : boolean {
      let queue = [];
      if (node == null){
        return null;
      }
      else{
        queue.push(node);

        while (queue.length > 0){
          let tmp = queue.shift();
          this._bfsStr = this.strAppend(this.bfsStr, tmp.value.toString()," ");
          if (tmp.left!=null){
            queue.push(tmp.left);
          }
          if (tmp.right!=null){
            queue.push(tmp.right);
          }
        }

      }
    }
    
    public get root(): TreeNode<T> {
      return this._root;
    }
    public set root(v: TreeNode<T>) {
      this._root = v;
    }
    // minValue
    minValue (root : TreeNode<T>){
      let minv = root.value;
      while (root.left != null){
        minv = root.left.value;
        root = root.left;
      }
      return minv
    }
    // recursive method to delete the node 
    deleteKey (value : any){
      this.root = this.deleteRec(this.root, value);
    }
    deleteRec (root: TreeNode<T>, value : any): TreeNode<T>{
      // if tree is empty
      if (root == null) {
        return null;
      }
      
      if (value < root.value){
        root.left = this.deleteRec(root.left,value);
      }
      else if (value > root.value){
        root.right = this.deleteRec(root.right, value);
      }

      // root = root's key , it's to be deleted then
      else{
        // node with only one child or no child
        
        if (root.left == null){
          return root.right;
        }
        else if (root.right == null){
          return root.left;
        }

        // two children
        root.value = this.minValue(root.right);

        // delete unapropriate child
        root.right = this.deleteRec(root.right, root.value);
      }
      return root;
    }
    // recursive method of getting the Depth of the whole Tree
    treeDepth(node : TreeNode<T>): number {
        // checking if the tree is empty
        if (node != null){
            let leftDepth = (node.left != null) ? this.treeDepth(node.left) : 0;
            let rightDepth = (node.right != null) ? this.treeDepth(node.right) : 0;
            return ((leftDepth > rightDepth) ? leftDepth : rightDepth) + 1
        }
        else{
            return 0;
        }
    }
    leafCount (node = this._root): number {
      if (node == null){
        return 0;
      }
      else{
        if (node.left == null && node.right == null){
          return 1;
        }
        return this.leafCount(node.left) + this.leafCount(node.right);
      }
    }
    addToTree(value: T): boolean {
        // Create a new node
        const newNode = new TreeNode(value);
    
        // If tree is empty, set new node as root
        if (this._root == null) {
          this._root = newNode;
          return true;
        } else {
          // If tree is not empty, find the right spot for the new node
          let currentNode = this._root;
          let traversing = true;
          while (traversing) {
            if (currentNode.value == newNode.value) {
              //Assumption: Duplicates are not accepted.
              traversing = false;
              return false;
            } else if (newNode.value < currentNode.value) {
              // Traverse left of the node
              if (currentNode.left == null) {
                //Add to the left of the current node
                currentNode.left = newNode;
                traversing = false;
                return true;
              } else {
                //Traverse the left of the current node
                currentNode = currentNode.left;
              }
            } else if (newNode.value > currentNode.value) {
              // Traverse right of the node
              if (currentNode.right == null) {
                //Add to the right of the current node
                currentNode.right = newNode;
                traversing = false;
                return true;
              } else {
                //Traverse the left of the current node
                currentNode = currentNode.right;
              }
            }
          }
        }
      }
    constructor() {
      this._root = null;
    }
  }