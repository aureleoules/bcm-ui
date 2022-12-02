import { PUBLIC_SERVER_URL } from '$env/static/public'

export async function load({fetch, params}) {
    try {
        const data = await fetch(`${PUBLIC_SERVER_URL}/mutations/${params.id}`)
        const mutation = await data.json();

        return {
            mutation
        };
    } catch (error) {
        console.log(error);
    }
}