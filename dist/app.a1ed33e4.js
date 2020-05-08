// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"classes/BinaryTreeNode.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var TreeNode =
/** @class */
function () {
  // Initialize a new node
  function TreeNode(value) {
    this._value = value;
    this._left = null;
    this._right = null;
  }

  Object.defineProperty(TreeNode.prototype, "value", {
    get: function get() {
      return this._value;
    },
    // Setting the value of the node
    set: function set(v) {
      this._value = v;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreeNode.prototype, "left", {
    get: function get() {
      return this._left;
    },
    set: function set(node) {
      this._left = node;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreeNode.prototype, "right", {
    get: function get() {
      return this._right;
    },
    set: function set(v) {
      this._right = v;
    },
    enumerable: true,
    configurable: true
  });
  return TreeNode;
}();

exports.TreeNode = TreeNode;
},{}],"classes/BinaryTree.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var BinaryTreeNode_1 = require("./BinaryTreeNode");

var BinaryTree =
/** @class */
function () {
  function BinaryTree() {
    // Straight Traversal String
    this._sts = ""; // Simmetrical Traversal String

    this._sits = ""; // Back order Traversal String

    this._bots = ""; // Broad Width Traversal String

    this._bfsStr = "";
    this._root = null;
  }

  Object.defineProperty(BinaryTree.prototype, "sts", {
    get: function get() {
      return this._sts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BinaryTree.prototype, "sits", {
    get: function get() {
      return this._sits;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BinaryTree.prototype, "bots", {
    get: function get() {
      return this._bots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BinaryTree.prototype, "bfsStr", {
    get: function get() {
      return this._bfsStr;
    },
    enumerable: true,
    configurable: true
  }); // method for adding to a string

  BinaryTree.prototype.strAppend = function (str, v, separator) {
    if (separator === void 0) {
      separator = "";
    }

    return str + separator + v;
  };

  BinaryTree.prototype.SimmetricalTraversal = function (node) {
    if (node === void 0) {
      node = this._root;
    }

    if (node == null) {
      return false;
    } else {
      var l = node.left != null ? this.SimmetricalTraversal(node.left) : false;
      this._sits = this.strAppend(this.sits, node.value.toString(), " ");
      var r = node.right != null ? this.SimmetricalTraversal(node.right) : false;
    }
  };

  BinaryTree.prototype.StraightTraversal = function (node) {
    if (node === void 0) {
      node = this._root;
    }

    if (node == null) {
      return false;
    } else {
      this._sts = this.strAppend(this.sts, node.value.toString(), " ");
      var l = node.left != null ? this.StraightTraversal(node.left) : false;
      var r = node.right != null ? this.StraightTraversal(node.right) : false;
    }
  };

  BinaryTree.prototype.BackOrderTraversal = function (node) {
    if (node === void 0) {
      node = this._root;
    }

    if (node == null) {
      return false;
    } else {
      var l = node.left != null ? this.BackOrderTraversal(node.left) : false;
      var r = node.right != null ? this.BackOrderTraversal(node.right) : false;
      this._bots = this.strAppend(this.bots, node.value.toString(), " ");
    }
  };

  BinaryTree.prototype.BFS = function (node) {
    if (node === void 0) {
      node = this._root;
    }

    var queue = [];

    if (node == null) {
      return null;
    } else {
      queue.push(node);

      while (queue.length > 0) {
        var tmp = queue.shift();
        this._bfsStr = this.strAppend(this.bfsStr, tmp.value.toString(), " ");

        if (tmp.left != null) {
          queue.push(tmp.left);
        }

        if (tmp.right != null) {
          queue.push(tmp.right);
        }
      }
    }
  };

  Object.defineProperty(BinaryTree.prototype, "root", {
    get: function get() {
      return this._root;
    },
    set: function set(v) {
      this._root = v;
    },
    enumerable: true,
    configurable: true
  }); // minValue

  BinaryTree.prototype.minValue = function (root) {
    var minv = root.value;

    while (root.left != null) {
      minv = root.left.value;
      root = root.left;
    }

    return minv;
  }; // recursive method to delete the node 


  BinaryTree.prototype.deleteKey = function (value) {
    this.root = this.deleteRec(this.root, value);
  };

  BinaryTree.prototype.deleteRec = function (root, value) {
    // if tree is empty
    if (root == null) {
      return null;
    }

    if (value < root.value) {
      root.left = this.deleteRec(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteRec(root.right, value);
    } // root = root's key , it's to be deleted then
    else {
        // node with only one child or no child
        if (root.left == null) {
          return root.right;
        } else if (root.right == null) {
          return root.left;
        } // two children


        root.value = this.minValue(root.right); // delete unapropriate child

        root.right = this.deleteRec(root.right, root.value);
      }

    return root;
  }; // recursive method of getting the Depth of the whole Tree


  BinaryTree.prototype.treeDepth = function (node) {
    // checking if the tree is empty
    if (node != null) {
      var leftDepth = node.left != null ? this.treeDepth(node.left) : 0;
      var rightDepth = node.right != null ? this.treeDepth(node.right) : 0;
      return (leftDepth > rightDepth ? leftDepth : rightDepth) + 1;
    } else {
      return 0;
    }
  };

  BinaryTree.prototype.leafCount = function (node) {
    if (node === void 0) {
      node = this._root;
    }

    if (node == null) {
      return 0;
    } else {
      if (node.left == null && node.right == null) {
        return 1;
      }

      return this.leafCount(node.left) + this.leafCount(node.right);
    }
  };

  BinaryTree.prototype.addToTree = function (value) {
    // Create a new node
    var newNode = new BinaryTreeNode_1.TreeNode(value); // If tree is empty, set new node as root

    if (this._root == null) {
      this._root = newNode;
      return true;
    } else {
      // If tree is not empty, find the right spot for the new node
      var currentNode = this._root;
      var traversing = true;

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
  };

  return BinaryTree;
}();

exports.BinaryTree = BinaryTree;
},{"./BinaryTreeNode":"classes/BinaryTreeNode.ts"}],"classes/Output.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Output =
/** @class */
function () {
  function Output() {}

  Output.prototype.toShow = function (idElem, valueToShow) {
    var outsideLabelShow = document.getElementById(idElem);
    outsideLabelShow.innerHTML = valueToShow.toString();
  };

  return Output;
}();

exports.Output = Output;
},{}],"classes/app.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var BinaryTree_1 = require("./BinaryTree");

var Output_1 = require("./Output");

var forShow = new Output_1.Output();
var bt = new BinaryTree_1.BinaryTree();
bt.addToTree(5);
bt.addToTree(2);
bt.addToTree(6);
bt.addToTree(7);
bt.addToTree(11);
bt.addToTree(15);
bt.addToTree(10);
bt.deleteKey(11);
var depth = bt.treeDepth(bt.root);
var lc = bt.leafCount();
bt.StraightTraversal();
bt.SimmetricalTraversal();
bt.BackOrderTraversal();
bt.BFS();
forShow.toShow("depth", depth);
forShow.toShow("leafcount", lc);
forShow.toShow("straightTraversal", bt.sts);
forShow.toShow("simmetricalTraversal", bt.sits);
forShow.toShow("backorderTraversal", bt.bots);
forShow.toShow("broadwidthTraversal", bt.bfsStr);
},{"./BinaryTree":"classes/BinaryTree.ts","./Output":"classes/Output.ts"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "39659" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","classes/app.ts"], null)
//# sourceMappingURL=/app.a1ed33e4.js.map