async function loadLeetCode() {
  const username = "aryaman123";

  try {
    // WORKING community API (CORS enabled)
    const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
    const data = await res.json();

    document.getElementById("lc-total").innerText = data.totalSolved || "N/A";
    document.getElementById("lc-easy").innerText = data.easySolved || "N/A";
    document.getElementById("lc-medium").innerText = data.mediumSolved || "N/A";
    document.getElementById("lc-hard").innerText = data.hardSolved || "N/A";
  } 
  catch (err) {
    console.error("LeetCode API failed, fallback static mode", err);
    document.getElementById("lc-total").innerText = "—";
    document.getElementById("lc-easy").innerText = "—";
    document.getElementById("lc-medium").innerText = "—";
    document.getElementById("lc-hard").innerText = "—";
  }

  // LeetCode card image (works always)
  document.getElementById("lc-graph").src =
    `https://leetcard.jacoblin.cool/${username}?theme=dark&font=Work%20Sans&ext=heatmap`;
}

loadLeetCode();