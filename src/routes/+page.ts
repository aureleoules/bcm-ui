
import { PUBLIC_SERVER_URL } from '$env/static/public'

export async function load() {
    try {
        const data = await fetch(`${PUBLIC_SERVER_URL}/mutations`)
        const mutations = await data.json();

        console.log(mutations);

        return {
            mutations
        };
    } catch (error) {
        console.log(error);
    }
}