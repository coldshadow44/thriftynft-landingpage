async function TopNFT(){const t=document.querySelectorAll(".top-nft"),e=await fetch("http://localhost:8080/getPutonsaleperpage?page=0&language=en&sortby=top&perPage=4");(await e.json()).data.forEach((async function(e,a){const n=await fetch(e.metadata.replace("ipfs://","https://nftstorage.link/ipfs/")),o=await n.json(),s=o.name,c=o.image.replace("ipfs://","https://nftstorage.link/ipfs/");t[a].children[0].setAttribute("src",c),t[a].children[1].textContent=s}))}TopNFT();
//# sourceMappingURL=script.2d170d65.js.map
