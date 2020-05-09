import {BinaryTree} from "./BinaryTree"
export {TreeNode};
class TreeNode<T> {
    // Getting values of the node
    private _value: T;
    public get value(): T {
      return this._value;
    }
    // Setting the value of the node
    public set value(v: T) {
      this._value = v;
    }
    
    // Property to hold reference to the left child node
    private _left: TreeNode<T>;
    public get left(): TreeNode<T> {
      return this._left;
    }
    public set left(node: TreeNode<T>) {
      this._left = node;
    }
  
    // Property to hold reference to the right child node
    private _right: TreeNode<T>;
    public get right(): TreeNode<T> {
      return this._right;
    }
    public set right(v: TreeNode<T>) {
      this._right = v;
    }
    
    // forDrawing
    index : number;
    depthNode : number;


    // Initialize a new node
    constructor(value: T) {
      this._value = value;
      this._left = null;
      this._right = null;
    }
  }