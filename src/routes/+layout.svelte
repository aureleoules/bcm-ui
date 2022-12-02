<script lang="ts">
  import "../app.css";
  import {
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
  } from "flowbite-svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  let spanClass = "flex-1 ml-3 whitespace-nowrap";
  $: activeUrl = $page.url.pathname;
</script>

<div class="flex h-screen">
  <Sidebar asideClass="h-screen w-64">
    <SidebarWrapper class="h-screen">
      <SidebarGroup>
        <SidebarItem on:click={() => window.location = "/status/NotKilled"} label="Survived" {spanClass} active={activeUrl === "/status/NotKilled"}>
          <svelte:fragment slot="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-alert-triangle"
              ><path
                d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
              /><line x1="12" y1="9" x2="12" y2="13" /><line
                x1="12"
                y1="17"
                x2="12.01"
                y2="17"
              /></svg
            >
          </svelte:fragment>
          <!-- <svelte:fragment slot="subtext">
            <span
              class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-red-900 bg-red-400 rounded-full dark:bg-red-900 dark:text-red-200"
              >3</span
            >
          </svelte:fragment> -->
        </SidebarItem>
        <SidebarItem on:click={() => window.location = "/status/Running"} label="Running" {spanClass} active={activeUrl === "/status/Running"}>
          <svelte:fragment slot="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-loader"
              ><line x1="12" y1="2" x2="12" y2="6" /><line
                x1="12"
                y1="18"
                x2="12"
                y2="22"
              /><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" /><line
                x1="16.24"
                y1="16.24"
                x2="19.07"
                y2="19.07"
              /><line x1="2" y1="12" x2="6" y2="12" /><line
                x1="18"
                y1="12"
                x2="22"
                y2="12"
              /><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" /><line
                x1="16.24"
                y1="7.76"
                x2="19.07"
                y2="4.93"
              /></svg
            >
          </svelte:fragment>
          <!-- <svelte:fragment slot="subtext">
            <span
              class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-orange-600 bg-orange-200 rounded-full dark:bg-orange-900 dark:text-orange-200"
              >3</span
            >
          </svelte:fragment> -->
        </SidebarItem>
        <SidebarItem on:click={() => window.location = "/status/Pending"} label="Pending" {spanClass} active={activeUrl === "/status/Pending"}>
          <svelte:fragment slot="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-clock"
              ><circle cx="12" cy="12" r="10" /><polyline
                points="12 6 12 12 16 14"
              /></svg
            >
          </svelte:fragment>
          <!-- <svelte:fragment slot="subtext">
            <span
              class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
              >3</span
            >
          </svelte:fragment> -->
        </SidebarItem>
        <SidebarItem on:click={() => window.location = "/status/Killed"} label="Killed" {spanClass} active={activeUrl === "/status/Killed"}>
          <svelte:fragment slot="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-check-circle"
              ><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline
                points="22 4 12 14.01 9 11.01"
              /></svg
            >
          </svelte:fragment>
          <!-- <svelte:fragment slot="subtext">
            <span
              class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-green-600 bg-green-200 rounded-full dark:bg-green-900 dark:text-green-200"
              >3</span
            >
          </svelte:fragment> -->
        </SidebarItem>
        <SidebarItem on:click={() => window.location = "/status/Ignored"} label="Fixed" {spanClass} active={activeUrl === "/status/Ignored"}>
          <svelte:fragment slot="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-check"
              ><polyline points="20 6 9 17 4 12" /></svg
            >
          </svelte:fragment>
          <!-- <svelte:fragment slot="subtext">
            <span
              class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-green-600 bg-green-200 rounded-full dark:bg-green-900 dark:text-green-200"
              >3</span
            >
          </svelte:fragment> -->
        </SidebarItem>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
  <div class="flex-1 flex flex-col">
    <main class="flex-1 overflow-x-hidden overflow-y-auto">
      <div class="container mx-auto py-8">
        <slot />
      </div>
    </main>
  </div>

</div>
