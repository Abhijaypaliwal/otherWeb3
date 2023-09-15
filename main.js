const {MerkleTree} = require("merkletreejs")
const keccak256 = require("keccak256")

let list = ['0x5B38Da6a701c568545dCfcB03FcB875f56beddC4','0x1Ed51d35bb0a3e5D8F27D47Ed25C508Cf9BDB181', '0x0457F8c9D15dAc4A831d899B6E02c522c7Eb4Dc6', "0x28660c5E4FB319Cb725748F8d268Ae526f414734", "0xf013E0e6c33982dB6cb7B1808BB3f6558198B637"]
let leaves = list.map(addr => keccak256(addr))
let merkleTree = new MerkleTree(leaves, keccak256, {sortPairs: true})
let rootHash = merkleTree.getRoot().toString('hex')
console.log(rootHash)
let address = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4" // The input
let hashedAddress = keccak256(address)
let proof = merkleTree.getHexProof(hashedAddress)
console.log(proof)

// [0xfa118d4c8db561b520ed2c725c8d66db9b79794624dc065d771f20c14e389707,0x17cc6069b95a12bdb1b3e6b073a0bcf45dfdbd8fadee626ad49efddf205230e1]
 [
     "0xa477b46b252988e512f6889b8f9072abb81ecdd684b9216f1f2b23193eadaad0",
     "0x527250519e86790bfb35c621d372e4480280410040c744760efa4485cfa5d955",
"0xb05bc224b862f5f946bdddcb0c4648225861a17b3678b136d611db3f14a07679"
  ]