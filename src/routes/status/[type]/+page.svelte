<script lang="ts">
  import { PUBLIC_SERVER_URL } from '$env/static/public';
    import { A, Label, Select, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

    export let data: any; 
    let mutations = data.mutations;
    let file = '';

    async function mutationsByFile(file: string) {
        const resp = await fetch(`${PUBLIC_SERVER_URL}/mutations/${data.type}?file=${file}`);
        mutations = await resp.json();
    }

    $: if (file) {
        mutationsByFile(file);
    }
</script>

<Label>Select a file
  <Select class="mt-2" items={data.files.sort().map(f => (
    {
      value: f,
      name: f
    }
  ))} bind:value={file} />
</Label>
<h1 class="text-2xl font-bold">{data.type} ({mutations.length})</h1>

<Table striped={true} hoverable={true}>
  <TableHead>
    <TableHeadCell>ID</TableHeadCell>
    <TableHeadCell>Branch/PR</TableHeadCell>
    <TableHeadCell>Patch</TableHeadCell>
</TableHead>
<TableBody>
    {#each mutations as mutation}
      <TableBodyRow class="border-b dark:bg-gray-800 dark:border-gray-700">
        <TableBodyCell>
          <A class="" target="_blank" href="/mutations/{mutation.id}">{mutation.id}</A>
        </TableBodyCell>
        <TableBodyCell>
          {#if mutation.pr_number}
            <a target="_blank" rel="noreferrer" href={`https://github.com/bitcoin/bitcoin/pull/${mutation.pr_number}`}>#{mutation.pr_number}</a>
          {:else}
            {mutation.branch}
          {/if}
        </TableBodyCell>
        <TableBodyCell style="overflow: scroll">
            <small><pre><code>{mutation.file}

{mutation.patch}</code></pre></small>
        </TableBodyCell>
      </TableBodyRow>
    {/each}
    </TableBody>
</Table>
