
import { PUBLIC_SERVER_URL } from '$env/static/public'

export async function load() {
    try {
        const data = await fetch(`${PUBLIC_SERVER_URL}/mutations`)
        const mutations = await data.json();

        // sort mutations by date
        mutations.sort((a, b) => {
            return new Date(b.end_time) - new Date(a.end_time);
        });

        const mutationPerStatus = mutations.reduce((acc, mutation) => {
            const status = mutation.status;
            if (!acc[status]) {
                acc[status] = [];
            }
            acc[status].push(mutation);
            return acc;
        }, {});

        return {
            mutations: mutationPerStatus
        };
    } catch (error) {
        console.log(error);
    }
}