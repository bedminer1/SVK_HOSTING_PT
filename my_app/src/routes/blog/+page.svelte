<script>
	export let data

	let selectedItem
</script>

<div class="flex flex-col justify-center w-3/4 h-full text-2xl align-items">
	<h2 class="text-5xl text-center">Blog</h2>
	
	<form action="?/create" method="post" class="flex flex-col items-center gap-1 pb-2 mt-8 mb-8 border-b-2">
		<div class="flex items-center justify-center w-[60vh] h-5 gap-3 mb-0">
			<label for="blogname">blog title</label>
			<input type="text" required name="blogname" class="px-1 text-gray-800">
			<label for="read">Read</label>
			<input name="read" type="checkbox">
		</div>
		<button type="submit" class="pt-0 mt-0">Add</button>
	</form>

	<div>
		<ol class="flex justify-start ">
			{#each data?.records as record, index}
			<li class="w-48 mr-4 border-l-2">
				<input id={`blog-checkbox-${index}`} checked={selectedItem?.blogname === record.blogname} type="checkbox" value={JSON.stringify(record)} on:click={()=> selectedItem = (selectedItem?.blogname !== record.blogname)? record  : undefined}/>
				{`Blog Title: ${record.blogname} - Status: ${record.read ? 'read':'not read'}`}
			</li>			
			<hr>
			{/each}
		</ol>
		{#if selectedItem}
		<form action="?/update" method='post' class="flex flex-col items-center mt-10">
				<div class="flex items-center justify-center w-[60vh] h-5 gap-3 mb-0">
					<label for="blogname">blog title</label>
					<input type="text" required name="blogname" class="px-1 text-gray-800" value={selectedItem.blogname}>
					<label for="read">Read</label>
					<input type="checkbox" name="read">
					<input type="hidden" id='id' name="id" value={selectedItem.id}>
				</div>
				
				<button type="submit">Edit</button>
			</form>
			<form method="post" action="?/delete">
				<input type="hidden" id='id' name="id" value={selectedItem.id}>
				<button type="submit">Delete</button>
			</form>
			{/if}
	</div>
</div>