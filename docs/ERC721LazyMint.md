# ERC721LazyMint





BASE:      ERC721Base      EXTENSION: LazyMint  The `ERC721LazyMint` contract uses the `ERC721Base` contract, along with the `LazyMint` extension.  &#39;Lazy minting&#39; means defining the metadata of NFTs without minting it to an address. Regular &#39;minting&#39;  of  NFTs means actually assigning an owner to an NFT.  As a contract admin, this lets you prepare the metadata for NFTs that will be minted by an external party,  without paying the gas cost for actually minting the NFTs.



## Methods

### approve

```solidity
function approve(address to, uint256 tokenId) external nonpayable
```



*See {IERC721-approve}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined
| tokenId | uint256 | undefined

### balanceOf

```solidity
function balanceOf(address owner) external view returns (uint256)
```



*See {IERC721-balanceOf}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### batchMintTo

```solidity
function batchMintTo(address _to, uint256 _quantity, string, bytes _data) external nonpayable
```

Lets an authorized address mint multiple lazy minted NFTs at once to a recipient.

*The logic in the `_canMint` function determines whether the caller is authorized to mint NFTs.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | The recipient of the NFT to mint.
| _quantity | uint256 | The number of NFTs to mint.
| _2 | string | undefined
| _data | bytes | Additional data to pass along during the minting of the NFT.

### burn

```solidity
function burn(uint256 _tokenId) external nonpayable
```

Lets an owner or approved operator burn the NFT of the given tokenId.

*ERC721A&#39;s `_burn(uint256,bool)` internally checks for token approvals.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenId | uint256 | The tokenId of the NFT to burn.

### contractURI

```solidity
function contractURI() external view returns (string)
```

Returns the contract metadata URI.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### getApproved

```solidity
function getApproved(uint256 tokenId) external view returns (address)
```



*See {IERC721-getApproved}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### getBaseURICount

```solidity
function getBaseURICount() external view returns (uint256)
```

Returns the count of batches of NFTs.

*Each batch of tokens has an in ID and an associated `baseURI`.                  See {batchIds}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getBatchIdAtIndex

```solidity
function getBatchIdAtIndex(uint256 _index) external view returns (uint256)
```

Returns the ID for the batch of tokens the given tokenId belongs to.

*See {getBaseURICount}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _index | uint256 | ID of a token.

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getDefaultRoyaltyInfo

```solidity
function getDefaultRoyaltyInfo() external view returns (address, uint16)
```

Returns the defualt royalty recipient and BPS for this contract&#39;s NFTs.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined
| _1 | uint16 | undefined

### getRoyaltyInfoForToken

```solidity
function getRoyaltyInfoForToken(uint256 _tokenId) external view returns (address, uint16)
```

View royalty info for a given token.

*Returns royalty recipient and bps for `_tokenId`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenId | uint256 | The tokenID of the NFT for which to query royalty info.

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined
| _1 | uint16 | undefined

### isApprovedForAll

```solidity
function isApprovedForAll(address owner, address operator) external view returns (bool)
```



*See {IERC721-isApprovedForAll}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined
| operator | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### isApprovedOrOwner

```solidity
function isApprovedOrOwner(address _operator, uint256 _tokenId) external view returns (bool isApprovedOrOwnerOf)
```

Returns whether a given address is the owner, or approved to transfer an NFT.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _operator | address | undefined
| _tokenId | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| isApprovedOrOwnerOf | bool | undefined

### lazyMint

```solidity
function lazyMint(uint256 _amount, string _baseURIForTokens, bytes _data) external nonpayable returns (uint256 batchId)
```

Lets an authorized address lazy mint a given amount of NFTs.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _amount | uint256 | The number of NFTs to lazy mint.
| _baseURIForTokens | string | The base URI for the &#39;n&#39; number of NFTs being lazy minted, where the metadata for each                           of those NFTs is `${baseURIForTokens}/${tokenId}`.
| _data | bytes | Additional bytes data to be used at the discretion of the consumer of the contract.

