<script lang="ts">
    let order: number = 2;

</script>

<div class="flex flex-col justify-center items-center">
    <div class="flex text-6xl text-center">
        <h1>Matrix exponentiator</h1>
    </div>
    <h1>why would you ever raise e to the power of a matrix</h1>
    <br>
    <br>
    <input type="number" bind:value={order} class="border-2 text-2xl" placeholder="Matrix length">
    <br>

</div>
