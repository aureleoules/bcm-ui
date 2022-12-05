
import { PUBLIC_SERVER_URL } from '$env/static/public'

export async function load({fetch, params}) {
    try {
        const data = await fetch(`${PUBLIC_SERVER_URL}/mutations?status=${params.type}`)
        const mutations = await data.json();

        // sort mutations by date
        mutations.sort((a, b) => {
            return new Date(b.end_time) - new Date(a.end_time);
        });


        return {
            mutations: mutations,
            length: mutations.length,
            type: params.type
        };
    } catch (error) {
        console.log(error);
    }
}