#### Returns

| Name | Type | Description |
|---|---|---|
| batchId | uint256 |          A unique integer identifier for the batch of NFTs lazy minted together.

### mintTo

```solidity
function mintTo(address _to, string) external nonpayable
```

Lets an authorized address mint a lazy minted NFT to a recipient.

*The logic in the `_canMint` function determines whether the caller is authorized to mint NFTs.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | The recipient of the NFT to mint.
| _1 | string | undefined

### multicall

```solidity
function multicall(bytes[] data) external nonpayable returns (bytes[] results)
```

Receives and executes a batch of function calls on this contract.

*Receives and executes a batch of function calls on this contract.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| data | bytes[] | The bytes data that makes up the batch of function calls to execute.

#### Returns

| Name | Type | Description |
|---|---|---|
| results | bytes[] | The bytes data that makes up the result of the batch of function calls executed.

### name

```solidity
function name() external view returns (string)
```



*See {IERC721Metadata-name}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### nextTokenIdToMint

```solidity
function nextTokenIdToMint() external view returns (uint256)
```

The tokenId assigned to the next new NFT to be lazy minted.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### owner

```solidity
function owner() external view returns (address)
```

Returns the owner of the contract.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### ownerOf

```solidity
function ownerOf(uint256 tokenId) external view returns (address)
```



*See {IERC721-ownerOf}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### royaltyInfo

```solidity
function royaltyInfo(uint256 tokenId, uint256 salePrice) external view returns (address receiver, uint256 royaltyAmount)
```

View royalty info for a given token and sale price.

*Returns royalty amount and recipient for `tokenId` and `salePrice`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | The tokenID of the NFT for which to query royalty info.
| salePrice | uint256 | Sale price of the token.

#### Returns

| Name | Type | Description |
|---|---|---|
| receiver | address |        Address of royalty recipient account.
| royaltyAmount | uint256 |   Royalty amount calculated at current royaltyBps value.

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data) external nonpayable
```



*See {IERC721-safeTransferFrom}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined
| to | address | undefined
| tokenId | uint256 | undefined
| _data | bytes | undefined

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) external nonpayable
```



*See {IERC721-setApprovalForAll}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | undefined
| approved | bool | undefined

### setContractURI

```solidity
function setContractURI(string _uri) external nonpayable
```

Lets a contract admin set the URI for contract-level metadata.

*Caller should be authorized to setup contractURI, e.g. contract admin.                  See {_canSetContractURI}.                  Emits {ContractURIUpdated Event}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _uri | string | keccak256 hash of the role. e.g. keccak256(&quot;TRANSFER_ROLE&quot;)

### setDefaultRoyaltyInfo

```solidity
function setDefaultRoyaltyInfo(address _royaltyRecipient, uint256 _royaltyBps) external nonpayable
```

Updates default royalty recipient and bps.

*Caller should be authorized to set royalty info.                  See {_canSetRoyaltyInfo}.                  Emits {DefaultRoyalty Event}; See {_setupDefaultRoyaltyInfo}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _royaltyRecipient | address | Address to be set as default royalty recipient.
| _royaltyBps | uint256 | Updated royalty bps.

### setOwner

```solidity
function setOwner(address _newOwner) external nonpayable
```

Lets an authorized wallet set a new owner for the contract.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _newOwner | address | The address to set as the new owner of the contract.

### setRoyaltyInfoForToken

```solidity
function setRoyaltyInfoForToken(uint256 _tokenId, address _recipient, uint256 _bps) external nonpayable
```

Updates default royalty recipient and bps for a particular token.

