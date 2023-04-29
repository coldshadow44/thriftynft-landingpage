// ======= Imports ======= //

// ======= Variables ======= //

async function TopNFT() {
  const topNFTEl = document.querySelectorAll(`.top-nft`);
  const res = await fetch(
    "http://localhost:8080/getPutonsaleperpage?page=0&language=en&sortby=top&perPage=4"
  );
  const result = await res.json();

  result.data.forEach(async function (item, idx) {
    const web3Data = await fetch(
      item.metadata.replace("ipfs://", "https://nftstorage.link/ipfs/")
    );
    const web3Result = await web3Data.json();
    const nftName = web3Result.name;
    const imageUrl = web3Result.image.replace(
      "ipfs://",
      "https://nftstorage.link/ipfs/"
    );
    topNFTEl[idx].children[0].setAttribute("src", imageUrl);
    topNFTEl[idx].children[1].textContent = nftName;
  });
}
TopNFT();
// ======= Codes ======= //

// ======= Exports ======= //
