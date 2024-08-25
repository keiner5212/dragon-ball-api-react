const  ApiBase = "https://dragonball-api.com/api/";

export async function getCharacters(currentPage) {
    const response = await fetch(ApiBase + "characters"+"?limit=10&page="+currentPage)
    return await response.json()
}