*Sets royalty info for `_tokenId`. Caller should be authorized to set royalty info.                  See {_canSetRoyaltyInfo}.                  Emits {RoyaltyForToken Event}; See {_setupRoyaltyInfoForToken}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenId | uint256 | undefined
| _recipient | address | Address to be set as royalty recipient for given token Id.
| _bps | uint256 | Updated royalty bps for the token Id.

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*See ERC165: https://eips.ethereum.org/EIPS/eip-165*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### symbol

```solidity
function symbol() external view returns (string)
```



*See {IERC721Metadata-symbol}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) external view returns (string)
```

Returns the metadata URI for an NFT.

*See `BatchMintMetadata` for handling of metadata in this contract.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenId | uint256 | The tokenId of an NFT.

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```



*Burned tokens are calculated here, use _totalMinted() if you want to count just minted tokens.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 tokenId) external nonpayable
```



*See {IERC721-transferFrom}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined
| to | address | undefined
| tokenId | uint256 | undefined



## Events

### Approval

```solidity
event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| approved `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed owner, address indexed operator, bool approved)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| operator `indexed` | address | undefined |
| approved  | bool | undefined |

### ContractURIUpdated

```solidity
event ContractURIUpdated(string prevURI, string newURI)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| prevURI  | string | undefined |
| newURI  | string | undefined |

### DefaultRoyalty

```solidity
event DefaultRoyalty(address indexed newRoyaltyRecipient, uint256 newRoyaltyBps)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newRoyaltyRecipient `indexed` | address | undefined |
| newRoyaltyBps  | uint256 | undefined |

### OwnerUpdated

```solidity
event OwnerUpdated(address indexed prevOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| prevOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### RoyaltyForToken

```solidity
event RoyaltyForToken(uint256 indexed tokenId, address indexed royaltyRecipient, uint256 royaltyBps)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId `indexed` | uint256 | undefined |
| royaltyRecipient `indexed` | address | undefined |
| royaltyBps  | uint256 | undefined |

### TokensLazyMinted

```solidity
event TokensLazyMinted(uint256 indexed startTokenId, uint256 endTokenId, string baseURI, bytes encryptedBaseURI)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| startTokenId `indexed` | uint256 | undefined |
| endTokenId  | uint256 | undefined |
| baseURI  | string | undefined |
| encryptedBaseURI  | bytes | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |



## Errors

### ApprovalCallerNotOwnerNorApproved

```solidity
error ApprovalCallerNotOwnerNorApproved()
```

The caller must own the token or be an approved operator.




### ApprovalQueryForNonexistentToken

```solidity
error ApprovalQueryForNonexistentToken()
```

The token does not exist.




### ApprovalToCurrentOwner

```solidity
error ApprovalToCurrentOwner()
```

The caller cannot approve to the current owner.




### ApproveToCaller

```solidity
error ApproveToCaller()
```

The caller cannot approve to their own address.




### BalanceQueryForZeroAddress

```solidity
error BalanceQueryForZeroAddress()
```

Cannot query the balance for the zero address.




### MintToZeroAddress

```solidity
error MintToZeroAddress()
```

Cannot mint to the zero address.




### MintZeroQuantity

```solidity
error MintZeroQuantity()
```

The quantity of tokens minted must be more than zero.




### OwnerQueryForNonexistentToken

```solidity
error OwnerQueryForNonexistentToken()
```

The token does not exist.




### TransferCallerNotOwnerNorApproved

```solidity
error TransferCallerNotOwnerNorApproved()
```

The caller must own the token or be an approved operator.




### TransferFromIncorrectOwner

```solidity
error TransferFromIncorrectOwner()
```

The token must be owned by `from`.




### TransferToNonERC721ReceiverImplementer

```solidity
error TransferToNonERC721ReceiverImplementer()
```

Cannot safely transfer to a contract that does not implement the ERC721Receiver interface.




### TransferToZeroAddress

```solidity
error TransferToZeroAddress()
```

Cannot transfer to the zero address.




### URIQueryForNonexistentToken

```solidity
error URIQueryForNonexistentToken()
```

The token does not exist.





