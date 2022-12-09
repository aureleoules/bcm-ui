<script lang="ts">
    import { onMount } from 'svelte';
    import { A, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

    export let data: any; 
    let token: string = '';
    onMount(async () => {
        token = localStorage.getItem('token') || '';
    });

    function setToken() {
        const token = prompt("Please enter the token", "");
        if (token != null) {
            localStorage.setItem('token', token);
            window.location.reload();
        }
    }
</script>

<h1 class="text-2xl font-bold">{data.type} ({data.length})</h1>

<Table striped={true} hoverable={true}>
  <TableHead>
    <TableHeadCell>ID</TableHeadCell>
    <TableHeadCell>Branch</TableHeadCell>
    <TableHeadCell>Patch</TableHeadCell>
</TableHead>
<TableBody>
    {#each data.mutations as mutation}
      <TableBodyRow class="border-b dark:bg-gray-800 dark:border-gray-700">
        <TableBodyCell>
          <A class="" target="_blank" href="/mutations/{mutation.id}">{mutation.id}</A>
        </TableBodyCell>
        <TableBodyCell>{mutation.branch}</TableBodyCell>
        <TableBodyCell style="overflow: scroll">
            <small><pre><code>{mutation.file}

{mutation.patch}</code></pre></small>
        </TableBodyCell>
      </TableBodyRow>
    {/each}
    </TableBody>
</Table>
