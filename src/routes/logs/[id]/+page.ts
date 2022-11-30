import { PUBLIC_SERVER_URL } from '$env/static/public'

export async function load({params}) {
    try {
        const data = await fetch(`${PUBLIC_SERVER_URL}/mutations/${params.id}`)
        const mutation = await data.json();

        console.log(mutation);

        return {
            mutation
        };
    } catch (error) {
        console.log(error);
    }
}