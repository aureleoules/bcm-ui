<script lang="ts">
    import { PUBLIC_SERVER_URL } from '$env/static/public'
    export let data;
    const mutation = data.mutation;

    async function update_status(id, status) {
        const token = localStorage.getItem('token');
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
</script>

<table>
    <thead>
        <tr>
            <th>Key</th>
            <th>Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>ID</td>
            <td>{mutation.id}</td>
        </tr>
        <tr>
            <td>Status</td>
            <td>{mutation.status}</td>
        </tr>
        <tr>
            <td>Start time</td>
            <td>{mutation.start_time ? new Date(mutation.start_time * 1000).toLocaleString() : ""}</td>
        </tr>
        <tr>
            <td>End time</td>
            <td>{mutation.end_time ? new Date(mutation.end_time * 1000).toLocaleString() : ""}</td>
        </tr>
        <tr>
            <td>File</td>
            <td>{mutation.file}</td>
        </tr>
        <tr>
            <td>Branch</td>
            <td>{mutation.branch}</td>
        </tr>
        <tr>
            <td>PR Number</td>
            <td>{mutation.pr_number ? mutation.pr_number : "N/A"}</td>
        </tr>
    </tbody>
</table>

<button on:click={() => update_status(mutation.id, "Pending")}>Rerun</button>
<button on:click={() => update_status(mutation.id, "Ignored")}>Ignore</button>
<p>Patch:</p>
<pre><code>{mutation.patch}</code></pre>

<p>Logs:</p>
<h3>stdout</h3>
<pre>
    <code>
{mutation.stdout}
    </code>
</pre>
<h3>stderr</h3>
<pre>
    <code>  
{mutation.stderr}
    </code>
</pre>

<style lang="scss">
    table {
        width: 100%;
        border-collapse: collapse;
    }
    table, th, td {
        border: 1px solid black;
    }
    th, td {
        padding: 5px;
    }
    th {
        text-align: left;
    }
    pre {
        background-color: #eee;
        padding: 10px;
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

