import { PUBLIC_SERVER_URL } from '$env/static/public'

export async function load({fetch}) {

    const status = ['NotKilled', 'Killed', 'Running', 'Pending', 'Killed', 'Ignored'];
    const lengthMap = new Map<string, number>();

    try {
        await Promise.all(status.map(async (type: string) => {
            const data = await fetch(`${PUBLIC_SERVER_URL}/mutations/${type}/count`)
            lengthMap.set(type, await data.text());
        }));

        return {
            lengths: lengthMap
        };
    
    } catch (error) {
        console.log(error);
    }
}