<div class="flex flex-col justify-center w-1/2 h-full align-items">
	<h2 class="text-5xl text-center">Blog</h2>
	
	<form action="?/create" method="post" class="flex flex-col gap-10 mt-2">
		<div class="flex items-center justify-start w-[60vh] h-5 gap-3">
			<label for="blogname">blog title</label>
			<input type="text" required name="blogname" class="px-1 text-gray-800">
			<label for="read">Read</label>
			<input type="checkbox">
		</div>
		<button type="submit">Add</button>
	</form>
</div>