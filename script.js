async function getMurid() {
    const res = await fetch(CONFIG.API_URL + "?action=murid");
    return await res.json();
}
