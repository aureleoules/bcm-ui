
import { PUBLIC_SERVER_URL } from '$env/static/public'

export async function load({fetch, params}) {
    try {
        const data = await fetch(`${PUBLIC_SERVER_URL}/mutations/${params.type}`)
        const files = await fetch(`${PUBLIC_SERVER_URL}/mutations/${params.type}/files`)

        const mutations = await data.json();

        return {
            mutations: mutations,
            length: mutations.length,
            type: params.type,
            files: await files.json()
        };
    } catch (error) {
        console.log(error);
    }
}