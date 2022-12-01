<script lang="ts">
    import { PUBLIC_SERVER_URL } from '$env/static/public'
    import { Modals, closeModal } from 'svelte-modals'
    import Popup from '$lib/components/Popup.svelte';
    export let data: any; 
    import { openModal } from 'svelte-modals'
  import { onMount } from 'svelte';

    let token = undefined;
    onMount(async () => {
        token = localStorage.getItem('token');
    });
    
    async function update_status(id, status) {
        if(confirm("Are you sure you want to update the status of this mutation?")) {
            const r = await fetch(`${PUBLIC_SERVER_URL}/mutations/${id}`, {
                method: 'POST',
                body: JSON.stringify({
                    mutation_id: id,
                    status: status
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            });
            const resp = await r.text();
            window.location.reload();
        }
    }

    function openPatch(patch: String) {
        openModal(Popup, { patch })
    }

    function setToken() {
        const token = prompt("Please enter the token", "");
        if (token != null) {
            localStorage.setItem('token', token);
            window.location.reload();
        }
    }

</script>

<h1>Bitcoin Core Mutations</h1> 
<button on:click={setToken}>Set Token</button> {#if token}
Authenticated
{:else}
Not Authenticated
{/if}

{#each ["NotKilled", "Running", "Pending", "Killed", "Ignored"] as status}
    <h2>{status} ({data.mutations[status].length})</h2>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Status</th>
                <th>Time Start</th>
                <th>Time End</th>
                <th>File</th>
                <th>Branch</th>
                <th>PR Number</th>
                <th>Patch</th>
                <th>Logs</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {#each data.mutations[status] as mutation}
                <tr>
                    <td>{mutation.id}</td>
                    <td>{mutation.status}</td>
                    <td>{mutation.start_time ? new Date(mutation.start_time * 1000).toLocaleString() : ""}</td>
                    <td>{mutation.end_time ? new Date(mutation.end_time * 1000).toLocaleString() : ""}</td>
                    <td>{mutation.file}</td>
                    <td>{mutation.branch}</td>
                    <td>{mutation.pr_number ? mutation.pr_number : "N/A"}</td>
                    <td>
                        <button on:click={() => {
                            openPatch(mutation.patch);
                        }}>
                            Patch
                        </button>
                    </td>
                    <td>
                        <a target="_blank" href={"/logs/" + mutation.id}>Logs</a>
                    </td>
                    <td>
                        <button on:click={() => update_status(mutation.id, "Pending")}>Rerun</button>
                        <button on:click={() => update_status(mutation.id, "Ignored")}>Ignore</button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
{/each}

<Modals>
  <div
    slot="backdrop"
    class="backdrop"
    on:click={closeModal}
  />
</Modals>


<style lang="scss">
    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        padding: 10px;
        border: 1px solid #ddd;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    tr:hover {
        background-color: #ddd;
    }

    th {
        background-color: #2c2c2c;
        color: white;
    }

    a {
        color: #4CAF50;
        cursor: pointer;
    }

    a:hover {
        color: #4CAF50;
        text-decoration: underline;
    }

    a:active {
        color: #4CAF50;
        text-decoration: underline;
    }

    .backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0,0,0,0.50)
    }

    button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;

        &:hover {
            background-color: #45a049;
        }

        &:active {
            background-color: #45a049;
        }

        &:focus {
            outline: none;
        }

        
    }

</style> 